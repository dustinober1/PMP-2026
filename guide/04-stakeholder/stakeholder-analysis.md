<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 4.1 Stakeholder Analysis

**ECO Task**: Engage stakeholders

"You can't manage what you haven't identified." Stakeholder analysis is the process of systematically gathering and analyzing information to determine whose interests should be taken into account.

---

##  Identification Techniques
Effective stakeholder identification uses multiple techniques to ensure no one is missed.

<ConceptGrid>
  <ConceptCard title="Brainstorming">
    Facilitated sessions with the team using prompts like "Who pays?", "Who uses?", "Who approves?", and "Who blocks?".
  </ConceptCard>
  <ConceptCard title="Expert Judgment">
    Consult SMEs, past project managers, and organizational veterans who understand the political landscape.
  </ConceptCard>
  <ConceptCard title="RACI Review">
    Walking through the RACI matrix to identify who is Accountable, Responsible, Consulted, or Informed.
  </ConceptCard>
  <ConceptCard title="Snowball Effect">
    Ask every identified stakeholder: **"Who else should I be talking to about this project?"** to find hidden influencers.
  </ConceptCard>
</ConceptGrid>

---

##  The RACI Connection

<ConceptGrid>
  <ConceptCard title="Accountable">
    **Stakeholder Implication**: Usually the Sponsor or Product Owner. Only ONE person should be Accountable per task.
  </ConceptCard>
  <ConceptCard title="Consulted">
    **Stakeholder Implication**: SMEs and departments providing input. Requires **two-way** interactive communication.
  </ConceptCard>
  <ConceptCard title="Informed">
    **Stakeholder Implication**: Parties needing updates but not contributing input. Best served by **one-way** push communication.
  </ConceptCard>
</ConceptGrid>

---

## The Analysis Journey

<ConceptGrid>
  <ConceptCard title="4.1a Mapping">
    Using the Power/Interest Grid and Salience Model to prioritize engagement.
    [Prioritize Attention →](./stakeholder-mapping)
  </ConceptCard>
  <ConceptCard title="4.1b Classification">
    Maintaining the Stakeholder Register and analyzing direction of influence.
    [Document Intelligence →](./stakeholder-classification)
  </ConceptCard>
</ConceptGrid>

---

## Quick Review: Stakeholder Analysis

<FlashcardCarousel :cards="[
  { front: `Shadow Stakeholder`, back: `A person with informal power who can influence the project despite not having a formal title.` },
  { front: `Stakeholder Register`, back: `The primary living document used to record identification, assessment, and classification details.` },
  { front: `Frequent Analysis`, back: `Analysis should be repeated at every phase gate, or when major scope/resource changes occur.` },
  { front: `Identification Goal`, back: `Identify 100% of stakeholders early, especially those with high power and high resistance.` },
  { front: `What are four stakeholder identification techniques?`, back: `Brainstorming, Expert Judgment, RACI Review, and Snowball Effect.` },
  { front: `What is the Snowball Effect technique?`, back: `Ask every identified stakeholder: Who else should I be talking to about this project?` },
  { front: `What is the RACI Consulted role?`, back: `SMEs and departments providing input; requires two-way interactive communication.` },
  { front: `What is the RACI Informed role?`, back: `Parties needing updates but not contributing input; best served by one-way push communication.` },
  { front: `What should a PM do first for a new stakeholder or changed attitude?`, back: `Update the Stakeholder Register and reanalyze before escalating.` },
  { front: `Who should be Accountable in a RACI matrix?`, back: `Only ONE person per task - usually the Sponsor or Product Owner.` }
]" />

::: tip  Exam Insight
If the scenario says **new stakeholder**, **changed attitude**, or **political conflict**, the best "first" action is usually to **update the Stakeholder Register** and **reanalyze** before escalating.
:::


