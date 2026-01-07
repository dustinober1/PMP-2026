
<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

**ECO Task**: Plan and manage resources
**ECO Task**: Plan and manage procurement

Project success depends on getting the right people, tools, and materials in the right place at the right time.

---

##  The Resource Spectrum
In PMP terms, "Resources" includes both human talent and physical materials.

<ConceptGrid>
  <ConceptCard 
    title="Team Resources"
    variant="primary"
  >
    Managing skills, availability, and growth. Focus on <strong>Servant Leadership</strong> and team health.
  </ConceptCard>
  <ConceptCard 
    title="Physical Resources"
    variant="secondary"
  >
    Managing equipment, rentals, software licenses, and facilities. Focus on <strong>Logistics</strong> and control.
  </ConceptCard>
</ConceptGrid>

---

##  The Resource Planning Flow

### Step 1: Plan Resource Management
**Purpose**: Define how resources will be identified, acquired, managed, and released
**Key Outputs**:
- Resource Management Plan
- Team Charter (roles, ground rules)
- Organizational structure (hierarchical, matrix, virtual)

### Step 2: Estimate Activity Resources
**Purpose**: Determine what resources are needed for each activity
**Key Outputs**:
- Resource requirements (types and quantities)
- Resource breakdown structure
- Basis of estimates

### Step 3: Acquire Resources
**Purpose**: Obtain team members and physical resources
**Key Outputs**:
- Physical resource assignments
- Project team assignments
- Resource calendars

### Step 4: Develop Team
**Purpose**: Improve competencies and team interaction
**Key Outputs**:
- Team performance assessments
- Change requests (for improvements)

### Step 5: Manage Team
**Purpose**: Track performance, provide feedback, resolve issues
**Key Outputs**:
- Change requests
- Project Management Plan updates

---

##  Key Planning Artifacts

### Resource Management Plan

| Component | Description |
|:----------|:------------|
| **Identification** | How resources will be identified and categorized |
| **Acquisition** | How team will be assembled (internal, external, contract) |
| **Roles & Responsibilities** | Who does what (RACI) |
| **Project Organization Chart** | Reporting relationships |
| **Team Development** | Training, team building approaches |
| **Resource Control** | How resources will be tracked and released |
| **Recognition Plan** | How achievements will be acknowledged |

### Team Charter

The Team Charter explicitly defines how human resources will interact:

| Element | Description |
|:--------|:------------|
| **Team Values** | Guiding principles (respect, transparency, etc.) |
| **Communication Guidelines** | How the team will communicate |
| **Decision Making** | How decisions will be made |
| **Conflict Resolution** | How disagreements will be handled |
| **Meeting Guidelines** | Expectations for team meetings |
| **Working Agreements** | Core hours, response times, etc. |

---

##  Roles & Responsibility (RAM / RACI)

When a question signals confusion about "who owns what," you're in responsibility assignment territory.

### RAM (Responsibility Assignment Matrix)

The umbrella term that links WBS work to owners.

### RACI Chart

A common RAM format:

| Letter | Role | Definition |
|:-------|:-----|:-----------|
| **R** | Responsible | Does the work (can be multiple) |
| **A** | Accountable | Final owner, approves work (only ONE per deliverable) |
| **C** | Consulted | Provides input before work (two-way communication) |
| **I** | Informed | Notified after work complete (one-way communication) |

### RACI Chart Example

| Deliverable | PM | BA | Dev Lead | QA Lead | Sponsor |
|:------------|:---|:---|:---------|:--------|:--------|
| Requirements baseline | A | R | C | C | I |
| Technical architecture | A | C | R | C | I |
| Test plan | A | C | C | R | I |
| Go/No-Go decision | C | I | I | I | A |
| Budget approval | R | I | I | I | A |

::: tip  Exam Clue
For a single deliverable, there should be **one Accountable** party (clear ownership). Having multiple "A"s creates confusion.
:::

### RACI Variations

| Variant | Additional Role |
|:--------|:----------------|
| **RASCI** | Supportive (helps Responsible) |
| **RACI-VS** | Verify (quality check), Sign-off (final approval) |
| **CAIRO** | Out of scope (explicitly excluded) |

---

##  Resource Calendars (Availability Is a Constraint)

Planning is not just "how many people" — it's **when they are available**:

### Human Resource Availability Factors

| Factor | Impact | Mitigation |
|:-------|:-------|:-----------|
| **Vacations/PTO** | Gaps in availability | Plan around known absences |
| **Part-time allocation** | Limited hours | Adjust task sizing |
| **Multiple project assignments** | Competing priorities | Negotiate with functional managers |
| **Time zones** | Limited overlap | Define core hours |
| **On-call rotations** | Unplanned interruptions | Buffer capacity |
| **Training/development** | Temporary unavailability | Schedule around training |

### Physical Resource Availability Factors

| Factor | Impact | Mitigation |
|:-------|:-------|:-----------|
| **Delivery lead times** | Delays in availability | Order early |
| **Equipment maintenance** | Scheduled downtime | Plan around maintenance windows |
| **Facility access** | Limited hours | Align work schedules |
| **Vendor schedules** | External dependencies | Contractual commitments |
| **Shipping/customs** | International delays | Buffer time, use local sources |

---

### Resource Optimization Techniques

<ConceptGrid>
  <ConceptCard title="Resource Leveling" variant="primary">
    <strong>Goal:</strong> Resolve over-allocation by adjusting the schedule.<br/>
    <strong>Key Impact:</strong> Usually <strong>extends the project finish date</strong>.<br/>
    <strong>When to Use:</strong> When resource limits are fixed and cannot be exceeded. Consumes all available float and then shifts critical path.
  </ConceptCard>
  <ConceptCard title="Resource Smoothing" variant="secondary">
    <strong>Goal:</strong> Optimize utilization without changing the finish date.<br/>
    <strong>Key Impact:</strong> <strong>Does not change the finish date</strong>.<br/>
    <strong>When to Use:</strong> When the end date is fixed. Shift activities only within their available float (slack).
  </ConceptCard>
</ConceptGrid>

### Comparison Table

| Aspect | Resource Leveling | Resource Smoothing |
|:-------|:------------------|:-------------------|
| **Goal** | Eliminate overallocation | Balance utilization |
| **End Date** | Usually extends | Does not change |
| **Float Usage** | May consume all float | Uses only available float |
| **When Applied** | Resources are the constraint | Date is the constraint |

---

##  Virtual Team Considerations

### Virtual Team Strategies

<ConceptGrid>
  <ConceptCard title="Challenges" variant="danger">
    <ul>
      <li><strong>Communication barriers:</strong> Misunderstandings due to lack of non-verbal cues.</li>
      <li><strong>Time zones:</strong> Scheduling difficulty and reduced collaboration windows.</li>
      <li><strong>Trust:</strong> Longer to establish bonds without face-to-face interaction.</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Best Practices" variant="success">
    <ul>
      <li><strong>Clear Norms:</strong> Define core hours and response time expectations.</li>
      <li><strong>Video First:</strong> Use video calls to build personal connection.</li>
      <li><strong>Document Flow:</strong> Use async tools for persistent documentation.</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

::: info  2026 Focus: Virtual Logistics
Modern resource planning must account for **Digital Latency**. If your team is global, do they have the same cloud infrastructure? Is the physical hardware available in their specific region (e.g., chip shortages)?
:::

---

##  Procurement Planning (External Resources)

When you cannot source resources internally, procurement planning helps you get the work done without uncontrolled risk.

### Procurement Planning Process

1. **Make-or-Buy Analysis** → Decide internal vs. external
2. **Procurement Strategy** → Determine approach
3. **Procurement SOW** → Define what's needed
4. **Source Selection Criteria** → How to evaluate vendors
5. **Procurement Documents** → RFP, RFQ, IFB

---

##  Make-or-Buy Analysis

### Make-or-Buy Decision Logic

<ConceptGrid>
  <ConceptCard title="Build (Make)" variant="primary">
    Choose this when the work involves <strong>core competencies</strong>, proprietary intellectual property, or when long-term capability building is a strategic goal. It offers maximum control over quality and process.
  </ConceptCard>
  <ConceptCard title="Outsource (Buy)" variant="secondary">
    Choose this for <strong>non-core work</strong>, one-time needs, or when specialized expertise is not available internally. It allows for risk transfer to the vendor and often a faster time-to-market.
  </ConceptCard>
</ConceptGrid>

### Make-or-Buy Decision Matrix

| Factor | Make | Buy |
|:-------|:-----|:-----|
| **Initial Cost** | Higher (hire/train) | Lower (vendor ready) |
| **Long-term Cost** | Lower (reusable) | Higher (ongoing fees) |
| **Control** | High | Low |
| **Risk** | Internal capacity risk | Vendor dependency risk |
| **Quality** | Direct control | Contract-dependent |
| **Speed** | Slower (ramp-up) | Faster (expertise ready) |
| **Flexibility** | High | Contract-limited |

::: tip  Exam Insight
Make-or-buy isn't just about cost. Consider **strategic value**, **risk tolerance**, and **organizational capability**. If a question mentions "core business capability" or "long-term investment," lean toward **Make**. If it mentions "one-time project" or "specialized expertise," lean toward **Buy**.
:::

---

##  Procurement Documents

### Document Types

| Document | Purpose | When Used |
|:---------|:--------|:----------|
| **RFI (Request for Information)** | Gather vendor information | Early exploration |
| **RFQ (Request for Quotation)** | Get pricing for defined item | Commodity purchase |
| **RFP (Request for Proposal)** | Get solution proposals | Complex requirements |
| **IFB (Invitation for Bid)** | Competitive bidding | Standard, well-defined scope |

### Procurement Statement of Work (SOW)

Defines what you want a seller to deliver:

| Element | Description |
|:--------|:------------|
| **Scope of Work** | What needs to be done |
| **Location** | Where work will be performed |
| **Period of Performance** | Timeline expectations |
| **Deliverables** | Specific outputs expected |
| **Acceptance Criteria** | How deliverables will be accepted |
| **Standards** | Quality and technical standards |

---

##  Source Selection Methods

### How to Pick the Winner?

| Method | Description | When to Use |
|:-------|:------------|:------------|
| **Least Cost** | Lowest price wins | Commodity items, price is key |
| **Qualifications Only** | Best qualified vendor | Expert services (consulting, legal) |
| **Quality-Based** | Best technical solution, then negotiate price | Complex solutions |
| **Quality-Cost Trade-off** | Weighted scoring (70% tech, 30% cost) | Balance quality and cost |
| **Fixed Budget** | Best scope for set budget | "We have $50k, maximize value" |
| **Sole Source** | Only one vendor viable | Proprietary, emergency, unique |

### Weighted Scoring Example

| Criteria | Weight | Vendor A | Vendor B |
|:---------|:-------|:---------|:---------|
| Technical (40%) | 0.40 | 85 | 92 |
| Experience (25%) | 0.25 | 90 | 80 |
| Cost (20%) | 0.20 | 95 | 85 |
| References (15%) | 0.15 | 88 | 90 |
| **Weighted Score** | | **89.3** | **87.3** |

**Decision**: Vendor A wins (higher weighted score)

---

##  Bidder Conferences

A meeting with all prospective sellers to ensure everyone has a clear, common understanding of the procurement.

### Bidder Conference Rules

| Rule | Rationale |
|:-----|:----------|
| **Fairness** | All bidders equal access | No private conversations |
| **Transparency** | All Q&A shared | Answers go to everyone |
| **Documentation** | Record all questions/answers | Reference for disputes |
| **No Changes** | Don't change scope during conference | Use formal amendment process |

::: warning  Exam Alert
If one vendor asks a question privately after the bidder conference, you **must share the answer with all vendors**. Fairness requires equal access to information.
:::

---

##  Contract Types (Exam Essentials)

### Overview

| Contract | Who Holds More Cost Risk? | When It Fits |
|:---------|:--------------------------|:-------------|
| **Fixed Price (FFP)** | Seller | Scope is clear/stable |
| **Cost-Reimbursable (CP)** | Buyer | Scope is uncertain/R&D |
| **Time & Materials (T&M)** | Shared | Staff augmentation / urgent work |

---

### Fixed-Price Contracts (Seller Bears Cost Risk)

#### Firm Fixed Price (FFP)
- Seller delivers for a set price, regardless of actual costs
- Buyer has minimal risk; seller has maximum risk
- Best when: Scope is crystal clear, stable, and well-defined
- **Example**: Build a website for exactly $50,000

#### Fixed Price Incentive Fee (FPIF)
- Fixed price with performance incentives
- Seller can earn bonus for beating targets (cost, schedule, quality)
- Shares cost savings between buyer and seller
- **Example**: $50k base + $5k bonus if delivered 2 weeks early

##### FPIF Calculation Components
- **Target Cost**: Expected cost if everything goes as planned
- **Target Fee**: Expected profit at target cost
- **Ceiling Price**: Maximum buyer will pay
- **Share Ratio**: How savings/overages are split (e.g., 80/20 Buyer/Seller)

#### Fixed Price with Economic Price Adjustment (FP-EPA)
- Fixed price but can adjust for inflation, currency fluctuations, commodity price changes
- Protects both parties in long-term contracts
- **Example**: $1M price with annual CPI adjustment over 3-year contract

---

### Cost-Reimbursable Contracts (Buyer Bears More Risk)

#### Cost Plus Fixed Fee (CPFF)
- Seller reimbursed for all costs + a fixed fee (profit)
- Fee doesn't change based on performance
- Best when: Scope uncertain, R&D work
- **Example**: All costs + $20,000 fee (regardless of final cost)

#### Cost Plus Incentive Fee (CPIF)
- Seller reimbursed for costs + variable fee based on performance
- Fee tied to meeting cost, schedule, or quality targets
- **Example**: All costs + $15k-$25k fee based on performance

#### Cost Plus Award Fee (CPAF)
- Seller reimbursed for costs + subjective award fee
- Fee determined by buyer based on satisfaction (subjective)
- **Example**: All costs + $0-$30k award fee at buyer's discretion

---

### Time and Materials (T&M)

- Hybrid: Pays for time (hourly rates) + materials
- Risk increases with time (longer = more cost to buyer)
- Often includes a "not-to-exceed" ceiling to cap risk
- Best when: Uncertain scope, need immediate help, staff augmentation
- **Example**: $150/hour for developers + cost of software licenses, max $100k

---

##  Contract Cost Calculations

### Contract Performance Scenarios (FPIF)

<ConceptGrid>
  <ConceptCard title="Scenario 1: Efficiency Gain" variant="success">
    <strong>Actual Cost:</strong> $90,000 (Target was $100k)<br/>
    <strong>Savings:</strong> $10,000<br/>
    <strong>Seller Bonus:</strong> $10,000 &times; 20% = $2,000<br/>
    <strong>Final Price:</strong> $90,000 + $10,000 (fee) + $2,000 (bonus) = <strong>$102,000</strong>
  </ConceptCard>
  <ConceptCard title="Scenario 2: Cost Overrun" variant="warning">
    <strong>Actual Cost:</strong> $110,000 (Target was $100k)<br/>
    <strong>Overrun:</strong> $10,000<br/>
    <strong>Seller Penalty:</strong> $10,000 &times; 20% = $2,000<br/>
    <strong>Final Price:</strong> $110,000 + $10,000 (fee) - $2,000 (penalty) = <strong>$118,000</strong>
  </ConceptCard>
  <ConceptCard title="Scenario 3: Ceiling Hit" variant="danger">
    <strong>Actual Cost:</strong> $115,000 (Total logic exceeds ceiling)<br/>
    <strong>Ceiling:</strong> $120,000<br/>
    <strong>Final Price:</strong> <strong>$120,000</strong><br/>
    <em>Seller absorbs all remaining costs beyond this point.</em>
  </ConceptCard>
</ConceptGrid>

### Point of Total Assumption (PTA)

<ConceptCard title="PTA Calculation & Meaning" variant="secondary">
  The <strong>Point of Total Assumption</strong> is the cost at which the seller assumes all remaining cost risk in an FPIF contract.<br/><br/>
  <strong>Formula:</strong> <code>PTA = Target Cost + [(Ceiling Price - Target Price) / Buyer Share Ratio]</code><br/><br/>
  <strong>Example:</strong> $100,000 + [($120,000 - $110,000) / 0.80] = <strong>$112,500</strong><br/><br/>
  <strong>Interpretation:</strong> If actual costs exceed $112,500, the seller absorbs 100% of additional costs, as the ceiling has been effectively reached.
</ConceptCard>

---

##  Resource & Procurement Scenarios (Exam Practice)

### Scenario 1: Unclear Roles
**Situation**: Team members are confused about who is responsible for a deliverable.
**Answer**: Create or refer to the **RACI chart** to clarify responsibilities.

### Scenario 2: Equipment Delay
**Situation**: Project is delayed waiting for specialized equipment.
**Answer**: Root cause is poor **Physical Resource Planning** (lead time estimation). For future projects, use longer buffers and earlier procurement.

### Scenario 3: Over-Allocated Resource
**Situation**: A key developer is scheduled for 60 hours/week.
**Answer**: Use **Resource Leveling** (accept delay) or **Resource Smoothing** (if float available) to resolve.

### Scenario 4: Vendor Selection
**Situation**: Need a vendor for highly specialized R&D work with uncertain scope.
**Answer**: Use **Cost-Reimbursable** contract (scope uncertainty shifts risk to buyer).

### Scenario 5: Cost Risk Transfer
**Situation**: Want to shift cost risk to vendor for well-defined construction work.
**Answer**: Use **Fixed-Price (FFP)** contract (clear scope puts risk on seller).

### Scenario 6: Bidder Conference Question
**Situation**: After bidder conference, one vendor sends you a private email with a question.
**Answer**: **Answer the question and share it with all bidders** (fairness rule).

---

##  Key Formulas & Quick Reference

### FPIF Formulas

| Formula | Purpose |
|:--------|:--------|
| **Final Fee = Target Fee ± (Variance × Seller Share)** | Calculate fee adjustment |
| **Total Price = Actual Cost + Final Fee** | Calculate buyer payment |
| **PTA = TC + [(CP - TP) / Buyer Share]** | Point of total assumption |

### Quick Decision Guide

| Situation | Solution |
|:----------|:---------|
| Unclear roles | RACI chart |
| Resource overallocated, date flexible | Resource Leveling |
| Resource overallocated, date fixed | Resource Smoothing |
| Clear scope, minimize buyer risk | Fixed Price (FFP) |
| Unclear scope, R&D | Cost Reimbursable |
| Staff augmentation, uncertain duration | T&M with ceiling |
| Strategic capability | Make (internal) |
| One-time need, specialized | Buy (external) |


## Quick Review

<FlashcardCarousel :cards="[
  { front: 'What is a RACI Chart?', back: 'A matrix showing who is Responsible, Accountable, Consulted, and Informed for project work.' },
  { front: 'R in RACI vs. A in RACI?', back: 'Responsible = who does the work. Accountable = the single owner who approves the work.' },
  { front: 'What is a Bidder Conference?', back: 'A meeting with all potential sellers to ensure common understanding of the procurement.' },
  { front: 'FFP vs. Cost-Reimbursable Contracts?', back: 'Fixed Price = Seller has risk (clear scope). Cost-Plus = Buyer has risk (uncertain scope).' },
  { front: 'What is Make-or-Buy Analysis?', back: 'The process of deciding whether to build a deliverable internally or buy it from an external source.' },
  { front: 'What is a T&M contract?', back: 'Time and Materials - hybrid contract paying hourly rates plus materials; risk shared between buyer and seller.' },
  { front: 'What is the Point of Total Assumption (PTA)?', back: 'The cost point in FPIF contracts where the seller assumes 100% of remaining cost risk.' },
  { front: 'When should you use Cost-Reimbursable contracts?', back: 'When scope is uncertain or R&D work - the buyer bears more cost risk but gets flexibility.' },
  { front: 'What is a Resource Calendar?', back: 'A calendar showing when resources are available, including holidays, vacations, and allocation percentages.' },
  { front: 'What is a key challenge with virtual teams?', back: 'Communication barriers, time zone differences, cultural differences, and difficulty building trust.' }
]" />

::: tip  Exam Insight
If a project is delayed because of "waiting for equipment," the root cause is poor **Physical Resource Planning** (availability/lead time). If it's delayed because of "unclear roles," the fix is a **RAM/RACI**. If the question is about shifting cost risk to a vendor, a **Fixed-Price** contract generally puts more risk on the seller (assuming scope is stable).
:::



