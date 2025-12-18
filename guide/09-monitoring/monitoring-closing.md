# 9.1 Control & Change Management

Monitoring is about **observing** performance; Controlling is about **taking action** when performance deviates from the plan. In 2026, the Project Manager must balance data-driven insights with proactive leadership to maintain the project's "Integrity."

---

## 🏎️ Performance Indicators (EVM)
Earned Value Management is the most powerful tool for objective performance tracking. You must master the "Health" of your project using these indices.

<div class="evm-grid">
  <div class="evm-card">
    <div class="evm-title">CPI (Cost Index)</div>
    <div class="evm-math">EV / AC</div>
    <div class="evm-status positive">> 1.0 (Under Budget)</div>
    <div class="evm-status negative">< 1.0 (Over Budget)</div>
    <p>Measures how efficiently you are spending your budget.</p>
  </div>
  <div class="evm-card">
    <div class="evm-title">SPI (Schedule Index)</div>
    <div class="evm-math">EV / PV</div>
    <div class="evm-status positive">> 1.0 (Ahead of Schedule)</div>
    <div class="evm-status negative">< 1.0 (Behind Schedule)</div>
    <p>Measures how efficiently you are using the project's time.</p>
  </div>
</div>

::: tip 💡 2026 Strategy: Trend Analysis
A single index is a snapshot. A **Trend** (e.g., SPI has dropped three weeks in a row) is a signal for proactive intervention. Always perform **Root Cause Analysis (Fishbone)** before implementing a correction.
:::

---

## 🏗️ Integrated Change Control
Changes are non-negotiable in a 2026 environment. The process ensures they are managed without destroying the project's foundation.

<div class="change-process">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-title">Identify</div>
    <p>Receive the formal request from a stakeholder.</p>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-title">Analyze</div>
    <p>The PM assesses the impact on <strong>Scope, Schedule, Cost, and Quality</strong>.</p>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-title">Review</div>
    <p>The <strong>Change Control Board (CCB)</strong> approves, rejects, or defers the change.</p>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-title">Update</div>
    <p>If approved, update the baselines and notify all impacted stakeholders.</p>
  </div>
</div>

---

## 📊 Agile & Hybrid Visibility
In adaptive environments, "Control" focuses on value flow rather than variance from a static baseline.
- **Burndown Charts**: Tracking work remaining in a sprint.
- **Burnup Charts**: Tracking progress toward a total release goal.
- **Velocity**: Predicting future capacity based on historical output.
- **Cycle Time**: Measuring "Lead-to-Value"—how fast a single requirement crosses the finish line.

<style>
.evm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.evm-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.evm-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.evm-math {
  font-family: monospace;
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.evm-status {
  font-size: 0.75rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.positive { color: #10b981; }
.negative { color: #ef4444; }

.evm-card p {
  font-size: 0.85rem;
  margin-top: 1rem;
  line-height: 1.4;
}

.change-process {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1rem;
  background: var(--vp-c-bg-mute);
  border-radius: 8px;
}

.step-num {
  background: var(--vp-c-brand);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  flex-shrink: 0;
}

.step-title {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.process-step p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a customer asks the team for a "small favor" (a minor change), the team should NOT do it. The Project Manager must direct the customer to the <strong>Change Control Process</strong>. Adding unrequested scope (Gold Plating) is an ethical and management failure.
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
