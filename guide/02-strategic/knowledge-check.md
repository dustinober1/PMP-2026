# Knowledge Check: Strategy & Business

Test your ability to connect project decisions to business strategy, value, and governance. These 25 questions cover the full Strategic Domain.

<QuizComponent
  title="Chapter 2 Knowledge Check"
  :questions="[
    {
      text: 'A project has spent $2M and is 50% complete. A market shift renders the product obsolete. Completing the project will cost another $2M. The sponsor argues, “We cannot waste the $2M we already spent.” What is the PM’s best response?',
      options: [
        'Agree and continue the project to recover the investment',
        'Recommend termination because the $2M is a Sunk Cost and should not influence future decisions',
        'Reduce scope to save $1M and finish partially',
        'Use the remaining budget to pivot to a new unrelated project immediately'
      ],
      correct: 1,
      explanation: 'Sunk Costs (money already spent) are irrelevant to future decision making. If the project has no future value, spending more money to “save” it is the Sunk Cost Fallacy.',
      reference: 'Section 2.1a'
    },
    {
      text: 'You are selecting between two mutually exclusive projects. Project A has an NPV of $50,000. Project B has an NPV of $70,000. If you select Project B, what is the Opportunity Cost?',
      options: [
        '$20,000',
        '$50,000',
        '$70,000',
        '$120,000'
      ],
      correct: 1,
      explanation: 'Opportunity Cost is the value of the option NOT chosen. By choosing B, you gave up the $50,000 value of A.',
      reference: 'Section 2.1a'
    },
    {
      text: 'Which financial metric indicates the projected annual growth rate of an investment? (Hint: Higher is better)',
      options: [
        'Net Present Value (NPV)',
        'Internal Rate of Return (IRR)',
        'Payback Period',
        'Benefit-Cost Ratio (BCR)'
      ],
      correct: 1,
      explanation: 'IRR is the interest rate at which the Net Present Value of all cash flows equals zero. Generally, a higher IRR is better.',
      reference: 'Section 2.1a'
    },
    {
      text: 'A project is delivering on time and budget, but market shifts have made the final product obsolete. What is the most appropriate action for the Project Manager?',
      options: [
        'Continue to finish the project as per the approved charter',
        'Recommend project termination to the governance board',
        'Use the remaining budget to start a new, more relevant project',
        'Ask the team to work faster to finish before the market changes further'
      ],
      correct: 1,
      explanation: 'Continuing to spend money on zero-value work is a failure of stewardship. The PM must raise the strategic misalignment to the governance board.',
      reference: 'Section 2.1'
    },
    {
      text: 'Which statement best describes the difference between Portfolio and Program management?',
      options: [
        'Portfolios focus on doing the work right; Programs focus on doing the right work',
        'Portfolios manage related projects; Programs manage the entire enterprise',
        'Portfolios maximize strategic value; Programs maximize synergistic benefits',
        'There is no difference; the terms are interchangeable'
      ],
      correct: 2,
      explanation: 'Portfolio = Strategy/Investment mix (Doing the right things). Program = Coordinated benefits/Synergy (Doing related things together).',
      reference: 'Section 2.1b / 2.5'
    },
    {
      text: 'A compliance project has a negative NPV (it costs money and generates no revenue). What is the most appropriate decision?',
      options: [
        'Reject it because it does not create financial value',
        'Delay it until there is more budget available',
        'Proceed because compliance work is mandatory to maintain the license to operate',
        'Replace it with a higher ROI project'
      ],
      correct: 2,
      explanation: 'Compliance work can be mandatory even when it has negative financial return. On the exam, legality and safety are not optional.',
      reference: 'Section 2.1a / 2.3'
    },
    {
      text: 'Which selection technique compares multiple initiatives using weighted criteria (strategic fit, risk, value, capacity)?',
      options: [
        'Scoring model',
        'Critical path method',
        'Monte Carlo simulation',
        'Burndown chart'
      ],
      correct: 0,
      explanation: 'A scoring model (weighted criteria) is a common way to rank and prioritize proposed work across mixed dimensions.',
      reference: 'Section 2.1a'
    },
    {
      text: 'In the Balanced Scorecard, which perspective focuses on internal efficiency and process improvement?',
      options: ['Financial', 'Customer', 'Internal', 'Growth'],
      correct: 2,
      explanation: 'The Internal perspective focuses on how well the organization operates and improves processes.',
      reference: 'Section 2.1a'
    },
    {
      text: 'Which artifact formally authorizes a project to begin and gives the Project Manager authority to apply organizational resources?',
      options: ['Business Case', 'Project Charter', 'Benefits Realization Plan', 'Procurement SOW'],
      correct: 1,
      explanation: 'The project charter authorizes the project and establishes the PM’s authority.',
      reference: 'Section 2.1'
    },
    {
      text: 'You need the official organizational template and approval process for a new project document. Where should you go first?',
      options: ['A vendor', 'The PMO', 'The project team', 'A competitor website'],
      correct: 1,
      explanation: 'The PMO standardizes governance and provides templates, policies, and guidance.',
      reference: 'Section 2.1h'
    },
    {
      text: 'You identify a dependency on another project that you do not control. What should you do first?',
      options: [
        'Escalate immediately to the steering committee',
        'Contact the peer Project Manager to coordinate and resolve it',
        'Ignore it until it becomes an issue',
        'Add a buffer and proceed without communicating'
      ],
      correct: 1,
      explanation: 'PMI expects you to attempt peer-to-peer coordination first, then escalate if it cannot be resolved at your level.',
      reference: 'Section 2.1c'
    },
    {
      text: 'Your project is on time and on budget, but a portfolio review determines it no longer aligns with strategy. What is the best response?',
      options: [
        'Argue to continue because the plan is approved',
        'Continue quietly to avoid wasted effort',
        'Support an orderly closure and transition, per governance direction',
        'Increase scope to make the project more valuable'
      ],
      correct: 2,
      explanation: 'Portfolio decisions can stop or redirect work. The PM should support an orderly administrative closure.',
      reference: 'Section 2.1b'
    },
    {
      text: 'Portfolio leaders complain that people are spread too thin across too many projects. What portfolio practice addresses this directly?',
      options: [
        'Increase meeting frequency',
        'Apply WIP limits (Work In Progress) to reduce active work',
        'Add more status reports',
        'Freeze the risk register'
      ],
      correct: 1,
      explanation: 'WIP limits reduce the number of concurrent initiatives, improving flow and reducing context switching.',
      reference: 'Section 2.1b'
    },
    {
      text: 'In PESTLE, inflation and interest rates are primarily which category?',
      options: ['Political', 'Economic', 'Social', 'Technological'],
      correct: 1,
      explanation: 'Inflation and interest rates are economic conditions that can impact budgets, demand, and financing.',
      reference: 'Section 2.1f'
    },
    {
      text: 'A new law is passed mid-project that makes your current design non-compliant. What should you do first?',
      options: [
        'Finish the project as planned, then retrofit compliance later',
        'Perform an impact assessment and notify the sponsor/governance',
        'Ask the team to work overtime to absorb the change silently',
        'Request that the regulator grant a waiver'
      ],
      correct: 1,
      explanation: 'First assess impact and escalate appropriately. Compliance is non-negotiable.',
      reference: 'Section 2.1f / 2.3'
    },
    {
      text: 'Which item is a Benefit (not an Output or Outcome) for an automated expense system?',
      options: [
        'The expense app is deployed to production',
        'Employees submit expenses in the new system instead of spreadsheets',
        '$250k annual administrative savings',
        'The training course is completed'
      ],
      correct: 2,
      explanation: 'Benefits are measurable strategic value (often financial or risk reduction) realized after delivery and adoption.',
      reference: 'Section 2.1d'
    },
    {
      text: 'Who is primarily accountable for ensuring benefits are realized after the project closes?',
      options: ['Project Manager', 'Benefits Owner / Business Owner', 'Scrum Master', 'Procurement Manager'],
      correct: 1,
      explanation: 'The PM delivers outputs; the business owns outcomes and benefits realization over time.',
      reference: 'Section 2.1d'
    },
    {
      text: 'Six months after go-live, expected benefits have not appeared. What is the most appropriate next step?',
      options: [
        'Declare success because deliverables were completed',
        'Recommend a post-implementation review to identify adoption and process barriers',
        'Close all risks because the project is done',
        'Replace the sponsor'
      ],
      correct: 1,
      explanation: 'If benefits are not realized, PMI expects you to investigate adoption barriers and process change.',
      reference: 'Section 2.1d'
    },
    {
      text: 'Which set best represents the Triple Bottom Line?',
      options: [
        'Scope, Schedule, Cost',
        'Profit, People, Planet',
        'Risk, Issues, Changes',
        'Quality, Speed, Efficiency'
      ],
      correct: 1,
      explanation: 'The Triple Bottom Line extends value beyond profit to social and environmental outcomes.',
      reference: 'Section 2.2'
    },
    {
      text: 'A cheaper vendor has a history of human rights violations. What should the Project Manager do?',
      options: [
        'Select them to protect the budget',
        'Select them but ask for better behavior in writing',
        'Reject them to align with ESG and ethics constraints',
        'Ignore the history if it happened more than one year ago'
      ],
      correct: 2,
      explanation: 'On the PMP exam, ethics and ESG constraints can disqualify vendors regardless of price.',
      reference: 'Section 2.2'
    },
    {
      text: 'A team proposes using customer data to train an AI model without explicit consent. What is the best action?',
      options: [
        'Proceed because the project is internal',
        'Proceed if the data is anonymized without verification',
        'Stop and involve legal/compliance to confirm requirements and obtain proper consent or alternative data',
        'Wait until after deployment to address privacy concerns'
      ],
      correct: 2,
      explanation: 'Data privacy and compliance are mandatory. Engage legal/compliance, confirm requirements, and implement consent.',
      reference: 'Section 2.3'
    },
    {
      text: 'Which group typically has authority to approve major budget increases or cancel the project for strategic reasons?',
      options: ['Project team', 'Steering committee / governance board', 'Scrum Master', 'Individual stakeholder'],
      correct: 1,
      explanation: 'Strategic direction and funding decisions sit with governance bodies such as the steering committee.',
      reference: 'Section 2.3'
    },
    {
      text: 'Training is excellent, but adoption is still low because users do not want to change. In ADKAR, what is most likely missing?',
      options: ['Awareness', 'Desire', 'Knowledge', 'Ability'],
      correct: 1,
      explanation: 'Training improves Knowledge/Ability. If people still resist, the missing element is often Desire (motivation/WIIFM).',
      reference: 'Section 2.4'
    },
    {
      text: '“Culture eats strategy for breakfast.” What does this imply for a Project Manager trying to implement Agile in a rigid hierarchy?',
      options: [
        'The strategy will succeed because Agile is superior',
        'The project is likely to fail unless the PM addresses the cultural conflict first',
        'The PM should ignore culture and just focus on Jira',
        'Culture is irrelevant to project success'
      ],
      correct: 1,
      explanation: 'Strategy cannot succeed if it violates the organization’s culture. The culture must be addressed/shifted, or the strategy adapted.',
      reference: 'Section 2.4'
    },
    {
      text: 'In an Agile environment, how is Governance primarily handled?',
      options: [
        'Through rigid Phase Gates and 100-page requirement documents',
        'Through empirical control, frequent system demos, and reviewing the working product',
        'There is no governance in Agile',
        'The Scrum Master makes all governance decisions'
      ],
      correct: 1,
      explanation: 'Agile governance relies on empirical data (observing the actual working system) rather than predictive documents.',
      reference: 'Section 2.3'
    }
  ]"
/>

---

## 🏆 Key Takeaways

| Concept | The "PMI Way" |
| :-- | :-- |
| **Selection** | Use objective criteria (value, fit, risk, capacity). **Sunk costs are irrelevant.** |
| **Portfolio** | Optimize the whole system (prioritize, rebalance, stop low-value work). |
| **Benefits** | Outputs are not enough. Track adoption and value; benefits are owned by the business. |
| **Environment** | Scan PESTLE signals early and respond with impact assessment and governance decisions. |
| **Compliance** | Laws and ethics are non-negotiable; update baselines via change control when needed. |
| **Change** | Adoption is part of “done.” Diagnose resistance (ADKAR) and build momentum (Kotter). **Culture Matters.** |
| **PMO** | Use standards, templates, and governance support to execute the “organizational way.” |

## Additional Study Topics

Use these as a quick “one stop” review before the exam:
1. **Business case vs charter**: justification vs authorization.
2. **Financial comparisons**: NPV, ROI, IRR (higher is better), Opportunity Cost.
3. **Governance bodies**: sponsor vs steering committee vs CCB vs PMO.
4. **Benefits chain**: output → outcome → benefit, plus leading vs lagging indicators.
5. **PESTLE scanning**: recognize the category and the PMI-aligned response pattern.
6. **ESG**: where it shows up (requirements, procurement, ethics).
7. **Change models**: ADKAR (individual) vs Kotter (organizational).

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> Business Environment questions often test your courage. Will you "speak truth to power" and recommend canceling a bad project? Or will you obediently waste money? <strong>PMI wants leaders, not order-takers.</strong>
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
