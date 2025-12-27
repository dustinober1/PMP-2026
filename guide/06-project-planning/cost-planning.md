# 6.3 Cost Planning

Cost management ensures that the project is delivered within the approved budget. It is more than just spending; it is about **Value Engineering** and **Fiscal Ethics**.

---

## 🧭 The Cost Planning Flow (In Order)
1.  **Plan Cost Management**: Defines how costs will be estimated, budgeted, and controlled.
2.  **Estimate Costs**: Produces activity/work package cost estimates (often with ranges).
3.  **Determine Budget**: Aggregates estimates into a time-phased **Cost Baseline** (often visualized as an S-curve).

---

## 🏗️ The Budget Architecture
A PMP budget is built from the bottom up, with layers of protection.

<div class="cost-grid">
  <div class="cost-card activity">
    <div class="cost-title">Activity Estimates</div>
    <p>The base cost of work packages, including labor and materials.</p>
  </div>
  <div class="cost-card contingency">
    <div class="cost-title">Contingency Reserve</div>
    <p>For "Known Unknowns". Part of the <strong>Cost Baseline</strong>. Under PM control.</p>
  </div>
  <div class="cost-card baseline">
    <div class="cost-title">Cost Baseline</div>
    <div class="cost-subtitle">The Performance Mark</div>
    <p>A time-phased budget used to measure EVM (Earned Value Management) performance.</p>
  </div>
  <div class="cost-card management">
    <div class="cost-title">Management Reserve</div>
    <p>For "Unknown Unknowns". NOT part of the baseline. Under Sponsor control.</p>
  </div>
</div>

---

## 📦 Cost Types You Should Recognize
| Cost Type | What It Means | Example |
| :-------- | :------------ | :------ |
| **Direct** | Tied to project work | Project labor, materials |
| **Indirect** | Overhead shared across work | Shared admin support |
| **Fixed** | Does not change with volume | Monthly software license |
| **Variable** | Changes with volume/usage | Cloud consumption cost |

---

## 📊 Estimation Techniques
Which method is right for your project?

| Technique       | Description                                                   | Stability       |
| :-------------- | :------------------------------------------------------------ | :-------------- |
| **Analogous**   | Based on past projects. Quick but less accurate.              | **Low**         |
| **Parametric**  | Based on math ($ per sq foot). High accuracy if data is good. | **Medium**      |
| **Bottom-Up**   | Estimating every activity and rolling it up. Most accurate.   | **High**        |
| **Three-Point** | (Optimistic + Pessimistic + 4*Most Likely) / 6. (PERT).       | **Uncertainty** |

---

## 💰 The Total Project Budget
**Total Budget = Cost Baseline + Management Reserve**.
- If a major risk occurs that wasn't planned (Unknown Unknown), you must ask the **Sponsor** for the Management Reserve.
- If a risk occurs that was in the risk register (Known Unknown), you use the **Contingency Reserve**.

---

## 📈 EVM Connection (Why the Baseline Must Be Time-Phased)
Earned Value compares what you planned to spend *by a point in time* vs. what you earned/spent:
- **PV (Planned Value)**: what you planned to earn by now
- **EV (Earned Value)**: value of work actually completed
- **AC (Actual Cost)**: what you actually spent

::: tip 💡 Fast Interpretation
**CPI < 1.0 = over budget**. **SPI < 1.0 = behind schedule**. Full formulas live in the Appendix: **Formulas & Definitions**.
:::

::: info 🛠️ 2026 Focus: Value Engineering
Cost planning in 2026 is not just about cutting costs. It's about **Value Engineering**: Finding ways to deliver the same strategic value at a lower cost without sacrificing quality or sustainability (ESG).
:::

<style>
.cost-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.cost-card {
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.cost-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.cost-subtitle {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.cost-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}

.activity { border-bottom: 4px solid #94a3b8; }
.contingency { border-bottom: 4px solid #3b82f6; }
.baseline { border-bottom: 4px solid #10b981; }
.management { border-bottom: 4px solid #ef4444; }
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If an unforeseen disaster (not in the risk register) occurs, you need <strong>Management Reserve</strong>. This requires a formal change request and <strong>Sponsor approval</strong>.
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
