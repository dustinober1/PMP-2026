# Knowledge Check: Monitoring & Closing

Test your mastery of performance metrics, change control, and the final handoff in the 2026 PMP context.

<QuizComponent
  title="Chapter 9: Monitoring & Closing"
  :questions="[
    {
      text: 'A project reports a CPI of 0.95 and an SPI of 1.05. What is the status of the project?',
      options: [
        'Over Budget and Ahead of Schedule',
        'Under Budget and Ahead of Schedule',
        'Over Budget and Behind Schedule',
        'Under Budget and Behind Schedule'
      ],
      correct: 0,
      explanation: 'CPI < 1.0 means Cost Efficiency is low (Over Budget). SPI > 1.0 means Schedule Efficiency is high (Ahead of Schedule).',
      reference: 'Section 9.1'
    },
    {
      text: 'A key stakeholder calls you to request a "small" change to the dashboard layout. They claim it will only take 2 hours. What is the correct PM response?',
      options: [
        'Implement the change immediately to keep the stakeholder happy',
        'Ask the team to squeeze it in during lunch',
        'Direct the stakeholder to the formal Change Control process',
        'Reject the request because the scope is frozen'
      ],
      correct: 2,
      explanation: 'Every change, no matter how small, must go through Integrated Change Control to protect the project baseline from "Scope Creep" (Death by a thousand cuts).',
      reference: 'Section 9.1'
    },
    {
      text: 'Your project was canceled mid-execution due to a market shift. What is your immediate next step?',
      options: [
        'Release the team and delete the files',
        'Perform Administrative Closure and archive the work completed so far',
        'Wait for the sponsor to give you a new project',
        'Continue working until the budget runs out'
      ],
      correct: 1,
      explanation: 'Canceled projects must still be formally closed. You must document *why* it failed/ended and archive the artifacts for future organizational learning.',
      reference: 'Section 9.2'
    },
    {
      text: 'The project is mechanically complete. The deliverables work. However, the Operations team refuses to accept the handover because they have not received the training manuals. What should the PM do?',
      options: [
        'Force the handover since the product works',
        'Delay the closure until the manuals are delivered and training is complete',
        'Mark the project as "Closed" and let Operations figure it out',
        'Escalate to the CEO'
      ],
      correct: 1,
      explanation: 'Project Closure requires the *Transfer of Ownership*. If operations cannot support the product (due to lack of training), the transfer cannot occur.',
      reference: 'Section 9.2'
    },
    {
      text: 'Which document is updated constantly throughout the project and finalized during closure to become a key Organizational Process Asset?',
      options: [
        'The Project Charter',
        'The Business Case',
        'The Lessons Learned Register',
        'The Cost Baseline'
      ],
      correct: 2,
      explanation: 'The Lessons Learned Register is a living document that captures knowledge throughout the lifecycle and transfers it to the organization at closure.',
      reference: 'Section 9.2'
    }
  ]"
/>

## EVM Cheatsheet

| Metric                        | Formula   | Good Outcome |
| :---------------------------- | :-------- | :----------- |
| **CPI** (Cost Efficiency)     | $EV / AC$ | $> 1.0$      |
| **SPI** (Schedule Efficiency) | $EV / PV$ | $> 1.0$      |
| **CV** (Cost Variance)        | $EV - AC$ | Positive     |
| **SV** (Schedule Variance)    | $EV - PV$ | Positive     |

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If you see a question about a "claim" or "dispute" with a vendor, you CANNOT close the project until that claim is resolved (Procurement Closure). Detailed closure often involves legal or financial settlement.
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
