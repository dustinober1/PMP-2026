# Knowledge Check: Monitoring & Closing

Test your mastery of performance metrics, change control, and the final handoff.

<QuizComponent
  title="Chapter 9 Knowledge Check"
  :questions="[
    {
      text: 'A project has a Planned Value (PV) of $200,000, an Earned Value (EV) of $180,000, and an Actual Cost (AC) of $190,000. What is the Cost Performance Index (CPI) and what does it tell you?',
      options: [
        'CPI = 0.95; the project is over budget',
        'CPI = 0.90; the project is over budget',
        'CPI = 1.05; the project is under budget',
        'CPI = 1.11; the project is under budget'
      ],
      correct: 0,
      explanation: 'CPI = EV / AC ($180,000 / $190,000 = 0.947, rounded to 0.95). Since it is less than 1.0, the project is over budget.',
      reference: 'Section 9.1'
    },
    {
      text: 'A critical stakeholder calls the project manager and requests a small addition to the project scope that they claim will take only a few hours. How should the PM respond?',
      options: [
        'Ask the team to do it immediately to maintain stakeholder satisfaction',
        'Tell the stakeholder scope changes are not allowed during execution',
        'Instruct the stakeholder to submit a formal change request for impact assessment',
        'Add the task to the backlog and wait for the next sprint review'
      ],
      correct: 2,
      explanation: 'All changes, regardless of size, must go through the formal Integrated Change Control process to assess impacts on schedule, cost, and risk.',
      reference: 'Section 9.1'
    },
    {
      text: 'What is the FIRST thing a project manager should do if a project is canceled mid-way through execution due to a change in organizational strategy?',
      options: [
        'Immediately stop all work and release the team',
        'Conduct a lessons learned session and perform formal project closure',
        'Ask the sponsor for a new project to keep the team busy',
        'Delete all project files to save server space since the project is no longer valuable'
      ],
      correct: 1,
      explanation: 'Every project must be formally closed, even canceled ones. This ensures lessons are captured and data is archived (OPA updates).',
      reference: 'Section 9.2'
    },
    {
      text: 'An SPI of 1.2 and a CPI of 0.8 indicate which of the following scenarios?',
      options: [
        'Ahead of schedule and under budget',
        'Behind schedule and over budget',
        'Ahead of schedule and over budget',
        'Behind schedule and under budget'
      ],
      correct: 2,
      explanation: 'SPI > 1.0 is ahead of schedule; CPI < 1.0 is over budget.',
      reference: 'Section 9.1'
    },
    {
      text: 'Who is officially responsible for ensuring that the benefits of the project are realized and sustained after the project has been handed over?',
      options: [
        'The Project Manager',
        'The Operations/Business Owner',
        'The Project Team',
        'The PMO Director'
      ],
      correct: 1,
      explanation: 'The PM transitions the project to operations. The business owner/operations team is responsible for ongoing benefits realization.',
      reference: 'Section 9.2'
    }
  ]"
/>

## EVM Multipliers & Quick Reference

| Acronym | Meaning           | High Level Result            |
| :------ | :---------------- | :--------------------------- |
| **CV**  | Cost Variance     | $EV - AC$ (Positive is Good) |
| **SV**  | Schedule Variance | $EV - PV$ (Positive is Good) |
| **CPI** | Cost Index        | $EV / AC$ (> 1.0 is Good)    |
| **SPI** | Schedule Index    | $EV / PV$ (> 1.0 is Good)    |

### The "EVM Cheat Sheet"
- **Anything Variance (SV/CV)**: Always starts with **EV**. $EV - X$.
- **Anything Index (SPI/CPI)**: Always starts with **EV**. $EV / X$.
- **Negative/Under 1.0**: Bad.
- **Positive/Over 1.0**: Good.

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project is complete but a vendor has a pending claim (a dispute), you cannot fully close the project until the <strong>Procurement Closure</strong> is resolved or a formal settlement is reached.
</div>

<style>
.study-tip {
  background: var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand);
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem 0;
}
</style>
