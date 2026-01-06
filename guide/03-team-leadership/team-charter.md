<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 3.1c Team Charters, Working Agreements & Social Contracts

**ECO Task**: Define team ground rules
**ECO Task**: Build shared understanding

High-performing teams don't assume how they will work; they define it. The **Team Charter** is the "North Star" for team behavior, collaboration, and collective accountability.

---

##  The Team Charter
A living document created **by the team, for the team**. It sets the guardrails for a high-trust culture.

<ConceptGrid>
  <ConceptCard title="Team Values">
    What do we stand for? Establishing core values like Integrity, Transparency, and Respect.
  </ConceptCard>
  <ConceptCard title="Ground Rules">
    Behavioral "laws" (e.g., "Cameras on during calls," "No phones during standups").
  </ConceptCard>
  <ConceptCard title="Communication">
    Tools and norms: Slack for syncs, Email for formality, Jira for tasks and tracking.
  </ConceptCard>
  <ConceptCard title="Decision Making">
    How we decide: Majority vote, Consensus, or PM as the tie-breaker for deadlocks.
  </ConceptCard>
</ConceptGrid>

---

##  Team Agreements: Channel Usage

| Channel | Usage | Response Expectation |
| :------ | :---- | :------------------- |
| **Slack/Teams** | Quick questions, blockers | 2-4 hours during work hours |
| **Email** | Formal updates, external comms | 24 hours |
| **Video Call** | Complex/Sensitive topics | Scheduled in advance |
| **Task Board** | Status & assignments | Real-time updates |

---

##  Meeting Norms & Cadence

| Meeting | Frequency | Rules |
| :------ | :-------- | :---- |
| Daily Standup | Daily | Yesterday/Today/Blockers only |
| Retrospective | Bi-weekly | What worked/What didn't/Actions |
| Planning | Per Sprint | Prepared backlog is required |

---

##  Ground Rules: The Behavioral Contract

<ConceptGrid>
  <ConceptCard title="Collaborative">
    The team must write them collectively to feel a sense of ownership and accountability.
  </ConceptCard>
  <ConceptCard title="Visible">
    Displayed prominently in the physical or digital project space for easy reference.
  </ConceptCard>
  <ConceptCard title="Self-Policing">
    Team members call out violations themselves, without needing the PM to play "police."
  </ConceptCard>
</ConceptGrid>

---

##  Definition of Done (DoD) vs. Acceptance Criteria (AC)
These agreements are critical quality gates that prevent rework.

<ConceptGrid>
  <ConceptCard title="Definition of Done (DoD)">
    **Scope**: Applies to **ALL** work items.
    **Example**: "Code reviewed, tests passed, documentation updated."
  </ConceptCard>
  <ConceptCard title="Acceptance Criteria (AC)">
    **Scope**: Applies to **ONE** specific item.
    **Example**: "The login button must be blue and the page must load in <2s."
  </ConceptCard>
</ConceptGrid>

---

##  Decision Models: When to Use Which

<FlashcardCarousel :cards="[
  { 
    front: 'Consensus', 
    back: 'Everyone agrees or consents. Best for high-impact decisions requiring deep buy-in.' 
  },
  { 
    front: 'Majority Vote', 
    back: '50%+1 wins. Best for time-boxed decisions with moderate impact.' 
  },
  { 
    front: 'Consensus (Sociocracy)', 
    back: 'Based on principled objections. Faster than 100% agreement but still collaborative.' 
  },
  { 
    front: 'PM/Expert Decides', 
    back: 'For highly specialized technical decisions or when the team is deadlocked.' 
  }
]" />

---

## Quick Review: Charters & Agreements

<FlashcardCarousel :cards="[
  { 
    front: 'Charter Source', 
    back: 'Must be created by the TEAM, for the team (not dictated by the PM).' 
  },
  { 
    front: 'When to update Charter', 
    back: 'Update during every Retrospective based on team feedback and flow.' 
  },
  { 
    front: 'Ground Rules Purpose', 
    back: 'To set behavioral expectations and create a safe, high-trust environment.' 
  },
  { 
    front: 'Conflict Step 1', 
    back: 'Team Charter escalation path: Start with direct conversation between parties.' 
  },
  { 
    front: 'What is Definition of Done (DoD)?', 
    back: 'A standard checklist that applies to ALL work items (e.g., code reviewed, tests passed, docs updated).' 
  },
  { 
    front: 'What is Acceptance Criteria (AC)?', 
    back: 'Specific requirements that apply to ONE work item (e.g., button must be blue, load in less than 2s).' 
  },
  { 
    front: 'What are the four key Team Charter components?', 
    back: 'Team Values, Ground Rules, Communication Norms, and Decision Making processes.' 
  },
  { 
    front: 'What are three properties of effective Ground Rules?', 
    back: 'Collaborative (written by team), Visible (displayed prominently), and Self-Policing (team enforces them).' 
  },
  { 
    front: 'When should Consensus be used for decisions?', 
    back: 'For high-impact decisions requiring deep buy-in where everyone agrees or consents.' 
  },
  { 
    front: 'What should a PM do when team has behavioral issues?', 
    back: 'Refer the team to the Ground Rules or facilitate a session to update the Team Charter.' 
  }
]" />

::: tip  Exam Insight
If a team is having constant minor behavioral issues (e.g., people interrupting each other), the correct action is to <strong>refer the team to the Ground Rules</strong> or facilitate a session to <strong>update the Team Charter</strong>. If they're confused about what "done" means, they need a <strong>Definition of Done</strong>.
:::


