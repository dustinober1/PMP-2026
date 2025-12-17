# 6.1 Scope Planning

Scope defines the boundaries of the mission. It is the "What" the team will build and, just as importantly, the "What Not."

---

## 🛠️ The Scope Toolbox
The way you define scope depends on the stability of your requirements.

<div class="scope-grid">
  <div class="scope-card predictive">
    <div class="scope-title">Predictive Tools</div>
    <ul>
      <li><strong>WBS (Work Breakdown Structure)</strong>: Decomposing work into manageable "Work Packages."</li>
      <li><strong>WBS Dictionary</strong>: Detailed specs for every WBS element.</li>
      <li><strong>Project Scope Statement</strong>: Written description of deliverables and exclusions.</li>
    </ul>
  </div>
  <div class="scope-card agile">
    <div class="scope-title">Agile Tools</div>
    <ul>
      <li><strong>Product Backlog</strong>: A dynamic, prioritized list of User Stories.</li>
      <li><strong>User Stories</strong>: "As a [role], I want [action], so that [value]."</li>
      <li><strong>Definition of Done (DoD)</strong>: The non-negotiable checklist for every story.</li>
    </ul>
  </div>
</div>

---

## 🏗️ The WBS: Foundation of Control
In the PMP world, the **WBS** is the 100% rule: If it isn't in the WBS, it isn't in the project.

1.  **Work Packages**: The lowest level of the WBS where cost and duration can be reliably estimated.
2.  **Control Accounts**: Management points where scope, budget, and actual cost are integrated.
3.  **Requirements Traceability Matrix (RTM)**: A table that links requirements to their origin and the deliverables that satisfy them. **(Crucial for 2026 Compliance!)**

---

## 🚦 Scope Creep vs. Gold Plating
Two major risks every PM must fight:
- **Scope Creep**: The uncontrolled expansion of scope without adjustments to time or cost.
- **Gold Plating**: The team adding "extra" features that weren't requested. (Even if they are free, they are considered a waste of resources).

::: info 🛠️ 2026 Shift: Continuous Backlog Refinement
In modern practice, the Product Owner and Team perform **Backlog Refinement** (Grooming) continuously. They break down "Epics" into "User Stories" just-in-time for the next sprint, ensuring the team always works on the highest value items.
:::

<style>
.scope-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.scope-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.scope-title {
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.scope-card ul {
  padding-left: 1.25rem;
  font-size: 0.9rem;
}

.scope-card li { margin-bottom: 0.5rem; }

.predictive { border-left: 4px solid #3b82f6; }
.agile { border-left: 4px solid #10b981; }
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If an exam scenario says the team is "confused about what a specific task requires," the answer is usually to refer to the <strong>WBS Dictionary</strong>. If they are confused if a feature is "finished," refer to the <strong>Definition of Done</strong>.
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
