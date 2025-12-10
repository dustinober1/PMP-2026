# 11c – Schedule Planning and Work Breakdown

## Learning Objectives

By the end of this section, you will be able to:
- Sequence work using network diagrams and dependency analysis
- Identify the critical path and understand its impact on project schedule
- Apply schedule compression techniques (crashing and fast tracking) appropriately
- Explain how scheduling differs radically across predictive, agile, and hybrid approaches
- Use timeboxing, velocity, and iteration planning in agile contexts
- Manage schedule buffers and contingency reserves to absorb uncertainty
- Address resource constraints that impact schedule feasibility

---

## Why Schedule Planning Matters

The schedule translates scope into time. It answers: How long will this take? When will deliverables be ready? What's the sequence of work?

Without a realistic schedule:
- Stakeholders have unrealistic expectations about delivery dates
- Resource conflicts and bottlenecks emerge unexpectedly
- Dependencies are missed, causing delays and rework
- The team works reactively instead of proactively
- Progress cannot be measured objectively

But scheduling lives in a paradox:
- Detailed schedules provide predictability but assume stability
- Adaptive schedules maintain flexibility but provide less upfront certainty
- Estimates are uncertain early in the project when stakeholders most want commitment

The art of scheduling is matching your approach to your context.

---

## Scheduling Fundamentals: Dependencies and Sequencing

Before you can build a schedule, you must understand how work is related.

### Types of Dependencies

**1. Mandatory Dependencies (Hard Logic):**
Work that MUST happen in a specific order due to the nature of the work.

**Example (Office Renovation):**
- Demolition must complete before construction starts (can't build new walls until old walls are removed)
- Electrical wiring must complete before drywall installation (can't access wiring after walls are closed)
- Inspection must complete before occupancy (legal requirement)

Mandatory dependencies are inherent to the work. You can't change them without changing the nature of the work.

**2. Discretionary Dependencies (Soft Logic):**
Work that typically happens in a specific order based on best practices, but could theoretically be done differently.

**Example (Office Renovation):**
- Painting usually happens after flooring (to avoid paint drips on new floor)
- HVAC installation typically happens before furniture delivery (easier access)

Discretionary dependencies reflect preferred practices. You can sometimes fast-track by changing the sequence, but with added risk.

**3. External Dependencies:**
Work that depends on factors outside the project team's control.

**Example (Office Renovation):**
- Construction can't start until building permit is issued (depends on city government)
- AV equipment installation depends on vendor delivery (depends on vendor's schedule)
- Final occupancy depends on building inspector's availability (depends on inspector's schedule)

External dependencies create schedule risk because the project team can't control them.

**4. Internal Dependencies:**
Work that depends on other work within the project.

**Example (Office Renovation):**
- Network infrastructure installation depends on completion of electrical work (internal to project)
- Furniture installation depends on completion of flooring (internal to project)

Internal dependencies are within the team's control (in theory), but resource constraints or coordination challenges can still create delays.

### Dependency Relationships

**Finish-to-Start (FS):** Activity B can't start until Activity A finishes.
- Example: Demolition (A) must finish before Construction (B) starts

**Start-to-Start (SS):** Activity B can't start until Activity A starts.
- Example: Network cabling (B) can start once electrical conduit installation (A) starts (they can run in parallel)

**Finish-to-Finish (FF):** Activity B can't finish until Activity A finishes.
- Example: Testing (B) can't finish until development (A) finishes

**Start-to-Finish (SF):** Activity B can't finish until Activity A starts (rare).
- Example: Old system support (B) continues until new system goes live (A)

**Most common:** Finish-to-Start represents 90% of dependencies in most projects.

---

## Network Diagrams and Critical Path

A network diagram visualizes the sequence of work and dependencies. The most common format is a Precedence Diagramming Method (PDM) using Activity-on-Node representation.

### Sarah's Office Renovation Network Diagram (Simplified)

```
┌─────────────┐        ┌─────────────┐        ┌─────────────┐
│   Design    │───────>│   Permit    │───────>│ Demolition  │
│  4 weeks    │        │  3 weeks    │        │  2 weeks    │
└─────────────┘        └─────────────┘        └─────────────┘
                                                      │
                                                      ▼
                       ┌─────────────┐        ┌─────────────┐
                       │  Electrical │<───────│Construction │
                       │  3 weeks    │        │  8 weeks    │
                       └─────────────┘        └─────────────┘
                              │                       │
                              ▼                       ▼
                       ┌─────────────┐        ┌─────────────┐
                       │   Network   │        │    HVAC     │
                       │  2 weeks    │        │  4 weeks    │
                       └─────────────┘        └─────────────┘
                              │                       │
                              └───────>┬<─────────────┘
                                       ▼
                               ┌─────────────┐
                               │ Inspection  │
                               │  1 week     │
                               └─────────────┘
```

### Critical Path Method (CPM)

**Definition:** The critical path is the longest sequence of dependent activities from start to finish. It determines the minimum project duration.

*For detailed CPM formulas, forward/backward pass calculations, and float analysis, see [Appendix A: Critical Path and Duration Calculations](../Chapter%2098/Appendix%20A%20–%20Key%20Formulas%20and%20Definitions.md#critical-path-and-duration-calculations)*

**Why it matters:**
- Activities on the critical path have zero float (slack)—any delay directly delays the project
- Activities not on the critical path have float—they can be delayed without impacting project completion
- Focusing resources on critical path activities accelerates the project
- Adding resources to non-critical activities doesn't shorten the schedule

**Sarah's Office Renovation Critical Path:**
Design (4 weeks) → Permit (3 weeks) → Demolition (2 weeks) → Construction (8 weeks) → HVAC (4 weeks) → Inspection (1 week) = **22 weeks total**

**Critical path activities:** Design, Permit, Demolition, Construction, HVAC, Inspection

**Non-critical path:** Electrical and Network installation (they have float because they can finish before HVAC completes)

**Implication:** If Sarah wants to shorten the schedule, she must focus on critical path activities (e.g., expedite permit, add construction crew to finish faster). Adding more electricians won't shorten the overall schedule because electrical work is not on the critical path.

### Float (Slack)

**Total Float:** The amount of time an activity can be delayed without delaying the project completion.

**Example:**
- Electrical work: 3 weeks duration, can finish anytime before HVAC starts (4-week window)
- Float: 1 week (can delay electrical work by 1 week without impacting project)

**Free Float:** The amount of time an activity can be delayed without delaying the early start of any successor.

**Management Implication:**
Activities with float provide scheduling flexibility. If resources are constrained, you can delay non-critical activities to focus resources on critical path activities.

---

## Scheduling in Predictive Projects

In predictive projects, scheduling is done comprehensively upfront and baselined. The schedule provides a detailed roadmap with specific dates for each activity.

### Steps to Create a Predictive Schedule

**1. Define Activities:**
Decompose WBS work packages into specific activities that can be estimated and sequenced.

**Example (WBS Work Package → Activities):**
- WBS: 1.3.2 HVAC Installation
- Activities:
  - Remove old HVAC equipment
  - Install new air handlers
  - Install ductwork
  - Install thermostats and controls
  - Test and balance system

**2. Sequence Activities:**
Identify dependencies using network diagram (PDM).

**3. Estimate Activity Durations:**
Use historical data, expert judgment, parametric estimating, or three-point estimates.

*For three-point estimation formulas and confidence intervals, see [Appendix A: Three-Point Estimating](../Chapter%2098/Appendix%20A%20–%20Key%20Formulas%20and%20Definitions.md#three-point-estimating)*

**Sarah's HVAC Example:**
- Optimistic: 3 weeks (if everything goes perfectly)
- Most Likely: 4 weeks (realistic estimate)
- Pessimistic: 6 weeks (if we encounter problems like asbestos or structural issues)
- **PERT Estimate:** (3 + 4×4 + 6) / 6 = 4.2 weeks

**4. Identify Resource Requirements:**
Determine what resources (people, equipment, materials) are needed for each activity.

**5. Develop Schedule:**
Use scheduling software (like MS Project) or manual calculation to determine start and finish dates based on dependencies, durations, and resource availability.

**6. Identify Critical Path:**
Calculate which activities have zero float; these determine project duration.

**7. Add Buffers:**
Include schedule buffers to absorb uncertainty and risk.

**Types of Buffers:**
- **Project buffer:** Added at the end of critical path to protect project completion date
- **Feeding buffers:** Added where non-critical paths feed into critical path to prevent non-critical delays from becoming critical
- **Resource buffers:** Time reserved to ensure critical resources are available when needed

**Sarah's Office Renovation Schedule:**
- Critical path duration: 22 weeks
- Project buffer: 2 weeks (for unknowns like inspection delays)
- **Total baseline schedule:** 24 weeks

**8. Baseline Schedule:**
Gain stakeholder approval and baseline the schedule. This becomes the reference for measuring progress.

### Gantt Chart

The Gantt chart is the most common visual representation of a predictive schedule. It shows activities as bars on a timeline, with dependencies indicated by arrows.

**Sarah's Office Renovation Gantt Chart (Simplified):**

```
Activity          | Week 1-4 | Week 5-8 | Week 9-12 | Week 13-16 | Week 17-20 | Week 21-24
------------------|----------|----------|-----------|------------|------------|------------
Design            |████████  |          |           |            |            |
Permit            |          |██████    |           |            |            |
Demolition        |          |          |████       |            |            |
Construction      |          |          |           |████████████|            |
Electrical        |          |          |           |      ██████ |            |
HVAC              |          |          |           |            |████████    |
Network           |          |          |           |            |    ████    |
Inspection        |          |          |           |            |            |██
Buffer            |          |          |           |            |            |  ████
```

Critical path shown in darker shading.

---

## Schedule Compression Techniques

Sometimes stakeholders need the project completed faster than the schedule allows. Two techniques compress the schedule:

### 1. Crashing

**Definition:** Adding resources to critical path activities to complete them faster.

**Example (Sarah's Office Renovation):**
Construction is on the critical path (8 weeks). Sarah adds a second construction crew, reducing duration to 6 weeks (saving 2 weeks).

**Trade-off:** Increased cost (hiring second crew), potential quality risk (coordination overhead)

**When crashing works:**
- Activities on the critical path can be accelerated by adding resources
- Budget is available to fund additional resources
- Adding resources actually speeds the work (not all activities are accelerated by adding people—"9 women can't make a baby in 1 month")

**Crashing Analysis:**
Sarah calculates cost per week saved for each critical path activity:
- Design: Can't crash (architect already working full-time)
- Permit: Can't crash (external dependency on government)
- Construction: Can crash at $15,000/week saved
- HVAC: Can crash at $10,000/week saved

If Sarah needs to save 2 weeks, most cost-effective approach: Crash HVAC by 2 weeks for $20,000.

### 2. Fast Tracking

**Definition:** Performing activities in parallel that would normally be done sequentially.

**Example (Sarah's Office Renovation):**
Normally, electrical work completes before network installation starts. Sarah fast-tracks by having electrical and network teams work simultaneously in different areas of the building.

**Trade-off:** Increased risk (coordination required to avoid conflicts; if electrical work reveals issues, network team may need to redo work)

**When fast tracking works:**
- Activities have discretionary dependencies (not mandatory)
- Risk of rework is acceptable
- Teams can work in parallel without interfering with each other

**Fast Tracking Risk:**
Sarah decides to start furniture installation while final inspection is still pending (normally inspection completes first). Risk: If inspection identifies issues requiring corrections, furniture may need to be moved. Sarah accepts this risk because it saves 1 week and inspection issues are unlikely.

### Schedule Compression Summary

| Technique | How It Works | Impact | When to Use |
|-----------|--------------|--------|-------------|
| Crashing | Add resources to critical path | Increases cost | When budget available and resources will help |
| Fast Tracking | Do activities in parallel | Increases risk of rework | When dependencies are discretionary and risk is acceptable |

**PMI Principle:** Schedule compression always involves trade-offs. You can't compress schedule without increasing cost or risk.

---

## Scheduling in Agile Projects

Agile projects take a fundamentally different approach to scheduling: Instead of planning all activities upfront, they use timeboxed iterations (sprints) and plan just-in-time.

### Key Agile Scheduling Concepts

**1. Timeboxing:**
Work is organized into fixed-length iterations (sprints), typically 1-4 weeks.

**Sarah's Expense System:**
- Sprint length: 2 weeks (fixed)
- 12 sprints over 6 months
- Each sprint delivers working software

**Philosophy:** Time is fixed; scope varies to fit the timebox.

**2. Velocity:**
A measure of how much work the team completes per sprint.

**Sarah's team velocity:**
- Sprint 1: 15 story points completed
- Sprint 2: 18 story points completed
- Sprint 3: 20 story points completed
- **Average velocity:** ~18 story points per sprint

**Using velocity for planning:**
Sarah has 90 story points remaining in the backlog. At 18 points per sprint, she can estimate ~5 sprints (10 weeks) to complete the backlog.

**Important caveat:** Velocity is a planning tool, not a performance metric. Velocity varies based on story complexity, team learning, and external factors. It's a guide, not a guarantee.

**3. Release Planning:**
High-level roadmap showing when major capabilities will be available.

**Sarah's Expense System Release Plan:**
- **Release 1 (Month 2, after Sprint 4):** Basic expense submission and approval
- **Release 2 (Month 4, after Sprint 8):** Mobile app and receipt scanning
- **Release 3 (Month 6, after Sprint 12):** Payroll integration and reporting

Release dates are target goals, not firm commitments. Scope may adjust to meet release dates.

**4. Sprint Planning:**
At the start of each sprint, the team plans what they'll accomplish in the next iteration.

**Sarah's Sprint 5 Planning:**
1. **Review backlog:** Product owner presents highest-priority stories
2. **Team capacity:** Team discusses availability (anyone on vacation? other commitments?)
3. **Select stories:** Team pulls stories into sprint based on priority and capacity (target: ~18 points)
4. **Break down tasks:** Team discusses how they'll implement each story
5. **Commit:** Team commits to sprint goal and selected stories

**Sprint goal (Sprint 5):** "Enable employees to submit expenses via mobile app."

**Selected stories:**
- As an employee, I want to access expense system from mobile app
- As an employee, I want to photograph receipt from mobile app
- As an employee, I want to submit expense from mobile app
- As a manager, I want to approve expenses from mobile app

**5. Daily Stand-ups:**
Brief daily synchronization to adjust the plan based on progress.

**Questions:**
- What did you complete yesterday?
- What will you work on today?
- Any blockers or impediments?

**Adaptive scheduling:** If a story is taking longer than expected, the team adjusts: Someone helps, or a lower-priority story is moved out of the sprint.

### No Gantt Charts in Agile

Agile projects typically don't use Gantt charts or critical path analysis. Instead:
- **Sprint burndown chart:** Shows remaining work in current sprint (are we on track to finish sprint goal?)
- **Release burnup chart:** Shows cumulative work completed over multiple sprints (are we on track for release?)
- **Kanban board:** Visualizes work in progress (what's in To Do, In Progress, Done)

**Why no Gantt chart?**
Detailed task-level scheduling with dependencies assumes you know all the work upfront. Agile assumes you'll discover work as you go. The timebox (sprint) is the primary scheduling mechanism.

---

## Scheduling in Hybrid Projects

Hybrid projects combine predictive program-level scheduling with agile team-level scheduling.

### Sarah's Digital Transformation Program Schedule

**Program-Level Schedule (Predictive):**
Uses Gantt chart showing major milestones and deliverables over 18 months:

- **Month 1-3:** Platform development Sprint 1-6
- **Month 4-6:** Platform development Sprint 7-12, Region 1-3 implementation
- **Month 7-9:** Platform development Sprint 13-18, Region 4-6 implementation
- **Month 10-12:** Region 7-9 implementation
- **Month 13-15:** Region 10-12 implementation
- **Month 16-18:** Region 13-15 implementation

**Critical path:** Platform development drives regional rollouts (regions can't go live until platform features are ready).

**Dependencies:**
- Region 1-3 rollout depends on platform Sprint 12 completion (basic features)
- Region 4-6 rollout depends on platform Sprint 18 completion (mobile app)

**Team-Level Schedule (Agile):**
Platform team uses 2-week sprints with sprint planning, daily stand-ups, and sprint reviews.

Regional teams use predictive schedules for their implementation:
- Week 1-2: Requirements and configuration
- Week 3-4: Data migration
- Week 5-6: Training
- Week 7: Go-live and hypercare support

**Integration:**
Monthly program steering committee reviews progress:
- Is platform team on track to deliver features for next regional rollout?
- Are regional teams ready to start implementation?
- Any schedule risks requiring mitigation?

**Schedule Adjustment Example:**
Platform team falls behind schedule (Sprint 10 completed only 12 points instead of planned 18 points).

Impact: Features needed for Region 4-6 rollout may not be ready.

Options:
1. **Delay Region 4-6 rollout by 1 month** (adjust program schedule)
2. **Reduce scope for Region 4-6** (launch with basic features only, add mobile app later)
3. **Add resources to platform team** (crash to get back on schedule)

Program steering committee decides: Option 2 (reduce scope). Regions 4-6 launch with basic features; mobile app added in a subsequent update.

---

## Resource Constraints and Leveling

Schedules often assume unlimited resources. Reality: Resources are constrained.

### Resource Conflicts

**Example (Sarah's Office Renovation):**
Network diagram shows electrical work and HVAC installation can happen in parallel (no dependency).

But Sarah has only one facilities manager to oversee both. She can't supervise electrical and HVAC simultaneously.

**Resource constraint:** The facilities manager is a bottleneck.

**Solution:** Sequence electrical and HVAC work (remove parallelism), even though there's no technical dependency. Schedule extends by 3 weeks due to resource constraint.

### Resource Leveling

**Definition:** Adjusting the schedule to address resource over-allocation, often by delaying non-critical activities.

**Sarah's Expense System Example:**
Sprint planning shows 4 developers available for Sprint 6. But one developer has a pre-planned vacation (only 3 developers available).

**Resource leveling:** Reduce sprint scope from 18 points to 14 points (the amount 3 developers can complete).

**Impact:** Lower-priority stories deferred to Sprint 7.

### Resource Smoothing

**Definition:** Adjusting resource allocation without changing project completion date (only delaying activities with float).

**Difference from leveling:**
- **Leveling:** May extend project duration to resolve resource conflicts
- **Smoothing:** Does not extend project duration; only adjusts activities with float

**Example (Sarah's Office Renovation):**
Electrical work (non-critical) and Construction (critical) both need the general contractor's oversight in Week 10.

**Resource smoothing:** Delay electrical work by 1 week (using its float) so general contractor can focus on construction. Project completion date unchanged.

---

## Schedule Buffers and Contingency

Schedules are estimates, not guarantees. Buffers absorb uncertainty and protect project commitments.

### Types of Schedule Buffers

**1. Project Buffer (Predictive):**
Time added at the end of the critical path to protect the final delivery date.

**Sarah's Office Renovation:**
- Critical path: 22 weeks
- Project buffer: 2 weeks
- **Baseline commitment to stakeholders:** 24 weeks

If critical path activities run longer than estimated, the buffer is consumed before the delivery date is impacted.

**2. Feeding Buffer (Predictive):**
Time added where non-critical paths feed into the critical path, preventing non-critical delays from becoming critical.

**Example:**
Electrical work (non-critical) feeds into Network installation (non-critical), which must finish before Inspection (critical).

Sarah adds 3-day feeding buffer between Network and Inspection. If electrical or network work runs late, the buffer absorbs the delay before impacting the inspection date.

**3. Sprint Buffer (Agile):**
In sprint planning, teams often plan for slightly less than full capacity to absorb unexpected issues.

**Sarah's Expense System:**
Team velocity: 18 points per sprint
Team capacity in Sprint 7: 3 developers × 10 days = 30 developer-days

Instead of planning 18 points, Sarah's team plans 16 points, leaving a 2-point buffer for unexpected bugs, production support, or stories that are harder than expected.

### Contingency Reserve vs. Management Reserve

**Contingency Reserve:**
Time (or cost) set aside for **known risks** (risks identified and assessed).

**Example:** Sarah knows that building permits sometimes take longer than expected (known risk). She adds 1 week of contingency to the permit activity.

**Management Reserve:**
Time (or cost) set aside for **unknown unknowns** (risks that weren't identified).

**Example:** Sarah adds 1 week of management reserve to the overall project for unexpected issues (e.g., discovering asbestos during demolition, vendor bankruptcy).

**Key difference:**
- **Contingency** is part of the baseline (allocated to specific risks)
- **Management reserve** is outside the baseline (requires sponsor approval to use)

---

## Practical Examples

### Example 1: Critical Path Determines Schedule Acceleration Strategy

**Situation:** Sarah's office renovation baseline is 24 weeks. The sponsor asks if the project can finish in 20 weeks (4 weeks faster).

**Sarah's analysis:**

**Critical path:** Design (4 weeks) → Permit (3 weeks) → Demolition (2 weeks) → Construction (8 weeks) → HVAC (4 weeks) → Inspection (1 week) + Buffer (2 weeks) = 24 weeks

**Options for compression:**

**Option 1: Crash construction (critical path)**
- Hire second construction crew
- Reduces construction from 8 weeks to 6 weeks (saves 2 weeks)
- Cost: $30,000
- New schedule: 22 weeks

**Option 2: Fast track construction and HVAC (critical path)**
- Start HVAC installation before construction fully completes (work in different areas)
- Saves 2 weeks
- Risk: If construction reveals issues, HVAC may need rework
- Cost: $0, but increased coordination effort

**Option 3: Crash both construction and HVAC**
- Reduces construction to 6 weeks, HVAC to 3 weeks
- Saves 3 weeks
- Cost: $30,000 + $20,000 = $50,000
- New schedule: 21 weeks

**Option 4: Expedite permit (critical path)**
- Pay expedited permit fee
- Reduces permit from 3 weeks to 2 weeks (saves 1 week)
- Cost: $5,000
- Combined with Option 3: 20 weeks total

**Sarah's recommendation:** Option 4 (expedite permit + crash construction and HVAC). Cost: $55,000 to save 4 weeks. Acceptable risk.

**Rejected option:** Adding more electricians. Electrical work is NOT on critical path, so speeding it up doesn't shorten the project.

**Lesson:** Focus compression efforts on critical path activities.

---

### Example 2: Using Velocity to Negotiate Scope

**Situation:** Sarah's expense system has 3 sprints remaining (6 weeks). The backlog has 60 story points of work remaining. Team velocity is 18 points per sprint.

**Math:** 60 points ÷ 18 points per sprint = 3.3 sprints

**Problem:** Stakeholders want all 60 points completed in 3 sprints.

**Sarah's response:**
"Based on our velocity, we can complete approximately 54 points in 3 sprints (3 × 18 = 54). We need to prioritize."

**Options:**

**Option 1: Extend timeline**
Add 1 sprint (2 weeks) to complete all 60 points.

**Option 2: Reduce scope**
Prioritize top 54 points; defer 6 points to future release.

**Option 3: Increase team capacity**
Add a developer to increase velocity.

**Stakeholder decision:** Option 2 (reduce scope). Product owner works with stakeholders to identify lowest-value 6 points and defers them.

**Lesson:** In agile, velocity provides data for realistic planning. Time and capacity are fixed; scope varies to fit.

---

### Example 3: Resource Leveling Extends Schedule

**Situation:** Sarah's digital transformation program has a resource conflict. The data migration specialist is needed for:
- Region 4 data migration (Weeks 10-12)
- Region 5 data migration (Weeks 11-13)

These overlap by 2 weeks, but there's only one specialist.

**Resource leveling:**
Delay Region 5 data migration until Region 4 completes:
- Region 4: Weeks 10-12
- Region 5: Weeks 13-15 (delayed by 2 weeks)

**Impact:** Region 5 go-live delayed by 2 weeks.

**Alternative (Resource Smoothing):**
Train a second person to perform data migration, eliminating the bottleneck. Cost: 1 week of training time + reduced productivity during first migration.

**Sarah's decision:** Train second specialist. Short-term cost, but prevents future bottlenecks (6 more regions still need data migration).

**Lesson:** Resource constraints often drive schedule. Identifying and resolving bottlenecks early prevents delays.

---

## Summary

The schedule translates scope into time, showing when work will be completed and deliverables will be available.

**Key Takeaways:**

1. **Dependencies:** Mandatory (must), discretionary (preferred), external (outside control), internal (within project)

2. **Network diagrams:** Visualize sequence and dependencies; foundation for critical path analysis

3. **Critical path:** Longest sequence of dependent activities; determines minimum project duration; activities on critical path have zero float

4. **Predictive scheduling:** Comprehensive upfront planning, Gantt charts, baselined schedule, formal change control

5. **Schedule compression:** Crashing (add resources to critical path; increases cost) and fast tracking (parallel work; increases risk)

6. **Agile scheduling:** Timeboxed sprints, velocity-based planning, just-in-time sprint planning, adaptive

7. **Hybrid scheduling:** Program-level Gantt chart with milestones; team-level sprints and backlogs

8. **Resource constraints:** Resource leveling (may extend duration) and resource smoothing (uses float without extending duration)

9. **Buffers:** Project buffer (end of critical path), feeding buffer (non-critical to critical), sprint buffer (agile capacity), contingency (known risks), management reserve (unknowns)

**PMI Perspective:**
- Scheduling approach should match project context and stakeholder needs
- Predictive schedules provide upfront certainty but assume stability
- Agile schedules provide flexibility but less upfront commitment
- All schedules involve estimates and uncertainty; buffers protect commitments
- Critical path analysis focuses effort where it matters most

---

**Up Next:** Section 11d explores cost estimation and budgeting—translating scope and schedule into financial planning and control.
