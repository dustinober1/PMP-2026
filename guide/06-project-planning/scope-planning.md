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

## 🎯 Project Scope vs. Product Scope
The exam loves to test whether you understand these two scope concepts:
- **Product Scope**: The features and functions of the product/service/result.
- **Project Scope**: The work required to deliver the product scope.

Scope problems often begin when stakeholders request product features without acknowledging the extra project work (time/cost/resources) required to deliver them.

---

## 🧭 The Predictive Scope Flow (In Order)
1.  **Plan Scope Management**: Defines how scope will be defined, validated, and controlled.
2.  **Collect Requirements**: Produces **Requirements Documentation** and the **RTM**.
3.  **Define Scope**: Produces the **Project Scope Statement** (deliverables, acceptance criteria, exclusions).
4.  **Create WBS**: Produces the **WBS** and **WBS Dictionary**.

::: tip 💡 Baseline Reality
The **Scope Baseline** is the approved version of: **Scope Statement + WBS + WBS Dictionary**.
:::

---

## 🗂️ Collect Requirements: Common Techniques
When a question asks “how do we get clear requirements,” think facilitation and discovery:
- **Interviews** and **surveys/questionnaires**
- **Focus groups** (multiple users/stakeholders)
- **Facilitated workshops/JAD** (fast alignment + conflict surfacing)
- **Observation/job shadowing**
- **Prototyping** (especially for UI/UX uncertainty)
- **Document analysis** (policies, regulations, legacy systems)

### Advanced Group Creativity Techniques
- **Affinity Diagrams**: Grouping large numbers of ideas into natural categories for review and analysis.
- **Mind Mapping**: Consolidating ideas generated through individual brainstorming sessions into a single map to reflect commonality and differences in understanding and to generate new ideas.
- **Context Diagrams**: Visualizing the product scope by showing a business system (process, equipment, computer system, etc.) and how people and other systems (actors) interact with it.
- **Decision Making (Voting)**:
    - **Unanimity**: Everyone agrees.
    - **Majority**: More than 50% support.
    - **Plurality**: The largest block supports (even if < 50%).
    - **Autocratic**: One individual decides.
    - **Multivoting**: Prioritizing a long list of ideas to a manageable few.

Key outputs to recognize:
- **Requirements Documentation** (functional + nonfunctional requirements, assumptions, constraints)
- **RTM** (trace requirements through delivery and verification)

---

## 🏗️ The WBS: Foundation of Control
In the PMP world, the **WBS** follows the **100% rule**: it represents 100% of the project work (and only the project work). If it isn't in the WBS, it isn't in the project.

- **Decomposition**: Breaking deliverables into manageable components.
- **Work Packages**: The lowest level of the WBS where cost and duration can be reliably estimated (8-80 hour rule is a common guideline).
- **Control Accounts**: Management points where scope, budget, and schedule are integrated for performance reporting.
- **Planning Packages** (common in large programs): Work that is known at a high level but not decomposed yet (supports rolling wave planning).

### RTM: Requirements Traceability Matrix (Why It Matters)
The **RTM** is a table that links requirements to their origin and the deliverables/tests that satisfy them. It is a powerful defense against missed requirements and helps with compliance and audits.

| Req ID | Requirement (What) | Source (Why) | Delivered By (Where) | Verified By (How) |
| :----- | :----------------- | :----------- | :------------------- | :---------------- |
| R-01   | MFA login required | Security     | WBS 2.1 Auth Module  | UAT-SEC-05        |
| R-02   | Export to CSV      | Operations   | WBS 3.2 Reporting    | UAT-OPS-11        |

---

## 🚦 Scope Creep vs. Gold Plating
Two major risks every PM must fight:
- **Scope Creep**: The uncontrolled expansion of scope without adjustments to time or cost.
- **Gold Plating**: The team adding "extra" features that weren't requested. (Even if they are free, they are considered a waste of resources).

::: info 🛠️ 2026 Shift: Continuous Backlog Refinement
In modern practice, the Product Owner and Team perform **Backlog Refinement** (Grooming) continuously. They break down "Epics" into "User Stories" just-in-time for the next sprint, ensuring the team always works on the highest value items.
:::

---

## ✅ Acceptance Criteria vs. Definition of Done (DoD)
These get confused on the exam:
- **Acceptance Criteria**: The specific conditions a stakeholder uses to accept a deliverable/story (often unique per item).
- **Definition of Done**: The shared, non-negotiable quality checklist that applies to *every* story (coding standards, tests, documentation, review, etc.).

---

## 🔍 Validate Scope vs. Control Scope
It is crucial to distinguish between these two monitoring processes:

| Process | Goal | Who is Involved? | When? |
| :--- | :--- | :--- | :--- |
| **Validate Scope** | Formal **acceptance** of completed deliverables. | PM + Customer/Sponsor | At the end of a phase/project (or sprint review). |
| **Control Scope** | Monitoring status and managing **changes** to the scope baseline. | PM + Team | Throughout the project. |

*Note: Validate Scope is about "Acceptance". Control Quality is about "Correctness". You Control Quality **before** you Validate Scope.*

---

## 🔁 Controlling Scope Changes (Predictive vs. Agile)
- **Predictive**: Scope changes go through **Integrated Change Control** (change request → impact analysis → approval/reject → update baselines and communicate).
- **Agile**: Scope changes are managed through **backlog reprioritization**. The sprint scope is protected once the sprint starts; new work goes to the backlog for future planning.

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
  <strong>📝 Exam Insight:</strong> If the team is confused about what a specific work package requires, refer to the <strong>WBS Dictionary</strong>. If stakeholders are debating whether something is in scope, use the <strong>Scope Statement</strong> / <strong>WBS</strong>. If you need to prove where a requirement came from (or what deliverable satisfies it), use the <strong>RTM</strong>. If the team is debating whether a story is “finished,” refer to the <strong>Definition of Done</strong> and the story’s <strong>Acceptance Criteria</strong>.
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
