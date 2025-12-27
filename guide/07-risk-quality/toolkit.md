# 7.4 Tools & Templates (One-Stop Reference)

Use this page as a copy/paste toolkit for risk, quality, and complexity scenarios. It’s designed to match how the PMP exam phrases problems (“what should you do first?”).

---

## 📋 Risk Register (Copy/Paste Template)
Minimum fields that make risk management actionable:

| Field | Example |
|---|---|
| **Risk ID** | R-014 |
| **Risk statement (cause → event → impact)** | Because the supplier has a single manufacturing site, a shutdown could delay delivery and slip the schedule by 3 weeks |
| **Category (RBS)** | External → Supplier |
| **Probability** | 0.30 (or Medium) |
| **Impact** | $200k (or High) |
| **Score / priority** | P×I (or High/Med/Low) |
| **Owner** | Procurement lead |
| **Strategy** | Mitigate |
| **Response actions** | Add backup supplier; negotiate penalties; weekly vendor checkpoints |
| **Trigger** | Supplier misses interim milestone |
| **Contingency plan** | Switch to backup supplier |
| **Fallback plan** | Re-sequence work; expedite shipping |
| **Status** | Active / watchlist / closed / realized |

::: tip 💡 Exam shortcut
If a risk response requires effort, it belongs in the **schedule/backlog** with an owner. “We have a plan” is meaningless if no work is planned.
:::

### Risk Assessment Matrix (P×I)
Use this logic to prioritize (qualitative analysis):

| Probability | Impact | Score | Priority Action |
|---|---|---|---|
| **High (>70%)** | **High (>50%)** | **Critical** | Immediate mitigation + Active monitoring |
| **High** | **Low** | **High/Med** | Manage/Reduce probability |
| **Low (<30%)** | **High** | **High/Med** | Insure/Transfer or Contingency plan |
| **Low** | **Low** | **Low** | Watchlist (monitor only) |

---

## 🛡️ Risk Response “Mini-Plan” (Fast Template)
When you choose a strategy (avoid/mitigate/transfer/accept/escalate), make it executable:

1. **Owner**: Who is accountable?
2. **Actions**: What will we do (specific tasks)?
3. **Trigger**: What early signal tells us to start?
4. **Contingency**: If it happens, what do we execute?
5. **Fallback**: If the contingency isn’t enough, what is Plan B?
6. **Residual/secondary risks**: What remains or what new risks did we create?

---

## 💰 Reserves Cheat Sheet
| Reserve | Used for | In cost baseline? | Typical approval |
|---|---|---:|---|
| **Contingency reserve** | Identified risks (known-unknowns) | Yes | PM (within limits) |
| **Management reserve** | Unidentified risks (unknown-unknowns) | No | Sponsor/management via change control |

---

## ✅ Quality Metrics (Practical Examples)
Pick metrics that are observable and tied to requirements.

| Metric | What it tells you | Common use |
|---|---|---|
| **Defect density** | Defects per unit (module/story/function point) | Trend quality over time |
| **Escaped defects** | Defects found after release | Indicates weak prevention/appraisal |
| **Test pass rate** | Stability of builds and changes | CI effectiveness |
| **Cycle time / lead time** | Flow efficiency | Process improvement |
| **Rework %** | Hidden cost of poor quality | Cost of Quality driver |
| **Availability / MTTR** | Operational reliability | Service quality outcomes |

---

## 🧾 Definition of Done (Starter Checklist)
Use this as a baseline and tailor to your domain:

- Acceptance criteria met (validated with product owner/customer)
- Automated tests added/updated and passing
- Peer review complete (and feedback addressed)
- Security/compliance checks complete (as required)
- Documentation updated (user + technical as needed)
- No critical defects open for the story/release

### 📋 Quality Audit Checklist (Are we doing the right thing?)
Use for **Manage Quality (QA)**:
1.  [ ] Are we using the correct document templates?
2.  [ ] Are code reviews happening for every PR?
3.  [ ] Is the "Definition of Done" being respected?
4.  [ ] Are safety/compliance checks being skipped?
5.  [ ] Is the defect log up to date?

---

## 🛠️ 7 Quality Tools: Quick Pick
| If you need to… | Use… |
|---|---|
| Find root causes | **Fishbone** + **5 Whys** |
| Prioritize “vital few” causes | **Pareto chart** |
| Check process stability over time | **Control chart** |
| See data distribution/spread | **Histogram** |
| Collect frequency counts during inspection | **Checksheet** |
| Visualize steps/hand-offs | **Flowchart** |
| Explore correlation between variables | **Scatter diagram** |

---

## 📈 Control Chart Cheat Sheet (Simplified)
Common “investigate” signals:

- Any point **outside** UCL/LCL
- A **run** of points on one side of the mean (non-random pattern)
- Clear **trend** up or down over time

Key concept pair:
- **Control limits** = process stability (statistical)
- **Specification limits** = requirement boundaries (customer/contract)

---

## 🧭 Cynefin Quick Pick
| Domain | Environment feels like… | Best move |
|---|---|---|
| **Clear** | Known rules, repeatable work | Standardize, automate, follow best practice |
| **Complicated** | Multiple right answers | Bring experts, analyze, decide |
| **Complex** | Unpredictable, learning required | Experiment, iterate, adapt (probe–sense–respond) |
| **Chaotic** | Crisis, no time | Act to stabilize, then reassess |

---

## 🗓️ Weekly “Risk + Quality” Review Agenda (10 Minutes)
- New risks/opportunities since last review
- Top risks: triggers, actions progress, owner updates
- Recent defects: trend, root cause themes, corrective actions
- Any complexity signals (dependency surprises, stakeholder misalignment)
- Updates needed: Risk Register, Issue Log, quality checklist/DoD

