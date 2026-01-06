<script setup>
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# Practice Exam 1: Fundamentals

Test your grasp of the core People, Process, and Business Environment domains.

<QuizComponent
  title="Practice Exam 1: Foundation"
  :questions="[
    {
      text: 'A key stakeholder has stopped attending status meetings and is unresponsive to emails during a critical phase. What should the PM do FIRST?',
      options: [
        'Document the absence in the Issue Log and continue',
        'Escalate the behavior to the project sponsor',
        'Reach out directly (phone/visit) to understand their concerns',
        'Remove them from the communication distribution list'
      ],
      correct: 2,
      explanation: 'Direct engagement to understand the root cause is the first step. Escalation is a last resort; documentation is passive.',
      reference: 'Chapter 4'
    },
    {
      text: 'A project is 60% complete. SPI = 0.85 and CPI = 0.92. What is the status?',
      options: [
        'Ahead of schedule and under budget',
        'Behind schedule and over budget',
        'Behind schedule and under budget',
        'Ahead of schedule and over budget'
      ],
      correct: 1,
      explanation: 'SPI < 1.0 = Behind Schedule. CPI < 1.0 = Over Budget. Both indicators are negative.',
      reference: 'Chapter 9'
    },
    {
      text: 'During a sprint retrospective, the team notes that vague user stories are causing rework. What should the Scrum Master recommend?',
      options: [
        'Skip retrospectives to save time for rework',
        'Refine the Definition of Ready (DoR) for future stories',
        'Blame the Product Owner for poor quality',
        'Extend the sprint duration to 4 weeks'
      ],
      correct: 1,
      explanation: 'The Definition of Ready (DoR) acts as a quality gate before a story enters a sprint. Clarifying it prevents vague work from starting.',
      reference: 'Chapter 6'
    },
    {
      text: 'You receive a change request that will significantly impact scope and pull resources from another project. What is your FIRST step?',
      options: [
        'Implement it immediately to keep the client happy',
        'Reject it to protect the baseline',
        'Perform a comprehensive Impact Analysis (Scope, Cost, Schedule, Risk)',
        'Convene the CCB immediately'
      ],
      correct: 2,
      explanation: 'You cannot approve, reject, or convene the board until you have analyzed the impact. Data comes before decision.',
      reference: 'Chapter 9'
    },
    {
      text: 'A team member alleges that another member is stealing project materials. What should the PM do FIRST?',
      options: [
        'Ignore it until there is video evidence',
        'Tell them to resolve it themselves (Self-organization)',
        'Listen privately and gather facts before taking action',
        'Immediately fire the accused member'
      ],
      correct: 2,
      explanation: 'The PM must investigate and validate serious ethical claims before taking disciplinary action. Trust but verify.',
      reference: 'Chapter 3'
    }
  ]"
/>

---

##  Score Interpretation

| Score     | Status     | Recommendation                                     |
| :-------- | :--------- | :------------------------------------------------- |
| **5/5**   | **Ready**  | Move to Exam 2 (Agile Focus).                      |
| **4/5**   | **Good**   | Review the specific chapter for the error.         |
| **< 3/5** | **Review** | Re-read Chapters 4 (Stakeholders) and 9 (Control). |

<div class="action-bar">
  <a href="./practice-exam-2" class="action-button primary">Next: Agile Exam →</a>
</div>

<style>
.action-bar {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
}

.action-button.primary {
  padding: 0.75rem 2rem;
  background: var(--vp-c-brand);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.action-button.primary:hover {
  opacity: 0.9;
}
</style>

<FlashcardCarousel :cards="[
  { front: `What is the purpose of practice exams?`, back: `To assess readiness, identify weak areas, and practice time management under exam conditions.` },
  { front: `How should I approach practice exam questions?`, back: `Read carefully, eliminate obviously wrong answers, flag uncertain ones, and review after completion.` },
  { front: `What should I do if I don't know the answer?`, back: `Eliminate wrong options using context, make educated guess, flag for review, and move on.` },
  { front: `How long should each question take?`, back: `Approximately 1.3 minutes per question (4 hours / 185 questions).` },
  { front: `What if my practice exam score is below 70%?`, back: `Identify weak topics, review those chapters thoroughly, and take another practice exam after study.` },
  { front: `Should I review answers immediately after the exam?`, back: `Yes - understand why correct answers are right and why your choices were wrong.` },
  { front: `How many practice exams should I take?`, back: `At least 3-4 full practice exams during study period to build confidence and identify patterns.` },
  { front: `Can I use external resources for practice questions?`, back: `Yes - PMI-approved resources, study guides, and online platforms supplement this guide well.` },
  { front: `What should I track across practice exams?`, back: `Score trends, domain breakdown, time per question, and topic areas that need more study.` },
  { front: `How do I simulate exam conditions?`, back: `Take full 4-hour exam blocks, no breaks except scheduled time, quiet environment, limited resources.` }
]" />
