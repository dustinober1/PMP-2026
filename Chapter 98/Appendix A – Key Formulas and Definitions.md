# Appendix A – Key Formulas and Definitions

## Introduction

This appendix provides a quick reference for the most commonly used formulas and a comprehensive glossary of key terms used throughout this study guide. Use this appendix when you need to quickly recall a formula or clarify what a term means.

**How to use this appendix**:
- **For formulas**: Search by category (EVM, Schedule, Cost, etc.) to find the formula you need, along with an explanation and example
- **For definitions**: Use the alphabetical glossary to look up a term, its definition, and often a brief context or example

This appendix is not exhaustive (the study guide contains much more detail), but it covers the formulas and terms most relevant to the PMP exam.

---

## Part 1: Key Formulas

### Earned Value Management (EVM) Formulas

Earned Value Management is a critical project control technique used across predictive and hybrid projects. These formulas help you measure performance against the plan.

#### Basic EVM Metrics

**Planned Value (PV)**
- **What it is**: The authorized budget assigned to work scheduled to be completed during a given time period
- **Formula**: Sum of budgeted cost of all work scheduled to be completed by a specific date
- **Example**: If a project budget is $100,000 and you're 50% through the timeline, PV is approximately $50,000
- **Use case**: Establishes what "should have been spent" by a given date

**Earned Value (EV)**
- **What it is**: The budgeted cost of work that has actually been completed
- **Formula**: Budgeted cost per unit × Actual units completed (or % complete × total budget)
- **Example**: If your project budget is $100,000 and you've completed 60% of the work, EV = $60,000
- **Use case**: Measures actual progress in financial terms

**Actual Cost (AC)**
- **What it is**: The total cost incurred to complete the work to date
- **Formula**: Sum of all actual expenses incurred for completed work
- **Example**: If you've spent $55,000 to complete 60% of the project, AC = $55,000
- **Use case**: Represents what you've actually paid

#### Performance Indices and Variance Analysis

**Schedule Variance (SV)**
- **Formula**: SV = EV – PV
- **Interpretation**:
  - Positive SV = ahead of schedule
  - Negative SV = behind schedule
  - SV of 0 = on schedule
- **Example**: EV = $60,000, PV = $50,000 → SV = $10,000 (ahead of schedule)
- **Note**: Schedule variance in dollars is less common in modern practice; see Schedule Performance Index below

**Cost Variance (CV)**
- **Formula**: CV = EV – AC
- **Interpretation**:
  - Positive CV = under budget
  - Negative CV = over budget
  - CV of 0 = on budget
- **Example**: EV = $60,000, AC = $55,000 → CV = $5,000 (under budget)
- **Use case**: Directly tells you whether you're spending more or less than planned

**Schedule Performance Index (SPI)**
- **Formula**: SPI = EV / PV
- **Interpretation**:
  - SPI > 1 = ahead of schedule
  - SPI < 1 = behind schedule
  - SPI = 1 = on schedule
- **Example**: EV = $60,000, PV = $50,000 → SPI = 1.2 (20% ahead of schedule)
- **Use case**: More useful than SV; tells you the ratio of performance

**Cost Performance Index (CPI)**
- **Formula**: CPI = EV / AC
- **Interpretation**:
  - CPI > 1 = under budget (efficient)
  - CPI < 1 = over budget (inefficient)
  - CPI = 1 = on budget
- **Example**: EV = $60,000, AC = $55,000 → CPI = 1.09 (9% more efficient than planned)
- **Use case**: Single most important metric for cost performance; CPI of 0.95+ is generally considered acceptable

#### Forecasting Formulas

**Estimate at Completion (EAC) – Three Methods**

The EAC represents your final project cost based on current performance.

*Method 1: Assuming current rate continues*
- **Formula**: EAC = BAC / CPI
- **When to use**: If current cost performance is expected to continue
- **Example**: BAC = $100,000, CPI = 0.95 → EAC = $105,263
- **Interpretation**: At current spending rate, project will cost 5% more than budget

*Method 2: Assuming variance is complete (fixed)*
- **Formula**: EAC = AC + (BAC – EV)
- **When to use**: If the cost variance is considered a one-time event
- **Example**: AC = $55,000, BAC = $100,000, EV = $60,000 → EAC = $55,000 + ($100,000 – $60,000) = $95,000
- **Interpretation**: You're currently $5K under budget, and that will continue

*Method 3: Accounting for both schedule and cost (hybrid)*
- **Formula**: EAC = AC + [(BAC – EV) / (CPI × SPI)]
- **When to use**: For a more nuanced projection accounting for both schedule and cost performance
- **Example**: AC = $55K, BAC = $100K, EV = $60K, CPI = 1.09, SPI = 1.2 → EAC = $55K + ($40K / (1.09 × 1.2)) = $55K + $30.6K = $85.6K
- **Interpretation**: The project will finish earlier and under budget

**Estimate to Complete (ETC)**
- **Formula**: ETC = EAC – AC
- **Interpretation**: How much more you'll spend to finish the project
- **Example**: EAC = $105,263, AC = $55,000 → ETC = $50,263
- **Use case**: Helps with cash flow planning and remaining budget allocation

**Budget at Completion (BAC)**
- **What it is**: The total authorized budget for the project
- **Formula**: Sum of all budgets (not calculated; it's given in the project plan)
- **Example**: BAC = $100,000
- **Use case**: The baseline against which all performance is measured

**Variance at Completion (VAC)**
- **Formula**: VAC = BAC – EAC
- **Interpretation**:
  - Positive = under budget at completion
  - Negative = over budget at completion
- **Example**: BAC = $100,000, EAC = $105,263 → VAC = -$5,263 (project will exceed budget by ~$5K)
- **Use case**: Tells you your final budget impact

---

### Schedule Formulas

#### Critical Path and Duration Calculations

**Critical Path**
- **What it is**: The longest sequence of dependent tasks; determines minimum project duration
- **How to find it**:
  1. Calculate Early Start (ES) and Early Finish (EF) for each task
  2. Calculate Late Start (LS) and Late Finish (LF) for each task
  3. Tasks with zero slack/float are on the critical path
- **Formula for slack**: Slack = LS – ES (or LF – EF)
- **Example**: If Task A has ES=0, EF=5, LS=0, LF=5, then Slack=0 (on critical path)

**Early Start (ES) and Early Finish (EF)**
- **ES for task**: ES = Max(EF of predecessor tasks)
- **EF for task**: EF = ES + Duration
- **Use case**: Forward pass through the schedule; tells you earliest a task can start/finish

**Late Start (LS) and Late Finish (LF)**
- **LF for task**: LF = Min(LS of successor tasks)
- **LS for task**: LS = LF – Duration
- **Use case**: Backward pass through the schedule; tells you latest a task can start/finish without delaying the project

**Float (or Slack)**
- **Formula**: Float = LS – ES (or LF – EF)
- **Interpretation**:
  - Float = 0: Task is on the critical path (no buffer)
  - Float > 0: Task has flexibility; can be delayed without delaying the project
- **Example**: If LS=10 and ES=5, Float = 5 days (task can be delayed up to 5 days)
- **Use case**: Identifies which tasks have scheduling flexibility

#### Agile Schedule Metrics

**Velocity**
- **What it is**: The amount of work (typically story points) completed in a sprint
- **Calculation**: Sum of story points of all completed user stories in a sprint
- **Example**: Sprint 1 completes 25 story points; Sprint 2 completes 28 story points; Average velocity = 26.5 points/sprint
- **Use case**: Used to forecast how many sprints are needed; basis for sprint planning

**Burn-Down Chart Data**
- **Work remaining at sprint start**: Total story points in sprint
- **Ideal burn line**: Linear decrease from sprint backlog to zero by sprint end
- **Actual burn line**: Actual work remaining at each day
- **Interpretation**: If actual line is above ideal line, the sprint is at risk; if below, it's ahead

**Release Forecast**
- **Formula**: Sprints needed = Total backlog (in story points) / Average velocity
- **Example**: Total backlog = 500 story points, average velocity = 25 points/sprint → 500/25 = 20 sprints needed
- **Use case**: Forecasting when features will be ready for release

---

### Cost Formulas

#### Budget-Related Formulas

**Cost Performance Index (CPI)** (covered in EVM section)
- Reminder: CPI = EV / AC

**Budget Utilization Rate**
- **Formula**: Budget used / Total budget = AC / BAC
- **Example**: AC = $55,000, BAC = $100,000 → Budget utilized = 55%
- **Use case**: Quick check of overall budget consumption

**Cost Index** (alternative to CPI for agile/non-EVM projects)
- **Formula**: Actual cost per unit / Planned cost per unit
- **Example**: Actual cost per story point = $1,500; Planned cost per story point = $1,400 → Index = 1.07 (7% over planned rate)
- **Use case**: Agile projects where work is measured in story points

#### Return on Investment (ROI)

**ROI (Simple)**
- **Formula**: ROI = (Benefits – Costs) / Costs × 100%
- **Example**: Benefits = $250,000, Costs = $100,000 → ROI = ($250K – $100K) / $100K = 150%
- **Interpretation**: For every $1 spent, you realize $1.50 in benefits
- **Use case**: Justifying project investment

**Payback Period**
- **Formula**: Payback period (months) = Initial investment / Average monthly benefit
- **Example**: Initial investment = $100,000, Monthly benefit = $5,000 → Payback = $100,000 / $5,000 = 20 months
- **Use case**: Determining how long until the project pays for itself

**Net Present Value (NPV)**
- **Formula**: NPV = Σ [Benefit(year) – Cost(year)] / (1 + discount rate)^year
- **Interpretation**:
  - NPV > 0: Project adds value
  - NPV < 0: Project reduces value
  - Higher NPV is better
- **Use case**: Comparing projects when time value of money matters

**Profitability Index**
- **Formula**: Profitability Index = Present value of benefits / Present value of costs
- **Interpretation**:
  - PI > 1: Project is profitable
  - PI < 1: Project is not profitable
- **Use case**: Comparing which projects generate the best return per dollar invested

---

### Risk Formulas

#### Expected Monetary Value (EMV)

**EMV Calculation for a Single Risk**
- **Formula**: EMV = Probability × Impact (in monetary terms)
- **Example**: Risk: System failure. Probability = 20%, Impact if occurs = $50,000 loss → EMV = 0.20 × $50,000 = $10,000
- **Interpretation**: On average, this risk will cost $10,000 (accounting for probability)
- **Use case**: Comparing which risks to prioritize based on expected cost

**EMV for Opportunities**
- **Formula**: EMV = Probability × Positive Impact
- **Example**: Opportunity: Early completion bonus. Probability = 30%, Impact = $20,000 gain → EMV = 0.30 × $20,000 = $6,000
- **Interpretation**: Expected value of pursuing this opportunity
- **Use case**: Deciding whether opportunities are worth the investment

**Expected Monetary Value (Overall Project)**
- **Formula**: EMV = Σ [(Probability of outcome) × (Impact of outcome)] for all scenarios
- **Use case**: Decision tree analysis; comparing multiple project scenarios

#### Risk Reserve Calculations

**Contingency Reserve**
- **Formula**: Contingency = ETC (expected to complete) – Most likely estimate
- **Or (simpler)**: Contingency = Percentage of total budget (e.g., 10% for well-understood projects, 20%+ for high-uncertainty projects)
- **Example**: ETC = $50,000, most likely = $45,000 → Contingency = $5,000
- **Use case**: Buffer for known unknowns (identified risks)

**Management Reserve**
- **Formula**: Management reserve = Percentage of total budget (typically 5–10%)
- **Example**: BAC = $100,000, Management reserve = 5% → Management reserve = $5,000
- **Use case**: Buffer for unknown unknowns (unidentified risks)

**Total Reserve**
- **Formula**: Total reserve = Contingency reserve + Management reserve
- **Example**: Contingency = $5,000, Management = $5,000 → Total reserve = $10,000
- **Use case**: Total buffer above the official budget

---

### Communication Formulas

**Communication Channels**
- **Formula**: Number of channels = n × (n – 1) / 2, where n = number of stakeholders
- **Example**: 5 stakeholders → 5 × 4 / 2 = 10 channels
- **Interpretation**: With 5 people, you have 10 potential communication paths
- **Use case**: Understanding communication complexity; one reason agile keeps team sizes small

---

### Quality Metrics

#### Defect Metrics

**Defect Density**
- **Formula**: Defect density = Number of defects / Size of deliverable
- **Example**: 50 defects found in 10,000 lines of code → Defect density = 0.005 defects/LOC (or 5 defects per 1,000 LOC)
- **Use case**: Comparing quality across similar projects or releases

**Cost of Quality**
- **Formula**: COQ = Cost of prevention + Cost of appraisal + Cost of failure
  - Prevention: Training, process improvement, quality planning
  - Appraisal: Testing, quality assurance, inspections
  - Failure: Rework, defect fixes, lost customer trust
- **Example**: Prevention = $10K, Appraisal = $20K, Failure = $15K → COQ = $45K
- **Use case**: Understanding total quality investment; early investment in prevention reduces failure costs

#### SLA and Performance Metrics

**Service Level Agreement (SLA) Compliance**
- **Formula**: Compliance % = (Number of met SLAs / Total SLAs) × 100%
- **Example**: 95 out of 100 monthly SLAs met → Compliance = 95%
- **Use case**: Measuring whether operational services are meeting agreed-upon performance levels

---

## Part 2: Glossary of Key Terms and Acronyms

### A

**Acceptance Criteria**
The conditions that a deliverable must satisfy to be accepted by the project sponsor or customer. Defines "done" for each requirement or user story. Critical for quality assurance and preventing scope creep.

**ACWP** (Actual Cost of Work Performed)
See "Actual Cost (AC)." The actual money spent on work completed.

**Adaptive Project Management**
A flexible approach to project management that emphasizes responding to change and frequent feedback, rather than extensive upfront planning. Includes agile, lean, and other iterative methodologies. Contrasts with predictive approaches.

**Adoption**
The degree to which end-users accept and use a delivered product or system. Low adoption means the project delivered outputs (the software works) but not outcomes (people aren't using it). Critical for benefits realization.

**Agile**
An iterative, incremental delivery approach that emphasizes frequent feedback, continuous adaptation, and team collaboration. Contrasts with predictive (waterfall) approaches. Examples: Scrum, Kanban, XP.

**ADKAR**
A change management framework: Awareness, Desire, Knowledge, Ability, Reinforcement. Focuses on individual change, helping people move from current state to future state.

**Assumption**
A factor assumed to be true for planning purposes. Examples: "Resources will be available," "The vendor will deliver on time." Assumptions that prove false create risks. Should be documented and revisited.

---

### B

**Backlog**
A prioritized list of work items (features, requirements, fixes) waiting to be done. In agile, the product backlog is the master list; the sprint backlog is what the team commits to in a sprint.

**Baseline**
An approved, fixed version of a project plan (scope, schedule, budget). Used as the reference against which actual performance is measured. Changes to the baseline require formal change control.

**Benefits**
Measurable positive outcomes or value delivered by a project. Distinguish from outputs (what the project delivers) and outcomes (changes that result from outputs). Example: A software project's output is the application; the outcome is that employees use it; the benefit is the cost savings or efficiency gained.

**Benefits Realization**
The process of ensuring that promised benefits from a project actually occur. Extends beyond project closure and requires sustained adoption, organizational change, and continued measurement.

**BCWS** (Budgeted Cost of Work Scheduled)
See "Planned Value (PV)." The budget allocated to work scheduled to be completed.

**BCWP** (Budgeted Cost of Work Performed)
See "Earned Value (EV)." The budget allocated to work actually completed.

**Burn-Down Chart**
A visual chart showing remaining work (typically story points or tasks) over time. Ideal burn-down is a straight line from total work to zero; actual burn-down shows real progress and can indicate if a sprint is at risk.

**Burn-Up Chart**
A visual chart showing completed work (story points or tasks) over time. Opposite perspective from burn-down; shows progress toward a goal rather than remaining work.

**Business Case**
A documented justification for undertaking a project, typically including strategic alignment, cost-benefit analysis, risks, and expected benefits. Created during project initiation.

---

### C

**CCB** (Change Control Board)
A governance body that reviews, approves, or rejects change requests. Typical members: sponsor, project manager, key stakeholders, SMEs. Used in predictive and hybrid projects with formal change control.

**Change Management**
The structured approach to transitioning individuals, teams, and organizations from current state to future state. Includes communication, training, resistance management, and sustained support. Often confused with scope change control (which is different).

**Change Request**
A formal request to modify the project's scope, schedule, cost, quality, or other baselines. Requires analysis of impact and approval through change control process.

**Coherence (in Product Management)**
The alignment and consistency of features, user experience, and overall product strategy. High coherence means features work well together; low coherence means features feel disconnected or contradict each other.

**Compliance**
Adherence to external regulatory or internal governance requirements. Examples: GDPR (data privacy), HIPAA (healthcare), SOX (financial controls). Non-compliance can result in legal penalties, fines, or project rejection.

**Communication Plan**
A documented strategy for who needs to know what, when, how, and through what channel. Includes stakeholder communication needs, frequency, format, and owner.

**Contingency Reserve**
A budget and schedule buffer allocated for known risks. Difference from management reserve: management reserve covers unknown risks.

**Cost Performance Index (CPI)**
See EVM section. Ratio of earned value to actual cost. CPI > 1 means under budget; CPI < 1 means over budget.

**Cost Variance (CV)**
See EVM section. The difference between earned value and actual cost. Positive CV means under budget.

**Critical Path**
The longest sequence of dependent activities in a schedule. Determines the minimum duration for project completion. Any delay in critical path activities delays the entire project.

**Crashing**
A schedule compression technique where additional resources or overtime are added to accelerate work. Often increases cost. Contrasts with "fast-tracking" (doing tasks in parallel).

---

### D

**Decision Tree**
A visual diagram showing different decision branches and outcomes, used to evaluate options and calculate expected monetary value for different scenarios.

**Defect**
A deviation from acceptance criteria or requirements. Can be discovered during testing (before release) or in production (after release). Production defects are more expensive to fix.

**Dependencies**
Logical relationships between activities or tasks. Examples: Task B can't start until Task A finishes (finish-to-start dependency). Understanding dependencies is critical for scheduling.

**Deliverable**
A tangible or intangible output of project work. Can be a product (software, building), a document (requirements spec, lessons learned report), or a service.

**Demand Management**
The process of managing incoming requests and maintaining backlog prioritization. Critical for preventing scope creep in agile projects where new requests arrive continuously.

**Disinvestment**
The decision to stop funding or supporting a project or initiative. Usually occurs when benefits assumptions prove invalid or the initiative misaligns with strategy.

---

### E

**EAC** (Estimate at Completion)
See EVM section. Forecast of final project cost based on current performance. Can be calculated three ways depending on performance assumptions.

**Early Finish (EF)**
In critical path method, the earliest date an activity can finish. Calculated forward through the schedule.

**Early Start (ES)**
In critical path method, the earliest date an activity can start. Calculated forward through the schedule.

**Earned Value (EV)**
See EVM section. The budgeted cost of work actually completed. Measures progress in financial terms.

**Earned Value Management (EVM)**
A technique for measuring project performance using integrated scope, schedule, and cost data. Provides earned value, variance analysis, and forecasting.

**EMV** (Expected Monetary Value)
See Risk section. The expected value of a risk or opportunity: Probability × Impact.

**Estimate to Complete (ETC)**
See EVM section. Forecast of how much more money will be needed to finish the project. Calculated as EAC – AC.

**Escalation**
Moving an issue or decision up the organizational hierarchy for resolution. Used when the current level doesn't have authority or capacity to resolve.

**ESG** (Environmental, Social, Governance)
Sustainability framework emphasizing environmental impact, social responsibility, and ethical governance. Increasingly important in project selection and delivery decisions.

---

### F

**Fail-Fast**
An agile approach where experiments or ideas are tested quickly and inexpensively. Failed experiments are abandoned; successful ones are scaled. Reduces risk by getting feedback early.

**Fast-Tracking**
A schedule compression technique where activities are done in parallel instead of sequentially. Can increase risk if dependencies aren't carefully managed. Contrasts with "crashing" (adding resources).

**Feasibility**
The degree to which a project can realistically be completed within constraints (schedule, budget, resources, technology). Assessed during initiation and planning.

**Feature Creep**
The tendency to add features beyond the original scope. A form of scope creep specific to product development. Managed through backlog prioritization and demand management.

**Finish-to-Finish (FF)**
A dependency type where one activity must finish before another can finish. Less common than finish-to-start.

**Finish-to-Start (FS)**
The most common dependency type. Activity B can't start until Activity A finishes.

**Fitness for Purpose**
See "Quality." A perspective on quality emphasizing that deliverables should be fit for their intended use, not just conform to specifications.

**Float (or Slack)**
See Schedule section. The amount of time an activity can be delayed without delaying the project. Activities on the critical path have zero float.

**Forecast**
A prediction of future project performance based on current data. Example: "Based on current burn rate, the project will finish on December 15."

---

### G

**Gantt Chart**
A visual schedule representation showing activities on the y-axis and time on the x-axis. Bars represent activity duration and dependencies. Useful for communication but less useful for complex schedules.

**Governance**
The structure, processes, and controls through which decisions are made and approved. Includes steering committees, change control boards, and escalation paths. Critical for ensuring decisions are made at appropriate levels.

**Gross Profit Margin**
In a business context, revenue minus cost of goods sold. In project context, revenue from the project minus direct project costs.

---

### H

**Hybrid Approach**
A delivery methodology combining elements of predictive and agile approaches. Example: Initiation and planning are predictive; execution and delivery are agile. Appropriate for complex projects with uncertainty.

---

### I

**Impact**
In risk context, the negative (or positive, for opportunities) consequence if a risk occurs. Usually expressed in financial terms or on a scale (high, medium, low). Impact × Probability = Expected Monetary Value.

**Influence**
The ability to affect decisions or behavior without direct authority. Critical for project managers who lead matrix teams where they don't have direct authority over all team members.

**Issue**
A problem that requires immediate attention and resolution. Difference from risk: risks are potential future problems; issues are current problems. Escalation and resolution are key.

**Iteration**
A time-boxed cycle of work in agile delivery (typically 1–4 weeks). Each iteration produces a potentially shippable increment of the product. Also called a "sprint" in Scrum.

---

### K

**Kanban**
An agile delivery method emphasizing continuous flow of work. Work items are visualized on a board (to-do, in-progress, done), and the team pulls new work as capacity becomes available. Contrasts with Scrum (which uses time-boxed sprints).

**Knowledge Management**
The process of capturing, organizing, and sharing organizational knowledge. Includes lessons learned, best practices, documentation, and mentoring.

**Kotter's 8-Step Model**
A change management framework: Create urgency, Build coalition, Form vision, Enlist volunteers, Enable action, Create wins, Build on changes, Make it stick. Focuses on organizational change and managing resistance.

---

### L

**Late Finish (LF)**
In critical path method, the latest date an activity can finish without delaying project completion. Calculated backward through the schedule.

**Late Start (LS)**
In critical path method, the latest date an activity can start without delaying project completion. Calculated backward through the schedule.

**Lessons Learned**
Documentation of what went well, what could be improved, and recommendations for future projects. Captured during project closure or phase-end.

**Lifecycle**
The series of phases or stages through which a project or product progresses. Examples: Project lifecycle (initiation, planning, execution, monitoring, closing); Product lifecycle (conception, design, development, testing, launch, support, retirement).

---

### M

**Management Reserve**
A budget and schedule buffer allocated for unknown risks (risks that haven't been identified). Different from contingency reserve, which covers known risks.

**Metrics**
Quantifiable measures used to track performance. Examples: Velocity (agile), Burn-down progress, CPI, SPI, defect rate, test coverage, adoption rate.

**Milestones**
Key events or dates in a project (e.g., design complete, testing begins, launch). Often used for high-level communication and tracking progress.

**Mitigation**
A risk response strategy that reduces the probability or impact of a threat. Example: If the risk is "key person leaves," mitigation might be "cross-train backup resources."

---

### N

**Net Present Value (NPV)**
See Cost section. The present value of future benefits minus the present value of costs. Used to evaluate whether a project adds value accounting for time value of money.

---

### O

**Opportunity**
A positive risk—a potential for upside if conditions align. Risk management applies to opportunities as well as threats. Opportunity responses include "exploit" and "enhance."

**Organizational Readiness**
The extent to which an organization is prepared for change (skills, mindset, processes, systems). Assessed before major projects to determine what support is needed.

**Output**
Tangible deliverable produced by a project. Difference from outcome: output is what the project produces; outcome is the change that results. Example: A software system is an output; employees using it to work faster is an outcome.

**Outcome**
The result or change that occurs as a consequence of outputs. Requires adoption, capability building, and organizational change. Essential for benefits realization.

**Overallocation**
Assigning more work to a resource than they have capacity to complete. Leads to quality issues, burnout, and missed deadlines.

---

### P

**Payback Period**
See Cost section. The time it takes for a project's benefits to equal its costs. Used as one measure of investment attractiveness.

**Penetration Testing**
Security testing where authorized testers attempt to break into systems to find vulnerabilities. Simulates attacker behavior to strengthen defenses.

**Percent Complete**
A subjective measure of progress. Often inaccurate because work reported as 90% complete can take disproportionately long to finish. More reliable: actual work items completed (in predictive) or story points burned (in agile).

**Performance Baseline**
See "Baseline." The approved, fixed combination of scope, schedule, and cost baselines against which actual performance is measured.

**Planned Value (PV)**
See EVM section. The budgeted cost of work scheduled to be completed by a given date. Establishes what "should have been spent."

**Planning Fallacy**
A cognitive bias where people underestimate how long tasks will take. Important to account for when estimating (add buffers, don't plan 100% utilization).

**Portfolio**
A collection of programs and projects managed together to achieve strategic objectives. Portfolio managers prioritize which initiatives get resources.

**Probability**
In risk context, the likelihood of a risk occurring, expressed as a percentage or on a scale (high, medium, low). Probability × Impact = Expected Monetary Value.

**Process Domain**
One of three domains on the PMP exam (~33% of questions). Covers planning, risk management, execution, monitoring, and closing.

**Product Owner**
In Scrum, the person responsible for managing the product backlog, prioritizing work, and accepting completed work. Distinct from the project manager.

**Program**
A collection of related projects managed together to achieve shared benefits. Program managers coordinate across projects; project managers manage individual projects.

**Project Charter**
The formal authorization document for a project. Includes project description, objectives, constraints, assumptions, budget, schedule, sponsor, project manager, and high-level requirements. Created during project initiation.

**Project Manager**
The person responsible for leading the project and ensuring deliverables, quality, and stakeholder management. Accountable to the sponsor.

**Psychological Safety**
An organizational climate where people feel safe to take interpersonal risks (speak up, ask questions, admit mistakes, propose ideas) without fear of embarrassment or punishment. Foundational for effective teams.

**Psychometric Testing**
Psychological or personality assessments used to understand individual differences in work style, communication, decision-making. Examples: Myers-Briggs, DISC, StrengthsFinder.

---

### Q

**Quality**
The degree to which a deliverable meets specifications and fitness for purpose. Two perspectives: conformance to requirements (do we build it right) and fitness for purpose (did we build the right thing).

**Quality Assurance (QA)**
Proactive process of ensuring that processes are designed and executed correctly. Prevents defects. Different from quality control (QC), which detects defects.

**Quality Control (QC)**
Testing and inspection to find defects. Reactive; catches problems after they're created. Less efficient than quality assurance but necessary.

---

### R

**RACI Chart**
A responsibility assignment matrix showing Responsible, Accountable, Consulted, and Informed for different activities. Clarifies roles and prevents confusion.

**Readiness Assessment**
Evaluation of whether an organization, team, or person is prepared for a change or new capability. Identifies gaps and training needs.

**Residual Risk**
Risk remaining after response strategies are implemented. All risks have some residual risk; complete elimination is usually impossible.

**Resource Leveling**
Adjusting a schedule to smooth out resource overallocation. May extend the project duration.

**Retrospective**
In agile, a team meeting after each sprint or iteration to reflect on what went well, what could improve, and what to change. Supports continuous improvement.

**Return on Investment (ROI)**
See Cost section. The financial return from an investment: (Benefits – Costs) / Costs. Higher ROI is better.

**Risk**
An uncertain event or condition that, if it occurs, has a positive or negative effect on objectives. Risks are managed proactively through identification, analysis, and response planning.

**Risk Appetite**
The organization's overall willingness to accept risk in pursuit of strategic objectives. Reflects organizational culture and strategy.

**Risk Register**
A document listing identified risks, their probability, impact, response strategies, and owners. Updated continuously throughout the project.

**Risk Tolerance**
The specific level of risk the organization is willing to accept for particular types of risk. More specific than risk appetite.

**Rollback**
A contingency plan to undo changes and return to the previous state if implementation fails. Important for high-risk changes.

---

### S

**Scope**
The work required to complete the project. Defined by requirements, acceptance criteria, and deliverables. Scope creep (adding scope without adjusting schedule/budget) is a common problem.

**Scope Baseline**
The approved scope statement. Changes to scope baseline require formal change control.

**Scope Creep**
Uncontrolled expansion of project scope. Leads to budget overruns and schedule delays. Managed through change control and demand management.

**Schedule Baseline**
The approved project schedule. Changes require formal change control.

**Schedule Performance Index (SPI)**
See EVM section. Ratio of earned value to planned value. SPI > 1 means ahead of schedule; SPI < 1 means behind schedule.

**Schedule Variance (SV)**
See EVM section. Difference between earned value and planned value. Positive SV means ahead of schedule.

**Scope Change Control**
The process of evaluating, approving, or rejecting requests to change project scope. Different from organizational change management (though related).

**Scrum**
An agile framework using time-boxed sprints, daily standups, backlog refinement, and sprint reviews. Includes roles (product owner, Scrum master, team) and ceremonies.

**Servant Leadership**
A leadership philosophy where the leader's primary focus is serving and developing people, not commanding them. Central to PMI's view of modern project leadership.

**Slack** (or **Float**)
See Schedule section.

**Sponsor**
The person with authority and financial responsibility for the project. Usually a senior leader in the organization. Approves scope, budget, and major decisions.

**Sprint**
In Scrum, a time-boxed iteration (typically 1–4 weeks). Team commits to completing a set of user stories and works toward them during the sprint.

**Sprint Backlog**
The set of user stories or tasks committed to by the team for a specific sprint.

**Stakeholder**
Anyone affected by or having an interest in the project. Includes sponsor, users, team members, executives, customers, regulatory bodies, etc.

**Stakeholder Engagement**
The process of involving stakeholders in project decisions and keeping them informed. High engagement reduces resistance and increases adoption.

**Stakeholder Register**
A document listing all identified stakeholders, their interests, influence, and engagement strategy.

**Start-to-Finish (SF)**
A rare dependency type where one activity can't finish before another starts.

**Start-to-Start (SS)**
A dependency type where one activity can't start before another starts. Creates overlap opportunity.

**Status Report**
A communication to stakeholders on project progress. Typically includes accomplishments, upcoming work, risks, issues, budget, and schedule status.

**Story Points**
In agile, a unit of measurement for work complexity and effort. Used instead of time estimates. Relative sizing (Story A is 2 points; Story B is 5 points) is more accurate than absolute time estimates.

**Sustainability**
In project context, ensuring that the benefits from a project are sustained long-term. Requires change management, capability building, and continued organizational support. Also refers to environmental and social sustainability.

---

### T

**Tailoring**
Customizing project management processes to fit the project context. What works for a large, complex project differs from what works for a small, well-understood project.

**Task**
In traditional project management, a unit of work with its own schedule and resources. Related tasks are grouped into activities or work packages.

**Technical Debt**
Shortcuts taken during development that create future costs. Example: Rushing code development without proper testing creates debt (defects discovered later are expensive to fix). Can be a deliberate trade-off (speed now for cost later) or a failure (should have done it right the first time).

**Three-Point Estimate**
A schedule and cost estimation technique using three scenarios: Optimistic (O), Most Likely (M), and Pessimistic (P). Reduces the impact of estimation bias.
- **Formula**: Expected estimate = (O + 4M + P) / 6
- **Example**: Optimistic = 5 days, Most Likely = 10 days, Pessimistic = 20 days → Expected = (5 + 40 + 20) / 6 = 10.8 days

**Tolerance**
In quality context, acceptable range of variation for a metric. Example: Cost tolerance might be ±5% of budget.

**Tradeoff**
A situation where improving one objective requires compromising another. Examples: Schedule vs. quality, scope vs. cost, stability vs. innovation. Project success often requires making informed tradeoffs.

---

### U

**Uncertainty**
Lack of complete information about future events. Different from risk: risk is an identified uncertainty with potential impact; uncertainty includes both identified and unidentified risks.

**Unidentified Risk**
Risk that hasn't been discovered or documented. Managed through contingency and management reserves rather than specific risk responses.

**User Story**
In agile, a small piece of functionality from end-user perspective. Format: "As a [user], I want [capability], so that [benefit]." Used for requirements, backlog prioritization, and sprint planning.

---

### V

**Value**
The benefit or worth delivered by a project. Can be financial (cost savings, revenue) or non-financial (customer satisfaction, strategic alignment). Justifies project investment.

**Value Proposition**
The specific value or benefit a project delivers to justify its cost and effort.

**Variance**
Deviation from the plan. In EVM: cost variance and schedule variance. In quality: deviation from specifications.

**Variance at Completion (VAC)**
See EVM section. Forecast of final budget impact: BAC – EAC. Positive VAC means under budget at completion.

**Velocity**
See Schedule section. In agile, the amount of work (story points) completed per sprint. Used to forecast sprints needed.

---

### W

**Waterfall**
See "Predictive." A sequential project management approach where phases are completed one after another. Emphasizes upfront planning and minimal change.

**Weighted Scoring Model**
A prioritization technique where criteria are weighted by importance, options are scored on each criterion, and total weighted scores rank options.

**Work Breakdown Structure (WBS)**
A hierarchical decomposition of project scope into manageable work packages. Provides clarity on what's included (and excluded) in the project.

**Work Package**
A deliverable or component of work at the lowest level of the WBS. Has its own budget, schedule, resources, and acceptance criteria.

---

### X-Y-Z

**XP** (Extreme Programming)
An agile software development methodology emphasizing technical excellence (code reviews, pair programming, test-driven development, continuous integration).

**Zero-Based Estimation**
Estimating from first principles without anchoring to previous estimates. More accurate than comparative estimation but more time-consuming.

---

## Using This Appendix Effectively

### For Exam Preparation

- **Before taking a mock exam**: Review formulas you find challenging (EVM, schedule calculations)
- **After getting a question wrong**: Look up related terms in the glossary to deepen understanding
- **Final week of study**: Skim the glossary to ensure you're familiar with all key terms

### As a Reference During Practice

- **When reviewing a scenario**: Check the glossary for key terms mentioned in the question
- **When you see an unfamiliar formula**: Find it here, understand the context, and apply it

### As a Professional Reference

After passing the exam, keep this appendix handy as you apply project management in your work. Terminology and formulas are used across the profession.

---

**Note**: This appendix complements the study guide, not replaces it. For deeper understanding of any formula or term, refer to the relevant chapter in Chapters 1–18.
