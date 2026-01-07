<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
import EVMCalculator from '../../.vitepress/theme/components/EVMCalculator.vue'
</script>

# 6.3 Cost Planning

**ECO Task**: Plan and manage finance
**ECO Task**: Evaluate project status

Cost management ensures that the project is delivered within the approved budget. It is more than just spending; it is about **Value Engineering** and **Fiscal Ethics**.

---

##  The Cost Planning Flow

<ConceptGrid>
  <ConceptCard title="1. Plan Cost Management" subtitle="The Strategy">
    <strong>Purpose:</strong> Defines how costs will be estimated, budgeted, and managed.<br/>
    <strong>Key Outputs:</strong> Cost Management Plan (precision, accuracy, thresholds).
  </ConceptCard>
  <ConceptCard title="2. Estimate Costs" subtitle="The Prediction">
    <strong>Purpose:</strong> Predicts the cost of resources for each activity.<br/>
    <strong>Key Outputs:</strong> Activity cost estimates, Basis of Estimates, Risk reserves.
  </ConceptCard>
  <ConceptCard title="3. Determine Budget" subtitle="The Baseline">
    <strong>Purpose:</strong> Aggregates costs into an authorized baseline.<br/>
    <strong>Key Outputs:</strong> <strong>Cost Baseline</strong>, Project funding requirements.
  </ConceptCard>
</ConceptGrid>

---

##  The Budget Architecture

A PMP budget is built from the bottom up, with layers of protection.

<ConceptGrid>
  <ConceptCard title="Activity Estimates" variant="primary">
    The base cost of work packages, including labor, materials, equipment, and services.
  </ConceptCard>
  <ConceptCard title="Contingency Reserve" variant="secondary">
    For "Known Unknowns". Part of the <strong>Cost Baseline</strong>. Under PM control.
  </ConceptCard>
  <ConceptCard title="Cost Baseline" subtitle="The Performance Mark" variant="primary">
    A time-phased budget used to measure EVM (Earned Value Management) performance.
  </ConceptCard>
  <ConceptCard title="Management Reserve" variant="secondary">
    For "Unknown Unknowns". NOT part of the baseline. Under Sponsor control.
  </ConceptCard>
</ConceptGrid>

<ConceptCard title="Budget Architecture" variant="secondary">
  <div style="border: 2px solid var(--vp-c-brand); border-radius: 8px; padding: 15px; background: var(--vp-c-bg-soft); text-align: center;">
    <div style="font-weight: bold; border-bottom: 2px solid var(--vp-c-divider); margin-bottom: 10px; padding-bottom: 5px;">TOTAL PROJECT BUDGET</div>
    
    <div style="display: flex; gap: 10px; justify-content: center; align-items: stretch; flex-wrap: wrap;">
      
      <div style="flex: 1; min-width: 250px; border: 2px dashed var(--vp-c-brand); border-radius: 6px; padding: 10px; background: var(--vp-c-bg);">
        <div style="font-weight: bold; color: var(--vp-c-brand); margin-bottom: 8px;">COST BASELINE (EVM Mark)</div>
        <div style="background: var(--vp-c-bg-mute); padding: 5px; border-radius: 4px; font-size: 0.9em; margin-bottom: 5px;">Work Package Estimates</div>
        <div style="background: var(--vp-c-bg-mute); padding: 5px; border-radius: 4px; font-size: 0.9em;">+ Contingency Reserve (Known)</div>
      </div>

      <div style="flex: 1; min-width: 200px; border: 2px solid var(--vp-c-warning); border-radius: 6px; padding: 10px; background: var(--vp-c-bg);">
        <div style="font-weight: bold; color: var(--vp-c-warning); margin-bottom: 8px;">MANAGEMENT RESERVE</div>
        <div style="font-size: 0.85em;">For Unknown Unknowns.<br/>Sponsor Control.</div>
      </div>
    </div>
  </div>
  <p style="font-size: 0.85em; margin-top: 10px; text-align: center;">
    <strong>Note:</strong> Earned Value is measured against the <strong>Cost Baseline</strong>, not the Project Budget.
  </p>
</ConceptCard>

---

##  Cost Types You Should Recognize

### Direct vs. Indirect Costs

| Cost Type | Definition | PMP Relevance | Example |
|:----------|:-----------|:--------------|:--------|
| **Direct** | Tied directly to project work | PM tracks and controls | Project labor, materials for project |
| **Indirect** | Overhead shared across projects | Allocated via overhead rate | Shared admin support, facilities |

### Fixed vs. Variable Costs

| Cost Type | Definition | PMP Relevance | Example |
|:----------|:-----------|:--------------|:--------|
| **Fixed** | Does not change with volume | Predictable spending | Monthly software license, facility rent |
| **Variable** | Changes with volume/usage | Monitor consumption | Cloud compute costs, contractor hours |

### Sunk Costs vs. Opportunity Costs

| Cost Type | Definition | Decision Rule |
|:----------|:-----------|:--------------|
| **Sunk Cost** | Money already spent (cannot recover) | **Ignore** when making future decisions |
| **Opportunity Cost** | Value of next best alternative not chosen | **Consider** when comparing options |

::: warning  Sunk Cost Trap
The exam often tests whether you understand that **sunk costs should not influence future decisions**. If \$1M has been spent on a failing project, that \$1M is irrelevant to the decision of whether to continue or cancel.
:::

---

##  Estimation Techniques

### Estimation Methods Comparison

| Technique | Description | Accuracy | Time/Effort | Best Used When |
|:----------|:------------|:---------|:------------|:---------------|
| **Analogous** | Based on similar past projects | ±35% | Low | Early planning, limited data |
| **Parametric** | Mathematical model (\$ per unit) | ±15% | Medium | Historical data available |
| **Bottom-Up** | Estimate every activity, roll up | ±5-10% | High | Detailed planning, high stakes |
| **Three-Point** | (O + 4M + P) / 6 | Risk-adjusted | Medium | Uncertainty is high |

### Analogous Estimation

**How It Works**: Use actual costs from similar previous projects as the basis for the current estimate.

**Example**:
- Previous CRM implementation cost \$500,000
- New CRM is similar but 20% larger in scope
- Analogous estimate: \$500,000 × 1.2 = \$600,000
- Analogous estimate: \$500,000 * 1.2 = \$600,000

**Strengths**: Quick, requires minimal data
**Limitations**: Assumes similarity, less accurate

### Parametric Estimation

**How It Works**: Apply a mathematical model using historical data and project parameters.

**Examples**:
- Construction: \$150 per square foot * 10,000 sq ft = \$1,500,000
- Software: \$5,000 per function point * 200 FP = \$1,000,000
- Lines of code: \$50/LOC * 50,000 LOC = \$2,500,000

**Strengths**: Scalable, defensible, accurate if model is good
**Limitations**: Requires reliable historical data

### Bottom-Up Estimation

**How It Works**: Estimate each work package or activity individually, then aggregate.

**Process**:
1. Decompose WBS to work package level
2. Estimate each work package (labor, materials, etc.)
3. Add contingency at work package level
4. Roll up to project level
5. Add management reserve

**Strengths**: Most accurate, detailed, traceable
**Limitations**: Time-consuming, requires detailed WBS

<ConceptGrid>
  <ConceptCard title="PERT (Cost)" subtitle="Weighted Average">
    <strong>Expected Cost (Ce) = (O + 4M + P) / 6</strong>
    <p style="font-size: 0.9em; margin-top: 8px;">Provides a risk-adjusted cost estimate by giving more weight to the most likely scenario.</p>
  </ConceptCard>
  <ConceptCard title="Standard Deviation (SD)" subtitle="Estimating Risk">
    <strong>SD = (P - O) / 6</strong>
    <p style="font-size: 0.9em; margin-top: 8px;">Measures the spread or uncertainty in the cost estimate.</p>
  </ConceptCard>
</ConceptGrid>

<ConceptCard title="Worked Example: Cost PERT" variant="secondary">
  <div style="padding: 10px;">
    <strong>Scenario: Software Module Development</strong>
    <ul style="margin: 10px 0;">
      <li>Optimistic: \$80,000</li>
      <li>Most Likely: \$100,000</li>
      <li>Pessimistic: \$150,000</li>
    </ul>
    <hr style="margin: 10px 0; border: 0; border-top: 1px solid var(--vp-c-divider);" />
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div>
        <strong>1. Expected Cost:</strong><br/>
        Ce = (80k + 4*100k + 150k) / 6 = 630k / 6 = <strong>\$105,000</strong>
      </div>
      <div>
        <strong>2. Standard Deviation:</strong><br/>
        SD = (150k - 80k) / 6 = 70k / 6 = <strong>\$11,667</strong>
      </div>
    </div>
  </div>
</ConceptCard>

---

##  The Total Project Budget

**Total Budget = Cost Baseline + Management Reserve**

### Reserve Usage Rules

| Reserve Type | For | Authority | Requires |
|:-------------|:----|:----------|:---------|
| **Contingency** | Known Unknowns (identified risks) | PM | Risk response trigger |
| **Management** | Unknown Unknowns (unidentified risks) | Sponsor | Change request + approval |

**Key Point**: If a risk in the risk register occurs, use **contingency reserve** (PM authority). If an unforeseen event occurs (not in risk register), you need **management reserve** (requires sponsor approval and formal change request).

### Funding Limit Reconciliation

Just because you have the *budget* doesn't mean you have the *cash*.

**Funding Limit Reconciliation** aligns the expenditure of funds with the commitment of funds (cash flow management).

**Example**:
- June planned spend: \$1,000,000
- Organization monthly funding limit: \$500,000/month
- **Resolution**: Reschedule \$500,000 of work to July

**Implications**:
- May require resource leveling
- May extend project duration
- May trigger scope/schedule trade-offs

---

##  Value Engineering

**Definition**: Finding ways to deliver the same or better value at lower cost without sacrificing quality, performance, or sustainability.

### Value Engineering Process

1. **Information Phase**: Understand function and cost
2. **Creative Phase**: Brainstorm alternatives
3. **Evaluation Phase**: Analyze alternatives for value
4. **Development Phase**: Develop selected alternatives
5. **Presentation Phase**: Present recommendations
6. **Implementation Phase**: Execute approved changes

### Value Engineering Examples

| Original | Alternative | Savings | Trade-off |
|:---------|:------------|:--------|:----------|
| On-premise servers | Cloud infrastructure | 40% upfront | Variable operating costs |
| Custom development | Commercial off-the-shelf | 60% development | Less customization |
| Premium materials | Standard materials | 25% | Verify quality meets requirements |
| Senior consultants | Mix of senior + junior | 30% | More oversight needed |

::: info  2026 Focus: ESG and Value Engineering
Modern value engineering considers not just cost but **sustainability (ESG)**:
- Environmental impact of materials and operations
- Social responsibility in supply chain
- Governance and ethical sourcing
:::

---

##  Lifecycle Costing (Total Cost of Ownership)

Project decisions should consider the "Total Cost of Ownership," not just the project build cost.

### Lifecycle Cost Components

| Phase | Cost Elements |
|:------|:--------------|
| **Acquisition** | Design, Build, Purchase, Installation |
| **Operations** | Maintenance, Support, Utilities, Consumables |
| **Disposal** | Decommissioning, Cleanup, Replacement |

### Lifecycle Costing Example

**Server Purchase Decision**:

| Option | Purchase | 5-Year Power | 5-Year Support | Disposal | TOTAL |
|:-------|:---------|:-------------|:---------------|:---------|:------|
| **Budget Server** | \$10,000 | \$15,000 | \$5,000 | \$500 | **\$30,500** |
| **Efficient Server** | \$15,000 | \$8,000 | \$5,000 | \$500 | **\$28,500** |

**Decision**: The "expensive" efficient server saves \$2,000 over its lifecycle.

---

##  Earned Value Management (EVM): Complete Guide

EVM is the exam's favorite way to test integrated planning (scope + schedule + cost). It compares planned progress vs. actual progress and cost.

### The Foundation: Three Core Values

| Metric | Old Name | Definition | Question Answered |
|:-------|:---------|:-----------|:------------------|
| **PV (Planned Value)** | BCWS | Budget for work scheduled by now | "What should we have spent?" |
| **EV (Earned Value)** | BCWP | Budget for work actually completed | "What did we earn?" |
| **AC (Actual Cost)** | ACWP | Actual money spent so far | "What did we actually spend?" |
| **BAC (Budget at Completion)** | - | Total planned budget | "What's the total budget?" |

---

<ConceptGrid>
  <ConceptCard title="Schedule Variance (SV)" subtitle="Ahead/Behind">
    <strong>SV = EV − PV</strong>
    <ul style="font-size: 0.85em; margin-top: 8px;">
      <li><strong>Positive:</strong> Ahead of Schedule</li>
      <li><strong>Negative:</strong> Behind Schedule</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Cost Variance (CV)" subtitle="Under/Over Budget">
    <strong>CV = EV − AC</strong>
    <ul style="font-size: 0.85em; margin-top: 8px;">
      <li><strong>Positive:</strong> Under Budget</li>
      <li><strong>Negative:</strong> Over Budget</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

::: tip  Quick Rule
For all EVM formulas: **Start with EV**. If it's variance, **subtract**. If it's an index, **divide**. Positive (or &gt;1.0) is ALWAYS good.
:::

---

<ConceptGrid>
  <ConceptCard title="Schedule Performance Index (SPI)" subtitle="Efficiency Ratio">
    <strong>SPI = EV / PV</strong>
    <p style="font-size: 0.85em; margin-top: 8px;">Efficiency indicator for schedule. SPI of 0.80 means 80% work done vs. plan.</p>
  </ConceptCard>
  <ConceptCard title="Cost Performance Index (CPI)" subtitle="Value Ratio">
    <strong>CPI = EV / AC</strong>
    <p style="font-size: 0.85em; margin-top: 8px;">Efficiency indicator for cost. CPI of 0.90 means getting 90 cents of value per \$1 spent.</p>
  </ConceptCard>
</ConceptGrid>

::: info  Thresholds
*   **&gt; 1.0:** Under budget or Ahead of schedule (Good)
*   **&lt; 1.0:** Over budget or Behind schedule (Bad)
*   **= 1.0:** On target
:::

::: tip  Quick Interpretation
If someone asks "Are we over or under budget?" → Check **CPI**
If they ask "Are we ahead or behind schedule?" → Check **SPI**
:::

---

<ConceptCard title="Forecasting: Estimate at Completion (EAC)" variant="secondary">
  <p>EAC predicts the total project cost based on current performance.</p>
  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <thead>
      <tr style="border-bottom: 2px solid var(--vp-c-divider);">
        <th style="padding: 8px; text-align: left;">Scenario</th>
        <th style="padding: 8px; text-align: left;">Formula</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--vp-c-divider);">
        <td style="padding: 8px;">Typical (Current performance continues)</td>
        <td style="padding: 8px;"><strong>EAC = BAC / CPI</strong></td>
      </tr>
      <tr style="border-bottom: 1px solid var(--vp-c-divider);">
        <td style="padding: 8px;">Atypical (One-time variance)</td>
        <td style="padding: 8px;"><strong>EAC = AC + (BAC - EV)</strong></td>
      </tr>
      <tr style="border-bottom: 1px solid var(--vp-c-divider);">
        <td style="padding: 8px;">Comprehensive (Both CPI & SPI matter)</td>
        <td style="padding: 8px;"><strong>EAC = AC + (BAC-EV)/(CPI*SPI)</strong></td>
      </tr>
    </tbody>
  </table>
</ConceptCard>

<ConceptGrid>
  <ConceptCard title="Estimate to Complete (ETC)" subtitle="Funds Needed">
    <strong>ETC = EAC − AC</strong>
    <p style="font-size: 0.85em; margin-top: 8px;">The remaining funds required to finish the project.</p>
  </ConceptCard>
  <ConceptCard title="To-Complete Index (TCPI)" subtitle="Required Efficiency">
    <strong>(BAC − EV) / (BAC − AC)</strong>
    <p style="font-size: 0.85em; margin-top: 8px;">The efficiency required to finish at the original BAC. If &gt; 1.0, you must work harder.</p>
  </ConceptCard>
</ConceptGrid>

---

<ConceptCard title="EVM Calculation Walkthrough" variant="secondary">
  <div style="display: flex; flex-direction: column; gap: 15px;">
    <div>
      <strong>Project Status:</strong> BAC: \$100k | PV: \$50k | EV: \$40k | AC: \$45k
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
      <div style="background: var(--vp-c-bg-soft); padding: 10px; border-radius: 6px;">
        <strong>Variances:</strong><br/>
        SV = 40k - 50k = -\$10k (Behind)<br/>
        CV = 40k - 45k = -\$5k (Over)
      </div>
      <div style="background: var(--vp-c-bg-soft); padding: 10px; border-radius: 6px;">
        <strong>Indices:</strong><br/>
        SPI = 40k / 50k = 0.80<br/>
        CPI = 40k / 45k = 0.89
      </div>
    </div>
    <div style="border-top: 1px solid var(--vp-c-divider); padding-top: 10px;">
      <strong>Forecasts:</strong><br/>
      EAC = 100k / 0.89 = <strong>\$112,360</strong><br/>
      TCPI = (100k - 40k) / (100k - 45k) = <strong>1.09</strong>
    </div>
    <div style="font-style: italic; font-size: 0.9em; color: var(--vp-c-warning);">
      Assessment: Project is behind and over budget. To hit the original target, the team must improve efficiency by 9% (TCPI 1.09).
    </div>
  </div>
</ConceptCard>

---

### EVM Summary Table (Quick Reference)

| Formula | Calculation | Interpretation |
|:--------|:------------|:---------------|
| **SV** | EV − PV | &gt;0 = ahead, &lt;0 = behind |
| **CV** | EV − AC | &gt;0 = under budget, &lt;0 = over budget |
| **SPI** | EV / PV | &gt;1.0 = ahead, &lt;1.0 = behind |
| **CPI** | EV / AC | &gt;1.0 = under budget, &lt;1.0 = over |
| **EAC** | BAC / CPI | Expected total cost (typical) |
| **ETC** | EAC − AC | Money still needed |
| **VAC** | BAC − EAC | Expected surplus/deficit |
| **TCPI** | (BAC−EV)/(BAC−AC) | Efficiency needed to hit BAC |

---

**S-Curve Characteristics**:
- **Early Project**: Slower spending (planning, ramp-up)
- **Mid-Project**: Faster spending (execution)
- **Late Project**: Slowing spending (closeout)

---

<ConceptGrid>
  <ConceptCard title="Scenario 1: Identified Risk Occurs" variant="warning">
    <strong>Situation:</strong> A risk from the register triggers a cost.<br/>
    <strong>Answer:</strong> Use <strong>Contingency Reserve</strong>. This is under PM authority and part of the baseline.
  </ConceptCard>
  <ConceptCard title="Scenario 2: Unforeseen Event" variant="secondary">
    <strong>Situation:</strong> An earthquake damages the site (not in register).<br/>
    <strong>Answer:</strong> Request <strong>Management Reserve</strong> from the sponsor via Change Request.
  </ConceptCard>
  <ConceptCard title="Scenario 3: Bad SPI/CPI">
    <strong>Situation:</strong> CPI = 0.85 and SPI = 1.1.<br/>
    <strong>Answer:</strong> You are <strong>ahead of schedule</strong> but <strong>over budget</strong>.
  </ConceptCard>
  <ConceptCard title="Scenario 4: TCPI Realism">
    <strong>Situation:</strong> Current CPI is 0.7, but required TCPI is 1.25.<br/>
    <strong>Answer:</strong> Completing at BAC is <strong>unlikely</strong>. You need a budget increase or scope cut.
  </ConceptCard>
  <ConceptCard title="Scenario 5: One-Time Variance">
    <strong>Situation:</strong> Overage was a one-time error; future work is fine.<br/>
    <strong>Answer:</strong> Use <strong>EAC = AC + (BAC - EV)</strong> (Atypical formula).
  </ConceptCard>
</ConceptGrid>

---

##  Key Formulas & Quick Reference

### Cost Formulas

| Formula | Purpose |
|:--------|:--------|
| **SV = EV - PV** | Schedule Variance |
| **CV = EV - AC** | Cost Variance |
| **SPI = EV / PV** | Schedule Performance Index |
| **CPI = EV / AC** | Cost Performance Index |
| **EAC = BAC / CPI** | Estimate at Completion (typical) |
| **EAC = AC + (BAC - EV)** | EAC (atypical variance) |
| **EAC = AC + (BAC-EV)/(CPI*SPI)** | EAC (comprehensive) |
| **ETC = EAC - AC** | Estimate to Complete |
| **VAC = BAC - EAC** | Variance at Completion |
| **TCPI = (BAC - EV) / (BAC - AC)** | To-Complete Performance Index |

### Quick Decision Guide

| Situation | Solution |
|:----------|:---------|
| Risk in register occurred | Use contingency reserve (PM authority) |
| Unforeseen event occurred | Request management reserve (sponsor) |
| CPI less than 1.0 | Project over budget |
| SPI less than 1.0 | Project behind schedule |
| TCPI greater than 1.0 | Must become more efficient |
| TCPI impossible | Consider scope/budget change |


### Test Your Knowledge
Use the study guide features above to master cost management concepts.

---

## Quick Review

<FlashcardCarousel :cards='[
  { "front": "Contingency vs. Management?", "back": "Contingency=Known unknowns (baseline). Management=Unknown unknowns (non-baseline)." },
  { "front": "CPI less than 1.0?", "back": "Over budget." },
  { "front": "Sunk Costs?", "back": "Already spent. Ignore for future decisions." },
  { "front": "Analogous vs Parametric?", "back": "Analogous=Past projects. Parametric=Math model." },
  { "front": "TCPI greater than 1.0?", "back": "Must be more efficient." }
]' />

::: tip  Exam Insight
If an unforeseen disaster (not in the risk register) occurs, you need **Management Reserve**. This requires a formal change request and **Sponsor approval**. For identified risks that occur, use **Contingency Reserve** under PM authority.
:::


