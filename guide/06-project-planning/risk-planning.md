
<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

**ECO Task**: Plan and manage risk

Risk management is about **proactive uncertainty management**—identifying what could go wrong (threats) or right (opportunities) and planning responses in advance.

---

##  Risk Concepts for PMP

The PMP exam heavily tests risk management. Master these foundational concepts:

<ConceptGrid>
  <ConceptCard 
    title="Threats"
    variant="primary"
  >
    Negative risks that could harm the project. Goal: <strong>Minimize impact or probability</strong>.
  </ConceptCard>
  <ConceptCard 
    title="Opportunities"
    variant="secondary"
  >
    Positive risks that could benefit the project. Goal: <strong>Maximize impact or probability</strong>.
  </ConceptCard>
  <ConceptCard 
    title="Overall Project Risk"
    variant="primary"
  >
    Net effect of all uncertainties on project objectives. More than just the sum of individual risks.
  </ConceptCard>
</ConceptGrid>

---

##  The Risk Planning Flow

### Step 1: Plan Risk Management
**Purpose**: Define how risk activities will be conducted
**Key Outputs**:
- Risk Management Plan
- Risk categories (RBS - Risk Breakdown Structure)
- Probability and impact definitions
- Risk thresholds

### Step 2: Identify Risks
**Purpose**: Identify as many risks as possible
**Key Outputs**:
- Risk Register (initial)
- Risk Report

### Step 3: Perform Qualitative Risk Analysis
**Purpose**: Prioritize risks by probability × impact
**Key Outputs**:
- Updated Risk Register (priorities assigned)
- Probability and Impact Matrix

### Step 4: Perform Quantitative Risk Analysis
**Purpose**: Numerical analysis of highest-priority risks
**Key Outputs**:
- Updated Risk Report
- Monte Carlo results, decision tree analysis, sensitivity analysis

### Step 5: Plan Risk Responses
**Purpose**: Develop response strategies for prioritized risks
**Key Outputs**:
- Updated Risk Register (with responses)
- Contingency reserves
- Risk owners assigned

---

##  The Risk Register

The Risk Register is the primary artifact for tracking risks throughout the project.

### Risk Register Structure

| Field | Description | Example |
|:------|:------------|:--------|
| **Risk ID** | Unique identifier | R-001 |
| **Risk Description** | Clear statement of uncertainty | "Vendor may deliver late due to supply chain issues" |
| **Category** | RBS category | External → Supplier |
| **Probability** | Likelihood (H/M/L or %) | 40% |
| **Impact** | Effect on objectives (H/M/L or $) | $50,000 schedule delay |
| **Risk Score** | P × I ranking | 0.4 × $50k = $20,000 EMV |
| **Risk Owner** | Person responsible | Procurement Manager |
| **Response Strategy** | Chosen approach | Mitigate |
| **Response Actions** | Specific actions | Negotiate early delivery penalty clause |
| **Trigger** | Early warning sign | Vendor misses progress milestone |
| **Contingency Plan** | Fallback if risk occurs | Engage backup vendor |
| **Status** | Current state | Active |

---

##  Risk Identification Techniques

### Identification Methods

| Technique | Description | When to Use |
|:----------|:------------|:------------|
| **Brainstorming** | Team generates risks freely | Early identification, group sessions |
| **Interviews** | Expert input one-on-one | Complex/technical areas |
| **Delphi Technique** | Anonymous expert consensus | Reducing bias, distributed teams |
| **SWOT Analysis** | Strengths, Weaknesses, Opportunities, Threats | Strategic risk view |
| **Checklists** | Risk lists from past projects | Lessons learned, common risks |
| **Assumptions Analysis** | Test validity of assumptions | Challenging planning assumptions |
| **Document Analysis** | Review plans, contracts, requirements | Finding gaps, ambiguities |
| **Root Cause Analysis** | Identify source of potential risks | Grouping related risks |
| **Prompt Lists** | Categories to trigger thinking | Structured brainstorming (PESTLE, etc.) |

### SWOT Analysis for Risk Identification

| | **Helpful** | **Harmful** |
|:--|:-----------|:-----------|
| **Internal** | **Strengths** (leverage) | **Weaknesses** (address) |
| **External** | **Opportunities** (exploit) | **Threats** (mitigate) |

### Risk Breakdown Structure (RBS)

Organize risks by category for comprehensive coverage:

<ConceptCard title="Risk Breakdown Structure (RBS) Example">
  <div style="font-family: monospace; font-size: 0.9em; line-height: 1.5; color: var(--vp-c-text-1); white-space: pre; overflow-x: auto;">
1.0 Project Risks
├── 1.1 Technical Risks
│   ├── 1.1.1 Technology maturity
│   ├── 1.1.2 System integration
│   └── 1.1.3 Performance requirements
├── 1.2 External Risks
│   ├── 1.2.1 Vendor/supplier
│   ├── 1.2.2 Regulatory changes
│   └── 1.2.3 Market conditions
├── 1.3 Organizational Risks
│   ├── 1.3.1 Resource availability
│   ├── 1.3.2 Funding stability
│   └── 1.3.3 Organizational changes
└── 1.4 Project Management Risks
    ├── 1.4.1 Estimation uncertainty
    ├── 1.4.2 Scope definition
    └── 1.4.3 Communication gaps
  </div>
</ConceptCard>

---

##  Qualitative Risk Analysis

Qualitative analysis **prioritizes risks** quickly using probability and impact assessment.

### Probability and Impact Matrix

Define probability and impact scales:

<strong>Probability Scale:</strong>
| Rating | Value | Description |
|:-------|:------|:------------|
| Very High | 0.90 | >90% certain to occur |
| High | 0.70 | 71-90% likely |
| Medium | 0.50 | 31-70% likely |
| Low | 0.30 | 11-30% likely |
| Very Low | 0.10 | <10% likely |

**Impact Scale (Cost):**
| Rating | Value | Description |
|:-------|:------|:------------|
| Very High | 0.80 | >$100,000 or >20% budget |
| High | 0.40 | $50k-$100k or 10-20% budget |
| Medium | 0.20 | $10k-$50k or 5-10% budget |
| Low | 0.10 | $1k-$10k or 1-5% budget |
| Very Low | 0.05 | <$1,000 or <1% budget |

### Probability-Impact Matrix

<ConceptCard title="Probability-Impact Matrix">
  <div style="font-family: monospace; font-size: 0.9em; line-height: 1.5; color: var(--vp-c-text-1); white-space: pre; overflow-x: auto;">
               IMPACT
          Low    Med    High
       ┌───────┬───────┬───────┐
High   │ Med   │ High  │ V.High│
       ├───────┼───────┼───────┤  P
Med    │ Low   │ Med   │ High  │  R
       ├───────┼───────┼───────┤  O
Low    │ V.Low │ Low   │ Med   │  B
       └───────┴───────┴───────┘
  </div>
</ConceptCard>

### Risk Score Calculation

**Risk Score = Probability × Impact**

| Risk | Probability | Impact | Score | Priority |
|:-----|:------------|:-------|:------|:---------|
| R-001 | 0.70 | 0.80 | 0.56 | High |
| R-002 | 0.50 | 0.40 | 0.20 | Medium |
| R-003 | 0.30 | 0.20 | 0.06 | Low |
| R-004 | 0.90 | 0.10 | 0.09 | Low |

::: tip  Watch List
Low-priority risks go on a "watch list" for periodic review. Don't create detailed responses, but monitor for changes in probability or impact.
:::

---

##  Quantitative Risk Analysis

Quantitative analysis assigns **numerical values** to prioritized risks. Used for large/complex projects or high-stakes decisions.

### When to Use Quantitative Analysis

- Large projects with significant cost/schedule risk
- Need to determine contingency reserve amounts
- Stakeholders require probabilistic forecasts
- Multiple paths create schedule uncertainty

### Key Quantitative Techniques

#### 1. Expected Monetary Value (EMV)

**EMV = Probability × Impact (in dollars)**

Used in decision tree analysis and calculating contingency reserves.

<strong>Example:</strong>
| Risk | Probability | Cost Impact | EMV |
|:-----|:------------|:------------|:----|
| Vendor delay | 30% | $100,000 | $30,000 |
| Requirements gap | 40% | $50,000 | $20,000 |
| Integration failure | 20% | $150,000 | $30,000 |
| **Total EMV** | | | **$80,000** |

This suggests approximately $80,000 in contingency reserve for these risks.

---

#### 2. Decision Tree Analysis

Visual tool for evaluating decisions under uncertainty.

**Example: Build vs. Buy Decision**

<ConceptCard title="Decision Tree Example">
  <div style="font-family: monospace; font-size: 0.9em; line-height: 1.5; color: var(--vp-c-text-1); white-space: pre; overflow-x: auto;">
                                    EMV
                              ┌─ Success (70%): +$500k  │ = $350k
            ┌─ Build ($200k) ─┤                         │
            │                 └─ Failure (30%): -$200k  │ = -$60k
Decision ───┤                       Build EMV = $290k - $200k = $90k
            │
            │                 ┌─ Works (80%): +$300k    │ = $240k
            └─ Buy ($150k) ───┤                         │
                              └─ Issues (20%): +$50k    │ = $10k
                                    Buy EMV = $250k - $150k = $100k

Decision: Buy (EMV = $100k) > Build (EMV = $90k)
  </div>
</ConceptCard>

---

#### 3. Sensitivity Analysis (Tornado Diagram)

Identifies which risks have the greatest impact on project outcomes.

<strong>Tornado Diagram:</strong>
<ConceptCard title="Tornado Diagram: Project Cost Variance">
  <div style="font-family: var(--vp-font-family-base); color: var(--vp-c-text-1);">
    <div style="display: flex; justify-content: space-between; font-size: 0.8em; margin-bottom: 5px; color: var(--vp-c-text-2);">
      <span>-$100k</span><span>0</span><span>+$100k</span>
    </div>

    <div style="margin-bottom: 8px;">
      <div style="font-size: 0.9em; margin-bottom: 2px;">Vendor Pricing</div>
      <div style="height: 24px; background: var(--vp-c-bg-soft); position: relative; border-radius: 4px;">
        <div style="position: absolute; left: 10%; width: 80%; background-color: var(--vp-c-brand); height: 100%; border-radius: 4px;"></div>
      </div>
    </div>

    <div style="margin-bottom: 8px;">
      <div style="font-size: 0.9em; margin-bottom: 2px;">Resource Costs</div>
      <div style="height: 24px; background: var(--vp-c-bg-soft); position: relative; border-radius: 4px;">
        <div style="position: absolute; left: 25%; width: 50%; background-color: var(--vp-c-brand-light); height: 100%; border-radius: 4px;"></div>
      </div>
    </div>

    <div style="margin-bottom: 8px;">
      <div style="font-size: 0.9em; margin-bottom: 2px;">Scope Changes</div>
      <div style="height: 24px; background: var(--vp-c-bg-soft); position: relative; border-radius: 4px;">
        <div style="position: absolute; left: 35%; width: 30%; background-color: var(--vp-c-brand-lighter); height: 100%; border-radius: 4px;"></div>
      </div>
    </div>

    <div style="margin-bottom: 8px;">
      <div style="font-size: 0.9em; margin-bottom: 2px;">Timeline Slip</div>
      <div style="height: 24px; background: var(--vp-c-bg-soft); position: relative; border-radius: 4px;">
        <div style="position: absolute; left: 40%; width: 20%; background-color: var(--vp-c-text-2); height: 100%; border-radius: 4px;"></div>
      </div>
    </div>

    <div style="margin-bottom: 0px;">
      <div style="font-size: 0.9em; margin-bottom: 2px;">Exchange Rate</div>
      <div style="height: 24px; background: var(--vp-c-bg-soft); position: relative; border-radius: 4px;">
        <div style="position: absolute; left: 45%; width: 10%; background-color: var(--vp-c-text-3); height: 100%; border-radius: 4px;"></div>
      </div>
    </div>
  </div>
</ConceptCard>

**Interpretation**: Vendor pricing has the greatest potential impact on cost variance.

---

#### 4. Monte Carlo Simulation

Runs thousands of project simulations to generate probability distributions.

<strong>Output Example:</strong>
<ConceptCard title="Monte Carlo Output: Probability of Completion">
  <div style="font-family: monospace; font-size: 0.9em; line-height: 1.5; color: var(--vp-c-text-1); white-space: pre; overflow-x: auto;">
100%│                    ___________
    │                ___/
 80%│            ___/
    │        ___/
 60%│    ___/
    │ __/
 40%│/
    │
 20%│
    │
    └───────────────────────────────────
       $900k  $950k  $1M   $1.05M  $1.1M

P50 (50% confidence): $980,000
P80 (80% confidence): $1,030,000
P90 (90% confidence): $1,050,000
  </div>
</ConceptCard>

**Interpretation**: 
- There's an 80% chance the project will cost $1.03M or less
- To have 90% confidence, budget $1.05M

---

##  Risk Response Strategies

### Strategies for Threats (Negative Risks)

| Strategy | Definition | Example | Risk Ownership |
|:---------|:-----------|:--------|:---------------|
| **Avoid** | Eliminate the threat entirely | Change project scope to remove risky component | PM removes risk |
| **Mitigate** | Reduce probability and/or impact | Add reviews to catch defects earlier | PM reduces risk |
| **Transfer** | Shift impact to third party | Insurance, fixed-price contracts | Third party owns |
| **Accept (Active)** | Acknowledge and plan contingency | Allocate contingency reserve | PM owns |
| **Accept (Passive)** | Acknowledge with no action | Document and monitor | PM accepts |
| **Escalate** | Risk beyond project authority | Report to program/portfolio level | Management owns |

### Strategies for Opportunities (Positive Risks)

| Strategy | Definition | Example | Match to Threat |
|:---------|:-----------|:--------|:----------------|
| **Exploit** | Make the opportunity happen | Assign best resources to ensure early delivery | Avoid |
| **Enhance** | Increase probability and/or impact | Add features that could delight customer | Mitigate |
| **Share** | Partner to realize benefit | Joint venture with complementary firm | Transfer |
| **Accept** | Take advantage if it occurs | Be ready to respond if opportunity arises | Accept |
| **Escalate** | Opportunity beyond project authority | Report to program level | Escalate |

### Response Strategy Selection Guide

| Situation | Recommended Strategy |
|:----------|:--------------------|
| Risk too severe if it occurs | Avoid (eliminate) |
| Can reduce probability cost-effectively | Mitigate |
| Financial impact, transferable | Transfer (insurance, contract) |
| Low priority, monitor only | Accept (passive) |
| Can't eliminate, but can prepare | Accept (active) + contingency |
| Outside project control | Escalate |

---

##  Risk Reserves

### Contingency Reserve vs. Management Reserve

| Aspect | Contingency Reserve | Management Reserve |
|:-------|:-------------------|:-------------------|
| **For** | Known unknowns (identified risks) | Unknown unknowns |
| **Part of Baseline** | Yes | No |
| **Authority** | Project Manager | Sponsor |
| **Source** | Risk analysis (EMV, simulation) | Management judgment |
| **Access** | As risks occur | Formal change request |

### Calculating Contingency Reserve

<strong>Using EMV:</strong>
```
Sum of (Probability × Impact) for all identified risks
```

<strong>Using Monte Carlo:</strong>
```
Difference between P50 and desired confidence level (e.g., P80)
```

<strong>Example:</strong>
- P50 project cost: $1,000,000
- P80 project cost: $1,100,000
- Contingency reserve (80% confidence): $100,000

---

##  Risk Monitoring & Control

### Monitor Risks Process

| Activity | Frequency | Purpose |
|:---------|:----------|:--------|
| **Risk reviews** | Weekly/Sprint | Assess current risks, identify new ones |
| **Risk audits** | Monthly/Phase | Evaluate response effectiveness |
| **Variance analysis** | Ongoing | EVM signals potential risk triggers |
| **Technical reviews** | Milestone | Technical risk assessment |
| **Reserve analysis** | Monthly | Ensure reserves adequate |

### Risk Triggers

**Triggers** are early warning signs that a risk is about to occur.

| Risk | Trigger | Response |
|:-----|:--------|:---------|
| Vendor delay | Missed progress milestone | Escalate communication, engage backup |
| Scope creep | >3 change requests/week | Reinforce change process, investigate |
| Resource burnout | Overtime >10 hours/week | Resource leveling, add capacity |
| Integration issues | Failed unit tests increasing | Technical review, expert consultation |

### Residual and Secondary Risks

| Type | Definition | Example |
|:-----|:-----------|:--------|
| **Residual Risk** | Risk remaining after response | Some delay risk remains after adding buffer |
| **Secondary Risk** | New risk created by response | Backup vendor may have quality issues |
| **Risk Trigger** | Event signaling risk occurrence | Vendor misses first milestone |

---

##  Risk Planning Scenarios (Exam Practice)

### Scenario 1: High-Probability, High-Impact Threat
**Situation**: There's a 70% chance of a critical resource leaving the project.
**Answer**: **Avoid or Mitigate**. Consider retaining the resource (bonus, contract), cross-training backup, or removing dependency on that individual.

### Scenario 2: Opportunity Identified
**Situation**: There's a 40% chance a new technology could reduce development time by 30%.
**Answer**: **Enhance or Exploit**. Invest in a proof-of-concept to increase probability; assign best resources to evaluate.

### Scenario 3: Calculating Contingency
**Situation**: Three risks identified with EMVs of $20k, $15k, and $10k.
**Answer**: Minimum contingency reserve = $20k + $15k + $10k = **$45,000**.

### Scenario 4: Decision Tree
**Situation**: Option A costs $100k with 60% chance of $300k benefit. Option B costs $50k with 80% chance of $150k benefit.
**Answer**: 
- Option A EMV: (0.6 × $300k) - $100k = $80k
- Option B EMV: (0.8 × $150k) - $50k = $70k
- **Select Option A** (higher EMV)

### Scenario 5: Unknown Risk Occurs
**Situation**: An earthquake damages the worksite. This wasn't in the risk register.
**Answer**: Use **Management Reserve** (requires sponsor approval via formal change request).

### Scenario 6: Risk Beyond PM Authority
**Situation**: A risk could affect multiple projects in the program.
**Answer**: **Escalate** to program management.

---

##  Key Formulas & Quick Reference

### Risk Formulas

| Formula | Purpose |
|:--------|:--------|
| **Risk Score = P × I** | Prioritize risks |
| **EMV = Probability × Impact ($)** | Calculate expected value |
| **Contingency = Σ EMV** | Minimum reserve |
| **Contingency = P80 - P50** | Monte Carlo-based reserve |

### Response Strategy Quick Reference

| Threat Strategy | Action | Opportunity Strategy |
|:----------------|:-------|:---------------------|
| Avoid | Eliminate risk | Exploit |
| Mitigate | Reduce P or I | Enhance |
| Transfer | Shift to third party | Share |
| Accept | Acknowledge | Accept |
| Escalate | Raise to management | Escalate |


## Quick Review

<FlashcardCarousel :cards="[
  { front: `What are the 5 response strategies for threats?`, back: `1. Avoid, 2. Mitigate, 3. Transfer, 4. Accept, 5. Escalate.` },
  { front: `What is Residual Risk?`, back: `The risk that remains after a response strategy has been implemented.` },
  { front: `What is a Watch List?`, back: `A list of low-priority risks that are monitored for changes in probability or impact.` },
  { front: `What does a Tornado Diagram show?`, back: `Sensitivity analysis—it ranks risks by their potential impact on a project outcome.` },
  { front: `What is a Risk Trigger?`, back: `An early warning sign or event that indicates a risk is about to occur.` },
  { front: `What is EMV (Expected Monetary Value)?`, back: `EMV = Probability × Impact in dollars - used for decision trees and calculating contingency reserves.` },
  { front: `What is Secondary Risk?`, back: `A new risk created by implementing a risk response (e.g., backup vendor may have quality issues).` },
  { front: `What does Monte Carlo simulation produce?`, back: `Probability distributions for project completion - showing P50, P80, P90 confidence levels.` },
  { front: `What are the 5 response strategies for opportunities?`, back: `1. Exploit, 2. Enhance, 3. Share, 4. Accept, 5. Escalate.` },
  { front: `Who is the Risk Owner?`, back: `The person assigned responsibility for monitoring the risk and implementing the response if triggered.` }
]" />

::: tip  Exam Insight
For threats: **Avoid** eliminates, **Mitigate** reduces, **Transfer** shifts (insurance, contracts), **Accept** acknowledges. For opportunities, the matching strategies are **Exploit**, **Enhance**, **Share**, and **Accept**. Use **Contingency Reserve** for identified risks (PM authority) and **Management Reserve** for unknown risks (sponsor approval).
:::

