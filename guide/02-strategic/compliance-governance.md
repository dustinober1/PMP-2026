# 2.3 Compliance & Governance

Projects operate within a web of "Unwritten Rules" (Politics) and "Written Laws" (Compliance). The 2026 PMP Exam tests your ability to navigate both without crashing.

---

## 📚 Compliance vs. Standards vs. Policy (Know the Difference)
- **Law / regulation**: External, mandatory (e.g., privacy regulations, safety requirements).
- **Standard**: Agreed minimum practices (industry, security, quality). May be optional until adopted by contract or regulation.
- **Organizational policy**: Internal rules (procurement thresholds, approval paths, code of conduct).

On the exam, when these conflict: **laws and safety win**.

## ⚖️ The Compliance Radar
Compliance failures are **business threats**, not just risks.

<div class="compliance-grid">
  <div class="comp-card">
    <div class="comp-icon">🔐</div>
    <div class="comp-title">Data Privacy</div>
    <p><strong>GDPR / CCPA</strong>. If you touch customer data (especially for AI training), you must have consent.</p>
  </div>
  <div class="comp-card">
    <div class="comp-icon">🏭</div>
    <div class="comp-title">EHS</div>
    <p><strong>OSHA / ISO 14001</strong>. Environmental, Health, and Safety regulations are non-negotiable. Safety > Schedule.</p>
  </div>
  <div class="comp-card">
    <div class="comp-icon">📊</div>
    <div class="comp-title">Financial</div>
    <p><strong>SOX / AML</strong>. Anti-bribery and accurate financial reporting. "Cooking the books" is an automatic fail.</p>
  </div>
  <div class="comp-card">
    <div class="comp-icon">🏗️</div>
    <div class="comp-title">Codes</div>
    <p><strong>Building / Cyber</strong>. Technical standards (IEEE, Building Codes) that dictate minimum quality.</p>
  </div>
</div>

::: warning ⚠️ The Retroactive Rule
If a new law is passed in the middle of your project, you **must adopt it**, even if it wrecks your baseline. A project cannot be "successful" if it is illegal.
:::

---

## 🏛️ Governance vs. Management
Who makes the call?

| Role                                | Responsibility                              | Authority                                                     |
| :---------------------------------- | :------------------------------------------ | :------------------------------------------------------------ |
| **Governance** (Steering Committee) | "We are going North." (Direction)           | Can cancel the project or approve budget increases.           |
| **Management** (Project Manager)    | "Here is the map to get North." (Execution) | Can manage the team and budget within the approved tolerance. |

---

## 🔄 Agile Governance (Adaptive Oversight)
Governance does not go away in Agile; it changes shape.
*   **Instead of "Phase Gates":** We have **System Demos** and **Retrospectives**.
*   **Instead of "Detailed Plans":** We govern against the **Product Vision** and **Roadmap**.
*   **Empirical Control**: Decisions are made based on observed data (working software), not predicted data (Gantt charts).

---

## 🧭 Who Does What? (Governance Bodies You’ll See in Questions)
| Group / role | Typical focus | Typical authority |
| :-- | :-- | :-- |
| **Sponsor** | Funding, business outcomes | Approves charter; escalations |
| **Steering committee** | Strategic direction | Continue/pivot/stop; major funding decisions |
| **PMO** | Standards, templates, reporting | Enforces process; supports governance |
| **CCB (Change Control Board)** | Baseline changes | Approves/rejects change requests (scope/schedule/cost) |
| **Legal / Compliance** | Regulatory interpretation | Confirms requirements; audits; escalations |

::: tip 💡 Exam Shortcut
If the decision is about **strategy or funding**, think “steering committee / portfolio.” If it is about **baseline change**, think “change control.”
:::

---

## 🧩 The Ethical Compass
PMI mandates four core values: **Responsibility, Respect, Fairness, and Honesty**.

*   **Conflict of Interest**: If you own stock in a vendor, you must **Disclose** it and recuse yourself from the selection process.
*   **Bribery**: Zero tolerance. Even a "facilitation payment" (grease payment) is questionable globally and strictly banned by PMI ethics.
*   **Truth**: Never lie about project status (The "User-friendly" Traffic Light). If the project is Red, report Red.

---

## 🔐 Data Privacy & AI (Common 2026 Exam Theme)
If your project collects or uses personal data (especially for AI training), exam-safe behaviors include:
- **Minimize** data collection (collect only what is needed)
- **Obtain consent** (and honor opt-out where required)
- **Secure** data (access control, encryption, logging)
- **Control retention** (do not keep data forever “just in case”)
- **Document** decisions (traceability to requirements and approvals)

<style>
.compliance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.comp-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  text-align: center;
}

.comp-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.comp-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.comp-card p {
  font-size: 0.9rem;
  margin: 0;
  color: var(--vp-c-text-2);
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> You discover a team member is cutting safety corners to meet a deadline. What do you do? **Stop the work immediately.** Safety violations are never "mitigated"; they are "avoided."
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
