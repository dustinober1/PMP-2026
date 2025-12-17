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

## 📈 Managing Float (Slack)
Float is the amount of time an activity can be delayed without affecting the end date.
*   **Total Float**: The "safety margin" for the overall project.
*   **Free Float**: The delay allowed before the *next* activity is affected.
*   **Negative Float**: A project manager's nightmare—it means the project is already late!

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
  <strong>📝 Exam Insight:</strong> If an exam scenario asks how to fix a delay with "no extra budget," choose <strong>Fast Tracking</strong>. If they say "the end date is firm and budget is available," choose <strong>Crashing</strong>.
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
