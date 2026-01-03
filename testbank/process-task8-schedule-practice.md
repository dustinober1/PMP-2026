# Process Task 8: Plan and manage schedule - Practice Exam

This document contains 50 hard-mode practice questions focused on schedule management across predictive, agile, and hybrid methodologies.

---

### Question 1

**Enabler:** 5 | **Methodology:** Predictive

**Scenario:**
A project manager is overseeing a pharmaceutical facility construction project. During a weekly review, the team identifies that the "Clean Room HVAC Validation" activity, which is on the critical path, has slipped by three days due to specialized equipment delays. The sponsor has explicitly stated that the facility must be ready for a regulatory audit on a fixed date, but no additional budget can be authorized for this phase.

**Question:**
Which action should the project manager take first to address the schedule slip?

- **Correct:** Evaluate the schedule network diagram to identify discretionary dependencies that can be converted to parallel activities.
- **Distractor 1:** Authorize overtime for the HVAC installation team to recover the lost three days immediately.
- **Distractor 2:** Submit a change request to the Change Control Board to extend the project baseline by three days.
- **Distractor 3:** Implement resource leveling across all non-critical path activities to free up resources for the HVAC validation.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | When the schedule is behind and the budget is fixed, fast-tracking is the preferred compression technique. Fast-tracking involves overlapping sequential activities or changing discretionary dependencies to parallel ones to save time without adding direct costs. |
| **PMI Mindset** | The project manager must analyze the schedule logic before requesting more resources or time. Identifying "soft logic" (discretionary dependencies) that can be modified is a proactive first step in schedule recovery. |
| **The Trap** | Authorizing overtime is a form of crashing, which typically increases costs and violates the "no additional budget" constraint. Extending the baseline is a reactive move that ignores the sponsor's fixed deadline requirement. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 2

**Enabler:** 3 | **Methodology:** Agile

**Scenario:**
An agile team is in the middle of their fourth iteration. The product owner introduces a high-priority regulatory feature that must be completed within the current release cycle. The team's average velocity is 45 story points, and the remaining backlog for the release is 180 points. The new feature is estimated at 30 story points, but the team is already fully committed for the remaining four iterations.

**Question:**
What is the most appropriate way for the project manager to handle this situation?

- **Correct:** Facilitate a backlog refinement session to reprioritize the release backlog and remove lower-value items to accommodate the new feature.
- **Distractor 1:** Instruct the team to increase their velocity to 55 story points for the remaining iterations to ensure all features are delivered.
- **Distractor 2:** Add a fifth iteration to the release schedule to provide the team enough time to complete the additional work.
- **Distractor 3:** Request that the product owner hold the new feature until the next release to avoid disrupting the current team rhythm.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Agile scheduling operates on fixed time and cost, with variable scope. When new high-priority work is introduced to a fixed release window, existing scope must be reprioritized or removed to maintain the team's sustainable pace. |
| **PMI Mindset** | The project manager (or Scrum Master) supports the product owner in maximizing value. This involves trade-offs within the backlog rather than forcing the team to work beyond their capacity or arbitrarily extending deadlines. |
| **The Trap** | Increasing velocity is often not sustainable and leads to technical debt or burnout. Adding an iteration violates the "fixed timebox" principle of the release if the date was previously committed. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 3

**Enabler:** 8 | **Methodology:** Hybrid

**Scenario:**
A project uses a hybrid approach where the hardware components follow a predictive lifecycle and the software follows agile. The integrated schedule shows that the "Hardware Firmware Integration" milestone depends on the completion of the software "Sprint 6." After Sprint 4, the software team reports a 20% decline in velocity due to unforeseen technical debt, projecting that Sprint 6 will finish two weeks late.

**Question:**
What should the project manager do first?

- **Correct:** Perform a critical path analysis on the hardware schedule to determine if the software delay impacts the overall project completion date.
- **Distractor 1:** Direct the software team to skip technical debt remediation to ensure Sprint 6 finishes on the original date.
- **Distractor 2:** Immediately notify the hardware vendors to delay their component delivery by two weeks to match the software schedule.
- **Distractor 3:** Update the software burnup chart and submit a change request to move the hardware integration milestone.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In a hybrid environment, the PM must understand how variations in one methodology (agile) impact the constraints of the other (predictive). The first step is always to assess the impact of the variance on the project's critical path and float. |
| **PMI Mindset** | Assessment before action is critical. The delay in Sprint 6 might not impact the critical path if the integration milestone has sufficient float in the predictive schedule. |
| **The Trap** | Notifying vendors or submitting change requests before a full impact analysis is premature and reactive. Skipping debt remediation often leads to greater delays later in the project. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 4

**Enabler:** 1 | **Methodology:** Predictive

**Scenario:**
During the development of a project schedule for a global infrastructure project, the project manager realizes that the local environmental permits (Activity E) are being delayed by a government department. This activity has a finish-to-start relationship with "Site Preparation" (Activity S). The team suggests that they can start some preliminary non-invasive site marking while the permit is still being processed.

**Question:**
How should the project manager record this in the schedule model?

- **Correct:** Apply a lead to the relationship between Activity E and Activity S to allow for an earlier start of the site work.
- **Distractor 1:** Add a lag to Activity E to account for the government delay and prevent the site team from starting early.
- **Distractor 2:** Change the dependency between Activity E and Activity S from finish-to-start to start-to-finish.
- **Distractor 3:** Create a new milestone called "Permit Expected" and use it as a mandatory constraint for all subsequent activities.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | A lead is used to accelerate a successor activity by allowing it to start before the predecessor finishes. In this scenario, starting preliminary work before the permit is finalized is a classic application of a lead (FS minus X days). |
| **PMI Mindset** | Project managers should use schedule logic tools (leads/lags) to accurately reflect the plan and optimize the workflow when risks are manageable. |
| **The Trap** | Lags add wait time, which is the opposite of what is needed here. Start-to-finish is a rare dependency where the successor cannot finish until the predecessor starts, which does not fit the logic of site preparation following a permit. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 5

**Enabler:** 6 | **Methodology:** Predictive

**Scenario:**
A project manager is presenting the monthly performance report. The earned value data shows an EV of $120,000, a PV of $150,000, and an AC of $130,000. The schedule management plan requires an immediate recovery plan if the schedule performance index falls below 0.85.

**Question:**
Based on this data, what is the current schedule status and the required next step?

- **Correct:** The SPI is 0.80, which is below the threshold; the project manager must perform a root cause analysis and submit a recovery plan.
- **Distractor 1:** The SPI is 0.92, which is within the acceptable range; the project manager should continue to monitor the trend.
- **Distractor 2:** The project is ahead of schedule because the AC is lower than the PV; no recovery plan is necessary at this time.
- **Distractor 3:** The schedule variance is $10,000, indicating the project is slightly behind; the project manager should crash the critical path immediately.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | SPI = EV / PV. In this case, 120,000 / 150,000 = 0.80. Since 0.80 is less than the 0.85 threshold, the project manager must follow the schedule management plan's requirements for a recovery plan. |
| **PMI Mindset** | Mathematical accuracy in performance metrics is essential for determining when governance triggers (thresholds) have been met. |
| **The Trap** | Comparing AC to PV does not give schedule status (AC vs EV gives cost status). The calculation for SPI in Distractor 1 is incorrect (it might be AC/EV or some other error). SV is EV - PV, which would be -$30,000, not $10,000. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 6

**Enabler:** 3 | **Methodology:** Agile

**Scenario:**
In an agile project developing a mobile app, the team is struggling with the "Third-Party API Integration" story, which has been in the "Doing" column for three consecutive sprints. The team members state that the documentation from the vendor is incomplete, making it difficult to estimate the remaining work.

**Question:**
What is the best approach for the project manager to help the team resolve this schedule impediment?

- **Correct:** Suggest that the team perform a technical spike in the next sprint to research the API and define the integration requirements.
- **Distractor 1:** Assign a senior developer from another team to take over the story and complete it by the end of the current sprint.
- **Distractor 2:** Move the story back to the product backlog and ask the product owner to deprioritize it until the vendor updates the docs.
- **Distractor 3:** Increase the story point estimate for the integration to reflect the high level of uncertainty and complexity.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | A "spike" is a short timeboxed effort used in agile to research a technical issue or reduce uncertainty before committing to a larger piece of work. This directly addresses the "incomplete documentation" issue. |
| **PMI Mindset** | Facilitating the team's ability to solve their own technical unknowns through structured research (spikes) is more effective than external assignments or simply increasing estimates. |
| **The Trap** | Assigning an external developer undermines team autonomy. Deprioritizing might be necessary eventually, but the PM should first help the team try to resolve the technical hurdle. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 7

**Enabler:** 7 | **Methodology:** Predictive

**Scenario:**
A project manager has just completed the schedule baseline for a software upgrade. A week later, a key resource manager informs the PM that the lead developer will be unavailable for two weeks in the middle of the project due to a family emergency. The project manager identifies that this developer is assigned to several non-critical path activities during that period.

**Question:**
Which technique should the project manager use to ensure the developer's absence does not impact the critical path?

- **Correct:** Resource smoothing to adjust the start and finish dates of the developer's tasks within their available float.
- **Distractor 1:** Resource leveling to delay all of the developer's tasks until they return, even if it extends the project end date.
- **Distractor 2:** Crashing the critical path activities by adding other resources to compensate for the lead developer's absence.
- **Distractor 3:** Submitting a change request to re-baseline the schedule to account for the two-week resource gap.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Resource smoothing adjusts activities such that they do not exceed pre-defined resource limits, but unlike leveling, smoothing only uses the available float and does not change the project's critical path or finish date. |
| **PMI Mindset** | The PM should use the flexibility in the schedule (float) to manage resource constraints before resorting to more drastic measures like re-baselining or extending the project end date. |
| **The Trap** | Resource leveling often extends the project end date, which is unnecessary if float is available. Re-baselining is a major change that should be avoided if the current plan can still be achieved through optimization. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 8

**Enabler:** 4 | **Methodology:** Hybrid

**Scenario:**
A company is moving from a predictive to a hybrid project management approach. The PM is planning a new ERP implementation. Historical data from previous waterfall projects shows that the "Data Migration" phase typically takes 12 weeks. However, the current project will use an agile team to migrate data in iterative batches.

**Question:**
How should the project manager determine the duration for the migration in the hybrid schedule?

- **Correct:** Use the historical 12-week data as a benchmark but refine the estimate after the team completes the first two batches to establish a proven velocity.
- **Distractor 1:** Use analogous estimation to fix the duration at 12 weeks to maintain consistency with corporate reporting standards.
- **Distractor 2:** Disregard the historical data entirely and ask the agile team to provide a bottom-up estimate based on their current backlog.
- **Distractor 3:** Conduct a PERT (Three-Point) estimate with the steering committee to determine a risk-adjusted duration for the migration.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Hybrid projects benefit from using historical benchmarks (predictive side) while allowing for empirical data (agile side) to refine those estimates over time through progressive elaboration. |
| **PMI Mindset** | Benchmarking and historical data are valuable starting points, but agile delivery requires actual performance (velocity) to provide a realistic forecast. |
| **The Trap** | Fixing the duration at 12 weeks ignores the different delivery methodology. Disregarding historical data loses valuable context and "lessons learned" from previous organizational efforts. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 9

**Enabler:** 5 | **Methodology:** Predictive

**Scenario:**
A project manager is using the Critical Path Method to manage a complex engineering project. The current critical path is 240 days long. A major risk is identified that could delay an activity on a near-critical path by 10 days. This activity currently has 8 days of total float.

**Question:**
What is the primary impact of this risk if it occurs?

- **Correct:** The near-critical path will become the new critical path, and the project duration will increase by 2 days.
- **Distractor 1:** The project duration will increase by 10 days because any delay to a dependent activity impacts the end date.
- **Distractor 2:** There will be no impact on the project duration because the activity has 8 days of float to absorb the delay.
- **Distractor 3:** The critical path will shift to the activity with the risk, but the project duration will remain 240 days due to the use of management reserves.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | If an activity with 8 days of float is delayed by 10 days, it exceeds its float by 2 days. This means the path containing this activity becomes longer than the original critical path by 2 days, making it the new critical path and extending the project finish date. |
| **PMI Mindset** | Understanding the relationship between float and the critical path is essential for predicting the impact of delays and variances. |
| **The Trap** | Management reserves do not automatically prevent a schedule shift; they are for funding "unknown unknowns" and typically require approval to be incorporated into a baseline. Float only absorbs delays up to its limit. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 10

**Enabler:** 3 | **Methodology:** Agile

**Scenario:**
A Scrum team is estimating user stories for an upcoming sprint. One story, "Cloud Security Configuration," is highly complex, and the team members' estimates are ranging from 3 story points to 21 story points during the Planning Poker session.

**Question:**
What is the best immediate action for the project manager (Scrum Master) to take?

- **Correct:** Encourage the team members with the highest and lowest estimates to explain their reasoning, then facilitate a re-vote.
- **Distractor 1:** Average the estimates and record it as 12 story points to keep the planning session moving forward.
- **Distractor 2:** Assign the story to the senior developer who gave the 21-point estimate, as they clearly understand the complexity.
- **Distractor 3:** Split the story into two smaller stories and defer the estimation until the next refinement session.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The goal of Planning Poker is to surface different perspectives and reach a consensus. Discussing the outliers (high and low) allows the team to share assumptions and hidden risks, leading to a more accurate collective estimate. |
| **PMI Mindset** | Estimation is a team activity. Facilitating communication about the work is more important than just getting a number. |
| **The Trap** | Averaging estimates masks the underlying disagreement and risk. Assigning based on an estimate undermines the team's self-organizing nature. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 11

**Enabler:** 2 | **Methodology:** Hybrid

**Scenario:**
A project manager is coordinating a product launch that involves a software team using agile and a marketing team using predictive milestones. The marketing team's "Campaign Launch" milestone is hard-coded to occur two weeks after the software "Beta Release." The software team reports that they need to add a "Hardening Sprint" to address security vulnerabilities before the Beta can be released.

**Question:**
What is the most effective way to coordinate this change across the two teams?

- **Correct:** Assess the impact of the Hardening Sprint on the Campaign Launch date and facilitate a joint meeting between the Product Owner and the Marketing Manager to discuss trade-offs.
- **Distractor 1:** Direct the software team to cancel the Hardening Sprint to ensure the marketing campaign can launch on its original date.
- **Distractor 2:** Automatically move the Campaign Launch date back by the duration of the Hardening Sprint and update the marketing project plan.
- **Distractor 3:** Ask the marketing team to fast-track their campaign activities so they can launch at the same time as the Beta Release.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In a hybrid project, synchronization points (milestones) require cross-functional collaboration. The PM acts as a facilitator to ensure all parties understand the technical necessity (security) and the business impact (marketing date). |
| **PMI Mindset** | Communication and negotiation are preferred over unilateral decisions or ignoring critical technical requirements like security. |
| **The Trap** | Canceling a necessary security sprint is high risk. Moving dates without consultation ignores marketing's potential constraints (e.g., ad space buy). |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 12

**Enabler:** 4 | **Methodology:** Predictive

**Scenario:**
A project manager is calculating the duration of a critical software module using PERT. The lead architect provides an optimistic estimate of 4 days, a most likely estimate of 9 days, and a pessimistic estimate of 20 days.

**Question:**
What is the expected duration and the standard deviation for this activity?

- **Correct:** Expected duration is 10 days; Standard Deviation is 2.67 days.
- **Distractor 1:** Expected duration is 11 days; Standard Deviation is 16 days.
- **Distractor 2:** Expected duration is 9 days; Standard Deviation is 4 days.
- **Distractor 3:** Expected duration is 10 days; Standard Deviation is 1.33 days.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Expected Duration (tₑ) = (O + 4M + P) / 6 = (4 + 36 + 20) / 6 = 10 days. Standard Deviation (σ) = (P - O) / 6 = (20 - 4) / 6 = 2.67 days. |
| **PMI Mindset** | Mastery of standard PMP formulas is required for accurate schedule planning and risk assessment. |
| **The Trap** | Distractor 3 calculates duration correctly but might use a wrong denominator for sigma or just pick a random number. Distractor 2 uses the Most Likely as the expected duration. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 13

**Enabler:** 7 | **Methodology:** Agile

**Scenario:**
An agile project manager is reviewing the team's burndown chart halfway through a two-week sprint. The line representing "Remaining Work" has been flat for the last four days, while the "Ideal Trend" line continues to slope downward.

**Question:**
What does this burndown chart pattern most likely indicate, and what should the project manager do?

- **Correct:** The team is facing an impediment that is blocking progress; the project manager should discuss this in the next daily stand-up to identify and remove the blocker.
- **Distractor 1:** The team has completed all their work early; the project manager should ask them to pull more stories from the product backlog.
- **Distractor 2:** The team is under-reporting their hours; the project manager should remind them of the importance of daily time tracking.
- **Distractor 3:** The scope of the sprint has increased significantly; the project manager should ask the product owner to remove several stories.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | A flat line on a burndown chart indicates that no work is being completed. This is a classic sign of a bottleneck or a major impediment that requires the project manager's attention as a facilitator/servant leader. |
| **PMI Mindset** | Visual radiators like burndown charts are meant to trigger early intervention. The PM's role is to help the team identify and resolve the root cause of the lack of progress. |
| **The Trap** | If scope increased, the line would usually spike upward, not stay flat. Under-reporting hours is a "micro-management" view; the issue is work completion, not just time logging. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 14

**Enabler:** 5 | **Methodology:** Predictive

**Scenario:**
A project manager for a large-scale data center migration has just received approval for the project schedule baseline. Two days later, the Chief Technology Officer (CTO) announces a new company-wide security initiative that requires all data migrations to use a more complex encryption protocol, which will add approximately two weeks to the migration activities.

**Question:**
What is the most appropriate next step for the project manager?

- **Correct:** Assess the impact of the new security requirement on the schedule and cost, then submit a formal change request to the Change Control Board.
- **Distractor 1:** Update the schedule baseline immediately to include the two-week delay and notify the project team.
- **Distractor 2:** Request that the CTO provide additional resources to ensure the migration can still meet its original baseline dates.
- **Distractor 3:** Document the security initiative in the risk register and wait until the migration phase begins to evaluate the actual impact.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Once a baseline is approved, any change to it must go through the formal Integrated Change Control process. The PM must first analyze the impact before requesting an approval for the change. |
| **PMI Mindset** | The PM protects the baseline but remains flexible to organizational changes by following the established governance processes. |
| **The Trap** | Updating the baseline without a formal CR (Distractor 1) violates governance rules. Waiting until the phase starts (Distractor 3) is reactive and ignores the immediate impact on planning. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 15

**Enabler:** 2 | **Methodology:** Hybrid

**Scenario:**
A project manager is overseeing a program where multiple projects share a pool of specialized database engineers. Project A (Predictive) needs an engineer for a critical path activity starting on Monday, but Project B (Agile) has just encountered a major production bug that requires the same engineer for the entire upcoming week.

**Question:**
How should the project manager resolve this resource-driven schedule conflict?

- **Correct:** Review the resource management plan and facilitate a meeting between the sponsors of both projects to prioritize the work based on business value and critical path impact.
- **Distractor 1:** Direct the database engineer to split their time 50/50 between both projects to ensure some progress is made on both.
- **Distractor 2:** Instruct Project B to delay their bug fix until Project A's critical path activity is completed to avoid a baseline slip.
- **Distractor 3:** Hire an external contractor to handle the bug fix for Project B so the specialized engineer can focus on Project A.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | When resources are shared across projects/operations, the PM must coordinate and escalate to the appropriate governance level (sponsors) if the conflict cannot be resolved at the team level, ensuring alignment with organizational priorities. |
| **PMI Mindset** | Resource conflicts in a multi-project environment require balancing project needs with organizational goals. Facilitation and escalation are key PM skills. |
| **The Trap** | Splitting time (Distractor 1) often leads to context-switching waste and delays both projects. Hiring a contractor (Distractor 3) might be a good move later, but requires budget approval first. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 16

**Enabler:** 5 | **Methodology:** Agile

**Scenario:**
A product owner in an agile project is concerned because the team's velocity has dropped significantly over the last three sprints. The team explains that they are spending more time fixing bugs in the legacy code they are integrating with, which was not accounted for in the original release roadmap.

**Question:**
What is the best way for the project manager to address this schedule variance?

- **Correct:** Work with the team to capture technical debt as items in the product backlog and ask the product owner to prioritize them alongside new features.
- **Distractor 1:** Direct the team to stop fixing the legacy bugs and focus only on new feature development to restore their original velocity.
- **Distractor 2:** Add a "Technical Debt Recovery Sprint" to the schedule and extend the final release date by two iterations.
- **Distractor 3:** Recalculate the project's velocity using only the last three sprints to provide a more realistic (but slower) release forecast.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Technical debt and unexpected maintenance work should be made transparent by adding them to the backlog. This allows the product owner to make informed value-based decisions about schedule trade-offs. |
| **PMI Mindset** | Transparency and prioritization are the primary tools for managing schedule variances in agile. Hiding debt or ignoring it leads to catastrophic failure later. |
| **The Trap** | Ignoring bugs (Distractor 1) increases technical debt. Recalculating velocity (Distractor 3) is helpful for forecasting, but doesn't solve the root cause of the slowdown. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 17

**Enabler:** 3 | **Methodology:** Predictive

**Scenario:**
A project manager is estimating the duration of a software testing phase. Based on historical data from similar projects, the PM knows that it typically takes 1 hour of testing for every 10 lines of code. The current project has 50,000 lines of code.

**Question:**
Which estimation technique is the project manager using?

- **Correct:** Parametric Estimation
- **Distractor 1:** Analogous Estimation
- **Distractor 2:** Bottom-Up Estimation
- **Distractor 3:** Three-Point Estimation

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Parametric estimation uses a mathematical model based on historical data and project parameters (e.g., cost per square foot, hours per line of code) to calculate duration or cost. |
| **PMI Mindset** | Understanding different estimation techniques allows the PM to choose the most appropriate one based on the level of detail and data available. |
| **The Trap** | Analogous estimation uses the total duration of a past project without the mathematical scaling. Bottom-up involves estimating individual tasks and summing them. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 18

**Enabler:** 8 | **Methodology:** Agile

**Scenario:**
An agile team is consistently completing 40 story points per sprint. The product owner adds 100 story points of new work to the release backlog due to a change in market conditions. The current release has three sprints remaining, and there are 160 story points of work currently in the backlog.

**Question:**
What is the most likely outcome for the release schedule?

- **Correct:** The release will be over-capacity by 40 story points, necessitating a scope reduction or an additional sprint.
- **Distractor 1:** The team will complete all work on time because their average velocity will naturally increase to meet the new demand.
- **Distractor 2:** The project manager should ask the team to work overtime for the next three sprints to absorb the 100 extra points.
- **Distractor 3:** The release is on track because the team has enough capacity (120 points) to cover the most important 75% of the work.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Capacity = Velocity × Sprints. Here, 40 × 3 = 120 story points. The total work is 160 points. Therefore, the team is 40 points short of capacity. |
| **PMI Mindset** | PMs must use data-driven forecasting to provide realistic schedule expectations to stakeholders, rather than relying on "heroic efforts" or "hope." |
| **The Trap** | "Hope" is not a strategy (Distractor 1). Overtime (Distractor 2) is unsustainable and violates agile principles. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 19

**Enabler:** 5 | **Methodology:** Hybrid

**Scenario:**
A project manager is using rolling wave planning for a 12-month research and development project. The first 3 months are planned in detail, while the remaining 9 months are represented as high-level planning packages in the WBS. As the project enters the third month, the PM needs to prepare for the next phase.

**Question:**
What is the primary benefit of this approach to schedule management?

- **Correct:** It allows for the progressive elaboration of the schedule as more information becomes available, reducing the risk of inaccurate long-term estimates.
- **Distractor 1:** It eliminates the need for a schedule baseline since the project plan is constantly evolving and changing.
- **Distractor 2:** It ensures that all project resources are fully allocated for the entire 12-month duration at the start of the project.
- **Distractor 3:** It prevents scope creep by locking down the details of the first phase while allowing the sponsor to change future phases at will.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Rolling wave planning is a form of progressive elaboration where work to be accomplished in the near term is planned in detail, while work in the future is planned at a higher level. This acknowledges the uncertainty of long-term work. |
| **PMI Mindset** | PMs should use appropriate planning levels based on the clarity of the work to avoid "analysis paralysis" and improve estimate accuracy. |
| **The Trap** | Baselines are still needed (Distractor 1). Resources are usually not fully allocated 12 months out in R&D (Distractor 2). Rolling wave doesn't "prevent" scope creep; it just manages how we plan for it. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 20

**Enabler:** 7 | **Methodology:** Predictive

**Scenario:**
A project manager is tracking a project using Earned Value Management. At the end of month 6, the values are: BAC = $500,000; PV = $250,000; EV = $200,000; AC = $220,000. The schedule management plan defines "significant variance" as any SPI deviation greater than 15%.

**Question:**
What is the schedule performance, and should it be escalated?

- **Correct:** The SPI is 0.80, which is a 20% deviation; the variance is significant and must be escalated.
- **Distractor 1:** The SPI is 0.91, which is a 9% deviation; the variance is within the threshold and does not need escalation.
- **Distractor 2:** The SV is -$50,000; because the dollar value is high, it must be escalated regardless of the percentage.
- **Distractor 3:** The project is ahead of schedule because the EV is 80% of the target; no escalation is required.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | SPI = EV / PV = 200,000 / 250,000 = 0.80. A 0.80 SPI is a 20% variance from the goal of 1.0. Since 20% > 15%, it meets the "significant variance" criteria. |
| **PMI Mindset** | PMs must adhere to the thresholds and governance rules defined in the project management plans. |
| **The Trap** | Comparing EV to BAC (Distractor 3) is not a measure of current schedule performance against the plan. SV is useful, but the threshold in the scenario was based on SPI. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 21

**Enabler:** 3 | **Methodology:** Agile

**Scenario:**
An agile team is using a Kanban board to manage their workflow. The "Testing" column has a Work In Progress (WIP) limit of 3, and there are currently 3 stories in that column. Two developers have just finished their "Development" tasks and are ready to move their stories to "Testing."

**Question:**
What is the best course of action for the developers to take to maintain the schedule flow?

- **Correct:** Help the testers finish the work currently in the "Testing" column before moving new stories into it.
- **Distractor 1:** Move their stories into the "Testing" column anyway and mark them as "High Priority" to ensure they are seen.
- **Distractor 2:** Start new "Development" stories from the backlog to ensure they remain productive while waiting for the testers.
- **Distractor 3:** Temporarily increase the WIP limit for the "Testing" column to 5 to accommodate the temporary surge in work.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | WIP limits are designed to highlight bottlenecks. When a limit is reached, the team should "stop starting and start finishing" by swarming on the blocked column to clear the flow. |
| **PMI Mindset** | Flow and throughput are more important than individual resource utilization. The PM should encourage the team to prioritize finishing work over starting new work. |
| **The Trap** | Ignoring WIP limits (Distractor 1) defeats the purpose of Kanban. Starting new work (Distractor 2) increases lead time and hides the bottleneck. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 22

**Enabler:** 1 | **Methodology:** Predictive

**Scenario:**
A project manager is developing the schedule for a new retail store opening. The task "Stock Shelves" cannot start until "Install Shelving" is complete, and the store cannot "Open for Business" until "Stock Shelves" is complete.

**Question:**
What is the primary dependency relationship being described?

- **Correct:** Mandatory Finish-to-Start dependency
- **Distractor 1:** Discretionary Start-to-Start dependency
- **Distractor 2:** External Finish-to-Finish dependency
- **Distractor 3:** Internal Start-to-Finish dependency

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | You physically cannot stock shelves until they are installed (Mandatory), and the work happens in a sequence where one finishes before the next starts (Finish-to-Start). |
| **PMI Mindset** | Correctly identifying dependency types (Mandatory vs. Discretionary) is critical for accurate schedule modeling and knowing which relationships can be modified during compression. |
| **The Trap** | Discretionary logic (Soft Logic) is a choice; mandatory logic (Hard Logic) is a physical or contractual requirement. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 23

**Enabler:** 8 | **Methodology:** Hybrid

**Scenario:**
A project manager is overseeing a software release that must be coordinated with a hardware manufacturer's production cycle. The software is being developed in 2-week sprints, but the hardware manufacturer requires a 4-week lead time for any firmware updates to be included in the next batch.

**Question:**
How should the project manager align these two different schedules?

- **Correct:** Identify "Synchronization Points" where the software team provides a stable firmware build to the hardware manufacturer every two sprints.
- **Distractor 1:** Force the hardware manufacturer to change their production cycle to 2 weeks to match the software sprint cadence.
- **Distractor 2:** Ask the software team to extend their sprints to 4 weeks to simplify the integration with the hardware schedule.
- **Distractor 3:** Eliminate the firmware update requirement and allow the software to be updated over-the-air (OTA) after the hardware is shipped.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In hybrid projects with different cadences, the PM must manage the interfaces. Synchronization points allow teams to work at their own optimal pace while still meeting the integration needs of the overall project. |
| **PMI Mindset** | The PM facilitates coordination across diverse work streams without necessarily forcing them into a single, less-optimal methodology. |
| **The Trap** | Forcing a vendor to change their manufacturing process (Distractor 1) is often impossible. Changing sprint lengths (Distractor 2) can disrupt team performance. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 24

**Enabler:** 5 | **Methodology:** Predictive

**Scenario:**
During a project execution, the project manager notices that the critical path has changed from the "Software Design" path to the "Regulatory Approval" path. This was not expected in the original schedule baseline.

**Question:**
What is the first thing the project manager should do?

- **Correct:** Analyze the cause of the delay in the regulatory path and evaluate the impact on the project's overall completion date.
- **Distractor 1:** Immediately notify the sponsor that the project will be delayed by the difference between the two paths.
- **Distractor 2:** Crash the "Software Design" path to try and regain its position as the critical path.
- **Distractor 3:** Submit a change request to the Change Control Board to revert the critical path to the original baseline.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Critical paths are dynamic. When the path shifts, the PM must first understand *why* (root cause) and *what* it means for the project (impact analysis) before taking corrective action. |
| **PMI Mindset** | Proactive monitoring involves detecting shifts in the schedule model and performing analysis before communicating or acting. |
| **The Trap** | You cannot "request" a critical path change (Distractor 3); it is a mathematical result of the task durations and logic. Crashing the wrong path (Distractor 2) is a waste of resources. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 25

**Enabler:** 6 | **Methodology:** Agile

**Scenario:**
An agile team is forecasting the completion of their project. They have 240 story points remaining in the backlog. Their velocity for the last five sprints has been 30, 25, 40, 20, and 35.

**Question:**
What is the most accurate way for the project manager to communicate the estimated completion date to the stakeholders?

- **Correct:** Provide a range of 6 to 12 sprints based on the historical velocity variance, with 8 sprints as the most likely outcome.
- **Distractor 1:** Tell the stakeholders the project will be finished in exactly 8 sprints (240 / 30 average velocity).
- **Distractor 2:** Use the highest velocity (40) to promise completion in 6 sprints to keep the stakeholders motivated.
- **Distractor 3:** Use the lowest velocity (20) to set a conservative expectation of 12 sprints and ensure the team is never "late."

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Agile forecasting should account for variability. Providing a range (Best case, Worst case, Most Likely) is more honest and accurate than a single-point estimate, especially with a fluctuating velocity. |
| **PMI Mindset** | Managing stakeholder expectations requires transparency about uncertainty and risk. |
| **The Trap** | Single-point estimates (Distractor 1) are often wrong. Only using the best (Distractor 2) or worst (Distractor 3) case data is misleading. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 26

**Enabler:** 1 | **Methodology:** Hybrid

**Scenario:**
A project manager is planning a hybrid project where the procurement of long-lead items must be handled through a traditional waterfall process, but the assembly and testing will be done in an agile manner. The PM is currently defining the schedule management plan.

**Question:**
Which scheduling tool should the project manager prioritize to integrate these two approaches effectively?

- **Correct:** A Milestone Chart to track high-level delivery dates and hand-offs between procurement and the agile teams.
- **Distractor 1:** A detailed 1,000-line Gantt chart that includes every user story and task for the entire project duration.
- **Distractor 2:** A Cumulative Flow Diagram (CFD) to monitor the status of procurement contracts and vendor deliveries.
- **Distractor 3:** A Requirements Traceability Matrix (RTM) to link user stories directly to the procurement line items.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Milestone charts are excellent high-level tools for hybrid projects. They provide the "glue" that connects the detailed iterative work of agile teams with the rigid milestones of predictive processes like procurement. |
| **PMI Mindset** | PMs should use "fit-for-purpose" tools. Detailed Gantt charts for agile work (Distractor 1) are too brittle and require excessive maintenance. |
| **The Trap** | CFDs (Distractor 2) are flow metrics for agile, not typically used for tracking waterfall procurement milestones. RTM (Distractor 3) is a scope tool, not a scheduling tool. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 27

**Enabler:** 8 | **Methodology:** Predictive

**Scenario:**
A project manager is overseeing the construction of a high-speed rail bridge. A monthly progress report shows that the "Concrete Piling" activity has a negative schedule variance (SV) of $200,000, and the critical path has shifted, delaying the "Deck Installation" by three weeks.

**Question:**
What is the most comprehensive step for the project manager to take next?

- **Correct:** Conduct a trend analysis to determine if the variance is a one-time occurrence or part of a systemic delay pattern, then update the project's forecast.
- **Distractor 1:** Direct the site supervisor to add a second shift for the piling crew to immediately recover the three-week delay.
- **Distractor 2:** Request that the finance department increase the project budget by $200,000 to cover the negative schedule variance.
- **Distractor 3:** Inform the stakeholders that the project is now officially three weeks behind schedule and ask for a baseline extension.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | When a significant variance occurs, the PM must understand the nature of the delay (Trend Analysis) before deciding on a recovery strategy. This ensures that the corrective action addresses the root cause rather than just the symptom. |
| **PMI Mindset** | Analysis and forecasting are critical components of the "Control Schedule" process. The PM must provide data-driven insights to stakeholders. |
| **The Trap** | Adding a shift (Distractor 1) is a form of crashing and may not be necessary if the delay is not systemic. SV is a schedule metric in dollars, not a budget deficit (Distractor 2). |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 28

**Enabler:** 2 | **Methodology:** Agile

**Scenario:**
A cross-functional agile team is working on a fintech product. During the iteration review, the Product Owner notices that several stories were not completed because the team had to wait for approvals from the legal department on every new user interface design.

**Question:**
What is the best way for the project manager (Scrum Master) to resolve this schedule bottleneck?

- **Correct:** Invite a representative from the legal department to attend the team's refinement sessions to provide real-time feedback and approvals.
- **Distractor 1:** Ask the developers to proceed with the designs without legal approval and fix any issues during a later hardening sprint.
- **Distractor 2:** Direct the legal department to provide all approvals within 24 hours to prevent any further impacts to the team's velocity.
- **Distractor 3:** Update the Definition of Done to remove the legal approval requirement for UI designs to improve the team's "done" count.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Agile encourages cross-functional collaboration and "shifting left" on quality and compliance. Bringing the external bottleneck (legal) into the team's process reduces handoff delays and lead time. |
| **PMI Mindset** | Removing impediments and managing external dependencies through collaboration is a core responsibility of the servant leader. |
| **The Trap** | Ignoring legal requirements (Distractor 1) is a high-risk compliance failure. Dictating to other departments (Distractor 2) is often ineffective compared to collaboration. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 29

**Enabler:** 4 | **Methodology:** Hybrid

**Scenario:**
A project manager is managing a hybrid project where the software is agile and the marketing launch is predictive. The marketing team needs a firm "Go-Live" date for a $1 million national ad buy. The agile team has a fluctuating velocity but estimates completion between September 1st and October 15th.

**Question:**
How should the project manager handle this schedule integration?

- **Correct:** Recommend that the marketing team schedule the ad buy for late October and use the "Project Float" as a buffer to protect against software delays.
- **Distractor 1:** Force the agile team to commit to a September 1st finish date to ensure the marketing campaign can start as early as possible.
- **Distractor 2:** Ask the marketing team to use an agile approach for the ad buy so they can change the dates at any time without penalty.
- **Distractor 3:** Submit a change request to the sponsor to convert the entire project to a predictive methodology to ensure date certainty.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In hybrid projects, the PM must manage the interface between flexible delivery (agile) and rigid constraints (marketing ad buy). Using the range's conservative end plus a buffer is the most risk-aware approach. |
| **PMI Mindset** | Balancing the needs of different workstreams requires managing buffers (Project Float) and setting realistic expectations for high-stakes external dependencies. |
| **The Trap** | Forcing a fixed date on an uncertain agile process (Distractor 1) often leads to failure. Most ad buys are not agile and have high change penalties (Distractor 2). |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 30

**Enabler:** 3 | **Methodology:** Predictive

**Scenario:**
A project manager is building a project schedule and needs to estimate the duration of "Client Training." The project involves training 500 users. Historical data shows that one trainer can effectively train 20 users per day. The project has 2 trainers available.

**Question:**
What is the estimated duration for this activity using parametric estimation?

- **Correct:** 12.5 days (rounded to 13 days for scheduling).
- **Distractor 1:** 25 days, assuming each trainer works independently on different weeks.
- **Distractor 2:** 5 days, based on the assumption that training can be done in parallel with software development.
- **Distractor 3:** 10 days, using a standard "most likely" buffer for training activities.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Duration = Total Work / (Resources × Productivity Rate). Duration = 500 users / (2 trainers × 20 users/day) = 500 / 40 = 12.5 days. |
| **PMI Mindset** | Parametric estimation provides a defensible, data-driven basis for schedule durations when clear productivity rates are known. |
| **The Trap** | Distractor 1 ignores the fact that trainers work in parallel. Distractor 2 is a random guess. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 31

**Enabler:** 7 | **Methodology:** Agile

**Scenario:**
An agile project manager is reviewing a Cumulative Flow Diagram (CFD). The band representing "Testing" has been steadily widening over the last month, while the "Done" band remains thin.

**Question:**
What is the most likely interpretation of this diagram?

- **Correct:** There is a bottleneck in the testing phase, indicating that the team's throughput is being restricted by testing capacity or quality issues.
- **Distractor 1:** The team's velocity is increasing because more work is entering the "Testing" phase every day.
- **Distractor 2:** The project is ahead of schedule because the "Testing" phase is receiving a high volume of completed code.
- **Distractor 3:** The team is effectively managing their WIP because the "Testing" band is larger than the "Development" band.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In a CFD, widening bands indicate that work is accumulating in that phase faster than it is being completed, which is the definition of a bottleneck. |
| **PMI Mindset** | Understanding flow metrics like CFD allows the PM to identify and address systemic issues in the delivery pipeline before they impact the final release date. |
| **The Trap** | A wider band (Distractor 1 and 3) is a sign of inefficiency and delay, not productivity or good WIP management. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 32

**Enabler:** 5 | **Methodology:** Predictive

**Scenario:**
A project manager has completed a Critical Path analysis. The current project duration is 18 weeks. The project sponsor demands that the project be finished in 15 weeks. The project manager identifies an activity on the critical path that can be crashed from 4 weeks to 2 weeks at an additional cost of $10,000. Another activity, not on the critical path, can be crashed from 3 weeks to 1 week for $5,000.

**Question:**
What should the project manager do?

- **Correct:** Crash the critical path activity for $10,000 and then re-evaluate the project network for the next compression opportunity.
- **Distractor 1:** Crash both activities for a total of $15,000 to ensure the 15-week goal is met as quickly as possible.
- **Distractor 2:** Crash the non-critical path activity for $5,000 first since it is cheaper and provides the same 2-week time saving.
- **Distractor 3:** Fast-track the non-critical path activity to save time without spending any additional money.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Only crashing activities on the critical path will shorten the project duration. Crashing non-critical activities (Distractor 2) adds cost without any schedule benefit. |
| **PMI Mindset** | Schedule compression must be targeted at the critical path to be effective. The PM must also re-analyze the path after each change, as a new path may become critical. |
| **The Trap** | Saving money on a non-critical activity (Distractor 2) is a "false economy" in scheduling—it doesn't actually help you reach the finish line faster. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 33

**Enabler:** 6 | **Methodology:** Hybrid

**Scenario:**
A project manager is overseeing a hybrid infrastructure project. The "Server Procurement" (Predictive) task must be completed before the "Cloud Integration" (Agile) sprints can begin. The procurement team reports that global supply chain issues have delayed server delivery by four weeks.

**Question:**
How should the project manager adjust the schedule?

- **Correct:** Facilitate a team session to identify if the agile sprints can begin using a temporary virtual environment or cloud-based staging area while waiting for the physical servers.
- **Distractor 1:** Suspend all agile team activities for four weeks to avoid wasting budget while waiting for the hardware.
- **Distractor 2:** Instruct the agile team to work on lower-priority stories that don't require the servers to keep their velocity high.
- **Distractor 3:** Submit a change request to move the entire project back by four weeks and inform the stakeholders that the delay is external.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | A proactive PM looks for workarounds and alternative paths (like virtualization) to keep the project moving despite external dependencies and delays. |
| **PMI Mindset** | Maintaining value delivery and schedule flow requires creative problem-solving and technical flexibility. |
| **The Trap** | Suspending the team (Distractor 1) is a waste of talent. Working on low-priority items (Distractor 2) might maintain "velocity" on paper but doesn't drive true project value. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 34

**Enabler:** 8 | **Methodology:** Predictive

**Scenario:**
A project manager is analyzing the schedule of a new product development project. Activity A has a duration of 5 days. Activity B (dependent on A) has a duration of 10 days. The relationship is Finish-to-Start with a 2-day lead.

**Question:**
What is the total duration for the sequence of Activity A and B?

- **Correct:** 13 days
- **Distractor 1:** 17 days
- **Distractor 2:** 15 days
- **Distractor 3:** 11 days

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Total = Duration A + Duration B - Lead. Total = 5 + 10 - 2 = 13 days. A lead accelerates the start of the successor, effectively overlapping the tasks. |
| **PMI Mindset** | Accuracy in calculating leads and lags is essential for creating a realistic and optimized schedule model. |
| **The Trap** | Distractor 1 treats the lead as a lag (adding it). Distractor 2 ignores the lead entirely. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 35

**Enabler:** 3 | **Methodology:** Agile

**Scenario:**
An agile team is planning their next release. They have identified several high-risk technical stories that have never been attempted by the team before. These stories are critical for the project's core functionality.

**Question:**
What is the best way to incorporate these stories into the release schedule?

- **Correct:** Place the high-risk stories in the earliest possible sprints to "fail fast" or resolve technical uncertainty before committing to the full schedule.
- **Distractor 1:** Schedule the high-risk stories for the end of the release to ensure the team has gained enough experience and momentum first.
- **Distractor 2:** Ask the Product Owner to remove the high-risk stories from the first release and focus on "quick wins" to build stakeholder confidence.
- **Distractor 3:** Allocate a fixed "Risk Reserve" of 20 story points to every sprint in the release to account for potential delays from these stories.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Agile encourages risk-based prioritization. Tackling high-risk/high-uncertainty items early allows the team to discover problems sooner, potentially saving the project from late-stage failure. |
| **PMI Mindset** | Proactive risk management in agile involves using early iterations to prove technical feasibility and stabilize the schedule forecast. |
| **The Trap** | Saving the hardest work for last (Distractor 1) is a recipe for project-ending delays in the final weeks. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 36

**Enabler:** 2 | **Methodology:** Hybrid

**Scenario:**
A project manager is working on a hybrid project where the software development is outsourced to a vendor using agile, while the internal hardware team uses predictive milestones. The vendor's contract specifies that they will be paid based on the completion of specific feature sets every month.

**Question:**
How should the project manager reflect the vendor's work in the integrated project schedule?

- **Correct:** Use the vendor's monthly feature delivery milestones as the primary interface points in the predictive master schedule.
- **Distractor 1:** Request that the vendor provide a detailed daily Gantt chart for their developers so it can be merged into the master schedule.
- **Distractor 2:** Trust the vendor's agile process and only record the final project completion date in the internal schedule.
- **Distractor 3:** Require the vendor to change their methodology to predictive milestones to ensure alignment with the internal hardware team.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In hybrid projects with external vendors, using high-level milestones (the "contractual handoffs") is the best way to coordinate without micromanaging the vendor's internal agile process. |
| **PMI Mindset** | Managing vendor schedules requires balancing the need for oversight with the respect for the vendor's chosen delivery methodology. |
| **The Trap** | Asking an agile team for a daily Gantt chart (Distractor 1) is highly inefficient and likely to produce inaccurate data. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 37

**Enabler:** 1 | **Methodology:** Predictive

**Scenario:**
A project manager is reviewing a network diagram and notices an activity called "Final Review" that has two predecessors: "Technical Writing" (Finish-to-Start) and "Peer Review" (Finish-to-Start). "Technical Writing" finishes on Day 20, and "Peer Review" finishes on Day 25.

**Question:**
What is the Early Start (ES) for the "Final Review" activity?

- **Correct:** Day 25
- **Distractor 1:** Day 20
- **Distractor 2:** Day 45
- **Distractor 3:** Day 22.5

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In a forward pass, when an activity has multiple predecessors, its Early Start (ES) is equal to the maximum Early Finish (EF) of all its predecessors. |
| **PMI Mindset** | Understanding the "Max" rule for forward passes (and "Min" rule for backward passes) is fundamental to Critical Path calculations. |
| **The Trap** | Distractor 1 picks the earliest predecessor, which would violate the Finish-to-Start dependency of the second predecessor. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 38

**Enabler:** 5 | **Methodology:** Agile

**Scenario:**
An agile project manager is presenting the project status to a steering committee that is used to traditional waterfall reporting. The committee is confused by the team's velocity and wants to know when the "User Management" feature will be done.

**Question:**
What is the best way for the project manager to present this information?

- **Correct:** Show a Release Burnup Chart with a trend line that projects a range of completion dates based on the team's average velocity.
- **Distractor 1:** Convert the user stories into a Gantt chart with fixed start and end dates to make the committee comfortable.
- **Distractor 2:** Explain that agile projects don't have "completion dates" and that work continues until the budget is exhausted.
- **Distractor 3:** Tell the committee the exact date the feature will be finished based on the most recent sprint's velocity.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | A burnup chart provides a visual, data-driven forecast that committee members can easily understand, while still respecting the inherent variability of agile delivery. |
| **PMI Mindset** | The PM must "translate" agile progress into terms that traditional stakeholders can use for decision-making without compromising agile principles. |
| **The Trap** | Providing fixed dates (Distractor 1 and 4) is dishonest if the work is truly agile. Claiming there are no dates (Distractor 2) is a failure of professional responsibility. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 39

**Enabler:** 3 | **Methodology:** Hybrid

**Scenario:**
A project manager is overseeing a clinical trial project. The phase "Patient Enrollment" must occur at specific hospitals that have limited availability for research staff. The PM must ensure the schedule doesn't over-allocate the staff across multiple trials.

**Question:**
Which scheduling technique is most appropriate to manage this constraint?

- **Correct:** Resource Leveling
- **Distractor 1:** Fast-Tracking
- **Distractor 2:** Three-Point Estimation
- **Distractor 3:** Rolling Wave Planning

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Resource leveling is used to address situations where resources are over-allocated or only available at certain times. It often results in the project end date being extended to accommodate resource limits. |
| **PMI Mindset** | When people or equipment are the primary constraint, resource leveling is the correct optimization tool. |
| **The Trap** | Fast-tracking (Distractor 1) would likely make the over-allocation worse by trying to do more work in parallel. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 40

**Enabler:** 5 | **Methodology:** Predictive

**Scenario:**
A project manager is presenting the schedule baseline for a new satellite launch. The project has a very high degree of public visibility and a fixed launch window based on orbital mechanics. The sponsor is concerned that the schedule doesn't account for the high level of technical uncertainty in the "Ion Thruster Calibration" phase.

**Question:**
Which technique should the project manager use to quantify the schedule risk for the sponsor?

- **Correct:** Run a Monte Carlo simulation to provide a probability distribution of the project finish date.
- **Distractor 1:** Add a 10% flat contingency buffer to every activity on the critical path to account for uncertainty.
- **Distractor 2:** Use the Critical Chain Method to place all project buffers at the end of the thruster calibration phase.
- **Distractor 3:** Conduct a Delphi session with experts to agree on a single, fixed duration for the calibration.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Monte Carlo simulation is the best tool for quantifying overall project schedule risk. It provides a range of possible finish dates and the probability (e.g., P80) of meeting the launch window. |
| **PMI Mindset** | Quantitative risk analysis provides more objective data for stakeholder decision-making than simple percentage-based buffers. |
| **The Trap** | Flat buffers (Distractor 1) are often arbitrary. Single-point estimates from experts (Distractor 4) ignore the probabilistic nature of high-uncertainty work. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 41

**Enabler:** 3 | **Methodology:** Agile

**Scenario:**
An agile team is consistently struggling to meet their sprint commitments. The "Lead Time" for their stories is increasing, but their "Cycle Time" remains stable and low.

**Question:**
What does this data most likely tell the project manager about the project schedule?

- **Correct:** Work is waiting in the backlog or in a "Ready" state for a long time before the team actually starts working on it.
- **Distractor 1:** The team's development efficiency is dropping, causing each story to take longer to complete.
- **Distractor 2:** The project's quality is declining, leading to a high volume of rework and bug fixes.
- **Distractor 3:** The "Definition of Done" is too complex, causing stories to get stuck in the final testing phase.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Lead Time (Request to Delivery) = Queue Time + Cycle Time (Start to Delivery). If Cycle Time is stable but Lead Time is rising, the increase must be happening in the queue before work begins. |
| **PMI Mindset** | Understanding the components of lead time allows the PM to identify where flow is breaking down (e.g., poor refinement or slow prioritization). |
| **The Trap** | If development efficiency was dropping (Distractor 1), the Cycle Time would also be increasing. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 42

**Enabler:** 8 | **Methodology:** Predictive

**Scenario:**
A project manager for an airport expansion project is reviewing the schedule. The activity "Runway Lighting Installation" has 10 days of Total Float and 0 days of Free Float.

**Question:**
What is the most accurate interpretation of this activity's status?

- **Correct:** Any delay to this activity will immediately delay its successor, but it won't impact the overall project completion date until it slips more than 10 days.
- **Distractor 1:** This activity is on the critical path and must be monitored daily to prevent any project-wide delays.
- **Distractor 2:** This activity can be delayed by 10 days without affecting the next activity in the schedule sequence.
- **Distractor 3:** The schedule logic is incorrect because Total Float must always be equal to or less than Free Float.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Free Float is the time an activity can slip without delaying its successor. Total Float is the time it can slip without delaying the project end date. 0 Free Float means the successor is "tight" against this task. |
| **PMI Mindset** | Precision in understanding different float types is essential for managing daily schedule trade-offs and resource assignments. |
| **The Trap** | Total Float is often greater than Free Float (Distractor 4 is false). If Total Float > 0, the activity is not on the critical path (Distractor 1). |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 43

**Enabler:** 3 | **Methodology:** Agile

**Scenario:**
During a retrospective, the team identifies that the "Design Review" phase is consistently taking four days, while the actual design work only takes two days. This is causing a significant lag in their sprint cycle.

**Question:**
What is the most agile way to manage this schedule variance?

- **Correct:** Facilitate a discussion on how to integrate reviews continuously into the design process rather than treating them as a separate phase.
- **Distractor 1:** Add two extra days to every design story estimate to account for the review time.
- **Distractor 2:** Instruct the designers to work on two stories at once so they are productive during the four-day review period.
- **Distractor 3:** Direct the reviewers to finish their work in one day to match the pace of the design team.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Agile seeks to eliminate "wait time" and "handoffs." Moving from a "phase-gate" review to a continuous review (e.g., peer programming or real-time feedback) improves flow and throughput. |
| **PMI Mindset** | Servant leaders help teams optimize their internal processes by identifying and removing waste (muda). |
| **The Trap** | Adding time to estimates (Distractor 1) accepts the waste as normal. Context switching (Distractor 2) is another form of waste that slows down the team. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 44

**Enabler:** 2 | **Methodology:** Hybrid

**Scenario:**
A program manager is coordinating a government contract that requires a monthly progress report using Earned Value Management (Predictive). However, the development team is using Scrum (Agile) and does not track "percent complete" for individual tasks.

**Question:**
How should the project manager calculate the Earned Value (EV) for the monthly report?

- **Correct:** Use the "0/100" rule, where EV is only earned for user stories that meet the "Definition of Done" within the reporting period.
- **Distractor 1:** Ask each developer to provide their best estimate of the "percent complete" for their current work-in-progress stories.
- **Distractor 2:** Divide the total story points in the sprint by the number of days elapsed to calculate a daily "Earned Value" average.
- **Distractor 3:** Report the Planned Value (PV) as the Earned Value (EV) since agile teams are expected to complete their committed sprint backlog.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The "0/100" rule is common in agile-to-EVM mapping. Work is either 0% done or 100% done (Done-Done). This prevents the "90% complete for weeks" trap found in subjective estimating. |
| **PMI Mindset** | Integrating agile and predictive metrics requires adapting traditional tools (like EVM) to the "value-based" delivery of agile. |
| **The Trap** | Subjective "percent complete" (Distractor 1) is notoriously inaccurate. PV and EV are rarely the same in reality (Distractor 4). |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

### Question 45

**Enabler:** 5 | **Methodology:** Predictive

**Scenario:**
A project manager is using the Critical Chain Method for a new product launch. The team is worried because several individual activities are finishing late, and their "performance bars" are in the red.

**Question:**
How should the project manager interpret this situation?

- **Correct:** Look at the consumption rate of the "Project Buffer" at the end of the chain; if the buffer is healthy, the project is still on track despite individual task delays.
- **Distractor 1:** Immediately crash the late tasks to move their performance bars back into the green and protect the project schedule.
- **Distractor 2:** Re-baseline the individual task dates to reflect the new reality and prevent the team from feeling discouraged.
- **Distractor 3:** Switch back to the Critical Path Method, as the team clearly does not understand the concept of buffers.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | In Critical Chain, the focus is on the buffer, not individual task dates. Tasks are expected to vary; the buffer is designed to absorb that variance. The "health" of the project is measured by the buffer consumption. |
| **PMI Mindset** | PMs must manage according to the chosen methodology. In CCM, focusing on task-level dates is a common mistake that leads to unnecessary multitasking and stress. |
| **The Trap** | Crashing individual tasks (Distractor 1) ignores the logic of the project-level buffer. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 46

**Enabler:** 4 | **Methodology:** Hybrid

**Scenario:**
A project manager is planning a multi-year pharmaceutical trial. The first year involves laboratory testing (Agile), and the second year involves human trials (Predictive milestones). The PM is using historical data from three previous trials to set the schedule.

**Question:**
Which approach will provide the most accurate long-term schedule for the human trials phase?

- **Correct:** Use parametric estimation based on the "cost and time per patient" from the previous trials, then adjust for current regulatory complexity.
- **Distractor 1:** Use the exact dates from the most recent trial since the laboratory team is the same.
- **Distractor 2:** Wait until the laboratory testing is complete before providing any schedule estimates for the human trials phase.
- **Distractor 3:** Ask the laboratory scientists to use their agile velocity to forecast the duration of the clinical phase.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Parametric estimation is the most robust way to use historical data for repeatable, volume-driven processes like clinical trials (time/cost per patient). |
| **PMI Mindset** | Benchmarking and historical data are essential, but they must be scaled and adjusted for the specific parameters of the current project. |
| **The Trap** | Velocity in a lab (Distractor 4) does not translate to velocity in a clinical trial with human subjects. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 47

**Enabler:** 6 | **Methodology:** Agile

**Scenario:**
An agile team has a "Definition of Ready" that requires all stories to have a confirmed UI mockup before they can be pulled into a sprint. The design team is currently two sprints behind, causing the development team to have an empty sprint backlog.

**Question:**
What should the project manager (Scrum Master) do to resolve this schedule risk?

- **Correct:** Facilitate a session to review the "Definition of Ready" and determine if it can be relaxed to allow for "Wireframe-based" development to begin.
- **Distractor 1:** Instruct the developers to start working on the back-end code for the stories without mockups to stay productive.
- **Distractor 2:** Order the design team to work overtime until the "Definition of Ready" requirements are met for the entire backlog.
- **Distractor 3:** Hire a second design team to help clear the bottleneck and restore the development team's velocity.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | "Definition of Ready" is a team-owned quality gate. If it becomes a bottleneck that blocks value flow, the team should inspect and adapt it to ensure it is helping, not hindering, the project. |
| **PMI Mindset** | Servant leaders help teams identify and modify rigid processes that are no longer serving the project's goal of continuous value delivery. |
| **The Trap** | Working without mockups (Distractor 1) might lead to rework. Overtime (Distractor 2) is a short-term fix for a systemic process issue. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 48

**Enabler:** 3 | **Methodology:** Predictive

**Scenario:**
A project manager is calculating the critical path for a project.
Path A: 12 days
Path B: 15 days
Path C: 14 days
The project manager decides to crash an activity on Path B by 2 days.

**Question:**
What is the new critical path and the new project duration?

- **Correct:** The new critical path is Path C with a duration of 14 days.
- **Distractor 1:** The new critical path is Path B with a duration of 13 days.
- **Distractor 2:** The project duration remains 15 days because crashing Path B doesn't affect Path C.
- **Distractor 3:** The project duration becomes 12 days as Path A is now the shortest path.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Path B was the critical path (15d). After crashing by 2 days, Path B becomes 13 days. Now, Path C (14d) is the longest path in the network, making it the new critical path. |
| **PMI Mindset** | Understanding that the critical path can shift after any compression or delay is fundamental to schedule control. |
| **The Trap** | Focusing only on the path you crashed (Distractor 1) and ignoring the rest of the network is a common mistake. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 49

**Enabler:** 8 | **Methodology:** Agile

**Scenario:**
An agile project is nearing its final release. The Product Owner wants to ensure that the "Product Launch" marketing campaign is perfectly synchronized with the "v1.0" code deployment.

**Question:**
Which agile tool provides the best high-level view for this coordination?

- **Correct:** The Product Roadmap
- **Distractor 1:** The Sprint Backlog
- **Distractor 2:** The Daily Stand-up Notes
- **Distractor 3:** The Velocity Trend Chart

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | The Product Roadmap is a high-level visual summary that shows the evolution of the product over time, including major releases and milestones, making it ideal for cross-departmental coordination. |
| **PMI Mindset** | PMs must select the appropriate artifact for the level of detail required by the stakeholders. Roadmap = Strategic/Coordination; Backlog = Tactical. |
| **The Trap** | Sprint Backlogs (Distractor 1) are too detailed and near-term for launch coordination. |
| **Source Link** | guide/06-project-planning/schedule-planning.md |

</details>

---

### Question 50

**Enabler:** 1 | **Methodology:** Predictive

**Scenario:**
A project manager is defining the schedule management plan for a project with high uncertainty. The sponsor requests that the schedule include a "Management Reserve."

**Question:**
Where should the Management Reserve be placed in the schedule?

- **Correct:** Outside of the schedule baseline; it is an amount of time added to the project for "unknown-unknowns" and requires approval to use.
- **Distractor 1:** At the end of every individual task to ensure each team member has a "safety buffer."
- **Distractor 2:** Between the Critical Path and the Near-Critical Path to prevent the paths from switching.
- **Distractor 3:** In a separate "Risk Project" that runs in parallel with the main project schedule.

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | Management reserves are not part of the performance measurement baseline. They are held for unplanned changes to scope or schedule and are typically managed by senior leadership, not the project manager. |
| **PMI Mindset** | Distinguishing between Contingency Reserves (inside the baseline for known risks) and Management Reserves (outside the baseline for unknown risks) is a key governance concept. |
| **The Trap** | Padding individual tasks (Distractor 1) is a poor practice (Student Syndrome) that leads to wasted time. |
| **Source Link** | guide/09-monitoring/monitoring-closing.md |

</details>

---

## Topic Summary Table

| Question | Enabler | Methodology | Focus Area |
| :--- | :--- | :--- | :--- |
| 1 | 5 | Predictive | Fast-Tracking / Compression |
| 2 | 3 | Agile | Backlog Reprioritization |
| 3 | 8 | Hybrid | Impact Analysis (Agile to Predictive) |
| 4 | 1 | Predictive | Leads and Lags |
| 5 | 8 | Predictive | SPI Thresholds & Recovery |
| 6 | 3 | Agile | Technical Spikes / Impediments |
| 7 | 7 | Predictive | Resource Smoothing |
| 8 | 4 | Hybrid | Benchmarking vs. Velocity |
| 9 | 5 | Predictive | Float & Critical Path Shifts |
| 10 | 3 | Agile | Planning Poker / Outliers |
| 11 | 2 | Hybrid | Cross-functional Coordination |
| 12 | 4 | Predictive | PERT Calculation |
| 13 | 7 | Agile | Burndown Impediments |
| 14 | 6 | Predictive | Baseline Change Control |
| 15 | 2 | Hybrid | Shared Resource Conflict |
| 16 | 8 | Agile | Technical Debt & Velocity |
| 17 | 4 | Predictive | Parametric Estimation |
| 18 | 8 | Agile | Capacity Planning |
| 19 | 5 | Hybrid | Rolling Wave Planning |
| 20 | 8 | Predictive | SPI Escalation |
| 21 | 8 | Agile | Kanban WIP Limits |
| 22 | 1 | Predictive | Mandatory Dependencies |
| 23 | 2 | Hybrid | Synchronization Points |
| 24 | 5 | Predictive | Dynamic Critical Path |
| 25 | 6 | Agile | Velocity Forecasting (Ranges) |
| 26 | 1 | Hybrid | Milestone Charts |
| 27 | 8 | Predictive | Trend Analysis |
| 28 | 2 | Agile | External Bottlenecks (Legal) |
| 29 | 4 | Hybrid | Buffer Management (Project Float) |
| 30 | 3 | Predictive | Parametric Productivity |
| 31 | 8 | Agile | CFD Bottlenecks |
| 32 | 5 | Predictive | Crashing (Targeted) |
| 33 | 6 | Hybrid | Workarounds for Hardware Delays |
| 34 | 4 | Predictive | Lead/Lag Duration Math |
| 35 | 3 | Agile | Risk-based Prioritization |
| 36 | 2 | Hybrid | Vendor Milestones |
| 37 | 1 | Predictive | Forward Pass (Max Rule) |
| 38 | 5 | Agile | Burnup Chart Communication |
| 39 | 7 | Hybrid | Resource Leveling |
| 40 | 5 | Predictive | Monte Carlo Simulation |
| 41 | 3 | Agile | Lead Time vs. Cycle Time |
| 42 | 1 | Predictive | Total Float vs. Free Float |
| 43 | 3 | Agile | Process Optimization (Handoffs) |
| 44 | 6 | Hybrid | 0/100 Rule for Agile EVM |
| 45 | 5 | Predictive | Critical Chain Buffer Management |
| 46 | 4 | Hybrid | Historical Parametric scaling |
| 47 | 2 | Agile | Definition of Ready (DoR) |
| 48 | 5 | Predictive | Path Shifting (Crashing) |
| 49 | 8 | Agile | Product Roadmap |
| 50 | 1 | Predictive | Management Reserve Governance |

## Database Stats

| Metric | Value |
| :--- | :--- |
| **Total Questions** | 50 |
| **Correct Answer Length Avg** | 16 words |
| **Distractor Length Avg** | 14 words |
| **Methodology Split** | Predictive (40%), Agile (36%), Hybrid (24%) |
| **Difficulty Level** | 4/5 (Analysis & Evaluation) |

## Schedule Management Pro-Tips

1.  **Analyze Before Action**: On the PMP exam, if a schedule slip is identified, your first step is almost always to **analyze the impact on the critical path** before crashing, fast-tracking, or requesting a change.
2.  **Float is Freedom**: Activities with float are not on the critical path. Use **Resource Smoothing** to delay these tasks without impacting the project end date. If you must delay a task with zero float, you are **Resource Leveling**, and the end date will likely move.
3.  **Fast-Track vs. Crash**: If you have no budget, **Fast-Track** (overlap tasks). If you have budget but no time, **Crash** (add resources). Remember that crashing only works on the critical path and has diminishing returns (Brooks's Law).
4.  **Agile is Fixed-Time**: In agile, we don't extend sprints or work overtime to hit a scope target. We **reprioritize the backlog** and move lower-value items to the next iteration or release.
5.  **Hybrid Synchronization**: The "glue" of a hybrid project is the **Milestone**. Use predictive milestones to track agile team hand-offs to hardware or marketing teams.
6.  **Buffer Health**: In Critical Chain and Agile, don't panic at individual task delays. Monitor the **Project Buffer** or the **Release Burnup trend**. If the buffer is absorbing the variance, the project is still healthy.

---

<style>
  details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
    margin-bottom: 1em;
  }
  summary {
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    cursor: pointer;
  }
  details[open] {
    padding: 0.5em;
  }
  details table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em;
  }
  details table th, details table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
</style>

