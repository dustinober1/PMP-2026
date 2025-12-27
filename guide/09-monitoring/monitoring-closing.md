# 9.1 Monitoring & Controlling (Control & Change)

Monitoring is about **observing** performance; controlling is about **taking action** when performance deviates from the plan. In the 2026 PMP exam, this is where you prove you can run a project with discipline: detect problems early, diagnose the cause, act appropriately, and communicate transparently.

::: tip 🎯 What the Exam Tests
Most Monitoring & Controlling questions are scenario-based and ask **“What should the PM do FIRST?”** A safe pattern is:
1) confirm the variance is real (data) → 2) analyze impact/root cause → 3) choose an action (corrective, preventive, defect repair) → 4) submit a change request if baselines/contracts must change → 5) implement approved changes and communicate.
:::

::: info 🔧 Templates (Copy/Paste)
Need a status report, change request form, variance log, or closure checklist? Use [9.3 Tools & Templates](./toolkit).
:::

::: info 🧭 The Control Loop (Mental Model)
```
Work happens → Collect WPD → Analyze (WPI) → Decide → Act → Communicate (WPR) → Repeat

If the decision changes a baseline or contract:
Change Request → Integrated Change Control → Approved Change → Implement → Re-baseline
```
:::

---

## Monitoring & Controlling Processes (PMBOK-Aligned)

These are the most testable “control” processes. You don’t need to memorize them as a list, but you should know what each one *does* and what it typically outputs.

| Process | Knowledge Area | Exam framing (why it exists) |
|---|---|---|
| **Monitor and Control Project Work** | Integration | Detect variance, recommend actions, create work performance reports |
| **Perform Integrated Change Control** | Integration | Evaluate/approve/reject changes and protect baselines |
| **Validate Scope** | Scope | Get formal acceptance of completed deliverables |
| **Control Scope** | Scope | Prevent scope creep; manage changes to requirements/WBS/backlog |
| **Control Schedule** | Schedule | Keep delivery dates realistic; manage critical path impacts |
| **Control Costs** | Cost | Forecast EAC; keep funding aligned to actual performance |
| **Control Quality** | Quality | Inspect/testing; confirm deliverables meet requirements |
| **Control Resources** | Resource | Resolve resource conflicts; ensure resources are available and used effectively |
| **Monitor Communications** | Communications | Ensure the right people get the right info at the right time |
| **Monitor Risks** | Risk | Track triggers, residual/new risks; verify risk responses worked |
| **Control Procurements** | Procurement | Manage vendor performance, claims, payments, contract changes |
| **Monitor Stakeholder Engagement** | Stakeholder | Measure engagement effectiveness; adjust strategy |

---

## Work Performance Data → Information → Reports (The “Control Funnel”)

This transformation is how you turn “noise” into decisions.

| Level | What it is | Examples | Primary audience |
|---|---|---|---|
| **Work Performance Data (WPD)** | Raw observations | hours spent, defect count, completed story points, % complete | team |
| **Work Performance Information (WPI)** | Analyzed status/variance/trends | CPI/SPI, burnup trend, defect escape rate, forecast date | PM/core team |
| **Work Performance Reports (WPR)** | Packaged communication | status reports, dashboards, steering decks | sponsor/stakeholders |

::: warning ⚠️ Common Exam Trap
Stakeholders being “surprised” by bad news usually means you collected **data** but didn’t transform it into **information** and communicate it via **reports**.
:::

---

## Baselines, Thresholds, and Reserves (How “Control” Actually Works)

- **Baselines** are the approved versions of **scope, schedule, and cost** used for comparison (your “truth” for variance).
  - **Scope baseline**: scope statement + WBS + WBS dictionary (or an approved requirements baseline/backlog in adaptive).
  - **Schedule baseline**: the approved schedule model (logic, dates, milestones).
  - **Cost baseline**: the time-phased budget used to measure performance (often shown as an S-curve).
- **Thresholds** are “trigger points” (e.g., “>10% schedule variance requires sponsor notification”) defined in the PM plan.
  - Thresholds enable **management by exception**: you don’t escalate every wobble—only variances beyond agreed limits.
- **Contingency reserve** is for *identified risks* (typically part of the cost baseline). When a known risk occurs, you execute the risk response and use contingency as planned.
- **Management reserve** is for *unknown-unknowns* (not in the baseline; typically requires sponsor approval to use and often triggers a change request).

::: warning ⚠️ Common Exam Trap
“Using a reserve” is not the same as “changing the baseline.”
- If the plan already included **contingency** for a known risk, using it can be acceptable without re-baselining.
- If you need **more time/money/scope** than the baselines allow (or you need **management reserve**), you normally go through **change control**.
:::

---

## 🏎️ Earned Value Management (EVM)

EVM is an objective way to answer: **Are we getting the value we planned for the money and time we’re spending?** It’s most common in predictive/hybrid projects with a defined baseline.

### EVM Inputs (Know These Cold)

| Term | Meaning | Typical calculation |
|---|---|---|
| **BAC** | Budget at Completion | total planned budget |
| **PV** | Planned Value | `% planned complete × BAC` |
| **EV** | Earned Value | `% actually complete × BAC` |
| **AC** | Actual Cost | total spent to date |

### Core Performance Measures (Most Tested)

| Metric | Formula | Good sign |
|---|---|---|
| **CV** (Cost Variance) | `EV - AC` | positive = under budget |
| **SV** (Schedule Variance) | `EV - PV` | positive = ahead of schedule |
| **CPI** (Cost Performance Index) | `EV / AC` | > 1.0 = under budget |
| **SPI** (Schedule Performance Index) | `EV / PV` | > 1.0 = ahead |

::: info 🔍 CPI/SPI Combo Quick Read (Know the Story)
| CPI | SPI | What it usually means | Exam-appropriate move |
|---:|---:|---|---|
| `< 1` | `< 1` | over budget + behind schedule | analyze root cause, update forecast (EAC), propose recovery options; submit CR if baselines must change |
| `< 1` | `> 1` | over budget but ahead of schedule | confirm cost drivers (crashing/overtime/vendor rates); decide corrective action; CR if baseline needs change |
| `> 1` | `< 1` | under budget but behind schedule | validate schedule logic/critical path; remove constraints; CR if finish date must move |
| `> 1` | `> 1` | under budget + ahead of schedule | confirm data quality; communicate; consider pulling value forward (if governance allows) |
:::

::: tip 💡 Schedule Nuance (Exam Clarity)
EVM **SV** and **SPI** indicate schedule performance in “planned value” terms. If the question is about *calendar impact*, verify the **critical path/float** in the schedule model.
:::

### Forecasting (Shows Up in “What happens at the end?” Questions)

| Metric | What it answers | Formula (common) |
|---|---|---|
| **EAC** | “What will the total cost be?” | `BAC / CPI` (if current cost performance continues) |
| **EAC** (alt) | “If future work follows plan…” | `AC + (BAC - EV)` |
| **ETC** | “How much more will we spend?” | `EAC - AC` |
| **VAC** | “How far over/under budget at finish?” | `BAC - EAC` |
| **TCPI** | “How efficient must we be from now on?” | `(BAC - EV) / (BAC - AC)` (to meet BAC) |
| **TCPI** (alt) | “…to meet the new EAC?” | `(BAC - EV) / (EAC - AC)` |

::: tip 💡 2026 Strategy: Trend > Snapshot
A single CPI/SPI is a snapshot. A **trend** (e.g., CPI has declined 4 reporting periods) is the early-warning signal. Treat trend breaks as “investigate now,” not “wait until it’s bad.”
:::

### Worked Example (So You Can Do It Under Time Pressure)

Assume:
- `BAC = $200,000`
- by this date you planned to be `50%` complete → `PV = $100,000`
- you are actually `40%` complete → `EV = $80,000`
- you spent `AC = $110,000`

Results:
- `CV = EV - AC = -$30,000` (over budget)
- `SV = EV - PV = -$20,000` (behind schedule)
- `CPI = EV/AC = 0.73` (cost efficiency is poor)
- `SPI = EV/PV = 0.80` (schedule efficiency is poor)
- `EAC = BAC/CPI ≈ $273,973` (forecast: likely over budget if nothing changes)

**Exam-appropriate next move**: perform variance + root cause analysis, update forecasts, and communicate impact; submit a change request if you need additional budget/time or to change scope/quality expectations.

---

## Variance, Trend, and Root Cause Analysis (Don’t Skip This Step)

When a variance appears, the PM’s job is not to “fix it fast.” The PM’s job is to **understand it** so the action actually works.

Common analysis tools (often appear as answer choices):
- **Variance analysis** (compare actual vs baseline)
- **Trend analysis** (is it getting better/worse over time?)
- **Root cause analysis** (**5 Whys**, **Fishbone/Ishikawa**)
- **Pareto chart (80/20)** to prioritize the vital few causes

::: info 🧪 Control Charts (Quality Control)
- **Control limits** (UCL/LCL) show whether a process is statistically stable.
- A process can be **in control but out of spec** (customer limits ≠ control limits).
- “Out of control” signals include points outside limits or non-random patterns (e.g., a sustained run on one side of the mean).
:::

---

## 🗓️ Control Schedule: Critical Path, Float, and Compression

Many exam questions hide the real issue in schedule logic. Before you “fix the date,” confirm whether the slip is actually threatening the end date.

- **Critical path**: the longest path through the network; activities on it typically have **zero total float**.
- **Float (slack)**: allowable delay without delaying the project end date (or the next dependent activity).
- **If the slipped activity has float**: you may not need a baseline change; you may need replanning/resequencing and communication.
- **If the slipped activity is on the critical path**: you need a recovery decision (scope trade-off, schedule compression, or a baseline change via CR).

### Schedule Compression (Know the Two Levers)

| Technique | What it is | Trade-off / risk |
|---|---|---|
| **Crashing** | add resources/cost to shorten duration | increases cost; may increase coordination risk |
| **Fast tracking** | overlap activities previously sequential | increases rework/defect risk; adds uncertainty |

::: tip 💡 Exam Pattern
If the question says “What should the PM do FIRST?” the safest first step is usually: **analyze the variance + confirm critical path impact** before choosing crash/fast-track or requesting more time.
:::

---

## Issues vs Risks vs Change Requests (Stop Mixing These Up)

Exam questions often test whether you can choose the right “container” for the problem.

| Item | Time horizon | Where you track it | What you do next |
|---|---|---|---|
| **Issue** | happening now | **Issue log** | assign an owner + due date, remove blockers, escalate if needed |
| **Risk** | may happen later | **Risk register** | monitor triggers, reassess probability/impact, implement response plans |
| **Change request** | decision needed | **Change log / change control system** | analyze impacts, route to change authority/CCB, update baselines if approved |

Key relationship: a **risk becomes an issue** when it occurs; issues and variances often **generate change requests** when the baseline must be updated.

### 🧯 Risk Monitoring Essentials (Triggers, Residual, Secondary)

- **Triggers**: warning signs that a risk is about to occur (your cue to implement the planned response).
- **Residual risk**: what remains after response actions (still needs monitoring).
- **Secondary risk**: new risks created by your response (e.g., fast-tracking creates rework risk).
- **Risk reassessment**: periodic review to update probability/impact and identify new risks.
- **Risk audit**: verify whether risk responses were implemented and whether they worked.

If a risk occurs (becomes an issue), execute the response plan, update the **risk register** and **issue log**, and submit a **change request** if the response changes baselines/contracts.

---

## Corrective Action vs Preventive Action vs Defect Repair

These terms show up constantly in Monitoring & Controlling questions.

| Term | Purpose | Example |
|---|---|---|
| **Corrective action** | Bring future performance back to plan | add a tester to stop defect backlog growth |
| **Preventive action** | Reduce probability of future negative variance | add peer reviews to prevent defects |
| **Defect repair** | Fix a nonconforming deliverable | patch a production bug found in UAT |

**Important nuance**: If the action changes an approved baseline (scope/schedule/cost) or contract terms, you typically need a **change request**.

---

## 🏗️ Integrated Change Control (How to Change Without Chaos)

Changes are normal. **Uncontrolled** changes are project killers.

### Key Definitions
- A **change request** can be for a scope change, schedule/budget change, corrective action, preventive action, defect repair, or updates to plans/documents.
- The **CCB** (Change Control Board) is the *decision authority* in many predictive environments. In agile/hybrid, approval is often handled through **product ownership/governance** and **backlog prioritization** (but it’s still a decision process).

<div class="change-process">
  <div class="process-step">
    <div class="step-num">1</div>
    <div class="step-title">Capture</div>
    <p>Document the request (don’t accept hallway changes). Update the change log.</p>
  </div>
  <div class="process-step">
    <div class="step-num">2</div>
    <div class="step-title">Analyze</div>
    <p>Assess impact to <strong>scope, schedule, cost, quality, risk, and benefits</strong>. Include options.</p>
  </div>
  <div class="process-step">
    <div class="step-num">3</div>
    <div class="step-title">Decide</div>
    <p>CCB/sponsor/product governance approves, rejects, or defers. Define funding and timeline impacts.</p>
  </div>
  <div class="process-step">
    <div class="step-num">4</div>
    <div class="step-title">Implement</div>
    <p>Execute the approved change via project work. Update baselines/plans and communicate to stakeholders.</p>
  </div>
</div>

### What Gets Updated After an Approved Change (Outputs You Should “See”)

When a change is approved, you typically update:
- **Change log** (status + decision) and often a **decision log**
- **Project management plan** (including **scope/schedule/cost baselines** if impacted)
- **Project documents** (requirements/backlog, schedule model, risk register, issue log, communications plan, forecasts)
- **Work**: implement the approved change and communicate the new expectations

On the exam, “implement the change” is rarely correct until you also see **approval**, **baseline/document updates**, and **communication**.

::: warning ⚠️ Another Common Exam Trap
If stakeholders ask for “a small change,” you don’t do it “to be nice.” You route it through the **change control process**. “Death by a thousand cuts” is still scope creep.
:::

---

## Controlling More Than Schedule and Cost (Exam Bread-and-Butter)

Monitoring & Controlling touches every knowledge area. Think in terms of *what you measure* and *what you do when it’s off*.

| Area | What you monitor | Common controls/actions |
|---|---|---|
| **Scope** | acceptance criteria, requirement completion | validate scope (acceptance), prevent scope creep, change requests |
| **Schedule** | critical path, milestones, trend vs baseline | re-sequence work, remove blockers, crash/fast-track (with risk review) |
| **Cost** | burn rate, CPI, EAC, reserves | re-forecast, manage reserves, request funding changes |
| **Quality** | defects, rework rate, control charts | inspections/testing, defect repair, process adjustments |
| **Risk** | triggers, residual/new risks | risk reassessment, audits, execute fallback/contingency |
| **Procurement** | vendor performance, deliverable acceptance | performance reviews, claims management, contract change control |
| **Stakeholders/Comms** | sentiment, feedback loops, understanding | adjust comms strategy, tailor reporting, address concerns early |

---

## 📊 Agile & Hybrid Visibility

In adaptive environments, control focuses on **value flow and predictability**, not variance from a fixed scope baseline.

- **Burnup/Burndown**: progress vs remaining work
- **Velocity**: how much a team typically delivers per iteration (used for forecasting, not as a target)
- **Cycle Time / Lead Time**: how fast work moves from start → done / request → value
- **Cumulative Flow Diagram (CFD)**: bottlenecks and WIP stability
- **WIP Limits**: reduce multitasking and stabilize flow (Kanban)
- **Escaped defects**: quality signal (defects found after “done”)

::: tip 💡 Agile Change Control
In agile, change is expected. “Control” is achieved by maintaining a transparent, ordered backlog, stable iteration cadence, clear acceptance criteria, and regular inspect/adapt events (review + retro).
:::

<style>
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
  <strong>📝 Exam Insight:</strong> “Gold plating” (adding extras the customer didn’t ask for) is not a kindness—it's an uncontrolled scope change that increases risk and can violate contract terms. Deliver what was agreed, then submit enhancements as formal change requests.
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
