# Knowledge Check: Integrated Planning

Test your ability to weave together scope, schedule, cost, and resource baselines for the 2026 PMP exam.

<QuizComponent
  title="Chapter 6: Planning"
  :questions="[
    {
      text: 'A Project Manager is leading a predictive project and the team is confused about the technical requirements of a work package. Which document should they refer to?',
      options: [
        'The Project Scope Statement',
        'The WBS Dictionary',
        'The Product Backlog',
        'The Quality Management Plan'
      ],
      correct: 1,
      explanation: 'The WBS Dictionary provides the detailed technical information, requirements, and acceptance criteria for every work package in the WBS.',
      reference: 'Section 6.1'
    },
    {
      text: 'The project is critical to the organization strategy and MUST finish by December 31st. The current schedule shows a January 15th finish. Budget is available. What should the PM do?',
      options: [
        'Fast track the project by performing tasks in parallel',
        'Crash the schedule by adding resources to critical path activities',
        'Inform the sponsor the date is impossible',
        'Use the management reserve to pay for a faster vendor'
      ],
      correct: 1,
      explanation: 'Crashing (adding resources) is the preferred method when budget is available and the end date is firm. Fast tracking is used when budget is NOT available.',
      reference: 'Section 6.2'
    },
    {
      text: 'Which part of the budget is NOT included in the Cost Baseline but is included in the Total Project Budget?',
      options: [
        'Activity Estimates',
        'Contingency Reserve',
        'Management Reserve',
        'Indirect Costs'
      ],
      correct: 2,
      explanation: 'Management Reserve is for Unknown Unknowns and is not part of the Cost Baseline used for performance measurement (EVM).',
      reference: 'Section 6.3'
    },
    {
      text: 'You are managing a global team. A key task is delayed because equipment is stuck in customs. This specific risk was identified in the risk register last month. What should you use to cover the delay costs?',
      options: [
        'The Management Reserve',
        'The Project Sponsor\'s personal budget',
        'The Contingency Reserve',
        'The Quality Budget'
      ],
      correct: 2,
      explanation: 'Since the risk was identified (Known Unknown), the Contingency Reserve is the appropriate source of funding.',
      reference: 'Section 6.3'
    },
    {
      text: 'A project manager is evaluating the cost of a new server. They consider not just the purchase price, but the electricity, maintenance, and eventual disposal costs over 5 years. What technique is this?',
      options: [
        'Value Engineering',
        'Lifecycle Costing',
        'Sunk Cost Analysis',
        'Opportunity Cost'
      ],
      correct: 1,
      explanation: 'Lifecycle Costing looks at the total cost of ownership (acquisition, operation, disposal) rather than just the initial build cost.',
      reference: 'Section 6.3'
    },
    {
      text: 'An agile team is struggling to finish their scope within the sprint. The Product Owner wants to add \'one more tiny feature\' to the current sprint. What is the best PM action?',
      options: [
        'Agree to the change to keep the Product Owner happy',
        'Add the feature to the current sprint but ask the team to work overtime',
        'Advise the Product Owner that the feature should be added to the backlog for prioritization in the next sprint planning',
        'Immediately update the WBS to include the story'
      ],
      correct: 2,
      explanation: 'In agile, the scope of a sprint is fixed once started. New items go to the backlog for future prioritization.',
      reference: 'Section 6.1'
    },
    {
      text: 'Which set of documents makes up the Scope Baseline in a predictive project?',
      options: [
        'Requirements Documentation, RTM, and Activity List',
        'Project Scope Statement, WBS, and WBS Dictionary',
        'Cost Baseline, Schedule Baseline, and Scope Statement',
        'Product Backlog, Sprint Backlog, and Definition of Done'
      ],
      correct: 1,
      explanation: 'The Scope Baseline is the approved version of the Project Scope Statement, the WBS, and the WBS Dictionary. It is the target used for controlling scope.',
      reference: 'Section 6.1'
    },
    {
      text: 'A compliance auditor asks you to show where each requirement originated and which deliverable/test proves it was met. Which artifact should you use?',
      options: [
        'Work Breakdown Structure (WBS)',
        'Requirements Traceability Matrix (RTM)',
        'Risk Register',
        'Resource Calendar'
      ],
      correct: 1,
      explanation: 'The RTM links requirements to their source, the work that delivers them, and how they will be verified and accepted.',
      reference: 'Section 6.1'
    },
    {
      text: 'A developer adds an unrequested feature to delight the customer without approval. What is this called?',
      options: [
        'Scope Creep',
        'Gold Plating',
        'Value Engineering',
        'Progressive Elaboration'
      ],
      correct: 1,
      explanation: 'Gold plating is adding extra features or work that was not requested or approved. It increases risk and wastes resources, even if it is free.',
      reference: 'Section 6.1'
    },
    {
      text: 'Your scope is baselined. A stakeholder requests a new feature that will add two weeks of effort. What should the PM do next (predictive context)?',
      options: [
        'Add the feature to the WBS immediately to avoid delays',
        'Submit a change request and perform impact analysis before updating any baselines',
        'Reject the request because baselines can never change',
        'Ask the team to absorb the work without changing the schedule or budget'
      ],
      correct: 1,
      explanation: 'Once a plan is baselined, changes require Integrated Change Control: document the change request, analyze impacts (scope/schedule/cost/resources/risk), then seek approval before updating baselines.',
      reference: 'Section 6.1'
    },
    {
      text: 'Which item is an example of Project Scope (not Product Scope)?',
      options: [
        'The mobile app supports Face ID login',
        'The dashboard loads in under 2 seconds',
        'Train 200 users on the new system',
        'The report exports to CSV'
      ],
      correct: 2,
      explanation: 'Project scope is the work required to deliver the product. Training, migration, installation, and deployment work are project scope. Features and performance requirements are product scope.',
      reference: 'Section 6.1'
    },
    {
      text: 'During a bidder conference, a vendor asks a question about the SOW that reveals a flaw in your requirements. What must you do?',
      options: [
        'Answer the vendor privately to thank them for the catch',
        'Update the SOW and send the answer/amendment to all potential bidders',
        'Ignore the question to avoid embarrassment',
        'Cancel the procurement immediately'
      ],
      correct: 1,
      explanation: 'Fairness dictates that all vendors must have access to the same information. You must update the documents and share the answer with everyone.',
      reference: 'Section 6.4'
    },
    {
      text: 'In a Finish-to-Start (FS) dependency, when can the successor activity begin?',
      options: [
        'After the predecessor starts',
        'After the predecessor finishes',
        'Before the predecessor finishes',
        'Only when both activities finish at the same time'
      ],
      correct: 1,
      explanation: 'Finish-to-Start means the successor cannot start until the predecessor finishes (the most common dependency type on the exam).',
      reference: 'Section 6.2'
    },
    {
      text: 'You must wait 48 hours after pouring concrete before you can start framing. What is this 48-hour delay called?',
      options: [
        'Lead',
        'Lag',
        'Float',
        'Crashing'
      ],
      correct: 1,
      explanation: 'A lag is a mandatory waiting period inserted between activities (e.g., cure time, dry time, regulatory waiting period).',
      reference: 'Section 6.2'
    },
    {
      text: 'A network has two paths: Path 1 totals 9 days and Path 2 totals 11 days. Which statement is true?',
      options: [
        'Path 1 is the critical path because it is shorter',
        'Path 2 is the critical path because it is longer',
        'Both paths are critical because they share a start activity',
        'The critical path cannot be determined without cost data'
      ],
      correct: 1,
      explanation: 'The critical path is the longest path through the network and determines the earliest possible finish date. Critical path activities typically have zero total float.',
      reference: 'Section 6.2'
    },
    {
      text: 'Your budget for June is $50,000, but the schedule dictates $70,000 of work. You adjust the schedule to align the spend with the cash flow limits. What is this called?',
      options: [
        'Crashing',
        'Funding Limit Reconciliation',
        'Value Engineering',
        'Reserve Analysis'
      ],
      correct: 1,
      explanation: 'Funding Limit Reconciliation involves rescheduling work to ensure planned expenditures do not exceed the funds available (cash flow) for a given period.',
      reference: 'Section 6.3'
    },
    {
      text: 'You plan near-term work in detail and future work at a high level, waiting to decompose it until more information is known. What is this technique?',
      options: [
        'Crashing',
        'Fast tracking',
        'Rolling Wave Planning',
        'Gold Plating'
      ],
      correct: 2,
      explanation: 'Rolling Wave Planning is a form of progressive elaboration where near-term work is planned in detail and future work is planned at a higher level.',
      reference: 'Section 6.2'
    },
    {
      text: 'An agile team wants to forecast how much work they can complete over the next three sprints. Which metric is most useful?',
      options: [
        'Cost variance (CV)',
        'Velocity',
        'Total float',
        'Management reserve'
      ],
      correct: 1,
      explanation: 'Velocity is a measure of throughput over time. It helps teams forecast future delivery based on past performance (it is not meant to rank individuals).',
      reference: 'Section 6.2'
    },
    {
      text: 'Which estimation technique is typically the most accurate but also the most time-consuming?',
      options: [
        'Analogous',
        'Parametric',
        'Bottom-up',
        'Three-point'
      ],
      correct: 2,
      explanation: 'Bottom-up estimating builds estimates at the activity/work package level and rolls them up. It is usually the most accurate and also the most effort-intensive.',
      reference: 'Section 6.3'
    },
    {
      text: 'Which formula represents a PERT three-point estimate?',
      options: [
        '(O + M + P) / 3',
        '(O + 4M + P) / 6',
        '(P - O) / 2',
        'EV / AC'
      ],
      correct: 1,
      explanation: 'PERT uses a weighted average that emphasizes the Most Likely estimate: (Optimistic + 4×Most Likely + Pessimistic) / 6.',
      reference: 'Section 6.3'
    },
    {
      text: 'Your team is grouping a large number of brainstorming ideas into natural categories for review. What tool are they using?',
      options: [
        'Affinity Diagram',
        'Mind Mapping',
        'Context Diagram',
        'Scatter Plot'
      ],
      correct: 0,
      explanation: 'Affinity Diagrams are used to organize large amounts of data into groups or themes based on their natural relationships.',
      reference: 'Section 6.1'
    },
    {
      text: 'Your schedule shows an engineer is overallocated. You must resolve the overallocation but cannot change the project finish date. What should you do?',
      options: [
        'Resource leveling',
        'Resource smoothing',
        'Fast tracking',
        'Reduce quality requirements'
      ],
      correct: 1,
      explanation: 'Resource smoothing adjusts activities within available float so you do not exceed resource limits while keeping the finish date the same. Resource leveling may extend the schedule.',
      reference: 'Section 6.4'
    },
    {
      text: 'In a RACI chart, who is ultimately answerable for a deliverable and approves the work?',
      options: [
        'Responsible',
        'Accountable',
        'Consulted',
        'Informed'
      ],
      correct: 1,
      explanation: 'Accountable is the single party who owns the outcome for a deliverable. Responsible does the work; Consulted provides input; Informed is kept up to date.',
      reference: 'Section 6.4'
    },
    {
      text: 'Which artifact best documents when specific resources are available (vacations, time zones, equipment windows) for scheduling?',
      options: [
        'Resource calendar',
        'Control chart',
        'Burnup chart',
        'Product backlog'
      ],
      correct: 0,
      explanation: 'Resource calendars show availability constraints and help prevent unrealistic schedules (e.g., ignoring vacations, time zones, or equipment access windows).',
      reference: 'Section 6.4'
    },
    {
      text: 'You have a clearly defined item and primarily need vendor pricing. Which procurement document is most appropriate?',
      options: [
        'RFP (Request for Proposal)',
        'RFQ (Request for Quotation)',
        'Issue log',
        'Change request'
      ],
      correct: 1,
      explanation: 'RFQs are used when requirements are well-defined and you primarily need price quotes. RFPs are used when you need vendors to propose a solution/approach.',
      reference: 'Section 6.4'
    },
    {
      text: 'You want to shift more cost risk to the seller and the scope is well-defined. Which contract type fits best?',
      options: [
        'Fixed price (FFP)',
        'Cost reimbursable',
        'Time and materials (T&M)',
        'Cost-plus award fee (CPAF)'
      ],
      correct: 0,
      explanation: 'Fixed-price contracts generally place more cost risk on the seller (assuming scope is clear and stable). Cost-reimbursable contracts place more risk on the buyer.',
      reference: 'Section 6.4'
    },
    {
      text: 'A project has PV = $50,000, EV = $45,000, and AC = $48,000. What is the CPI?',
      options: [
        '0.90',
        '0.94',
        '1.07',
        '1.11'
      ],
      correct: 1,
      explanation: 'CPI = EV / AC = $45,000 / $48,000 = 0.94. This indicates the project is over budget (getting 94 cents of value for every dollar spent).',
      reference: 'Section 6.3'
    },
    {
      text: 'Given the same values (PV = $50,000, EV = $45,000, AC = $48,000), what is the SPI?',
      options: [
        '0.90',
        '0.94',
        '1.04',
        '1.11'
      ],
      correct: 0,
      explanation: 'SPI = EV / PV = $45,000 / $50,000 = 0.90. This indicates the project is behind schedule (only 90% of planned work completed).',
      reference: 'Section 6.3'
    },
    {
      text: 'A project has BAC = $200,000, EV = $100,000, and AC = $120,000. If current performance continues, what is the EAC?',
      options: [
        '$200,000',
        '$220,000',
        '$240,000',
        '$280,000'
      ],
      correct: 2,
      explanation: 'EAC = BAC / CPI. First calculate CPI = EV / AC = $100,000 / $120,000 = 0.833. Then EAC = $200,000 / 0.833 = $240,000.',
      reference: 'Section 6.3'
    },
    {
      text: 'Using PERT estimation, an activity has O=4 days, M=6 days, P=14 days. What is the expected duration?',
      options: [
        '6 days',
        '7 days',
        '8 days',
        '10 days'
      ],
      correct: 1,
      explanation: 'PERT = (O + 4M + P) / 6 = (4 + 24 + 14) / 6 = 42 / 6 = 7 days.',
      reference: 'Section 6.2'
    },
    {
      text: 'For the same activity (O=4, M=6, P=14), what is the standard deviation?',
      options: [
        '1.0 days',
        '1.67 days',
        '2.0 days',
        '5.0 days'
      ],
      correct: 1,
      explanation: 'Standard Deviation = (P − O) / 6 = (14 − 4) / 6 = 10 / 6 = 1.67 days.',
      reference: 'Section 6.2'
    },
    {
      text: 'In a network diagram, Activity A has ES=0, EF=5, LS=2, LF=7. What is the total float?',
      options: [
        '0 days',
        '2 days',
        '5 days',
        '7 days'
      ],
      correct: 1,
      explanation: 'Total Float = LS − ES = 2 − 0 = 2 days (or LF − EF = 7 − 5 = 2 days).',
      reference: 'Section 6.2'
    },
    {
      text: 'A vendor contract has: Target Cost = $80k, Target Fee = $8k, Share Ratio = 70/30 (Buyer/Seller). If the vendor completes for $70k, what is the final fee?',
      options: [
        '$5,000',
        '$8,000',
        '$11,000',
        '$12,000'
      ],
      correct: 2,
      explanation: 'Savings = $80k − $70k = $10k. Seller share = $10k × 30% = $3k. Final Fee = $8k + $3k = $11k.',
      reference: 'Section 6.4'
    },
    {
      text: 'Which requirement type describes "The system must support 10,000 concurrent users"?',
      options: [
        'Functional requirement',
        'Non-functional requirement (performance)',
        'Business requirement',
        'Transition requirement'
      ],
      correct: 1,
      explanation: 'This is a non-functional requirement specifically related to performance/scalability. Functional requirements describe what the system does; non-functional describe how well it must perform.',
      reference: 'Section 6.1'
    },
    {
      text: 'In MoSCoW prioritization, which category should be cut first when the project runs out of time?',
      options: [
        'Must Have',
        'Should Have',
        'Could Have',
        'Won\'t Have'
      ],
      correct: 2,
      explanation: 'Could Have items are the first to be deferred when time runs short. Must Have items are critical and non-negotiable. Won\'t Have items are already out of scope.',
      reference: 'Section 6.1'
    },
    {
      text: 'A project has BAC = $150,000, EV = $90,000, AC = $100,000. What is the TCPI needed to finish at the original budget?',
      options: [
        '0.90',
        '1.00',
        '1.20',
        '1.67'
      ],
      correct: 2,
      explanation: 'TCPI = (BAC − EV) / (BAC − AC) = ($150k − $90k) / ($150k − $100k) = $60k / $50k = 1.20. The team must be 20% more efficient than the baseline to finish at budget.',
      reference: 'Section 6.3'
    },
    {
      text: 'Which WBS principle states that all project work must be included in the WBS?',
      options: [
        'Mutually exclusive principle',
        'Outcome-oriented principle',
        '100% rule',
        'Decomposition principle'
      ],
      correct: 2,
      explanation: 'The 100% rule states that the WBS must include 100% of the work defined by the project scope and capture all deliverables—internal, external, interim—in terms of work to be completed.',
      reference: 'Section 6.1'
    },
    {
      text: 'When performing resource leveling, what typically happens to the project finish date?',
      options: [
        'It stays the same',
        'It is reduced',
        'It is extended',
        'It is eliminated'
      ],
      correct: 2,
      explanation: 'Resource leveling typically extends the project finish date because it delays activities to resolve resource over-allocation. Resource smoothing uses float and does not change the finish date.',
      reference: 'Section 6.4'
    },
    {
      text: 'What is the primary difference between Free Float and Total Float?',
      options: [
        'Free Float affects the project end date; Total Float does not',
        'Total Float affects the project end date; Free Float only affects the next activity',
        'They are the same thing',
        'Free Float is always larger than Total Float'
      ],
      correct: 1,
      explanation: 'Total Float is the time an activity can slip without affecting the project finish date. Free Float is the time an activity can slip without affecting the early start of its immediate successor. Free Float is typically equal to or less than Total Float.',
      reference: 'Section 6.2'
    },
    {
      text: 'Which cost estimation technique is most accurate but also most time-consuming?',
      options: [
        'Analogous (Top-down)',
        'Parametric',
        'Bottom-up',
        'Three-point (PERT)'
      ],
      correct: 2,
      explanation: 'Bottom-up estimating builds estimates at the work package or activity level and aggregates them. It is the most accurate but requires the most time and effort.',
      reference: 'Section 6.3'
    },
    {
      text: 'In a cost-plus contract, who typically bears more cost risk?',
      options: [
        'The seller',
        'The buyer',
        'Both equally',
        'The project sponsor'
      ],
      correct: 1,
      explanation: 'In cost-reimbursable (cost-plus) contracts, the buyer bears more cost risk because they reimburse the seller for all costs incurred, plus a fee. The seller has less incentive to control costs.',
      reference: 'Section 6.4'
    }
  ]"
/>

## Additional Study Topics

For full Chapter 6 proficiency, ensure you can:

### Scope Planning Mastery
1. **Identify Baselines**: Know the three components of the Scope Baseline (Scope Statement + WBS + WBS Dictionary)
2. **Trace Requirements**: Use the RTM to link requirements from origin through delivery and verification
3. **Apply MoSCoW**: Prioritize requirements (Must/Should/Could/Won't Have) for agile and hybrid projects
4. **Classify Requirements**: Distinguish functional, non-functional, business, stakeholder, and transition requirements
5. **WBS Decomposition**: Apply the 100% rule, create work packages at 8-80 hour level

### Schedule Planning Mastery
1. **Calculate Critical Path**: Perform forward/backward pass, identify critical path, calculate project duration
2. **Manage Float**: Calculate Total Float (LS−ES) and Free Float (ES_next − EF_current)
3. **PERT Estimation**: Calculate expected duration [(O + 4M + P)/6] and standard deviation [(P−O)/6]
4. **Interpret Float**: Know that 0 float = critical path, negative float = already late
5. **Apply Compression**: Choose between crashing (add resources) and fast tracking (parallel work)
6. **Resource Optimization**: Know leveling (extends date) vs. smoothing (uses float, keeps date)

### Cost Planning Mastery
1. **Master EVM Formulas**:
   - Variances: SV = EV−PV, CV = EV−AC
   - Indices: SPI = EV/PV, CPI = EV/AC
   - Forecasts: EAC = BAC/CPI, ETC = EAC−AC, VAC = BAC−EAC
   - Efficiency: TCPI = (BAC−EV)/(BAC−AC)
2. **Interpret Performance**: CPI/SPI > 1.0 = good, < 1.0 = bad
3. **Apply Cost Types**: Distinguish direct/indirect, fixed/variable costs
4. **Use Estimation Techniques**: Analogous (quick, less accurate) → Parametric (formula-based) → Bottom-up (detailed, accurate)
5. **Manage Reserves**: Contingency (known unknowns, PM control) vs. Management (unknown unknowns, sponsor control)

### Resource & Procurement Mastery
1. **RACI Clarity**: Assign Responsible (doer), Accountable (owner), Consulted (input), Informed (aware)
2. **Contract Risk**: Know FFP (seller risk), Cost-Plus (buyer risk), T&M (shared risk)
3. **Calculate FPIF**: Handle target cost/fee, share ratios, and ceiling prices
4. **Make-or-Buy**: Evaluate strategic value, cost, capability, and risk
5. **Source Selection**: Match method to situation (least cost, qualifications, quality-based, fixed budget)
6. **Bidder Fairness**: Ensure all vendors receive the same information (no secret meetings)

### Integration & Progressive Elaboration
1. **Baseline vs. Draft**: Approved baselines require change control; drafts are still being refined
2. **Rolling Wave Planning**: Detail near-term work, keep future work high-level until more is known
3. **Estimate Accuracy**: ROM (−25/+75%) → Budget (−10/+25%) → Definitive (−5/+10%)
4. **Triple to Hexagon**: Understand that scope, time, cost, quality, resources, and risk are all interconnected

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a planning document is "Drafted," it is not yet a **Baseline**. A plan only becomes a baseline after it is formally approved by the Sponsor or Change Control Board.
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
