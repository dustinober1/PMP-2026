<template>
  <div class="quiz-container">
    <div class="quiz-header">
      <h3>{{ title }}</h3>
      <div class="quiz-progress">
        <span>Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}</span>
        <ProgressBar :progress="(currentQuestionIndex + 1) / questions.length * 100" />
      </div>
    </div>

    <div v-if="currentQuestion" class="question-container">
      <div class="quiz-question">
        {{ currentQuestion.text }}
      </div>

      <div class="quiz-options">
        <div
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          class="quiz-option"
          :class="{
            'selected': selectedOption === index,
            'correct': showFeedback && index === currentQuestion.correct,
            'incorrect': showFeedback && selectedOption === index && index !== currentQuestion.correct
          }"
          @click="selectOption(index)"
        >
          <span class="option-letter">{{ String.fromCharCode(65 + index) }}.</span>
          {{ option }}
        </div>
      </div>

      <div v-if="showFeedback" class="quiz-feedback" :class="{ correct: isCorrect, incorrect: !isCorrect }">
        <div class="feedback-title">
          {{ isCorrect ? '✓ Correct!' : '✗ Incorrect' }}
        </div>
        <div class="feedback-explanation">
          {{ currentQuestion.explanation }}
        </div>
        <div v-if="currentQuestion.reference" class="feedback-reference">
          <strong>Reference:</strong> {{ currentQuestion.reference }}
        </div>
      </div>

      <div class="quiz-actions">
        <button
          v-if="!showFeedback"
          class="quiz-button primary"
          @click="submitAnswer"
          :disabled="selectedOption === null"
        >
          Submit Answer
        </button>

        <button
          v-if="showFeedback"
          class="quiz-button primary"
          @click="nextQuestion"
        >
          {{ currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results' }}
        </button>

        <button
          v-if="showFeedback && !showResults"
          class="quiz-button secondary"
          @click="resetQuestion"
        >
          Try Again
        </button>
      </div>
    </div>

    <div v-if="showResults" class="results-container">
      <h3>Quiz Results</h3>
      <div class="results-summary">
        <div class="score-circle">
          <span class="score-percentage">{{ Math.round(scorePercentage) }}%</span>
          <span class="score-label">Score</span>
        </div>
        <div class="score-details">
          <p>You answered {{ correctAnswers }} out of {{ questions.length }} questions correctly.</p>
          <div v-if="scorePercentage >= 80" class="result-message success">
            🎉 Excellent work! You're ready for the exam.
          </div>
          <div v-else-if="scorePercentage >= 60" class="result-message moderate">
            👍 Good job! Consider reviewing the areas you missed.
          </div>
          <div v-else class="result-message needs-work">
            📚 Keep studying! Focus on the topics where you struggled.
          </div>
        </div>
      </div>

      <div class="results-details">
        <h4>Question Review</h4>
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="result-item"
        >
          <div class="result-question">
            Question {{ index + 1 }}: {{ question.text.substring(0, 100) }}...
          </div>
          <div class="result-status">
            <span
              class="status-badge"
              :class="userAnswers[index] === question.correct ? 'correct' : 'incorrect'"
            >
              {{ userAnswers[index] === question.correct ? 'Correct' : 'Incorrect' }}
            </span>
          </div>
        </div>
      </div>

      <div class="results-actions">
        <button class="quiz-button primary" @click="restartQuiz">
          Restart Quiz
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProgressBar from './ProgressBar.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(q =>
        q.text &&
        q.options &&
        q.options.length > 0 &&
        typeof q.correct === 'number'
      )
    }
  },
  shuffle: {
    type: Boolean,
    default: false
  }
})

// State
const currentQuestionIndex = ref(0)
const selectedOption = ref(null)
const showFeedback = ref(false)
const showResults = ref(false)
const userAnswers = ref([])

// Computed
const currentQuestion = computed(() => props.questions[currentQuestionIndex.value])
const isCorrect = computed(() => selectedOption.value === currentQuestion.value.correct)
const correctAnswers = computed(() =>
  userAnswers.value.filter((answer, index) => answer === props.questions[index].correct).length
)
const scorePercentage = computed(() => (correctAnswers.value / props.questions.length) * 100)

// Methods
const selectOption = (index) => {
  if (!showFeedback.value) {
    selectedOption.value = index
  }
}

const submitAnswer = () => {
  showFeedback.value = true
  userAnswers.value[currentQuestionIndex.value] = selectedOption.value

  // Save to localStorage for progress tracking
  saveProgress()
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.questions.length - 1) {
    currentQuestionIndex.value++
    resetQuestion()
  } else {
    showResults.value = true
    saveProgress()
  }
}

const resetQuestion = () => {
  selectedOption.value = null
  showFeedback.value = false
}

const restartQuiz = () => {
  currentQuestionIndex.value = 0
  selectedOption.value = null
  showFeedback.value = false
  showResults.value = false
  userAnswers.value = []
  clearProgress()
}

const saveProgress = () => {
  // Check if we're in browser environment
  if (typeof window !== 'undefined' && window.localStorage) {
    const progressData = {
      currentQuestion: currentQuestionIndex.value,
      userAnswers: userAnswers.value,
      timestamp: new Date().toISOString()
    }

    // Save with a unique key based on the quiz title
    const quizKey = `quiz-progress-${props.title.replace(/\s+/g, '-').toLowerCase()}`
    localStorage.setItem(quizKey, JSON.stringify(progressData))
  }
}

const loadProgress = () => {
  // Check if we're in browser environment
  if (typeof window !== 'undefined' && window.localStorage) {
    const quizKey = `quiz-progress-${props.title.replace(/\s+/g, '-').toLowerCase()}`
    const saved = localStorage.getItem(quizKey)

    if (saved) {
      try {
        const progressData = JSON.parse(saved)
        // Only restore if it's from the last 24 hours
        const savedTime = new Date(progressData.timestamp)
        const now = new Date()
        const hoursDiff = (now - savedTime) / (1000 * 60 * 60)

        if (hoursDiff < 24 && progressData.userAnswers) {
          userAnswers.value = progressData.userAnswers
          currentQuestionIndex.value = Math.min(progressData.currentQuestion, props.questions.length - 1)
        }
      } catch (e) {
        console.error('Failed to load quiz progress:', e)
      }
    }
  }
}

const clearProgress = () => {
  // Check if we're in browser environment
  if (typeof window !== 'undefined' && window.localStorage) {
    const quizKey = `quiz-progress-${props.title.replace(/\s+/g, '-').toLowerCase()}`
    localStorage.removeItem(quizKey)
  }
}

// Load progress on mount
loadProgress()

// If shuffling is enabled, shuffle questions
if (props.shuffle) {
  const shuffled = [...props.questions].sort(() => Math.random() - 0.5)
  props.questions = shuffled
}
</script>

<style scoped>
.quiz-container {
  background-color: var(--color-1);
  border-radius: 12px;
  padding: 2rem;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.quiz-header {
  margin-bottom: 2rem;
}

.quiz-header h3 {
  color: var(--color-5);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.quiz-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quiz-progress span {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  min-width: 150px;
}

.question-container {
  margin-bottom: 1rem;
}

.quiz-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.quiz-option {
  background-color: white;
  border: 2px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.5;
}

.quiz-option:hover {
  border-color: var(--color-3);
  background-color: rgba(176, 143, 200, 0.05);
  transform: translateX(2px);
}

.quiz-option.selected {
  border-color: var(--color-5);
  background-color: rgba(146, 77, 191, 0.1);
}

.quiz-option.correct {
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
}

.quiz-option.incorrect {
  border-color: #ef4444;
  background-color: rgba(239, 68, 68, 0.1);
}

.option-letter {
  font-weight: 600;
  color: var(--color-5);
  min-width: 24px;
}

.quiz-feedback {
  padding: 1.25rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

.quiz-feedback.correct {
  background-color: rgba(16, 185, 129, 0.1);
  color: #047857;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.quiz-feedback.incorrect {
  background-color: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.feedback-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.feedback-reference {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.85rem;
}

.quiz-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.quiz-button {
  padding: 0.625rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  font-size: 0.9rem;
}

.quiz-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quiz-button.primary {
  background-color: var(--color-5);
  color: white;
}

.quiz-button.primary:hover:not(:disabled) {
  background-color: var(--color-4);
  transform: translateY(-1px);
}

.quiz-button.secondary {
  background-color: white;
  color: var(--color-5);
  border: 2px solid var(--color-5);
}

.quiz-button.secondary:hover {
  background-color: var(--color-5);
  color: white;
}

.results-container {
  text-align: center;
  padding: 2rem;
}

.results-container h3 {
  color: var(--color-5);
  margin-bottom: 2rem;
  font-size: 2rem;
}

.results-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.score-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(var(--color-5) 0deg, var(--color-5) calc(var(--score) * 3.6deg), #e5e7eb calc(var(--score) * 3.6deg));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  --score: v-bind(scorePercentage);
}

.score-circle::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 50%;
}

.score-percentage {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-5);
  z-index: 1;
}

.score-label {
  position: relative;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  z-index: 1;
}

.score-details p {
  font-size: 1.125rem;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
}

.result-message {
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 1rem;
}

.result-message.success {
  background-color: rgba(16, 185, 129, 0.1);
  color: #047857;
}

.result-message.moderate {
  background-color: rgba(245, 158, 11, 0.1);
  color: #b45309;
}

.result-message.needs-work {
  background-color: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
}

.results-details {
  text-align: left;
  margin: 2rem 0;
}

.results-details h4 {
  color: var(--color-5);
  margin-bottom: 1rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--vp-c-border);
}

.result-question {
  flex: 1;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-badge.correct {
  background-color: rgba(16, 185, 129, 0.1);
  color: #047857;
}

.status-badge.incorrect {
  background-color: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
}

.results-actions {
  margin-top: 2rem;
}

@media (max-width: 640px) {
  .quiz-container {
    padding: 1.5rem;
  }

  .quiz-option {
    padding: 0.875rem 1rem;
  }

  .score-circle {
    width: 120px;
    height: 120px;
  }

  .score-circle::before {
    width: 100px;
    height: 100px;
  }

  .score-percentage {
    font-size: 1.5rem;
  }

  .result-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>