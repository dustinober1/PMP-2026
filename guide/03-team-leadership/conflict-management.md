<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 3.3 Conflict Management & Negotiation

**ECO Task**: Manage conflicts

Conflict is not a sign of failure; it is a sign of passion. If your team never fights, they probably don't care. Your job is to channel that energy into innovation.

---

##  The Thomas-Kilmann Conflict Mode Instrument (TKI)
The 5 conflict resolution modes are mapped on two dimensions: **Assertiveness** (self) and **Cooperativeness** (others).

<ConceptGrid>
  <ConceptCard title="Collaborate / Problem Solve">
    **Win / Win**
    Finding a new solution that satisfies all interests. High assertiveness + high cooperation.
  </ConceptCard>
  <ConceptCard title="Compromise">
    **Lose / Lose**
    Everyone gives up something for a quick deal. Moderate assertiveness + moderate cooperation.
  </ConceptCard>
  <ConceptCard title="Force / Direct">
    **Win / Lose**
    Using authority to end debate. High assertiveness + low cooperation. Limit to emergencies.
  </ConceptCard>
  <ConceptCard title="Smooth / Accommodate">
    **Lose / Win**
    Emphasizing agreement to preserve the relationship. Low assertiveness + high cooperation.
  </ConceptCard>
  <ConceptCard title="Withdraw / Avoid">
    **Yield**
    Retreating from the conflict. High emotions or trivial issue. Low assertiveness + low cooperation.
  </ConceptCard>
</ConceptGrid>

::: tip  Exam Pattern: Collaborate is the default "best"
If the scenario is not an emergency, look for choices that involve listening, using data, and jointly creating a solution. Collaborate almost always beats Compromise in non-time-pressured scenarios.
:::

---

##  Types of Conflict: Task vs. Relationship

<ConceptGrid>
  <ConceptCard title="Task Conflict">
    Disagreement about work (approach, priorities). Healthy if facilitated toward innovation.
  </ConceptCard>
  <ConceptCard title="Relationship Conflict">
    Personal friction or personality clashes. Always harmful; intervene early and privately.
  </ConceptCard>
  <ConceptCard title="Process Conflict">
    Disagreement about how to work together. Resolve by clarifying roles and agreements.
  </ConceptCard>
</ConceptGrid>

::: warning  The Personality Trap
Most friction is caused by Scope, Schedule, or Priorities. What looks like a "personality conflict" is usually a process issue. **Always look for the process issue before blaming the person.**
:::

---

##  Negotiation Strategies
Conflict often requires negotiation to resolve. You need to know your leverage and strategy.

<ConceptGrid>
  <ConceptCard title="BATNA">
    **Best Alternative to a Negotiated Agreement**
    Your "Plan B." Know this before you start; it defines your leverage and walk-away point.
  </ConceptCard>
  <ConceptCard title="ZOPA">
    **Zone of Possible Agreement**
    The overlap between the buyer's maximum and seller's minimum. Finding the "deal space."
  </ConceptCard>
  <ConceptCard title="Integrative Strategy">
    **Win-Win / Expand the Pie**
    Focus on interests, not positions. Create options. Preferred for most project situations.
  </ConceptCard>
</ConceptGrid>

---

##  The Conflict Resolution Process
When conflict erupts, follow this escalation ladder:

1. **Self-Correction**: Let the team try to solve it first. Monitor but don't jump in.
2. **Private Intervention**: Facilitate safe, 1-on-1 conversations to understand perspectives.
3. **Collaborative Session**: Bring parties together. Use data and interests to find a solution.
4. **Formal Authority**: Make a decision if deadlocked. Explain the rationale clearly.
5. **Escalation**: Involve sponsor only if formal authority/budget/scope changes are required.

---

##  De-escalation & Resolution Tools

<FlashcardCarousel :cards="[
  { 
    front: 'Acknowledge & Validate', 
    back: 'Identify emotions and confirm concerns are legitimate to lower the temperature.' 
  },
  { 
    front: 'Separate People from Problems', 
    back: 'Focus on the issue (timeline, quality) rather than personal behavior or identity.' 
  },
  { 
    front: 'Interests vs. Positions', 
    back: 'Ask \'WHY\' someone wants something (interest) rather than \'WHAT\' they want (position).' 
  },
  { 
    front: 'Structural Solutions', 
    back: 'Recurring conflict needs a fix in the system: update RACI, DoD, or the Team Charter.' 
  }
]" />

---

## Quick Review: Conflict & Negotiation

<FlashcardCarousel :cards="[
  { 
    front: 'Thomas-Kilmann for Emergencies', 
    back: 'Force / Direct. Use it when speed and safety are more important than Buy-in.' 
  },
  { 
    front: 'Lose / Lose Mode', 
    back: 'Compromise. Both sides give up something; the root cause often remains.' 
  },
  { 
    front: 'Integrative Negotiation Goal', 
    back: 'Find mutual value and preserve long-term project relationships.' 
  },
  { 
    front: 'When to intervene?', 
    back: 'Intervene privately if self-correction fails or if the conflict is personality-based.' 
  }
]" />

::: tip  Exam Insight
"Compromise" sounds positive in real life, but on the PMP exam, it is often a "Lose-Lose" trap answer. Always look for <strong>Collaboration (Problem Solving)</strong> first. Compromise is only correct when time pressure makes collaboration impossible and the stakes are moderate.
:::




