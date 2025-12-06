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

**Artifact**
A document or other item created during a portfolio, program, or project to help manage it and provide information to the project team, stakeholders, and management. Examples include project charters, schedules, risk registers, status reports, requirements documents, and deliverables.

**Assumption**
A factor assumed to be true for planning purposes. Examples: "Resources will be available," "The vendor will deliver on time." Assumptions that prove false create risks. Should be documented and revisited.

---

### B

**Backlog**
A prioritized list of work items (features, requirements, fixes) waiting to be done. In agile, the product backlog is the master list; the sprint backlog is what the team commits to in a sprint.

**Baseline**
An approved, fixed version of a project plan (scope, schedule, budget). Used as the reference against which actual performance is measured. Changes to the baseline require formal change control.

**Benefits**
A gain or asset realized by the organization and other stakeholders as the result of outcomes delivered. Benefits represent measurable positive improvements resulting from project outcomes. Distinguish from outputs (what the project delivers) and outcomes (changes that result from outputs). Example: A software project's output is the application; the outcome is that employees use it; the benefit is the cost savings or efficiency gained. Benefits are a subset of value and contribute to achieving organizational objectives.

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
A product, result, or service generated by a process. May be an input to a successor process. Outputs are tangible or intangible deliverables produced by a project. Difference from outcome: output is what the project produces; outcome is the change that results from using or implementing the output. Example: A software system is an output; employees using it to work faster is an outcome that may lead to benefits such as increased productivity.

**Outcome**
An end result or consequence of a process or project. Outcomes encompass the long-term effects, changes, or value generated by the project's deliverables, which can be either positive or negative. Positive outcomes, often termed "benefits," may include enhancements in performance, efficiency, or customer satisfaction. Conversely, negative outcomes, known as "disbenefits," may involve unintended adverse effects or costs. Evaluating outcomes is essential to determine how effectively a project has achieved its intended objectives and to understand its overall impact. Outcomes require adoption, capability building, and organizational change to be realized.

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
A collection of programs, projects, and operations managed as a group to maximize overall value delivery and achieve strategic objectives, meet mandatory obligations, or generate income streams. Related activities may include subsidiary portfolios (subportfolios) and operations. Portfolio managers prioritize which initiatives get resources based on strategic alignment and value contribution.

**Probability**
In risk context, the likelihood of a risk occurring, expressed as a percentage or on a scale (high, medium, low). Probability × Impact = Expected Monetary Value.

**Process Domain**
One of three domains on the PMP exam (~33% of questions). Covers planning, risk management, execution, monitoring, and closing.

**Product Owner**
In Scrum, the person responsible for managing the product backlog, prioritizing work, and accepting completed work. Distinct from the project manager.

**Product**
An artifact that is produced, is quantifiable, and can be either an end item in itself or a component item. "Product" is an overarching term that includes tangible (physical goods) and intangible (digital goods and services) items. Products can be deliverables from projects, programs, or portfolios.

**Program**
A group of related projects and program activities managed in a coordinated manner to obtain benefits not available from managing them individually. These interrelated activities can serve program components to enable the program to deliver the highest value and may include subsidiary programs. Program managers coordinate across projects; project managers manage individual projects.

**Project**
A temporary initiative in a unique context undertaken to create value. The temporary nature of a project indicates a beginning and an end to the project work or a phase of the project work. A project's unique context can be driven by its distinct goals, environmental conditions, approaches, stakeholders, or other dimensions. Projects can be stand-alone efforts or part of a portfolio or program. Projects are distinct from operations, which are ongoing and repetitive.

**Project Charter**
The formal authorization document for a project. Includes project description, objectives, constraints, assumptions, budget, schedule, sponsor, project manager, and high-level requirements. Created during project initiation.

**Project Management**
The application of knowledge, skills, tools, and techniques to project activities to meet or exceed the intended value. Meeting or exceeding value in project management does not mean to endorse or accept gold plating or scope creep, but to emphasize a value-driven decision-making process, helping to ensure that the final project outcome satisfies the stakeholders' needs. Effective project management balances scope, schedule, cost, quality, resources, and risk while focusing on value delivery.

**Project Management Office (PMO)**
Organizational entities, typically established as departments or teams, primarily tasked with centralizing activities related to the management of portfolios, programs, and/or projects. The nature of these activities can vary according to the unique needs of each organization. PMOs may provide governance, standardization, resource management, tools, methodologies, and support to project managers and teams.

**Project Management Team**
The members of the project team who are directly involved in project management activities. This includes individuals who perform planning, monitoring, controlling, and coordinating functions, as distinct from those performing only technical or execution work.

**Project Manager**
The person assigned by the performing organization to lead the team that is responsible for achieving the project objectives. Project managers perform a variety of functions such as facilitating the project team's work to achieve the intended outcomes and managing the processes to bring about those outcomes in order to enable value delivery. Accountable to the sponsor and responsible for leading the project, ensuring deliverables, quality, and stakeholder management.

**Project Success**
The consensus view across intended beneficiaries, other stakeholders, and project participants that a project was perceived to have delivered value that was worth the effort and expense. Project success is measured not just by on-time, on-budget delivery, but by the realization of benefits and stakeholder satisfaction with outcomes. Success criteria should be defined early and agreed upon by key stakeholders.

**Project Team**
A set of individuals performing the work of the project to achieve its objectives. The project team may include the project manager, project management team members, and other team members who carry out the work but are not necessarily involved in project management activities. Team composition can be cross-functional and may include internal employees, contractors, and vendor resources.

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
The excess of financial and nonfinancial benefits over investment that is gained from achieving the goals of a portfolio, program, or project. Different stakeholders perceive value in different ways, which can be explained quantitatively or qualitatively. Organizations may focus on business value as determined by performance metrics or finances, such as return on investment (ROI). Customers may interpret value as the convenience offered by a given product or service. Governments and nongovernmental organizations (NGOs) may prioritize the value of societal impact on groups of people and their communities and environments. Value justifies project investment and is the ultimate measure of project success.

**Value Proposition**
The specific value or benefit a project delivers to justify its cost and effort.

**Value Delivery System**
A collection of strategic business activities aimed at building, sustaining, and/or advancing an organization. Portfolios, programs, projects, products, and operations can all be part of an organization's system for value delivery. This system enables organizations to align their work with their strategic objectives and achieve desired outcomes. The value delivery system represents the holistic approach to how an organization creates, delivers, and captures value through coordinated initiatives and ongoing operations.

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

### Additional PMI Lexicon Terms

The following terms from the PMI Lexicon of Project Management Terms are explicitly listed here so that this appendix stands alone as a complete reference. Refer to the relevant chapters in this guide and to PMI standards for full definitions and additional context.

**Acceptance Test-Driven Development**
A collaborative technique where the team and stakeholders define acceptance test criteria before development work begins, then build only what is needed to pass those tests. Common in agile environments to clarify requirements and ensure delivered features meet expectations.

**Accountability**
The state of being personally answerable for outcomes, decisions, and actions. Accountability in projects cannot be shared; each task, deliverable, or decision should have a clearly accountable owner.

**Activity**
A specific, scheduled piece of work performed during the project. Activities are the building blocks of the project schedule and are often grouped into work packages.

**Activity List**
A detailed list of all scheduled activities for a project, including identifiers and descriptions. It ensures the team understands the work to be performed and supports schedule development and control.

**Actual Cost (AC)**
The realized cost incurred for work performed during a specific time period. Used in earned value management to compare planned and earned value against what was actually spent.

**Actual Duration**
The elapsed calendar time between the actual start and actual finish (or data date) of an activity. Used to update the schedule model and analyze performance.

**Adaptive Approach**
A development approach that embraces high uncertainty and frequent change, delivering in short cycles with ongoing stakeholder feedback. Includes agile, iterative, and incremental methods.

**Affinity Diagram**
A tool that groups large numbers of ideas, issues, or requirements into categories based on natural relationships. Helps teams organize qualitative data from brainstorming or workshops.

**Alternative Analysis**
A technique used to evaluate different options or solutions to determine which best meets project objectives. Often applied when choosing technologies, delivery strategies, or risk responses.

**Analogous Estimating**
An estimating technique that uses historical data from similar projects or activities to predict cost, duration, or resource needs. It is faster but less accurate than detailed (bottom-up) estimating.

**Apportioned Effort**
Effort that is directly linked to and distributed proportionally across related discrete work. Common examples include quality inspections or documentation that scale with the size of the primary work.

**Artifacts**
Documents, models, and other tangible items produced during a project, program, or portfolio. Examples include charters, schedules, risk registers, backlogs, and deliverables.

**Assumption Log**
A project document that records all assumptions and constraints identified throughout the project life cycle. It is reviewed and updated as part of risk management and planning.

**Backlog Refinement**
The ongoing process of reviewing, clarifying, re-estimating, and reprioritizing items in the backlog. It ensures upcoming work is ready for selection in planning events such as sprint planning.

**Backward Pass**
A critical path method calculation that works backward from the project completion date to determine late start and late finish dates for activities. Used to identify float and schedule flexibility.

**Benchmarking**
A technique that compares project practices, processes, or performance metrics against those of other organizations or projects. Helps identify best practices and improvement opportunities.

**Benefits Management Plan**
A document that explains how project or program benefits will be created, measured, tracked, and sustained over time. It defines benefit owners, metrics, and realization timelines.

**Benefits Realization Plan**
A plan that describes the activities needed to achieve and measure the expected benefits from a project or program. Often extends beyond project closure into operational use.

**Blocker**
An issue or impediment that prevents progress on a task or user story. Blockers should be surfaced quickly and addressed through escalation or problem solving.

**Bottom-Up Estimating**
An estimating method that builds overall project estimates by aggregating detailed estimates of individual activities or work packages. Typically more accurate but more time-consuming.

**Budget**
The approved estimate for the project, phase, or work package, including contingency reserves. It sets cost expectations and provides the baseline for controlling expenditures.

**Budget at Completion (BAC)**
The total planned value for the project when complete. In earned value management, BAC is the sum of all budgets and is used as the reference for final cost performance.

**Burndown Chart**
A time-based chart that shows remaining work (such as story points or tasks) versus time within an iteration or release. It helps agile teams track progress and predict whether they will meet commitments.

**Burnup Chart**
A chart showing the amount of work completed over time against the total scope. It is useful for visualizing both progress and scope changes in agile projects.

**Business Analysis**
The practice of identifying business needs and determining solutions that deliver value to stakeholders. Business analysts often focus on requirements, processes, and benefits.

**Business Need**
The underlying problem, opportunity, or constraint that justifies a project or initiative. Business needs are typically documented in the business case and used to evaluate success.

**Business Objective**
A specific, measurable result that an organization aims to achieve through its initiatives. Projects are chosen and prioritized based on how well they support business objectives.

**Business Requirement Documents**
Formal documents that capture high-level business needs, functional requirements, and constraints for a solution. They help align stakeholders and guide solution design.

**Business Rule**
A constraint or guideline that defines or restricts aspects of the business, such as policies, regulations, or decision logic. Business rules influence requirements and design choices.

**Business Value**
The net value (financial and nonfinancial) that a project, product, or initiative delivers to stakeholders. It includes factors such as revenue, cost savings, compliance, customer satisfaction, and strategic positioning.

**Capability**
A specific ability of an organization, system, or product to achieve a desired outcome under certain conditions. Capability-based planning focuses on building and improving these abilities over time.

**Cause**
An event, condition, or factor that contributes to the occurrence of a problem, risk, or outcome. Root cause analysis seeks to identify underlying causes rather than just symptoms.

**Cause-and-Effect Diagram**
Also called an Ishikawa or fishbone diagram, it visually organizes possible causes of a problem into categories. Used in quality and risk analysis to identify and discuss potential root causes.

**Change Control**
The process of identifying, evaluating, approving or rejecting, and documenting changes to project baselines. Effective change control protects scope, schedule, and cost from uncontrolled changes.

**Change Control Board (CCB)**
A formally chartered group responsible for reviewing, evaluating, and approving or rejecting change requests. The CCB ensures changes align with project objectives and constraints.

**Change Control Plan**
A component of the project management plan that describes how changes will be requested, analyzed, decided, and documented. It defines roles, thresholds, and workflows for change control.

**Change Control System**
The tools and procedures used to manage change requests and maintain configuration control. Often implemented via a workflow or configuration management system.

**Code of Accounts**
A structured numbering system used to uniquely identify elements of the work breakdown structure, cost accounts, and other project components. It supports tracking costs and performance.

**Colocation**
Placing members of a project team in the same physical location to improve communication and collaboration. Agile teams often favor colocation, though virtual collaboration tools can emulate it.

**Communications Management Plan**
A component of the project management plan that defines how, when, and to whom information will be communicated. It specifies formats, frequency, channels, and responsibilities.

**Complexity**
The degree to which a project involves uncertainty, interdependencies, diverse stakeholders, or emerging technologies. High complexity increases risk and often favors adaptive approaches.

**Component**
An identifiable, self-contained part of a system, product, or project scope. Components can be hardware, software, services, or process elements that together create the full deliverable.

**Configuration Management System**
The collection of tools and processes used to identify, track, and control changes to configuration items such as documents, code, and baselines. It supports traceability and auditability.

**Constraint**
A limiting factor that affects project execution, such as fixed deadlines, budgets, resources, or technical requirements. Constraints must be considered in planning and tradeoff decisions.

**Contingency**
Time or budget reserved to address identified risks should they occur. Contingency is tied to known-unknown risks and is usually part of the project’s cost or schedule baseline.

**Contingency Plan**
A predefined response or workaround to be executed if a specific risk event occurs. Contingency plans improve readiness and speed of response when threats materialize.

**Continuous Delivery**
A development and deployment practice where software is kept in a releasable state and can be deployed to production frequently and reliably. It supports rapid feedback and reduced release risk.

**Control Account**
A management control point where scope, budget, schedule, and performance are integrated and measured. Control accounts are typically at a higher level than individual activities.

**Corrective Action**
An intentional activity that realigns project performance with the plan by addressing the causes of variance. Examples include re-planning work, adjusting resources, or revising processes.

**Cost Baseline**
The approved, time-phased budget for the project, excluding management reserve. It is used as the basis for measuring and controlling cost performance.

**Cost Management Plan**
A component of the project management plan that defines how costs will be planned, structured, estimated, budgeted, and controlled. It also describes units of measure, precision, and reporting formats.

**Cost of Quality (COQ)**
The total cost of ensuring and assuring quality, including prevention, appraisal, and failure costs. Investing in prevention and appraisal typically reduces total COQ by lowering failures.

**Cost-Benefit Analysis**
An economic technique that compares the expected benefits of an option with its expected costs. Used to support selection among alternative solutions or projects.

**Cost-Plus-Award-Fee Contract**
A type of cost-reimbursable contract where the seller is reimbursed for allowable costs and may earn an additional award fee based on buyer’s subjective evaluation of performance.

**Cost-Plus-Fixed-Fee Contract**
A cost-reimbursable contract in which the seller is reimbursed for allowable costs plus a fixed fee agreed at contract award. The fee does not change with actual costs.

**Cost-Plus-Incentive-Fee Contract**
A cost-reimbursable contract where the seller is reimbursed for costs and can earn an incentive fee based on meeting performance targets such as cost or schedule.

**Cost-Reimbursable Contract**
A contract type where the buyer reimburses the seller for allowable costs plus a fee (fixed, incentive, or award). Used when scope is uncertain and detailed pricing is difficult to fix.

**Critical Chain Method**
A schedule method that focuses on resource constraints and adds buffers to protect the project completion date. It is based on the theory of constraints and differs from traditional critical path method.

**Critical Path Activity**
An activity that lies on the critical path and therefore has zero total float. Any delay to a critical path activity directly delays the project finish date unless corrective action is taken.

**Critical Path Method**
A schedule analysis technique that calculates the longest path of dependent activities through the network. It identifies critical activities and determines the minimum project duration.

**Cross-Functional Team**
A team composed of members with different skills and disciplines who work together toward a common goal. Cross-functional teams reduce handoffs and improve collaboration across specialties.

**Cycle Time**
The total elapsed time from the start of work on an item until it is completed. In agile, lower cycle time generally indicates smoother flow and higher throughput.

**Daily Coordination Meeting**
Short, time-boxed meeting (such as the daily scrum) where team members synchronize work, surface impediments, and plan the next 24 hours. Focuses on coordination, not detailed problem solving.

**Dashboard**
A visual display of key performance indicators and status information. Dashboards summarize complex data into charts and indicators for quick stakeholder understanding.

**Data Date**
Also called the “as-of date,” it is the point in time up to which project status is recorded in the schedule model. All progress measurements and forecasts are relative to this date.

**Decision Tree Analysis**
A quantitative technique that models decisions and possible outcomes as a branching tree. It is often used with expected monetary value to compare risk-adjusted options.

**Decomposition**
A technique that breaks down project scope, deliverables, or activities into smaller, more manageable components. Decomposition underpins creation of the WBS and detailed schedule.

**Definition of Done (DoD)**
A shared agreement within a team about the criteria that must be met for work to be considered complete. DoD improves quality and consistency across user stories or work items.

**Definition of Ready (DoR)**
A shared agreement on the criteria that must be met before a work item can be pulled into an iteration or sprint. Ensures that items are well understood and actionable.

**Dependency**
A logical relationship between activities where one depends on the start or finish of another. Common dependency types are finish-to-start, start-to-start, finish-to-finish, and start-to-finish.

**Design Thinking**
A human-centered problem-solving approach emphasizing empathy, ideation, prototyping, and testing. Frequently used in innovation and product discovery to understand user needs deeply.

**Development Approach**
The overarching strategy used to deliver the project’s product, such as predictive, iterative, incremental, agile, or hybrid. The chosen approach influences planning and governance.

**DevOps**
A set of practices that combines software development (Dev) and IT operations (Ops) to shorten development cycles and increase deployment frequency. Emphasizes automation, collaboration, and continuous delivery.

**Disbenefit**
An outcome of a project that is unfavorable, such as increased cost or reduced efficiency, even if the project overall is beneficial. Disbenefits should be considered in the business case.

**Discrete Effort**
Work that can be planned and measured in specific units of output. Discrete effort has clear start and finish criteria, as opposed to level-of-effort support activities.

**Duration**
The total number of work periods or calendar units needed to complete an activity. Duration estimates drive the schedule and are distinct from effort (person-hours or person-days).

**Early Finish Date**
In a schedule network, the earliest date an activity can finish based on logical relationships and constraints. Calculated during the forward pass.

**Early Start Date**
In a schedule network, the earliest date an activity can start given its predecessors and constraints. Also calculated during the forward pass.

**Effort**
The amount of labor required to complete an activity, usually expressed in person-hours or person-days. Effort is related to but distinct from duration.

**Elicitation**
The process of drawing out requirements, expectations, or information from stakeholders through techniques such as interviews, workshops, surveys, and observation.

**Emergent Risk**
A newly recognized risk that arises during the project and was not previously identified. Emergent risks require rapid assessment and may prompt changes to plans and reserves.

**Emotional Intelligence**
The ability to recognize, understand, and manage one’s own emotions and those of others. Emotional intelligence helps project managers lead, influence, and resolve conflict effectively.

**Enterprise Environmental Factors (EEFs)**
Conditions not under the project team’s direct control that influence, constrain, or direct the project. Examples include organizational culture, infrastructure, market conditions, and regulations.

**Enterprise Risk Management**
An organization-wide approach to managing risk across portfolios, programs, and projects. It aligns risk practices with strategy and risk appetite.

**Epic**
A large user story or feature that is too big to complete in a single iteration and must be broken down into smaller stories. Epics help structure backlogs and roadmap planning.

**Estimate at Completion (EAC)**
A forecast of total project cost at completion, based on current performance and future expectations. EAC can be calculated using different formulas depending on assumptions about future performance.

**Expected Monetary Value (EMV)**
A risk analysis technique that calculates the average outcome by multiplying each possible outcome by its probability and summing the results. Used with decision trees to compare options.

**Fast Tracking**
A schedule compression technique in which activities or phases normally done in sequence are performed in parallel. It can reduce schedule duration but increases coordination risk.

**Feasibility Analysis**
An analysis that evaluates whether a proposed initiative is practical and likely to succeed within given constraints. It often considers technical, financial, legal, and operational factors.

**Feature**
A service or function of a product that delivers value to a user or stakeholder. Features are often broken into user stories for planning and implementation.

**Firm-Fixed-Price Contract**
A contract where the seller agrees to deliver the specified product or service for a fixed total price. The seller bears more cost risk than the buyer.

**Fixed Duration**
A scheduling assumption or activity attribute where the activity’s duration is set and does not change when resources are added or removed. Opposite of effort-driven activities.

**Fixed Formula Method**
An earned value method that allocates budget to milestones within a work package according to a predefined formula, such as 50/50 or 0/100, to determine earned value.

**Fixed-Price Contract**
A broad category of contracts where the seller is paid a fixed amount for the defined work, regardless of actual costs. Variants include firm-fixed-price and fixed-price-incentive-fee.

**Fixed-Price-Incentive-Fee Contract**
A fixed-price contract that includes an incentive bonus based on meeting cost or performance targets. Cost savings may be shared between buyer and seller according to a formula.

**Fixed-Price-With-Economic-Price-Adjustment Contract**
A fixed-price contract that allows for adjustments to the price based on external economic changes, such as inflation indexes or commodity prices. Used for long-term engagements.

**Forward Pass**
A critical path method calculation that moves from the start of the project forward to determine early start and early finish dates for each activity.

**Free Float**
The amount of time an activity can be delayed without delaying the start of any successor activity. It is different from total float, which relates to the project finish date.

**Functional Organization**
An organizational structure in which staff are grouped by function (for example, finance, IT, marketing), and functional managers have authority over resources. Project managers may have limited authority in this structure.

**Go/No-Go Decision**
A decision point at which leaders determine whether to continue, modify, or terminate an initiative or phase. Often occurs at phase gates or major investment milestones.

**Ground Rules**
Agreed-upon guidelines for behavior, communication, and collaboration within the team. They help set expectations and reduce conflict.

**Impediment**
Anything that slows or blocks the team’s progress, such as dependencies, environmental issues, or decision delays. In Scrum, impediments are typically addressed by the Scrum master.

**Increment**
In agile, a version of the product that includes all completed work for the current iteration plus what was delivered in earlier iterations. Each increment should be usable and potentially shippable.

**Incremental Approach**
A development strategy where the product is built and delivered in usable chunks, each adding new functionality to what has already been delivered. Can be combined with iterative approaches.

**Information Radiator**
A visible display of project information, such as task boards, charts, or metrics. Intended to keep stakeholders informed at a glance.

**Integration**
The process of combining project activities, deliverables, and components into a cohesive whole. Integration management ensures that work across different areas remains aligned.

**Issue Log**
A document or tool used to record, track, and manage issues that require resolution. Each issue typically has an owner, due date, and status.

**Iteration Plan**
A short-term plan that details the work the team commits to complete in a specific iteration or sprint. It is typically derived from the backlog and refined during planning.

**Iteration Review**
A session at the end of an iteration where the team demonstrates completed work to stakeholders, gathers feedback, and discusses what was accomplished. In Scrum, this is the sprint review.

**Iterative Approach**
A development approach that delivers a solution through repeated cycles (iterations) of planning, executing, and evaluating. Each iteration explores and refines the product.

**Kanban Board**
A visual board that represents work items and their status using columns (such as To Do, In Progress, Done). It supports limiting work in process and improving flow.

**Key Performance Indicator (KPI)**
A quantifiable measure used to evaluate how well a project, product, or organization is achieving key objectives. KPIs should be aligned with desired outcomes and benefits.

**Kickoff Meeting**
An initial meeting that brings key stakeholders and team members together to align on objectives, scope, roles, and high-level plans. It sets expectations and builds early engagement.

**Lag**
The amount of delay between activities in a schedule network. Lag is often used to represent waiting time, such as curing or approval periods.

**Late Finish Date**
The latest date an activity can finish without delaying the project completion date, as determined by the backward pass. Helps identify float and critical path.

**Late Start Date**
The latest date an activity can start without delaying the project completion date. Also determined during the backward pass.

**Lead**
The amount of time whereby a successor activity can be advanced with respect to a predecessor activity. Leads create intentional overlap to accelerate schedules.

**Lessons Learned Register**
A project document used to capture knowledge gained throughout the project, including successes, problems, and recommendations. It is updated regularly and feeds organizational learning.

**Level of Effort**
Support-type work that does not produce a discrete deliverable but must be performed throughout the project, such as supervision or stakeholder liaison. LOE effort is often time-based rather than output-based.

**Logical Relationship**
The dependency between activities that determines the order in which they should occur. Common logical relationships include finish-to-start, start-to-start, finish-to-finish, and start-to-finish.

**Make-or-Buy Analysis**
An analysis used to decide whether work or components should be produced internally or purchased from external suppliers. Considers cost, capability, risk, and strategic impact.

**Matrix Organization**
An organizational structure where team members report to more than one manager, typically both functional and project managers. Matrix structures can be weak, balanced, or strong depending on project authority.

**Method**
A repeatable, systematic way of doing something, often including tools, techniques, and procedures. Methods may be prescribed by organizational standards or tailored for a project.

**Methodology**
An overarching framework that combines principles, methods, tools, and governance for managing projects. Examples include PRINCE2, Scrum, and SAFe.

**Milestone**
A significant point or event in the project, such as a phase completion or key deliverable. Milestones are often used for reporting and decision checkpoints and have zero duration.

**Milestone Schedule**
A high-level schedule that shows only major milestones and key events, without detailed activities. Useful for executive communication and early planning.

**Mind Mapping**
A creativity technique that uses a diagram to visually organize ideas around a central concept. Helps teams explore relationships and generate additional ideas.

**Minimum Business Increment (MBI)**
The smallest set of functionality that delivers meaningful value to the business and can be released independently. MBIs help ensure that releases are both small and valuable.

**Minimum Marketable Feature (MMF)**
The smallest feature or set of features that delivers enough value to justify being marketed or released. MMFs focus on customer value and time to market.

**Minimum Viable Product (MVP)**
The smallest version of a product that can be released to test assumptions and gather real user feedback. MVPs emphasize learning and rapid iteration over completeness.

**Model**
A simplified representation of a system, process, or concept used to analyze, explain, or predict behavior. Examples include schedule models, financial models, and process models.

**Modeling**
The act of creating models, often using diagrams, simulations, or mathematical representations, to support analysis and decision making.

**Monte Carlo Simulation**
A quantitative risk analysis technique that uses random sampling and probability distributions to model uncertainty and produce a range of possible outcomes. Often used to forecast cost or schedule risk.

**Most Likely Duration**
The estimate of an activity’s duration that assumes normal conditions and typical resource productivity. Used with optimistic and pessimistic estimates in three-point and PERT analysis.

**Multicriteria Decision Analysis**
A technique that uses a decision matrix with weighted criteria (such as cost, risk, alignment, and benefits) to evaluate and rank options. Helps make transparent, structured decisions.

**Multipoint Estimating**
An estimating method that uses three or more estimates (for example, optimistic, most likely, pessimistic) to capture uncertainty and derive an expected value for cost or duration.

**Near-Critical Activity**
An activity whose total float is low enough that small delays could cause it to become critical. Near-critical activities warrant close monitoring.

**Near-Critical Path**
A sequence of activities with low total float that is close in duration to the critical path. Delays on this path may create a new critical path.

**Network Logic**
The complete set of logical relationships that define the sequence of activities in a schedule network. Network logic underpins critical path and float calculations.

**Network Path**
A series of activities connected by logical relationships from project start to finish. The longest network path is the critical path.

**Node**
In a schedule network diagram, a graphical representation of an activity, event, or decision point. Nodes are connected by arrows that represent dependencies.

**Objective**
A specific, measurable result that supports broader organizational goals. Project objectives guide scope, success criteria, and decision making.

**Objectives and Key Results (OKRs)**
A goal-setting framework that defines ambitious objectives and measurable key results. Used to align teams and track progress toward strategic goals.

**Optimistic Duration**
The shortest possible time in which an activity can be completed, assuming everything goes better than expected. Used in three-point and PERT estimating.

**Organizational Breakdown Structure**
A hierarchical representation that maps project work to organizational units. It helps clarify resource responsibilities and reporting relationships.

**Organizational Process Assets (OPAs)**
Plans, processes, templates, guidelines, and knowledge bases that are specific to an organization and used to influence project success. OPAs include lessons learned repositories and historical data.

**Organizational Project Management (OPM)**
A framework that integrates portfolio, program, and project management with organizational enablers to achieve strategic objectives. OPM focuses on consistent, repeatable delivery.

**Organizational Project Management Maturity**
The level of sophistication and consistency with which an organization applies project, program, and portfolio management practices. Higher maturity generally correlates with more predictable outcomes.

**Overall Risk**
The combined effect of all individual risks and sources of uncertainty on the project as a whole. It can be positive (opportunity), negative (threat), or mixed.

**Parametric Estimating**
An estimating technique that uses statistical relationships or unit rates (such as cost per square foot) between historical data and variables to predict cost or duration.

**Path Convergence**
A situation in a schedule network where multiple predecessor activities flow into a single successor. Path convergence can increase schedule risk because delays in any predecessor affect the successor.

**Path Divergence**
A situation where a single predecessor activity leads to multiple successor activities. Path divergence can increase coordination complexity and resource demands.

**Performance Measurement Baseline**
An integrated baseline of scope, schedule, and cost used to measure and control project performance. It combines the scope baseline, schedule baseline, and cost baseline.

**Performing Organization**
The enterprise whose personnel are directly involved in performing the project work. The performing organization provides resources, governance, and support structures.

**Personas**
Fictional but evidence-based representations of groups of end users, describing their goals, behaviors, and characteristics. Personas help teams design solutions that meet user needs.

**Pessimistic Duration**
The longest anticipated time required to complete an activity, assuming unfavorable but realistic conditions. Used in three-point and PERT estimating.

**PESTLE Analysis**
An environmental scanning technique that examines Political, Economic, Sociocultural, Technological, Legal, and Environmental factors. It helps identify external opportunities and threats.

**Phase Gate**
A review at the end of a phase where leadership decides whether to continue, modify, or terminate the project or program. Phase gates provide control points for major investments.

**Plan-Do-Check-Act (PDCA)**
A continuous improvement cycle in which teams plan a change, implement it, check results, and act to standardize or further adjust. PDCA underpins many quality and process improvement methods.

**Portfolio Balancing**
The process of adjusting the mix of portfolio components to align with strategy, optimize risk and return, and respect resource constraints. Balancing may involve starting, stopping, or reprioritizing projects.

**Portfolio Charter**
A document issued by a sponsor that authorizes the portfolio, defines its structure, and links it to organizational strategy. It sets boundaries and decision rights.

**Portfolio Management**
The centralized management of one or more portfolios to achieve strategic objectives. Portfolio management ensures that projects and programs are selected and prioritized based on value.

**Portfolio Management Plan**
A plan that describes how the portfolio will be structured, governed, monitored, and controlled. It may define decision criteria, reporting, and escalation paths.

**Portfolio Manager**
The person or group responsible for managing a portfolio, including selecting, prioritizing, balancing, and monitoring components to achieve strategic objectives.

**Precedence Diagramming Method**
A method of constructing a project schedule network diagram where activities are represented by nodes and logical relationships are shown as connecting arrows.

**Predecessor Activity**
An activity that logically comes before another activity in a schedule. Its start or finish controls when the successor activity can start or finish.

**Predictive Approach**
A development approach in which scope, schedule, and cost are largely determined early in the life cycle, and changes are carefully controlled. Often called waterfall.

**Preventive Action**
An intentional action taken to reduce the probability of negative risk events or to align future performance with the plan. Preventive actions aim to avoid problems before they occur.

**Probability and Impact Matrix**
A grid that maps the probability of a risk occurring against its impact on objectives. It helps prioritize risks for response planning.

**Process**
A logically ordered set of activities that transform inputs into outputs to achieve a specific result. Projects are managed through a collection of processes.

**Process Flow**
A visual representation of the steps, decision points, and flows in a process. Process flows clarify how work is done and where improvements might be made.

**Procurement Management Plan**
A component of the project management plan that describes how goods and services will be acquired from outside the performing organization. It addresses contract types, roles, and procurement timelines.

**Product Life Cycle**
The series of phases a product goes through from conception and development through growth, maturity, and retirement. Different life cycle stages may require different project strategies.

**Product Management**
The discipline focused on maximizing the value of a product over its life cycle by understanding customers, defining the product vision, and managing the roadmap and backlog.

**Program Charter**
A document that authorizes a program, defines its objectives, and links it to strategic goals. It sets high-level scope, benefits, and governance for the program.

**Program Evaluation and Review Technique (PERT)**
A schedule analysis technique that uses three-point estimates (optimistic, most likely, pessimistic) to calculate expected durations and schedule risk, often assuming a beta distribution.

**Program Management**
The coordinated management of a group of related projects and activities to obtain benefits not available when managing them individually. Program management focuses on achieving strategic outcomes.

**Program Management Office**
An office that supports program governance, standards, reporting, and sometimes direct management of component projects within a program. Distinct from a project management office that spans many projects.

**Program Management Plan**
A plan that guides the execution, governance, and control of a program. It integrates component plans and outlines how benefits will be realized and sustained.

**Program Manager**
The person responsible for managing a program and achieving its benefits and strategic objectives. Program managers coordinate across projects and manage interdependencies.

**Progressive Elaboration**
The iterative process of continually refining and detailing plans and requirements as more information becomes available. It allows planning to evolve as uncertainty decreases.

**Project Budget**
The approved total cost for the project, including contingency reserves and sometimes management reserves. It provides the financial framework for controlling project expenditures.

**Project Calendar**
A calendar that identifies working days, nonworking days, and specific work periods for project activities. It may differ from resource calendars.

**Project Governance**
The framework of roles, responsibilities, decision rights, and processes that guide project decision making and oversight. Governance ensures alignment with organizational strategy and standards.

**Project Life Cycle**
The series of phases a project passes through from start to finish, such as initiation, planning, execution, monitoring and controlling, and closing. Different life cycles can be predictive, adaptive, or hybrid.

**Project Management Information System (PMIS)**
The tools and systems used to collect, integrate, and disseminate project information. PMIS may include scheduling tools, collaboration platforms, dashboards, and repositories.

**Project Management Plan**
The integrated document that describes how the project will be executed, monitored, and controlled. It consolidates subsidiary plans for scope, schedule, cost, quality, resources, risk, and other areas.

**Project Organization Chart**
A graphical representation of the project’s reporting relationships and structure. It clarifies roles, lines of authority, and communication paths.

**Project Phase**
A collection of related project activities that culminate in the completion of one or more deliverables. Projects may be divided into sequential, overlapping, or iterative phases.

**Project Schedule**
The planned dates for performing activities and meeting milestones. Represented in tools such as Gantt charts or network diagrams and used to monitor progress.

**Project Schedule Network Diagram**
A graphical representation of activities and their logical relationships. It is used to identify paths, dependencies, and the critical path.

**Project Scope**
The sum of products, services, and results to be provided by the project. Clearly defined scope reduces the risk of scope creep and misaligned expectations.

**Project Scope Statement**
A detailed description of project scope, including deliverables, assumptions, and constraints. It documents what is included and excluded from the project.

**Projectized Organization**
An organizational structure in which project managers have high authority and most of the organization’s resources are aligned to projects rather than functional departments.

**Qualitative Risk Analysis**
A technique that assesses risks based on their probability and impact using descriptive scales. It prioritizes risks for further analysis or action without using detailed numerical models.

**Quality Audit**
A structured, independent review to determine whether project activities comply with organizational and project policies, processes, and procedures. It identifies both good practices and improvement areas.

**Quality Management Plan**
A component of the project management plan that describes how quality requirements will be met and validated. It addresses quality standards, metrics, roles, and quality assurance and control activities.

**Quantitative Risk Analysis**
A technique that uses numerical methods, such as simulations and decision trees, to quantify the combined effect of identified risks on project objectives.

**RACI (Responsible, Accountable, Consulted, Informed) Matrix**
A type of responsibility assignment matrix that clarifies who is responsible, accountable, consulted, and informed for each task or decision. Reduces confusion and overlaps in roles.

**Regression Analysis**
A statistical technique that identifies relationships between a dependent variable and one or more independent variables. Used to predict future outcomes based on historical data.

**Relative Estimating**
An estimating method in which work items are sized by comparing them to one another rather than by using absolute units. Story points in agile are a common example.

**Release**
A version of the product made available to users, often bundling multiple features or fixes. Releases can be scheduled (time-based) or triggered by readiness of functionality.

**Release Plan**
A plan that maps which features or increments will be delivered in which releases over time. It connects the product roadmap to the backlog and team-level plans.

**Release Planning**
The activity of selecting and sequencing backlog items into one or more upcoming releases. It balances value, risk, dependencies, and capacity.

**Requirement**
A condition or capability that a system, product, service, or result must meet. Requirements should be testable, traceable, and aligned with business needs.

**Requirements Management Plan**
A component of the project management plan that describes how requirements will be collected, analyzed, documented, and managed. It also defines traceability and change processes.

**Requirements Traceability Matrix**
A grid that links requirements to their origins, related requirements, and deliverables. It helps ensure that each requirement is addressed and that changes are controlled.

**Reserve**
Time or money set aside to address risk and uncertainty. Contingency reserve covers known risks; management reserve covers unknown risks at a higher level.

**Reserve Analysis**
A technique used to determine the amount of time or budget needed in reserves, and to monitor reserve usage over the life of the project.

**Resource Breakdown Structure**
A hierarchical structure that categorizes resources by type or function (such as people, equipment, or materials). Supports resource planning and reporting.

**Resource Calendar**
A calendar that documents working days, nonworking days, and availability for specific resources. It can differ from the overall project calendar.

**Resource Management Plan**
A component of the project management plan that describes how project team members and physical resources will be acquired, managed, and released.

**Resource Optimization Technique**
Techniques such as resource leveling and resource smoothing that adjust schedules to address resource constraints and improve utilization.

**Resource Smoothing**
A resource optimization technique that adjusts activities within their float to reduce resource demand peaks, without changing the project completion date.

**Response Strategy**
An approach chosen to address a risk, such as avoid, mitigate, transfer, or accept for threats, and exploit, enhance, share, or accept for opportunities.

**Responsibility**
The duty to perform assigned work or tasks. Responsibility can be shared, but accountability for outcomes should remain clear.

**Responsibility Assignment Matrix**
A matrix that maps project activities to project roles, often using RACI notation, to clarify who is responsible and accountable for what.

**Result**
An outcome produced by performing a process or completing a project, which may be tangible or intangible. Results can be intermediate or final.

**Rework**
Work required to correct defects or nonconformities in deliverables. Excessive rework increases cost and schedule risk.

**Risk Acceptance**
A risk response strategy in which the project team acknowledges the risk and takes no proactive action other than monitoring. It is appropriate when the risk is low or response is not cost-effective.

**Risk Action**
Specific tasks or activities undertaken to implement a chosen risk response strategy. Each action should have a defined owner and due date.

**Risk Action Owner**
The person responsible for carrying out a particular risk response action. Distinct from the overall risk owner who is accountable for the risk.

**Risk Analysis**
The process of assessing the characteristics of risks, often through qualitative and quantitative techniques, to understand their likelihood and impact.

**Risk Assessment**
The overall process of risk identification, analysis, and prioritization. It informs decisions about which risks require responses.

**Risk Attitude**
An individual’s or organization’s chosen approach to risk, influenced by risk appetite, tolerance, and thresholds. Risk attitude affects how aggressively opportunities and threats are pursued.

**Risk Avoidance**
A response strategy that changes the project plan to eliminate the threat or protect project objectives from its impact, such as removing risky scope or changing the approach.

**Risk Breakdown Structure**
A hierarchical decomposition of risk sources, similar to a WBS, that organizes risks by categories such as technical, external, organizational, and project management.

**Risk Category**
A grouping of individual risks based on common sources or impacts. Categories support consistent identification and reporting.

**Risk Enhancement**
An opportunity response strategy that increases the probability or positive impact of an opportunity, such as adding resources to exploit a favorable condition.

**Risk Escalation**
Transferring a risk to a higher level of the organization (for example, from project to program) when it is outside the authority or scope of the project manager.

**Risk Exploiting**
An opportunity response strategy that ensures the opportunity is realized, such as assigning the most skilled resources to a high-value opportunity.

**Risk Exposure**
The potential effect of risks on project objectives, often expressed as the product of probability and impact aggregated across risks.

**Risk Identification**
The process of determining which risks may affect the project and documenting their characteristics. Uses techniques such as brainstorming, checklists, and interviews.

**Risk Management**
The systematic process of identifying, analyzing, planning responses for, and monitoring risks throughout the project. It aims to increase opportunities and reduce threats.

**Risk Management Framework**
The organizational structure, policies, and processes that guide how risk management is performed across projects, programs, and portfolios.

**Risk Management Life Cycle**
The continuous cycle of risk planning, identification, analysis, response planning, implementation, and monitoring and review over the life of the initiative.

**Risk Management Plan**
A component of the project management plan that describes how risk management will be structured and performed. It defines risk categories, roles, processes, and reporting.

**Risk Mitigation**
A response strategy that reduces the probability and/or impact of a threat to an acceptable level, such as by adding tests, redundancies, or training.

**Risk Owner**
The individual responsible for monitoring a specific risk and ensuring that appropriate responses are planned and implemented.

**Risk Response**
Actions taken to address a risk, including choosing and implementing a response strategy. Responses should be monitored and adjusted as needed.

**Risk Sharing**
An opportunity response strategy that involves allocating ownership and benefits of an opportunity to a third party best able to capture it, such as a joint venture.

**Risk Threshold**
The specific point at which risk exposure becomes unacceptable to stakeholders. Thresholds guide decisions about which risks require action.

**Risk Transference**
A response strategy that shifts the ownership of a threat and its impact to a third party, often through insurance, warranties, or contracts.

**Roadmap**
A high-level, time-phased view of major deliverables, features, or milestones over the life of a product or program. Roadmaps link strategic intent to planned work.

**Rolling Wave Planning**
A form of progressive elaboration where near-term work is planned in detail, while future work is planned at a higher level until more information is available.

**Root Cause Analysis**
A problem-solving method used to identify underlying causes of an issue or risk. Techniques include the five whys and fishbone diagrams.

**Rough Order of Magnitude (ROM) Estimate**
An early, high-level estimate with a wide range of uncertainty, often expressed as ±50% or more. Used for initial screening and decision making.

**S-Curve Analysis**
An analysis technique that compares cumulative cost or progress over time to the planned baseline curve. Deviations from the S-curve indicate performance issues.

**Schedule Compression**
Techniques such as crashing and fast tracking used to shorten the schedule without changing project scope. Schedule compression often increases cost or risk.

**Schedule Forecasts**
Estimates of future schedule performance based on current status and trends, such as estimated completion dates or remaining duration.

**Schedule Management Plan**
A component of the project management plan that sets out how the schedule will be developed, monitored, and controlled. It defines tools, units of measure, and thresholds.

**Schedule Model**
A representation of the plan for executing project activities, including relationships, durations, constraints, and calendars. The schedule model generates the project schedule.

**Schedule Model Analysis**
The process of analyzing the schedule model to assess feasibility and performance, using techniques such as critical path analysis, what-if scenarios, and Monte Carlo simulation.

**Schedule Network Analysis**
A technique that uses the schedule network diagram to identify critical paths, calculate float, and estimate project completion dates.

**Scope Management Plan**
A component of the project management plan that describes how scope will be defined, validated, and controlled. It outlines processes for managing scope changes.

**Secondary Risk**
A new risk that arises as a direct result of implementing a risk response. Secondary risks should be analyzed and managed like other risks.

**Single-Point Estimating**
An estimating technique that uses one value for a cost or duration estimate, without explicitly modeling uncertainty. It is simpler but less informative than multipoint estimating.

**Spike**
In agile, a time-boxed effort to research or experiment with a topic to reduce uncertainty. Spikes help teams gain knowledge needed to estimate and implement future work.

**Sprint Review**
In Scrum, a meeting held at the end of each sprint where the team and stakeholders inspect the increment and adapt the backlog as needed.

**Stakeholder Engagement Assessment Matrix**
A matrix that compares current and desired levels of stakeholder engagement. It helps plan strategies to close engagement gaps.

**Stakeholder Engagement Plan**
A component of the project management plan that describes strategies and actions to engage stakeholders effectively throughout the project.

**Statement of Work (SOW)**
A detailed narrative description of products or services to be delivered under a contract or agreement. It defines scope, deliverables, and acceptance criteria for procured work.

**Steering Committee**
A group of senior stakeholders that provides strategic guidance, resolves escalated issues, and makes key decisions for one or more projects or programs.

**Story Map**
A visual representation of user activities and the user stories that support them, arranged in a flow that reflects the user journey. Story maps help prioritize slices of functionality for releases.

**Story Point**
A relative unit of measure used by agile teams to estimate the size or complexity of user stories. Story points support velocity-based forecasting.

**Successor Activity**
An activity whose start or finish depends on the start or finish of one or more predecessor activities.

**Summary Activity**
An activity that represents a group of related activities at a higher level in the schedule hierarchy. It summarizes the schedule information for its component activities.

**SWOT (Strengths, Weaknesses, Opportunities, Threats) Analysis**
A strategic analysis technique that examines internal strengths and weaknesses and external opportunities and threats. Used to shape strategies and identify risks and opportunities.

**Test Plan**
A document that describes the scope, approach, resources, and schedule of intended testing activities. It identifies test objectives, pass/fail criteria, and responsibilities.

**Threat**
In risk management, a risk that, if it occurs, would have a negative impact on project objectives. Threats are managed with response strategies such as avoid, mitigate, transfer, or accept.

**Throughput**
The rate at which work items are completed over a given time period. In flow-based systems, throughput is used with cycle time and work in process to understand system performance.

**Time and Materials (T&M) Contract**
A contract type that pays the seller for actual time worked and materials used, often with agreed rates and caps. It combines aspects of cost-reimbursable and fixed-price contracts.

**Timebox**
A fixed, non-negotiable period of time allocated to complete a defined amount of work. Timeboxing is central to agile iterations and certain meetings.

**To-Complete Performance Index (TCPI)**
The cost performance needed on the remaining work to meet a specified financial goal, such as the BAC or a revised EAC. Calculated as (target – EV) / (target – AC).

**Total Cost of Ownership**
The full cost of acquiring, operating, maintaining, and disposing of a product or service over its life cycle. TCO helps compare options beyond initial purchase price.

**Total Float**
The amount of time an activity can be delayed without delaying the project finish date or violating a schedule constraint. Activities on the critical path have zero total float.

**Traceability**
The ability to track relationships among requirements, design elements, implementation, and tests. Traceability helps ensure that requirements are implemented and verified.

**Trend Analysis**
An analytical technique that uses historical performance data to identify patterns and project future performance. Often used with earned value metrics.

**Trigger Condition**
An event or circumstance that indicates a risk is about to occur or has occurred. Triggers help teams recognize when to implement contingency plans.

**Use Case**
A description of how a user interacts with a system to achieve a specific goal. Use cases help define functional requirements and clarify system behavior.

**Validation**
The assurance that a product, service, or result will meet the needs of the customer or intended use. Validation focuses on “building the right thing.”

**Value Delivery Office**
An organizational unit that supports agile and adaptive delivery, focusing on coaching, capability building, and mentoring sponsors and product owners to improve value outcomes.

**Value Stream Map**
A diagram that shows the flow of materials and information through a process, highlighting value-adding steps and waste. Used to identify bottlenecks and improvement opportunities.

**Variance Analysis**
An analytical technique that compares actual performance with planned performance to understand the size and cause of variances. Supports corrective and preventive action.

**Verification**
The process of evaluating whether a product, service, or result complies with specified requirements or standards. Verification focuses on “building the thing right.”

**Waste**
Activities that consume resources without adding value to the customer or desired outcomes. Lean and agile practices aim to identify and eliminate waste.

**WBS Dictionary**
A companion document to the work breakdown structure that provides detailed information about each WBS element, such as description, deliverables, assumptions, and responsible parties.

**Weighted Milestone Method**
An earned value technique that divides a work package into weighted milestones and recognizes earned value only when milestones are completed.

**What-If Scenario Analysis**
An analysis technique that evaluates how changes in assumptions, variables, or risks would affect project objectives. Supports contingency planning and decision making.

**Work in Process (WIP)**
Work items that have been started but are not yet completed. Limiting WIP helps improve flow and reduce multitasking.

**Workaround**
An unplanned response to a risk event that has already occurred or was not previously identified. Workarounds are implemented quickly to address issues and are documented as part of risk management.

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
