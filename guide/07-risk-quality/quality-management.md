# 7.2 Quality Management

In the 2026 PMP exam, **Quality** is defined as the *degree to which a set of inherent characteristics fulfills requirements*. Put simply: Quality is about **delivering exactly what was promised**, no more and no less.

---

## 💎 Quality vs. Grade
A common PMP trap is confusing these two concepts.

<div class="quality-grid">
  <div class="quality-card">
    <div class="quality-title">Grade</div>
    <div class="quality-tag">Category</div>
    <p>A rank assigned to items having the same functional use but different technical characteristics (e.g., "Economy" vs. "First Class").</p>
  </div>
  <div class="quality-card">
    <div class="quality-title">Quality</div>
    <div class="quality-tag">Performance</div>
    <p>How well the item follows the predefined specifications and requirements. (e.g., Does the economy seat actually recline?).</p>
  </div>
</div>

::: warning 🚦 The Golden Rule
Low **Grade** is acceptable (if that's what was paid for). Low **Quality** is *never* acceptable.
:::

---

## 🏗️ The Quality Lifecycle
Modern project management moves from checking for errors (Reactive) to preventing them (Proactive).

<div class="cycle-grid">
  <div class="cycle-card proactive">
    <div class="cycle-title">Quality Assurance (QA)</div>
    <div class="cycle-subtitle">"The Process"</div>
    <p>Proactive activities aimed at <strong>preventing defects</strong> by ensuring the team follows the right procedures.</p>
    <ul>
      <li>Integrity Audits</li>
      <li>Process Analysis</li>
      <li>Peer Reviews</li>
    </ul>
  </div>
  <div class="cycle-card reactive">
    <div class="cycle-title">Quality Control (QC)</div>
    <div class="cycle-subtitle">"The Result"</div>
    <p>Reactive activities aimed at <strong>identifying defects</strong> in the final deliverables before they reach the customer.</p>
    <ul>
      <li>Testing & Lab Work</li>
      <li>Inspections</li>
      <li>Verification</li>
    </ul>
  </div>
</div>

---

## 🛠️ The Quality Toolbox (The 7 Basics)
You must know when to use each tool for the exam:
*   **Fishbone (Ishikawa)**: Used when you need to find the **Root Cause** of a problem.
*   **Pareto Chart**: The 80/20 rule. Focus on the **few** causes creating the **most** defects.
*   **Control Chart**: Determining if a process is stable and "In Control" via Upper/Lower Control Limits.
*   **Flowchart**: Visualizing a process to identify where bottlenecks or quality leaks occur.
*   **Scatter Diagram**: Seeing if there is a relationship between two variables (e.g., "Number of hours worked" vs "Number of defects").

---

## 🔄 Agile Quality: DoD & TDD
In Agile, quality isn't an "end-of-sprint" activity; it's continuous.
- **Definition of Done (DoD)**: The non-negotiable quality checklist for every user story.
- **Test-Driven Development (TDD)**: Writing the test *before* the code to ensure requirements are understood.

<style>
.quality-grid, .cycle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.quality-card, .cycle-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.quality-title, .cycle-title {
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.quality-tag, .cycle-subtitle {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.cycle-card ul {
  padding-left: 1.25rem;
  font-size: 0.85rem;
  margin-top: 1rem;
}

.proactive { border-top: 4px solid #3b82f6; }
.reactive { border-top: 4px solid #ef4444; }
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project is producing consistent defects, the FIRST step is to perform <strong>Root Cause Analysis (Fishbone)</strong>. You cannot fix the quality without knowing what is actually broken.
</div>

<style>
.study-tip {
  background: var(--vp-c-brand-soft);
  border-left: 4px solid var(--vp-c-brand);
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem 0;
}
</style>
