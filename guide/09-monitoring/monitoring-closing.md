# 9.1 Monitoring & Controlling

Monitoring is about **observing** performance; Controlling is about **taking action** when performance deviates from the plan. In 2026, the Project Manager must balance data-driven insights with proactive leadership to keep the project on track.

---

## 🏎️ Earned Value Management (EVM)
EVM is the most powerful tool for tracking performance. You must know these four "Integrative" metrics:

| Metric  | Term                 | What it answers                                               |
| :------ | :------------------- | :------------------------------------------------------------ |
| **PV**  | Planned Value        | How much work were we *supposed* to have done?                |
| **EV**  | Earned Value         | How much work have we *actually* done (expressed in dollars)? |
| **AC**  | Actual Cost          | How much have we *actually* spent?                            |
| **BAC** | Budget at Completion | What is the total budget for this project?                    |

### The "Health" Formulas
On the exam, you will likely need to interpret these indices more than calculate them:
- **CPI (Cost Performance Index)** = $EV / AC$
  - `> 1.0` = Under Budget (Great!)
  - `< 1.0` = Over Budget (Bad!)
- **SPI (Schedule Performance Index)** = $EV / PV$
  - `> 1.0` = Ahead of Schedule (Great!)
  - `< 1.0` = Behind Schedule (Bad!)

::: tip 💡 2026 Strategy: Performance Trends
A single CPI/SPI point is a snapshot. A **Trend** (e.g., CPI has dropped for 3 weeks) is a signal. Always look for the root cause of the trend before taking action.
:::

---

## 🛠️ Variance Analysis & Corrective Action
When your data shows you are off-track (e.g., SPI = 0.8), you must act:

1. **Schedule Compression**:
   - **Crashing**: Adding resources to the critical path (Costs money, reduces time).
   - **Fast-Tracking**: Doing tasks in parallel that were planned in sequence (Increases risk, reduces time).

2. **Root Cause Analysis**: Use a **Fishbone Diagram** or the **5 Whys** to find out *why* the variance occurred. Don't just treat the symptom (the delay); fix the disease (the process).

---

## 📝 Integrated Change Control
Changes are constant. The **Integrated Change Control** process ensures they are managed without chaos.

### The 5-Step Process:
1. **Identify**: A stakeholder requests a change.
2. **Impact Assessment**: The PM analyzes the impact on Scope, Schedule, Cost, and Quality.
3. **CCB Review**: The **Change Control Board** (or Sponsor) approves, rejects, or defers the change.
4. **Update**: If approved, update the Project Management Plan and Baselines.
5. **Implement**: Notify stakeholders and execute the change.

::: warning 🚦 No "Gold Plating"
In the PMP world, adding extra features that weren't requested (Gold Plating) is a failure. Every change must go through the formal process.
:::

---

## 📊 Agile Monitoring
In Agile, we don't use EVM as often. Instead, we use:
- **Burnup/Burndown Charts**: Visualizing work remaining vs. time.
- **Velocity**: The average amount of work a team completes in a sprint.
- **Cycle Time**: How long it takes for a single item to go from "Start" to "Finished."

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a customer asks the team for a "small favor" (a minor change), the team should NOT do it. The Project Manager should direct the customer to the <strong>Change Control Process</strong> to assess the impact.
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
