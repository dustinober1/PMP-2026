<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 3.1a Team Formation & Resource Acquisition

**ECO Task**: Lead the project team

A high-performing team is more than just a group of talented individuals; it is a balanced ecosystem of skills, personalities, and shared goals. The project manager's task is to assemble and acquire the right mix of capabilities for the mission.

---

##  Skills Matrix & Composition
Before the work begins, the Project Manager must ensure the team has the right mix of capabilities.

<ConceptGrid>
  <ConceptCard title="Technical Skills">
    Create a **Skills Matrix** to identify gaps early and plan for targeted training or external acquisition.
  </ConceptCard>
  <ConceptCard title="Diversity">
    Ensure a mix of perspectives to avoid "Groupthink" and increase creative problem-solving capability.
  </ConceptCard>
  <ConceptCard title="Availability">
    Negotiate with functional managers for dedicated time vs. shared resource allocation.
  </ConceptCard>
  <ConceptCard title="Experience">
    Balance senior mentors with junior learners to ensure project sustainability and knowledge growth.
  </ConceptCard>
</ConceptGrid>

---

##  The RACI Matrix: Clarity of Ownership
The gold standard for defining roles and responsibilities. RACI prevents the #1 cause of team dysfunction: confusion about who decides and who does.

*   **R (Responsible)**: The "doer." The person who performs the task.
*   **A (Accountable)**: The "owner." The one person who must sign off. **(Only one "A" per task!)**
*   **C (Consulted)**: Experts who provide input before the task is finalized.
*   **I (Informed)**: Stakeholders kept up-to-date on progress but don't perform work.

---

##  RACI Anti-Patterns & Fixes

<ConceptGrid>
  <ConceptCard title="Multiple Accountables">
    **Problem**: No clear ownership; "if everyone is responsible, no one is." 
    **Solution**: Reduce to exactly ONE Accountable person.
  </ConceptCard>
  <ConceptCard title="No Accountable">
    **Problem**: Orphan task that no one owns; will likely fail or be forgotten.
    **Solution**: Assign a single Accountable owner immediately.
  </ConceptCard>
  <ConceptCard title="Too Many Consulted">
    **Problem**: Decision paralysis and "too many cooks in the kitchen."
    **Solution**: Reduce to only essential subject matter experts.
  </ConceptCard>
</ConceptGrid>

---

##  Team Acquisition Options

<ConceptGrid>
  <ConceptCard title="Pre-assigned">
    Named resources already committed in the charter. Pros: Guaranteed. Cons: May not be the best fit.
  </ConceptCard>
  <ConceptCard title="Negotiate">
    Work with functional managers. Pros: Builds relationships. Cons: Time-consuming.
  </ConceptCard>
  <ConceptCard title="Acquire Externally">
    Contractors or vendors. Pros: Fast, specialized. Cons: Expensive, needs onboarding.
  </ConceptCard>
</ConceptGrid>

---

## Quick Review: Formation & Resource

<FlashcardCarousel :cards="[
  { front: `Resource Leveling`, back: `Delays tasks to resolve overallocation. Can extend the project schedule.` },
  { front: `Resource Smoothing`, back: `Adjusts activities within their float. Does NOT extend the schedule.` },
  { front: `Accountable (A) Rule`, back: `There must be exactly ONE Accountable person assigned per RACI task.` },
  { front: `Skills Gap Analysis`, back: `Assess first → Identify gaps → Choose options (Train/Hire) → Execute.` },
  { front: `What does RACI stand for?`, back: `Responsible (doer), Accountable (owner), Consulted (input), Informed (updated).` },
  { front: `What is the Multiple Accountables anti-pattern?`, back: `When more than one person is Accountable - leads to no clear ownership. Fix by reducing to ONE.` },
  { front: `What is a Skills Matrix used for?`, back: `To identify capability gaps early and plan for targeted training or external acquisition.` },
  { front: `What are the three Team Acquisition Options?`, back: `Pre-assigned (guaranteed), Negotiate (functional managers), and Acquire Externally (contractors).` },
  { front: `Why is Diversity important in team formation?`, back: `To avoid Groupthink and increase creative problem-solving capability.` },
  { front: `What should a PM do if the team lacks authority?`, back: `Negotiate and influence first - do not escalate immediately.` }
]" />

::: tip  Exam Insight
If the team is confused about who does what, the first step is to create or review the <strong>RACI Matrix</strong>. If the team is missing a critical skill, the first step is to perform a <strong>Gap Analysis</strong>. If the PM lacks authority, the answer is <strong>negotiate and influence</strong>, not escalate.
:::

