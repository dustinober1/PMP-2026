<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# 11.1 Exam Strategy & Test-Taking

The PMP exam is a test of **reasoning**, not just recall. In 2026, approximately **40%** of the items represent **predictive** approaches and the remaining **60%** are split between **adaptive/agile** and **hybrid** approaches. To pass, you must demonstrate the "PMI Mindset" in every choice you make.

---

##  The PMI Mindset (The Golden Rules)
When unsure, apply these filters. The correct answer almost always aligns with:

<div class="mindset-grid">
  <div class="mindset-card">
    <div class="mindset-title">1. Analyze First</div>
    <div class="mindset-tag">The Thinker</div>
    <p>Never act without data. Before you "Fire the vendor," you must "Review the contract" or "Assess the impact."</p>
  </div>
  <div class="mindset-card">
    <div class="mindset-title">2. Don't Escalate</div>
    <div class="mindset-tag">The Owner</div>
    <p>Do not run to the Sponsor with problems. Bring them <strong>solutions</strong>. Escalation is a last resort.</p>
  </div>
  <div class="mindset-card">
    <div class="mindset-title">3. Servant Leader</div>
    <div class="mindset-tag">The Helper</div>
    <p>Support the team. Remove blockers. Provide training. Never "punish" or "dictate."</p>
  </div>
  <div class="mindset-card">
    <div class="mindset-title">4. Follow Process</div>
    <div class="mindset-tag">The Professional</div>
    <p>You have a methodology for a reason. If scope changes, use the <strong>Change Control Process</strong>. Don't hack it.</p>
  </div>
</div>

---

##  Time Management: The 240-Minute Marathon
The exam is **185 questions in 240 minutes**. For the center-based exam, you get **two 5-minute breaks**. The first break occurs after the **case-study section**, and the second occurs about halfway through the **independent question** portion.

*   **Segment 1 (Case studies)**: Don't over-read; answer the full set while the scenario is fresh.
*   **Break 1 (5 min)**: Reset, hydrate, breathe.
*   **Segment 2 (Independent questions)**: Maintain steady pace; mark and move.
*   **Break 2 (5 min)**: Quick reset; protect your focus.
*   **Segment 3 (Independent questions)**: Keep momentum; avoid second-guess spirals.

::: tip  The "Review" Lock
Once you finish a section and start your break, **you cannot go back**. Review your flagged questions before hitting "Submit Section."
:::

---

##  Decoding Scenarios: The "Reverse Read"
Most questions are long, confusing scenarios.
1.  **Read the Last Sentence First**: "What should the project manager do *next*?"
2.  **Read the Scenario**: Now scan for keywords (Agile? Predictive? Behind schedule?).
3.  **Eliminate the "Red Flags"**:
    *   "Fire the team member..." (Too aggressive).
    *   "Ignore the request..." (Too passive).
    *   "Ask the sponsor to solve it..." (Escalation).
4.  **Select the Best Remaining**: Usually the one that involves *Collaboration* or *Analysis*.

<style>
.mindset-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.mindset-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.mindset-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.25rem;
}

.mindset-tag {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
  display: inline-block;
  padding: 0.1rem 0.4rem;
  background: var(--vp-c-bg-mute);
  border-radius: 4px;
}

.mindset-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
}
</style>

---

<div class="study-tip">
  <strong> Exam Insight:</strong> If a question doesn't specify the methodology, look for clues. "Sprint" = Agile. "Phase Gate" = Predictive. If NO clues exist, assume **Hybrid** and choose the answer that balances control with flexibility.
</div>

---

## Quick Review

<FlashcardCarousel :cards="[
  { front: `PMI Mindset: Analyze vs. Act?`, back: `Always Analyze first (assess, review, engage) before Acting (execute, fire, reject).` },
  { front: `PMI Mindset: Escalation?`, back: `Never escalate problems to the sponsor unless you have analyzed them and have a recommendation, or if it is beyond your authority.` },
  { front: `PMI Mindset: Servant Leadership?`, back: `Empower the team, remove blockers, provide training. Never dictate or punish.` },
  { front: `PMI Mindset: Change Control?`, back: `In predictive, never change the baseline without a formal Change Request and CCB approval.` },
  { front: `Exam Strategy: The \\'Reverse Read\\'?`, back: `Read the last sentence (the question) first to know what to look for in the scenario.` },
  { front: `Exam Strategy: Time per Question?`, back: `About 75 seconds per question. Don\\'t spend 5 minutes on one hard question; mark and move.` },
  { front: `When to assume \\'Hybrid\\'?`, back: `When the scenario has no clear keywords (like \\'Sprint\\' or \\'Phase\\'), assume Hybrid and balance structure with flexibility.` },
  { front: `Common Trap: \\'Fire the vendor\\'?`, back: `This is rarely the answer. First step is usually to \\'Review the contract\\' or \\'Meet with vendor\\'.` },
  { front: `Common Trap: \\'Request more money\\'?`, back: `Avoid asking for budget. Look for alternatives (trade-offs, reserves) first.` },
  { front: `Common Trap: \\'Stop the project\\'?`, back: `Never stop the project unless safety is at risk or the business case is invalid.` }
]" />


<style>
.study-tip {
  background: var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand);
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem 0;
}
</style>
