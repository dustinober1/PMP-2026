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

## 🧮 Critical Path (Mini Example)
To find the critical path, compare the total duration of each path through the network:

- Path 1: A (3d) → B (4d) → C (2d) = **9 days**
- Path 2: A (3d) → D (6d) → C (2d) = **11 days**

The **critical path** is the longest path (**A → D → C**). Activities on the critical path typically have **0 total float**.

---

## 📈 Managing Float (Slack)
Float is the amount of time an activity can be delayed without affecting the end date.
*   **Total Float**: The "safety margin" for the overall project.
*   **Free Float**: The delay allowed before the *next* activity is affected.
*   **Negative Float**: A project manager's nightmare—it means the project is already late!

::: tip 💡 Quick Math
Total Float = **LS − ES** or **LF − EF**. If you need a formula refresher, see the Appendix: **Formulas & Definitions**.
:::

---

## 📅 Agile Scheduling: Cadence + Forecasting
In agile, time is often fixed and scope flexes:
- **Sprint cadence** creates a predictable rhythm (e.g., 2-week sprints).
- **Velocity** helps forecast future throughput (use it for planning, not for judging individuals/teams).
- **Release planning** focuses on a date + MVP scope; detailed scope emerges via refinement.

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
