<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 2.1b Strategy Selection & Financials

<ConceptGrid>
  <ConceptCard title="SWOT Analysis">
    <strong>Strengths & Weaknesses</strong> (Internal) vs. <strong>Opportunities & Threats</strong> (External).
  </ConceptCard>
  <ConceptCard title="Balanced Scorecard">
    Measures performance across four perspectives: Financial, Customer, Internal Process, and Learning/Growth.
  </ConceptCard>
</ConceptGrid>

### SWOT Deep Dive: When to Use What

| Finding | Strategic Response | Project Example |
| :-- | :-- | :-- |
| **Strength + Opportunity** | **Aggressive growth** | Launching a new product line where you have expertise. |
| **Weakness + Opportunity** | **Develop capability** | Training programs to build missing internal skills. |

---

## Strategy Selection (Financial & Scoring)

Not all projects are created equal. They fall into three main buckets:

| Category | Description | Driver |
| :-------------- | :---------------------------------- | :---------------- |
| **Strategic**   | "Change the business." | Growth / Revenue |
| **Compliance**  | "Stay out of jail." | Legal / Mandatory |

::: danger The Compliance Trap
**Compliance projects are non-negotiable.** Even if they have a negative NPV, they must be done to keep the license to operate.
:::

---

## Benefit Measurement Methods

| Method | What it means | Common exam clue |
| :-- | :-- | :-- |
| **NPV** | Future money in today's dollars | Mentions "discount rate" or "present value" |
| **ROI** | Return relative to cost | Mentions "benefits vs costs" |
| **Payback** | Time to recover investment | Mentions "time to recoup" |
| **BCR** | Benefits divided by costs | Mentions "ratio" or "BCR" |

---

## Financial Formulas (Know These Cold!)

### 1. Net Present Value (NPV)
**Decision Rule**: 
- **NPV > 0** → ACCEPT
- **NPV < 0** → REJECT

::: info Worked Example: NPV
Project costs $100k. Expected returns equate to a PV of $99k. 
**NPV = $99k - $100k = -$1k (REJECT)**.
:::

### 2. Return on Investment (ROI)
**Decision Rule**: Higher ROI is better.

### 3. Benefit-Cost Ratio (BCR)
**Decision Rule**:
- **BCR > 1** → ACCEPT (Benefits > Costs)
- **BCR < 1** → REJECT

### 4. Payback Period
**Decision Rule**: Shorter is better.

### 5. Internal Rate of Return (IRR)
**Decision Rule**: Higher IRR is generally better.

---

## Critical Financial Concepts (The "Trap" Concepts)

| Concept | Definition | The Exam Rule |
| :-- | :-- | :-- |
| **Sunk Cost** | Money already spent. | **Ignore it.** Never make a decision based on past spend. |
| **Opportunity Cost** | Value of the next best alternative NOT chosen. | If you choose A ($100k) over B ($80k), the cost is **$80k**. |
| **Law of Dim's Returns** | Point where adding input yields less output. | Adding more people to a late project often makes it later. |

::: tip Scenario: The Sunk Cost Fallacy
Your organization spent $5M (Sunk Cost). It will cost $2M more to finish a project that is now obsolete.
**PM Action**: Recommend termination. Do not spend $2M more on zero value.
:::

---

## Quick Review
<FlashcardCarousel :cards="[
  { front: `What is Net Present Value (NPV)?`, back: `The total value of a project in today\\'s dollars. Higher positive NPV is always preferred.` },
  { front: `What is Internal Rate of Return (IRR)?`, back: `The interest rate at which the project breaks even. Higher IRR is better.` },
  { front: `What is \\'Opportunity Cost\\'?`, back: `The value of the project you *didn\\'t* choose when you selected another one.` },
  { front: `What is a Benefit-Cost Ratio (BCR)?`, back: `Ratio of benefits to costs. A BCR > 1 means the project provides more value than it costs.` },
  { front: `What is Sunk Cost?`, back: `Money already spent that cannot be recovered. It should NOT be considered when deciding whether to continue a project.` },
  { front: `What does SWOT stand for?`, back: `Strengths and Weaknesses (Internal) vs Opportunities and Threats (External).` },
  { front: `What does a Balanced Scorecard measure?`, back: `Performance across four perspectives: Financial, Customer, Internal Process, and Learning/Growth.` },
  { front: `Are compliance projects optional if they have negative NPV?`, back: `No. Compliance projects are non-negotiable even with negative NPV - they keep the license to operate.` },
  { front: `What is the NPV decision rule?`, back: `NPV > 0 means ACCEPT; NPV < 0 means REJECT.` },
  { front: `What is the Law of Diminishing Returns?`, back: `The point where adding more input yields less output - e.g., adding more people to a late project often makes it later.` }
]" />

---

::: tip Exam Insight
If a project no longer aligns with a shifting strategy, the PM's duty is to **Recommend Termination**. Continuing to spend budget on a project that the company no longer needs is a failure of stewardship.
:::
