# MASTER PROMPT: PMP Exam Factory (Process Task 6 Plan and manage finance)

Use a swarm of agents for this task

## PHASE 1: INITIALIZATION & CONTEXT CRAWL

**Role:** Senior PMP Content Architect & Data Engineer.
**Objective:** Create a 50-question "Hard-Mode" practice exam for **Process Task 6: Plan and manage finance**.

**Source of Truth Files:**
You must read and extract the logic, rules, and escalation thresholds from:
### Task 6: Plan and manage finance
- `guide/06-project-planning/cost-planning.md`
- `guide/07-risk-quality/risk-management.md`
- `guide/09-monitoring/monitoring-closing.md`
- `guide/01-introduction/core-triple-constraint.md`

**ECO Mapping:**
Ensure questions are mapped to these enablers from the `eco_coverage_report.md`:

• Analyze project financial needs.
• Quantify risk and contingency financial allocations.
• Plan spend tracking throughout the project life cycle.
• Plan financial reporting.
• Anticipate future finance challenges.
• Monitor financial variations and work with the governance process.
• Manage financial reserves.

---

## PHASE 2: GENERATION (DATABASE-READY FORMAT)

Generate **50 unique, scenario-based questions** in batches.
**CRITICAL:** To support future database randomization, **DO NOT USE LETTERS (A, B, C, D)** in the rationales or scenarios.

**Formatting Instructions:**

* **Methodology Mix:** 40% Predictive, 35% Agile, 25% Hybrid.
* **Difficulty:** Level 4/5 (Analysis/Evaluation).
* **Correct Answer Logic:** Ensure the correct answer is not always the longest string.

**Question Structure:**

```markdown
### Question [N]

**Enabler:** [Enabler #] | **Methodology:** [Methodology]

**Scenario:**
[3-4 sentence complex scenario based on the local source files.]

**Question:**
What is the [BEST/FIRST/MOST IMPORTANT] action for the project manager to take?

- **Correct:** [Correct Answer Text]
- **Distractor 1:** [Plausible but incorrect action]
- **Distractor 2:** [Plausible but incorrect action]
- **Distractor 3:** [Plausible but incorrect action]

<details>
<summary>Detailed Remediation</summary>

| Aspect | Details |
| :--- | :--- |
| **Core Logic** | [Explain why the 'Correct' option is the best path forward based on governance rules.] |
| **PMI Mindset** | [The mental model tested. Use content-based references, not letters.] |
| **The Trap** | [Why 'Distractor 1' is tempting (e.g., 'This is a common reactive mistake') and why it fails.] |
| **Source Link** | [The specific local file that provided the logic for this question.] |

</details>

---

```

---

## PHASE 3: THE DISTRIBUTION & STRING AUDITOR

**Role:** Statistical Auditor.
**Task:** Review the 50 generated questions and perform the following "evening out" tasks:

1. **Length Balancing:** If the correct answer is consistently more detailed than distractors, rewrite distractors to match the length and complexity.
2. **Action Balancing:** Ensure an even split between questions where the answer is "Analyze/Assess" vs. "Execute/Implement."
3. **Verbiage Check:** Ensure no rationale refers to "Option A" or "The first choice." Use descriptors like "The choice to escalate..." or "The action of reviewing the charter..."

---

## PHASE 4: THE CLEANUP AGENT

**Role:** Final Assembler.
**Task:** Finalize the document `guide/11-exam-prep/business-task1-governance-practice.md`.

**Required Final Sections:**

1. **Topic Summary Table:** Cross-reference Question # to the 3 Enablers.
2. **Database Stats:**
* Correct Answer Length Average: [Word Count]
* Distractor Length Average: [Word Count]
* Methodology Split: [Agile/Predictive/Hybrid %]


3. **Key Takeaways:** 5-6 high-level "Governance Pro-Tips" distilled from your local files.
4. **CSS Style Block:** Include the styling for the `<details>` and `<table>` tags.

---

**BEGIN EXECUTION.**

---

Place the documents in a folder called testbank/

Commit and push all changes to the repo.