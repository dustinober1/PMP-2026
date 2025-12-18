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
      explanation: 'Servant leaders "carry food and water." They remove obstacles and let the team decide "how" to do the work.',
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
      text: 'Which conflict resolution technique results in a "Win-Win" situation?',
      options: [
        'Forcing (Directing)',
        'Compromising (Give and Take)',
        'Collaborating (Problem Solving)',
        'Smoothing (Accommodating)'
      ],
      correct: 2,
      explanation: 'Collaborating attacks the problem, not the person. It finds a solution that fully satisfies all parties, whereas Compromising is a "Lose-Lose" (both give up something).',
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

## 📊 Score Interpretation

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
