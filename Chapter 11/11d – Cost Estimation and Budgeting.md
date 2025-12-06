# 11d – Cost Estimation and Budgeting

## Learning Objectives

By the end of this section, you will be able to:
- Apply appropriate cost estimation techniques based on project phase and available information
- Distinguish between different cost types and understand their budgeting implications
- Explain how cost management differs across predictive, agile, and hybrid approaches
- Use contingency reserves and management reserves appropriately
- Create and manage cost baselines for project control
- Understand the relationship between estimation accuracy and project phase
- Apply earned value concepts for cost and schedule integration

---

## Why Cost Estimation Matters

Cost estimation translates scope and schedule into financial requirements. It answers: How much will this cost? Can we afford it? Where should we allocate budget?

Without realistic cost estimates:
- Projects run out of funding before completion
- Stakeholders make uninformed go/no-go decisions
- Resource allocation is suboptimal
- Financial controls are meaningless (no baseline to measure against)
- Business case ROI calculations are unreliable

But cost estimation lives in a paradox:
- Stakeholders want precise estimates early when uncertainty is highest
- Detailed estimates require detailed planning, which takes time
- Estimates are forecasts, not guarantees—actual costs will vary
- Pressure to lowball estimates to secure project approval creates future problems

The art of cost estimation is providing realistic estimates that reflect current knowledge while acknowledging uncertainty.

---

## Cost Components

Not all costs are the same. Understanding different cost types helps you create comprehensive budgets.

### 1. Direct Costs

**Definition:** Costs directly attributable to the project work.

**Examples (Office Renovation):**
- Construction labor and materials
- Architect and engineer fees
- HVAC equipment
- Building permits
- Project manager salary (if dedicated to this project)

Direct costs are typically easy to trace and control.

### 2. Indirect Costs

**Definition:** Costs that benefit multiple projects or the organization, allocated proportionally.

**Examples:**
- Facilities overhead (office space, utilities)
- IT infrastructure (servers, networks)
- HR and finance support services
- Executive management
- Shared services (legal, procurement)

**Sarah's Expense System:**
The development team uses company office space, laptops, and software licenses shared across multiple projects. These are indirect costs allocated to the project based on team size or time.

Indirect costs are often calculated as a percentage of direct costs (e.g., 30% overhead rate).

### 3. Fixed Costs

**Definition:** Costs that don't vary with project size or duration.

**Examples (Office Renovation):**
- Building permit fee: $5,000 (whether project takes 20 weeks or 30 weeks)
- Architectural design: $50,000 (fixed fee contract)
- Project management software license: $2,000/year

Fixed costs must be incurred regardless of project scope or duration.

### 4. Variable Costs

**Definition:** Costs that vary based on project scope, duration, or volume of work.

**Examples (Office Renovation):**
- Construction labor: Varies with schedule duration
- Materials: Varies with scope (more square footage = more materials)
- Equipment rental: Varies with duration

**Sarah's Digital Transformation:**
Cloud infrastructure costs are variable—they scale with number of users and data volume.

### 5. Sunk Costs

**Definition:** Costs already incurred that cannot be recovered.

**Example:**
Sarah's expense system has spent $200,000 in development over 3 months. The sponsor questions whether to continue or cancel the project.

**Sunk cost:** The $200,000 already spent. This should NOT influence the go/no-go decision.

**Correct analysis:** Compare future costs to future benefits. If future benefits exceed future costs, continue. If not, cancel (even though $200,000 is sunk).

**Sunk cost fallacy:** "We've already invested so much; we can't stop now." This is flawed reasoning. Past costs are irrelevant to future decisions.

### 6. Opportunity Costs

**Definition:** The value of the next-best alternative foregone by choosing this project.

**Example:**
Sarah's organization has budget for either the expense system project ($500,000) or a customer portal project ($500,000), but not both.

If they choose the expense system, the **opportunity cost** is the value they would have gained from the customer portal.

Opportunity costs don't appear in project budgets, but they matter for portfolio decisions.

---

## Cost Estimation Techniques

Different techniques provide different levels of accuracy. Use the technique appropriate for your project phase and available information.

### 1. Analogous Estimating (Top-Down)

**How it works:** Use actual costs from a similar past project as the basis for estimating the current project.

**Example (Office Renovation):**
Sarah's organization renovated a similar office 2 years ago for $800,000 (12,000 sq ft). The current renovation is 15,000 sq ft.

**Analogous estimate:** ($800,000 ÷ 12,000 sq ft) × 15,000 sq ft = $1,000,000

**When to use:**
- Early in the project when detailed information is unavailable
- Historical data from similar projects exists
- Quick, rough estimate needed for initial decision-making

**Accuracy:** Rough (±25% to ±75% depending on similarity)

**Strengths:** Fast, inexpensive, uses expert judgment
**Weaknesses:** Less accurate, depends on similarity of projects, doesn't account for unique aspects

### 2. Parametric Estimating

**How it works:** Use statistical relationship between historical data and variables (parameters) to calculate estimates.

**Example (Office Renovation):**
Historical data shows office renovations cost an average of $75 per square foot.

**Parametric estimate:** 15,000 sq ft × $75/sq ft = $1,125,000

**More sophisticated parametric model might adjust for variables:**
- Location multiplier (urban vs. suburban)
- Complexity factor (open plan vs. many private offices)
- Quality level (standard vs. high-end finishes)

**When to use:**
- Reliable historical data and parameters available
- Relationship between parameters and cost is well-established
- Need reasonably accurate estimate without detailed planning

**Accuracy:** Moderate (±10% to ±25% depending on parameter reliability)

**Strengths:** More accurate than analogous, backed by data, scalable
**Weaknesses:** Requires good historical data, may not capture unique project aspects

### 3. Bottom-Up Estimating

**How it works:** Estimate the cost of individual work packages or activities, then roll up to total project cost.

**Example (Office Renovation):**
Sarah uses the WBS to estimate each work package:

| WBS Element | Estimated Cost |
|-------------|----------------|
| 1.1 Design and Planning | $75,000 |
| 1.2 Site Preparation | $40,000 |
| 1.3 Construction | $650,000 |
| 1.4 Systems and Equipment | $280,000 |
| 1.5 Inspection and Closeout | $25,000 |
| 1.6 Project Management | $80,000 |
| **Total Direct Costs** | **$1,150,000** |
| Contingency Reserve (10%) | $115,000 |
| **Total Project Cost** | **$1,265,000** |

Each work package cost is estimated by the responsible contractor or team based on labor, materials, equipment, and subcontractor costs.

**When to use:**
- Detailed planning is complete (WBS created)
- Most accurate estimate needed for budget baseline
- Enough time to decompose and estimate each component

**Accuracy:** High (±5% to ±10% with detailed WBS)

**Strengths:** Most accurate, detailed, provides basis for control
**Weaknesses:** Time-consuming, requires detailed planning, can give false precision if assumptions are wrong

### 4. Three-Point Estimating

**How it works:** Develop three estimates (optimistic, most likely, pessimistic) and calculate weighted average.

**Formulas:**
- **Triangular distribution:** (Optimistic + Most Likely + Pessimistic) ÷ 3
- **Beta distribution (PERT):** (Optimistic + 4×Most Likely + Pessimistic) ÷ 6

**Example (Office Renovation – HVAC Installation):**
- **Optimistic (O):** $140,000 (if everything goes perfectly, no issues)
- **Most Likely (ML):** $180,000 (realistic estimate)
- **Pessimistic (P):** $260,000 (if we encounter significant issues like asbestos or structural problems)

**PERT Estimate:** (140,000 + 4×180,000 + 260,000) ÷ 6 = **$186,667**

**Standard deviation:** (P - O) ÷ 6 = (260,000 - 140,000) ÷ 6 = $20,000

This estimate acknowledges uncertainty: There's a range of possible costs, not a single number.

**When to use:**
- Significant uncertainty in estimates
- Need to quantify risk and variability
- Want to communicate estimate confidence

**Accuracy:** Depends on quality of three estimates, but acknowledges uncertainty better than single-point estimates

**Strengths:** Accounts for uncertainty, provides range, mathematically rigorous
**Weaknesses:** Requires three estimates instead of one, can still be wrong if all three estimates are biased

---

## Estimation Accuracy and Project Phase

Estimates become more accurate as you learn more about the project.

### Cone of Uncertainty

```
Estimate Range
    |
±75%|     *
    |    * *
±50%|   *   *
    |  *     *
±25%| *       *
    |*         *
±10%|           *
    |____________*______
    Concept  Planning  Execution  Closeout
    (Initiation)
```

**Early estimates (Initiation/Concept):**
- Rough order of magnitude (ROM): ±25% to ±75%
- Based on analogous or high-level parametric estimates
- Used for initial go/no-go decisions, portfolio prioritization

**Planning estimates:**
- Budget estimate: ±10% to ±25%
- Based on detailed planning, bottom-up estimates, WBS
- Used to establish cost baseline, secure funding

**Execution estimates:**
- Definitive estimate: ±5% to ±10%
- Based on actual costs incurred, refined estimates for remaining work
- Used for forecasting final cost, variance analysis

**PMI Principle:** Communicate estimate accuracy to stakeholders. Don't present a ±50% ROM estimate as if it were a firm commitment.

**Sarah's Office Renovation Example:**

**Month 0 (Initiation):**
- ROM estimate: $1,000,000 (±50%) = Range of $500,000 to $1,500,000
- Basis: Analogous estimate from similar project

**Month 2 (Planning):**
- Budget estimate: $1,265,000 (±15%) = Range of $1,075,000 to $1,455,000
- Basis: Bottom-up estimate from WBS, contractor quotes

**Month 4 (Execution):**
- Actual costs to date: $550,000
- Estimate to complete: $700,000
- Forecast at completion: $1,250,000 (±5%) = Range of $1,188,000 to $1,313,000
- Basis: Actuals plus refined estimates for remaining work

---

## Cost Baselines and Budgets

The cost baseline is the approved budget against which project performance is measured.

### Components of the Cost Baseline

**1. Work Package Costs:**
Direct costs for each WBS work package.

**2. Control Account Costs:**
Aggregation of work packages that can be managed as a unit.

**3. Contingency Reserve:**
Budget allocated for identified risks (known unknowns).

**Example (Office Renovation):**
- Direct project costs: $1,150,000
- Contingency reserve: $115,000 (10% for known risks like material price increases, permit delays)
- **Cost baseline:** $1,265,000

**4. Management Reserve:**
Budget for unidentified risks (unknown unknowns), held outside the cost baseline.

**Example (Office Renovation):**
- Cost baseline: $1,265,000
- Management reserve: $135,000 (for truly unexpected issues)
- **Total project budget:** $1,400,000

**Key distinction:**
- **Contingency reserve:** Part of the baseline; project manager can use as risks occur
- **Management reserve:** Outside the baseline; requires sponsor approval to use

### S-Curve: Cumulative Cost Over Time

The cost baseline is often visualized as an S-curve showing planned cumulative spending over time.

```
Cumulative Cost ($)
    |
1.4M|                          *****
    |                      ****
1.2M|                   ***
    |                 **
1.0M|              ***
    |           ***
0.8M|         **
    |       **
0.6M|      *
    |    **
0.4M|   *
    |  *
0.2M| *
    |*
  0 |________________________
     0  2  4  6  8 10 12 14 16 18 20 22 24 Weeks
```

Early in the project, spending is low (design, permitting). Middle of project, spending accelerates (construction, equipment). End of project, spending tapers off (inspection, closeout).

The S-curve becomes the baseline for measuring actual cost performance.

---

## Cost Management Across Delivery Approaches

How you estimate, budget, and control costs depends fundamentally on your delivery approach.

### Predictive: Detailed Budget Baseline

**Philosophy:** Estimate comprehensively upfront. Baseline the budget. Control costs through variance analysis and change control.

**Process:**
1. **Estimate costs:** Use bottom-up estimating from WBS
2. **Aggregate costs:** Roll up work package costs to control accounts and total budget
3. **Add reserves:** Include contingency (known risks) and management reserve (unknowns)
4. **Baseline:** Gain approval for cost baseline; baseline becomes control reference
5. **Track and control:** Compare actual costs to baseline; analyze variances; forecast final cost

**Sarah's Office Renovation Example:**

**Cost Baseline (Approved):**
- Total direct costs: $1,150,000
- Contingency reserve: $115,000
- **Cost baseline:** $1,265,000
- Management reserve: $135,000
- **Total budget:** $1,400,000

**Month 4 Status:**
- Planned value (PV): $600,000 (what we planned to spend by now)
- Actual cost (AC): $650,000 (what we actually spent)
- Earned value (EV): $575,000 (value of work actually completed)

**Variance analysis:**
- **Cost variance (CV):** EV - AC = $575,000 - $650,000 = **-$75,000** (over budget)
- **Schedule variance (SV):** EV - PV = $575,000 - $600,000 = **-$25,000** (behind schedule)

**Interpretation:** The project is over budget and behind schedule. Sarah investigates root causes and develops corrective action.

**Forecast:**
- **Cost Performance Index (CPI):** EV ÷ AC = $575,000 ÷ $650,000 = **0.88** (getting $0.88 of value for every $1 spent)
- **Estimate at Completion (EAC):** Budget ÷ CPI = $1,265,000 ÷ 0.88 = **$1,437,500**

**Problem:** Forecast exceeds total budget ($1,400,000). Sarah needs corrective action or additional funding.

---

### Agile: Fixed Cost, Variable Scope

**Philosophy:** Fix the team cost (people, tools, infrastructure). Vary scope to fit the budget and timeline. Optimize for value delivery per dollar spent.

**Process:**
1. **Determine team cost:** Calculate cost per sprint (salaries, tools, overhead)
2. **Allocate budget:** Budget = Cost per sprint × Number of sprints
3. **Prioritize ruthlessly:** Ensure highest-value work is done first
4. **Track burn rate:** Monitor spending per sprint; adjust scope if needed
5. **Optimize value:** Focus on value delivered, not cost variance

**Sarah's Expense System Example:**

**Team composition:**
- Product owner: 50% allocation ($60/hour × 20 hours/week = $1,200/week)
- Scrum master: 100% allocation ($70/hour × 40 hours/week = $2,800/week)
- 4 Developers: 100% allocation ($80/hour × 40 hours/week × 4 = $12,800/week)
- Cloud infrastructure: $1,000/week
- Tools and licenses: $500/week

**Cost per sprint (2 weeks):** ($1,200 + $2,800 + $12,800 + $1,000 + $500) × 2 = **$36,600 per sprint**

**Budget:** 12 sprints × $36,600 = **$439,200**

**Budget buffer:** $60,800 for unexpected costs (training, additional infrastructure, vendor support)

**Total budget:** $500,000

**Cost management:**
- Team cost is fixed and predictable ($36,600 per sprint)
- No variance analysis or earned value (scope varies to fit cost, not the reverse)
- Focus on value: Are we delivering the highest-value features? Is the product meeting user needs?

**Budget risk scenario:**
After Sprint 8, stakeholders request adding a senior developer for remaining 4 sprints (additional $80/hour × 40 hours/week × 2 weeks = $6,400 per sprint).

**Impact:** Additional cost of $25,600 (4 sprints × $6,400)

**Options:**
1. **Increase budget** by $25,600
2. **Reduce sprints** from 12 to 11 (save one sprint's cost to fund senior developer for 4 sprints)
3. **Defer lower-priority features** and stay within original 12 sprints and budget

Product owner chooses Option 3: Senior developer joins, lower-priority features deferred, budget unchanged.

---

### Hybrid: Layered Cost Management

**Philosophy:** Allocate budget at program level (predictive). Manage team budgets adaptively (agile). Control program-level costs; allow team-level flexibility.

**Sarah's Digital Transformation Program:**

**Program Budget (Predictive):**
- Platform development: $2,000,000 (12 months, fixed team)
- Regional implementations: $3,000,000 (15 regions × $200,000 average per region)
- Program management and governance: $500,000
- Contingency reserve: $400,000
- **Total program budget:** $5,900,000
- Management reserve: $600,000
- **Total budget:** $6,500,000

**Platform Team Cost (Agile):**
- Fixed team cost: $80,000 per sprint (2-week sprints)
- 12 months = 24 sprints × $80,000 = $1,920,000
- Buffer: $80,000 for unexpected costs
- **Platform budget:** $2,000,000 (fixed)

**Regional Implementation Costs (Predictive):**
- Each region estimated bottom-up: $150,000 to $250,000 depending on size and complexity
- Average: $200,000 per region
- 15 regions × $200,000 = $3,000,000

**Cost control:**
- **Program level:** Track total spending against program budget; use earned value to forecast total cost
- **Platform team:** Fixed cost per sprint; no variance analysis (scope varies to fit cost)
- **Regional teams:** Track actual vs. estimated costs per region; analyze variances

**Program-level variance (Month 9):**
- Planned spending: $3,500,000
- Actual spending: $3,700,000 (over budget by $200,000)
- Earned value: $3,600,000

**Root cause:** Region 3 implementation cost $250,000 (vs. $200,000 estimate) due to complex data migration.

**Corrective action:** Use contingency reserve to cover overrun; review remaining regional estimates to identify savings opportunities.

---

## Contingency and Management Reserves

Reserves buffer against uncertainty and protect project commitments.

### Contingency Reserve

**Purpose:** Budget for **known risks** that may or may not occur.

**Example (Office Renovation):**
Sarah identifies risks during planning:
- Material price increases: Probability 60%, Impact $30,000
- Permit delays requiring expedited approval: Probability 40%, Impact $10,000
- Discovering asbestos requiring remediation: Probability 20%, Impact $50,000

**Expected monetary value (EMV):**
- Material prices: 0.60 × $30,000 = $18,000
- Permit delays: 0.40 × $10,000 = $4,000
- Asbestos: 0.20 × $50,000 = $10,000
- **Total EMV:** $32,000

Sarah requests $115,000 contingency reserve (covers identified risks plus some buffer).

**Management of contingency:**
- Project manager controls contingency reserve
- Used as identified risks occur
- Tracked and reported (how much contingency remains?)

**Month 5:** Material prices increase by $25,000. Sarah uses contingency to cover the cost. Contingency remaining: $90,000.

### Management Reserve

**Purpose:** Budget for **unknown unknowns**—risks that weren't identified during planning.

**Example (Office Renovation):**
Management reserve: $135,000 (outside cost baseline)

**Month 6:** During demolition, the team discovers outdated electrical wiring that doesn't meet current code (unidentified risk). Remediation cost: $40,000.

Sarah requests approval from sponsor to use $40,000 from management reserve. Sponsor approves. Management reserve remaining: $95,000.

**Key difference from contingency:**
- Contingency is for **known risks** (project manager controls)
- Management reserve is for **unknown risks** (requires sponsor approval)

### Reserve Depletion

As the project progresses, uncertainty decreases and reserves can be released.

**Month 8 (Office Renovation):**
Major risks have passed:
- Permits approved (no longer at risk)
- No asbestos discovered (risk retired)
- Material prices stable (risk impact lower than expected)

Sarah recommends releasing $50,000 of contingency back to the organization (no longer needed). Stakeholders appreciate the cost savings.

---

## Practical Examples

### Example 1: Choosing the Right Estimation Technique

**Situation:** Sarah is asked to estimate three different projects at different stages:

**Project A (Concept):** New employee onboarding portal. Similar to a customer portal completed last year for $300,000. New portal is estimated to be 20% larger in scope.

**Technique:** Analogous estimating
**Estimate:** $300,000 × 1.20 = $360,000 (ROM, ±50%)

**Project B (Planning):** Office renovation with detailed architectural drawings and contractor quotes available.

**Technique:** Bottom-up estimating (using WBS and contractor quotes)
**Estimate:** $1,265,000 (Budget estimate, ±15%)

**Project C (Execution, Month 3):** Digital transformation program. Actual costs to date: $1,800,000. CPI: 0.95.

**Technique:** Earned value forecasting
**Estimate at Completion:** $5,900,000 ÷ 0.95 = $6,210,000 (Definitive, ±10%)

**Lesson:** Match estimation technique to project phase and available information.

---

### Example 2: Fixed Cost, Variable Scope in Agile

**Situation:** Sarah's expense system has budget for 12 sprints ($439,200). After Sprint 8, stakeholders want to add extensive reporting features (estimated 40 story points). Team velocity is 18 points per sprint.

**Analysis:**
- Sprints remaining: 4
- Capacity remaining: 4 sprints × 18 points = 72 points
- Current backlog remaining: 60 points
- New reporting features: 40 points
- Total work: 100 points

**Problem:** 100 points of work, only 72 points of capacity.

**Options:**

**Option 1: Add sprints (increase cost)**
- Additional sprints needed: (100 - 72) ÷ 18 = 1.6 sprints → 2 sprints
- Additional cost: 2 × $36,600 = $73,200
- **Total budget:** $512,800 (exceeds original $500,000)

**Option 2: Prioritize and defer (maintain budget)**
- Keep 12 sprints and $439,200 budget
- Deliver top 72 points (highest value)
- Defer 28 points to future release

**Option 3: Reduce scope of reporting features**
- Work with stakeholders to simplify reporting features
- Reduce from 40 points to 20 points
- Total work: 80 points (fits within capacity with buffer)

**Product owner decision:** Option 3 (reduce scope of reporting). Deliver essential reports now; defer advanced analytics to future release.

**Lesson:** In agile, cost and time are fixed. Scope adjusts to fit. Prioritization is key.

---

### Example 3: When Estimates Go Wrong

**Situation:** Sarah's office renovation was estimated at $1,265,000 (cost baseline). At Month 5, actual cost is $750,000 but only 50% of work is complete.

**Expected cost at 50% complete:** $1,265,000 × 50% = $632,500

**Actual cost:** $750,000

**Variance:** $750,000 - $632,500 = **$117,500 over budget**

**Root cause analysis:**
Sarah investigates and discovers:
- Construction labor rates were underestimated (contractor quoted $60/hour, actual is $75/hour)
- Structural issues discovered during demolition required unplanned reinforcement ($40,000)
- Material prices increased 8% due to supply chain issues ($25,000)

**Forecast at completion:**
If trends continue: $1,265,000 ÷ ($632,500 ÷ $750,000) = **$1,500,000**

**Problem:** Forecast ($1,500,000) exceeds total budget ($1,400,000).

**Corrective actions:**

**Option 1: Request additional funding**
- Ask sponsor for $100,000 additional budget

**Option 2: Reduce scope**
- Eliminate one collaboration zone (saves $75,000)
- Use standard finishes instead of high-end (saves $30,000)
- Total savings: $105,000

**Option 3: Use management reserve**
- Management reserve: $135,000 (sufficient to cover overrun)

**Option 4: Combination**
- Use $100,000 from management reserve
- Implement small scope reductions (saves $25,000)

**Sponsor decision:** Option 4 (combination). Critical scope maintained; budget overrun minimized.

**Lesson:** When estimates are wrong, identify root causes, forecast impact, and develop corrective actions. Communicate transparently with stakeholders.

---

## Summary

Cost estimation and budgeting translate scope and schedule into financial planning and control.

**Key Takeaways:**

1. **Cost types:** Direct, indirect, fixed, variable, sunk (ignore for future decisions), opportunity (value of alternatives)

2. **Estimation techniques:** Analogous (quick, rough), parametric (data-driven, moderate accuracy), bottom-up (detailed, accurate), three-point (accounts for uncertainty)

3. **Estimation accuracy:** Improves as project progresses; ROM (±50%) → Budget (±15%) → Definitive (±5%)

4. **Cost baseline:** Approved budget (work package costs + contingency reserve); reference for performance measurement

5. **Reserves:** Contingency (known risks, PM controls) vs. management reserve (unknown risks, sponsor controls)

6. **Predictive cost management:** Detailed budget baseline, variance analysis, earned value, forecast at completion

7. **Agile cost management:** Fixed team cost per sprint, variable scope, optimize value per dollar spent

8. **Hybrid cost management:** Program budget (predictive), team budgets (agile), layered control

**PMI Perspective:**
- Communicate estimate accuracy and basis to stakeholders
- Estimates are forecasts, not commitments; acknowledge uncertainty
- Cost management approach should match project context
- Reserves are essential for managing risk and protecting commitments
- Earned value integrates cost and schedule for comprehensive performance measurement

---

**Up Next:** Section 11e explores quality planning and acceptance criteria—defining how the project will ensure deliverables meet requirements and stakeholder expectations.
