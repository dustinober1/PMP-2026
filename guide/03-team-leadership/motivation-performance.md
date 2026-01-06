<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 3.4 Motivation, Engagement & Performance Management

**ECO Task**: Lead the project team

"You can't motivate people; you can only create the environment where they choose to be motivated."

---

##  Classic Motivational Theories
You must master these theories for the exam—and more importantly, know when to apply each one.

<ConceptGrid>
  <ConceptCard title="Herzberg's Two-Factor">
    **Hygiene vs. Motivators**
    Fix hygiene (pay, security) first to prevent dissatisfaction. Then add motivators (growth, achievement) to drive performance.
  </ConceptCard>
  <ConceptCard title="McClelland's Acquired Needs">
    **Achievement, Affiliation, Power**
    Match assignments to the person's dominant need: challenging tasks (nAch), collaboration (nAff), or influence (nPow).
  </ConceptCard>
  <ConceptCard title="Maslow's Hierarchy">
    **Needs Progression**
    Physiological → Safety → Social → Esteem → Self-Actualization. Lower levels must be met before higher ones matter.
  </ConceptCard>
  <ConceptCard title="McGregor's Theory X & Y">
    **Management Mindset**
    Theory X assumes laziness; Theory Y assumes workers want to grow. Modern PMs use **Theory Y**.
  </ConceptCard>
  <ConceptCard title="Pink's Drive">
    **Intrinsic Motivation**
    Autonomy (control), Mastery (skill), and Purpose (meaning). The core drivers for modern knowledge work.
  </ConceptCard>
  <ConceptCard title="Vroom's Expectancy">
    **Effort = Result = Reward**
    Expectancy (Can I do it?) × Instrumentality (Will I get paid?) × Valence (Do I want it?).
  </ConceptCard>
</ConceptGrid>

---

##  The Art of Recognition
Recognition is the cheapest, most powerful tool in your kit. But it must be done right.

| Principle | Wrong | Right |
| :-------- | :---- | :---- |
| **Specific** | "Great job!" | "Your API fix unblocked the team." |
| **Timely** | 2 months later | Same week as the event |
| **Personal** | Generic to all | Personal 1-on-1 acknowledgment |
| **Public vs. Private** | Same for everyone | Introverts may prefer private |

---

##  Motivation Diagnosis: What to Check First

<ConceptGrid>
  <ConceptCard title="1. Hygiene Check">
    Are tools broken? Is the workload impossible? Fix these first (Herzberg).
  </ConceptCard>
  <ConceptCard title="2. Purpose & Autonomy">
    Does the person have control over their approach and see the value? (Pink).
  </ConceptCard>
  <ConceptCard title="3. Trust in the System">
    Do they believe performance will lead to reward? (Vroom).
  </ConceptCard>
  <ConceptCard title="4. Perceived Fairness">
    Do they feel the rules apply to everyone equally? (Adams' Equity).
  </ConceptCard>
</ConceptGrid>

::: warning  Trap Answer: "Throw money at morale"
Bonuses and perks can reduce dissatisfaction, but they rarely create sustained motivation by themselves. If tools are broken and priorities are unclear, a bonus won't fix it.
:::

---

##  When Performance Drops
If a team member is missing deadlines, follow this sequence:

1. **Meet Privately**: Seek to understand the root cause without assumptions or threats.
2. **Clarify Expectations**: Confirm they understand "Done" and have clear acceptance criteria.
3. **Enable Success**: Remove blockers, provide coaching, pairing, or targeted training.
4. **Agree on a Plan**: Set small milestones with frequent check-ins.
5. **Escalate Last**: Involve HR/Manager only after support fails and gaps are documented.

::: warning  Exam Note: PIP is Usually Wrong
On the PMP exam, jumping to a Performance Improvement Plan (PIP) or formal discipline is rarely the right first answer. Look for coaching, clarification, and support first.
:::

---

## Quick Review: Motivation & Performance

<FlashcardCarousel :cards="[
  { front: `Adams\\' Equity Theory`, back: `People compare their effort/reward ratio to others. Inequity leads to reduced effort.` },
  { front: `Ouchi\\'s Theory Z`, back: `Focuses on long-term employment, collective decisions, and holistic well-being.` },
  { front: `Leading indicator of Engagement`, back: `Active participation in meetings and proactive initiatives beyond the minimum.` },
  { front: `Maslow\\'s Social Level`, back: `The need for belonging and connection. Critical for remote team health.` },
  { front: `What is Herzberg\\'s Two-Factor Theory?`, back: `Hygiene factors (pay, security) prevent dissatisfaction; Motivators (growth, achievement) drive performance.` },
  { front: `What are Pink\\'s three intrinsic motivators?`, back: `Autonomy (control), Mastery (skill), and Purpose (meaning).` },
  { front: `What is Vroom\\'s Expectancy Theory formula?`, back: `Motivation = Expectancy (Can I do it?) x Instrumentality (Will I get paid?) x Valence (Do I want it?).` },
  { front: `What are the four principles of effective recognition?`, back: `Specific, Timely, Personal, and appropriate for Public vs Private preference.` },
  { front: `What is McGregor\\'s Theory Y?`, back: `The belief that workers want to grow and are intrinsically motivated - the modern PM mindset.` },
  { front: `What should a PM do FIRST when performance drops?`, back: `Meet privately to understand the root cause without assumptions or threats.` }
]" />

::: tip  Exam Insight
If a team is well-paid but morale is low, giving them a bonus is the wrong answer. According to Herzberg, money is hygiene. To fix morale, you must provide **Growth** (Training), **Autonomy** (Self-Direction), or **Recognition** (Meaningful acknowledgment).
:::


