# Formula Mastery & Project Glossary

Master the "Hard Science" of project management. This appendix covers every mathematical formula and technical definition required for the 2026 PMP Exam.

---

##  Earned Value Management (EVM)
EVM is the most critical math section of the exam. If you master these 4 metrics, you can derive almost everything else.

<div class="formula-grid">
  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">The Input</span>
      <span class="formula-name">PV (Planned Value)</span>
    </div>
    <div class="formula-math">PV = % Planned × BAC</div>
    <p>What you <strong>should</strong> have done by now according to the schedule.</p>
  </div>

  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">The Input</span>
      <span class="formula-name">EV (Earned Value)</span>
    </div>
    <div class="formula-math">EV = % Actually Done × BAC</div>
    <p>The budgeted value of the work <strong>actually</strong> completed.</p>
  </div>

  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">The Input</span>
      <span class="formula-name">AC (Actual Cost)</span>
    </div>
    <div class="formula-math">AC = Total Spent</div>
    <p>What you have <strong>actually</strong> paid to date.</p>
  </div>

  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">Efficiency</span>
      <span class="formula-name">CPI (Cost Index)</span>
    </div>
    <div class="formula-math">CPI = EV / AC</div>
    <p>> 1.0 = Under Budget<br>< 1.0 = Over Budget</p>
  </div>

  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">Efficiency</span>
      <span class="formula-name">SPI (Schedule Index)</span>
    </div>
    <div class="formula-math">SPI = EV / PV</div>
    <p>> 1.0 = Ahead of Schedule<br>< 1.0 = Behind Schedule</p>
  </div>

  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">Forecasting</span>
      <span class="formula-name">EAC (Projected Cost)</span>
    </div>
    <div class="formula-math">EAC = BAC / CPI</div>
    <p>Predicts a final project cost if current efficiency continues.</p>
  </div>
</div>

---

##  Estimation & Schedule Math
Beyond EVM, these formulas help you calculate certainty and communication complexity.

<div class="formula-grid">
  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">Estimation</span>
      <span class="formula-name">PERT (Three-Point)</span>
    </div>
    <div class="formula-math">(O + 4M + P) / 6</div>
    <p>Weighs the "Most Likely" outcome 4x to account for uncertainty.</p>
  </div>

  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">Communication</span>
      <span class="formula-name">Channels</span>
    </div>
    <div class="formula-math">N(N-1) / 2</div>
    <p>Calculates the number of potential communication paths for N people.</p>
  </div>

  <div class="formula-card">
    <div class="formula-header">
      <span class="formula-badge">Schedule</span>
      <span class="formula-name">Total Float</span>
    </div>
    <div class="formula-math">LS - ES or LF - EF</div>
    <p>The amount of time a task can be delayed without delaying the project.</p>
  </div>
</div>

---

##  Financial Selection Metrics
Used during Initiation (Chapter 5) to choose the right project.

| Metric                            | Rule of Thumb         | Why?                                             |
| :-------------------------------- | :-------------------- | :----------------------------------------------- |
| **NPV (Net Present Value)**       | **Higher is Better**  | The total value in today's dollars.              |
| **IRR (Internal Rate of Return)** | **Higher is Better**  | The effective "interest rate" the project earns. |
| **BCR (Benefit Cost Ratio)**      | **> 1.0 is Good**     | For every $1 spent, you get >$1 back.            |
| **Payback Period**                | **Shorter is Better** | How fast you recover the initial investment.     |

---

##  Global Glossary (A-Z)

::: details A - Adaptive to Artifact
*   **Adaptive**: A project approach that is iterative or agile; responds to change.
*   **Artifact**: Any document, template, or deliverable used to manage the project.
*   **Assumption**: A factor held to be true for planning purposes without proof.
:::

::: details B - Backlog to Baseline
*   **Backlog**: A prioritized list of work items (User Stories).
*   **Baseline**: The approved version of a plan (Scope, Schedule, or Cost).
*   **Business Case**: The economic justification for the project.
:::

::: details C - Change to Constraint
*   **Change Control**: The process of reviewing and approving changes to baselines.
*   **Constraint**: A limiting factor (Fixed deadline, budget cap).
*   **Critical Path**: The longest sequence of tasks with zero float.
:::

::: details E - ESG to EVM
*   **ESG**: Environmental, Social, and Governance criteria for sustainability.
*   **EVM**: Earned Value Management; a method of measuring performance via math.
:::

::: details R - RACI to Risk
*   **RACI**: Responsible, Accountable, Consulted, Informed matrix.
*   **Risk**: An uncertain event that, if it occurs, has a positive or negative impact.
:::

::: details V - Value to Velocity
*   **Value**: The net result of benefits minus costs.
*   **Velocity**: The rate at which an agile team completes story points.
:::

<style>
.formula-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.formula-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.formula-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.formula-badge {
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 4px;
}

.formula-name {
  font-weight: 700;
  font-size: 0.9rem;
}

.formula-math {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: var(--vp-c-bg-mute);
  border-radius: 8px;
  text-align: center;
}

.formula-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
</style>
