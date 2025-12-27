# 9.3 Tools & Templates (Monitoring & Closing Toolkit)

Use this page as a copy/paste toolkit for Monitoring & Controlling and Project Closure scenarios. It’s designed to match how the PMP exam phrases problems (“what should you do first?”).

---

## 🗓️ Monitoring Cadence (15-Minute Weekly Agenda)

- Progress vs baseline/backlog (milestones, burnup/burndown)
- Variances + trends (CPI/SPI or flow metrics)
- Top risks and issues (new, escalations, owners, due dates)
- Open change requests (status + decisions needed)
- Next week plan (what changes based on what we learned)

::: tip 💡 Exam shortcut
If there is a problem, you usually (1) analyze it, (2) decide an action, and (3) communicate it. “Doing work” without the decision step is often the wrong answer.
:::

---

## 📣 Status Report Template (Predictive / Hybrid)

**One-page rule**: the sponsor should understand status in under 60 seconds and know what decisions are needed.

| Section | Content (fill-in template) |
|---|---|
| **Overall status (RAG)** | Red / Amber / Green + 1-sentence reason |
| **Accomplished (since last report)** | bullet list |
| **Planned (next period)** | bullet list |
| **Schedule** | milestone status + forecast finish date |
| **Cost** | budget spent + forecast (EAC) if applicable |
| **Key metrics** | CPI/SPI or burnup/CFD + interpretation |
| **Top risks** | risk + owner + next action |
| **Top issues** | issue + owner + due date |
| **Change requests** | CRs submitted/approved + impact summary |
| **Decisions needed** | decision + deadline + decision-maker |

---

## 📊 EVM Worksheet (Mini Template)

Fill in the inputs, then compute the metrics.

| Input | Value |
|---|---:|
| **BAC** |  |
| **PV** |  |
| **EV** |  |
| **AC** |  |

Quick reminder:
- `PV = % planned complete × BAC`
- `EV = % actually complete × BAC`

| Output | Formula | Result |
|---|---|---:|
| **CV** | $EV - AC$ |  |
| **SV** | $EV - PV$ |  |
| **CPI** | $EV / AC$ |  |
| **SPI** | $EV / PV$ |  |
| **EAC** (typical) | $BAC / CPI$ |  |
| **ETC** | $EAC - AC$ |  |
| **VAC** | $BAC - EAC$ |  |
| **TCPI** | $(BAC - EV)/(BAC - AC)$ |  |

::: info 🔍 Interpretation shortcuts
- **CPI < 1**: over budget; update forecast and analyze root cause.
- **SPI < 1**: behind schedule; confirm critical path impact and remove constraints.
- **TCPI > 1**: you must perform better than planned to hit the target; the higher it is, the less realistic the target is.
:::

---

## 🧾 Variance Log (Copy/Paste Template)

Use this when variances repeat or exceed thresholds (helps avoid “we saw it but did nothing”).

| Field | Example |
|---|---|
| **Variance ID** | V-007 |
| **Metric** | CPI / milestone slip / defect escape rate |
| **Baseline vs actual** | CPI target 1.0 vs current 0.92 |
| **Trend** | declining for 3 periods |
| **Threshold triggered?** | Yes (below 0.95) |
| **Root cause hypothesis** | rework due to unclear acceptance criteria |
| **Action type** | corrective / preventive / defect repair |
| **Proposed action** | add DoD checklist + story acceptance workshop |
| **Owner** | Delivery lead |
| **Due date** | 2026-02-14 |
| **Requires change request?** | Yes/No (baseline impact?) |
| **Decision** | approved / rejected / deferred |

---

## 🧩 Issue Log (Copy/Paste Template)

| Field | Example |
|---|---|
| **Issue ID** | I-021 |
| **Description** | Test environment unavailable |
| **Impact** | testing blocked; schedule risk to milestone |
| **Priority** | High |
| **Owner** | Infrastructure lead |
| **Target resolution date** | 2026-02-05 |
| **Status** | Open / In progress / Resolved / Escalated |
| **Escalation path** | Sponsor if unresolved by date |

::: tip 💡 Exam shortcut
If it is happening **now**, it is usually an **issue** (issue log). If it might happen later, it is a **risk** (risk register).
:::

---

## ⚠️ Risk Register (Monitoring Template)

| Field | Example |
|---|---|
| **Risk ID** | R-013 |
| **Risk (cause → event → impact)** | If vendor lead times increase → hardware arrives late → schedule slip to go-live |
| **Probability** | Medium |
| **Impact** | High |
| **Response strategy** | mitigate / avoid / transfer / accept |
| **Response actions** | pre-order critical parts; add alternate supplier |
| **Owner** | Procurement lead |
| **Trigger** | supplier ETA > 6 weeks |
| **Status** | Open / Monitoring / Triggered / Closed |
| **Residual risk** | remaining delay risk after response |
| **Secondary risks** | e.g., alternate supplier quality risk |

---

## 🏗️ Change Request Form (Copy/Paste Template)

| Field | Example |
|---|---|
| **CR ID** | CR-014 |
| **Requestor** | Operations director |
| **Description** | Add audit logging to meet new compliance rule |
| **Reason** | Regulatory requirement |
| **Category** | scope change / corrective / preventive / defect repair |
| **Impacts** | scope, schedule, cost, quality, risk, benefits |
| **Options** | (A) implement now, (B) defer to next release, (C) descope other feature |
| **PM recommendation** | Option B (least disruption) |
| **Decision authority** | CCB / sponsor / product governance |
| **Decision** | approve / reject / defer |
| **Implementation plan** | who does what, when |
| **Baseline updates** | schedule/cost baseline update if approved |
| **Communication plan** | who must be informed |

### Change Log (Fast Tracker)
| CR ID | Submitted | Status | Decision date | Approved? | Summary impact |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### Change Impact Analysis (Quick Matrix)
Use this when the exam says “analyze impact” and provides multiple options.

| Dimension | Impact (Low/Med/High) | Notes |
|---|---|---|
| Scope |  |  |
| Schedule |  |  |
| Cost |  |  |
| Quality |  |  |
| Risk |  |  |
| Benefits/value |  |  |
| Resources |  |  |
| Procurements/contracts |  |  |

## 🗳️ Decision Log (Copy/Paste Template)

Use this to keep governance clean: what was decided, by whom, when, and why.

| Field | Example |
|---|---|
| **Decision ID** | D-006 |
| **Decision needed** | Approve CR-014 (audit logging) |
| **Options considered** | A implement now / B defer / C descope |
| **Decision** | Defer to next release |
| **Decision-maker** | Sponsor / CCB / Product governance |
| **Decision date** | 2026-02-03 |
| **Rationale** | avoids rework; compliance deadline is next quarter |
| **Impacts/assumptions** | no baseline change this release |
| **Actions created** | update roadmap + communicate to Ops |

---

## 🧳 Transition / Handoff Checklist

Use this to prevent “it works, so we are done” thinking.

- [ ] Acceptance/sign-off obtained (or formal process followed if disputed)
- [ ] Operations owner identified and engaged
- [ ] Training delivered (users + support team)
- [ ] Runbooks/operating procedures delivered and verified
- [ ] Access, monitoring, and support tooling configured
- [ ] Warranty/SLAs and escalation paths documented
- [ ] Residual risks/issues disposition agreed (closed vs handed over)
- [ ] Benefits ownership assigned (who measures outcomes after closure)

## 📈 Benefits Handoff (Mini Template)

| Benefit | Metric | Target | Owner | When measured | Data source |
|---|---|---|---|---|---|
| Reduce support costs | cost per ticket | -20% | Ops director | monthly | finance system |

---

## ✅ Close Project or Phase Checklist

- [ ] Deliverables accepted (Validate Scope)
- [ ] Open change requests closed (approved/rejected/deferred)
- [ ] Open issues resolved or formally transferred
- [ ] Risk register updated and archived
- [ ] Procurements closed (deliverables accepted, payments complete, claims resolved)
- [ ] Final budget reconciled and financials closed
- [ ] Final report completed and distributed
- [ ] Lessons learned finalized and stored as OPAs
- [ ] Project artifacts archived (PMIS/OPA library)
- [ ] Resources formally released (and recognition provided)

## 🧾 Final Report (One-Page Template)

| Section | What to include |
|---|---|
| Objectives | what success meant; key KPIs |
| Outcome | what was delivered + acceptance status |
| Schedule | baseline vs actual; major variances |
| Cost | baseline vs actual; EAC/VAC summary |
| Scope changes | approved CRs and what changed |
| Quality | defect/rework summary; residual issues |
| Risks/issues | what remained and how it was disposed |
| Benefits handoff | owner + measurement cadence |

---

## 🧠 Lessons Learned Session (Agenda + Output)

**Agenda (30–60 minutes)**
1) Objectives recap (what were we trying to achieve?)  
2) What went well (repeatable practices)  
3) What did not go well (root causes, early signals)  
4) Start / Stop / Continue  
5) Action items (owner + due date)  

**Output template**
| Topic | Lesson | Recommendation | Owner | Due date |
|---|---|---|---|---|
| Scope | Acceptance criteria were unclear | Require written AC for all stories | PO | 2026-02-20 |

---

## 🧾 Procurement Closure Checklist (If Vendors Are Involved)

- [ ] Confirm final deliverables meet contract acceptance criteria
- [ ] Complete inspections and acceptance documentation
- [ ] Resolve open change orders
- [ ] Resolve claims/disputes (negotiation/ADR per policy)
- [ ] Final payments completed (including retainage)
- [ ] Procurement audit completed (if applicable)
- [ ] Vendor performance evaluation captured (OPA input)
- [ ] Contract files archived
