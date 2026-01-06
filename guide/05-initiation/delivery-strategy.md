<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 5.4 Delivery Strategy

**ECO Task**: Determine appropriate project methodology/methods and practices

One of the PM's first "process" decisions is selecting the high-level delivery strategy. In 2026, this is not a religious choice between Scrum or Predictive—it is a logical choice based on **Risk** and **Frequency of Value**.

---

##  The Selection Matrix

Use these diagnostic markers to choose the right path for your project.

<ConceptGrid>
  <ConceptCard title="Predictive">
    Best for **Stable** environments with known solutions.
    - High cost of change
    - Single final release
    - Detailed upfront planning
    - Clear, stable requirements
  </ConceptCard>
  <ConceptCard title="Adaptive (Agile)">
    Best for **Volatile** environments with emerging requirements.
    - Low cost of change
    - Frequent incremental releases
    - Continuous planning (Sprints)
    - Evolving requirements
  </ConceptCard>
  <ConceptCard title="Hybrid">
    Best for **Complex** projects with mixed characteristics.
    - Stable foundation / Agile features
    - Predictive dates / Agile path
    - Gated releases
    - Regulatory + innovation mix
  </ConceptCard>
</ConceptGrid>

---

##  Decision Frameworks

### Stacey Matrix

| | **Requirements CLEAR** | **Requirements UNCLEAR** |
| --- | --- | --- |
| **Technology KNOWN** | **Simple** → Predictive | **Complicated** → Hybrid |
| **Technology UNKNOWN** | **Complicated** → Hybrid | **Complex** → Agile |

### Cynefin Framework

<ConceptGrid>
  <ConceptCard title="Clear (Obvious)">
    **Sense → Categorize → Respond**. Best practices apply. Predictive works well.
  </ConceptCard>
  <ConceptCard title="Complicated">
    **Sense → Analyze → Respond**. Expert analysis needed. Hybrid approach.
  </ConceptCard>
  <ConceptCard title="Complex">
    **Probe → Sense → Respond**. Experimentation required. Agile approach.
  </ConceptCard>
  <ConceptCard title="Chaotic">
    **Act → Sense → Respond**. Crisis mode. Act first, then stabilize.
  </ConceptCard>
</ConceptGrid>

---

##  What the Strategy Choice Changes

| Aspect | Predictive | Agile | Hybrid |
| --- | --- | --- | --- |
| **Planning** | Upfront, detailed | Rolling wave, iterative | Phased with iteration |
| **Scope Definition** | WBS, work packages | Product backlog, user stories | Mixed artifacts |
| **Change Handling** | Formal change control | Reprioritization in backlogs | Rules + flexibility |
| **Value Delivery** | Single release | Frequent increments | Staged releases |
| **Progress Measure** | Percentage complete | Working increments | Milestone + velocity |

::: tip  Exam Pattern
If stakeholders need **frequent feedback** and requirements are evolving, an adaptive approach is usually best. If the environment is **safety-critical** or **highly regulated**, predictive guardrails increase control and auditability.
:::

---

##  Tailoring Factors

| Factor | Predictive Indicators | Agile Indicators |
| --- | --- | --- |
| **Complexity** | Low, well-understood | High, many unknowns |
| **Risk** | Failure is catastrophic | Can fail fast & learn |
| **Frequency** | Single release acceptable | Frequent value needed |
| **Resources** | Shared functional staff | Dedicated cross-functional team |
| **Requirements** | Stable, well-defined | Volatile, emerging |

---

##  Common Hybrid Patterns

<ConceptGrid>
  <ConceptCard title="Water-Scrum-Fall">
    Predictive initiation and deployment with Agile execution sprints in the middle.
  </ConceptCard>
  <ConceptCard title="Agile Core / Predictive Milestones">
    Agile sprints deliver features, while fixed milestones provide governance and reporting.
  </ConceptCard>
  <ConceptCard title="Component-Based">
    Infrastructure (Predictive), Backend (Hybrid), and UI (Agile) managed differently.
  </ConceptCard>
</ConceptGrid>

---

## Quick Review

<FlashcardGrid>
  <Flashcard front="Predictive Approach" back="Plan-driven; best when requirements are stable and cost of change is high." />
  <Flashcard front="Agile Approach" back="Change-driven; best for high uncertainty and frequent value delivery." />
  <Flashcard front="Hybrid Approach" back="A combination of predictive and agile; common in enterprise environments." />
  <Flashcard front="Stacey Matrix" back="A tool for choosing an approach based on requirements and technical certainty." />
  <Flashcard front="Cynefin Framework" back="A complexity model used to understand if a situation is Clear, Complicated, Complex, or Chaotic." />
  <Flashcard front="Iterative Lifecycle" back="Planning and scope defined early, but time and cost estimates are refilled as the team's understanding increases." />
  <Flashcard front="Incremental Lifecycle" back="A deliverable is produced through a series of iterations that successively add functionality." />
  <Flashcard front="Rolling Wave Planning" back="High-level planning for the long term; detailed planning for the near term (common in Hybrid/Predictive)." />
  <Flashcard front="Product Vision" back="The 'North Star' for an agile project, defining the target customer and key benefit." />
  <Flashcard front="Empiricism" back="The agile principle of making decisions based on observed results (Probe-Sense-Respond)." />
</FlashcardGrid>

---

::: tip  The 2026 Standard
Most modern enterprise projects are **Hybrid**. They use Predictive milestones for the "Business Case" and "Go-Live" while allowing teams to use Agile "Sprints" for execution and refinement.
:::

---

::: tip  Exam Insight
If a project has high uncertainty but a non-negotiable legal deadline, the best strategy is <strong>Hybrid</strong>. Use Predictive guardrails for the date and Agile cycles for the content.
:::
