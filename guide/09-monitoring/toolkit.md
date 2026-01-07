<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# 9.3 Tools & Templates (Monitoring & Closing Toolkit)

**ECO Task**: Manage and control changes

Use this page as a copy/paste toolkit for Monitoring & Controlling and Project Closure scenarios. It’s designed to match how the PMP exam phrases problems (“what should you do first?”).

---

## Monitoring Cadence (15-Minute Weekly Agenda)

<ConceptCard title="Weekly Monitoring Agenda">
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)); border-radius: 8px; border-left: 4px solid #3b82f6;">
      <span style="font-size: 1.2em;">📊</span>
      <div>
        <strong style="color: #3b82f6;">Progress Check</strong>
        <p style="margin: 4px 0 0 0; opacity: 0.9;">Progress vs baseline/backlog (milestones, burnup/burndown)</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border-radius: 8px; border-left: 4px solid #22c55e;">
      <span style="font-size: 1.2em;">📈</span>
      <div>
        <strong style="color: #22c55e;">Variance Analysis</strong>
        <p style="margin: 4px 0 0 0; opacity: 0.9;">Variances + trends (CPI/SPI or flow metrics)</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1)); border-radius: 8px; border-left: 4px solid #ef4444;">
      <span style="font-size: 1.2em;">⚠️</span>
      <div>
        <strong style="color: #ef4444;">Risks and Issues</strong>
        <p style="margin: 4px 0 0 0; opacity: 0.9;">Top risks and issues (new, escalations, owners, due dates)</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); border-radius: 8px; border-left: 4px solid #a855f7;">
      <span style="font-size: 1.2em;">🔄</span>
      <div>
        <strong style="color: #a855f7;">Change Requests</strong>
        <p style="margin: 4px 0 0 0; opacity: 0.9;">Open change requests (status + decisions needed)</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.1)); border-radius: 8px; border-left: 4px solid #f59e0b;">
      <span style="font-size: 1.2em;">🎯</span>
      <div>
        <strong style="color: #f59e0b;">Next Week Plan</strong>
        <p style="margin: 4px 0 0 0; opacity: 0.9;">What changes based on what we learned</p>
      </div>
    </div>
  </div>
</ConceptCard>

::: tip  Exam shortcut
If there is a problem, you usually (1) analyze it, (2) decide an action, and (3) communicate it. “Doing work” without the decision step is often the wrong answer.
:::

---

## Status Report Template (Predictive / Hybrid)

<ConceptCard title="One-Page Status Report Structure">
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <p style="margin: 0 0 12px 0; font-size: 0.9em; opacity: 0.8;">Rule: Sponsor should understand status in < 60 seconds.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div style="background: rgba(59, 130, 246, 0.05); padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6;">
        <strong>Overall Status (RAG)</strong>
        <div style="font-size: 0.9em; margin-top: 4px;">Red/Amber/Green + 1-sentence reason</div>
      </div>
      <div style="background: rgba(34, 197, 94, 0.05); padding: 10px; border-radius: 6px; border-left: 3px solid #22c55e;">
        <strong>Accomplished</strong>
        <div style="font-size: 0.9em; margin-top: 4px;">Key completed items this period</div>
      </div>
       <div style="background: rgba(168, 85, 247, 0.05); padding: 10px; border-radius: 6px; border-left: 3px solid #a855f7;">
        <strong>Planned</strong>
        <div style="font-size: 0.9em; margin-top: 4px;">Priorities for next period</div>
      </div>
      <div style="background: rgba(245, 158, 11, 0.05); padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b;">
        <strong>Metrics & Forecast</strong>
        <div style="font-size: 0.9em; margin-top: 4px;">Milestones, CPI/SPI, Budget, EAC</div>
      </div>
    </div>
    <div style="background: rgba(239, 68, 68, 0.05); padding: 10px; border-radius: 6px; border-left: 3px solid #ef4444;">
      <strong>Risks, Issues & Decisions</strong>
      <div style="font-size: 0.9em; margin-top: 4px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
        <span>• Top Risks</span>
        <span>• Critical Issues</span>
        <span>• Decisions Needed</span>
      </div>
    </div>
  </div>
</ConceptCard>

---

## EVM Worksheet (Mini Template)

<ConceptCard title="Earned Value Management Metrics">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; text-align: center;">
      <div style="background: #f1f5f9; padding: 8px; border-radius: 6px;">
        <strong>BAC</strong><div style="font-size: 0.8em; opacity: 0.7;">Budget at Completion</div>
      </div>
      <div style="background: #f1f5f9; padding: 8px; border-radius: 6px;">
        <strong>PV</strong><div style="font-size: 0.8em; opacity: 0.7;">Planned Value</div>
      </div>
      <div style="background: #f1f5f9; padding: 8px; border-radius: 6px;">
        <strong>EV</strong><div style="font-size: 0.8em; opacity: 0.7;">Earned Value</div>
      </div>
      <div style="background: #f1f5f9; padding: 8px; border-radius: 6px;">
        <strong>AC</strong><div style="font-size: 0.8em; opacity: 0.7;">Actual Cost</div>
      </div>
    </div>
    <div style="background: rgba(59, 130, 246, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.2);">
      <strong style="color: #3b82f6; display: block; margin-bottom: 8px;">Variances (History)</strong>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <strong>CV = EV - AC</strong>
          <div style="font-size: 0.8em;">Cost Variance</div>
        </div>
        <div>
          <strong>SV = EV - PV</strong>
          <div style="font-size: 0.8em;">Schedule Variance</div>
        </div>
      </div>
    </div>
    <div style="background: rgba(168, 85, 247, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.2);">
      <strong style="color: #a855f7; display: block; margin-bottom: 8px;">Indices (Efficiency)</strong>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <strong>CPI = EV / AC</strong>
          <div style="font-size: 0.8em;">Cost Performance Index</div>
          <div style="font-size: 0.75em; color: #ef4444; margin-top: 2px;">Over budget if less than 1</div>
        </div>
        <div>
          <strong>SPI = EV / PV</strong>
          <div style="font-size: 0.8em;">Schedule Performance Index</div>
          <div style="font-size: 0.75em; color: #ef4444; margin-top: 2px;">Behind schedule if less than 1</div>
        </div>
      </div>
    </div>
    <div style="background: rgba(34, 197, 94, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.2);">
      <strong style="color: #22c55e; display: block; margin-bottom: 8px;">Forecasts (Future)</strong>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <strong>EAC = BAC / CPI</strong>
          <div style="font-size: 0.8em;">Estimate at Completion</div>
        </div>
        <div>
          <strong>TCPI = (BAC-EV)/(BAC-AC)</strong>
          <div style="font-size: 0.8em;">To-Complete Performance Index</div>
          <div style="font-size: 0.75em; color: #ef4444; margin-top: 2px;">Harder to finish if greater than 1</div>
        </div>
      </div>
    </div>
  </div>
</ConceptCard>

---

##  Variance Log (Copy/Paste Template)

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

##  Issue Log (Copy/Paste Template)

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

::: tip  Exam shortcut
If it is happening **now**, it is usually an **issue** (issue log). If it might happen later, it is a **risk** (risk register).
:::

---

##  Risk Register (Monitoring Template)

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

##  Change Request Form (Copy/Paste Template)

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

##  Decision Log (Copy/Paste Template)

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

## Transition / Handoff Checklist

<ConceptCard title="Operational Readiness & Handoff">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Acceptance/Sign-off obtained
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Ops owner engaged
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Training delivered
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Runbooks delivered
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Access/Tooling configured
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Warranty/SLAs documented
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Residual risks agreed
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="color: #22c55e;">✅</span> Benefits owner assigned
    </div>
  </div>
  <p style="margin-top: 12px; font-size: 0.9em; font-style: italic; opacity: 0.8; border-top: 1px solid #e2e8f0; padding-top: 8px;">
    Goal: Prevent "it works, so we are done" thinking. Ensure sustainable operations.
  </p>
</ConceptCard>

##  Benefits Handoff (Mini Template)

| Benefit | Metric | Target | Owner | When measured | Data source |
|---|---|---|---|---|---|
| Reduce support costs | cost per ticket | -20% | Ops director | monthly | finance system |

---

## Close Project or Phase Checklist

<ConceptCard title="Formal Closure Steps">
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div style="background: rgba(59, 130, 246, 0.05); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
      <strong>1. Deliverables Accepted</strong> (Validate Scope)
    </div>
    <div style="background: rgba(59, 130, 246, 0.05); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
      <strong>2. Financials Closed</strong> (Final budget reconciled, payments complete)
    </div>
    <div style="background: rgba(59, 130, 246, 0.05); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
      <strong>3. Contracts Closed</strong> (Procurements finalized, claims resolved)
    </div>
    <div style="background: rgba(59, 130, 246, 0.05); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
      <strong>4. Risks & Issues</strong> (Closed, Transferred, or Accepted)
    </div>
    <div style="background: rgba(59, 130, 246, 0.05); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
      <strong>5. Knowledge Transition</strong> (Final Report, Lessons Learned, OPAs archived)
    </div>
    <div style="background: rgba(59, 130, 246, 0.05); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
      <strong>6. Release Resources</strong> (Team released, recognition given)
    </div>
  </div>
</ConceptCard>

##  Final Report (One-Page Template)

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

##  Lessons Learned Session (Agenda + Output)

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

##  Procurement Closure Checklist (If Vendors Are Involved)

- Confirm final deliverables meet contract acceptance criteria
- Complete inspections and acceptance documentation
- Resolve open change orders
- Resolve claims/disputes (negotiation/ADR per policy)
- Final payments completed (including retainage)
- Procurement audit completed (if applicable)
- Vendor performance evaluation captured (OPA input)
- Contract files archived

---

##  Configuration Management Log

Track changes to configuration items (documents, code, deliverables).

| Field | Example |
|---|---|
| **CI ID** | CI-042 |
| **CI Name** | Requirements Specification |
| **Current Version** | v2.3 |
| **Previous Version** | v2.2 |
| **Change Description** | Added acceptance criteria for dark mode feature |
| **Change Date** | 2026-02-10 |
| **Changed By** | Product Owner |
| **Approved By** | CCB / PM |
| **Related CR** | CR-014 |
| **Location** | /docs/requirements/v2.3 |

### Version Control Matrix (Quick Reference)

| Configuration Item | Current Version | Status | Last Updated | Owner |
|---|---|---|---|---|
| Requirements Spec | v2.3 | Approved | 2026-02-10 | Product Owner |
| Architecture Doc | v1.4 | Draft | 2026-02-08 | Tech Lead |
| Build (Staging) | v1.5.2 | Tested | 2026-02-11 | Dev Lead |
| Build (Production) | v1.4.7 | Live | 2026-01-28 | Dev Lead |
| Test Plan | v1.2 | Approved | 2026-02-05 | QA Lead |

---

##  Performance Review Template (Team/Vendor)

Use for periodic performance reviews during monitoring.

### Team Member Performance Review

| Field | Content |
|---|---|
| **Name** | John Developer |
| **Role** | Senior Developer |
| **Review Period** | 2026-01-01 to 2026-02-14 |
| **Objectives Assigned** | Complete API integration, mentor junior dev |
| **Objectives Met** | API integration complete (on time); mentoring in progress |
| **Quality of Work** | High – 0 defects escaped to UAT |
| **Collaboration** | Effective team player; constructive in retros |
| **Areas for Development** | Documentation consistency |
| **PM Feedback** | Strong contributor; recommend for leadership track |
| **Next Period Focus** | Lead testing automation initiative |

### Vendor Performance Review

| Field | Content |
|---|---|
| **Vendor Name** | TechPartner Solutions |
| **Contract Ref** | CONTRACT-2026-001 |
| **Review Period** | 2026-01-01 to 2026-02-14 |
| **Deliverables Due** | Module A, Module B |
| **Deliverables Accepted** | Module A (on time, passed all tests) |
| **Deliverables Outstanding** | Module B (5 days delayed, in progress) |
| **Quality Score** | 4/5 (minor defects found in Module A) |
| **Communication Score** | 5/5 (responsive, proactive updates) |
| **Issues** | Hardware delay caused 5-day slip |
| **Corrective Actions** | Vendor expedited shipping; added resources |
| **Overall Rating** | Good – recommend continued engagement |

---

##  Escalation Log Template

Track issues that require escalation beyond the project team.

| Field | Example |
|---|---|
| **Escalation ID** | ESC-003 |
| **Related Issue/Risk** | I-021 (Test environment unavailable) |
| **Description** | Test environment has been down for 5 business days; blocking UAT |
| **Impact** | UAT delayed by 7 days; milestone at risk |
| **Escalated To** | VP of Infrastructure |
| **Escalated By** | Project Manager |
| **Escalation Date** | 2026-02-05 |
| **Response Required By** | 2026-02-06 |
| **Resolution** | Emergency infra support assigned; environment restored 2026-02-06 |
| **Resolution Date** | 2026-02-06 |
| **Status** | Resolved |

### Escalation Path Reference

<ConceptCard title="Escalation Hierarchy">
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 6px; border-left: 4px solid #94a3b8;">
      <div style="background: #94a3b8; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8em;">1</div>
      <div style="flex: 1;">
        <strong>Team Level</strong> (Same Day)
        <div style="font-size: 0.9em; opacity: 0.8;">Blocker within team → Scrum Master / Team Lead</div>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f0f9ff; border-radius: 6px; border-left: 4px solid #3b82f6;">
      <div style="background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8em;">2</div>
      <div style="flex: 1;">
        <strong>Project Level</strong> (1-2 Days)
        <div style="font-size: 0.9em; opacity: 0.8;">Cross-team dependency → Project Manager</div>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #fff7ed; border-radius: 6px; border-left: 4px solid #f97316;">
      <div style="background: #f97316; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8em;">3</div>
      <div style="flex: 1;">
        <strong>Program/Sponsor</strong> (2-3 Days)
        <div style="font-size: 0.9em; opacity: 0.8;">Resource/Budget issue → Sponsor / Steering Comm.</div>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #fef2f2; border-radius: 6px; border-left: 4px solid #ef4444;">
      <div style="background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8em;">4</div>
      <div style="flex: 1;">
        <strong>Strategic/Executive</strong> (As Needed)
        <div style="font-size: 0.9em; opacity: 0.8;">Contract/Strategic issue → Executive / Legal</div>
      </div>
    </div>
  </div>
</ConceptCard>

---

##  Stakeholder Engagement Assessment Matrix

Track stakeholder engagement levels and compare current vs. desired.

| Stakeholder | Role | Current Level | Desired Level | Gap | Action |
|---|---|---|---|---|---|
| Sarah Chen | Sponsor | Supportive | Leading | +1 | Provide project wins to champion |
| Mike Ops | Operations Director | Neutral | Supportive | +1 | Involve in transition planning |
| Legal Team | Compliance | Resistant | Neutral | +1 | Address contract concerns |
| End Users | Customer | Unaware | Supportive | +2 | Launch awareness campaign + demos |

<strong>Engagement Levels:</strong> Unaware → Resistant → Neutral → Supportive → Leading

---

##  Threshold Alert Template

Use when variance exceeds defined thresholds.

| Field | Example |
|---|---|
| **Alert ID** | ALERT-007 |
| **Metric** | CPI |
| **Threshold** | Below 0.95 |
| **Current Value** | 0.91 |
| **Variance** | -4.2% |
| **Trend** | Declining for 3 periods |
| **Root Cause (Preliminary)** | Rework costs due to unclear requirements |
| **Impact Assessment** | EAC increased by $45K; schedule unaffected |
| **Recommended Action** | Corrective: add requirements workshop; preventive: update DoD |
| **Escalation Required?** | Yes – Sponsor notification per threshold policy |
| **Decision Needed** | Approve additional budget or descope |

---

##  Sprint/Iteration Metrics Dashboard (Agile)

Use for agile project monitoring cadence.

| Metric | Sprint 5 | Sprint 6 | Sprint 7 | Trend |
|---|---|---|---|---|
| **Velocity** | 42 pts | 38 pts | 40 pts | Stable |
| **Committed** | 45 pts | 42 pts | 42 pts | — |
| **Delivered** | 42 pts | 38 pts | 40 pts | — |
| **Carryover** | 3 pts | 4 pts | 2 pts | Improving |
| **Defects Found** | 8 | 12 | 6 | Improving |
| **Defects Resolved** | 10 | 9 | 8 | Stable |
| **Defect Backlog** | 15 | 18 | 16 | Watch |
| **Cycle Time (avg)** | 3.2 days | 3.5 days | 3.1 days | Stable |
| **Lead Time (avg)** | 8.5 days | 9.2 days | 8.1 days | Improving |

### Sprint Health Indicators

<ConceptCard title="Sprint Health Thresholds">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
    <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; border-radius: 8px; padding: 12px;">
      <strong style="color: #15803d; display: block; margin-bottom: 8px;">🟢 Good (Stable)</strong>
      <ul style="margin: 0; padding-left: 16px; font-size: 0.9em; color: #15803d;">
        <li>Velocity: ±10%</li>
        <li>Defects: &lt;5% escape</li>
        <li>Carryover: &lt;10%</li>
        <li>Retro actions: >80% done</li>
      </ul>
    </div>
    <div style="background: rgba(234, 179, 8, 0.1); border: 1px solid #eab308; border-radius: 8px; padding: 12px;">
      <strong style="color: #a16207; display: block; margin-bottom: 8px;">🟡 Warning (Watch)</strong>
      <ul style="margin: 0; padding-left: 16px; font-size: 0.9em; color: #a16207;">
        <li>Velocity: ±20%</li>
        <li>Defects: 5-15% escape</li>
        <li>Carryover: 10-25%</li>
        <li>Retro actions: 50-80% done</li>
      </ul>
    </div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; border-radius: 8px; padding: 12px;">
      <strong style="color: #b91c1c; display: block; margin-bottom: 8px;">🔴 Critical (Action)</strong>
      <ul style="margin: 0; padding-left: 16px; font-size: 0.9em; color: #b91c1c;">
        <li>Velocity: >±30%</li>
        <li>Defects: >15% escape</li>
        <li>Carryover: >25%</li>
        <li>Retro actions: &lt;50% done</li>
      </ul>
    </div>
  </div>
</ConceptCard>

---

## Monte Carlo Summary Template

<ConceptCard title="Probabilistic Forecast Report">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; justify-content: space-between; font-size: 0.9em; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">
      <span>Analysis Date: 2026-02-15</span>
      <span>Simulations: 10,000</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
      <div style="background: rgba(34, 197, 94, 0.05); padding: 12px; border-radius: 8px; border-left: 3px solid #22c55e;">
        <strong style="color: #15803d; display: block; margin-bottom: 8px;">📅 Schedule Forecast</strong>
        <div style="display: flex; justify-content: space-between; font-size: 0.9em; margin-bottom: 4px;">
          <span>P50 (Target)</span>
          <strong>2026-06-15</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9em; margin-bottom: 4px;">
          <span>P80 (Commit)</span>
          <strong>2026-07-01</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9em;">
          <span>P90 (Safe)</span>
          <strong>2026-07-15</strong>
        </div>
      </div>
      <div style="background: rgba(59, 130, 246, 0.05); padding: 12px; border-radius: 8px; border-left: 3px solid #3b82f6;">
        <strong style="color: #1d4ed8; display: block; margin-bottom: 8px;">💰 Cost Forecast</strong>
        <div style="display: flex; justify-content: space-between; font-size: 0.9em; margin-bottom: 4px;">
          <span>P50</span>
          <span>$485k (Under)</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9em; margin-bottom: 4px;">
          <span>P80</span>
          <span>$512k (Over)</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9em;">
          <span>P90</span>
          <span>$545k (Over)</span>
        </div>
      </div>
    </div>
    <div style="background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px dashed #94a3b8;">
      <strong style="display: block; margin-bottom: 8px;">Strategic Recommendation</strong>
      <ul style="margin: 0; padding-left: 16px; font-size: 0.9em; color: #334155;">
        <li><strong>Commit to P80 date</strong> (July 1st) for external stakeholders</li>
        <li><strong>Plan to P50 date</strong> (June 15th) for internal targets</li>
        <li><strong>Reserve $27k contingency</strong> (P80 - BAC) for cost risk</li>
      </ul>
    </div>
  </div>
</ConceptCard>

---

## Contract Closure Checklist by Type

<ConceptGrid :cols="2">
  <ConceptCard title="Fixed Price (FFP)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>Deliverables verified to spec</li>
      <li>Acceptance cert signed</li>
      <li>Final payment (price only)</li>
      <li>Warranty documented</li>
      <li>Retainage released</li>
    </ul>
  </ConceptCard>
  
  <ConceptCard title="Time & Materials (T&M)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>Timesheets verified</li>
      <li>Labor rates checked</li>
      <li>Materials receipts verified</li>
      <li>Total vs Ceiling check</li>
      <li>Final invoice approved</li>
    </ul>
  </ConceptCard>

  <ConceptCard title="Cost Plus Fixed Fee (CPFF)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>Costs audited (allowable?)</li>
      <li>Unallowable costs excluded</li>
      <li>Fixed fee confirmed</li>
      <li>Final cost report</li>
      <li>Final payment processed</li>
    </ul>
  </ConceptCard>

  <ConceptCard title="Cost Plus Incentive (CPIF)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>Costs audited</li>
      <li>Target vs Actual variance</li>
      <li>Sharing ratio applied</li>
      <li>Incentive fee calculated</li>
      <li>Fee caps applied</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

### CPIF Fee Calculation Worksheet

| Parameter | Contract Value | Actual Value |
|---|---|---|
| Target Cost | $ | $ |
| Target Fee | $ | n/a |
| Sharing Ratio (Buyer/Seller) | __/__ | n/a |
| Maximum Fee | $ | n/a |
| Minimum Fee | $ | n/a |

| Calculation | Result |
|---|---|
| Cost Variance (Target - Actual) | $ |
| Seller Share of Variance | $ |
| Preliminary Fee (Target ± Share) | $ |
| Final Fee (after caps) | $ |
| **Total Payment (Cost + Fee)** | **$** |

---

## Regulatory Compliance Closure Matrix

<ConceptGrid :cols="2">
  <ConceptCard title="Healthcare (FDA/HIPAA)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>System validation (QA Lead)</li>
      <li>Audit trail verified (IT)</li>
      <li>Patient data handling (Privacy)</li>
      <li>21 CFR Part 11 records (Reg)</li>
      <li>User training doc (Training)</li>
    </ul>
  </ConceptCard>

  <ConceptCard title="Financial (SOX/PCI-DSS)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>Control doc complete (Audit)</li>
      <li>Access controls verified (Sec)</li>
      <li>Data retention policy (Comp)</li>
      <li>PCI-DSS scope attestation</li>
      <li>Audit evidence archived</li>
    </ul>
  </ConceptCard>

  <ConceptCard title="Government (FAR/OMB)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>CAS compliance report</li>
      <li>DD250 acceptance</li>
      <li>Incurred cost submission</li>
      <li>Property disposition</li>
      <li>Closeout audit resolved</li>
    </ul>
  </ConceptCard>

  <ConceptCard title="Construction (OSHA/Codes)">
    <ul style="margin: 0; padding-left: 16px; font-size: 0.9em;">
      <li>Final inspection cert</li>
      <li>Cert of Occupancy (CO)</li>
      <li>Safety logs archived</li>
      <li>As-built drawings</li>
      <li>Warranty package</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

---

## Closure Readiness Assessment

<ConceptCard title="Project Closure Scorecard">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      <div style="display: flex; align-items: center; gap: 8px; font-size: 0.9em;">
        <div style="width: 16px; height: 16px; border: 2px solid #cbd5e1; border-radius: 4px;"></div> Deliverables Accepted
      </div>
      <div style="display: flex; align-items: center; gap: 8px; font-size: 0.9em;">
        <div style="width: 16px; height: 16px; border: 2px solid #cbd5e1; border-radius: 4px;"></div> CRs Closed
      </div>
      <div style="display: flex; align-items: center; gap: 8px; font-size: 0.9em;">
        <div style="width: 16px; height: 16px; border: 2px solid #cbd5e1; border-radius: 4px;"></div> Issues Resolved
      </div>
      <div style="display: flex; align-items: center; gap: 8px; font-size: 0.9em;">
        <div style="width: 16px; height: 16px; border: 2px solid #cbd5e1; border-radius: 4px;"></div> Procurements Closed
      </div>
      <div style="display: flex; align-items: center; gap: 8px; font-size: 0.9em;">
        <div style="width: 16px; height: 16px; border: 2px solid #cbd5e1; border-radius: 4px;"></div> Budget Reconciled
      </div>
      <div style="display: flex; align-items: center; gap: 8px; font-size: 0.9em;">
        <div style="width: 16px; height: 16px; border: 2px solid #cbd5e1; border-radius: 4px;"></div> Lessons Learned
      </div>
    </div>
    <div style="border-top: 1px solid #e2e8f0; padding-top: 12px;">
      <strong style="display: block; margin-bottom: 8px;">Interpretation Guide</strong>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9em;">
          <span style="background: #22c55e; color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold;">10/10</span>
          <span>Proceed with formal closure</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9em;">
          <span style="background: #eab308; color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold;">8-9</span>
          <span>Address minor items; close within 1 week</span>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9em;">
          <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold;">Below 7</span>
          <span>Significant blockers; not ready</span>
        </div>
      </div>
    </div>
  </div>
</ConceptCard>

---

## Quick Review

<FlashcardCarousel :cards="[
  { front: `Monitoring vs. Controlling?`, back: `Monitoring = Collecting data/tracking. Controlling = Correcting variances (Action).` },
  { front: `Variance vs. Trend Analysis?`, back: `Variance = Snapshot (Actual vs. Planned). Trend = Over time (improving or degrading?).` },
  { front: `What is a Burnup Chart?`, back: `Tracks work COMPLETED over time (shows scope changes clearly). Better than Burndown for scope creep visibility.` },
  { front: `Definition of Done (DoD) in Monitoring?`, back: `The primary quality gate. Work is not \\'complete\\' until it meets DoD.` },
  { front: `Control Chart: Rule of 7?`, back: `Process is out of control if 7 consecutive data points are on one side of the mean.` },
  { front: `Ishikawa (Fishbone) Diagram?`, back: `Cause-and-effect tool used for Root Cause Analysis (RCA).` },
  { front: `Pareto Chart (80/20 Rule)?`, back: `Histogram ordered by frequency. Shows that 80% of defects come from 20% of causes.` },
  { front: `Validate Scope vs. Control Quality?`, back: `Validate Scope = Customer accepts deliverables. Control Quality = Internally verifying correctness first.` },
  { front: `What goes in the Final Report?`, back: `Summary of performance (Scope/Schedule/Cost), whether objectives were met, and benefits realization status.` },
  { front: `Escalation Path for Issues?`, back: `Team -> PM -> Functional Manager (Resources) or Sponsor (Budget/Strategy).` }
]" />








