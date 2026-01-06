<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 2.1b Portfolio Management

**ECO Task**: Demonstrate an understanding of how projects fit within programs and portfolios

While Project Management is about "Doing things right," **Portfolio Management** is about **"Doing the right things."** It is the centralized management of projects to achieve strategic objectives.

---

##  What a Portfolio Actually Includes
A portfolio can include:
- **Projects** (temporary work with defined outcomes)
- **Programs** (coordinated projects for benefits and synergy)
- **Operational work** (ongoing “run the business” investments)

Portfolio management focuses on **investment decisions**: start, stop, pause, accelerate, re-scope, or re-fund.

##  The Hierarchy of Work
Understanding the distinction is vital for the exam.

<ConceptGrid>
  <ConceptCard title="Portfolio" subtitle="The Strategy">
    <ul>
      <li><strong>Focus</strong>: Strategic Value</li>
      <li><strong>Scope</strong>: The entire enterprise</li>
      <li><strong>Success</strong>: Aggregate investment performance</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Program" subtitle="The Synergies">
    <ul>
      <li><strong>Focus</strong>: Related Benefits</li>
      <li><strong>Scope</strong>: A group of projects</li>
      <li><strong>Success</strong>: Benefits Realization</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="Project" subtitle="The Deliverable">
    <ul>
      <li><strong>Focus</strong>: Specific Output</li>
      <li><strong>Scope</strong>: Defined Scope Statement</li>
      <li><strong>Success</strong>: Time, Cost, Quality</li>
    </ul>
  </ConceptCard>
</ConceptGrid>

---

##  Portfolio Governance (How Decisions Get Made)
Most organizations run a repeatable portfolio cycle:

1. **Intake**: Ideas enter via a request, business case, or strategic initiative.
2. **Evaluate**: Compare options using financial + non-financial criteria.
3. **Prioritize**: Rank work against strategy, capacity, and risk appetite.
4. **Authorize**: Approve funding and formally start (charter/authorization).
5. **Monitor**: Review performance and benefits; manage interdependencies.
6. **Rebalance**: Reallocate budget/people when strategy or constraints change.
7. **Retire**: Stop low-value work and close projects cleanly.

::: tip  Exam Clue
If the question mentions “re-prioritizing the portfolio” or “reallocating resources across projects,” you are in **portfolio** territory, not project-level change control.
:::

---

##  Portfolio Balancing
A healthy portfolio is a balanced mix of investments.

<ConceptGrid>
  <ConceptCard title="Transform">
    High-risk, high-reward "Moonshots" that create new markets.
  </ConceptCard>
  <ConceptCard title="Grow">
    Medium-risk enhancements to expand existing products.
  </ConceptCard>
  <ConceptCard title="Run">
    Low-risk operational maintenance (Keep the lights on).
  </ConceptCard>
</ConceptGrid>

---

##  Quick Review
<FlashcardCarousel :cards="[
  { 
    front: 'What is the primary focus of Portfolio Management?', 
    back: 'Investment decisions: prioritizing and balancing projects to achieve strategic objectives.' 
  },
  { 
    front: 'What are WIP Limits in Portfolio Management?', 
    back: 'Reducing the number of active projects to prevent spreading resources too thin (\'resource peanut-butter\').' 
  },
  { 
    front: 'What is a \'transform\' investment in a balanced portfolio?', 
    back: 'A high-risk, high-reward initiative or \'moonshot\' aimed at creating new markets.' 
  },
  { 
    front: 'When should a Portfolio Manager recommend stopping a project?', 
    back: 'When it no longer aligns with organizational strategy or the expected value has evaporated.' 
  },
  { 
    front: 'True or False: Programs are broader in scope than Portfolios.', 
    back: 'False. Portfolios are the broadest, containing multiple programs and projects.' 
  }
]" />

---

::: tip Exam Insight
If your project is "Green" (on time/budget) but the Portfolio Manager asks to cancel it, do not argue. The strategy may have shifted, making your project irrelevant. Your role is to execute an orderly administrative closure.
:::
