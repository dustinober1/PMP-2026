<template>
  <div class="exam">
    <div class="exam-header">
      <div>
        <h2 class="exam-title">{{ examTitle }}</h2>
        <div class="exam-subtitle">
          <span>{{ totalQuestions }} questions</span>
          <span class="dot">•</span>
          <span>{{ formatDuration(totalSeconds) }}</span>
          <span class="dot">•</span>
          <span>
            Section {{ activeSectionIndex + 1 }} / {{ sections.length }}
            (Q {{ activeQuestionGlobalIndex + 1 }} / {{ totalQuestions }})
          </span>
        </div>
      </div>

      <div class="exam-timer" :class="timerClass">
        <div class="timer-label">Time Remaining</div>
        <div class="timer-value">{{ formatClock(remainingSeconds) }}</div>
      </div>
    </div>

    <div v-if="!started" class="start-panel">
      <div class="start-card">
        <h3>Simulation Mode</h3>
        <ul>
          <li>Questions and answer choices are randomized (deterministic per attempt)</li>
          <li>3 sections: 60 / 60 / 65 questions</li>
          <li>2 optional breaks (5 minutes each) after sections 1 and 2</li>
          <li>Section locking: once submitted, you cannot return</li>
        </ul>

        <div class="start-actions">
          <button class="btn primary" @click="startNew">Start New Attempt</button>
          <button v-if="hasSavedAttempt" class="btn" @click="resume">Resume Saved Attempt</button>
        </div>
      </div>
    </div>

    <div v-else-if="mode === 'break'" class="break-panel">
      <div class="break-card">
        <h3>Break {{ completedBreaks + 1 }} of 2</h3>
        <p>Timer is paused. You cannot review previous sections.</p>
        <div class="break-timer">{{ formatClock(breakRemainingSeconds) }}</div>
        <div class="start-actions">
          <button class="btn primary" @click="endBreakEarly">End Break</button>
        </div>
      </div>
    </div>

    <div v-else-if="mode === 'complete'" class="results-panel">
      <div class="results-card">
        <h3>Results</h3>
        <div class="results-summary">
          <div class="metric">
            <div class="metric-label">Score</div>
            <div class="metric-value" :class="scoreClass">{{ scorePercent }}%</div>
          </div>
          <div class="metric">
            <div class="metric-label">Correct</div>
            <div class="metric-value">{{ correctCount }} / {{ totalQuestions }}</div>
          </div>
          <div class="metric">
            <div class="metric-label">Time Used</div>
            <div class="metric-value">{{ formatDuration(elapsedSeconds) }}</div>
          </div>
        </div>

        <!-- Domain Performance Analysis -->
        <div class="performance-analysis">
          <h4>📊 Performance by Domain</h4>
          <div class="analysis-grid">
            <div v-for="d in domainStats" :key="d.domain" class="analysis-item">
              <div class="analysis-header">
                <span class="analysis-domain">{{ formatDomainName(d.domain) }}</span>
                <span class="analysis-score" :class="getScoreClass(d.percent)">{{ d.percent }}%</span>
              </div>
              <div class="analysis-bar">
                <div class="analysis-bar-fill" :style="{ width: d.percent + '%' }" :class="getScoreClass(d.percent)"></div>
              </div>
              <div class="analysis-detail">{{ d.correct }} / {{ d.total }} correct</div>
            </div>
          </div>
        </div>

        <!-- Strong/Weak Areas -->
        <div class="strengths-weaknesses">
          <div class="sw-column strong">
            <h4>💪 Strong Areas</h4>
            <ul v-if="strongAreas.length">
              <li v-for="area in strongAreas" :key="area.key">
                <strong>{{ area.label }}</strong> - {{ area.percent }}% ({{ area.correct }}/{{ area.total }})
              </li>
            </ul>
            <p v-else class="muted">Complete more questions to identify strengths.</p>
          </div>
          <div class="sw-column weak">
            <h4>📚 Areas to Improve</h4>
            <ul v-if="weakAreas.length">
              <li v-for="area in weakAreas" :key="area.key">
                <strong>{{ area.label }}</strong> - {{ area.percent }}% ({{ area.correct }}/{{ area.total }})
              </li>
            </ul>
            <p v-else class="muted">Great job! No significant weak areas detected.</p>
          </div>
        </div>

        <!-- Study Recommendations -->
        <div class="study-recommendations" v-if="weakAreas.length">
          <h4>📖 Recommended Study Focus</h4>
          <p>Based on your performance, consider reviewing these chapters:</p>
          <ul>
            <li v-for="rec in studyRecommendations" :key="rec">{{ rec }}</li>
          </ul>
        </div>

        <details class="review">
          <summary>Review All Questions</summary>
          <div class="review-list">
            <div v-for="(q, idx) in session.questions" :key="q.id" class="review-item">
              <div class="review-q">
                <div class="review-q-title">Q{{ idx + 1 }} ({{ q.domain }}, {{ q.methodology }})</div>
                <div class="review-q-text">{{ q.questionText }}</div>
                <div class="review-q-scenario" v-if="q.scenario">{{ q.scenario }}</div>
              </div>

              <div class="review-a">
                <div>
                  <strong>Your answer:</strong>
                  <span :class="isCorrect(idx) ? 'ok' : 'bad'">{{ userAnswerText(idx) }}</span>
                </div>
                <div>
                  <strong>Correct:</strong>
                  <span class="ok">{{ correctAnswerText(idx) }}</span>
                </div>
                <details class="remediation" v-if="q.remediation">
                  <summary>Remediation</summary>
                  <div class="rem-line"><strong>Core Logic:</strong> {{ q.remediation.coreLogic }}</div>
                  <div class="rem-line"><strong>PMI Mindset:</strong> {{ q.remediation.pmiMindset }}</div>
                  <div class="rem-line"><strong>The Trap:</strong> {{ q.remediation.theTrap }}</div>
                  <div class="rem-line"><strong>Source:</strong> {{ q.remediation.sourceLink }}</div>
                </details>
              </div>
            </div>
          </div>
        </details>

        <div class="start-actions">
          <button class="btn" @click="resetAll">Start Fresh Attempt</button>
        </div>
      </div>
    </div>

    <div v-else class="exam-body">
      <div class="exam-toolbar">
        <div class="toolbar-left">
          <button class="btn" @click="prevQuestion" :disabled="!canGoPrev">Previous</button>
          <button class="btn" @click="nextQuestion" :disabled="!canGoNext">Next</button>
          <button class="btn" @click="clearAnswer" :disabled="selectedIndex === null">Clear</button>
        </div>

        <div class="toolbar-right">
          <button class="btn" @click="toggleFlag">
            {{ isFlagged(activeQuestionGlobalIndex) ? 'Unflag' : 'Flag' }}
          </button>
          <button class="btn primary" @click="openSectionReview">Review Section</button>
        </div>
      </div>

      <div class="question-card" v-if="activeQuestion">
        <div class="question-meta">
          <span class="pill">Domain: {{ activeQuestion.domain }}</span>
          <span class="pill">Method: {{ activeQuestion.methodology }}</span>
          <span class="pill">Task: {{ activeQuestion.taskNumber }} ({{ activeQuestion.task }})</span>
          <span class="pill" v-if="activeQuestion.enablerDescription">Enabler: {{ activeQuestion.enablerDescription }}</span>
        </div>

        <div class="scenario" v-if="activeQuestion.scenario">
          <div class="scenario-label">Scenario</div>
          <div class="scenario-text">{{ activeQuestion.scenario }}</div>
        </div>

        <div class="stem">
          <div class="stem-label">Question</div>
          <div class="stem-text">{{ activeQuestion.questionText }}</div>
        </div>

        <div class="answers">
          <button
            v-for="(a, idx) in activeQuestion.answers"
            :key="idx"
            class="answer"
            :class="{ selected: selectedIndex === idx }"
            @click="selectAnswer(idx)"
          >
            <span class="letter">{{ String.fromCharCode(65 + idx) }}.</span>
            <span>{{ a.text }}</span>
          </button>
        </div>
      </div>

      <div v-if="showSectionReview" class="modal-overlay" @click.self="closeSectionReview">
        <div class="modal">
          <h3>Section {{ activeSectionIndex + 1 }} Review</h3>
          <p class="muted">
            Review your flagged/unanswered items. Once you submit this section, you cannot return.
          </p>

          <div class="grid">
            <button
              v-for="n in sectionQuestionCount"
              :key="n"
              class="grid-btn"
              :class="gridButtonClass(sectionStartIndex + (n - 1))"
              @click="jumpTo(sectionStartIndex + (n - 1))"
            >
              {{ sectionStartIndex + n }}
            </button>
          </div>

          <div class="start-actions">
            <button class="btn" @click="closeSectionReview">Back</button>
            <button class="btn primary" @click="submitSection">Submit Section</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

const props = defineProps({
  exam: {
    type: Object,
    required: true
  },
  // Allows overriding defaults for different exams.
  totalMinutes: {
    type: Number,
    default: 240
  }
})

// ---- Constants / helpers

const totalSeconds = computed(() => props.totalMinutes * 60)

// Real-exam simulation structure: 3 sections with 2 breaks.
// We use question-count-based sections since our bank isn't case-study grouped.
const sections = [60, 60, 65]

function slugify(str) {
  return String(str || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function mulberry32(seed) {
  let t = seed >>> 0
  return function () {
    t += 0x6D2B79F5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

function shuffleInPlace(arr, rng) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function formatClock(seconds) {
  const s = Math.max(0, seconds)
  const mm = String(Math.floor(s / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

function formatDuration(seconds) {
  const s = Math.max(0, seconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  return h > 0 ? `${h}h ${m}m` : `${m}m`
}

// ---- Persistence keys

const examId = computed(() => props.exam?.id || slugify(props.exam?.title) || 'exam')
const storageKey = computed(() => `exam-sim-${examId.value}`)

// ---- State

const started = ref(false)
const mode = ref('exam') // 'exam' | 'break' | 'complete'
const showSectionReview = ref(false)

const session = reactive({
  seed: null,
  questions: []
})

// Answers stored as selected answer index in *shuffled* answer list.
const answers = ref([]) // length = totalQuestions
const flagged = ref(new Set())

const activeSectionIndex = ref(0)
const activeQuestionGlobalIndex = ref(0)
const sectionSubmitted = ref([false, false, false])

const elapsedSeconds = ref(0)
const breakRemainingSeconds = ref(0)
const completedBreaks = ref(0)

let examTimer = null
let breakTimer = null

const totalQuestions = computed(() => (props.exam?.questions || []).length)
const examTitle = computed(() => props.exam?.title || 'Practice Exam')

const hasSavedAttempt = computed(() => {
  if (typeof window === 'undefined') return false
  return Boolean(window.localStorage?.getItem(storageKey.value))
})

const remainingSeconds = computed(() => totalSeconds.value - elapsedSeconds.value)

const timerClass = computed(() => {
  if (mode.value !== 'exam') return 'paused'
  if (remainingSeconds.value <= 10 * 60) return 'danger'
  if (remainingSeconds.value <= 30 * 60) return 'warn'
  return 'ok'
})

const sectionStartIndex = computed(() => {
  let start = 0
  for (let i = 0; i < activeSectionIndex.value; i++) start += sections[i]
  return start
})

const sectionQuestionCount = computed(() => sections[activeSectionIndex.value])

const activeQuestion = computed(() => session.questions[activeQuestionGlobalIndex.value])
const selectedIndex = computed(() => answers.value[activeQuestionGlobalIndex.value] ?? null)

const canGoPrev = computed(() => activeQuestionGlobalIndex.value > sectionStartIndex.value)
const canGoNext = computed(() => activeQuestionGlobalIndex.value < sectionStartIndex.value + sectionQuestionCount.value - 1)

// ---- Scoring

const correctCount = computed(() => {
  let c = 0
  for (let i = 0; i < session.questions.length; i++) {
    if (isCorrect(i)) c++
  }
  return c
})

const scorePercent = computed(() => {
  if (!totalQuestions.value) return 0
  return Math.round((correctCount.value / totalQuestions.value) * 100)
})

const scoreClass = computed(() => {
  const pct = scorePercent.value
  if (pct >= 80) return 'score-excellent'
  if (pct >= 65) return 'score-pass'
  if (pct >= 50) return 'score-borderline'
  return 'score-needs-work'
})

// Domain and Task Performance Analysis
const domainStats = computed(() => {
  const stats = {}
  for (let i = 0; i < session.questions.length; i++) {
    const q = session.questions[i]
    const domain = q.domain || 'unknown'
    if (!stats[domain]) stats[domain] = { correct: 0, total: 0 }
    stats[domain].total++
    if (isCorrect(i)) stats[domain].correct++
  }
  return Object.entries(stats).map(([domain, s]) => ({
    domain,
    correct: s.correct,
    total: s.total,
    percent: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
  })).sort((a, b) => b.percent - a.percent)
})

const taskStats = computed(() => {
  const stats = {}
  for (let i = 0; i < session.questions.length; i++) {
    const q = session.questions[i]
    const key = `${q.domain}-${q.task || 'unknown'}`
    const label = `${formatDomainName(q.domain)} - ${q.task || 'unknown'}`
    if (!stats[key]) stats[key] = { key, label, correct: 0, total: 0 }
    stats[key].total++
    if (isCorrect(i)) stats[key].correct++
  }
  return Object.values(stats).map(s => ({
    ...s,
    percent: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
  }))
})

const strongAreas = computed(() => {
  return taskStats.value
    .filter(s => s.total >= 3 && s.percent >= 80)
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 5)
})

const weakAreas = computed(() => {
  return taskStats.value
    .filter(s => s.total >= 3 && s.percent < 60)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 5)
})

const studyRecommendations = computed(() => {
  const domainToChapter = {
    'people': 'Chapter 3: Team Leadership & Chapter 4: Stakeholder Communication',
    'process': 'Chapter 6: Project Planning & Chapter 9: Monitoring and Controlling',
    'business': 'Chapter 2: Strategic Alignment & Chapter 7: Risk and Quality'
  }
  const seen = new Set()
  const recs = []
  for (const area of weakAreas.value) {
    const domain = area.key.split('-')[0]
    if (!seen.has(domain) && domainToChapter[domain]) {
      seen.add(domain)
      recs.push(domainToChapter[domain])
    }
  }
  return recs
})

function formatDomainName(domain) {
  const names = {
    'people': 'People',
    'process': 'Process',
    'business': 'Business Environment'
  }
  return names[domain] || domain
}

function getScoreClass(percent) {
  if (percent >= 80) return 'score-excellent'
  if (percent >= 65) return 'score-pass'
  if (percent >= 50) return 'score-borderline'
  return 'score-needs-work'
}

function isCorrect(idx) {
  const q = session.questions[idx]
  const sel = answers.value[idx]
  if (sel === null || sel === undefined) return false
  return Boolean(q?.answers?.[sel]?.isCorrect)
}

function userAnswerText(idx) {
  const q = session.questions[idx]
  const sel = answers.value[idx]
  if (sel === null || sel === undefined) return '(unanswered)'
  return q?.answers?.[sel]?.text || '(unanswered)'
}

function correctAnswerText(idx) {
  const q = session.questions[idx]
  const ans = (q?.answers || []).find(a => a.isCorrect)
  return ans?.text || '(missing correct answer)'
}

// ---- Exam mechanics

function buildSessionQuestions(seed) {
  const rng = mulberry32(seed)

  // Shuffle question order
  const qOrder = Array.from({ length: props.exam.questions.length }, (_, i) => i)
  shuffleInPlace(qOrder, rng)

  const out = qOrder.map((qi) => {
    const q = props.exam.questions[qi]
    const answersShuffled = (q.answers || []).map(a => ({ ...a }))
    shuffleInPlace(answersShuffled, rng)
    return {
      ...q,
      answers: answersShuffled
    }
  })

  return out
}

function startTimers() {
  stopTimers()
  examTimer = setInterval(() => {
    if (mode.value !== 'exam') return
    elapsedSeconds.value++
    if (elapsedSeconds.value >= totalSeconds.value) {
      finalizeExam()
    }
  }, 1000)
}

function stopTimers() {
  if (examTimer) {
    clearInterval(examTimer)
    examTimer = null
  }
  if (breakTimer) {
    clearInterval(breakTimer)
    breakTimer = null
  }
}

function startBreak() {
  mode.value = 'break'
  breakRemainingSeconds.value = 5 * 60
  stopTimers()
  breakTimer = setInterval(() => {
    breakRemainingSeconds.value--
    if (breakRemainingSeconds.value <= 0) {
      endBreakEarly()
    }
  }, 1000)
}

function endBreakEarly() {
  completedBreaks.value++
  mode.value = 'exam'
  stopTimers()
  startTimers()
  persist()
}

function finalizeExam() {
  mode.value = 'complete'
  started.value = true
  stopTimers()
  clearSavedAttempt()
}

function startNew() {
  clearSavedAttempt()
  const seed = Math.floor(Math.random() * 2 ** 31)
  session.seed = seed
  session.questions = buildSessionQuestions(seed)

  answers.value = Array.from({ length: session.questions.length }, () => null)
  flagged.value = new Set()
  activeSectionIndex.value = 0
  activeQuestionGlobalIndex.value = 0
  sectionSubmitted.value = [false, false, false]
  elapsedSeconds.value = 0
  completedBreaks.value = 0

  started.value = true
  mode.value = 'exam'
  startTimers()
  persist()
}

function resume() {
  const saved = loadSavedAttempt()
  if (!saved) return

  session.seed = saved.seed
  session.questions = buildSessionQuestions(saved.seed)
  answers.value = saved.answers
  flagged.value = new Set(saved.flagged || [])
  activeSectionIndex.value = saved.activeSectionIndex
  activeQuestionGlobalIndex.value = saved.activeQuestionGlobalIndex
  sectionSubmitted.value = saved.sectionSubmitted
  elapsedSeconds.value = saved.elapsedSeconds
  completedBreaks.value = saved.completedBreaks || 0

  started.value = true
  mode.value = saved.mode || 'exam'
  if (mode.value === 'break') {
    breakRemainingSeconds.value = saved.breakRemainingSeconds || 5 * 60
    startBreak()
  } else {
    startTimers()
  }
}

function resetAll() {
  stopTimers()
  started.value = false
  mode.value = 'exam'
  session.seed = null
  session.questions = []
  answers.value = []
  flagged.value = new Set()
  activeSectionIndex.value = 0
  activeQuestionGlobalIndex.value = 0
  sectionSubmitted.value = [false, false, false]
  elapsedSeconds.value = 0
  completedBreaks.value = 0
  breakRemainingSeconds.value = 0
  clearSavedAttempt()
}

function selectAnswer(idx) {
  answers.value[activeQuestionGlobalIndex.value] = idx
  persist()
}

function clearAnswer() {
  answers.value[activeQuestionGlobalIndex.value] = null
  persist()
}

function nextQuestion() {
  if (!canGoNext.value) return
  activeQuestionGlobalIndex.value++
  persist()
}

function prevQuestion() {
  if (!canGoPrev.value) return
  activeQuestionGlobalIndex.value--
  persist()
}

function toggleFlag() {
  const idx = activeQuestionGlobalIndex.value
  if (flagged.value.has(idx)) flagged.value.delete(idx)
  else flagged.value.add(idx)
  // Force reactivity (Set mutations are not tracked deeply)
  flagged.value = new Set(flagged.value)
  persist()
}

function isFlagged(idx) {
  return flagged.value.has(idx)
}

function openSectionReview() {
  showSectionReview.value = true
}

function closeSectionReview() {
  showSectionReview.value = false
}

function gridButtonClass(globalIdx) {
  const answered = answers.value[globalIdx] !== null && answers.value[globalIdx] !== undefined
  const flaggedLocal = flagged.value.has(globalIdx)
  const current = globalIdx === activeQuestionGlobalIndex.value
  return {
    answered,
    flagged: flaggedLocal,
    current
  }
}

function jumpTo(globalIdx) {
  // Only allow jumps within current section
  const start = sectionStartIndex.value
  const end = start + sectionQuestionCount.value - 1
  if (globalIdx < start || globalIdx > end) return
  activeQuestionGlobalIndex.value = globalIdx
  showSectionReview.value = false
  persist()
}

function submitSection() {
  const start = sectionStartIndex.value
  const end = start + sectionQuestionCount.value - 1
  let unanswered = 0
  for (let i = start; i <= end; i++) {
    if (answers.value[i] === null || answers.value[i] === undefined) unanswered++
  }

  const ok = unanswered === 0
    ? true
    : window.confirm(`You have ${unanswered} unanswered question(s) in this section. Submit anyway?`)

  if (!ok) return

  sectionSubmitted.value[activeSectionIndex.value] = true
  showSectionReview.value = false

  // Move to break or next section or finish
  if (activeSectionIndex.value === 0 || activeSectionIndex.value === 1) {
    activeSectionIndex.value++
    activeQuestionGlobalIndex.value = sectionStartIndex.value
    startBreak()
  } else {
    finalizeExam()
  }

  persist()
}

// ---- Persistence

function persist() {
  if (typeof window === 'undefined' || !window.localStorage) return
  if (!started.value) return
  if (mode.value === 'complete') return

  const payload = {
    seed: session.seed,
    answers: answers.value,
    flagged: Array.from(flagged.value),
    activeSectionIndex: activeSectionIndex.value,
    activeQuestionGlobalIndex: activeQuestionGlobalIndex.value,
    sectionSubmitted: sectionSubmitted.value,
    elapsedSeconds: elapsedSeconds.value,
    mode: mode.value,
    breakRemainingSeconds: breakRemainingSeconds.value,
    completedBreaks: completedBreaks.value,
    savedAt: new Date().toISOString()
  }
  window.localStorage.setItem(storageKey.value, JSON.stringify(payload))
}

function loadSavedAttempt() {
  if (typeof window === 'undefined' || !window.localStorage) return null
  const raw = window.localStorage.getItem(storageKey.value)
  if (!raw) return null
  try {
    const p = JSON.parse(raw)
    return p
  } catch {
    return null
  }
}

function clearSavedAttempt() {
  if (typeof window === 'undefined' || !window.localStorage) return
  window.localStorage.removeItem(storageKey.value)
}

// ---- Lifecycle

onMounted(() => {
  // Ensure expected length
  if (!props.exam?.questions?.length) return
  // Don't auto-resume; show explicit button.
})

onBeforeUnmount(() => {
  stopTimers()
})

// Persist on important changes
watch([activeQuestionGlobalIndex, activeSectionIndex, elapsedSeconds, mode], () => {
  persist()
})

// Expose helpers to template
// eslint-disable-next-line no-unused-vars
const _fmtClock = formatClock
</script>

<style scoped>
.exam {
  margin: 1.5rem 0;
}

.exam-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.exam-title {
  margin: 0;
}

.exam-subtitle {
  margin-top: 0.25rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.dot {
  margin: 0 0.5rem;
}

.exam-timer {
  min-width: 160px;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
}

.exam-timer.ok {
  border-color: rgba(16, 185, 129, 0.4);
}

.exam-timer.warn {
  border-color: rgba(245, 158, 11, 0.5);
}

.exam-timer.danger {
  border-color: rgba(239, 68, 68, 0.6);
}

.exam-timer.paused {
  opacity: 0.7;
}

.timer-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.timer-value {
  font-size: 1.4rem;
  font-weight: 700;
}

.start-panel,
.break-panel,
.results-panel {
  margin-top: 1rem;
}

.start-card,
.break-card,
.results-card {
  padding: 1.25rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.start-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.6rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn.primary {
  background: var(--vp-c-brand);
  color: white;
  border-color: transparent;
}

.exam-body {
  margin-top: 1rem;
}

.exam-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  margin-bottom: 1rem;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.question-card {
  padding: 1.25rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
}

.question-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.pill {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.scenario,
.stem {
  padding: 0.75rem;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  margin-bottom: 1rem;
}

.scenario-label,
.stem-label {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.answers {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.answer {
  display: flex;
  gap: 0.75rem;
  text-align: left;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  cursor: pointer;
}

.answer:hover {
  border-color: var(--vp-c-brand);
}

.answer.selected {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-brand-soft);
}

.letter {
  font-weight: 700;
  color: var(--vp-c-brand);
  min-width: 22px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal {
  width: min(900px, 100%);
  max-height: 80vh;
  overflow: auto;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  padding: 1rem;
}

.muted {
  color: var(--vp-c-text-2);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
  gap: 0.5rem;
  margin: 1rem 0;
}

.grid-btn {
  padding: 0.5rem 0;
  border-radius: 10px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}

.grid-btn.answered {
  border-color: rgba(16, 185, 129, 0.6);
}

.grid-btn.flagged {
  border-color: rgba(245, 158, 11, 0.7);
}

.grid-btn.current {
  border-color: var(--vp-c-brand);
}

.break-timer {
  font-size: 2rem;
  font-weight: 800;
  margin: 1rem 0;
}

.results-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin: 1rem 0;
}

.metric {
  padding: 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
}

.metric-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 800;
}

.review {
  margin-top: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 0.75rem;
  background: var(--vp-c-bg);
}

.review-list {
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.review-item {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 0.75rem;
  background: var(--vp-c-bg-soft);
}

.review-q-title {
  font-weight: 700;
}

.review-q-text {
  margin-top: 0.25rem;
}

.review-q-scenario {
  margin-top: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.review-a {
  margin-top: 0.75rem;
}

.ok {
  color: #047857;
}

.bad {
  color: #b91c1c;
}

.remediation {
  margin-top: 0.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 0.5rem;
  background: var(--vp-c-bg);
}

.rem-line {
  margin: 0.25rem 0;
}

/* Performance Analysis Styles */
.performance-analysis {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
}

.performance-analysis h4 {
  margin: 0 0 1rem 0;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.analysis-item {
  padding: 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.analysis-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.analysis-domain {
  font-weight: 600;
}

.analysis-score {
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}

.analysis-bar {
  height: 8px;
  border-radius: 4px;
  background: var(--vp-c-divider);
  overflow: hidden;
}

.analysis-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.analysis-detail {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

/* Strength/Weakness Styles */
.strengths-weaknesses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.sw-column {
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
}

.sw-column.strong {
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.3);
}

.sw-column.weak {
  background: rgba(245, 158, 11, 0.08);
  border-color: rgba(245, 158, 11, 0.3);
}

.sw-column h4 {
  margin: 0 0 0.75rem 0;
}

.sw-column ul {
  margin: 0;
  padding-left: 1.25rem;
}

.sw-column li {
  margin: 0.5rem 0;
}

/* Study Recommendations */
.study-recommendations {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
}

.study-recommendations h4 {
  margin: 0 0 0.5rem 0;
}

.study-recommendations p {
  margin: 0 0 0.75rem 0;
  color: var(--vp-c-text-2);
}

.study-recommendations ul {
  margin: 0;
  padding-left: 1.25rem;
}

/* Score Color Classes */
.score-excellent {
  color: #047857;
  background: rgba(16, 185, 129, 0.15);
}

.score-pass {
  color: #0369a1;
  background: rgba(14, 165, 233, 0.15);
}

.score-borderline {
  color: #b45309;
  background: rgba(245, 158, 11, 0.15);
}

.score-needs-work {
  color: #b91c1c;
  background: rgba(239, 68, 68, 0.15);
}

.metric-value.score-excellent,
.metric-value.score-pass,
.metric-value.score-borderline,
.metric-value.score-needs-work {
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  display: inline-block;
}
</style>

