<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# Chapter 3: Team Leadership & Development

In 2026, leading a project isn't about "command and control"—it's about orchestrating diverse, scattered, and sometimes robotic talent toward a shared vision.

::: info  People Domain Impact
The People domain is **42% of the exam**. (People + Business > Process). If you can calculate EVM but can't resolve a conflict, you will **fail**.
:::

---

##  What You'll Master (PMP-Style Skills)

<ConceptGrid>
  <ConceptCard title="Team Building">
    Build a team using a skills matrix and clarify ownership with RACI.
  </ConceptCard>
  <ConceptCard title="Frameworks & Models">
    Navigate Tuckman's stages, SLII, and Thomas-Kilmann conflict resolution.
  </ConceptCard>
  <ConceptCard title="Governance & Rules">
    Create a team charter with comprehensive working agreements and decision models.
  </ConceptCard>
  <ConceptCard title="Distributed Teams">
    Lead virtual and hybrid teams using Hofstede's dimensions and remote working agreements.
  </ConceptCard>
</ConceptGrid>

---

##  The Leadership Compass
From assembling the squad to navigating high-stakes conflict.

<ConceptGrid>
  <ConceptCard 
    title="3.1a Team Formation" 
    link="./team-formation"
    linkText="Assemble Your Team →"
  >
    Skills matrix, gap analysis, RACI, resource negotiation, and DEI considerations.
  </ConceptCard>

  <ConceptCard 
    title="3.1b Team Development" 
    link="./team-development"
    linkText="Grow the Team →"
  >
    Tuckman's model, psychological safety, Project Aristotle, and performance assessments.
  </ConceptCard>

  <ConceptCard 
    title="3.1c Team Charter" 
    link="./team-charter"
    linkText="Set the Rules →"
  >
    Working agreements, ground rules, Definition of Done, decision models, and escalation paths.
  </ConceptCard>

  <ConceptCard 
    title="3.1d Virtual Teams" 
    link="./virtual-teams"
    linkText="Go Global →"
  >
    Hofstede's dimensions, async-first communication, hybrid challenges, and remote working agreements.
  </ConceptCard>

  <ConceptCard 
    title="3.2 Servant Leadership" 
    link="./coaching-mentoring"
    linkText="Empower Performance →"
  >
    SLII, coaching with GROW, EQ competencies, leadership styles, and power types.
  </ConceptCard>

  <ConceptCard 
    title="3.3 Conflict Management" 
    link="./conflict-management"
    linkText="Resolve Friction →"
  >
    Thomas-Kilmann modes, BATNA/ZOPA, de-escalation, and negotiation strategies.
  </ConceptCard>

  <ConceptCard 
    title="3.4 Motivation & EQ" 
    link="./motivation-performance"
    linkText="Inspire Excellence →"
  >
    Herzberg, Vroom, McClelland, Maslow, Pink, Equity Theory, and performance management.
  </ConceptCard>

  <ConceptCard 
    title="Knowledge Check" 
    link="./knowledge-check"
    linkText="Verify Readiness →"
    class="knowledge-check"
  >
    25 scenario-based questions covering all chapter topics.
  </ConceptCard>
</ConceptGrid>

---

## 2026 Mindset: The "Servant PM"

<ConceptGrid>
  <ConceptCard title="Don't Direct, Support">
    Ask "What do you need?" instead of "Why isn't this done?"
  </ConceptCard>
  <ConceptCard title="Don't Blame, Learn">
    Retrospectives are for process improvement, not finger-pointing.
  </ConceptCard>
  <ConceptCard title="Don't Ignore, Engage">
    Conflict is healthy if it's task-based. Emotional conflict must be defused proactively.
  </ConceptCard>
</ConceptGrid>

### Quick Review: Core Concepts

<FlashcardCarousel :cards="[
  { front: `What are Tuckman's stages of team development?`, back: `Forming (establishing), Storming (conflict), Norming (cohesion), Performing (productivity).` },
  { front: `What is Servant Leadership?`, back: `A style where the PM enables team success, removes obstacles, and supports growth.` },
  { front: `What is the difference between coaching and mentoring?`, back: `Coaching: improving current performance. Mentoring: long-term development and career guidance.` },
  { front: `How should a PM handle team conflict?`, back: `Address promptly, listen to perspectives, find common ground, and focus on project objectives.` },
  { front: `What motivates high-performing teams?`, back: `Clear goals, autonomy, recognition, growth opportunities, and alignment with meaningful work.` },
  { front: `What is virtual team management?`, back: `Enabling distributed teams through over-communication, collaboration tools, and relationship building.` },
  { front: `What should a PM do in the Forming stage?`, back: `Clarify roles, establish ground rules, build psychological safety, and create team identity.` },
  { front: `What should a PM do in the Storming stage?`, back: `Address conflicts directly, clarify expectations, coach individuals, and maintain focus on goals.` },
  { front: `What should a PM do in the Performing stage?`, back: `Enable autonomy, focus on continuous improvement, handle exceptions, and develop future leaders.` },
  { front: `How does a PM build psychological safety on a team?`, back: `Create an environment where team members feel safe to take risks, admit mistakes, and ask questions without fear.` }
]" />
