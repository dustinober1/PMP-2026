# 7.2 Quality Management

In the PMP exam context, **Quality** is defined as the *degree to which a set of inherent characteristics fulfills requirements*. Put simply: quality is **meeting requirements and acceptance criteria consistently** (and preventing defects before they escape).

### Two Critical Dimensions
1.  **Conformance to requirements**: Does the deliverable meet the technical specs? (e.g., "Does the bridge support 50 tons?")
2.  **Fitness for use**: Does the deliverable actually solve the customer's problem? (e.g., "Is the bridge located where people need to cross?")
    *   *Exam Note*: You need both. A product that meets specs but is unusable is a quality failure.

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

## The PMP Mental Model (Continuous Quality Loop)
Quality management is not “test at the end.” It’s a loop:

1. **Plan quality** (standards, metrics, checklists, acceptance criteria)
2. **Build quality in** (process discipline, reviews, automation, training)
3. **Verify** (inspection/testing against requirements)
4. **Fix causes, not symptoms** (root cause + continuous improvement)

---

## 🧭 Plan vs. Manage vs. Control (Know the Exam Wording)
| Concept | When | Focus | The exam is asking… |
|---|---|---|---|
| **Plan Quality** | Planning | Standards + metrics | “What quality do we need?” |
| **Manage Quality (QA)** | Executing | Process effectiveness | “Are we using the right process?” |
| **Control Quality (QC)** | Monitoring | Deliverable correctness | “Did we build it correctly?” |

::: tip 💡 Shortcut
If you see words like **audit, process analysis, ensure procedures** → think **QA (Manage Quality)**.  
If you see **inspect, test, verify deliverable** → think **QC (Control Quality)**.
:::

---

## 🏗️ QA vs. QC (Process vs. Product)
Modern project management moves from checking for errors (reactive) to preventing them (proactive).

<div class="cycle-grid">
  <div class="cycle-card proactive">
    <div class="cycle-title">Quality Assurance (QA)</div>
    <div class="cycle-subtitle">"The Process"</div>
    <p>Proactive activities aimed at <strong>preventing defects</strong> by ensuring the team follows the right procedures.</p>
    <ul>
      <li>Quality audits</li>
      <li>Process analysis / improvement</li>
      <li>Peer reviews (process-focused)</li>
    </ul>
  </div>
  <div class="cycle-card reactive">
    <div class="cycle-title">Quality Control (QC)</div>
    <div class="cycle-subtitle">"The Result"</div>
    <p>Reactive activities aimed at <strong>identifying defects</strong> in the final deliverables before they reach the customer.</p>
    <ul>
      <li>Testing</li>
      <li>Inspections</li>
      <li>Verification against acceptance criteria</li>
    </ul>
  </div>
</div>

---

## 💰 Cost of Quality (CoQ) (High-Yield Exam Topic)
CoQ = cost of **conformance** + cost of **nonconformance**.

| Category | Type | Examples | Exam takeaway |
|---|---|---|---|
| **Prevention** | Conformance | Training, standards, design reviews, automation | Cheapest way to reduce defects |
| **Appraisal** | Conformance | Testing, inspections, audits | Detects defects before release |
| **Internal failure** | Nonconformance | Rework, scrap, retest | Expensive but contained |
| **External failure** | Nonconformance | Warranty, recalls, lawsuits, reputation loss | Most expensive (customer impact) |

::: warning ⚠️ PMP pattern
When options include “train/improve process now” vs “test more at the end,” prevention usually wins unless the question explicitly says the defect is already in production/customer hands.
:::

---

## ⚖️ Quality Trade-offs
You cannot always have everything. The PM must make conscious choices:

*   **Schedule vs. Quality**: "Rushing" often leads to technical debt. *Exam Rule*: If you must rush, you usually have to cut scope to maintain quality. Cutting quality to save time is rarely the "correct" PMP answer unless clearly justified as a strategic "time-to-market" play with a plan to fix it later.
*   **Scope vs. Quality**: Better to deliver fewer features that work perfectly (High Quality) than many features that are buggy.
*   **Cost vs. Quality**: Cutting prevention costs (e.g., training) often increases failure costs (e.g., rework).

---

## 🛠️ The Quality Toolbox (7 Basic Tools)
You must know **when** to use each tool:

| Tool | Best used when you need to… |
|---|---|
| **Cause-and-effect (Fishbone/Ishikawa)** | Find **root causes** (structured brainstorming) |
| **Pareto chart** | Prioritize the “vital few” causes (80/20) |
| **Control chart** | Determine whether a process is **stable/in control** |
| **Flowchart** | Visualize process steps and find bottlenecks/hand-off errors |
| **Scatter diagram** | See correlation between variables (possible relationship) |
| **Histogram** | See distribution/spread of results (shape, variance) |
| **Checksheet** | Collect frequency data in real time (defect counts) |

### Control chart essentials (what the exam tests)
- **Control limits (UCL/LCL)**: process stability limits (statistical)  
- **Specification limits**: customer/requirement limits (contractual)  
- A process can be **in control** but still **out of specification** (stable, but wrong target)
- A “run” (e.g., 7+ points on one side of the mean) suggests **special cause** investigation

---

## 🔍 Root Cause Analysis (Fix Causes, Not Symptoms)
If defects repeat, you need to find *why*.

- **5 Whys**: ask “why?” until you reach a controllable process cause
- **Fishbone**: categorize causes (People/Process/Tools/Environment, etc.)
- **Corrective action**: change the process so the defect doesn’t recur

---

## 🔄 Agile Quality: DoD & TDD
In Agile, quality isn't an "end-of-sprint" activity; it's continuous.
- **Definition of Done (DoD)**: The non-negotiable quality checklist for every user story.
- **Acceptance Criteria**: what “done” means for the customer (story-level)
- **Test-Driven Development (TDD)**: write the test *before* the code to clarify requirements
- **Continuous Integration (CI)**: integrate and test frequently to reduce “late surprise” defects

### User Feedback as Quality Signal
In Agile, "fitness for use" is validated through:
*   **Sprint Reviews**: Demonstrating working software to get direct feedback.
*   **Retrospectives**: The team discusses "process quality" (how we work) and improves it for the next sprint.


::: tip 🧰 Templates
Use [7.4 Tools & Templates](./toolkit) for a starter DoD checklist and quick “which tool do I use?” reference.
:::

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
  <strong>📝 Exam Insight:</strong> If defects are recurring, the FIRST step is <strong>Root Cause Analysis</strong> (often <strong>Fishbone + 5 Whys</strong>). Fixing symptoms (e.g., “test more”) without fixing causes leads to rework and higher Cost of Quality.
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

---

## ✅ Exam Scenarios: “First Action” Clues
| If the question says… | Best first move is usually… |
|---|---|
| “Audit / ensure the process is followed” | **QA (Manage Quality)** |
| “Test/inspect the deliverable” | **QC (Control Quality)** |
| “Recurring defects / defect trend” | **Root cause analysis** |
| “Process instability / inconsistent results” | **Control chart investigation** |
| “Most frequent defect types” | **Pareto chart** |
