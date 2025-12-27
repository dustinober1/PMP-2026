# 6.2 Schedule Planning

Scheduling is the "Pulse" of the project. It defines the sequence of activities and the timeline for delivery.

---

## 🏗️ Building the Timeline
Modern scheduling requires a balance between mathematical precision and human flexibility.

<div class="schedule-grid">
  <div class="schedule-card">
    <div class="schedule-title">Critical Path Method</div>
    <div class="schedule-subtitle">The Math</div>
    <p>Finding the longest sequence of tasks with <strong>Zero Float</strong>. This determines the earliest project finish date.</p>
  </div>
  <div class="schedule-card">
    <div class="schedule-title">Agile Cadence</div>
    <div class="schedule-subtitle">The Rhythm</div>
    <p>Using fixed-length <strong>Sprints</strong> and <strong>Releases</strong> to create a predictable flow of value.</p>
  </div>
  <div class="schedule-card">
    <div class="schedule-title">Lead & Lag</div>
    <div class="schedule-subtitle">The Nuance</div>
    <p><strong>Lead</strong>: Accelerating a task. <strong>Lag</strong>: Adding mandatory wait time (e.g., waiting for paint to dry).</p>
  </div>
</div>

---

## 🧭 The Predictive Schedule Flow (In Order)
1.  **Plan Schedule Management**: Defines how the schedule will be developed, approved, and controlled.
2.  **Define Activities**: Turns WBS work packages into a detailed **activity list** (the work to schedule).
3.  **Sequence Activities**: Defines dependencies and builds the network logic.
4.  **Estimate Durations**: Produces realistic activity durations (often with three-point/PERT).
5.  **Develop Schedule**: Creates the schedule model and (when approved) the **Schedule Baseline**.

---

## 🔗 Dependencies (Precedence Diagramming Method)
Most exam questions use these dependency types:

| Type | Name | Meaning | Example |
| :--- | :--- | :------ | :------ |
| FS | Finish-to-Start | B starts after A finishes | Test after coding |
| SS | Start-to-Start | B starts after A starts | Write docs while building |
| FF | Finish-to-Finish | B finishes after A finishes | QA finishes when dev finishes |
| SF | Start-to-Finish | B finishes after A starts | Rare (shift handoff) |

::: tip 💡 Lead vs. Lag
**Lead** accelerates a successor (e.g., FS with -2 days). **Lag** adds wait time (e.g., paint must dry for 2 days).
:::

---

## 🧮 Critical Path Method (CPM): Complete Calculation

### Step-by-Step CPM Example

**Given Network:**
```
Start → A(3d) → B(4d) → E(2d) → End
          ↓
        C(5d) → D(3d) ↗
```

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

---

## 📈 Managing Float (Slack)

Float is the amount of time an activity can be delayed without affecting the end date or successor activities.

**Total Float** = LS − ES (or LF − EF)
- Time an activity can slip without delaying project finish
- Activities on the critical path have 0 total float

**Free Float** = ES(successor) − EF(current)
- Time an activity can slip without delaying its immediate successor
- More restrictive than total float

**Negative Float** = When LS < ES
- Project is already behind schedule
- Requires crashing, fast tracking, or formal schedule change

::: tip 💡 Quick Math Reference
- **Total Float = LS − ES** or **LF − EF**
- **Free Float = ES(next) − EF(current)**
- **Negative Float** signals the project must finish earlier than the network allows (sponsor imposed deadline before natural completion)
:::

---

## 📊 Duration Estimation: PERT Three-Point

When uncertainty is high, use **Three-Point Estimation** (PERT) to incorporate optimistic, pessimistic, and most likely scenarios:

**PERT Formula:**
```
Expected Duration (tₑ) = (O + 4M + P) / 6
```

Where:
- **O** = Optimistic (best case, ~10% probability)
- **M** = Most Likely (most realistic estimate)
- **P** = Pessimistic (worst case, ~10% probability)

**Standard Deviation (σ):**
```
σ = (P − O) / 6
```

This measures the uncertainty/risk in the estimate.

### PERT Worked Example

**Activity: Database Migration**
- Optimistic: 5 days (everything goes perfectly)
- Most Likely: 8 days (realistic estimate)
- Pessimistic: 17 days (major compatibility issues discovered)

**Calculate Expected Duration:**
```
tₑ = (5 + 4×8 + 17) / 6
tₑ = (5 + 32 + 17) / 6
tₑ = 54 / 6 = 9 days
```

**Calculate Standard Deviation:**
```
σ = (17 − 5) / 6 = 12 / 6 = 2 days
```

**Interpretation:**
- Use **9 days** for schedule planning
- There's approximately **68% confidence** the task will finish between 7-11 days (±1σ)
- There's approximately **95% confidence** it will finish between 5-13 days (±2σ)

### Triangular Distribution (Simpler Alternative)

Some organizations use simple averaging:
```
Expected Duration = (O + M + P) / 3
```

This gives equal weight to all three estimates (PERT emphasizes Most Likely 4×).

**Same Example Using Triangular:**
```
tₑ = (5 + 8 + 17) / 3 = 30 / 3 = 10 days
```

::: tip 💡 Exam Tip
The PMP exam typically uses **PERT (weighted)** unless explicitly stated otherwise. If you see "(O + 4M + P) / 6," it's PERT. If you see "(O + M + P) / 3," it's Triangular.
:::

---

## 🌊 Rolling Wave Planning

Planning is an iterative process. You don't need to plan the entire project in detail on Day 1.
- **Near-term work**: Planned in detail (Work Packages).
- **Future work**: Planned at a high level (Planning Packages).
As the project progresses, future work is "rolled" into detail. This is a form of **Progressive Elaboration**.

**Example:**
- **Sprint 1-2**: Activities decomposed to individual tasks (8-16 hour estimates)
- **Sprint 3-4**: Planned as work packages (40-80 hour estimates)
- **Sprint 5-6**: Planned as planning packages (high-level epics, not yet decomposed)

---

## 📊 Visualizing the Schedule
Different stakeholders need different views:
- **Milestone Chart**: Shows only major events/deliverables (Start/Finish dates). Best for **Senior Management**.
- **Bar Chart (Gantt)**: Shows activities with start/end dates and durations. Best for **Team tracking**.
- **Project Schedule Network Diagram**: Shows dependencies and workflow logic. Best for **Project Manager analysis** (Critical Path).

---

## 📅 Agile Scheduling: Cadence + Forecasting
In agile, time is often fixed and scope flexes:
- **Sprint cadence** creates a predictable rhythm (e.g., 2-week sprints).
- **Velocity** helps forecast future throughput (use it for planning, not for judging individuals/teams).
- **Release planning** focuses on a date + MVP scope; detailed scope emerges via refinement.

### Agile Release Planning
Agile release planning provides a high-level summary timeline of the release schedule (typically 3-6 months) based on the product roadmap and the product vision.
- Determines the number of iterations required to complete a release.
- **Roadmap**: Shows the "Big Picture" sequence of releases.
- **Release Plan**: Shows the features expected in the next release.
- **Iteration Plan**: Shows the tasks for the current 2-4 week cycle.

---

## 🏎️ Schedule Compression
When you are behind, you have two primary levers:
1.  **Crashing**: Adding resources to critical path tasks. (Increases cost, increases risk).
2.  **Fast Tracking**: Performing sequential tasks in parallel. (No immediate cost, increases risk of rework).

::: info 🛠️ 2026 Focus: AI in Estimation
In 2026, PMs use **AI-Augmented Estimation** to analyze historical performance and identify "True" task durations. However, the PM must still facilitate **Bottom-Up Estimation** with the team to ensure buy-in and accuracy.
:::

<style>
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.schedule-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.schedule-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.25rem;
}

.schedule-subtitle {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.schedule-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If an exam scenario asks how to fix a delay with "no extra budget," choose <strong>Fast Tracking</strong>. If they say "the end date is firm and budget is available," choose <strong>Crashing</strong>. If the schedule must be updated because resources are overallocated, think <strong>Resource Leveling</strong> (usually delays the project) or <strong>Resource Smoothing</strong> (uses float; does not change the finish date).
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
