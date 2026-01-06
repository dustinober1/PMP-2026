<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 4.1a Stakeholder Mapping

**ECO Task**: Engage stakeholders

Identifying who your stakeholders are is the first step, but **mapping** them tells you where to spend your limited energy and political capital. Effective leaders use these models to prioritize their attention.

---

##  The Power/Interest Grid
This is the most critical tool for the PMP exam. It helps you categorize stakeholders and determine the correct "strategy of service."

<ConceptGrid>
  <ConceptCard title="Manage Closely">
    **High Power / High Interest**
    Your primary partners. Require high-touch, frequent, and proactive engagement.
  </ConceptCard>
  <ConceptCard title="Keep Satisfied">
    **High Power / Low Interest**
    Keep them happy to prevent them from becoming a blocker or using their power negatively.
  </ConceptCard>
  <ConceptCard title="Keep Informed">
    **Low Power / High Interest**
    Harness their enthusiasm; they are your "Advocates." Keep them in the loop.
  </ConceptCard>
  <ConceptCard title="Monitor">
    **Low Power / Low Interest**
    Requires the least effort. Watch for shifts in power or interest over time.
  </ConceptCard>
</ConceptGrid>

---

##  The Salience Model
Analyses three overlapping attributes: **Power**, **Legitimacy**, and **Urgency**.

<ConceptGrid>
  <ConceptCard title="Definitive">
    **Power + Legitimacy + Urgency**
    Top priority. These stakeholders require immediate, high-attention response.
  </ConceptCard>
  <ConceptCard title="Dangerous">
    **Power + Urgency**
    High-risk blockers who may act forcefully. Engage carefully using objective criteria.
  </ConceptCard>
  <ConceptCard title="Dependent">
    **Legitimacy + Urgency**
    Stakeholders who need an advocate; leverage the sponsor to protect their interests.
  </ConceptCard>
  <ConceptCard title="Dominant">
    **Power + Legitimacy**
    Core governance stakeholders. Strong formal authority and right to influence.
  </ConceptCard>
</ConceptGrid>

---

##  The Stakeholder Cube
The Cube adds a critical third dimension to the Power/Interest Grid: **Attitude**.

<ConceptGrid>
  <ConceptCard title="Supportive (+)">
    Actively wants the project to succeed. Strategy: **Empower** as advocates.
  </ConceptCard>
  <ConceptCard title="Neutral (0)">
    Waiting to see. Strategy: **Convert** by demonstrating value and building rapport.
  </ConceptCard>
  <ConceptCard title="Resistant (-)">
    Opposing the project. Strategy: **Priority Risk**. Direct engagement and root cause discovery.
  </ConceptCard>
</ConceptGrid>

---

## Quick Review: Stakeholder Mapping

<FlashcardCarousel :cards="[
  { front: `Power (Fast Definition)`, back: `The ability to influence decisions, budget, resources, or final acceptance of deliverables.` },
  { front: `Salience: Dormant`, back: `A stakeholder with Power only. A 'sleeping giant' who can become decisive if triggered.` },
  { front: `Salience: Demanding`, back: `A stakeholder with Urgency only. High noise but low influence; manage their expectations.` },
  { front: `Trigger: Re-Map`, back: `Re-map stakeholders during phase gates, leadership changes, or major scope shifts.` },
  { front: `What are the four Power/Interest Grid strategies?`, back: `Manage Closely (high/high), Keep Satisfied (high/low), Keep Informed (low/high), Monitor (low/low).` },
  { front: `What is a Definitive stakeholder?`, back: `Has Power, Legitimacy, AND Urgency - requires immediate, high-attention response.` },
  { front: `What is a Dangerous stakeholder?`, back: `Has Power and Urgency but no Legitimacy - high-risk blocker who may act forcefully.` },
  { front: `What does the Stakeholder Cube add?`, back: `A third dimension: Attitude (Supportive, Neutral, Resistant).` },
  { front: `How to handle a Resistant stakeholder?`, back: `Treat as Priority Risk - direct engagement and root cause discovery.` },
  { front: `What if a high-power stakeholder is unhappy?`, back: `You failed to Keep them Satisfied - analyze their needs and update the Stakeholder Register.` }
]" />

::: tip  Exam Insight
If a high-power stakeholder is unhappy, you likely failed to <strong>Keep them Satisfied</strong>. The first step is to <strong>analyze their needs</strong> and update the <strong>Stakeholder Register</strong>.
:::

