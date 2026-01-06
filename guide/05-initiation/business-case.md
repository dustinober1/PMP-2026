<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
import EVMCalculator from '../../.vitepress/theme/components/EVMCalculator.vue'
</script>

# 5.1 Business Case and Strategic Selection

**ECO Task**: Evaluate and deliver project benefits and value

Before a project is authorized, it must be justified. The organization needs to know: *Is this investment better than all the other options?* In the 2026 era, this choice is driven by **Value Realization**.

---

## The Business Case

The Business Case is a pre-project document that provides the economic feasibility study. It answers the "Why?" and serves as the ongoing reference point for whether the project should continue.

<ConceptGrid>
  <ConceptCard title="Economic Feasibility">
    Do the financial rewards outweigh the costs and risks? (NPV, IRR analysis).
  </ConceptCard>
  <ConceptCard title="Strategic Alignment">
    How does this project support the organization's 2026-2030 strategic roadmap?
  </ConceptCard>
  <ConceptCard title="Benefits Realization">
    What specific value (tangible or intangible) will be delivered to the customer?
  </ConceptCard>
  <ConceptCard title="Risk and Opportunity Balance">
    Are the potential rewards worth the risks? What happens if we don't do this project?
  </ConceptCard>
</ConceptGrid>

### Complete Business Case Structure

A comprehensive Business Case typically includes:

| Section | Content | Purpose |
| --- | --- | --- |
| **Executive Summary** | High-level problem, solution, and value proposition | Quick decision support |
| **Problem or Opportunity Statement** | Current state, pain points, market opportunity | Establishes the "Why Now?" |
| **Analysis of Options** | Multiple alternatives with pros/cons | Proves due diligence |
| **Recommended Solution** | The selected approach with justification | Clear direction |
| **Benefits Analysis** | Tangible and intangible benefits with measures | Quantifies value |
| **Cost Analysis** | Development, operational, hidden costs | True investment picture |
| **Financial Metrics** | NPV, IRR, BCR, Payback calculations | Objective comparison |
| **Risk Assessment** | Key risks with potential impact | Honest evaluation |
| **Implementation Timeline** | Major phases and gates | Sets expectations |
| **Assumptions and Dependencies** | What must be true for success | Transparency |

---

## Business Case vs Charter

These documents are connected, but they answer different questions.

<ConceptGrid>
  <ConceptCard title="Business Case">
    **Question**: Should we invest?<br>
    **Content**: Value justification, options, benefits, costs, assumptions.<br>
    **Approver**: Sponsor / Portfolio governance.
  </ConceptCard>
  <ConceptCard title="Benefits Management Plan">
    **Question**: How will benefits be measured and realized?<br>
    **Content**: Measures, owners, timeline, sustainment approach.<br>
    **Approver**: Sponsor / Benefits owner.
  </ConceptCard>
  <ConceptCard title="Project Charter">
    **Question**: Are we authorized to start?<br>
    **Content**: PM authority, high-level scope, milestones, budget ceiling.<br>
    **Approver**: Sponsor.
  </ConceptCard>
</ConceptGrid>

::: tip  Exam Pattern
If a question asks **"Should we continue?"**, the best answer often involves **revalidating the Business Case** and **escalating to the Sponsor** if the value case has changed. Never continue a project that no longer delivers value.
:::

---

## Pre-Charter: The Needs Assessment

Before a Business Case is even written, a **Needs Assessment** is often conducted to understand the *business problem* or *opportunity*.

### Gap Analysis Framework

```
Current State ────────────────────► Future State
     ↓                                    ↓
"Where are we now?"            "Where do we want to be?"
                    GAP
                     ↓
         "What must change?"
```

| Analysis Component | Questions to Answer | Example |
| --- | --- | --- |
| **Current State** | What are current capabilities, performance, pain points? | "Customer support takes 48 hours average response time" |
| **Future State** | What does success look like? What are target outcomes? | "Customer support responds within 4 hours" |
| **Gap** | What is missing? What must change? | "Need automated routing and AI-assisted responses" |
| **Root Cause** | Why does the gap exist? | "Legacy systems, manual processes, understaffing" |
| **Options** | What are the possible solutions? | "Build vs. Buy vs. Partner" |

### Feasibility Studies

Before committing resources, organizations may conduct:

<ConceptGrid>
  <ConceptCard title="Technical Feasibility">
    Can we build it? Do we have the skills, technology, and infrastructure?
  </ConceptCard>
  <ConceptCard title="Economic Feasibility">
    Should we fund it? Does the ROI justify the investment?
  </ConceptCard>
  <ConceptCard title="Operational Feasibility">
    Can we run it? Will users adopt it? Can we support it?
  </ConceptCard>
  <ConceptCard title="Schedule Feasibility">
    Can we deliver it in time? Are the deadlines realistic?
  </ConceptCard>
  <ConceptCard title="Legal and Regulatory Feasibility">
    Are we allowed to do it? What approvals or compliance exist?
  </ConceptCard>
</ConceptGrid>

---

## Critical Economic Concepts

The exam tests your ability to ignore irrelevant data (Sunk Cost) and value what you give up (Opportunity Cost).

<ConceptGrid>
  <ConceptCard title="Sunk Cost">
    **Money Already Spent**. Ignore It. Past spending is gone. Focus only on **future value**.
  </ConceptCard>
  <ConceptCard title="Opportunity Cost">
    **Value of the Path Not Taken**. Know It. If you choose Project A ($100k) over Project B ($80k), the Opportunity Cost is **$80k**.
  </ConceptCard>
  <ConceptCard title="Diminishing Returns">
    **The Plateau**. Watch For It. The point where adding more resources yields less and less value per unit.
  </ConceptCard>
  <ConceptCard title="Working Capital">
    **Cash for Operations**. Protect It. The cash needed to keep operations running.
  </ConceptCard>
</ConceptGrid>

### Sunk Cost Fallacy: The Exam Trap

**Scenario**: Your project has spent $2M but is failing. Completing it requires another $1M. A competitor just released a better product for free.

::: danger  Sunk Cost Rule
Past spending is **irrelevant** to future decisions. Only compare **future investment** vs. **future value**. If continuing costs $1M but delivers $0 competitive value, stop—regardless of what was spent before.
:::

---

## Project Selection Metrics

The PMP exam expects you to choose projects based on cold, hard data.

<ConceptGrid>
  <ConceptCard title="NPV (Net Present Value)">
    **Higher is Better**. Total value in today's dollars. If NPV > 0, project is profitable.
  </ConceptCard>
  <ConceptCard title="IRR (Internal Rate of Return)">
    **Higher is Better**. The interest rate the project "earns." Compare to hurdle rate.
  </ConceptCard>
  <ConceptCard title="BCR (Benefit-Cost Ratio)">
    **> 1.0 is Better**. For every $1 spent, how much do we get back? 1.5 = $1.50 return.
  </ConceptCard>
  <ConceptCard title="Payback Period">
    **Shorter is Better**. The time it takes to recover the initial investment.
  </ConceptCard>
</ConceptGrid>

::: warning  Exam Trap: NPV is King
If Project A has a 2-year payback and $10k NPV, but Project B has a 4-year payback and $80k NPV, **pick Project B**. NPV reflects the true scale of value delivery.
:::

---

## Formula Deep Dive

### Net Present Value (NPV)

NPV determines the present value of all future cash flows minus the initial investment.

**Formula:**
`NPV = Σ [CF_t / (1 + r)^t] - Initial Investment`

### Internal Rate of Return (IRR)

IRR is the discount rate that makes NPV = 0.

- If IRR > Hurdle Rate → Accept
- If IRR < Hurdle Rate → Reject

::: info IRR vs NPV
When comparing mutually exclusive projects, **always use NPV** as the tiebreaker. A project with lower IRR but higher NPV creates more total value.
:::

### Benefit-Cost Ratio (BCR)

`BCR = Present Value of Benefits / Present Value of Costs`

---

## Quick Review

<FlashcardCarousel :cards="[
  { 
    front: 'Sunk Cost', 
    back: 'Money already spent; ignore it in future decisions.' 
  },
  { 
    front: 'Opportunity Cost', 
    back: 'The value of the alternative choice given up.' 
  },
  { 
    front: 'NPV Rule', 
    back: 'Choose the project with the highest NPV; must be > 0.' 
  },
  { 
    front: 'BCR > 1.0', 
    back: 'Benefits exceed costs; a good investment.' 
  },
  { 
    front: 'IRR vs Hurdle Rate', 
    back: 'Accept if IRR is greater than the hurdle rate.' 
  },
  { 
    front: 'Business Case vs Project Charter', 
    back: 'Business Case justifies investment; Charter authorizes work and PM power.' 
  },
  { 
    front: 'Needs Assessment', 
    back: 'Conducted before the Business Case to understand the problem or opportunity.' 
  },
  { 
    front: 'Benefits Owner', 
    back: 'Accountable for realizing and measuring benefits after project closure.' 
  },
  { 
    front: 'Murder Board', 
    back: 'A panel of executives that rigorously challenges project proposals.' 
  },
  { 
    front: 'Payback Period', 
    back: 'Time required to recover the initial investment; shorter is better.' 
  }
]" />

---

::: tip Exam Insight
If a project no longer aligns with the strategy defined in the **Business Case**, the PM must escalate to the **Sponsor**. Projects that don't deliver value should not exist.
:::
