# 5.3 Constraints & Assumptions

Every project operates within a set of invisible walls. Identifying these early is critical for managing stakeholder expectations and project risk.

---

## 🏗️ Definitions: Know the Difference
On the exam, you must distinguish between what is **Fact (Constraint)** and what is **Belief (Assumption)**.

<div class="ca-grid">
  <div class="ca-card constraint">
    <div class="ca-title">Constraints</div>
    <div class="ca-subtitle">"The Walls"</div>
    <p>Limiting factors that <strong>must</strong> be obeyed. They are not negotiable.</p>
    <ul>
      <li>Fixed Deadlines</li>
      <li>Approved Budgets</li>
      <li>Safety Regulations</li>
      <li>Physical Limits</li>
    </ul>
  </div>
  <div class="ca-card assumption">
    <div class="ca-title">Assumptions</div>
    <div class="ca-subtitle">"The Foundations"</div>
    <p>Factors held to be true for planning purposes without proof.</p>
    <ul>
      <li>Resource Availability</li>
      <li>Tool Reliability</li>
      <li>Market Stability</li>
      <li>Team Skill Levels</li>
    </ul>
  </div>
</div>

---

## 🧱 Common Constraint Types (Exam-Friendly)
Constraints can come from almost anywhere. When you see these in scenarios, treat them as **non-negotiable** unless the sponsor changes them.

| Constraint Type | Examples |
| --- | --- |
| **Schedule** | Regulatory deadline, fixed launch date, seasonal window |
| **Cost/Funding** | Budget ceiling, fixed funding tranche, cost cap in a grant |
| **Scope/Features** | Must include a specific capability for compliance or contract |
| **Quality/Safety** | Safety certification standards, zero-tolerance defect areas |
| **Resources** | Only 2 SMEs available, shared equipment, union rules |
| **Technology/Architecture** | Must use approved platform, data residency requirements |

::: tip 🧠 Exam Pattern
If a stakeholder asks you to “just change the deadline” or “just add budget,” your best next step is usually to **analyze impacts** and **escalate to the sponsor** (because constraints are set by authority, not by the PM).
:::

---

## 🚦 Managing the Log
Both are documented in the **Assumption Log**, which is created during initiation.

1.  **Assumptions are Risk Sources**: Until validated, every assumption is a potential risk.
2.  **Constraints Set the Sandbox**: They define boundaries for scope/schedule/cost/quality decisions.
3.  **Validate, Don’t Hope**: Put a date/owner on assumptions and actively confirm them.
4.  **Promote Quickly**:
    - If an assumption is uncertain and could harm outcomes → document it as a **risk** (with response).
    - If an assumption is proven false and work is impacted → it becomes an **issue** to resolve now.

### A Simple Assumption Log Template
| Field | What to Capture |
| --- | --- |
| **Statement** | “The vendor can deliver the API by July 15.” |
| **Type** | Assumption or Constraint |
| **Owner** | Who validates/monitors it |
| **Validation Date** | When you will confirm it (not “someday”) |
| **Impact if False** | Cost/schedule/scope/quality consequences |
| **Response** | Fallback/contingency (what you’ll do if it fails) |
| **Status** | Open → Validated → Retired / Invalid |

::: info 🛠️ 2026 Focus: Virtual Constraints
In 2026, we add **Digital Constraints**:
- **Data Privacy (GDPR/CCPA)**: Non-negotiable legal walls.
- **API Latency**: Physical constraints of modern global software.
- **Asynchronous Time Gaps**: The limitation of working across 12-hour zone differences.
:::

<style>
.ca-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.ca-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.ca-title {
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.ca-subtitle {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.ca-card p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.ca-card ul {
  padding-left: 1.25rem;
  font-size: 0.85rem;
}

.constraint { border-top: 4px solid #ef4444; }
.assumption { border-top: 4px solid #3b82f6; }

.constraint .ca-title { color: #ef4444; }
.assumption .ca-title { color: #3b82f6; }
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a planner makes a decision based on a "belief" that resources will be available, and they aren't, the root cause is a <strong>failed assumption</strong>. Never treat assumptions as facts without validation.
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
