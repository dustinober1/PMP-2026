# Practice Exam 2

Focus on Agile, Hybrid, and more complex leadership challenges.

<QuizComponent
  title="Practice Exam 2: Agile & Leadership"
  :questions="[
    {
      text: 'A project has a Budget at Completion (BAC) of $400,000. At the midpoint, the team has completed work worth $180,000 (EV) but has spent $220,000 (AC). What is the Cost Performance Index (CPI)?',
      options: [
        '0.82',
        '0.90',
        '1.10',
        '1.22'
      ],
      correct: 0,
      explanation: 'CPI = EV / AC ($180,000 / $220,000 = 0.818, rounded to 0.82).',
      reference: 'Chapter 9'
    },
    {
      text: 'A servant leader would MOST likely perform which of the following actions?',
      options: [
        'Make all decisions for the team to ensure maximum efficiency',
        'Remove impediments and support the team\'s self-organization',
        'Direct team members on exactly how to complete their daily tasks',
        'Prioritize schedule adherence over team well-being'
      ],
      correct: 1,
      explanation: 'Servant leadership is about enabling the team by removing blockers and fostering an environment where they can succeed.',
      reference: 'Chapter 3'
    },
    {
      text: 'During a project, the sponsor announces that the strategic priority has changed and the project benefits are now questionable. What should the PM do?',
      options: [
        'Continue the project as planned since it was already approved',
        'Recommend reassessing the business case and project viability',
        'Ignore the announcement and focus on internal deliverables',
        'Cancel the project immediately without further analysis'
      ],
      correct: 1,
      explanation: 'If a strategic shift occurs, the business case must be re-evaluated to see if the project still provides value to the organization.',
      reference: 'Chapter 2'
    },
    {
      text: 'Which conflict resolution technique results in a win-win outcome where both parties\' concerns are fully addressed?',
      options: [
        'Forcing',
        'Compromising',
        'Collaborating',
        'Avoiding'
      ],
      correct: 2,
      explanation: 'Collaborating involves exploring multiple viewpoints and reaching a consensus that satisfies everyone—a true win-win.',
      reference: 'Chapter 3'
    },
    {
      text: 'A project\'s critical path has a duration of 45 days. The team identifies an opportunity to complete a non-critical activity (with 5 days of float) 3 days early. What impact does this have on the project duration?',
      options: [
        'Project duration is reduced by 3 days',
        'Project duration is reduced by 5 days',
        'There is no impact on project duration',
        'Project duration increases by 3 days'
      ],
      correct: 2,
      explanation: 'Completing a non-critical activity early only increases its float; it does not shorten the critical path, which determines the project duration.',
      reference: 'Chapter 6'
    }
  ]"
/>

---

## Performance Benchmark

| Correct   | Level      | Strategy                                                                    |
| :-------- | :--------- | :-------------------------------------------------------------------------- |
| **5/5**   | Master     | You have a strong grasp of both math and leadership.                        |
| **4/5**   | Proficient | Double-check your understanding of Float and Critical Path.                 |
| **< 3/5** | Developing | Focus on the Difference between Servant Leadership and Command-and-Control. |

<div class="action-bar">
  <a href="./practice-exam-3" class="action-button primary">Take Final Practice Exam</a>
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
