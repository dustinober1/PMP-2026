# 2.3 Compliance & Governance

**ECO Task**: Plan and manage project compliance
**ECO Task**: Support organizational governance frameworks

Projects operate within a web of "Unwritten Rules" (Politics) and "Written Laws" (Compliance). The 2026 PMP Exam tests your ability to navigate both without crashing.

---

## 📚 Compliance vs. Standards vs. Policy (Know the Difference)

Understanding the hierarchy of rules is critical for exam success:

<div class="rules-hierarchy">
  <div class="rule-tier law">
    <div class="tier-label">Highest Authority</div>
    <div class="tier-title">🏛️ Laws & Regulations</div>
    <p>External, mandatory. Non-negotiable. Failure = legal penalties.</p>
    <div class="tier-examples">GDPR, SOX, OSHA, HIPAA, Building Codes, Environmental Laws</div>
  </div>
  
  <div class="rule-tier standard">
    <div class="tier-title">📋 Industry Standards</div>
    <p>Agreed minimum practices. May be optional until adopted by contract or regulation.</p>
    <div class="tier-examples">ISO 27001, IEEE, PMBOK, ITIL, NIST Cybersecurity Framework</div>
  </div>
  
  <div class="rule-tier policy">
    <div class="tier-title">📝 Organizational Policy</div>
    <p>Internal rules. Enforceable within the organization.</p>
    <div class="tier-examples">Procurement thresholds, approval paths, code of conduct, travel policy</div>
  </div>
  
  <div class="rule-tier guideline">
    <div class="tier-label">Lowest Priority</div>
    <div class="tier-title">💡 Guidelines & Best Practices</div>
    <p>Recommended approaches. Optional but wise to follow.</p>
    <div class="tier-examples">Team conventions, style guides, suggested templates</div>
  </div>
</div>

::: danger ⚠️ The Priority Rule
On the exam, when these conflict: **Laws and safety win. Always.** You cannot trade safety or legality for schedule or cost.
:::

---

## ⚖️ The Compliance Radar
Compliance failures are **business threats**, not just risks.

<div class="compliance-grid">
  <div class="comp-card">
    <div class="comp-icon">🔐</div>
    <div class="comp-title">Data Privacy</div>
    <p><strong>GDPR / CCPA / HIPAA</strong>. If you touch customer data (especially for AI training), you must have consent.</p>
    <div class="penalty">Penalty: Up to 4% of annual revenue (GDPR)</div>
  </div>
  <div class="comp-card">
    <div class="comp-icon">🏭</div>
    <div class="comp-title">EHS</div>
    <p><strong>OSHA / ISO 14001</strong>. Environmental, Health, and Safety regulations are non-negotiable. Safety > Schedule.</p>
    <div class="penalty">Penalty: Criminal liability; project shutdown</div>
  </div>
  <div class="comp-card">
    <div class="comp-icon">📊</div>
    <div class="comp-title">Financial</div>
    <p><strong>SOX / AML / FCPA</strong>. Anti-bribery and accurate financial reporting. "Cooking the books" is an automatic fail.</p>
    <div class="penalty">Penalty: Executive imprisonment; massive fines</div>
  </div>
  <div class="comp-card">
    <div class="comp-icon">🏗️</div>
    <div class="comp-title">Codes</div>
    <p><strong>Building / Cyber / Accessibility</strong>. Technical standards dictate minimum quality and safety.</p>
    <div class="penalty">Penalty: Cannot deploy/occupy; rework required</div>
  </div>
</div>

### 📋 Key Regulations Reference Table

| Regulation | Full Name | Focus Area | Key Requirements | Penalty |
| :-- | :-- | :-- | :-- | :-- |
| **GDPR** | General Data Protection Regulation | Data privacy (EU) | Consent, right to erasure, data portability | Up to €20M or 4% revenue |
| **CCPA/CPRA** | California Consumer Privacy Act | Data privacy (CA) | Opt-out, disclosure, data deletion | $7,500 per intentional violation |
| **HIPAA** | Health Insurance Portability Act | Healthcare data (US) | PHI protection, access controls | Up to $1.5M per violation category |
| **SOX** | Sarbanes-Oxley Act | Financial reporting | Internal controls, CEO/CFO certification | Fines + imprisonment |
| **OSHA** | Occupational Safety & Health | Workplace safety | Hazard prevention, training, reporting | $15,625 per serious violation |
| **ADA** | Americans with Disabilities Act | Accessibility | Digital and physical accessibility | Civil penalties + remediation |
| **FCPA** | Foreign Corrupt Practices Act | Anti-bribery | Prohibition of foreign official bribes | Criminal penalties |

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

### 📊 Governance Decision Matrix

| Decision Type | Authority Level | Examples | PM's Role |
| :-- | :-- | :-- | :-- |
| **Strategic Direction** | Steering Committee / Portfolio | Continue, pivot, or stop project | Inform; recommend; execute decision |
| **Major Funding** | Sponsor / Steering Committee | >10% budget increase | Prepare business case; escalate |
| **Scope Changes** | CCB (within tolerance) or Steering | Features, requirements changes | Assess impact; facilitate decision |
| **Day-to-Day Execution** | Project Manager | Task assignments, minor adjustments | Decide and act |
| **Technical Decisions** | Technical Lead / Architect | Implementation approaches | Consult and approve |
| **Compliance Requirements** | Legal / Compliance | Regulatory interpretation | Seek guidance; implement |

---

## 🔄 Agile Governance (Adaptive Oversight)
Governance does not go away in Agile; it changes shape.

### Traditional vs. Agile Governance

| Aspect | Traditional Governance | Agile Governance |
| :-- | :-- | :-- |
| **Review Mechanism** | Phase Gates | System Demos & Retrospectives |
| **What's Reviewed** | Documents, plans, reports | Working software, actual outcomes |
| **Evidence of Progress** | Gantt chart, milestone reports | Burndown charts, velocity, deployed features |
| **Decision Timing** | At predetermined gates | Continuous; at sprint boundaries |
| **Adaptation** | Formal change control | Built into the process |

### Agile Governance Principles

*   **Instead of "Phase Gates":** We have **System Demos** and **Retrospectives**
*   **Instead of "Detailed Plans":** We govern against the **Product Vision** and **Roadmap**
*   **Empirical Control**: Decisions are made based on observed data (working software), not predicted data (Gantt charts)
*   **Trust-Based**: Teams have latitude to self-organize within strategic guardrails

::: tip 💡 The Hybrid Truth
Most organizations use a hybrid approach: **strategic milestones** (gates) combined with **iterative delivery** within each phase. Governance still exists; it just focuses on outcomes rather than documentation.
:::

---

## 🧭 Who Does What? (Governance Bodies You'll See in Questions)

<div class="governance-bodies">
  <div class="gov-body sponsor">
    <div class="gov-icon">👔</div>
    <div class="gov-name">Sponsor</div>
    <div class="gov-focus">Funding, business outcomes</div>
    <ul>
      <li>Approves charter</li>
      <li>Provides funding</li>
      <li>Champions the project</li>
      <li>Removes political obstacles</li>
      <li>Final escalation point</li>
    </ul>
  </div>
  
  <div class="gov-body steering">
    <div class="gov-icon">🏛️</div>
    <div class="gov-name">Steering Committee</div>
    <div class="gov-focus">Strategic direction</div>
    <ul>
      <li>Continue/pivot/stop decisions</li>
      <li>Major funding decisions</li>
      <li>Cross-project priority conflicts</li>
      <li>Strategic course corrections</li>
    </ul>
  </div>
  
  <div class="gov-body pmo">
    <div class="gov-icon">📋</div>
    <div class="gov-name">PMO</div>
    <div class="gov-focus">Standards, templates, reporting</div>
    <ul>
      <li>Enforces process</li>
      <li>Supports governance</li>
      <li>Provides templates</li>
      <li>Methodology guidance</li>
    </ul>
  </div>
  
  <div class="gov-body ccb">
    <div class="gov-icon">🔄</div>
    <div class="gov-name">CCB</div>
    <div class="gov-focus">Baseline changes</div>
    <ul>
      <li>Approves/rejects change requests</li>
      <li>Protects scope, schedule, cost baselines</li>
      <li>Evaluates impact of changes</li>
    </ul>
  </div>
  
  <div class="gov-body legal">
    <div class="gov-icon">⚖️</div>
    <div class="gov-name">Legal / Compliance</div>
    <div class="gov-focus">Regulatory interpretation</div>
    <ul>
      <li>Confirms requirements</li>
      <li>Audits compliance</li>
      <li>Handles escalations</li>
      <li>Contract review</li>
    </ul>
  </div>
</div>

::: tip 💡 Exam Shortcut
If the decision is about **strategy or funding**, think "steering committee / portfolio." If it is about **baseline change**, think "change control." If you need **process or templates**, think "PMO."
:::

---

## 🧩 The Ethical Compass
PMI mandates four core values: **Responsibility, Respect, Fairness, and Honesty**.

### The Four Values in Action

| Value | What It Means | Exam Scenario Example |
| :-- | :-- | :-- |
| **Responsibility** | Own your decisions and actions; protect the profession | Report accurate status even when it's bad news |
| **Respect** | Value diverse perspectives; treat others with dignity | Listen to team concerns; address conflicts fairly |
| **Fairness** | Make impartial decisions; avoid favoritism | Select vendors based on merit, not relationships |
| **Honesty** | Be truthful in communications and actions | Disclose conflicts of interest; accurate reporting |

### 🚨 Ethical Scenarios (Exam Favorites)

<div class="ethics-scenarios">
  <div class="ethics-card">
    <div class="scenario-title">Conflict of Interest</div>
    <p><strong>Situation:</strong> You own stock in a vendor being considered for the project.</p>
    <p><strong>Wrong:</strong> Participate in the selection but try to be fair.</p>
    <p><strong>Right:</strong> <strong>Disclose</strong> the conflict and <strong>recuse</strong> yourself from the selection process.</p>
  </div>
  
  <div class="ethics-card">
    <div class="scenario-title">Bribery / Gifts</div>
    <p><strong>Situation:</strong> A vendor offers you expensive tickets to a sporting event.</p>
    <p><strong>Wrong:</strong> Accept them because "it's just hospitality."</p>
    <p><strong>Right:</strong> <strong>Decline</strong> or check organizational gift policy. When in doubt, refuse.</p>
  </div>
  
  <div class="ethics-card">
    <div class="scenario-title">Status Reporting</div>
    <p><strong>Situation:</strong> The project is behind schedule, but your sponsor prefers "green" reports.</p>
    <p><strong>Wrong:</strong> Report green to keep the sponsor happy.</p>
    <p><strong>Right:</strong> Report the truth. If the project is Red, <strong>report Red</strong>.</p>
  </div>
  
  <div class="ethics-card">
    <div class="scenario-title">Safety Violation</div>
    <p><strong>Situation:</strong> A team member is cutting safety corners to meet a deadline.</p>
    <p><strong>Wrong:</strong> Note it in the risk register and continue.</p>
    <p><strong>Right:</strong> <strong>Stop the work immediately.</strong> Safety violations are never "mitigated."</p>
  </div>
</div>

### 💰 Bribery and Facilitation Payments

| Type | Description | PMI Position |
| :-- | :-- | :-- |
| **Bribery** | Payment to influence a decision | Absolutely prohibited |
| **Facilitation Payment** | "Grease payment" to expedite routine actions | Prohibited by PMI ethics |
| **Legitimate Gifts** | Small tokens within organizational policy | May be acceptable; check policy |
| **Entertainment** | Business meals, events | Check organizational limits; document |

::: danger 🚨 Zero Tolerance
PMI has zero tolerance for bribery. Even a "facilitation payment" (grease payment) is questionable globally and strictly banned by PMI ethics. When in doubt, refuse.
:::

---

## 🔐 Data Privacy & AI (Common 2026 Exam Theme)
If your project collects or uses personal data (especially for AI training), exam-safe behaviors include:

### The 5 Principles of Data Privacy

<div class="privacy-principles">
  <div class="principle">
    <div class="principle-icon">📉</div>
    <div class="principle-name">Minimize</div>
    <p>Collect only what is needed for the stated purpose</p>
  </div>
  <div class="principle">
    <div class="principle-icon">✅</div>
    <div class="principle-name">Consent</div>
    <p>Obtain explicit consent; honor opt-out where required</p>
  </div>
  <div class="principle">
    <div class="principle-icon">🔒</div>
    <div class="principle-name">Secure</div>
    <p>Access control, encryption, logging, breach detection</p>
  </div>
  <div class="principle">
    <div class="principle-icon">⏰</div>
    <div class="principle-name">Retention</div>
    <p>Do not keep data forever "just in case"; have deletion policies</p>
  </div>
  <div class="principle">
    <div class="principle-icon">📋</div>
    <div class="principle-name">Document</div>
    <p>Traceability to requirements and approvals; audit trails</p>
  </div>
</div>

### 🤖 AI-Specific Considerations

| Consideration | What It Means | PM Action |
| :-- | :-- | :-- |
| **Training Data Consent** | Users may not have agreed to AI use | Verify consent scope; consider synthetic data |
| **Model Explainability** | Regulations may require explanation of decisions | Plan for documentation and testing |
| **Bias Testing** | Models may perpetuate discrimination | Include fairness testing in acceptance criteria |
| **Data Residency** | Data may need to stay in specific jurisdictions | Architectural planning; cloud configuration |
| **Right to be Forgotten** | Users can request data deletion | Ensure AI models can comply |

<style>
.rules-hierarchy {
  margin: 1.5rem 0;
}

.rule-tier {
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.law { background: rgba(239, 68, 68, 0.15); border-left: 4px solid #ef4444; }
.standard { background: rgba(249, 115, 22, 0.15); border-left: 4px solid #f97316; }
.policy { background: rgba(234, 179, 8, 0.15); border-left: 4px solid #eab308; }
.guideline { background: rgba(34, 197, 94, 0.15); border-left: 4px solid #22c55e; }

.tier-label {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}

.tier-title {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.rule-tier p {
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
}

.tier-examples {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

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
  margin: 0 0 0.75rem 0;
  color: var(--vp-c-text-2);
}

.penalty {
  font-size: 0.75rem;
  color: #ef4444;
  font-weight: 600;
}

.governance-bodies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.gov-body {
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  text-align: center;
}

.gov-body.sponsor { border-top: 4px solid #6366f1; }
.gov-body.steering { border-top: 4px solid #8b5cf6; }
.gov-body.pmo { border-top: 4px solid #3b82f6; }
.gov-body.ccb { border-top: 4px solid #10b981; }
.gov-body.legal { border-top: 4px solid #f59e0b; }

.gov-icon { font-size: 1.5rem; margin-bottom: 0.25rem; }
.gov-name { font-weight: 700; margin-bottom: 0.25rem; }
.gov-focus { font-size: 0.75rem; color: var(--vp-c-text-2); margin-bottom: 0.75rem; }
.gov-body ul { text-align: left; padding-left: 1.25rem; margin: 0; font-size: 0.8rem; }
.gov-body li { margin-bottom: 0.25rem; }

.ethics-scenarios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.ethics-card {
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
}

.scenario-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.75rem;
}

.ethics-card p {
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
}

.privacy-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.principle {
  text-align: center;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.principle-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
.principle-name { font-weight: 700; margin-bottom: 0.5rem; color: var(--vp-c-brand); }
.principle p { font-size: 0.8rem; margin: 0; color: var(--vp-c-text-2); }
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> You discover a team member is cutting safety corners to meet a deadline. What do you do? <strong>Stop the work immediately.</strong> Safety violations are never "mitigated"; they are "avoided."
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



