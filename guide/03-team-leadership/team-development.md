<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 3.1b Tuckman's Model & Team Development

**ECO Task**: Lead the project team

Every team goes through a predictable lifecycle. As a project leader, your style must shift from **Directing** to **Empowering** as the team builds trust and autonomous capability.

---

##  The Five Stages of Growth (Tuckman's Model)
The Tuckman model is the foundation for understanding team dynamics on the PMP exam. Know the stage, know the leadership style.

<ConceptGrid>
  <ConceptCard title="1. Forming">
    **Directing (S1)**
    People are polite but guarded. Focus on clear goals and defined roles. High direction, low support.
  </ConceptCard>
  <ConceptCard title="2. Storming">
    **Coaching (S2)**
    Friction and ego clashes. Manage conflict and foster psychological safety. High direction, high support.
  </ConceptCard>
  <ConceptCard title="3. Norming">
    **Supporting (S3)**
    Habits form and trust builds. Facilitate shared decision-making. Low direction, high support.
  </ConceptCard>
  <ConceptCard title="4. Performing">
    **Delegating (S4)**
    Self-organizing and peak efficiency. Get out of the way! Low direction, low support.
  </ConceptCard>
  <ConceptCard title="5. Adjourning">
    **Celebrating**
    Project wrap-up. Focus on recognition, lessons learned, and transition support.
  </ConceptCard>
</ConceptGrid>

::: warning  Pro Tip: Regression is Real
Adding a new member or losing a key player will often knock a project team from **Performing** all the way back to **Storming**. Be prepared to shift your leadership style back to "Coaching" when this happens.
:::

---

##  Psychological Safety: The #1 Predictor of Success
Identified by Google's **Project Aristotle** as the most important factor in high-performing teams.

<ConceptGrid>
  <ConceptCard title="Psychological Safety">
    Safe to take risks and be vulnerable. Model fallibility and react positively to mistakes.
  </ConceptCard>
  <ConceptCard title="Dependability">
    Team members complete quality work on time. Clear expectations and accountability.
  </ConceptCard>
  <ConceptCard title="Structure & Clarity">
    Clear roles, plans, and goals. Use RACI, charters, and visible work boards.
  </ConceptCard>
  <ConceptCard title="Meaning & Impact">
    Work is personally important and team believes their outputs truly matter.
  </ConceptCard>
</ConceptGrid>

---

##  Practical Techniques: Develop the Team

<ConceptGrid>
  <ConceptCard title="Training & Mentoring">
    Formal training for tools/certs; Mentoring for career growth and organizational navigation.
  </ConceptCard>
  <ConceptCard title="Coaching & Pairing">
    Coaching for performance; Pair Programming for real-time knowledge transfer and quality.
  </ConceptCard>
  <ConceptCard title="Team Building">
    Problem-solving workshops and retrospectives. Focus on collaborative project challenges.
  </ConceptCard>
</ConceptGrid>

---

##  Team Performance Assessments (TPAs)
A TPA is a regular, intentional check-in on how well the team is functioning.

| Metric | What It Measures | Warning Signs |
| :----- | :--------------- | :------------ |
| **Velocity** | Work completed per iteration | Declining or erratic trend |
| **Cycle Time** | Time from start to finish | Increasing over time |
| **Defect Rate** | Quality of output | Rising defects |
| **Escaped Defects** | Issues found in production | Increasing trend |

---

## Quick Review: Team Development

<FlashcardCarousel :cards="[
  { 
    front: 'Forming Style', 
    back: 'Directing (S1). Provide clear structure and defined roles for a new team.' 
  },
  { 
    front: 'Storming Goal', 
    back: 'Facilitate conflict and build trust/psychological safety to reach Norming.' 
  },
  { 
    front: 'Performing Style', 
    back: 'Delegating (S4). Trust the team to self-organize and stay out of their way.' 
  },
  { 
    front: 'Project Aristotle #1 Factor', 
    back: 'Psychological Safety—the belief that one won\'t be punished for speaking up.' 
  },
  { 
    front: 'What are the five Tuckman stages?', 
    back: 'Forming, Storming, Norming, Performing, and Adjourning.' 
  },
  { 
    front: 'What happens when a new member joins a Performing team?', 
    back: 'The team often regresses back to Storming - be prepared to shift back to Coaching style.' 
  },
  { 
    front: 'What is the Norming stage leadership style?', 
    back: 'Supporting (S3) - Low direction, high support. Facilitate shared decision-making.' 
  },
  { 
    front: 'What are the 4 factors from Project Aristotle?', 
    back: 'Psychological Safety, Dependability, Structure and Clarity, and Meaning and Impact.' 
  },
  { 
    front: 'What are key Team Performance Assessment metrics?', 
    back: 'Velocity, Cycle Time, Defect Rate, and Escaped Defects.' 
  },
  { 
    front: 'What should a PM do during the Adjourning stage?', 
    back: 'Focus on recognition, lessons learned, and transition support for team members.' 
  }
]" />

::: tip  Exam Insight
If team members are "arguing over technical approaches" or "challenging the PM's authority," they are in <strong>Storming</strong>. This isn't a failure—it is a mandatory step toward <strong>Performing</strong>. Your job is to coach them through it, not to suppress the conflict.
:::

