# Knowledge Check: Execution & Value Delivery

Test your ability to lead teams, manage knowledge, and ensure value-based delivery for the 2026 PMP exam.

<QuizComponent
  title="Chapter 8: Execution & Value Delivery"
  :questions="[
    {
      text: 'An Agile team is in the middle of a sprint when a developer mentions they are blocked because they lack access to the cloud environment. What is the most proactive PM action?',
      options: [
        'Tell the developer to work on a different task for now',
        'Directly contact the infrastructure team to escalate and remove the blocker',
        'Update the Risk Register and bring it up at the next weekly meeting',
        'Ask the team to vote on the importance of the task in the next retro'
      ],
      correct: 1,
      explanation: 'As a Servant Leader/PM, your primary role during execution is to remove impediments so the team can maintain their flow and speed.',
      reference: 'Section 8.1'
    },
    {
      text: 'A project to build an automated warehouse system is complete. The system is functional (the robots move), but the warehouse floor staff refuse to use it because it makes their jobs harder. What is missing?',
      options: [
        'The Output',
        'The Outcome',
        'The Strategy',
        'The RACI Matrix'
      ],
      correct: 1,
      explanation: 'The system itself is the Output. The change in state/behavior (staff using the robots) is the Outcome. Without the Outcome, the value is zero.',
      reference: 'Section 8.2'
    },
    {
      text: 'What is the primary difference between Tacit Knowledge and Explicit Knowledge?',
      options: [
        'Tacit is for Agile; Explicit is for Waterfall',
        'Tacit is easy to document; Explicit is based on intuition',
        'Tacit is hard to codify (it is personal experience); Explicit is easy to share via data/manuals',
        'Tacit belongs to the sponsor; Explicit belongs to the team'
      ],
      correct: 2,
      explanation: 'Tacit knowledge is intuitive and experience-based (the \'know-how\'). Explicit knowledge is fact-based and easily codified (blueprints, data).',
      reference: 'Section 8.1'
    },
    {
      text: 'Six months into execution, the corporate strategy changes. The PM realizes the project outputs no longer align with the new strategic direction. What should they do FIRST?',
      options: [
        'Continue the project as it was already baselined',
        'Ignore the shift until the project is closed',
        'Request a re-evaluation of the Business Case with the Sponsor',
        'Cancel the project immediately to save money'
      ],
      correct: 2,
      explanation: 'PMs must ensure strategic alignment throughout the lifecycle. If the alignment is lost, the business case must be reviewed for continued validity.',
      reference: 'Section 8.2'
    },
    {
      text: 'A formal procedure that ensures work starts only at the right time and by the right person is known as what?',
      options: [
        'Work Authorization System',
        'RACI Matrix',
        'Risk Response Plan',
        'Backlog Refinement'
      ],
      correct: 0,
      explanation: 'A Work Authorization System is a formal procedure to notify the team that work on a specific activity should begin.',
      reference: 'Section 8.1'
    },
    {
      text: 'A risk response plan exists for “the supplier may miss the delivery date.” The supplier misses an interim milestone and delivery is now late. What should the PM do first?',
      options: [
        'Record the event in the Risk Register as a new risk',
        'Execute the planned response, log it as an issue, and assess impacts',
        'Ignore it until it affects the critical path',
        'Ask the team to re-estimate the entire project schedule'
      ],
      correct: 1,
      explanation: 'Once the risk occurs, it becomes an issue. Execute the response, then track impacts and recovery actions through the issue log.',
      reference: 'Section 8.1'
    },
    {
      text: 'A stakeholder requests a “small” dashboard change and claims it will only take 2 hours. The scope baseline is approved. What should the PM do first?',
      options: [
        'Implement the change immediately to keep the stakeholder happy',
        'Ask the team to do it “off the books”',
        'Assess impacts and follow the change control or backlog prioritization process',
        'Reject the request because scope is frozen'
      ],
      correct: 2,
      explanation: 'Even small changes can create scope creep. The correct first move is to assess impacts and route the request through the approved change approach.',
      reference: 'Section 8.1'
    },
    {
      text: 'Which option is the best example of Work Performance Data?',
      options: [
        'The project is trending 2 weeks behind due to a vendor delay',
        'A dashboard summarizing schedule variance and cost variance for executives',
        '15 defects were found during testing of build 42',
        'The PM recommends crashing because the schedule is at risk'
      ],
      correct: 2,
      explanation: 'Work Performance Data is raw observation (counts, dates, defects, hours). Analysis and recommendations are information, and dashboards are reports.',
      reference: 'Section 8.1'
    },
    {
      text: 'Your team has been tracking progress and defects weekly, but the sponsor says they were surprised by a schedule slip. What is the most likely gap?',
      options: [
        'No work performance data was collected',
        'The PM did not convert data into information and communicate it through planned reports',
        'The sponsor should have attended the daily standup',
        'Defect tracking should stop to reduce bad news'
      ],
      correct: 1,
      explanation: 'The PM must translate data into actionable information and deliver it in the right format/cadence per the communications plan.',
      reference: 'Section 8.1'
    },
    {
      text: 'In an agile project, when is the best time to update the lessons learned register?',
      options: [
        'Only at project closure',
        'At each sprint retrospective (and major phase gates)',
        'Only when a major defect occurs',
        'After the sponsor signs the charter'
      ],
      correct: 1,
      explanation: 'PMP emphasizes continuous learning. Update lessons learned throughout execution, especially during retrospectives and gates.',
      reference: 'Section 8.1'
    },
    {
      text: 'A hybrid project has fixed regulatory milestones but uses agile teams to build iteratively. What is the best artifact to keep governance and delivery aligned?',
      options: [
        'A work authorization system for every user story',
        'An integrated roadmap/release plan mapping increments to milestone dates',
        'A single detailed WBS that cannot change',
        'A procurement statement of work (SOW)'
      ],
      correct: 1,
      explanation: 'Hybrid execution needs a bridge between milestone governance and iterative delivery: a roadmap/release plan tied to incremental scope.',
      reference: 'Section 8.1'
    },
    {
      text: 'During a daily standup, two developers report they cannot proceed because the test environment is unstable. What should the PM do first?',
      options: [
        'Schedule a meeting next week to discuss the problem',
        'Ask the developers to work overtime to make up the time later',
        'Clarify impact and immediately contact the environment owner to restore access',
        'Update the benefits register'
      ],
      correct: 2,
      explanation: 'Execution prioritizes restoring flow. Capture the impediment, assess impact, and escalate to the fastest resolver.',
      reference: 'Section 8.1'
    },
    {
      text: 'A team member has missed several commitments and other team members are complaining. What should the PM do first?',
      options: [
        'Report the team member to HR',
        'Replace the team member immediately',
        'Meet privately to understand root cause and remove blockers',
        'Document the issue and move on'
      ],
      correct: 2,
      explanation: 'PMP best practice is to address performance issues privately first to understand causes and provide support before escalating.',
      reference: 'Section 8.1'
    },
    {
      text: 'Two subject matter experts are in conflict about the technical approach and the dispute is slowing delivery. What is the best PM approach?',
      options: [
        'Use forcing to pick a winner quickly',
        'Facilitate a collaborative problem-solving discussion focused on interests and data',
        'Avoid the conflict by assigning work separately and hoping it resolves',
        'Escalate to the CEO'
      ],
      correct: 1,
      explanation: 'Collaborating/problem solving is typically the best approach for high-stakes conflicts where a durable solution is needed.',
      reference: 'Section 8.1'
    },
    {
      text: 'The team is constantly interrupted by urgent requests from other departments, causing delays and defects. What is the best PM action?',
      options: [
        'Allow interruptions to keep everyone happy',
        'Make work visible and limit WIP, then re-prioritize with stakeholders',
        'Ask the team to work longer hours to absorb interruptions',
        'Stop tracking issues to reduce administration'
      ],
      correct: 1,
      explanation: 'Protecting flow is a core execution responsibility. Visualize work, limit WIP, and align stakeholders on priorities.',
      reference: 'Section 8.1'
    },
    {
      text: 'A functional manager pulls a key engineer off your project for operational work without notice. What should you do first?',
      options: [
        'Update the schedule baseline immediately',
        'Meet with the functional manager to negotiate and communicate impacts',
        'Escalate directly to the board of directors',
        'Remove the engineer from the team and reassign their work without discussion'
      ],
      correct: 1,
      explanation: 'The PM should first negotiate for resources and align priorities with the functional manager, communicating impacts and options.',
      reference: 'Section 8.1'
    },
    {
      text: 'Which statement is a “benefit” (not just an outcome)?',
      options: [
        'Users can reset passwords online',
        'A self-service portal is delivered',
        'Call center volume decreases by 30%',
        'A pilot group provides feedback on a demo'
      ],
      correct: 2,
      explanation: 'Benefits are measurable gains (metrics). Outcomes are state/behavior changes; outputs are deliverables.',
      reference: 'Section 8.2'
    },
    {
      text: 'Which is the best leading indicator that value is likely to be realized after go-live?',
      options: [
        'ROI reported one year after launch',
        'Market share increase after two quarters',
        'Pilot users completing key workflows with minimal support',
        'Final project closeout report signed'
      ],
      correct: 2,
      explanation: 'Leading indicators appear earlier and predict benefit realization (adoption/usage patterns, training completion, pilot success).',
      reference: 'Section 8.2'
    },
    {
      text: 'Who is typically accountable for realizing benefits after project delivery?',
      options: [
        'The project manager',
        'The project team',
        'A benefits owner or operations leader',
        'The project scheduler'
      ],
      correct: 2,
      explanation: 'Benefits realization is usually owned by the business/operations. The PM helps enable it, but typically does not own outcomes long-term.',
      reference: 'Section 8.2'
    },
    {
      text: 'The solution is uncertain and stakeholders disagree on the best approach. What work should be prioritized first to protect value?',
      options: [
        'Detailed documentation for all future requirements',
        'A prototype or pilot to validate assumptions and reduce risk',
        'Finalizing the project closure report',
        'Locking scope to prevent any changes'
      ],
      correct: 1,
      explanation: 'Under uncertainty, deliver learning early. Experiments, prototypes, and pilots reduce risk and clarify what creates value.',
      reference: 'Section 8.2'
    },
    {
      text: 'A product passes all acceptance tests, but users say it does not solve their problem. What is the primary gap?',
      options: [
        'Verification',
        'Validation',
        'Procurement',
        'Resource leveling'
      ],
      correct: 1,
      explanation: 'Verification checks conformance to requirements. Validation checks whether the solution meets real needs and produces outcomes.',
      reference: 'Section 8.2'
    },
    {
      text: 'Operations is resisting adoption of a new system because they believe it will increase workload. What should the PM do first?',
      options: [
        'Force adoption because the contract is signed',
        'Ignore the concern and proceed to close the project',
        'Address change enablement (awareness/desire) and provide training/support',
        'Remove operations from the stakeholder list'
      ],
      correct: 2,
      explanation: 'Resistance is an adoption risk. Strengthen change enablement through communication, involvement, training, and support.',
      reference: 'Section 8.2'
    },
    {
      text: 'The deliverable works, but operations cannot support it because there are no runbooks and no training. What is the best PM action?',
      options: [
        'Complete the handoff anyway because the output is done',
        'Delay handoff/closure until operational readiness gaps are closed',
        'Transfer ownership to operations and let them figure it out',
        'Cancel the project'
      ],
      correct: 1,
      explanation: 'Value collapses without readiness. Proper transition to operations includes training, documentation, and support processes.',
      reference: 'Section 8.2'
    },
    {
      text: 'A team keeps re-arguing decisions made weeks ago, slowing progress. Which execution artifact best prevents this?',
      options: [
        'Risk register',
        'Decision log (RAID “D”)',
        'Scope statement',
        'Cost baseline'
      ],
      correct: 1,
      explanation: 'A decision log records what was decided and why, preventing re-litigation and keeping execution moving.',
      reference: 'Section 8.3'
    },
    {
      text: 'When escalating a critical blocker, which message content is most complete and PMP-aligned?',
      options: [
        '“We have a blocker. Please help.”',
        '“Team is blocked. Fix ASAP.”',
        'Context, impact, requested action, decision deadline, and owner/follow-up',
        'A detailed list of all project problems since initiation'
      ],
      correct: 2,
      explanation: 'Good escalations are specific: they describe impact, request a clear action/decision, and set a deadline and follow-up owner.',
      reference: 'Section 8.3'
    }
  ]"
/>

## Additional Study Topics

For full Chapter 8 proficiency, ensure you can:

1.  **Execution bucketing**: Impediment vs issue vs risk vs change request (and the best first move).
2.  **Flow control**: Cadences, WIP limits, and how to protect focus under pressure.
3.  **Knowledge capture**: Lessons learned register + decision log as living artifacts.
4.  **Value chain mastery**: Output → outcome → benefit → value (and how to measure each).
5.  **Verification vs validation**: Why “met requirements” can still fail.
6.  **Operational readiness**: Training, runbooks, support model, and benefits ownership after go-live.

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If an execution question asks what to do first when a team member isn't performing, the answer is usually to <strong>Meet with them privately</strong> to understand the root cause.
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
