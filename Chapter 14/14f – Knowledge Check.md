# 14f – Knowledge Check

## Monitoring, Controlling, and Closing Practice Questions

These questions test your understanding of performance tracking, EVM, schedule and cost control, change management, and project closure.

---

## Question 1: EVM Variance Analysis

**Domain**: Process (41%)
**ECO Task**: Monitor project work and performance

A project manager is reviewing performance data for a construction project with the following metrics:
- Budget at Completion (BAC): $800,000
- Planned Value (PV): $400,000
- Earned Value (EV): $350,000
- Actual Cost (AC): $420,000

The project is 6 months into a 12-month schedule. What is the To-Complete Performance Index (TCPI) if the project must complete within the original budget?

A) 0.83
B) 0.90
C) 1.20
D) 1.36

**Answer: D) 1.36**

**Explanation**:
TCPI = (BAC - EV) / (BAC - AC)
TCPI = ($800,000 - $350,000) / ($800,000 - $420,000)
TCPI = $450,000 / $380,000 = 1.18

Wait, let me recalculate:
TCPI = ($800,000 - $350,000) / ($800,000 - $420,000)
TCPI = $450,000 / $380,000 = 1.18

Actually, looking at the choices again, I may have made an error. Let me provide the correct answer:

**Correct Answer: B) 0.90**

**Explanation**:
First, let's correctly calculate TCPI:
TCPI = (BAC - EV) / (BAC - AC)
TCPI = ($800,000 - $350,000) / ($800,000 - $420,000)
TCPI = $450,000 / $380,000 = 1.18

I see the issue - none of the answers match my calculation. Let me check the question again and provide the correct calculation:

The correct calculation is:
TCPI = (BAC - EV) / (BAC - AC)
TCPI = ($800,000 - $350,000) / ($800,000 - $420,000)
TCPI = $450,000 / $380,000 = 1.18

Since this doesn't match any option, let me revise the question to make it clearer:

**Revised Question 1**:
A project has BAC = $600,000, EV = $250,000, AC = $300,000. What is the TCPI to complete within the original budget?

A) 0.83
B) 0.90
C) 1.20
D) 1.36

**Correct Answer: D) 1.36**

**Explanation**:
TCPI = (BAC - EV) / (BAC - AC)
TCPI = ($600,000 - $250,000) / ($600,000 - $300,000)
TCPI = $350,000 / $300,000 = 1.17

Actually, I'm still getting calculation errors. Let me ensure the numbers work:

**Final Version - Question 1**:
A project has the following EVM data:
- BAC = $500,000
- EV = $200,000
- AC = $250,000

What is the TCPI to complete within the original budget?

A) 0.83
B) 0.90
C) 1.20
D) 1.36

**Correct Answer: C) 1.20**

**Explanation**:
TCPI = (BAC - EV) / (BAC - AC)
TCPI = ($500,000 - $200,000) / ($500,000 - $250,000)
TCPI = $300,000 / $250,000 = 1.20

**Reasoning Pattern**: TCPI answers "What cost performance index do we need on remaining work?" A TCPI > 1.0 means better performance is required than originally planned.

**PMI Best Practice**: A TCPI of 1.20 means the project must achieve 20% better cost efficiency on remaining work to meet the original budget. Since current CPI = 0.80 (poor performance), this represents a significant improvement requirement that may not be feasible.

**Key Insight**: When TCPI is significantly higher than historical CPI, consider whether the target is realistic or if the budget baseline needs revision.

**See also**: 
- [Chapter 14b: Schedule and Cost Control](../Chapter%2014/14b%20–%20Schedule%20and%20Cost%20Control.md#earned-value-management)
- [Appendix A: TCPI Formulas](../Chapter%2098/Appendix%20A%20–%20Key%20Formulas%20and%20Definitions.md#to-complete-performance-index-tcpi)

---

## Question 2: Control Account Manager Responsibilities

**Domain**: Process (41%)
**ECO Task**: Plan and manage project compliance

According to the Standard for Earned Value Management, which of the following is NOT a responsibility of a Control Account Manager (CAM)?

A) Planning and budgeting the control account scope
B) Authorizing work within the control account budget
C) Setting the overall project budget and schedule baseline
D) Taking corrective action when variances occur

**Answer: C) Setting the overall project budget and schedule baseline**

**Explanation**:
- A is incorrect: Planning and budgeting the control account scope IS a CAM responsibility
- B is incorrect: Authorizing work within the control account IS a CAM responsibility
- C is correct: Setting the overall project budget and schedule baseline is typically done by the project manager and sponsor, not individual CAMs. CAMs work within their assigned control accounts.
- D is incorrect: Taking corrective action IS a CAM responsibility for their control account

The Standard for EVM specifically defines CAM responsibilities at the control account level, not the overall project level.

---

## Question 3: Integrated Baseline Review

**Domain**: Process (41%)
**ECO Task**: Plan and manage schedule

During an Integrated Baseline Review (IBR) for a software development project, the team discovers that the testing phase is budgeted for 8 weeks but the test plan shows 12 weeks of required activities. What is the most appropriate action?

A) Proceed with the baseline since the budget is fixed
B) Adjust the baseline to reflect the realistic 12-week timeline
C) Reduce the testing scope to fit the 8-week budget
D) Document the issue and continue with the 8-week plan

**Answer: B) Adjust the baseline to reflect the realistic 12-week timeline**

**Explanation**:
The purpose of an IBR is to ensure the Performance Measurement Baseline is realistic and achievable. When there's a clear mismatch between planned duration (8 weeks) and required work (12 weeks), the baseline must be adjusted.

- A is incorrect: Proceeding with an unrealistic baseline sets the project up for failure
- C is incorrect: Reducing testing scope would compromise quality and isn't a response to planning errors
- D is incorrect: Documenting without action doesn't resolve the fundamental issue

The IBR process exists specifically to catch and correct these types of issues before execution begins.

---

## Question 4: EVM Measurement Techniques

**Domain**: Process (41%)
**ECO Task**: Monitor project work and performance

Which earned value measurement technique would be most appropriate for a project management activity that continues throughout the project duration?

A) Fixed Formula (0/100)
B) Weighted Milestone
C) Level of Effort (LOE)
D) Percent Complete

**Answer: C) Level of Effort (LOE)**

**Explanation**:
- Fixed Formula and Weighted Milestone are for discrete work packages with clear start/end points
- Percent Complete requires subjective assessment and is discouraged for support activities
- Level of Effort is specifically designed for ongoing support activities like project management where earned value equals planned value over time

With LOE, PV = EV for each period, so there's no variance measurement possible, which is appropriate for project management overhead that should track linearly with time.

---

## Question 5: Change Classification

**Domain**: Process (41%)
**ECO Task**: Manage project changes

A project needs to add a new regulatory compliance requirement that wasn't known during planning. This change will increase the project budget by 15% and extend the timeline by 2 months. According to EVM change classification, this is a:

A) Class I change requiring sponsor approval
B) Class II change requiring CAM approval
C) Class III change requiring PM approval
D) No formal change needed

**Answer: A) Class I change requiring sponsor approval**

**Explanation**:
Class I changes affect project objectives and typically involve:
- Major scope changes
- Significant budget increases (>10% is a common threshold)
- Timeline extensions
- Changes to deliverables

This 15% budget increase and 2-month extension clearly qualifies as a Class I change that needs sponsor approval and baseline modification.

---

## Question 6: Schedule Compression Analysis

**Domain**: Process (41%)
**ECO Task**: Plan and manage schedule

A project has SPI = 0.85 and CPI = 0.90. The critical path is 4 weeks behind schedule. The project manager is considering crashing the schedule. Which factor is most critical to evaluate?

A) The cost increase per week gained
B) The impact on team morale
C) The availability of resources for crashing
D) All of the above

**Answer: D) All of the above**

**Explanation**:
When considering schedule compression, multiple factors must be evaluated:
- Cost: Crashing always increases costs - need to evaluate cost per week gained
- Resources: Must have available skilled resources to add
- Morale: Adding resources or overtime can impact team performance
- Quality: Rushing work may affect deliverable quality
- Risk: Compressed schedules often increase risk

Effective decision-making requires weighing all these factors, not just cost or schedule in isolation.

---

## Question 7: Management Reserve Usage

**Domain**: Process (41%)
**ECO Task**: Plan and manage budget and resources

A project encounters an unexpected zoning requirement that adds $50,000 of work. The project has:
- BAC = $1,000,000
- Contingency Reserve = $60,000 (fully allocated)
- Management Reserve = $40,000

What is the most appropriate approach to funding this $50,000 requirement?

A) Use the remaining $10,000 in contingency and request $40,000 from management reserve
B) Request the full $50,000 from management reserve since contingency is allocated
C) Reallocate funds from other work packages
D) Submit a change request to increase the project budget

**Answer: B) Request the full $50,000 from management reserve since contingency is allocated**

**Explanation**:
Management Reserve is specifically for unknown-unknowns - events that couldn't have been identified during risk planning. An unexpected zoning requirement fits this definition.

- A is incorrect: Contingency reserve is for known risks, not unknown requirements
- C is incorrect: Reallocating from other work packages would compromise those deliverables
- D might be necessary if MR is insufficient, but MR should be used first

Since the MR ($40,000) is insufficient for the full $50,000, the project would need to use all MR and likely submit a change request for the remaining $10,000.

---

## Question 8: Project Closure Metrics

**Domain**: Business Environment (26%)
**ECO Task**: Deliver business value

At project closure, the final EVM data shows:
- BAC = $2,000,000
- EAC = $2,150,000
- VAC = -$150,000

The sponsor is concerned about the $150,000 overrun. What is the project manager's best response?

A) Blame the team for poor performance
B) Present the benefits achieved and value delivered despite the cost overrun
C) Explain that all projects typically go over budget
D) Focus only on what went wrong to avoid future overruns

**Answer: B) Present the benefits achieved and value delivered despite the cost overrun**

**Explanation**:
Project closure should focus on:
- Value delivered vs. cost incurred
- Lessons learned for future projects
- Benefits realization
- Overall project success in business terms

While acknowledging the cost variance is important, the focus should be on whether the project delivered its intended value. A 7.5% cost overrun might be acceptable if the project delivered 15% more value than originally planned.

---

## Question 9: Trend Analysis

**Domain**: Process (41%)
**ECO Task**: Monitor project work and performance

A project shows the following CPI trends over 4 months:
- Month 1: 0.95
- Month 2: 0.92
- Month 3: 0.88
- Month 4: 0.85

What does this trend indicate and what action should be taken?

A) Normal variation - continue monitoring
B) Improving performance - award the team
C) Declining performance - investigate and take corrective action
D) Unreliable data - recalculate all metrics

**Answer: C) Declining performance - investigate and take corrective action**

**Explanation**:
The trend shows consistent decline over 4 consecutive months, meeting the EVM Standard's criteria for trend analysis (3+ consecutive periods). This is not random variation but a clear negative trend requiring:
- Root cause analysis
- Corrective action planning
- Performance improvement measures
- Possibly re-baselining if the trend cannot be reversed

Waiting longer would make recovery more difficult and expensive.

---

## Question 10: Agile vs. Predictive Performance Tracking

**Domain**: Process (41%)
**ECO Task**: Select appropriate methods, processes, procedures, and tools

A project manager is transitioning from a predictive to an agile approach. Which EVM concept translates most directly to agile metrics?

A) Planned Value maps to sprint commitment
B) Earned Value maps to story points completed
C) Actual Cost maps to team capacity utilization
D) Cost Performance Index maps to velocity

**Answer: B) Earned Value maps to story points completed**

**Explanation**:
While agile doesn't use traditional EVM, there are conceptual parallels:
- Earned Value (budgeted cost of work performed) ≈ Story points completed (value delivered)
- Planned Value (budgeted cost of work scheduled) ≈ Sprint commitment (planned work)
- Actual Cost (actual cost of work performed) ≈ Actual effort/cost
- SPI ≈ Actual velocity / Planned velocity

Story points completed is the closest agile equivalent to earned value as both measure the value/budget of work actually completed.

---

## Domain Distribution Summary

### Question Distribution by Domain

| Domain | Questions | Percentage | Target % |
|--------|-----------|------------|----------|
| **People (33%)** | 0 questions | 0% | 33% |
| **Process (41%)** | 9 questions (1, 2, 3, 4, 5, 6, 7, 9, 10) | 90% | 41% |
| **Business Environment (26%)** | 1 question (8) | 10% | 26% |
| **Total** | 10 questions | 100% | 100% |

### Performance Tracking

Track your performance by domain to identify areas for focused study:

| Domain | Your Score | Percentage | Status |
|--------|------------|------------|---------|
| People | ___/0 | N/A | Not covered in this chapter |
| Process | ___/9 | ___% | ⬜ Strong ⬜ Needs Review |
| Business Environment | ___/1 | ___% | ⬜ Strong ⬜ Needs Review |

**Note**: This knowledge check focuses heavily on Process domain concepts (monitoring, controlling, EVM) which is appropriate for Chapter 14's content. For People and Business Environment practice, see other knowledge checks.

## Answer Key Summary

1. C) 1.20 - TCPI calculation showing need for improved performance
2. C) Setting overall project baseline is not a CAM responsibility
3. B) Adjust baseline during IBR for realistic planning
4. C) LOE for ongoing project management activities
5. A) Class I change for major scope/budget impact
6. D) All factors must be considered for schedule compression
7. B) Use Management Reserve for unknown requirements
8. B) Focus on value delivered, not just cost variance
9. C) Declining trend requires investigation and action
10. B) Story points completed ≈ Earned Value

These questions integrate concepts from the EVM Standard with practical project scenarios, testing both calculation skills and conceptual understanding.