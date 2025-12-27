# Knowledge Check: Initiation

Test your ability to justify value, secure authorization, define boundaries, and tailor the delivery strategy. These 25 questions cover the full breadth of Chapter 5 content in the 2026 PMP context.

<QuizComponent
  title="Chapter 5: Comprehensive Review (25 Questions)"
  :questions="[
    {
      text: 'A sponsor is evaluating two projects. Project Alpha has an NPV of $50,000 and a 12-month payback. Project Beta has an NPV of $120,000 and a 24-month payback. The organization wants to maximize long-term value. Which project should be selected?',
      options: [
        'Project Alpha, because shorter payback reduces risk exposure',
        'Project Beta, because NPV is the superior metric for total value realization',
        'Neither, as IRR must be calculated first',
        'Both projects should be rejected due to the long payback periods'
      ],
      correct: 1,
      explanation: 'Net Present Value (NPV) is the primary project selection metric. Higher NPV indicates a larger total value contribution. While payback period matters for cash flow, NPV measures the true scale of value delivery.',
      reference: 'Section 5.1'
    },
    {
      text: 'Your project has spent $3M but market analysis reveals a competitor released a superior free alternative. Completing your project requires another $500K. Using proper economic principles, how should the $3M be treated when deciding whether to continue?',
      options: [
        'Include it in ROI calculations to justify the full investment',
        'Ignore it as Sunk Cost and evaluate only future investment vs. future value',
        'Continue the project to avoid wasting the $3M already spent',
        'Subtract it from the remaining budget to reduce costs'
      ],
      correct: 1,
      explanation: 'Sunk Costs (money already spent) should not influence future decisions. The $3M is gone regardless. Only compare future investment ($500K) vs. future value (likely $0 given competitor).',
      reference: 'Section 5.1'
    },
    {
      text: 'You must choose between two mutually exclusive projects. Project A has a value of $150,000. Project B has a value of $90,000. If you select Project A, what is the Opportunity Cost of your decision?',
      options: [
        '$150,000',
        '$90,000',
        '$60,000',
        '$240,000'
      ],
      correct: 1,
      explanation: 'Opportunity Cost is the value of the option NOT selected. By choosing Project A, you give up the $90,000 value of Project B.',
      reference: 'Section 5.1'
    },
    {
      text: 'A project has an IRR of 18%. The organization hurdle rate is 15%. What should the portfolio team conclude?',
      options: [
        'Reject the project because financial metrics alone are insufficient',
        'Accept the project because IRR exceeds the cost of capital requirement',
        'Reject the project because 18% is too high a return',
        'Request additional analysis because IRR cannot be compared to hurdle rates'
      ],
      correct: 1,
      explanation: 'If IRR exceeds the hurdle rate (required rate of return), the project meets the organization minimum return requirement and should generally be accepted.',
      reference: 'Section 5.1'
    },
    {
      text: 'You have $1M capital budget and must select from these projects: Project A (BCR 2.1, NPV $200K), Project B (BCR 1.5, NPV $400K), Project C (BCR 1.8, NPV $150K). Which selection approach is most appropriate?',
      options: [
        'Select Project A because it has the highest BCR',
        'Select Project B because it has the highest NPV',
        'Select all three if combined NPV is positive',
        'Use weighted scoring to include non-financial factors'
      ],
      correct: 1,
      explanation: 'When comparing individual projects, NPV is the primary metric for maximizing total value. BCR is more useful when comparing relative efficiency, but NPV shows absolute value creation.',
      reference: 'Section 5.1'
    },
    {
      text: 'A project NPV is negative but addresses a critical regulatory compliance deadline. Non-compliance would result in $5M in fines. What is the best recommendation?',
      options: [
        'Reject the project because negative NPV always indicates poor investment',
        'Proceed because avoiding fines is the real value, even if direct NPV is negative',
        'Delay until a positive NPV alternative is found',
        'Request the regulatory body extend the deadline'
      ],
      correct: 1,
      explanation: 'Compliance work can be mandatory regardless of NPV. The true value includes avoiding penalties and maintaining license to operate.',
      reference: 'Section 5.1'
    },
    {
      text: 'During a portfolio review, an executive asks about the Benefits Management Plan. Which statement best describes its purpose?',
      options: [
        'It authorizes the PM to begin planning',
        'It defines how and when value will be measured after project delivery',
        'It provides the detailed task schedule for execution',
        'It lists all stakeholders and their communication needs'
      ],
      correct: 1,
      explanation: 'The Benefits Management Plan defines benefit measures, owners, timeline, and sustainment approach. Benefits are typically realized after project closure during operations.',
      reference: 'Section 5.1'
    },
    {
      text: 'A sponsor asks you to begin purchasing equipment and hiring contractors, but the Project Charter has not been approved. What should you do?',
      options: [
        'Begin procurement to show initiative and save time',
        'Ask the team to start unofficially while awaiting approval',
        'Work with the sponsor to finalize and approve the Charter first',
        'Create the detailed schedule to demonstrate readiness, then request approval'
      ],
      correct: 2,
      explanation: 'Without an approved charter, the project is not formally authorized. Committing resources without authorization is both a governance and ethical violation.',
      reference: 'Section 5.2'
    },
    {
      text: 'A functional manager refuses to release a resource, claiming the project has not been formally approved. What document should the PM reference first?',
      options: [
        'Business Case',
        'Project Charter',
        'Resource Management Plan',
        'Stakeholder Register'
      ],
      correct: 1,
      explanation: 'The Project Charter is the formal authorization that proves the PM has authority granted by senior management to request organizational resources.',
      reference: 'Section 5.2'
    },
    {
      text: 'Which of the following is an Enterprise Environmental Factor (EEF) that would constrain project planning?',
      options: [
        'Lessons learned from a similar project completed last year',
        'The organization project charter template from the PMO',
        'Government safety regulations affecting product design',
        'Historical cost estimation database'
      ],
      correct: 2,
      explanation: 'Government regulations are external conditions outside the project control—making them EEFs. Templates and historical databases are OPAs that help the project.',
      reference: 'Section 5.2'
    },
    {
      text: 'The PM is drafting the Project Charter. Which input would be classified as an Organizational Process Asset (OPA)?',
      options: [
        'Current market conditions affecting demand',
        'Company culture that resists change',
        'Standard project charter template from previous projects',
        'Regulatory compliance requirements'
      ],
      correct: 2,
      explanation: 'OPAs are internal processes and knowledge bases that help the project. Templates, lessons learned, and historical data are OPAs. External conditions like regulations and market trends are EEFs.',
      reference: 'Section 5.2'
    },
    {
      text: 'A stakeholder asks for a detailed day-by-day schedule at the kickoff meeting. The project was just chartered. What is the best response?',
      options: [
        'Commit to deliver the detailed plan by end of week',
        'Explain that detailed scheduling follows initiation; the charter includes only summary milestones',
        'Ask the stakeholder to create the schedule for review',
        'Reject the request because Agile projects do not need schedules'
      ],
      correct: 1,
      explanation: 'The charter is a high-level authorization document containing summary milestones. Detailed task-level planning occurs during the Planning phase after initiation.',
      reference: 'Section 5.2'
    },
    {
      text: 'The project plan assumes a vendor will deliver an API by July 15, but the contract is not yet signed. How should this be classified?',
      options: [
        'Constraint, because it is required for the schedule',
        'Assumption, because it is believed true for planning but not yet proven',
        'Risk, because it will definitely cause problems',
        'Deliverable, because the vendor will produce it'
      ],
      correct: 1,
      explanation: 'An assumption is something believed true for planning purposes without verification. Unvalidated assumptions are risk sources and should be tracked with owners and validation dates.',
      reference: 'Section 5.3'
    },
    {
      text: 'A new GDPR data residency regulation requires that all customer data remain within the EU. How should this be classified in the assumption log?',
      options: [
        'Assumption, because regulations could change',
        'Constraint, because it is a non-negotiable legal boundary',
        'Risk, because it complicates architecture decisions',
        'Dependency, because it affects the database design'
      ],
      correct: 1,
      explanation: 'Legal and regulatory requirements are constraints—non-negotiable boundaries that the project must respect. They cannot be changed by the PM or sponsor.',
      reference: 'Section 5.3'
    },
    {
      text: 'An assumption was recorded: "The lead architect will be available 30 hours per week." The architect later notifies you they accepted another role. Development work is blocked. What has this assumption become?',
      options: [
        'A validated assumption that can be closed',
        'An issue that requires immediate resolution',
        'A risk that needs probability assessment',
        'A change request requiring CCB approval'
      ],
      correct: 1,
      explanation: 'When an assumption is proven false and work is impacted, it becomes an issue requiring immediate action. The PM must find an alternative resource or adjust the schedule.',
      reference: 'Section 5.3'
    },
    {
      text: 'Using PESTLE analysis, which factor category would include inflation affecting project labor costs?',
      options: [
        'Political',
        'Economic',
        'Social',
        'Legal'
      ],
      correct: 1,
      explanation: 'PESTLE Economic factors include inflation, interest rates, exchange rates, and labor costs—all of which affect project budgeting and financial planning.',
      reference: 'Section 5.3'
    },
    {
      text: 'A project has stable, well-documented requirements, high cost of change, and will deliver a single final product. Which delivery approach is most appropriate?',
      options: [
        'Adaptive (Agile)',
        'Predictive',
        'Hybrid',
        'Iterative only'
      ],
      correct: 1,
      explanation: 'Stable requirements, high change cost, and single release align with predictive approaches that use detailed upfront planning and sequential phases.',
      reference: 'Section 5.4'
    },
    {
      text: 'A product has uncertain requirements, needs frequent stakeholder feedback, and the market is rapidly evolving. Which delivery approach is best?',
      options: [
        'Predictive with formal change control',
        'Adaptive (Agile)',
        'Hybrid with mostly predictive elements',
        'No formal approach is needed'
      ],
      correct: 1,
      explanation: 'Agile approaches are designed for emerging requirements and volatile environments. Frequent delivery and continuous feedback loops allow rapid adaptation.',
      reference: 'Section 5.4'
    },
    {
      text: 'Using the Stacey Matrix, if requirements are unclear but the technology is well-known, which domain does the project fall into?',
      options: [
        'Simple—use best practices',
        'Complicated—requires expert analysis',
        'Complex—needs experimentation',
        'Chaotic—requires immediate action'
      ],
      correct: 1,
      explanation: 'The Stacey Matrix places projects with known technology but unclear requirements in the Complicated zone, where expert analysis and a Hybrid approach are appropriate.',
      reference: 'Section 5.4'
    },
    {
      text: 'A project has high uncertainty in scope but a non-negotiable regulatory deadline. Which delivery strategy best fits this situation?',
      options: [
        'Pure Predictive to ensure deadline compliance',
        'Pure Agile to handle the uncertainty',
        'Hybrid with predictive guardrails for the deadline and Agile cycles for scope',
        'Cancel the project due to conflicting constraints'
      ],
      correct: 2,
      explanation: 'Hybrid approaches balance fixed constraints (deadline) with flexibility for uncertain scope. Predictive gates ensure compliance; Agile sprints handle emerging requirements.',
      reference: 'Section 5.4'
    },
    {
      text: 'In the Cynefin Framework, which domain requires a "Probe-Sense-Respond" approach?',
      options: [
        'Clear (Obvious)',
        'Complicated',
        'Complex',
        'Chaotic'
      ],
      correct: 2,
      explanation: 'The Complex domain requires experimentation (Probe) to understand emergent patterns (Sense) before deciding how to respond. This aligns with Agile empirical approaches.',
      reference: 'Section 5.4'
    },
    {
      text: 'Mid-project, market research reveals the Business Case assumptions are no longer valid due to competitor actions. What is the PM immediate best action?',
      options: [
        'Continue to avoid wasting previous investment',
        'Quietly adjust scope to make the Business Case valid again',
        'Inform the sponsor and revalidate the Business Case before continuing major spend',
        'Escalate to the change control board for schedule adjustment'
      ],
      correct: 2,
      explanation: 'When the value justification changes, the PM must inform the sponsor immediately. Continuing work on a project that no longer delivers value wastes organizational resources.',
      reference: 'Section 5.1'
    },
    {
      text: 'An Agile team is chartering a new product. Instead of detailed scope, what should the charter primarily focus on?',
      options: [
        'Complete WBS and task assignments',
        'Vision, mission, and OKRs to guide the self-organizing team',
        'Detailed resource allocations for each sprint',
        'Fixed scope with no flexibility for changes'
      ],
      correct: 1,
      explanation: 'Agile charters focus on Vision and Mission as the North Star. OKRs (Objectives and Key Results) replace fixed scope, allowing the team to adapt while staying aligned with goals.',
      reference: 'Section 5.2'
    },
    {
      text: 'A weighted scoring model is being used for project selection. Project X scores 8.2, Project Y scores 7.5, and Project Z scores 8.0. Budget allows only one project. Which should be selected?',
      options: [
        'Project Y, as lower scores indicate lower risk',
        'Project X, as it has the highest weighted score',
        'Project Z, as it is the most balanced option',
        'All three, as scores are close enough to be equivalent'
      ],
      correct: 1,
      explanation: 'Weighted scoring models rank projects by strategic alignment across multiple criteria. The highest weighted score (8.2) indicates the best overall fit with organizational priorities.',
      reference: 'Section 5.1'
    },
    {
      text: 'You are calculating NPV for a project with $200,000 initial investment, expected cash flows of $80,000/year for 3 years, and a 10% discount rate. Using PV factors (Year 1: 0.909, Year 2: 0.826, Year 3: 0.751), what is the approximate NPV?',
      options: [
        '$-991 (negative NPV)',
        '$-200,000 (no value created)',
        '$198,880 (total PV of cash flows)',
        '$998,880 (high positive NPV)'
      ],
      correct: 0,
      explanation: 'Year 1: $80K × 0.909 = $72,720. Year 2: $80K × 0.826 = $66,080. Year 3: $80K × 0.751 = $60,080. Total PV = $198,880. NPV = $198,880 - $200,000 = -$1,120 (approximately -$991). A negative NPV suggests the project may not meet return requirements.',
      reference: 'Section 5.1'
    }
  ]"
/>

## Next Steps

If you scored:
- **< 60%**: Re-read Sections 5.1–5.4. Focus on Business Case metrics, Charter components, Constraint vs Assumption differences, and delivery approach selection frameworks.
- **60-79%**: Review the explanations for each missed question. Pay particular attention to the Stacey Matrix and Cynefin Framework for approach selection.
- **≥ 80%**: You have a strong grasp of initiation concepts. Move on to **[Chapter 6: Project Planning](/guide/06-project-planning/)**.

---

## 📚 Key Concepts Summary

### Business Case & Selection (5.1)
- **NPV**: Higher is better—total value in today's dollars
- **IRR**: Higher is better—compare to hurdle rate
- **BCR**: Greater than 1.0 indicates positive return
- **Payback**: Shorter is better, but NPV trumps payback
- **Sunk Cost**: Ignore it—never base decisions on past spend
- **Opportunity Cost**: Value of the option not selected

### Project Charter (5.2)
- **Purpose**: Formal authorization to use resources
- **Key Elements**: PM authority, success criteria, milestones, budget, stakeholders
- **EEF**: External factors that constrain (regulations, market, culture)
- **OPA**: Internal assets that help (templates, lessons learned)

### Constraints & Assumptions (5.3)
- **Constraints**: Non-negotiable boundaries (schedule, budget, regulations)
- **Assumptions**: Believed true for planning—risk sources until validated
- **Failed Assumption**: Becomes an issue requiring immediate action
- **PESTLE**: Political, Economic, Social, Technological, Legal, Environmental

### Delivery Strategy (5.4)
- **Predictive**: Stable requirements, high change cost, single release
- **Agile**: Volatile requirements, low change cost, frequent releases
- **Hybrid**: Mixed characteristics, fixed dates with flexible scope
- **Stacey Matrix**: Clear requirements + known tech = Simple/Predictive
- **Cynefin**: Complex domain requires Probe-Sense-Respond (Agile)

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
