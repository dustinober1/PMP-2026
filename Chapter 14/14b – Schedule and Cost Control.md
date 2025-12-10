# 14b – Schedule and Cost Control

## Learning Objectives

By the end of this section, you will be able to:
- Calculate and interpret variance analysis metrics
- Apply forecasting techniques to predict project outcomes
- Select appropriate corrective actions based on variance type and magnitude
- Use schedule compression techniques (crashing and fast-tracking) effectively
- Implement cost control strategies across different delivery approaches
- Determine when to accept variance vs. when to take corrective action

---

## Introduction

Sarah stared at the numbers on her screen. The Office Renovation project was three weeks behind schedule and $35,000 over budget. The steering committee meeting was in two hours, and they would ask two questions: "What happened?" and "How will you fix it?"

Six months ago, she would have panicked. Now, armed with variance analysis skills and an understanding of control options, she had a clear story to tell and concrete options to present.

"The electrical contractor encountered unexpected asbestos," she would explain, "which added two weeks for remediation—a legitimate change in scope that shifted our baseline. However, the plumbing work fell behind due to poor productivity, which is a performance issue we're addressing through schedule compression."

She'd prepared three scenarios: accept the delay, crash the schedule by adding resources, or fast-track by overlapping activities. Each came with cost, risk, and quality implications. Her job wasn't to guarantee the original date—it was to give stakeholders the information needed to make an informed decision.

This section explores the tools and techniques for bringing projects back on track when variance occurs—or determining when variance should be accepted.

---

## Earned Value Variance Analysis

EVM provides a standardized framework for analyzing project performance and determining appropriate responses. The Standard for Earned Value Management defines specific variance analysis thresholds and reporting requirements. (For EVM fundamentals and organization structure, see [Chapter 14a](14a%20–%20Tracking%20Progress%20and%20Performance.md#evm-organization-and-implementation-structure))

### Variance Analysis Reporting (VAR)

The VAR process provides structured monthly analysis of project performance:

**VAR Components**:
1. **Performance Measurement**: Current PV, EV, AC, and derived metrics
2. **Variance Analysis**: Explanation of schedule and cost variances
3. **Trend Analysis**: Performance over multiple reporting periods
4. **Forecast**: Updated EAC and completion projections
5. **Management Actions**: Corrective actions taken or planned

**Variance Thresholds** (from EVM Standard Appendix A):
- **Schedule Variance**: When SV exceeds ±10% of PV or when cumulative SPI is outside 0.95-1.05 range
- **Cost Variance**: When CV exceeds ±10% of EV or when cumulative CPI is outside 0.95-1.05 range
- **Control Limits**: Typically set at ±2σ (95% confidence level)
- **Trend Requirement**: Three consecutive months of variance requires formal analysis

### Analyzing Reserve Usage

**Contingency Reserve Analysis**:
- Track actual vs. planned contingency usage
- Variance in contingency consumption may indicate:
  - Poor risk identification (using too much)
  - Over-conservative planning (using too little)
  - Changed project conditions

**Management Reserve Analysis**:
- Document all MR requests and approvals
- Analyze patterns of MR usage:
  - Frequent MR use may indicate inadequate planning
  - No MR use may suggest overly conservative estimates

### EVM-Based Decision Framework

**Step 1: Calculate Current Status**
```
Given: BAC = $500,000, PV = $300,000, EV = $270,000, AC = $310,000
Calculate:
- SV = EV - PV = -$30,000 (behind schedule)
- CV = EV - AC = -$40,000 (over budget)
- SPI = EV/PV = 0.90
- CPI = EV/AC = 0.87
- TCPI = (BAC-EV)/(BAC-AC) = 1.17
```

*For detailed explanations of these formulas, see [Appendix A: EVM Formulas](../Chapter%2098/Appendix%20A%20–%20Key%20Formulas%20and%20Definitions.md#earned-value-management-evm-formulas)*

**Step 2: Analyze Variances**
- Schedule variance: -$30K exceeds 10% threshold ($30K) → requires analysis
- Cost variance: -$40K exceeds 10% threshold ($27K) → requires analysis
- Both indices are below 0.90 threshold → trigger management attention

**Step 3: Determine Root Causes**
- Schedule delay: Material shortages and subcontractor availability
- Cost overrun: Overtime premiums and expedited shipping

**Step 4: Forecast Outcomes**
```
EAC (CPI-based) = BAC/CPI = $500,000/0.87 = $574,713
VAC = BAC - EAC = -$74,713
```

*For EAC calculation methods and worked examples, see [Appendix A: Forecasting Formulas](../Chapter%2098/Appendix%20A%20–%20Key%20Formulas%20and%20Definitions.md#forecasting-formulas)*

**Step 5: Evaluate Options**
1. **Accept variance**: Request baseline change for $74,713 overrun
2. **Recover performance**: TCPI of 1.17 may be achievable with aggressive cost control
3. **Partial recovery**: Negotiate compromised target and partial baseline change

### Integrated Change Control for EVM

When changes occur, follow this process:

1. **Change Identification**: Document the change request
2. **Impact Analysis**: Assess effects on scope, schedule, and cost
3. **EVM Recalculation**: Update baseline values:
   - New BAC if scope changes
   - Adjusted PV if schedule changes
   - Revised control accounts
4. **Approval**: Obtain appropriate authorization level
5. **Baseline Update**: Modify the Performance Measurement Baseline
6. **Communication**: Update all stakeholders of new baseline

**Change Classification** (per EVM Standard):
- **Class I**: Major scope changes affecting project objectives → requires sponsor approval
- **Class II**: Baseline adjustments within control accounts → requires CAM approval
- **Class III**: Internal reallocations within work packages → requires PM approval

---

## Understanding Variance: Signal vs. Noise

Not all variance requires corrective action. Effective control distinguishes between:

### Normal Variation
**Characteristics**:
- Small fluctuations around the baseline
- Random, not trending in one direction
- Within established thresholds
- Doesn't impact critical path or budget significantly

**Response**: Monitor but don't intervene. Over-controlling normal variation creates waste and frustration.

**Example**: The Expense System team's velocity fluctuates between 30-34 story points per sprint. This is normal variation. Sarah doesn't panic when sprint velocity is 31 instead of 32.

### Significant Variance
**Characteristics**:
- Exceeds established thresholds
- Shows a consistent trend
- Impacts critical path or budget materially
- Has identifiable root cause

**Response**: Investigate root cause and take corrective action.

**Example**: When velocity dropped from 32 to 24 points for two consecutive sprints, Sarah investigated and discovered team members were being pulled into support work—a correctable issue.

### Establishing Control Thresholds

Common threshold approaches:

**Percentage-Based**:
- Green: ±5% variance
- Amber: 5-10% variance
- Red: >10% variance

**Absolute Dollar/Time Limits**:
- Small projects: ±$5,000 or ±1 week
- Large projects: ±$50,000 or ±1 month

**Performance Index-Based**:
- Green: SPI or CPI > 0.95
- Amber: SPI or CPI between 0.90-0.95
- Red: SPI or CPI < 0.90

**Sarah's Approach**: She tailored thresholds to project characteristics:
- Office Renovation: ±10% or ±$25,000 (larger buffer due to construction uncertainties)
- Expense System: Velocity variance >15% for two consecutive sprints
- Transformation Program: CPI < 0.95 at program level (stricter control for enterprise initiative)

---

## Schedule Control Techniques

### Critical Path Analysis

**Definition**: The longest sequence of activities that determines the shortest possible project duration. Any delay on the critical path delays the entire project.

**Why it matters**: Focus control efforts on critical path activities. Non-critical activities have float and can slip without impacting the end date.

**Example – Office Renovation**:

**Critical Path**: Foundation → Framing → Electrical → Drywall → Painting → Flooring → Final Inspection

**Non-Critical Path**: HVAC installation (has 5 days of float)

When the HVAC contractor requested a 3-day delay, Sarah approved it because it didn't impact the critical path. When the electrical contractor needed an extra 2 days, she immediately looked for ways to compress downstream activities because electrical was on the critical path.

### Schedule Compression: Crashing

**Definition**: Adding resources to critical path activities to reduce duration.

**Approach**:
1. Identify critical path activities that can be shortened with additional resources
2. Calculate cost per time unit saved
3. Select activities with the lowest crash cost
4. Add resources (people, equipment, shifts)
5. Monitor for diminishing returns and quality impacts

**Example – Office Renovation Crashing Analysis**:

| Activity | Normal Duration | Crash Duration | Normal Cost | Crash Cost | Cost per Day Saved |
|----------|----------------|----------------|-------------|------------|-------------------|
| Framing | 10 days | 7 days | $15,000 | $21,000 | $2,000/day |
| Electrical | 8 days | 6 days | $12,000 | $15,000 | $1,500/day |
| Drywall | 6 days | 4 days | $8,000 | $11,000 | $1,500/day |
| Painting | 5 days | 3 days | $5,000 | $8,000 | $1,500/day |

**Decision**: To recover 3 days, Sarah chose to crash electrical, drywall, and painting (lowest cost per day) rather than framing, saving $1,500 compared to crashing framing.

**Limitations of Crashing**:
- Not all activities can be crashed (adding more people doesn't always help)
- Diminishing returns: doubling resources rarely halves duration
- May impact quality if rushed
- Increases cost
- Can reduce team morale if overused

### Schedule Compression: Fast-Tracking

**Definition**: Overlapping activities that would normally be done in sequence.

**Approach**:
1. Identify critical path activities that could be overlapped
2. Assess risk of rework if assumptions prove wrong
3. Implement strong coordination mechanisms
4. Monitor carefully for integration issues

**Example – Office Renovation Fast-Tracking**:

**Normal Sequence**:
- Drywall complete → Painting → Flooring

**Fast-Tracked**:
- Drywall 80% complete → Start painting completed areas while drywall finishes
- Painting 50% complete → Start flooring in painted areas

**Result**: Saved 4 days on the schedule by overlapping activities that were previously sequential.

**Risk**: If drywall needed repairs, painted areas might be damaged. Sarah mitigated this by having the drywall contractor do a quality check before painters moved into each area.

**Limitations of Fast-Tracking**:
- Increases risk of rework
- Requires more coordination
- Not all activities can be overlapped (foundation before framing is absolute)
- May require additional resources to manage parallel work
- Can create quality issues if done carelessly

### Resource Leveling vs. Resource Smoothing

**Resource Leveling**:
- Adjusts schedule to accommodate resource constraints
- May extend project duration
- Used when resources are absolutely limited

**Resource Smoothing**:
- Adjusts activities within their float to balance resource demand
- Doesn't change project end date
- Used to optimize resource utilization

**Example – Transformation Program**:

Sarah used resource smoothing when she noticed that three workstreams all needed the enterprise architect in week 15, creating a resource conflict. By shifting one workstream's architecture review to week 16 (within its float), she smoothed the demand without extending the program timeline.

---

## Cost Control Techniques

### Variance Analysis

From Section 14a, we know:
- **Cost Variance (CV)**: `CV = EV - AC`
- **Cost Performance Index (CPI)**: `CPI = EV / AC`

The key question is: Why is variance occurring?

### Root Cause Categories for Cost Variance

1. **Estimating Error**
   - Original estimates were too optimistic
   - Scope was poorly defined during planning
   - **Response**: Update baseline (if justified), improve estimation for future projects

2. **Performance Issues**
   - Resources are less productive than planned
   - Quality issues causing rework
   - **Response**: Address root cause (training, process improvement, team changes)

3. **Scope Changes**
   - Legitimate additions to scope
   - Should go through change control
   - **Response**: Approve and re-baseline, or reject the change

4. **External Factors**
   - Market price increases
   - Vendor cost overruns
   - Regulatory changes
   - **Response**: May justify baseline adjustment or contingency reserve usage

**Example – Office Renovation Cost Overrun**:

**Situation**: CPI = 0.88, indicating 12% cost inefficiency

**Root Cause Analysis**:
- $20,000: Asbestos remediation (scope change—legitimate baseline adjustment)
- $10,000: Electrical contractor inefficiency (performance issue—address with contractor)
- $5,000: Material price increases (external factor—use contingency reserve)

**Response**:
- Approved $20,000 change request for asbestos remediation (updated baseline)
- Negotiated fixed-price completion with electrical contractor (capped further overruns)
- Used $5,000 from contingency for material costs
- No corrective action needed for estimating accuracy

### Forecasting Techniques

Forecasting helps stakeholders understand where the project is heading, not just where it is.

**Estimate at Completion (EAC)** – Several formulas, each with different assumptions:

**1. EAC = AC + Bottom-Up ETC**
- Use when: Current variances are atypical and won't continue
- Meaning: Start fresh with a new estimate for remaining work
- Example: Office Renovation after asbestos discovery (one-time event)

**2. EAC = BAC / CPI**
- Use when: Current cost performance will continue
- Meaning: Project current efficiency trends forward
- Example: Expense System when cost efficiency is stable

**3. EAC = AC + [(BAC - EV) / (CPI × SPI)]**
- Use when: Both cost and schedule performance will continue
- Meaning: Account for both cost and schedule inefficiency
- Example: Transformation Program with persistent performance issues

**Example Calculation**:

**Office Renovation Forecast**:
- BAC = $500,000
- AC = $290,000
- EV = $270,000
- CPI = 0.93
- SPI = 0.90

**Scenario 1** (variances atypical): EAC = $290,000 + bottom-up estimate of $210,000 = $500,000 (original budget holds)

**Scenario 2** (CPI continues): EAC = $500,000 / 0.93 = $537,634 (need $37,634 more)

**Scenario 3** (CPI and SPI continue): EAC = $290,000 + [($500,000 - $270,000) / (0.93 × 0.90)] = $290,000 + $274,914 = $564,914 (need $64,914 more)

Sarah presented all three scenarios to stakeholders with her recommendation based on root cause analysis.

### To-Complete Performance Index (TCPI)

**Purpose**: Shows the cost efficiency required on remaining work to meet a target.

**Formula for BAC**: `TCPI = (BAC - EV) / (BAC - AC)`

**Formula for EAC**: `TCPI = (BAC - EV) / (EAC - AC)`

**Interpretation**:
- TCPI > 1.0: Need better efficiency than current performance
- TCPI = 1.0: Need to maintain current efficiency
- TCPI < 1.0: Can afford to be less efficient

**Example – Office Renovation**:

**To meet original budget (BAC = $500,000)**:
TCPI = ($500,000 - $270,000) / ($500,000 - $290,000) = 1.10

**Meaning**: Must achieve 10% better cost efficiency than originally planned on all remaining work—a significant challenge given current CPI of 0.93.

**To meet revised budget (EAC = $537,634)**:
TCPI = ($500,000 - $270,000) / ($537,634 - $290,000) = 0.93

**Meaning**: Just need to maintain current efficiency to hit the revised estimate—much more realistic.

**Decision**: Sarah recommended accepting the EAC of $537,634 rather than trying to force the project back to the original BAC, which would require unrealistic efficiency improvements.

---

## Control Approaches Across Different Contexts

### Predictive Projects: Baseline Control

**Philosophy**: Protect the approved baseline; changes require formal approval.

**Office Renovation Approach**:
- Monthly earned value analysis
- Formal change control for scope changes
- Variance thresholds trigger corrective action plans
- Detailed forecasting using EVM
- Regular steering committee reviews

**When variance exceeds thresholds**:
1. Conduct root cause analysis
2. Develop corrective action options (crash, fast-track, scope reduction, accept delay)
3. Present options to change control board
4. Implement approved corrective actions
5. Update baseline if scope changed
6. Monitor effectiveness

### Agile Projects: Adaptive Control

**Philosophy**: Accept that scope will evolve; control through velocity management and continuous prioritization.

**Expense System Approach**:
- Daily standup to identify impediments
- Sprint retrospectives to improve velocity
- Backlog refinement to re-prioritize based on value
- Release planning based on demonstrated velocity
- Continuous stakeholder feedback

**When velocity drops**:
1. Identify impediments in daily standup
2. Scrum Master removes blockers
3. Retrospective explores root causes
4. Team commits to improvements
5. Product Owner adjusts release plan based on new velocity

**Example**: When Expense System velocity dropped from 32 to 24 points:
- **Immediate**: Scrum Master removed team members from support rotation (impediment removal)
- **Retrospective**: Team identified need for better technical documentation (root cause)
- **Adjustment**: Product Owner shifted two lower-priority features to a later release (adaptive scope control)
- **Result**: Velocity recovered to 30 points in next sprint

**Key Difference**: Instead of trying to restore original velocity through crashing or fast-tracking, agile projects adapt scope to match demonstrated capacity.

### Hybrid Programs: Tiered Control

**Philosophy**: Program-level baseline control with team-level adaptive control.

**Transformation Program Approach**:
- **Program Level**: Earned value management, formal change control, phase gate reviews
- **Team Level**: Agile velocity tracking, daily standups, sprint retrospectives
- **Integration**: Teams commit to program milestones but have autonomy in how they achieve them

**Example – Handling Schedule Variance**:

**Situation**: One agile team's user acceptance testing workstream fell two weeks behind the program milestone.

**Program-Level Response**:
1. Assessed impact on critical path (testing was on critical path for release)
2. Evaluated options: crash (add testers), fast-track (overlap testing and defect fixing), delay release
3. Escalated to program steering committee

**Team-Level Response**:
1. Daily standups identified bottlenecks in test environment provisioning
2. Scrum Master removed impediment by securing additional environments
3. Team reprioritized testing to focus on critical path features first

**Integrated Solution**:
- Program approved adding two contract testers for 4 weeks (crashing) = cost increase
- Team adapted testing approach to parallel execution (fast-tracking) = no cost
- Combined approach recovered 1.5 weeks
- Program accepted 0.5-week delay, which fit within phase gate buffer

---

## Making Trade-Off Decisions

Cost and schedule control often require trade-offs between competing constraints.

### The Triple Constraint Triangle

Traditional view: **Scope**, **Schedule**, **Cost** – change one, and you must adjust at least one other.

Modern view: Add **Quality**, **Risk**, and **Resources** to the model.

### Decision Framework

When variance occurs, evaluate options across all constraints:

**Example – Office Renovation Decision Matrix**:

| Option | Schedule Impact | Cost Impact | Quality Impact | Risk Impact |
|--------|----------------|-------------|----------------|-------------|
| Accept delay | +3 weeks | $0 | No change | Low risk |
| Crash schedule | Recover 2 weeks | +$25,000 | Potential decrease if rushed | Medium risk (morale, quality) |
| Fast-track | Recover 3 weeks | +$5,000 (coordination) | Risk of rework | High risk (rework, coordination) |
| Reduce scope | Recover 3 weeks | -$15,000 | Reduced scope, not quality | Low risk |

**Stakeholder Preferences**:
- CFO: Prioritizes cost control
- Facilities Director: Needs building ready by occupancy deadline
- Quality Manager: Non-negotiable on code compliance

**Sarah's Recommendation**: Combination of fast-tracking (2 weeks) and accepting 1-week delay, balancing cost, risk, and stakeholder needs.

---

## When to Accept Variance

Not all variance requires correction. Accept variance when:

1. **Root cause is legitimate and one-time**
   - Example: Asbestos discovery is a valid scope increase

2. **Cost of correction exceeds benefit**
   - Example: Crashing would cost $50,000 to save 1 week, but delay penalty is only $10,000

3. **Variance is within acceptable thresholds**
   - Example: 3% cost overrun on a project with a 5% contingency

4. **Corrective action introduces unacceptable risk**
   - Example: Fast-tracking would compromise safety compliance

5. **Stakeholders agree variance is acceptable**
   - Example: Product Owner accepts releasing with fewer features to meet market window

**Example – Expense System**:

The Product Owner originally planned for 15 features in the first release. After six sprints, it was clear that only 12 features would be completed by the target date.

**Options**:
1. Extend timeline by two sprints (schedule variance)
2. Add team members to increase velocity (cost variance)
3. Reduce quality standards to go faster (quality variance)
4. Accept 12 features in release 1, defer 3 to release 2 (scope variance)

**Decision**: Option 4—accept scope variance. The 12 features delivered the core value; the 3 deferred features were "nice to have." Stakeholders agreed that delivering on time with reduced scope was better than delaying for features that weren't critical.

**Lesson**: In agile contexts, scope is often the most flexible constraint.

---

## Contingency and Management Reserves

### Contingency Reserve
- **Purpose**: Cover identified risks (known unknowns)
- **Included in**: Project baseline
- **Authority**: Project manager can use within approved risk responses
- **Example**: 10% budget contingency for material price fluctuations

### Management Reserve
- **Purpose**: Cover unidentified risks (unknown unknowns)
- **Not included in**: Project baseline
- **Authority**: Requires sponsor/senior management approval
- **Example**: Additional 5% held by PMO for true emergencies

**Example – Office Renovation Reserve Usage**:

**Budget**:
- Base estimate: $450,000
- Contingency reserve (10%): $45,000
- Management reserve (5%): $25,000
- Total budget authority: $520,000
- Project baseline (BAC): $495,000

**Reserve Drawdown**:
1. Material price increase: $5,000 from contingency (approved risk response)
2. Asbestos remediation: $20,000 from contingency (identified risk that materialized)
3. Unexpected foundation repair: $15,000 from management reserve (required sponsor approval)

**Remaining**:
- Contingency: $20,000
- Management reserve: $10,000

Sarah tracked reserve usage carefully and reported it monthly to demonstrate prudent risk management.

---

## Common Pitfalls in Schedule and Cost Control

### Ignoring Variances Until They're Too Large
**Problem**: Small variances compound into crises.
**Solution**: Monitor regularly and intervene early when trends emerge.

### Over-Controlling Normal Variation
**Problem**: Constant interventions for minor fluctuations create waste.
**Solution**: Establish thresholds and only act when exceeded.

### Focusing Only on Cost or Only on Schedule
**Problem**: Optimizing one constraint often degrades others.
**Solution**: Use integrated change control to assess all impacts.

### Crashing or Fast-Tracking Without Risk Analysis
**Problem**: Schedule compression introduces quality and coordination risks.
**Solution**: Evaluate risk-reward trade-offs before compressing.

### Assuming Current Performance Will Continue
**Problem**: Forecasts based on flawed assumptions mislead stakeholders.
**Solution**: Use multiple forecasting scenarios and update regularly.

---

## Summary

Effective schedule and cost control requires:

- **Distinguish signal from noise**: Not all variance requires correction
- **Understand root causes**: Performance issues, scope changes, and external factors require different responses
- **Apply appropriate techniques**: Crashing, fast-tracking, resource optimization
- **Forecast accurately**: Use EVM formulas appropriate to the situation
- **Make informed trade-offs**: Balance schedule, cost, quality, and risk
- **Adapt to context**: Predictive projects use baseline control; agile projects use adaptive control; hybrid programs use tiered control
- **Know when to accept variance**: Sometimes the best control decision is to adjust expectations

Sarah's journey from panic to confidence illustrates the power of these techniques. Armed with variance analysis, forecasting tools, and a framework for evaluating options, she transformed from someone who feared steering committee meetings into someone who confidently guided stakeholders through difficult trade-off decisions.

In the next section, we'll explore change control and configuration management—the formal processes that ensure changes are evaluated, approved, and implemented in a coordinated manner.
