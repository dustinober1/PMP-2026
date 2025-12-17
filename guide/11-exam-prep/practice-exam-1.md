# Practice Exam 1

Test your foundational knowledge across the three domains: People, Process, and Business Environment.

<QuizComponent
  title="Practice Exam 1: Foundation"
  :questions="[
    {
      text: 'A project manager notices that a key stakeholder has stopped attending status meetings and is unresponsive to emails. The project is entering a critical phase. What should the PM do FIRST?',
      options: [
        'Continue with the project and document the stakeholder absence',
        'Escalate to the sponsor immediately',
        'Reach out to the stakeholder directly to understand their concerns',
        'Remove the stakeholder from the communication plan'
      ],
      correct: 2,
      explanation: 'Direct communication is the first step in stakeholder engagement. You must understand the root cause of their disengagement before taking other actions.',
      reference: 'Chapter 4'
    },
    {
      text: 'A project is 60% complete with SPI = 0.85 and CPI = 0.92. What does this indicate about the project status?',
      options: [
        'Ahead of schedule and under budget',
        'Behind schedule and over budget',
        'Behind schedule and under budget',
        'Ahead of schedule and over budget'
      ],
      correct: 1,
      explanation: 'SPI < 1.0 means the project is behind schedule; CPI < 1.0 means the project is over budget.',
      reference: 'Chapter 9'
    },
    {
      text: 'During a sprint retrospective, the team identifies that unclear user stories are causing rework. What should the Scrum Master recommend?',
      options: [
        'Skip retrospectives until the project stabilizes',
        'Improve the Definition of Ready (DoR) for user stories',
        'Assign blame to the Product Owner for the quality of stories',
        'Extend sprint duration to allow more time for clarification'
      ],
      correct: 1,
      explanation: 'The Definition of Ready (DoR) ensures that stories have enough detail before entering a sprint. Improving it prevents rework.',
      reference: 'Chapter 1'
    },
    {
      text: 'A project manager receives a change request that would significantly impact the project scope and timeline. What should they do FIRST?',
      options: [
        'Implement the change immediately to satisfy the stakeholder',
        'Reject the change to protect the baseline',
        'Perform impact analysis on scope, schedule, cost, and quality',
        'Convene the Change Control Board (CCB) immediately'
      ],
      correct: 2,
      explanation: 'Before any change is approved or rejected, the PM must understand its impact on all project constraints.',
      reference: 'Chapter 9'
    },
    {
      text: 'A team member approaches the PM with concerns about unethical behavior by another team member. What should the PM do FIRST?',
      options: [
        'Ignore the concern unless there is documented evidence',
        'Tell the team member to handle it themselves to foster self-organization',
        'Listen carefully and gather more information/facts',
        'Immediately terminate the accused team member'
      ],
      correct: 2,
      explanation: 'The PM must first validate the information and understand the situation before taking disciplinary or reporting actions.',
      reference: 'Chapter 1'
    }
  ]"
/>

---

## Performance Benchmark

| Correct   | Level      | Strategy                                            |
| :-------- | :--------- | :-------------------------------------------------- |
| **5/5**   | Master     | Focus on high-complexity scenarios.                 |
| **4/5**   | Proficient | Review the specific chapter for the one you missed. |
| **< 3/5** | Developing | Re-read the Fundamentals and Monitoring chapters.   |

<div class="action-bar">
  <a href="./practice-exam-2" class="action-button primary">Take Practice Exam 2</a>
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
