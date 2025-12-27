# 7.1 Risk Management

Risk is **uncertainty that matters**—it can help you (opportunities) or hurt you (threats). The PMP exam tests whether you can:

- Identify risk early (before it becomes an issue)
- Prioritize what actually matters (not “track everything”)
- Choose the *best* response strategy (given authority, budget, and urgency)
- Keep risk management continuous (especially in Agile/hybrid environments)

---

## The PMP Mental Model (Continuous Loop)
Risk management is not “one workshop then a register.” It’s a loop you run all project long:

1. **Plan the approach** (how formal, thresholds, roles, cadence)
2. **Identify risks** (threats + opportunities)
3. **Analyze** (qualitative first; quantitative when needed)
4. **Plan responses** (actions, owners, triggers, reserves)
5. **Implement responses** (do the work in the schedule/backlog)
6. **Monitor & adapt** (reviews, audits, new risks, issue handling)

::: tip 💡 2026 Focus: Risk vs. Issue
- **Risk**: A future uncertainty → tracked in the **Risk Register** (or risk backlog).
- **Issue**: A present reality (it happened) → tracked in the **Issue Log** with corrective action.
:::

---

## 🏗️ The Risk Framework (Threats + Opportunities)
Every risk has three elements: **cause → event → impact**.

<div class="risk-type-grid">
  <div class="risk-type-card threat">
    <div class="risk-type-title">Threats</div>
    <div class="risk-type-subtitle">Negative Risks</div>
    <p>Events you want to <strong>Avoid</strong>, <strong>Mitigate</strong>, or <strong>Transfer</strong>.</p>
    <ul>
      <li><strong>Resource shortage:</strong> Key architect gets sick.</li>
      <li><strong>Scope creep:</strong> New requirements keep appearing.</li>
      <li><strong>Technical debt:</strong> Platform is less stable than expected.</li>
    </ul>
  </div>
  <div class="risk-type-card opportunity">
    <div class="risk-type-title">Opportunities</div>
    <div class="risk-type-subtitle">Positive Risks</div>
    <p>Events you want to <strong>Exploit</strong>, <strong>Enhance</strong>, or <strong>Share</strong>.</p>
    <ul>
      <li><strong>Efficiency gain:</strong> Team discovers a faster method.</li>
      <li><strong>Cost reduction:</strong> Vendor offers bulk pricing.</li>
      <li><strong>Innovation:</strong> New tech solves the problem better.</li>
    </ul>
  </div>
  <div class="risk-type-card overall">
    <div class="risk-type-title">Overall Project Risk</div>
    <div class="risk-type-subtitle">The “Net Uncertainty”</div>
    <p>The combined effect of all uncertainty. Two projects can have the same specific risks, but one might be much riskier overall due to complexity, political environment, or strict constraints.</p>
  </div>
</div>

---

## 📋 The Risk Register (What “Good” Looks Like)
The exam rarely asks for a perfect template—but it *does* expect you to know what’s missing when risk management is weak.

### Minimum fields (exam-ready)
| Field | Why it matters |
|---|---|
| **Risk statement** (cause → event → impact) | Forces clarity; avoids vague “risk: schedule delay” entries |
| **Category** (RBS) | Prevents blind spots; supports root cause patterns |
| **Probability / Impact** | Enables prioritization |
| **Risk owner** | One accountable person to drive response work |
| **Response strategy + actions** | Makes it executable (not theoretical) |
| **Trigger** | Early warning sign that it’s about to occur |
| **Contingency / fallback** | “If it happens, we do X” |
| **Status** | Active / watchlist / closed / realized (issue) |

::: warning ⚠️ Common exam trap
If a risk response requires work, it must be integrated into the **schedule/backlog** (and resourced). A “plan” that isn’t scheduled is not a plan.
:::

::: tip 🧰 Templates
For copy/paste-ready register fields and response mini-plans, use [7.4 Tools & Templates](./toolkit).
:::

---

## 🔎 Identify Risks (Practical Techniques)
Use multiple techniques because each has bias.

| Technique | Best for | PMP clues |
|---|---|---|
| **Workshops / brainstorming** | Broad coverage fast | Early phases; cross-functional sessions |
| **Pre-mortem** | Hidden risks + human factors | “Imagine the project failed…” |
| **Interviews** | Deep technical/SME risk | “Experts disagree / complex integration” |
| **Prompt lists** (RBS, PESTLE, contract clauses) | Structured completeness | “We keep missing risks” |
| **Assumption analysis** | Fragile plans | “We assumed X would be available…” |
| **SWOT** | Strategic uncertainty | “Market/competition/regulations” |
| **Root cause analysis** | Pattern-based risks | “Recurring defect / recurring slip” |

### ⚠️ Cognitive Biases in Risk
The exam may test your ability to spot why a team is missing risks:
- **Availability Bias**: Focusing only on risks that happened recently or are memorable.
- **Confirmation Bias**: Looking only for data that supports the "happy path" plan.
- **Optimism Bias**: systematically underestimating cost and duration.

---

## 📊 Analyze Risks (Qualitative → Quantitative)
You prioritize where to spend limited management energy.

<div class="analysis-grid">
  <div class="analysis-card">
    <div class="analysis-title">Qualitative Analysis</div>
    <div class="analysis-tag">Fast & Judgment-Based</div>
    <p>Rank risks (e.g., High/Medium/Low) using a <strong>Probability/Impact Matrix</strong>. Also consider <strong>Urgency</strong> (how soon?) and <strong>Proximity</strong> (how close?).</p>
    <p><strong>Crucial Step: Risk Data Quality Assessment</strong>. Before believing the data, ask: "Is this risk data accurate and reliable?" If you are guessing, the analysis is worthless.</p>
  </div>
  <div class="analysis-card">
    <div class="analysis-title">Quantitative Analysis</div>
    <div class="analysis-tag">Numerical & Data-Driven</div>
    <p>Estimate numeric outcomes using <strong>EMV</strong>, <strong>decision trees</strong>, or <strong>Monte Carlo</strong> when stakeholders need confidence levels (e.g., "We have an 85% chance of finishing by June").</p>
  </div>
</div>

### Quant basics: Expected Monetary Value (EMV)
**EMV = Probability × Impact**

Example: 30% chance of a $200k impact → EMV = 0.30 × $200,000 = **$60,000**.

---

## 🛡️ Response Strategies (Choose the BEST One)
The exam will test judgment: strategy selection depends on severity, ownership, authority, and cost-effectiveness.

| Type | Strategy | What it means | Trade-off / Cost |
|---|---|---|---|
| Threat | **Avoid** | Eliminate the threat (change scope/approach) | High upfront effort; may reduce scope/value. |
| Threat | **Mitigate** | Reduce probability or impact | Costs money/resources now to save later. |
| Threat | **Transfer** | Shift impact to a third party (insurance/contract) | You pay a premium; risk is owned by another. |
| Threat | **Accept** | Acknowledge; prepare if needed | No prevention cost, but potential full impact cost. |
| Threat | **Escalate** | Outside PM authority | Requires handing off control to higher ups. |
| Opportunity | **Exploit** | Make it happen (remove uncertainty) | High resource investment. |
| Opportunity | **Enhance** | Increase probability/impact | Moderate investment to boost upside. |
| Opportunity | **Share** | Partner to realize benefit | You must split the reward/benefit. |
| Opportunity | **Accept** | Take advantage if it occurs | Zero cost, but no guarantee of gain. |

### Contingency vs fallback vs workaround (exam language)
| Term | When used | Meaning |
|---|---|---|
| **Contingency plan** | For a known risk | Planned response if the risk happens |
| **Fallback plan** | If contingency fails | “Plan B” when the primary response isn’t effective |
| **Workaround** | For an issue | Unplanned response to an unanticipated problem |

---

## 🔄 Risk in Different Environments
How you manage risk changes based on the delivery approach.

| Approach | Risk Identification | Response Planning | Monitoring |
|---|---|---|---|
| **Predictive** | Upfront (detailed analysis) | Built into schedule buffer & budget | Monthly reviews; Change Control for major shifts |
| **Agile** | Continuous (every Sprint Planning & Retro) | Quick experiments (Spikes), reprioritizing backlog | Daily Standups, Sprint Reviews |
| **Hybrid** | Program-level = Predictive; Team-level = Agile | High-level buffers + Team velocity adjustments | Escalation from Team to Program if buffers breached |

---

---

## 💰 Reserves (Contingency vs Management)
| Reserve | For | In cost baseline? | Typical approval |
|---|---|---:|---|
| **Contingency reserve** | Known-unknowns (identified risks) | Yes | PM (within limits) |
| **Management reserve** | Unknown-unknowns | No | Sponsor/management via change control |

::: tip 💡 Exam Pattern
If the scenario says the risk was **not** identified, and you need extra money/time, you’re likely in **management reserve / change request** territory.
:::

---

## 🔍 Monitor Risks (Make It Operational)
Risk monitoring is where most projects fail: they track risks but don’t *use* them.

### High-value monitoring activities
- **Risk reviews** (weekly/sprint): status, triggers, new risks, response progress
- **Risk reassessment** (monthly/phase): reprioritize as the project evolves
- **Risk audits**: are responses effective, or just “paper compliance”?
- **Reserve analysis**: do we still have enough buffer?
- **Issue conversion**: when a risk occurs, execute the response and log the issue

### Residual vs secondary risk
- **Residual risk**: what remains after response (“still a chance of delay”)
- **Secondary risk**: new risk created by the response (“backup vendor quality risk”)

---

## 🚀 Agile & Hybrid Risk (How It Shows Up on the Exam)
In Agile, risk management is continuous and built into feedback loops:

- Slice work to deliver value early (reduces **delivery risk**)
- Use **spikes/prototypes** to reduce technical uncertainty
- Visualize risk with a **risk board** or **risk burndown**
- Treat “risk-heavy” work as a priority, not “later”
- Bake quality into risk responses (tests, reviews, DoD updates)

---

## ✅ Exam Scenarios: “First Action” Clues
| If the question says… | Best first move is usually… |
|---|---|
| “Risk has occurred and response exists” | **Implement planned response**, log as **issue** |
| “New risk discovered mid-project” | **Document + analyze**, assign owner |
| “Risk is outside PM authority” | **Escalate** through governance |
| “Repeated slips/defects” | **Root cause analysis**, update responses |
| “Stakeholders want confidence level” | **Quantitative analysis** (EMV/simulation) |

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If an exam scenario says a risk has occurred, the FIRST action is to <strong>implement the planned response</strong> and update the <strong>Issue Log</strong>. The time for analysis was when it was still a risk.
</div>

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
.overall { border-top: 4px solid #8b5cf6; }

.threat .risk-type-title { color: #ef4444; }
.opportunity .risk-type-title { color: #10b981; }
.overall .risk-type-title { color: #8b5cf6; }

.analysis-card p, .risk-type-card p {
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.55;
}

.study-tip {
  background: var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand);
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem 0;
}
</style>
