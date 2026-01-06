<script setup>
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# Practice Exam 2: Agile & Hybrid Focus

Test your ability to lead in adaptive environments and handle complex interpersonal dynamics.

<QuizComponent
  title="Practice Exam 2: Agility"
  :questions="[
    {
      text: 'A project has a Budget at Completion (BAC) of $400,000. Currently, EV = $180,000 and AC = $220,000. What is the CPI?',
      options: [
        '0.82',
        '0.90',
        '1.10',
        '1.22'
      ],
      correct: 0,
      explanation: 'CPI = EV / AC ($180,000 / $220,000 = 0.818, rounded to 0.82). The project is getting 82 cents of value for every dollar spent.',
      reference: 'Chapter 9'
    },
    {
      text: 'Which action best demonstrates Servant Leadership in an Agile team?',
      options: [
        'Making technical decisions to speed up the team',
        'Removing impediments (blockers) so the team can self-organize',
        'Assigning tasks to developers based on their skill level',
        'Reporting the daily status to the sponsor personally'
      ],
      correct: 1,
      explanation: 'Servant leaders carry food and water. They remove obstacles and let the team decide how to do the work.',
      reference: 'Chapter 3'
    },
    {
      text: 'The sponsor announces a major strategic shift, rendering the current project benefits questionable. What should the PM do?',
      options: [
        'Continue to the next phase gate as planned',
        'Formally recommend a Business Case re-evaluation',
        'Ignore the corporate noise and focus on the WBS',
        'Cancel the project immediately'
      ],
      correct: 1,
      explanation: 'Projects exist to deliver value. If the value proposition changes, the project justification must be re-checked. You cannot just cancel it yourself (that is a governance decision).',
      reference: 'Chapter 2'
    },
    {
      text: 'Which conflict resolution technique results in a Win-Win situation?',
      options: [
        'Forcing (Directing)',
        'Compromising (Give and Take)',
        'Collaborating (Problem Solving)',
        'Smoothing (Accommodating)'
      ],
      correct: 2,
      explanation: 'Collaborating attacks the problem, not the person. It finds a solution that fully satisfies all parties, whereas Compromising is a Lose-Lose (both give up something).',
      reference: 'Chapter 3'
    },
    {
      text: 'The Critical Path is 45 days. A non-critical task with 5 days of float is completed 3 days early. What is the new project duration?',
      options: [
        '42 days',
        '43 days',
        '45 days',
        '48 days'
      ],
      correct: 2,
      explanation: 'Shortening a non-critical task only increases its float. It does not shorten the Critical Path, which determines the project end date.',
      reference: 'Chapter 6'
    }
  ]"
/>

---

##  Score Interpretation

| Score     | Status           | Recommendation                                          |
| :-------- | :--------------- | :------------------------------------------------------ |
| **5/5**   | **Agile Expert** | You are ready for the final challenge.                  |
| **4/5**   | **Solid**        | Compomising vs. Collaboration is a common trap.         |
| **< 3/5** | **Review**       | Review Chapter 3 (Leadership) and Chapter 6 (Schedule). |

<div class="action-bar">
  <a href="./practice-exam-3" class="action-button primary">Next: The Final Challenge →</a>
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
  { front: `What makes a good multiple-choice test strategy?`, back: `Read question fully before answers, identify what's being asked, eliminate wrong options systematically.` },
  { front: `How do I avoid trap answers?`, back: `Recognize plausible-but-wrong answers, watch for absolutes (always/never), and focus on PMI's philosophy.` },
  { front: `What if two answers seem correct?`, back: `Look for nuances - one is typically more specific, covers broader context, or aligns better with PMI guidance.` },
  { front: `Should I change my first answer?`, back: `Only if you have a good reason - studies show first instincts are often correct, but re-read if unsure.` },
  { front: `How do I manage test anxiety?`, back: `Practice deep breathing, visualize success, remember preparation, focus on one question at a time.` },
  { front: `What should I do if I get stuck on a question?`, back: `Flag it, make your best guess, move on - don't lose time that could help with later questions.` },
  { front: `How do I verify I'm answering the right question?`, back: `Reread the question stem carefully - many students misread and answer the wrong thing.` },
  { front: `What time management approach works best?`, back: `Scan all questions first (1 min), answer confident questions (1.2 min each), review flagged ones (2-3 min each).` },
  { front: `Is it better to go fast or slow?`, back: `Balance is key - rushed answers are careless, but overthinking costs time. Aim for 1.3 min per question.` },
  { front: `What should I do in the last 10 minutes?`, back: `Review flagged questions, check for skipped questions, verify answers are recorded, and don't panic.` }
]" />
