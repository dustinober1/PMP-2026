# 8.1 Executing Project Work

Execution is where project leaders coordinate people, vendors, and resources to create deliverables **and** protect value. It requires balancing formal control (plans, baselines, governance) with the real-world need for speed, collaboration, and rapid problem-solving.

---

## 🧭 “Direct and Manage Project Work” (In Plain English)
This is the integration heartbeat of execution. You’re coordinating work so the team can produce deliverables while you keep stakeholders aligned and the project under control.

What it includes (predictive, agile, and hybrid):
- **Coordinate work** across the team, vendors, and stakeholders
- **Implement approved changes** (don’t “quietly” change baselines)
- **Produce deliverables** and gather **work performance data**
- **Update project documents** as reality evolves (issues, lessons learned, forecasts)

### Execution in one line
**Run the system so work keeps flowing and value keeps rising.**

::: tip 💡 Exam shortcut
If a scenario mentions a baseline and someone wants to change scope/schedule/cost, your “execution move” is usually to **assess impact and follow the change approach** (CCB/change control in predictive, backlog rules in agile/hybrid).
:::

---

## 🏗️ Leading the Flow (Predictive, Agile, Hybrid)
The way you execute should match the level of uncertainty and the organization’s governance.

<div class="exec-grid">
  <div class="exec-card predictive">
    <div class="exec-title">Predictive Execution</div>
    <div class="exec-tag">Control-Oriented</div>
    <p>Using a <strong>Work Authorization System</strong> to ensure tasks start strictly according to the schedule and budget baselines.</p>
  </div>
  <div class="exec-card agile">
    <div class="exec-title">Agile Execution</div>
    <div class="exec-tag">Flow-Oriented</div>
    <p>Using <strong>Daily Standups</strong> and <strong>Kanban Boards</strong> to visualize progress and remove impediments in real-time.</p>
  </div>
  <div class="exec-card hybrid">
    <div class="exec-title">Hybrid Execution</div>
    <div class="exec-tag">Bridge-Oriented</div>
    <p>Using <strong>predictive governance</strong> (milestones, budgets, approvals) while agile teams deliver <strong>iterative increments</strong> and re-prioritize for value.</p>
  </div>
</div>

---

## 🔁 Execution Cadences (Your Control System)
Execution runs on repeatable cadences so problems surface early and decisions happen quickly.

| Cadence | Purpose | Typical outputs |
|---|---|---|
| **Daily standup / daily sync** | Align work + expose blockers | Updated board, impediments to remove |
| **Weekly status / checkpoint** | Inform stakeholders and request decisions | Status report, decision requests, updated issue log |
| **Sprint review / demo** | Validate the increment with users | Feedback, acceptance/rejection, backlog updates |
| **Retrospective / lessons learned** | Improve the system of work | Improvement actions, lessons learned register updates |
| **Phase gate / steering meeting** | Governance + continued alignment | Go/no-go, approvals, escalations, changes |

::: info 🔍 PMP nuance
The PMP often rewards answers that use the **right cadence** and the **right stakeholder touchpoint** (per the communications plan) instead of “waiting until the next meeting.”
:::

---

## 🧱 Impediment vs. Issue vs. Risk vs. Change (Don’t Mix These Up)
Execution questions frequently test whether you put the problem in the right “bucket” and then take the right first action.

| Term | What it is | Where it goes | Best first move |
|---|---|---|---|
| **Impediment / blocker** | Something preventing or slowing work right now | Impediment log (or Issue Log) | Remove/escalate to restore flow |
| **Issue** | A problem that has already happened | Issue Log | Assign owner → assess impact → act |
| **Risk** | An uncertain event that may occur | Risk Register | Analyze + plan response (then monitor) |
| **Change request** | Proposed modification to scope/schedule/cost/quality/contract | Change Log / CCB (or backlog policy) | Assess impacts → follow approval/prioritization rules |

**Common exam trap**: “A risk occurred” means it’s not a risk anymore—it’s an **issue** (execute the response, then log/track it).

---

## 🧠 Knowledge Management
Projects produce two distinct types of value: **Deliverables** and **Knowledge**.

<div class="knowledge-grid">
  <div class="knowledge-card">
    <div class="knowledge-title">Explicit Knowledge</div>
    <p>Facts, blueprints, and data that can be written down and easily shared (e.g., Code, Manuals).</p>
  </div>
  <div class="knowledge-card">
    <div class="knowledge-title">Tacit Knowledge</div>
    <p>Experience, "know-how," and intuition. Shared through <strong>Social Interaction</strong> and <strong>Collaboration</strong>.</p>
  </div>
</div>

### How to capture knowledge without slowing delivery
- Keep a **Lessons Learned Register** as a living document (add small entries weekly)
- Maintain a **Decision Log** for important trade-offs (why we chose option A over B)
- Use **retrospectives / after-action reviews** to turn experience into repeatable guidance
- Promote tacit transfer via **pairing, shadowing, communities of practice**, and demo-based learning

::: tip 💡 2026 Shift: Continuous Learning
Do not wait for the "End of Project" party to capture lessons. Update the **Lessons Learned Register** at every sprint retrospective or phase gate to avoid repeating mistakes in the very next work cycle.
:::

---

## 📈 Data → Information → Reports (How PMs Communicate)
A core PM skill is translating raw noise into actionable insight for the right audience.

1.  **Work Performance Data**: Raw observations (counts, dates, defects, hours, story points, test results).
2.  **Work Performance Information**: Analyzed meaning (variance, trend, forecast, root cause themes).
3.  **Work Performance Reports**: Packaged communication (dashboards, stakeholder status updates, steering deck).

**Exam pattern**: If stakeholders are surprised late, you likely had data but failed to convert it into **information** and communicate it via the planned cadence.

---

## 🧑‍🤝‍🧑 Leading People During Execution
Execution is where leadership becomes observable. Typical “best answers” emphasize coaching, clarity, and respectful escalation.

- **Performance issue**: Meet privately → understand root cause → clarify expectations → remove blockers → coach/train → document and escalate if needed
- **Conflict**: Facilitate collaboration (focus on interests, not positions); use team working agreements and face-to-face discussion when possible
- **Overload / context switching**: Protect the team from interruptions; make WIP visible; re-prioritize
- **Resource constraints**: Negotiate with functional managers; adjust plan/backlog; communicate impacts early

---

## 🛠️ Execution Toolbox (High-Yield)
- **Issue / Impediment Log**: Track current problems; assign owners; follow up relentlessly.
- **Change Requests / Change Log**: Formal “gear shift” when baselines/contract terms must change.
- **Visual management**: Kanban board, burnup/burndown, cumulative flow diagram (make work visible).
- **Lessons Learned Register + Decision Log**: Capture knowledge continuously.
- **Quality tools**: Definition of Done, checklists, defect log, peer reviews.
- **Servant leadership**: The most important “tool.” Clear the path so the team can deliver.

See `guide/08-execution/toolkit.md` for copy/paste templates.

<style>
.exec-grid, .knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.exec-card, .knowledge-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.exec-title, .knowledge-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.exec-tag {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.predictive { border-top: 4px solid #3b82f6; }
.agile { border-top: 4px solid #10b981; }
.hybrid { border-top: 4px solid #f59e0b; }

.exec-card p, .knowledge-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a team member is blocked by a technical issue or an overbearing functional manager, the PM acting as a <strong>Servant Leader</strong> must prioritize removing that impediment. If you can't fix it yourself, escalate it.
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
