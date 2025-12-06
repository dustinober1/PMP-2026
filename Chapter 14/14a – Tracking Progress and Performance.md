# 14a – Tracking Progress and Performance

## Learning Objectives

By the end of this section, you will be able to:
- Select appropriate performance metrics based on project delivery approach
- Apply earned value management (EVM) concepts to assess schedule and cost performance
- Distinguish between leading and lagging indicators
- Create status reports that drive decision-making rather than just document activity
- Implement real-time tracking mechanisms appropriate to project context

---

## Introduction

Sarah reviewed the weekly status report for the Office Renovation project. The spreadsheet showed green across every category: scope, schedule, cost, quality, risk. Yet something felt wrong. Vendor emails hinted at material shortages. The electrical contractor had been unusually quiet. The budget showed 60% spent with 60% of work complete—perfectly on track, except Sarah knew that some expensive work items were still ahead.

"Why does this report say we're fine when my gut says we're not?" she asked her mentor.

"Because," he replied, "you're tracking the wrong things. Or rather, you're tracking outputs instead of outcomes, lagging indicators instead of leading ones, and activity instead of progress. Let's redesign your metrics."

That conversation transformed how Sarah approached performance tracking across all three projects. She learned that effective monitoring isn't about generating reports—it's about creating visibility that enables timely intervention.

---

## The Purpose of Performance Tracking

Performance tracking serves several critical purposes:

1. **Early Warning Detection** – Identify problems before they become crises
2. **Trend Analysis** – Understand whether performance is improving, declining, or stable
3. **Decision Support** – Provide data to inform corrective or preventive actions
4. **Stakeholder Communication** – Keep sponsors and teams informed about progress
5. **Accountability** – Create transparency about commitments and results
6. **Learning** – Build organizational knowledge about what works and what doesn't

Poor performance tracking creates a false sense of security or, conversely, alarm about issues that don't matter. Effective tracking illuminates what requires attention and what's proceeding well.

---

## Types of Metrics: Choosing What to Measure

### Lagging vs. Leading Indicators

**Lagging indicators** measure outcomes that have already occurred:
- Budget spent vs. budget planned
- Tasks completed vs. tasks planned
- Defects found in testing
- Scope delivered

Lagging indicators tell you what happened but don't help prevent problems.

**Leading indicators** predict future performance:
- Velocity trends in agile teams
- Number of open risks with no response plan
- Stakeholder satisfaction scores
- Team morale and engagement
- Requirements volatility
- Defect density in early testing

Leading indicators enable proactive intervention before problems materialize.

**Best practice**: Use a balanced scorecard approach with both leading and lagging indicators.

### Output vs. Outcome Metrics

**Output metrics** track deliverables and activities:
- Lines of code written
- Requirements documented
- Meetings held
- Reports published

**Outcome metrics** track value and impact:
- User satisfaction with new features
- Time saved through process automation
- Revenue generated from new product
- Organizational capability improvement

PMI's emphasis on value delivery (from Chapter 3) means outcome metrics often matter more than output metrics, particularly for demonstrating project success.

---

## Earned Value Management (EVM) Fundamentals

Earned value management is a powerful technique for integrating scope, schedule, and cost measurements to assess project performance and forecast future results.

### Core EVM Concepts

**Planned Value (PV)**: The authorized budget assigned to scheduled work. Also called "Budgeted Cost of Work Scheduled" (BCWS).
- Answers: "What did we plan to accomplish by this point?"

**Earned Value (EV)**: The measure of work performed expressed in terms of the budget authorized for that work. Also called "Budgeted Cost of Work Performed" (BCWP).
- Answers: "What have we actually accomplished in budget terms?"

**Actual Cost (AC)**: The realized cost incurred for the work performed. Also called "Actual Cost of Work Performed" (ACWP).
- Answers: "What did we actually spend?"

**Budget at Completion (BAC)**: The total budget for the project.

### Key EVM Formulas

**Schedule Variance (SV)**: `SV = EV - PV`
- Positive SV means ahead of schedule
- Negative SV means behind schedule

**Cost Variance (CV)**: `CV = EV - AC`
- Positive CV means under budget
- Negative CV means over budget

**Schedule Performance Index (SPI)**: `SPI = EV / PV`
- SPI > 1.0 means ahead of schedule
- SPI < 1.0 means behind schedule

**Cost Performance Index (CPI)**: `CPI = EV / AC`
- CPI > 1.0 means under budget
- CPI < 1.0 means over budget

**Estimate at Completion (EAC)**: Several formulas exist depending on assumptions:
- If current variances are atypical: `EAC = AC + (BAC - EV)`
- If current CPI will continue: `EAC = BAC / CPI`
- If both SPI and CPI will continue: `EAC = AC + [(BAC - EV) / (CPI × SPI)]`

**Estimate to Complete (ETC)**: `ETC = EAC - AC`

**Variance at Completion (VAC)**: `VAC = BAC - EAC`

**To-Complete Performance Index (TCPI)**: Shows the cost performance required on remaining work:
- Based on BAC: `TCPI = (BAC - EV) / (BAC - AC)`
- Based on EAC: `TCPI = (BAC - EV) / (EAC - AC)`

### Example: Office Renovation EVM Analysis

**Scenario**: The Office Renovation project has a total budget of $500,000 (BAC) and is planned for 20 weeks. At week 12:
- Planned Value (PV): $300,000 (60% of work should be complete)
- Earned Value (EV): $270,000 (54% of work actually complete)
- Actual Cost (AC): $290,000

**Analysis**:
- **Schedule Variance**: SV = $270,000 - $300,000 = -$30,000 (behind schedule)
- **Cost Variance**: CV = $270,000 - $290,000 = -$20,000 (over budget)
- **Schedule Performance Index**: SPI = $270,000 / $300,000 = 0.90 (90% schedule efficiency)
- **Cost Performance Index**: CPI = $270,000 / $290,000 = 0.93 (93% cost efficiency)

**Forecast**:
- **Estimate at Completion** (assuming current CPI continues): EAC = $500,000 / 0.93 = $537,634
- **Variance at Completion**: VAC = $500,000 - $537,634 = -$37,634 (projected to be over budget)
- **To-Complete Performance Index** (to meet BAC): TCPI = ($500,000 - $270,000) / ($500,000 - $290,000) = 1.10

**Interpretation**: The project is both behind schedule and over budget. To complete within the original budget, the team needs to achieve a cost efficiency of 1.10 (10% better than planned) on all remaining work—significantly better than the current performance of 0.93.

Sarah used this analysis to justify requesting additional funding and negotiating a deadline extension with the steering committee.

---

## Tracking Approaches Across Different Contexts

### Predictive Projects: Baseline-Driven Tracking

The Office Renovation project uses formal earned value management:

**Weekly Tracking Process**:
1. Project manager reviews completed work packages
2. Assigns earned value based on percent complete or milestones achieved
3. Collects actual cost data from accounting system
4. Calculates variance and performance indices
5. Updates forecast (EAC) based on trends
6. Prepares status report for steering committee
7. Identifies corrective actions if variances exceed thresholds

**Thresholds**: Sarah established that variances greater than 10% or performance indices below 0.90 trigger formal review and response planning.

**Tools**: Microsoft Project with earned value tracking, integrated with financial system for actual cost data.

### Agile Projects: Velocity and Burndown Tracking

The Expense System team tracks performance very differently:

**Sprint-Level Metrics**:
- **Velocity**: Story points completed per sprint (leading indicator of capacity)
- **Burndown Chart**: Remaining work vs. time in sprint
- **Burnup Chart**: Cumulative work completed toward release goal
- **Cycle Time**: Average time from "in progress" to "done"
- **Defect Escape Rate**: Bugs found in production vs. found in sprint
- **Sprint Goal Success Rate**: Percentage of sprint goals fully achieved

**Daily Tracking Process**:
1. Team updates task board during daily standup
2. Burndown chart auto-updates from task management tool (Jira)
3. Team discusses any impediments or blockers
4. Scrum Master tracks removal of impediments
5. Product Owner monitors progress toward sprint goal

**Retrospective-Driven Improvement**: Every two weeks, the team reviews velocity trends and identifies process improvements.

**Example**: After three sprints, the Expense System team's velocity stabilized at 32 story points per sprint. When sprint 4 velocity dropped to 24 points, the Scrum Master investigated and discovered that two team members were being pulled into production support for legacy systems. Sarah escalated to management to protect the team's capacity.

### Hybrid Programs: Multi-Level Tracking

The Transformation Program requires both program-level and team-level metrics:

**Program-Level Tracking** (Monthly):
- Earned value for entire program
- Benefits realization scorecard
- Risk and issue trends
- Stakeholder satisfaction index
- Organizational change adoption metrics

**Team-Level Tracking** (Sprint/Iteration):
- Velocity for agile teams
- Milestone achievement for predictive workstreams
- Cross-team dependency resolution rate
- Integration test pass rates

**Integration Challenge**: Sarah created a dashboard that rolled up team-level metrics into program-level indicators while preserving visibility into individual team performance.

---

## Creating Effective Status Reports

Status reports should drive decisions, not just document activities.

### The Problem with Activity-Based Reporting

**Poor Example**:
"This week we held three stakeholder meetings, completed five requirements documents, and conducted two vendor reviews. Next week we plan to hold four more meetings and complete three additional documents."

**What's missing**: Progress toward objectives, variance from plan, risks requiring attention, decisions needed.

### Elements of Decision-Driving Status Reports

1. **Executive Summary** – One paragraph highlighting what matters most: key accomplishments, critical issues, decisions needed

2. **Progress Against Objectives** – Status toward project goals and deliverables, not just activities completed

3. **Variance Analysis** – Where are we ahead/behind schedule or over/under budget, with explanation of causes

4. **Forecast** – Updated completion date and cost estimates based on current performance

5. **Top Risks and Issues** – Three to five items requiring stakeholder awareness or escalation

6. **Decisions Needed** – Specific asks from stakeholders with clear options and deadlines

7. **Upcoming Milestones** – What's expected in the next reporting period

### Stoplight (RAG) Reporting

Red-Amber-Green (RAG) indicators provide at-a-glance status:

**Best Practices**:
- Define objective criteria for each color (don't leave it to interpretation)
- Example: Green = variance within ±5%, Amber = variance between 5-10%, Red = variance >10%
- Include trend indicators: improving, stable, declining
- Explain what's being done about amber and red statuses

**Example from Office Renovation**:
- **Schedule**: Amber (5% behind) → Trend: stable → Action: Fast-tracking electrical and plumbing to recover two weeks
- **Budget**: Green (2% under) → Trend: stable → Action: None required
- **Quality**: Green → Trend: improving → Action: Continue current inspection protocol
- **Risk**: Amber → Trend: worsening → Action: Escalating material availability risk to steering committee

---

## Real-Time Tracking Mechanisms

### Daily Standups (Agile Context)

The Expense System team's daily standup provides real-time visibility:

**Three Questions**:
1. What did I complete yesterday toward our sprint goal?
2. What will I work on today toward our sprint goal?
3. What impediments are blocking my progress?

**Duration**: 15 minutes, timeboxed strictly

**Outcome**: Shared understanding of progress, early identification of blockers

**Anti-Pattern**: Standups that become status reports to the Scrum Master rather than team coordination sessions

### Information Radiators

**Definition**: Highly visible displays of project information that provide passive updates to anyone nearby.

**Examples**:
- **Task Board**: Physical or digital board showing work items in various stages (To Do, In Progress, Done)
- **Burndown Chart**: Graph displayed prominently showing remaining work vs. time
- **Build Status**: Continuous integration dashboard showing test pass rates
- **Team Calendar**: Key milestones and upcoming events

**Sarah's Implementation**: For the Transformation Program, she created a program-level dashboard displayed on large monitors in common areas, showing:
- Overall progress toward transformation objectives
- Inter-team dependencies and blockers
- Upcoming integration points
- Celebration of recent wins

---

## Leading Indicators for Proactive Management

### Example: Requirements Volatility

**Metric**: Percentage of requirements changed, added, or removed each week/sprint

**Why it matters**: High requirements volatility may indicate:
- Stakeholders don't understand what they need
- Market conditions are changing rapidly
- Discovery is revealing new information
- Scope creep is occurring

**Sarah's Experience**: On the Expense System project, requirements volatility started at 30% in early sprints (expected during discovery) but remained at 25% in sprint 6. This led Sarah and the Product Owner to conduct additional stakeholder workshops to stabilize the vision, reducing volatility to 10% in subsequent sprints.

### Example: Team Morale Trends

**Metric**: Weekly or bi-weekly pulse surveys asking team members to rate satisfaction, workload, and clarity on a 1-5 scale

**Why it matters**: Declining morale predicts:
- Increased attrition risk
- Decreased productivity
- Quality issues
- Collaboration breakdowns

**Sarah's Experience**: When morale scores on the Office Renovation project dropped from an average of 4.2 to 3.1 over two weeks, Sarah investigated and discovered that the general contractor was making last-minute schedule changes without consulting the team. She intervened, establishing a 48-hour notice requirement for schedule changes, and morale recovered.

---

## Common Pitfalls in Performance Tracking

### Vanity Metrics

**Problem**: Tracking metrics that look impressive but don't correlate with project success.

**Examples**:
- Lines of code written
- Number of meetings held
- Documents produced
- Hours worked

**Solution**: Focus on metrics tied to value delivery and stakeholder satisfaction.

### Over-Measurement

**Problem**: Tracking so many metrics that signal gets lost in noise.

**Symptom**: Status reports with 50 KPIs, most of which no one reads

**Solution**: Limit to 5-7 critical metrics aligned with project objectives. Use additional metrics for diagnostic purposes only.

### Measurement Theater

**Problem**: Creating elaborate tracking systems that aren't actually used for decision-making.

**Example**: Earned value calculations performed because "PMO requires it," but never reviewed or acted upon

**Solution**: Only track what you'll actually use. If a metric doesn't inform decisions, stop collecting it.

### Reporting Lag

**Problem**: Status reports that reflect information from two weeks ago, making intervention too late.

**Solution**: Automate data collection where possible. Use real-time dashboards for fast-moving projects.

---

## Adapting Tracking to Project Phase

Performance tracking should evolve as projects progress:

### Initiation and Planning Phase
- Focus: Are we making planning progress? Do we have the right resources?
- Metrics: Planning milestones achieved, stakeholder engagement, risk identification rate

### Execution Phase
- Focus: Are we delivering as planned? Are we on track?
- Metrics: Earned value, velocity, defect rates, stakeholder satisfaction

### Closing Phase
- Focus: Are we completing deliverables? Are benefits being realized?
- Metrics: Acceptance criteria met, lessons captured, benefits tracking

---

## Tools and Technologies

### For Predictive Projects
- **Microsoft Project**: Integrated scheduling and earned value management
- **Primavera P6**: Enterprise-grade project controls
- **Excel**: Custom tracking spreadsheets (works well for smaller projects)

### For Agile Projects
- **Jira**: Agile project management with built-in velocity and burndown tracking
- **Azure DevOps**: Integrated development and tracking
- **Physical task boards**: Surprisingly effective for co-located teams

### For Hybrid Programs
- **Smartsheet**: Flexible enough for both predictive and agile tracking
- **Monday.com**: Visual project tracking with customizable workflows
- **Power BI / Tableau**: Dashboard and reporting for program-level visibility

**Key Consideration**: Tools should serve your process, not dictate it. Start simple and add complexity only as needed.

---

## Summary

Effective performance tracking provides the visibility needed to manage projects proactively:

- **Select appropriate metrics** based on delivery approach: earned value for predictive, velocity for agile, multi-level indicators for hybrid
- **Balance leading and lagging indicators** to enable both prediction and assessment
- **Create decision-driving status reports** that highlight variance, forecast outcomes, and request stakeholder input
- **Use real-time mechanisms** like daily standups and information radiators for fast-moving projects
- **Avoid common pitfalls** like vanity metrics, over-measurement, and reporting lag
- **Adapt tracking** as projects progress through different phases

Sarah's transformation from generating status reports that sat unread to creating dashboards that drove daily decisions illustrates the power of thoughtful performance tracking. The key isn't more data—it's the right data, presented clearly, at the right time, to the right people.

In the next section, we'll explore what to do when tracking reveals variance: schedule and cost control techniques that bring projects back on track.
