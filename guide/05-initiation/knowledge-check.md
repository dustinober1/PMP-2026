# Knowledge Check: Initiation

Test your ability to justify value, secure authorization, define boundaries, and tailor the delivery strategy. These 25 questions cover the full breadth of Chapter 5 content in the 2026 PMP context.

<QuizComponent
  title="Chapter 5: Comprehensive Review (25 Questions)"
  :questions="[
    {
      text: 'You are helping a sponsor choose between two projects. Project Alpha has an NPV of $50,000 and an IRR of 12%. Project Beta has an NPV of $75,000 and an IRR of 8%. Which project should you recommend solely based on financial value?',
      options: [
        'Project Alpha, because the higher IRR indicates a better interest rate',
        'Project Beta, because NPV is the superior metric for total value realization',
        'Neither, as you must wait for the Payback Period to be calculated',
        'Both projects should be initiated simultaneously'
      ],
      correct: 1,
      explanation: 'Net Present Value (NPV) is the primary project selection metric in the PMP syllabus. Higher NPV indicates a larger total value contribution to the organization.',
      reference: 'Section 5.1'
    },
    {
      text: 'A sponsor is comparing two projects. Project A has a 12-month payback but an NPV of $10,000. Project B has a 36-month payback but an NPV of $80,000. If the goal is to maximize value, which should be selected?',
      options: [
        'Project A, because shorter payback always beats higher NPV',
        'Project B, because NPV represents the total value in today’s dollars',
        'Neither, because payback is the only valid metric',
        'Both, because payback and NPV cannot be compared'
      ],
      correct: 1,
      explanation: 'Payback measures how quickly cash is recovered, but NPV measures total value after discounting. When value maximization is the goal, higher NPV is preferred.',
      reference: 'Section 5.1'
    },
    {
      text: 'You have a fixed capital budget and can only fund one of two independent initiatives. Project X has a BCR of 1.8 and Project Y has a BCR of 1.3. Which is the best choice based on efficiency of spend?',
      options: [
        'Project X, because it returns more benefit per dollar invested',
        'Project Y, because lower BCR indicates lower risk',
        'Neither, because BCR must be less than 1.0 to be profitable',
        'Select both projects and request more budget later'
      ],
      correct: 0,
      explanation: 'Benefit-Cost Ratio (BCR) helps rank options when capital is constrained. Higher BCR = more value per unit of cost.',
      reference: 'Section 5.1'
    },
    {
      text: 'A project has an IRR of 14% and the organization’s hurdle rate is 11%. What does this usually imply?',
      options: [
        'The project should generally be accepted because return exceeds the cost of capital',
        'The project should be rejected because IRR is not a valid metric',
        'The project is only acceptable if Payback is under 12 months',
        'The project must be Agile to achieve that IRR'
      ],
      correct: 0,
      explanation: 'If IRR exceeds the hurdle rate (cost of capital), the investment generally meets the organization’s minimum return requirement.',
      reference: 'Section 5.1'
    },
    {
      text: 'A project’s NPV is negative, but it is required to meet a non-negotiable regulatory compliance deadline. What is the best recommendation?',
      options: [
        'Reject the project because negative NPV always means no value',
        'Proceed and document compliance as the value driver, even if financial return is negative',
        'Proceed only if the project is converted to Agile',
        'Delay the decision until the PM completes a detailed schedule'
      ],
      correct: 1,
      explanation: 'Compliance work can be mandatory regardless of NPV. The “value” is maintaining license to operate and avoiding legal/financial penalties.',
      reference: 'Section 5.1'
    },
    {
      text: 'Which document primarily answers: “Why should the organization invest in this initiative?”',
      options: [
        'Project Charter',
        'Business Case',
        'Project Management Plan',
        'Issue Log'
      ],
      correct: 1,
      explanation: 'The Business Case is the pre-project justification document that explains the “why” of the investment.',
      reference: 'Section 5.1'
    },
    {
      text: 'Which document formally authorizes the project and grants the PM authority to use organizational resources?',
      options: [
        'The Communications Management Plan',
        'The Business Case',
        'The Project Charter',
        'The Benefits Management Plan'
      ],
      correct: 2,
      explanation: 'The Project Charter is the authorization document. It names the PM and establishes authority.',
      reference: 'Section 5.2'
    },
    {
      text: 'In the Benefits Management Plan, who is typically accountable for measuring benefits after project closure?',
      options: [
        'The Project Manager',
        'The Benefit Owner (often an operational leader or product owner)',
        'The Scrum Master',
        'The entire project team equally'
      ],
      correct: 1,
      explanation: 'Benefits are usually realized after delivery, so a benefits owner (not the PM) is accountable for measurement and sustainment.',
      reference: 'Section 5.1'
    },
    {
      text: 'When are many business benefits most commonly realized and measured?',
      options: [
        'Only during initiation',
        'Mostly after the project deliverable is transitioned into operations',
        'Only during execution',
        'Only after the PM writes the schedule baseline'
      ],
      correct: 1,
      explanation: 'A key initiation concept is that outcomes and benefits often occur after the project closes, during adoption and operations.',
      reference: 'Section 5.1'
    },
    {
      text: 'Mid-project, you discover the market has changed and the Business Case assumptions are no longer valid. What is the best immediate PM action?',
      options: [
        'Continue the project to avoid wasting sunk costs',
        'Quietly adjust scope so the Business Case becomes valid again',
        'Inform the sponsor and revalidate the Business Case before continuing major spend',
        'Ignore it and focus on meeting the schedule baseline'
      ],
      correct: 2,
      explanation: 'When value justification changes, the PM should inform the sponsor and revalidate the Business Case. Protect organizational resources.',
      reference: 'Section 5.1'
    },
    {
      text: 'A sponsor asks you to begin purchasing equipment and assigning staff, but the charter has not been approved. What should you do next?',
      options: [
        'Start work to show progress while the charter is being drafted',
        'Ask the team to begin “unofficially” to avoid delays',
        'Work with the sponsor to finalize and approve the Project Charter first',
        'Create the full project schedule and then request approval'
      ],
      correct: 2,
      explanation: 'Without an approved charter, the project is not formally authorized. The next step is to get charter approval before committing resources.',
      reference: 'Section 5.2'
    },
    {
      text: 'Which item belongs in the Project Charter (not in the detailed plan)?',
      options: [
        'Daily task assignments for the team',
        'A complete WBS Dictionary',
        'Summary milestones and high-level success criteria',
        'A fully baselined schedule with critical path analysis'
      ],
      correct: 2,
      explanation: 'The charter contains high-level scope, milestones, budget envelope, and success criteria—not detailed plans or baselines.',
      reference: 'Section 5.2'
    },
    {
      text: 'A functional manager refuses to release a key engineer and claims the project has not been formally approved. What should the PM show first?',
      options: [
        'The Business Case',
        'The Project Charter',
        'The Product Backlog',
        'The Risk Register'
      ],
      correct: 1,
      explanation: 'The charter is the formal authorization that proves the PM has authority to request resources.',
      reference: 'Section 5.2'
    },
    {
      text: 'During a kickoff meeting, a stakeholder asks for the detailed day-by-day task plan for the next six months. The project has just been chartered. What is the best response?',
      options: [
        'Explain that detailed planning and task sequencing follow initiation; the charter only includes summary milestones',
        'Commit to delivering a full task plan by end of day',
        'Ask the stakeholder to create the task plan so you can approve it',
        'Reject the request because planning is not required in Agile projects'
      ],
      correct: 0,
      explanation: 'The charter is a high-level authorization document. Detailed planning occurs after initiation.',
      reference: 'Section 5.2'
    },
    {
      text: 'You are documenting that the project relies on the availability of a specific cloud server by July. The contract is not signed yet. How should this be classified?',
      options: [
        'Constraint, because it is a requirement',
        'Assumption, because it is believed true for planning but not yet proven',
        'Work package, because it is a deliverable',
        'Quality metric, because it relates to performance'
      ],
      correct: 1,
      explanation: 'If something is believed for planning but not confirmed, it is an assumption. Unvalidated assumptions are risk sources.',
      reference: 'Section 5.3'
    },
    {
      text: 'A new regulation requires customer data to remain in-country (data residency). How should this be treated in initiation?',
      options: [
        'As an assumption, because regulations might change later',
        'As a constraint, because it is a non-negotiable legal boundary',
        'As an issue, because it will definitely delay the project',
        'As a benefit, because it improves security'
      ],
      correct: 1,
      explanation: 'Regulatory requirements are constraints—non-negotiable boundaries the project must comply with.',
      reference: 'Section 5.3'
    },
    {
      text: 'You have an assumption that a vendor can deliver a key component in 30 days. Delivery date is uncertain. What is the best action?',
      options: [
        'Treat it as fact and build the schedule around it',
        'Document it in the Assumption Log with an owner and validation date, and plan a fallback',
        'Ignore it until planning is complete',
        'Move it to the Lessons Learned Register'
      ],
      correct: 1,
      explanation: 'Good initiation practice is to capture assumptions with owners and validation dates, and plan responses if they fail.',
      reference: 'Section 5.3'
    },
    {
      text: 'An assumption was recorded: “The SME will be available 10 hours/week.” The SME later informs you they are not available at all. Work is blocked. What does this become?',
      options: [
        'A closed assumption',
        'An issue that must be addressed now (and may also trigger new risks)',
        'A change request automatically approved',
        'A benefit realization event'
      ],
      correct: 1,
      explanation: 'When an assumption is proven false and work is impacted, it becomes an issue to resolve immediately.',
      reference: 'Section 5.3'
    },
    {
      text: 'A project has stable requirements, high cost of change, and a single final release. Which delivery approach is most appropriate?',
      options: [
        'Predictive',
        'Adaptive (Agile)',
        'Hybrid',
        'Randomized'
      ],
      correct: 0,
      explanation: 'Stable environments with high change cost and a single release align with predictive approaches.',
      reference: 'Section 5.4'
    },
    {
      text: 'A product has unclear requirements and needs frequent stakeholder feedback and incremental releases. Which delivery approach is best?',
      options: [
        'Predictive',
        'Adaptive (Agile)',
        'Hybrid',
        'Only predictive because requirements are unclear'
      ],
      correct: 1,
      explanation: 'Agile approaches are designed for emerging requirements and frequent delivery/feedback loops.',
      reference: 'Section 5.4'
    },
    {
      text: 'A project has high uncertainty but a non-negotiable legal deadline. What delivery strategy best fits the 2026 mindset?',
      options: [
        'Predictive only',
        'Adaptive (Agile) only',
        'Hybrid: predictive guardrails for the deadline with agile cycles for evolving scope',
        'No strategy can handle fixed deadlines'
      ],
      correct: 2,
      explanation: 'Hybrid balances fixed constraints (deadline) with iterative delivery for uncertain scope.',
      reference: 'Section 5.4'
    },
    {
      text: 'A project has spent $2M so far but is failing to meet the current market need. Completing it requires another $1M. A competitor has just released a better product for free. What should be done with the $2M spent when deciding whether to continue?',
      options: [
        'Factor it into the ROI calculation to ensure the money is not wasted',
        'Ignore it as Sunk Cost and evaluate the project solely on future value vs. future cost',
        'Continue the project to justify the $2M investment',
        'Subtract the $2M from the new budget request'
      ],
      correct: 1,
      explanation: 'Sunk Costs (money already spent) should not influence future decisions. Decisions must be based on future investment vs. future value.',
      reference: 'Section 5.1'
    },
    {
      text: 'In an Agile environment, what is the primary focus of the project chartering process?',
      options: [
        'Defining a detailed WBS and fixed scope',
        'Establishing a clear Vision and Mission to guide self-organizing teams',
        'Assigning detailed tasks to developers',
        'Locking down the budget for the entire year'
      ],
      correct: 1,
      explanation: 'Agile charters focus on the "North Star" (Vision/Mission) to give teams direction while allowing scope to emerge.',
      reference: 'Section 5.2'
    },
    {
      text: 'During chartering, you are reviewing government safety regulations that mandate specific testing procedures. How should these regulations be classified?',
      options: [
        'Organizational Process Assets (OPA)',
        'Enterprise Environmental Factors (EEF)',
        'Project Assumptions',
        'Stakeholder Register'
      ],
      correct: 1,
      explanation: 'Government regulations are external conditions outside the project team’s control, making them Enterprise Environmental Factors (EEF).',
      reference: 'Section 5.2'
    },
    {
      text: 'You must choose between two exclusive projects. Project Alpha has a value of $90,000. Project Beta has a value of $60,000. If you select Project Alpha, what is the Opportunity Cost?',
      options: [
        '$90,000',
        '$60,000',
        '$30,000',
        '$150,000'
      ],
      correct: 1,
      explanation: 'Opportunity Cost is the value of the option NOT selected. Since you picked Alpha, you gave up the $60,000 value of Beta.',
      reference: 'Section 5.1'
    }
  ]"
/>

## Next Steps

If you scored:
- **< 60%**: Re-read Sections 5.1–5.4 and write your own one-sentence definitions for Business Case, Charter, Constraint, Assumption, and Hybrid delivery.
- **60-79%**: Review the explanations for each missed question and focus on the “why” behind each choice.
- **≥ 80%**: You are ready to move on to **[Chapter 6: Project Planning](/guide/06-project-planning/)**.

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project is running and you discover the Business Case is no longer valid (e.g., market changed), your immediate goal is to <strong>inform the sponsor</strong>. Do not just keep working; protect the organization's resources.
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
