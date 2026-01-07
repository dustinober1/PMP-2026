
<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

**ECO Task**: Plan and manage schedule

Scheduling is the "Pulse" of the project. It defines the sequence of activities and the timeline for delivery.

---

##  Building the Timeline
Modern scheduling requires a balance between mathematical precision and human flexibility.

<ConceptGrid>
  <ConceptCard 
    title="Critical Path Method"
    subtitle="The Math"
  >
    Finding the longest sequence of tasks with <strong>Zero Float</strong>. This determines the earliest project finish date.
  </ConceptCard>
  <ConceptCard 
    title="Agile Cadence"
    subtitle="The Rhythm"
  >
    Using fixed-length <strong>Sprints</strong> and <strong>Releases</strong> to create a predictable flow of value.
  </ConceptCard>
  <ConceptCard 
    title="Lead and Lag"
    subtitle="The Nuance"
  >
    <strong>Lead</strong>: Accelerating a task. <strong>Lag</strong>: Adding mandatory wait time (e.g., waiting for paint to dry).
  </ConceptCard>
</ConceptGrid>

---

##  The Predictive Schedule Flow (In Order)

### Step 1: Plan Schedule Management
**Purpose**: Defines how the schedule will be developed, approved, and controlled
**Key Outputs**:
- Schedule Management Plan (methodology, tools, policies)
- Schedule model approach (Gantt, network, milestone chart)

### Step 2: Define Activities
**Purpose**: Turns WBS work packages into a detailed activity list
**Key Outputs**:
- Activity list (work to schedule)
- Activity attributes (constraints, predecessors, resources)
- Milestone list (significant events)

### Step 3: Sequence Activities
**Purpose**: Defines dependencies and builds the network logic
**Key Outputs**:
- Project schedule network diagram
- Updated activity attributes

### Step 4: Estimate Activity Durations
**Purpose**: Produces realistic activity durations
**Key Outputs**:
- Duration estimates (with ranges)
- Basis of estimates (assumptions, data sources)

### Step 5: Develop Schedule
**Purpose**: Creates the schedule model
**Key Outputs**:
- Schedule model (network + durations + resources)
- Schedule baseline (when approved)
- Project schedule (Gantt, milestone chart)

---

##  Dependencies (Precedence Diagramming Method)

Most exam questions use these dependency types:

| Type | Name | Meaning | Memory Aid | Example |
|:-----|:-----|:--------|:-----------|:--------|
| **FS** | Finish-to-Start | B starts after A finishes | Most common (default) | Test after coding |
| **SS** | Start-to-Start | B starts after A starts | Start together | Write docs while building |
| **FF** | Finish-to-Finish | B finishes after A finishes | Finish together | QA finishes when dev finishes |
| **SF** | Start-to-Finish | B finishes after A starts | Rare (shift handoff) | Night shift ends when day shift starts |

### Dependency Classification

| Type | Definition | Can You Change It? |
|:-----|:-----------|:-------------------|
| **Mandatory (Hard Logic)** | Inherent in the nature of work | No |
| **Discretionary (Soft Logic)** | Preferred sequence, best practice | Yes, if needed |
| **External** | Driven by outside factors | Negotiate with external parties |
| **Internal** | Within project team's control | Yes, PM has authority |

::: tip  Lead vs. Lag
**Lead** accelerates a successor (e.g., FS with -2 days means successor starts 2 days before predecessor finishes).
**Lag** adds wait time (e.g., paint must dry for 2 days before next coat).
:::

---

##  Critical Path Method (CPM): Complete Calculation

The Critical Path Method identifies the longest path through the network—the minimum time to complete the project.

### CPM Terminology

| Term | Definition |
|:-----|:-----------|
| **ES (Early Start)** | Earliest an activity can start |
| **EF (Early Finish)** | Earliest an activity can finish (ES + Duration) |
| **LS (Late Start)** | Latest an activity can start without delaying the project |
| **LF (Late Finish)** | Latest an activity can finish without delaying the project |
| **Total Float** | Time an activity can slip without delaying project end (LS - ES) |
| **Free Float** | Time an activity can slip without delaying next activity (ES_next - EF_current) |
| **Critical Path** | Longest path through network (activities with zero float) |

### Step-by-Step CPM Example

<ConceptCard title="Given Network: Visual Representation" variant="secondary">
<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 20px;">
<div style="background: var(--vp-c-brand); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;">A (3d)</div>
<div style="display: flex; gap: 100px; width: 100%; justify-content: center;">
<div style="font-size: 20px;">↙</div>
<div style="font-size: 20px;">↘</div>
</div>
<div style="display: flex; gap: 50px; justify-content: center; align-items: flex-start;">
<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
<div style="background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-brand); padding: 8px 16px; border-radius: 4px;">B (4d)</div>
</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
<div style="background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-brand); padding: 8px 16px; border-radius: 4px;">C (5d)</div>
<div style="font-size: 20px;">↓</div>
<div style="background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-brand); padding: 8px 16px; border-radius: 4px;">D (3d)</div>
</div>
</div>
<div style="display: flex; gap: 100px; width: 100%; justify-content: center;">
<div style="font-size: 20px;">↘</div>
<div style="font-size: 20px;">↙</div>
</div>
<div style="background: var(--vp-c-brand); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;">E (2d)</div>
</div>
<p style="text-align: center; font-size: 0.9em; margin-top: 10px;">
<strong>Logic:</strong> A finishes (Day 3). Then B and C start. <br>
B finishes Day 7. C finishes Day 8, then D starts. D finishes Day 11. <br>
E waits for both B (Day 7) and D (Day 11), so E starts Day 11.
</p>
</ConceptCard>

**Step 1: Forward Pass (Calculate Early Start and Early Finish)**

| Activity | Duration | ES | EF = ES + Duration |
|:---------|:---------|:---|:-------------------|
| A | 3d | 0 | 3 |
| B | 4d | 3 | 7 |
| C | 5d | 3 | 8 |
| D | 3d | 8 | 11 |
| E | 2d | max(7, 11) = 11 | 13 |

**Rule**: If an activity has multiple predecessors, ES = maximum EF of all predecessors.

**Step 2: Backward Pass (Calculate Late Finish and Late Start)**

Starting from the end, work backward:

| Activity | Duration | LF | LS = LF − Duration |
|:---------|:---------|:---|:-------------------|
| E | 2d | 13 | 11 |
| D | 3d | 11 | 8 |
| B | 4d | 11 | 7 |
| C | 5d | 8 | 3 |
| A | 3d | min(7, 3) = 3 | 0 |

**Rule**: If an activity has multiple successors, LF = minimum LS of all successors.

**Step 3: Calculate Float**

| Activity | ES | EF | LS | LF | Total Float = LS − ES | Free Float |
|:---------|:---|:---|:---|:---|:---------------------|:-----------|
| A | 0 | 3 | 0 | 3 | **0** | 0 |
| B | 3 | 7 | 7 | 11 | 4 | 4 |
| C | 3 | 8 | 3 | 8 | **0** | 0 |
| D | 8 | 11 | 8 | 11 | **0** | 0 |
| E | 11 | 13 | 11 | 13 | **0** | 0 |

**Critical Path**: Activities with **0 total float** = **A → C → D → E** (13 days total)

**Project Duration**: 13 days (the EF of the last activity)

### CPM Practice Problem

<strong>Network:</strong>
<ConceptCard title="Practice Network Diagram" variant="secondary">
<div style="display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 20px;">
<div style="background: var(--vp-c-brand); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;">Start</div>
<div style="font-size: 20px;">↓</div>
<div style="background: var(--vp-c-brand); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;">X (4d)</div>
<div style="display: flex; gap: 100px; width: 100%; justify-content: center;">
<div style="font-size: 20px;">↙</div>
<div style="font-size: 20px;">↘</div>
</div>
<div style="display: flex; gap: 50px; justify-content: center; align-items: flex-start;">
<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
<div style="background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-brand); padding: 8px 16px; border-radius: 4px;">Y (6d)</div>
</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
<div style="background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-brand); padding: 8px 16px; border-radius: 4px;">Z (8d)</div>
</div>
</div>
<div style="display: flex; gap: 100px; width: 100%; justify-content: center;">
<div style="font-size: 20px;">↘</div>
<div style="font-size: 20px;">↙</div>
</div>
<div style="background: var(--vp-c-brand); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;">End</div>
</div>
</ConceptCard>

<strong>Calculate:</strong>
1. Early/Late dates for each activity
2. Total float for each activity
3. Critical path
4. Project duration

<details>
<summary>Click to reveal solution</summary>

<strong>Forward Pass:</strong>
- X: ES=0, EF=4
- Y: ES=4, EF=10
- Z: ES=4, EF=12

<strong>Merge at End:</strong> Project duration = max(10, 12) = 12 days

<strong>Backward Pass:</strong>
- Y: LF=12, LS=6
- Z: LF=12, LS=4
- X: LF=min(6, 4)=4, LS=0

<strong>Float:</strong>
- X: LS-ES = 0-0 = **0** (Critical)
- Y: LS-ES = 6-4 = 2 (Has float)
- Z: LS-ES = 4-4 = **0** (Critical)

**Critical Path**: X → Z (12 days)

</details>

---

##  Managing Float (Slack)

Float is the amount of time an activity can be delayed without affecting the end date or successor activities.

### Types of Float

| Float Type | Formula | Meaning |
|:-----------|:--------|:--------|
| **Total Float** | LS − ES (or LF − EF) | Time to slip without delaying project |
| **Free Float** | ES(successor) − EF(current) | Time to slip without delaying next activity |
| **Project Float** | Contract deadline − Earliest finish | Buffer before deadline hit |

### Float Interpretation

| Float Value | Interpretation | Action |
|:------------|:---------------|:-------|
| **Zero (0)** | Critical path activity | Monitor closely, no flexibility |
| **Positive (>0)** | Has flexibility | Can use for resource leveling |
| **Negative (<0)** | Project already late | Requires compression or scope change |

::: tip  Quick Math Reference
- **Total Float = LS − ES** or **LF − EF**
- **Free Float = ES(next) − EF(current)**
- **Negative Float** signals the project must finish earlier than the network allows (sponsor imposed deadline before natural completion)
:::

---

##  Duration Estimation Techniques

### Estimation Methods Comparison

| Technique | Description | Accuracy | When to Use |
|:----------|:------------|:---------|:------------|
| **Analogous** | Based on similar past projects | ±35% | Early planning, limited data |
| **Parametric** | Mathematical model (units × rate) | ±15% | Historical data available |
| **Bottom-Up** | Detailed task-level estimates | ±10% | Execution planning |
| **Three-Point (PERT)** | Pessimistic/Most Likely/Optimistic | Risk-adjusted | Uncertainty is high |

<ConceptGrid>
  <ConceptCard title="PERT (Beta Distribution)" subtitle="Weighted Average">
    <strong>Expected Duration (tₑ) = (O + 4M + P) / 6</strong>
    <p style="font-size: 0.9em; margin-top: 8px;">Gives more weight to the "Most Likely" estimate. Most common on the exam.</p>
  </ConceptCard>
  <ConceptCard title="Triangular Distribution" subtitle="Simple Average">
    <strong>Expected Duration = (O + M + P) / 3</strong>
    <p style="font-size: 0.9em; margin-top: 8px;">A simple average of all three points. Used when less data is available.</p>
  </ConceptCard>
</ConceptGrid>

Where:
- **O** = Optimistic (best case, ~10% probability)
- **M** = Most Likely (most realistic estimate)
- **P** = Pessimistic (worst case, ~10% probability)

<ConceptGrid>
  <ConceptCard title="Standard Deviation (σ)" subtitle="Measuring Risk">
    <strong>σ = (P − O) / 6</strong>
    <p style="font-size: 0.9em; margin-top: 8px;">Measures the uncertainty or risk in the estimate. A larger σ means higher risk.</p>
  </ConceptCard>
  <ConceptCard title="Variance" subtitle="Spread of Data">
    <strong>Variance = σ² = [(P − O) / 6]²</strong>
    <p style="font-size: 0.9em; margin-top: 8px;">Used for calculating total project uncertainty across multiple activities.</p>
  </ConceptCard>
</ConceptGrid>

<ConceptCard title="PERT Calculation Walkthrough" variant="secondary">
  <div style="padding: 10px;">
    <strong>Activity: Database Migration</strong>
    <ul style="margin: 10px 0;">
      <li><strong>Optimistic (O):</strong> 5 days</li>
      <li><strong>Most Likely (M):</strong> 8 days</li>
      <li><strong>Pessimistic (P):</strong> 17 days</li>
    </ul>
    <hr style="margin: 10px 0; border: 0; border-top: 1px solid var(--vp-c-divider);" />
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div>
        <strong>1. Expected Duration:</strong><br/>
        tₑ = (5 + 4×8 + 17) / 6 = 54 / 6 = <strong>9 days</strong>
      </div>
      <div>
        <strong>2. Standard Deviation:</strong><br/>
        σ = (17 − 5) / 6 = 12 / 6 = <strong>2 days</strong>
      </div>
      <div>
        <strong>3. Confidence Intervals:</strong><br/>
        • 68% Confidence: 9 ± 2 (7-11 days)<br/>
        • 95% Confidence: 9 ± 4 (5-13 days)<br/>
        • 99.7% Confidence: 9 ± 6 (3-15 days)
      </div>
    </div>
  </div>
</ConceptCard>

<ConceptCard title="Aggregating Project Uncertainty" variant="warning">
  <p>When calculating uncertainty for the entire critical path, <strong>Standard Deviations cannot be summed directly</strong>. You must sum the variances and then take the square root.</p>
  <div style="background: var(--vp-c-bg-soft); padding: 15px; border-radius: 8px; margin-top: 10px; font-family: monospace;">
    σ_project = √(σ₁² + σ₂² + σ₃² + ... + σₙ²)
  </div>
  <div style="margin-top: 15px;">
    <strong>Example:</strong> Critical path has 4 activities with σ = 1, 2, 1.5, 2.5 days.<br/>
    σ_project = √(1² + 2² + 1.5² + 2.5²) = √(1 + 4 + 2.25 + 6.25) = <strong>3.67 days</strong>
  </div>
</ConceptCard>

::: tip Exam Tip
The PMP exam typically uses **PERT (weighted)** unless explicitly stated otherwise. If you see "(O + 4M + P) / 6," it's PERT. If you see "(O + M + P) / 3," it's Triangular.
:::

---

##  Rolling Wave Planning

Planning is an iterative process. You don't need to plan the entire project in detail on Day 1.

### Levels of Planning Detail

| Timeframe | Detail Level | Element |
|:----------|:-------------|:--------|
| **Near-term (0-4 weeks)** | High detail | Work packages, specific activities |
| **Medium-term (1-3 months)** | Moderate detail | Work packages, estimated activities |
| **Long-term (3+ months)** | Low detail | Planning packages (placeholders) |

<strong>Example:</strong>
- **Sprint 1-2**: Activities decomposed to individual tasks (8-16 hour estimates)
- **Sprint 3-4**: Planned as work packages (40-80 hour estimates)
- **Sprint 5-6**: Planned as planning packages (high-level epics, not yet decomposed)

### Progressive Elaboration Benefits

1. **Reduced Rework**: Don't waste time on detailed plans that may change
2. **Better Accuracy**: More information available for near-term work
3. **Flexibility**: Adapt to changes without massive re-planning
4. **Focus**: Team concentrates on executable work

---

##  Visualizing the Schedule

Different stakeholders need different views:

| View | Shows | Best For | Detail Level |
|:-----|:------|:---------|:-------------|
| **Milestone Chart** | Major events/dates only | Senior Management | Very High Level |
| **Bar Chart (Gantt)** | Activities with start/end dates | Team tracking | Medium Detail |
| **Network Diagram** | Dependencies and workflow | PM analysis (Critical Path) | High Detail |

### Schedule Presentation by Audience

| Audience | What They Care About | Format |
|:---------|:--------------------|:-------|
| **Sponsor/Executive** | Key dates, milestones, on-track status | Milestone chart, summary Gantt |
| **Customer** | Delivery dates, major features | Feature roadmap, release schedule |
| **Project Team** | Daily work, dependencies | Detailed Gantt, sprint board |
| **Resource Managers** | Resource allocation, availability | Resource histogram |

---

##  Agile Scheduling: Cadence + Forecasting

In agile, time is often fixed and scope flexes:

### Agile Scheduling Principles

| Principle | Description |
|:----------|:------------|
| **Fixed Cadence** | Sprints are timeboxed (e.g., 2 weeks) |
| **Flexible Scope** | What gets done within the timebox may vary |
| **Velocity-Based** | Historical data forecasts future throughput |
| **Release Planning** | Multiple sprints combine into releases |

<ConceptGrid>
  <ConceptCard title="Velocity" subtitle="Agile Throughput">
    The average number of <strong>Story Points</strong> a team completes per sprint.
    <div style="margin-top: 10px; padding: 10px; background: var(--vp-c-bg-soft); border-radius: 4px; text-align: center;">
      <strong>Historical Average</strong>
    </div>
  </ConceptCard>
  <ConceptCard title="Release Forecasting" subtitle="Predicting Completion">
    Calculating how many sprints are needed to finish the backlog.
    <div style="margin-top: 10px; padding: 10px; background: var(--vp-c-bg-soft); border-radius: 4px; text-align: center;">
      <strong>Sprints Required = Backlog Points / Velocity</strong>
    </div>
  </ConceptCard>
</ConceptGrid>

<ConceptCard title="Forecasting Example" variant="secondary">
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div>• <strong>Backlog:</strong> 120 story points</div>
    <div>• <strong>Average Velocity:</strong> 20 points/sprint</div>
    <div>• <strong>Sprints Needed:</strong> 120 / 20 = <strong>6 sprints</strong></div>
    <div>• <strong>Timeline (2-week sprints):</strong> 12 weeks total</div>
  </div>
</ConceptCard>

::: warning  Velocity Guidelines
- Use velocity for planning, not for judging individuals/teams
- Track team velocity, not individual velocity
- Expect variance; use ranges not single numbers
- Re-baseline velocity after significant team changes
:::

### Agile Release Planning

Agile release planning provides a high-level summary timeline of the release schedule (typically 3-6 months) based on the product roadmap and the product vision.

| Level | Scope | Timeframe |
|:------|:------|:----------|
| **Product Roadmap** | Strategic direction, major themes | 1-3 years |
| **Release Plan** | Features expected in next release | 3-6 months |
| **Sprint Plan** | Stories for current sprint | 1-4 weeks |
| **Daily Plan** | Today's work | 1 day |

---

##  Schedule Compression

When you are behind, you have two primary levers:

### Compression Techniques Comparison

| Technique | How It Works | Cost Impact | Risk Impact | When to Use |
|:----------|:-------------|:------------|:------------|:------------|
| **Crashing** | Add resources to critical path | ↑ Increases | ↑ Moderate increase | Budget available, time critical |
| **Fast Tracking** | Overlap sequential tasks | → No direct cost | ↑↑ High increase (rework) | No budget, accept rework risk |

### Crashing Decision Process

<ConceptCard title="Crashing Step-by-Step" variant="secondary">
  <ol>
    <li>Identify <strong>Critical Path</strong> activities.</li>
    <li>Calculate <strong>Cost Slope</strong> for each: (Crash Cost - Normal Cost) / (Normal Duration - Crash Duration).</li>
    <li>Crash the activity with the <strong>lowest cost slope</strong> first.</li>
    <li>Recalculate the critical path (it may shift!).</li>
    <li>Repeat until target date is met or budget is exhausted.</li>
  </ol>
</ConceptCard>

<ConceptCard title="Example: Cost Slope Calculation">
  | Activity | Normal | Crash | Cost Slope |
  |:---------|:-------|:------|:-----------|
  | Activity A | 10d, $5k | 7d, $8k | <strong>$1k/day</strong> |
  | Activity B | 8d, $4k | 6d, $7k | $1.5k/day |
  | Activity C | 12d, $6k | 10d, $9k | $1.5k/day |
  <p style="margin-top: 10px; font-style: italic;"><strong>Decision:</strong> Crash <strong>Activity A</strong> first because it has the lowest cost impact per day saved.</p>
</ConceptCard>

### Fast Tracking Considerations

- Works best for activities that are mostly independent
- Highest risk when activities share resources
- Consider partial overlap (not full parallel)
- Plan for rework iterations

---

##  Resource Optimization

### Resource Leveling vs. Resource Smoothing

| Aspect | Resource Leveling | Resource Smoothing |
|:-------|:------------------|:-------------------|
| **Goal** | Eliminate overallocation | Optimize utilization |
| **End Date** | Usually extends | Does not change |
| **Uses Float** | May consume or create | Uses only available float |
| **When to Use** | Resources are the constraint | Date is the constraint |

### Resource Leveling Process

1. Identify overallocated resources
2. Delay non-critical activities using float
3. If float consumed, delay critical activities (extends project)
4. May also assign alternative resources
5. Re-baseline schedule if end date changes

### Resource Histogram

A resource histogram shows resource allocation over time:

<ConceptCard title="Resource Histogram">
<div style="display: flex; align-items: flex-end; gap: 15px; height: 200px; padding: 20px; border-left: 2px solid var(--vp-c-text-2); border-bottom: 2px solid var(--vp-c-text-2);">
<div style="display: flex; flex-direction: column; align-items: center; width: 25%;">
<div style="width: 100%; height: 50%; background: var(--vp-c-brand); border-radius: 4px 4px 0 0;"></div>
<div style="margin-top: 10px; font-size: 0.9em;">Week 1</div>
</div>
<div style="display: flex; flex-direction: column; align-items: center; width: 25%;">
<div style="width: 100%; height: 100%; background: var(--vp-c-danger); opacity: 0.8; border-radius: 4px 4px 0 0;"></div>
<div style="margin-top: 10px; font-size: 0.9em;">Week 2</div>
</div>
<div style="display: flex; flex-direction: column; align-items: center; width: 25%;">
<div style="width: 100%; height: 100%; background: var(--vp-c-danger); opacity: 0.8; border-radius: 4px 4px 0 0;"></div>
<div style="margin-top: 10px; font-size: 0.9em;">Week 3</div>
</div>
<div style="display: flex; flex-direction: column; align-items: center; width: 25%;">
<div style="width: 100%; height: 60%; background: var(--vp-c-brand); border-radius: 4px 4px 0 0;"></div>
<div style="margin-top: 10px; font-size: 0.9em;">Week 4</div>
</div>
</div>
<div style="text-align: center; margin-top: 10px; font-style: italic; color: var(--vp-c-text-2);">
Bars showing resource allocation per week. Red indicates overallocation (>100% capacity).
</div>
</ConceptCard>

Use histograms to identify:
- Over-allocation (peaks above capacity)
- Under-utilization (valleys below optimal)
- Resource bottlenecks

---

##  Schedule Network Analysis Techniques

### Critical Chain Method (CCM)

Unlike CPM which focuses on task dependencies, CCM considers **resource constraints** and uses **buffers**.

| Buffer Type | Purpose | Placement |
|:------------|:--------|:----------|
| **Project Buffer** | Protects end date | End of critical chain |
| **Feeding Buffer** | Protects critical chain from non-critical delays | Where non-critical feeds into critical |
| **Resource Buffer** | Alerts resources to upcoming work | Before critical tasks needing specific resources |

### What-If Scenario Analysis

Test schedule sensitivity by varying:
- Activity durations (±20%)
- Resource availability
- Dependency assumptions
- External constraints

### Monte Carlo Simulation

For complex projects, use simulation to:
- Generate probability distributions for project completion
- Identify most likely finish date ranges
- Quantify schedule risk
- Support contingency reserve calculations

---

##  Schedule Management Artifacts

### Key Schedule Documents

| Document | Purpose | Update Frequency |
|:---------|:--------|:-----------------|
| **Schedule Management Plan** | How schedule will be managed | Major phase changes |
| **Activity List** | All activities to be scheduled | As WBS/scope changes |
| **Activity Attributes** | Details about each activity | As activities are refined |
| **Milestone List** | Significant events | As milestones added/changed |
| **Network Diagram** | Dependencies and logic | When logic changes |
| **Schedule Baseline** | Approved schedule for comparison | Through change control only |
| **Project Schedule** | Current working schedule | Regular updates |

---

<ConceptGrid>
  <ConceptCard title="Scenario 1: No Extra Budget" variant="warning">
    <strong>Situation:</strong> Project is 3 weeks behind. No extra budget is available.<br/>
    <strong>Answer:</strong> <strong>Fast Track</strong>. Overlap activities on the critical path. Accept the risk of rework.
  </ConceptCard>
  <ConceptCard title="Scenario 2: Firm Date + Budget" variant="secondary">
    <strong>Situation:</strong> Hard deadline. Budget is available. Must recover time.<br/>
    <strong>Answer:</strong> <strong>Crash</strong>. Add resources to critical path activities with the lowest cost slope.
  </ConceptCard>
  <ConceptCard title="Scenario 3: Resource Overallocation">
    <strong>Situation:</strong> Key dev is scheduled 60hrs/week. No new hires allowed.<br/>
    <strong>Answer:</strong> <strong>Resource Leveling</strong>. Delay non-critical tasks using float. Date may slip.
  </ConceptCard>
  <ConceptCard title="Scenario 4: High Schedule Risk">
    <strong>Situation:</strong> Which activity poses the greatest risk to the timeline?<br/>
    <strong>Answer:</strong> Any activity on the <strong>Critical Path</strong> with high duration uncertainty.
  </ConceptCard>
  <ConceptCard title="Scenario 5: Interpreting Float">
    <strong>Situation:</strong> Task X has 5 days of Total Float. What does this mean?<br/>
    <strong>Answer:</strong> It can slip 5 days without delaying the project. It is <strong>not</strong> on the critical path.
  </ConceptCard>
</ConceptGrid>

::: info  2026 Focus: AI in Estimation
In 2026, PMs use **AI-Augmented Estimation** to analyze historical performance and identify "True" task durations. However, the PM must still facilitate **Bottom-Up Estimation** with the team to ensure buy-in and accuracy.
:::

---

##  Key Formulas & Quick Reference

### Schedule Formulas

| Formula | Purpose |
|:--------|:--------|
| **EF = ES + Duration** | Calculate early finish |
| **LS = LF - Duration** | Calculate late start |
| **Total Float = LS - ES** | Calculate total float |
| **Free Float = ES(next) - EF(current)** | Calculate free float |
| **PERT = (O + 4M + P) / 6** | Weighted average duration |
| **σ = (P - O) / 6** | Standard deviation |
| **σ_project = √Σσ²** | Project standard deviation |

### Quick Decision Guide

| Situation | Solution |
|:----------|:---------|
| Behind schedule, no budget | Fast Track |
| Behind schedule, budget available | Crash |
| Resource overallocated, date fixed | Resource Smoothing |
| Resource overallocated, date flexible | Resource Leveling |
| Uncertain duration | Three-Point Estimate |
| Long-term work not detailed | Rolling Wave Planning |


## Quick Review

<FlashcardCarousel :cards="[
  { front: `What is the Critical Path?`, back: `The longest sequence of activities in a project network, representing the shortest possible project duration.` },
  { front: `What is Total Float?`, back: `The amount of time an activity can be delayed without delaying the project finish date.` },
  { front: `Crashing vs. Fast Tracking?`, back: `Crashing = Adding resources (increases cost). Fast Tracking = Overlapping sequential tasks (increases risk of rework).` },
  { front: `Lead vs. Lag?`, back: `Lead = Acceleration a successor starts before predecessor ends. Lag = Mandatory wait time between tasks.` },
  { front: `Resource Leveling vs. Smoothing?`, back: `Leveling = Date flexes to fix overallocation. Smoothing = Resource use balanced within available float (date fixed).` },
  { front: `What is the PERT formula?`, back: `Expected Duration = (Optimistic + 4×Most Likely + Pessimistic) / 6. Standard Deviation = (P-O)/6.` },
  { front: `What are the four dependency types?`, back: `FS (Finish-to-Start), SS (Start-to-Start), FF (Finish-to-Finish), and SF (Start-to-Finish).` },
  { front: `What is Mandatory vs. Discretionary dependency?`, back: `Mandatory = Hard logic, physically required. Discretionary = Soft logic, preferred sequence or best practice.` },
  { front: `What is Velocity in Agile?`, back: `Story points completed per sprint - used to forecast how many sprints to complete the backlog.` },
  { front: `What does negative float indicate?`, back: `The project must finish earlier than the network allows - requires compression or scope change.` }
]" />

::: tip  Exam Insight
If an exam scenario asks how to fix a delay with "no extra budget," choose **Fast Tracking**. If they say "the end date is firm and budget is available," choose **Crashing**. If the schedule must be updated because resources are overallocated, think **Resource Leveling** (usually delays the project) or **Resource Smoothing** (uses float; does not change the finish date).
:::

