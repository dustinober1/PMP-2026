<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 2.1d Benefits Realization & Value Creation

**ECO Task**: Evaluate and deliver project benefits and value

Delivering a project on time and under budget is a failure if it doesn't create value. This section explores how to ensure project **Outputs** lead to organizational **Benefits**.

---

<FlashcardCarousel :cards="[
  { front: `Output (Project Deliverable)`, back: `What you build (e.g., automated software deployed).` },
  { front: `Outcome (Behavior Change)`, back: `How users respond (e.g., employees stop using spreadsheets).` },
  { front: `Benefit (Strategic Value)`, back: `Measurable result (e.g., $250k annual administrative savings).` }
]" />

---

##  The Benefits Realization Plan (What “Good” Looks Like)
On the exam, benefits are not “hopeful outcomes.” They are **planned, measured, and owned**.

A strong benefits realization plan typically defines:
- **Benefit statement** (what changes, for whom, and why it matters)
- **Metric/KPI** and **baseline** (where we start)
- **Target** and **timeframe** (what “success” means and when)
- **Benefits owner** (accountable business role)
- **Measurement method and frequency** (how often and how)
- **Assumptions and risks** (what must be true)
- **Sustainment actions** (training, support model, process changes)

### Example KPI Definition
| KPI | Baseline | Target | Owner | Measure |
| :-- | :-- | :-- | :-- | :-- |
| Expense approval cycle time | 10 days | 6 days within 90 days of rollout | Finance Ops Lead | System timestamps |

---

##  The Benefits Lifecycle
Benefits realization isn't a single event; it's a process that continues long after the project team disbands.

1. **Identification**: Defining expected benefits in the Business Case.
2. **Planning**: Creating a **Benefits Realization Plan** with metrics and owners.
3. **Execution**: Building features that specifically enable the promised benefits.
4. **Transition**: Handing over the system to a "Business Owner" who will realize the long-term value.
5. **Sustainment**: Ensuring benefits don't erode over time (e.g., through ongoing training).

::: info  Who Owns Benefits?
- **Project Manager**: Owns the delivery of the **Output**.
- **Business Owner / Sponsor**: Owns the realization of the **Benefit**.
- *Example*: The PM builds the gym (Output), but the Sponsor is responsible for the users getting fit (Benefit).
:::

---

##  Leading vs. Lagging Indicators (Exam Favorite)
- **Leading indicators** show early movement (training completion, adoption rate, usage).
- **Lagging indicators** confirm final value (cost savings, revenue, NPS lift).

If benefits are not appearing, PMI expects you to look first at **adoption and process change** (often a leading indicator problem), not just “more features.”

---

##  Measuring Success
Value can be financial or non-financial.

### Financial Metrics
- **ROI (Return on Investment)**: (Benefits - Costs) / Costs.
- **NPV (Net Present Value)**: The value of future cash flows in today's dollars.
- **Payback Period**: How long it takes for the project to "pay for itself."

### Non-Financial Metrics
- **Customer Satisfaction (NPS)**.
- **Employee Engagement**.
- **Risk Mitigation** (e.g., preventing a security breach).
- **Sustainability (ESG)**: Meeting environmental or social goals.

---

##  AI and Value Creation
In the 2026 exam, AI is often a tool for value creation.
- **Output**: An AI-powered anomaly detection model.
- **Outcome**: Fraudulent expenses are flagged automatically.
- **Benefit**: 15% reduction in financial leakage and improved audit compliance.

---

---

##  Quick Review
<FlashcardCarousel :cards="[
  { front: `What is a \\'Leading Indicator\\' for benefits?`, back: `Early signals such as training completion or adoption rate that suggest benefits will eventually be realized.` },
  { front: `What is a \\'Lagging Indicator\\' for benefits?`, back: `Final confirmation of value, such as revenue increase or cost savings.` },
  { front: `Who owns the realization of the benefit after project transition?`, back: `The Business Owner or Sponsor (The PM owns the Output).` },
  { front: `What should a PM do if benefits don\\'t appear after project closure?`, back: `Recommend a Post-Implementation Review to identify adoption barriers.` },
  { front: `Give an example of a non-financial benefit.`, back: `Customer Satisfaction (NPS), Employee Engagement, or Risk Mitigation.` },
  { front: `What is the difference between an Output and an Outcome?`, back: `Output is what you build (deliverable); Outcome is how users respond (behavior change).` },
  { front: `What are the key elements of a Benefits Realization Plan?`, back: `Benefit statement, KPI/baseline, target/timeframe, benefits owner, measurement method, assumptions, and sustainment actions.` },
  { front: `What is the relationship between ROI and NPV?`, back: `ROI measures return relative to cost ((Benefits-Costs)/Costs); NPV measures future cash flows in today\\'s dollars.` },
  { front: `What is the Benefits Lifecycle?`, back: `Identification, Planning, Execution, Transition, and Sustainment.` },
  { front: `How does AI contribute to value creation in projects?`, back: `AI can automate detection (Output), change user behavior (Outcome), and deliver measurable improvements like cost reduction (Benefit).` }
]" />

