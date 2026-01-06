<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 3.1 Building Teams

**ECO Task**: Manage conflicts in the project team
**ECO Task**: Plan and manage resources

Projects don't fail; teams do. Your primary accountability is to assemble a diverse group of strangers and transform them into a cohesive value-delivery engine.

---

##  The Construction Phases
Building a team is a structured journey, not an accident.

<ConceptGrid>
  <ConceptCard 
    title="3.1a Formation" 
    link="./team-formation"
    linkText="Start Hiring →"
  >
    * Skills Assessment
    * Virtual vs. Co-located
    * Diversity & Inclusion
  </ConceptCard>
  <ConceptCard 
    title="3.1b Development" 
    link="./team-development"
    linkText="Grow Talent →"
  >
    * Tuckman Ladder
    * Training Plans
    * Performance Reviews
  </ConceptCard>
  <ConceptCard 
    title="3.1c Agreements" 
    link="./team-charter"
    linkText="Set Rules →"
  >
    * Team Charters
    * Ground Rules
    * Decision Models
  </ConceptCard>
  <ConceptCard 
    title="3.1d Virtual Leadership" 
    link="./virtual-teams"
    linkText="Go Global →"
  >
    * Timezone Management
    * Asynchronous Ops
    * Digital Culture
  </ConceptCard>
</ConceptGrid>

---

##  The 2026 Core Competency: Psychological Safety

<ConceptGrid>
  <ConceptCard title="Safety">
    "I can ask a dumb question without being mocked."
  </ConceptCard>
  <ConceptCard title="Trust">
    "I know you have my back when things go wrong."
  </ConceptCard>
  <ConceptCard title="Diversity">
    "We solve problems better because we think differently."
  </ConceptCard>
</ConceptGrid>

::: tip  Exam Mindset: Psychological Safety
Building a team isn't just about hiring smart people. It's about creating an environment where **bad news travels fast**. If your team is afraid to tell you about a delay, you are failing.
:::

---

##  PMI Lens: Acquire → Develop → Manage the Team
On the PMP exam, most "people problems" are really asking which of these three verbs you should apply **first**.

| PMI Verb | What you're trying to do | Artifacts you typically use | Common exam cues |
| :------- | :----------------------- | :-------------------------- | :--------------- |
| **Acquire Team** | Get the right people with the right availability | Resource management plan, staff assignments, resource calendars, **skills matrix**, **RACI** | Missing skills, no availability, matrix org negotiation |
| **Develop Team** | Improve skills, trust, and collaboration | **Team charter**, ground rules, training, mentoring, team-building, recognition | New team, Storming, low trust, skill gaps |
| **Manage Team** | Track performance and resolve issues | **1-on-1s**, issue log, conflict resolution, feedback, change requests | Underperformance, blockers, conflict, repeated missed commitments |

::: tip  Exam Pattern: Clarity → Support → Escalate (last)
If the choices include "meet privately," "clarify roles," "remove impediments," or "refer to the team charter," those are usually better than replacing people or escalating immediately.
:::

---

##  Week 1: Team Setup Checklist

<ConceptGrid>
  <ConceptCard title="1. Purpose & Roles">
    Align on outcomes and success criteria. Build a **RACI** for major deliverables and decision points.
  </ConceptCard>
  <ConceptCard title="2. Agreements & Rules">
    Create working agreements: **team charter** + **ground rules** + conflict escalation path.
  </ConceptCard>
  <ConceptCard title="3. Visibility & Norms">
    Shared task board. Set communication norms (channels, cadence, response-time).
  </ConceptCard>
  <ConceptCard title="4. Trust & Capacity">
    Kickoff meetings and 1-on-1s. Confirm capacity (vacations, time zones, priorities).
  </ConceptCard>
</ConceptGrid>

---

## Quick Review: Building Teams

<FlashcardCarousel :cards="[
  { 
    front: 'Skills Matrix vs. RACI', 
    back: 'Matrix shows WHO has the skill; RACI shows WHO is doing the specific work/deciding.' 
  },
  { 
    front: 'Psychological Safety Source', 
    back: 'Google\'s Project Aristotle identified it as the #1 factor in high-performing teams.' 
  },
  { 
    front: 'First step in Team Building', 
    back: 'Identify requirements (skills matrix) and then negotiate/acquire resources.' 
  },
  { 
    front: 'What are the three PMI team verbs?', 
    back: 'Acquire Team, Develop Team, and Manage Team.' 
  },
  { 
    front: 'What is the difference between Acquire and Develop Team?', 
    back: 'Acquire gets the right people; Develop improves their skills, trust, and collaboration.' 
  },
  { 
    front: 'What is Psychological Safety?', 
    back: 'An environment where bad news travels fast and team members feel safe to speak up without fear.' 
  },
  { 
    front: 'What are the four Week 1 Team Setup areas?', 
    back: 'Purpose and Roles, Agreements and Rules, Visibility and Norms, and Trust and Capacity.' 
  },
  { 
    front: 'When does the PM use Manage Team?', 
    back: 'When tracking performance, resolving issues, dealing with underperformance, blockers, or conflict.' 
  },
  { 
    front: 'What is the exam pattern for people problems?', 
    back: 'Clarity first, then Support, and Escalate only as a last resort.' 
  },
  { 
    front: 'What should a PM do before replacing a team member?', 
    back: 'Meet privately, clarify roles, remove impediments, and refer to the team charter first.' 
  }
]" />




