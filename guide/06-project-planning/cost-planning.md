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

### Funding Limit Reconciliation
Just because you have the *budget* doesn't mean you have the *cash*.
- **Funding Limit Reconciliation** aligns the expenditure of funds with the commitment of funds (cash flow management).
- If your planned spend for June is $1M but the organization only releases $500k/month, you must reschedule work (leveling) to match the funding limit.

### Lifecycle Costing
Project decisions should consider the "Total Cost of Ownership," not just the project build cost.
- **Cost of Acquisition**: Design + Build.
- **Cost of Operations**: Maintenance + Support + Utilities.
- **Cost of Disposal**: Decommissioning + Cleanup.
*A cheaper server (Acquisition) might cost 3x more in power (Operations) over 5 years. A good PM considers the full life.*

---

## 📈 Earned Value Management (EVM): Complete Guide

EVM is the exam's favorite way to test integrated planning (scope + schedule + cost). It compares planned progress vs. actual progress and cost.

### The Three Core Values

**PV (Planned Value)** = Budget for work scheduled to be completed by now
- Also called **BCWS** (Budgeted Cost of Work Scheduled)
- "What should we have earned by now according to the plan?"

**EV (Earned Value)** = Budget for work actually completed
- Also called **BCWP** (Budgeted Cost of Work Performed)
- "What did we actually earn?"

**AC (Actual Cost)** = Actual money spent so far
- Also called **ACWP** (Actual Cost of Work Performed)
- "How much did we actually spend?"

**BAC (Budget at Completion)** = Total planned budget for the entire project

---

### EVM Variance Formulas

**Schedule Variance (SV)** = EV − PV
- **Positive = ahead of schedule**
- **Negative = behind schedule**

**Cost Variance (CV)** = EV − AC
- **Positive = under budget**
- **Negative = over budget**

**Variance at Completion (VAC)** = BAC − EAC
- Expected budget surplus or deficit at project end

---

### EVM Performance Indices

**Schedule Performance Index (SPI)** = EV / PV
- **SPI > 1.0** = ahead of schedule
- **SPI < 1.0** = behind schedule
- **SPI = 1.0** = on schedule

**Cost Performance Index (CPI)** = EV / AC
- **CPI > 1.0** = under budget (good)
- **CPI < 1.0** = over budget (bad)
- **CPI = 1.0** = on budget

::: tip 💡 Quick Interpretation
If someone asks "Are we over or under budget?" → Check **CPI**
If they ask "Are we ahead or behind schedule?" → Check **SPI**
:::

---

### EVM Forecasting Formulas

**Estimate at Completion (EAC)** = How much we now expect the total project to cost

**EAC (Typical Variance)**:
```
EAC = BAC / CPI
```
Use when: Current performance will continue

**EAC (Atypical Variance)**:
```
EAC = AC + (BAC − EV)
```
Use when: Current variance was one-time event; future work will go as planned

**EAC (Comp rehensive)**:
```
EAC = AC + [(BAC − EV) / (CPI × SPI)]
```
Use when: Both cost and schedule performance impact future work

**Estimate to Complete (ETC)** = How much more money is needed
```
ETC = EAC − AC
```

**To-Complete Performance Index (TCPI)** = Efficiency needed for remaining work

**TCPI (Based on BAC)**:
```
TCPI = (BAC − EV) / (BAC − AC)
```
Use when: You want to finish at the original budget

**TCPI (Based on EAC)**:
```
TCPI = (BAC − EV) / (EAC − AC)
```
Use when: You've accepted a new budget (revised EAC)

---

### EVM Worked Example

**Project Status at Month 6:**
- **BAC**: $100,000 (total project budget)
- **PV**: $50,000 (planned to be 50% complete by now)
- **EV**: $40,000 (actually 40% complete)
- **AC**: $45,000 (actually spent $45k)

**Calculate Variances:**
```
SV = EV − PV = $40,000 − $50,000 = −$10,000 (behind schedule)
CV = EV − AC = $40,000 − $45,000 = −$5,000 (over budget)
```

**Calculate Performance Indices:**
```
SPI = EV / PV = $40,000 / $50,000 = 0.80 (80% of planned progress)
CPI = EV / AC = $40,000 / $45,000 = 0.89 (89 cents of value per dollar spent)
```

**Forecast Completion:**
```
EAC = BAC / CPI = $100,000 / 0.89 = $112,360
ETC = EAC − AC = $112,360 − $45,000 = $67,360
VAC = BAC − EAC = $100,000 − $112,360 = −$12,360 (expect to overrun)
```

**TCPI (to finish at original budget):**
```
TCPI = (BAC − EV) / (BAC − AC)
TCPI = ($100,000 − $40,000) / ($100,000 − $45,000)
TCPI = $60,000 / $55,000 = 1.09
```

**Interpretation:**
- Project is **behind schedule** (SPI = 0.80) and **over budget** (CPI = 0.89)
- At current performance, expect to finish at **$112,360** (12% over budget)
- To finish at the original $100k budget, efficiency must improve to **1.09** (9% better than current)

::: warning ⚠️ Exam Reality
EVM questions often give you 3 of the 4 core values and ask you to calculate the 4th, then derive variances and indices. Practice deriving formulas from the relationships:
- If you know EV, AC, and PV, you can calculate everything
- **CPI** is the most important metric for cost performance
- **TCPI > 1.0** means you need to become more efficient
:::

---

### EVM Summary Table (Quick Reference)

| Formula | Calculation | Interpretation |
|:--------|:------------|:---------------|
| **SV** | EV − PV | >0 = ahead, <0 = behind |
| **CV** | EV − AC | >0 = under budget, <0 = over budget |
| **SPI** | EV / PV | >1.0 = ahead, <1.0 = behind |
| **CPI** | EV / AC | >1.0 = under budget, <1.0 = over |
| **EAC** | BAC / CPI | Expected total cost (typical) |
| **ETC** | EAC − AC | Money still needed |
| **VAC** | BAC − EAC | Expected surplus/deficit |
| **TCPI** | (BAC−EV)/(BAC−AC) | Efficiency needed to hit BAC |

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
