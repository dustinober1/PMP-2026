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
| **Pre-mortem** | Hidden risks + human factors | "Imagine the project failed…" |
| **Interviews** | Deep technical/SME risk | "Experts disagree / complex integration" |
| **Prompt lists** (RBS, PESTLE, contract clauses) | Structured completeness | "We keep missing risks" |
| **Assumption analysis** | Fragile plans | "We assumed X would be available…" |
| **SWOT** | Strategic uncertainty | "Market/competition/regulations" |
| **Root cause analysis** | Pattern-based risks | "Recurring defect / recurring slip" |

### Risk Breakdown Structure (RBS) (Categorization Framework)
The RBS organizes risks by category to ensure complete coverage and identify patterns.

**Example RBS for a Software Project:**
```
Project Risks
├─ Technical
│  ├─ Architecture complexity
│  ├─ Integration challenges
│  ├─ New/untested technology
│  └─ Performance/scalability
├─ External
│  ├─ Vendor/supplier dependency
│  ├─ Regulatory/compliance changes
│  ├─ Market shifts
│  └─ Third-party API availability
├─ Organizational
│  ├─ Resource availability
│  ├─ Funding/budget cuts
│  ├─ Competing priorities
│  └─ Organizational change
├─ Project Management
│  ├─ Estimation uncertainty
│  ├─ Scope creep
│  ├─ Communication breakdown
│  └─ Stakeholder misalignment
└─ People
   ├─ Key person departure
   ├─ Skill gaps
   ├─ Team conflict
   └─ Motivation/morale
```

**Exam Tip**: If the question mentions "we keep missing risks in the same category," suggest using an **RBS** or **prompt list** to ensure structured coverage.

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

### Quantitative Analysis Techniques (Exam-Ready)

#### Expected Monetary Value (EMV)
**EMV = Probability × Impact**

Example: 30% chance of a $200k impact → EMV = 0.30 × $200,000 = **$60,000**.

::: tip 💡 Multi-Risk EMV
When evaluating multiple risks, sum their EMVs to determine total risk exposure:
- Risk A: 40% × $50k = $20k
- Risk B: 20% × $100k = $20k
- **Total EMV = $40k** (minimum contingency reserve needed)
:::

#### Decision Tree Analysis
Used when you have multiple decision paths with uncertain outcomes. Calculate EMV for each branch and choose the path with the best expected value.

**Example**: Should we build in-house or outsource?
```
Decision: Build In-House
├─ Success (70%): -$100k cost + $500k benefit = +$400k × 0.70 = +$280k
└─ Failure (30%): -$100k cost + $0 benefit = -$100k × 0.30 = -$30k
EMV (In-House) = +$280k - $30k = +$250k

Decision: Outsource
├─ Success (90%): -$150k cost + $450k benefit = +$300k × 0.90 = +$270k
└─ Failure (10%): -$150k cost + $0 benefit = -$150k × 0.10 = -$15k
EMV (Outsource) = +$270k - $15k = +$255k

BEST CHOICE: Outsource (higher EMV)
```

#### Sensitivity Analysis (Tornado Diagram)
Identifies which variables have the most impact on project outcomes. Variables with the widest bars (most variance) are the highest-priority risks to monitor.

**Typical High-Sensitivity Variables**:
- Labor rates
- Material costs
- Productivity assumptions
- Exchange rates (for global projects)

#### Monte Carlo Simulation
Runs thousands of scenarios to produce probability distributions for cost and schedule.

**Typical Output**: "We have an 80% confidence of finishing by June 30 and staying under $2M."

**When to use**: Stakeholders need confidence levels, or the project has many uncertainties that compound.

### Monte Carlo Simulation: Step-by-Step Walkthrough

Monte Carlo is the gold standard for quantitative risk analysis. Here's how it works in practice:

#### Step 1: Define Three-Point Estimates
For each task or cost element, estimate:
- **O** = Optimistic (best case, 10% probability)
- **M** = Most Likely (normal conditions)
- **P** = Pessimistic (worst case, 10% probability)

**Example Project (3 Tasks):**
| Task | Optimistic | Most Likely | Pessimistic |
|---|---|---|---|
| Design | 10 days | 15 days | 25 days |
| Build | 20 days | 30 days | 50 days |
| Test | 5 days | 10 days | 20 days |

#### Step 2: Define Probability Distributions
Each task follows a distribution (triangular or beta):
- **Triangular**: Equal weight to all three estimates
- **Beta (PERT)**: More weight to Most Likely

**PERT Formula**: 
$$\text{Expected Duration} = \frac{O + 4M + P}{6}$$

**PERT Standard Deviation**:
$$\sigma = \frac{P - O}{6}$$

**Example Calculation (Design Task)**:
- Expected = (10 + 4×15 + 25) / 6 = **15.83 days**
- σ = (25 - 10) / 6 = **2.5 days**

#### Step 3: Run Simulations (1,000-10,000 iterations)
The software randomly samples from each distribution and sums the results. After thousands of runs, you get a probability distribution of outcomes.

#### Step 4: Interpret the S-Curve Output
The cumulative distribution (S-curve) shows confidence levels:

| Confidence Level | Meaning | Typical Use |
|---|---|---|
| **P50** (50th percentile) | 50% chance of meeting this target | Base estimate (equal chance of over/under) |
| **P80** (80th percentile) | 80% chance of meeting this target | Conservative planning target |
| **P90** (90th percentile) | 90% chance of meeting this target | High-confidence commitment |

::: tip 💡 Exam Pattern
"What confidence level should we report?" → If the sponsor wants a **commitment**, use P80 or P90. If they want a **target**, use P50.
:::

#### Sample Monte Carlo Output
```
Project Duration Analysis (1,000 iterations)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Minimum:     42 days
P10:         48 days (10% chance of finishing by this date)
P50:         56 days (50% chance - your base estimate)
P80:         63 days (80% chance - recommended target)
P90:         68 days (90% chance - high confidence)
Maximum:     95 days

Recommendation: Commit to 63 days (P80) with 7-day buffer to P90.
```

---

### PERT Integration with Risk Analysis

PERT (Program Evaluation and Review Technique) provides the foundation for Monte Carlo by calculating expected values and variance.

#### Complete PERT Formulas

| Formula | Purpose | Calculation |
|---|---|---|
| **Expected Value (E)** | Weighted average | (O + 4M + P) / 6 |
| **Standard Deviation (σ)** | Task variability | (P - O) / 6 |
| **Variance (σ²)** | For summing uncertainty | [(P - O) / 6]² |
| **Project Variance** | Total uncertainty | Σ(individual variances on critical path) |
| **Project σ** | For z-score calculation | √(Project Variance) |

#### Z-Score Calculation (Probability of Meeting a Target)
$$z = \frac{\text{Target} - \text{Expected}}{\sigma_{project}}$$

Then look up z in a standard normal table:
| z-score | Probability |
|---|---|
| 0.00 | 50% |
| 0.84 | 80% |
| 1.28 | 90% |
| 1.64 | 95% |
| 2.00 | 97.7% |

**Example**: Expected project duration = 60 days, σ = 5 days. What's the probability of finishing in 65 days?
- z = (65 - 60) / 5 = **1.0**
- Look up z=1.0 → **84% probability** of meeting the target

::: warning ⚠️ Exam Trap
PERT assumes tasks are independent. In reality, risks often correlate (if one slips, others slip too). This is why Monte Carlo is more accurate for complex projects.
:::

---

### Decision Tree Analysis: Complete Worked Example

Decision trees help you choose between options with uncertain outcomes by calculating Expected Monetary Value (EMV) for each path.

#### Problem Statement
Your company must decide how to develop a new feature:
- **Option A: Build In-House** - Lower cost but higher failure risk
- **Option B: Outsource** - Higher cost but more reliable
- **Option C: Hybrid** - Split the work (moderate cost and risk)

#### Step 1: Map the Decision Tree
```
Decision: Feature Development
│
├── Build In-House (Cost: $100k)
│   ├── Success (60%): Benefit $400k → Net: +$300k
│   └── Failure (40%): Benefit $0 → Net: -$100k
│
├── Outsource (Cost: $180k)
│   ├── Success (85%): Benefit $380k → Net: +$200k
│   └── Failure (15%): Benefit $0 → Net: -$180k
│
└── Hybrid (Cost: $140k)
    ├── Success (75%): Benefit $390k → Net: +$250k
    └── Failure (25%): Benefit $50k → Net: -$90k
```

#### Step 2: Calculate EMV for Each Option

**Option A: Build In-House**
- EMV = (0.60 × $300k) + (0.40 × -$100k)
- EMV = $180k - $40k = **+$140k**

**Option B: Outsource**
- EMV = (0.85 × $200k) + (0.15 × -$180k)
- EMV = $170k - $27k = **+$143k**

**Option C: Hybrid**
- EMV = (0.75 × $250k) + (0.25 × -$90k)
- EMV = $187.5k - $22.5k = **+$165k**

#### Step 3: Make the Decision
**Best Choice: Hybrid (Option C)** with EMV of +$165k

::: tip 💡 Exam Insight
Decision tree questions test whether you can calculate EMV correctly. Remember:
1. Multiply each outcome by its probability
2. Sum all outcomes for each option
3. Choose the highest EMV (for opportunities) or lowest cost (for threats)
:::

#### When Decision Tree > Simple EMV
Use decision trees when:
- Multiple sequential decisions exist (tree with branches)
- Outcomes affect future decisions
- You need to compare distinct options

---

### Risk-Adjusted Budget Calculations

The total project budget includes both base estimates and reserves. Understanding how to calculate risk-adjusted budgets is essential.

#### Budget Structure
```
Total Project Funding
├── Cost Baseline (what PM can authorize)
│   ├── Work Package Estimates (base estimates)
│   └── Contingency Reserve (for known risks)
└── Management Reserve (for unknown risks - requires sponsor approval)
```

#### Calculating Contingency Reserve Using EMV

**Step 1**: Identify all significant risks and their EMV

| Risk ID | Description | Probability | Impact | EMV |
|---|---|---|---|---|
| R-001 | Vendor delay | 30% | $50,000 | $15,000 |
| R-002 | Design rework | 40% | $30,000 | $12,000 |
| R-003 | Integration issues | 25% | $80,000 | $20,000 |
| R-004 | Resource shortage | 20% | $40,000 | $8,000 |

**Step 2**: Sum the EMVs
- Total Risk EMV = $15k + $12k + $20k + $8k = **$55,000**

**Step 3**: Build the budget
- Base Estimate: $500,000
- Contingency Reserve: $55,000 (from EMV analysis)
- **Cost Baseline**: $555,000
- Management Reserve (typically 5-10%): $50,000
- **Total Project Funding**: $605,000

::: tip 💡 Exam Pattern
"The sponsor asks why the budget is higher than the estimate" → Explain that the cost **baseline** includes contingency for identified risks, and management reserve covers unknown risks.
:::

#### Alternative Method: Percentage-Based Reserve
When detailed EMV isn't available, use industry benchmarks:
- **Low complexity projects**: 5-10% contingency
- **Medium complexity**: 10-15% contingency
- **High complexity**: 15-25% contingency
- **Management reserve**: Additional 5-10%

---

### Probability Distributions in Risk Analysis

Understanding distributions helps you choose appropriate inputs for quantitative analysis.

#### Common Distributions

| Distribution | Shape | When to Use | Example |
|---|---|---|---|
| **Triangular** | Equal weight to O, M, P | Quick estimates, limited data | "Based on team discussion, 10-15-25 days" |
| **Beta (PERT)** | More weight to Most Likely | Historical data supports M | "Usually takes about 15 days" |
| **Uniform** | Equal probability across range | True uncertainty, no information | "Could be anywhere from 10-30 days" |
| **Normal** | Bell curve | Large sample historical data | "Average 20 days, σ = 3 days" |
| **Lognormal** | Skewed right | Costs and durations (can't go negative) | "Typically 15 days but could extend significantly" |

#### Visual Guide: Distribution Selection
```
Do you have historical data?
├── YES → Use Normal or Beta distribution
└── NO → Do you have expert estimates (O, M, P)?
          ├── YES → Use Triangular or PERT
          └── NO → Use Uniform (equal probability)
```

---

### Agile Risk Tracking: Risk Burndown & Velocity

In Agile environments, risk is tracked iteratively alongside delivery.

#### Risk Burndown Chart
Shows total risk exposure (sum of EMVs) decreasing over time as:
- Risks are mitigated or avoided
- Uncertain work is completed
- Risks are realized (become issues) and handled

```
Risk Exposure Over Sprints
$200k ████████████████████
$180k ██████████████████
$140k ██████████████
$100k ██████████
 $60k ██████
 $30k ███
      S1   S2   S3   S4   S5   S6
```

**Healthy Pattern**: Risk exposure decreases each sprint (uncertainty is being resolved)
**Unhealthy Pattern**: Risk exposure flat or increasing → Need immediate intervention

#### Risk Velocity
Just as teams track story point velocity, track how much risk exposure is resolved per sprint:

| Sprint | Starting Risk EMV | Ending Risk EMV | Risk Velocity |
|---|---|---|---|
| Sprint 1 | $200k | $180k | $20k resolved |
| Sprint 2 | $180k | $140k | $40k resolved |
| Sprint 3 | $140k | $100k | $40k resolved |
| Sprint 4 | $100k | $80k | $20k resolved |

**Avg Risk Velocity**: $30k per sprint

Use this to forecast when risk exposure will reach acceptable levels.

#### Sprint Risk Review Agenda (5 minutes in Planning)
1. **New risks** identified since last sprint
2. **Top 3 risks**: status, triggers observed?
3. **Risks to target** this sprint (which uncertain work will we complete?)
4. **Issues from last sprint**: lessons learned?

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

## 🎯 Risk Thresholds & Appetite (When to Act)

Before managing risk, you must define **when** to act. This is captured in the Risk Management Plan.

### Key Concepts
| Term | Definition | Example |
|---|---|---|
| **Risk Appetite** | The degree of uncertainty an organization is willing to accept | "We accept up to 10% budget variance" |
| **Risk Threshold** | The specific point at which a risk requires action | "Any risk with EMV >$50k requires executive review" |
| **Risk Tolerance** | The acceptable range of variation for an objective | "Schedule slip <2 weeks is acceptable" |

### Threshold-Based Responses (Exam Pattern)
The exam loves scenarios where you must decide **whether to act** based on thresholds:

**Example**: Your organization's risk threshold is "any risk with >30% probability AND >$100k impact requires mitigation."
- Risk A: 40% × $80k = Does not meet threshold (accept/watch)
- Risk B: 25% × $150k = Does not meet threshold (only one condition met)
- Risk C: 50% × $120k = **Meets threshold** → Mitigate immediately

::: warning ⚠️ Exam Trap
Thresholds are **AND** conditions (both probability and impact must exceed the limit), unless the question explicitly says "OR."
:::

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
