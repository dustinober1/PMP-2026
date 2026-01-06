<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 02.7 Organizational Change Management

**ECO Task**: Support organizational change

"Technology projects don't fail because of technology—they fail because people don't adopt the change." This is the core principle of **Organizational Change Management (OCM)**.

---

##  The PMP Mindset: Adoption Is Part of "Done"
If the project delivers the tool but nobody uses it, value is not realized. PMI expects you to plan for:
- **Readiness** (are people prepared?)
- **Adoption** (are people actually using it?)
- **Sustainment** (will the behavior stick?)

##  The Adoption Gap
The chasm between "Output" and "Outcome" is human adoption.

| The Deliverable (Output) | The Human Reality (Risk)                              | The OCM Solution                                         |
| :----------------------- | :---------------------------------------------------- | :------------------------------------------------------- |
| **New CRM System**       | Sales Reps stick to Excel because it's familiar.      | Early "Champion" program to build advocacy.              |
| **New AI Coding Tool**   | Developers fear job loss and sabotage implementation. | Transparent communication on job security + re-skilling. |
| **New Safety Protocol**  | Workers ignore it because it slows them down.         | "WIIFM" (What's in it for me) safety bonuses.            |
| **New Expense System**   | Employees find workarounds to avoid the new process.  | Management enforcement + process redesign.               |
| **New Collaboration Tool** | Teams continue using email and old tools.             | Executive role modeling + remove old tool access.        |

---

##  Change Frameworks
You must know the language of change dynamics.

<ConceptGrid>
  <ConceptCard title="ADKAR (Individual)">
    Awareness, Desire, Knowledge, Ability, Reinforcement. Used for diagnosing and addressing individual resistance.
  </ConceptCard>
  <ConceptCard title="Kotter's 8 Steps (Org)">
    Establishing urgency, building a coalition, creating a vision, and anchoring changes in corporate culture.
  </ConceptCard>
  <ConceptCard title="Lewin's Model (Process)">
    Unfreeze (recognizing need), Change (transition), and Refreeze (stabilizing behaviors).
  </ConceptCard>
</ConceptGrid>

### Framework Comparison

| Framework | Focus | Best For | Key Question It Answers |
| :-- | :-- | :-- | :-- |
| **ADKAR** | Individual | Diagnosing resistance; targeted interventions | "Why isn't this person changing?" |
| **Kotter's 8 Steps** | Organization | Large-scale transformation planning | "How do we change the whole organization?" |
| **Lewin's Model** | Process | Understanding change phases | "What stage of change are we in?" |

---

## ADKAR Deep Dive (Exam Favorite)

ADKAR is the most commonly tested change framework.

<ConceptGrid>
  <ConceptCard title="Awareness">
    Does the person understand WHY we need to change? (Barrier: "Why fix what isn't broken?")
  </ConceptCard>
  <ConceptCard title="Desire">
    Does the person WANT to participate? (Barrier: Foot-dragging despite knowing why).
  </ConceptCard>
  <ConceptCard title="Knowledge">
    Does the person know HOW to change? (Barrier: "I want to, but I don't know how").
  </ConceptCard>
  <ConceptCard title="Ability">
    CAN the person perform the new behavior? (Barrier: Slow performance; frustration).
  </ConceptCard>
  <ConceptCard title="Reinforcement">
    Will the person SUSTAIN the change? (Barrier: Reverting to old ways).
  </ConceptCard>
</ConceptGrid>

::: tip ADKAR Diagnosis Shortcut
If training is excellent but adoption is still low, you usually have a **Desire** problem (motivation, fear, incentives), not a Knowledge problem. Training solves K and A, but it cannot solve D.
:::

---

## Managing Resistance

Resistance is a natural reaction to fear. Do not punish it; manage it.

<ConceptGrid>
  <ConceptCard title="Can't Do It">
    Knowledge or Ability Gap. **Solution**: Training, coaching, tools, and support.
  </ConceptCard>
  <ConceptCard title="Won't Do It">
    Desire Gap. **Solution**: WIIFM (What's in it for me), addressing fears, and incentives.
  </ConceptCard>
  <ConceptCard title="Don't Get It">
    Awareness Gap. **Solution**: Communication, leadership messaging, and "burning platform" urgency.
  </ConceptCard>
</ConceptGrid>

---

::: tip Exam Insight
If a question says adoption is low despite great training, the problem is likely **Desire** (Lack of motivation/WIIFM). Training solves "Knowledge/Ability," but it cannot solve "Desire."
:::

---

## Quick Review
<FlashcardCarousel :cards="[
  { 
    front: 'What is the first step in the ADKAR model?', 
    back: 'Awareness (of the need for change).' 
  },
  { 
    front: 'Which model uses \'Unfreeze, Change, Refreeze\'?', 
    back: 'Lewin\'s Three-Stage Model.' 
  },
  { 
    front: 'What does \'WIIFM\' stand for?', 
    back: '\'What\'s In It For Me\' - the personal benefit that drives Desire in change.' 
  },
  { 
    front: 'How many steps are in Kotter\'s change model?', 
    back: '8 steps.' 
  },
  { 
    front: 'What should a PM do if an organization is overwhelmed by 5 simultaneous changes?', 
    back: 'Evaluate \'Change Saturation\' and recommend delaying or sequencing the changes to ensure adoption.' 
  },
  { 
    front: 'What does the \'D\' in ADKAR stand for?', 
    back: 'Desire - the personal motivation to participate in the change.' 
  },
  { 
    front: 'If training is excellent but adoption is still low, what is likely the problem?', 
    back: 'A Desire problem (motivation, fear, incentives), not a Knowledge problem.' 
  },
  { 
    front: 'What is the \'Adoption Gap\'?', 
    back: 'The chasm between Output (deliverable) and Outcome (behavior change) caused by lack of human adoption.' 
  },
  { 
    front: 'What is the solution for a \'Won\'t Do It\' resistance type?', 
    back: 'Address the Desire gap through WIIFM, addressing fears, and providing incentives.' 
  },
  { 
    front: 'What is \'Reinforcement\' in the ADKAR model?', 
    back: 'Actions to sustain the change and prevent people from reverting to old ways.' 
  }
]" />

