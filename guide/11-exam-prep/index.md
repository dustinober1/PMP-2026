<script setup>
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# Chapter 11: Exam Preparation

You've built the foundation. Now, it's time to master the **Science of the Exam**. The PMP exam is not just about what you know; it's about how you apply that knowledge under pressure.

---

##  The Final Sprint
Preparation is 70% knowledge and 30% technique. This chapter bridges the gap.

<div class="prep-grid">
  <div class="prep-card strategy">
    <div class="prep-title">11.1 Exam Strategy</div>
    <p class="prep-desc">How to deconstruct scenario questions, spot distractors, and identify the "PMI Mindset" in every answer choice.</p>
    <a href="./exam-strategy" class="prep-link">Master the Technique →</a>
  </div>
  
  <div class="prep-card exam">
    <div class="prep-title">Practice Exam 1</div>
    <p class="prep-desc"><strong>Focus:</strong> Fundamentals. Covering the core People, Process, and Business Environment domains.</p>
    <a href="./practice-exam-1" class="prep-link">Start Simulation →</a>
  </div>
  
  <div class="prep-card exam">
    <div class="prep-title">Practice Exam 2</div>
    <p class="prep-desc"><strong>Focus:</strong> Agility. Heavy emphasis on Scrum, Hybrid models, and adaptive servant leadership.</p>
    <a href="./practice-exam-2" class="prep-link">Test Agility →</a>
  </div>
  
  <div class="prep-card exam">
    <div class="prep-title">Practice Exam 3</div>
    <p class="prep-desc"><strong>Focus:</strong> Integration. High-complexity scenarios combining risk, quality, and stakeholder conflict.</p>
    <a href="./practice-exam-3" class="prep-link">Final Challenge →</a>
  </div>
</div>

---

##  The 2026 PMI Mindset
To pass, you must think like a "Perfect PMP." This means:
*   **Servant Leadership**: Always support the team first.
*   **Proactivity**: Never "wait for someone else." You initiate the solution.
*   **Formal Process**: You don't just "fix it"; you follow the Change Control process.

<style>
.prep-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.prep-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.strategy { border-top: 4px solid #8b5cf6; }
.exam { border-top: 4px solid #3b82f6; }

.prep-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.prep-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.prep-link {
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
  align-self: flex-start;
}

.prep-link:hover {
  text-decoration: underline;
}
</style>

<FlashcardCarousel :cards="[
  { front: `What is the PMP exam format?`, back: `185 questions over 4 hours, multiple choice, spanning People (33%), Process (41%), and Business (26%) domains.` },
  { front: `What study approach is most effective?`, back: `Daily flashcard review (spaced repetition), weekly practice exams, and weekly deep-dive into weak areas.` },
  { front: `How long should I study?`, back: `6-8 weeks of dedicated study (1-2 hours daily) is typical for most candidates with PM background.` },
  { front: `What is the most common reason people fail?`, back: `Insufficient practice with scenario questions and not understanding the 'why' behind answers.` },
  { front: `Should I memorize or understand concepts?`, back: `Understand concepts deeply - the exam tests application, not memorization. Understand enough to handle new scenarios.` },
  { front: `How should I manage my time on the exam?`, back: `1.3 minutes per question - read carefully, flag uncertain questions, review at end if time permits.` },
  { front: `What if I encounter an unfamiliar concept on the exam?`, back: `Eliminate obviously wrong answers, use context clues, trust your knowledge, and move on - don't get stuck.` },
  { front: `When should I register for the exam?`, back: `After 1-2 weeks of study to stay motivated - gives target deadline and enables scheduling.` },
  { front: `What should I do the day before the exam?`, back: `Review formulas and key definitions lightly, get good sleep, avoid cramming, and prepare logistics (location, ID, materials).` },
  { front: `How do I prepare mentally for exam day?`, back: `Visualize success, remember you've done similar practice, focus on one question at a time, and trust your preparation.` }
]" />
