# 7.1 Risk Management

Risk is simply "uncertainty that matters." In the 2026 PMP exam, the goal isn't just to fill out a Risk Register; it's to build a project that is **resilient** to shock and **agile** enough to seize opportunities.

---

## 🏗️ The Risk Framework
A risk is an uncertain event. If it happens, it has an impact.

<div class="risk-type-grid">
  <div class="risk-type-card threat">
    <div class="risk-type-title">Threats</div>
    <div class="risk-type-subtitle">Negative Risks</div>
    <p>Events we want to <strong>Avoid</strong> or <strong>Mitigate</strong>. They represent potential delays, cost overruns, or quality failures.</p>
  </div>
  <div class="risk-type-card opportunity">
    <div class="risk-type-title">Opportunities</div>
    <div class="risk-type-subtitle">Positive Risks</div>
    <p>Events we want to <strong>Exploit</strong> or <strong>Enhance</strong>. They represent potential early finishes, cost savings, or higher value.</p>
  </div>
</div>

::: tip 💡 2026 Focus: Risk vs. Issue
- **Risk**: A future uncertainty. Managed in the **Risk Register**.
- **Issue**: A present certainty (it happened). Managed in the **Issue Log**.
:::

---

## 📊 Analysis Techniques
You must prioritize where to spend your limited management energy.

<div class="analysis-grid">
  <div class="analysis-card">
    <div class="analysis-title">Qualitative Analysis</div>
    <div class="analysis-tag">Fast & Subjective</div>
    <p>Ranking risks as "High, Medium, or Low" based on a <strong>Probability/Impact Matrix</strong>. Used for rapid prioritization.</p>
  </div>
  <div class="analysis-card">
    <div class="analysis-title">Quantitative Analysis</div>
    <div class="analysis-tag">Numerical & Data-Driven</div>
    <p>Using <strong>Monte Carlo Simulations</strong> or <strong>Decision Trees</strong> to calculate exact probability of meeting a date or budget.</p>
  </div>
</div>

---

## 🛡️ Response Strategies
The exam will test your judgment on the BEST strategy for a given scenario.

| Type       | Strategy     | Action                                                                     |
| :--------- | :----------- | :------------------------------------------------------------------------- |
| **THREAT** | **Avoid**    | Eliminate the cause (e.g., change scope to skip a risky task).             |
| **THREAT** | **Transfer** | Shift the impact to a third party (e.g., Insurance, Fixed-Price contract). |
| **THREAT** | **Mitigate** | Reduce probability or impact (e.g., prototype a feature early).            |
| **THREAT** | **Accept**   | Do nothing. Use **Contingency Reserve** if it happens.                     |
| **OPP**    | **Exploit**  | Ensure it happens (e.g., assign your top expert to the task).              |
| **OPP**    | **Enhance**  | Increase probability or impact of the upside.                              |
| **OPP**    | **Share**    | Partner with another group to capture the value together.                  |

---

## 🔄 Modern Practice: The Pre-Mortem
Instead of normal brainstorming, modern teams use the **Pre-Mortem**:
1.  Imagine the project has failed miserably 1 year from now.
2.  Work backward to find the "ghosts" (hidden risks) that caused the death.
3.  Implement preventive measures for those ghosts immediately.

<style>
.risk-type-grid, .analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.risk-type-card, .analysis-card {
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.risk-type-title, .analysis-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.risk-type-subtitle, .analysis-tag {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.threat { border-top: 4px solid #ef4444; }
.opportunity { border-top: 4px solid #10b981; }

.threat .risk-type-title { color: #ef4444; }
.opportunity .risk-type-title { color: #10b981; }

.analysis-card p, .risk-type-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If an exam scenario says a risk has occurred, the FIRST action is to <strong>implement the planned response</strong> and update the <strong>Issue Log</strong>. Do not start analyzing; the time for analysis was when it was still a risk.
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
