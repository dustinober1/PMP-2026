<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 4.1b Classification & The Register

**ECO Task**: Engage stakeholders

Once identified and mapped, stakeholders must be formally documented. The **Stakeholder Register** is the central repository for all stakeholder intelligence—their needs, their influence, and your strategy for managing them.

---

##  The Stakeholder Register
This document is created during Initiation and must be updated **continuously** as the project evolves.

<ConceptGrid>
  <ConceptCard title="Identification">
    Name, Role, organization, contact details, and internal/external status.
  </ConceptCard>
  <ConceptCard title="Assessment">
    Primary requirements, expectations, potential influence, and known issues.
  </ConceptCard>
  <ConceptCard title="Classification">
    Power/Interest levels, Salience score, and Direction of Influence.
  </ConceptCard>
</ConceptGrid>

---

##  Direction of Influence
Knowing "where" a stakeholder sits in relation to you dictates the style of communication you use.

<ConceptGrid>
  <ConceptCard title="Upward">
    **Execs & Sponsors**
    Focus on strategic ROI, high-level risks, and decisions. Frame messages as options with recommendations.
  </ConceptCard>
  <ConceptCard title="Downward">
    **Target Team**
    Focus on servant leadership, technical blockers, and psychological safety. Provide context and recognition.
  </ConceptCard>
  <ConceptCard title="Outward">
    **Vendors & Customers**
    Focus on contractual obligations, SoW terms, and formal deliverables. Stick to official documentation.
  </ConceptCard>
  <ConceptCard title="Sideward">
    **Peers & Peers Managers**
    Focus on resource negotiation, dependencies, and mutual support. Maintain reciprocal relationships.
  </ConceptCard>
</ConceptGrid>

---

##  Engagement Assessment Matrix
This tool identifies the "Engagement Gap"—where a stakeholder is versus where the project needs them to be for success.

<ConceptGrid>
  <ConceptCard title="Unaware">
    They don't know the project exists.
  </ConceptCard>
  <ConceptCard title="Resistant">
    Aware but opposed to the change (fear of loss/mistrust).
  </ConceptCard>
  <ConceptCard title="Neutral">
    Aware but neither supportive nor opposed.
  </ConceptCard>
  <ConceptCard title="Supportive">
    Aware and supportive of the project's goals.
  </ConceptCard>
  <ConceptCard title="Leading">
    Actively working to ensure the project delivers value.
  </ConceptCard>
</ConceptGrid>

---

## Quick Review: Classification & Register

<FlashcardCarousel :cards="[
  { front: `Engagement Gap`, back: `The difference between a stakeholder\\'s \\'Current\\' state and the \\'Desired\\' state required for success.` },
  { front: `Register Sensitivity`, back: `The Stakeholder Register contains private political analysis and must be kept CONFIDENTIAL.` },
  { front: `Outward Influence`, back: `Refers to stakeholders outside the project team, such as vendors, regulators, and end-users.` },
  { front: `Trigger: New Person`, back: `When a new stakeholder is found, the VERY FIRST step is to update the Stakeholder Register.` },
  { front: `What are the five engagement levels?`, back: `Unaware, Resistant, Neutral, Supportive, and Leading.` },
  { front: `What are the four directions of influence?`, back: `Upward (execs), Downward (team), Outward (vendors/customers), and Sideward (peers).` },
  { front: `What is Upward influence communication style?`, back: `Focus on strategic ROI, high-level risks, and frame messages as options with recommendations.` },
  { front: `What is Downward influence communication style?`, back: `Focus on servant leadership, technical blockers, psychological safety, and recognition.` },
  { front: `What does a Leading stakeholder do?`, back: `Actively works to ensure the project delivers value - they are your champions.` },
  { front: `What are the three Register components?`, back: `Identification (name, role), Assessment (requirements, influence), and Classification (power/interest).` }
]" />

::: tip  Exam Insight
If a stakeholder's influence shifts or a new one is discovered, the <strong>Stakeholder Register</strong> is the VERY FIRST document you update. It is a living ledger, not a static report.
:::


