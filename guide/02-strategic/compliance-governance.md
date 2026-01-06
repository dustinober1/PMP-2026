<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# 2.4 Compliance & Governance

**ECO Task**: Plan and manage project compliance
**ECO Task**: Define and establish project governance

Projects operate within a web of "Unwritten Rules" (Politics) and "Written Laws" (Compliance). The 2026 PMP Exam tests your ability to navigate both without crashing.

---

##  Compliance vs. Standards vs. Policy (Know the Difference)

Understanding the hierarchy of rules is critical for exam success:

<ConceptGrid>
  <ConceptCard title="Laws and Regulations">
    External, mandatory. Non-negotiable. (e.g., GDPR, OSHA, Building Codes).
  </ConceptCard>
  <ConceptCard title="Industry Standards">
    Agreed minimum practices. (e.g., ISO 27001, IEEE, PMBOK).
  </ConceptCard>
  <ConceptCard title="Organizational Policy">
    Internal rules enforceable within the organization. (e.g., Procurement thresholds).
  </ConceptCard>
  <ConceptCard title="Guidelines">
    Recommended approaches and best practices. Optional but wise.
  </ConceptCard>
</ConceptGrid>

---

::: danger  The Priority Rule
On the exam, when these conflict: **Laws and safety win. Always.** You cannot trade safety or legality for schedule or cost.
:::

---

##  The Compliance Radar
Compliance failures are **business threats**, not just risks.

<ConceptGrid>
  <ConceptCard title="Data Privacy">
    GDPR / CCPA / HIPAA. Ensure consent for customer data usage.
  </ConceptCard>
  <ConceptCard title="EHS">
    OSHA / ISO 14001. Environmental, Health, and Safety are non-negotiable.
  </ConceptCard>
  <ConceptCard title="Financial">
    SOX / AML / FCPA. Anti-bribery and accurate reporting are essential.
  </ConceptCard>
  <ConceptCard title="Codes">
    Building / Cyber / Accessibility standards dictate minimum quality.
  </ConceptCard>
</ConceptGrid>

###  Key Regulations Reference Table

| Regulation | Full Name | Focus Area | Key Requirements | Penalty |
| :-- | :-- | :-- | :-- | :-- |
| **GDPR** | General Data Protection Regulation | Data privacy (EU) | Consent, right to erasure, data portability | Up to €20M or 4% revenue |
| **CCPA/CPRA** | California Consumer Privacy Act | Data privacy (CA) | Opt-out, disclosure, data deletion | $7,500 per intentional violation |
| **HIPAA** | Health Insurance Portability Act | Healthcare data (US) | PHI protection, access controls | Up to $1.5M per violation category |
| **SOX** | Sarbanes-Oxley Act | Financial reporting | Internal controls, CEO/CFO certification | Fines + imprisonment |
| **OSHA** | Occupational Safety & Health | Workplace safety | Hazard prevention, training, reporting | $15,625 per serious violation |
| **ADA** | Americans with Disabilities Act | Accessibility | Digital and physical accessibility | Civil penalties + remediation |
| **FCPA** | Foreign Corrupt Practices Act | Anti-bribery | Prohibition of foreign official bribes | Criminal penalties |

::: warning  The Retroactive Rule
If a new law is passed in the middle of your project, you **must adopt it**, even if it wrecks your baseline. A project cannot be "successful" if it is illegal.
:::

---

##  Governance vs. Management
Who makes the call?

| Role                                | Responsibility                              | Authority                                                     |
| :---------------------------------- | :------------------------------------------ | :------------------------------------------------------------ |
| **Governance** (Steering Committee) | "We are going North." (Direction)           | Can cancel the project or approve budget increases.           |
| **Management** (Project Manager)    | "Here is the map to get North." (Execution) | Can manage the team and budget within the approved tolerance. |

###  Governance Decision Matrix

| Decision Type | Authority Level | Examples | PM's Role |
| :-- | :-- | :-- | :-- |
| **Strategic Direction** | Steering Committee / Portfolio | Continue, pivot, or stop project | Inform; recommend; execute decision |
| **Major Funding** | Sponsor / Steering Committee | >10% budget increase | Prepare business case; escalate |
| **Scope Changes** | CCB (within tolerance) or Steering | Features, requirements changes | Assess impact; facilitate decision |
| **Day-to-Day Execution** | Project Manager | Task assignments, minor adjustments | Decide and act |
| **Technical Decisions** | Technical Lead / Architect | Implementation approaches | Consult and approve |
| **Compliance Requirements** | Legal / Compliance | Regulatory interpretation | Seek guidance; implement |

---

##  Agile Governance (Adaptive Oversight)
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

::: tip  The Hybrid Truth
Most organizations use a hybrid approach: **strategic milestones** (gates) combined with **iterative delivery** within each phase. Governance still exists; it just focuses on outcomes rather than documentation.
:::

---

## Who Does What? (Governance Bodies You'll See in Questions)

<ConceptGrid>
  <ConceptCard title="Sponsor">
    Funding, business outcomes, and final escalation point.
  </ConceptCard>
  <ConceptCard title="Steering Committee">
    Strategic direction, major funding, and priority conflicts.
  </ConceptCard>
  <ConceptCard title="PMO">
    Standards, templates, process enforcement, and training.
  </ConceptCard>
  <ConceptCard title="CCB">
    Protection and evaluation of scope, schedule, and cost baselines.
  </ConceptCard>
  <ConceptCard title="Legal or Compliance">
    Regulatory interpretation and auditing of compliance.
  </ConceptCard>
</ConceptGrid>

::: tip Exam Shortcut
If the decision is about **strategy or funding**, think "steering committee / portfolio." If it is about **baseline change**, think "change control." If you need **process or templates**, think "PMO."
:::

---

## The Ethical Compass
PMI mandates four core values: **Responsibility, Respect, Fairness, and Honesty**.

### The Four Values in Action

| Value | What It Means | Exam Scenario Example |
| :-- | :-- | :-- |
| **Responsibility** | Own your decisions and actions; protect the profession | Report accurate status even when it's bad news |
| **Respect** | Value diverse perspectives; treat others with dignity | Listen to team concerns; address conflicts fairly |
| **Fairness** | Make impartial decisions; avoid favoritism | Select vendors based on merit, not relationships |
| **Honesty** | Be truthful in communications and actions | Disclose conflicts of interest; accurate reporting |

### Ethical Scenarios (Exam Favorites)

<ConceptGrid>
  <ConceptCard title="Conflict of Interest">
    Disclose the conflict and recuse yourself from the decision process.
  </ConceptCard>
  <ConceptCard title="Bribery or Gifts">
    Decline gifts or check organizational policy. When in doubt, refuse.
  </ConceptCard>
  <ConceptCard title="Status Reporting">
    Report the truth. If the project is Red, report it as Red.
  </ConceptCard>
  <ConceptCard title="Safety Violation">
    Stop the work immediately. Safety is never "mitigated."
  </ConceptCard>
</ConceptGrid>

### Bribery and Facilitation Payments

| Type | Description | PMI Position |
| :-- | :-- | :-- |
| **Bribery** | Payment to influence a decision | Absolutely prohibited |
| **Facilitation Payment** | "Grease payment" to expedite routine actions | Prohibited by PMI ethics |
| **Legitimate Gifts** | Small tokens within organizational policy | May be acceptable; check policy |
| **Entertainment** | Business meals, events | Check organizational limits; document |

::: danger Zero Tolerance
PMI has zero tolerance for bribery. Even a "facilitation payment" (grease payment) is questionable globally and strictly banned by PMI ethics. When in doubt, refuse.
:::

---

## Data Privacy & AI (Common 2026 Exam Theme)
If your project collects or uses personal data (especially for AI training), exam-safe behaviors include:

### The 5 Principles of Data Privacy

<ConceptGrid>
  <ConceptCard title="Minimize">
    Collect only what is needed for the stated purpose.
  </ConceptCard>
  <ConceptCard title="Consent">
    Obtain explicit consent and honor opt-out requirements.
  </ConceptCard>
  <ConceptCard title="Secure">
    Access control, encryption, and breach detection.
  </ConceptCard>
  <ConceptCard title="Retention">
    Do not keep data forever; follow strict deletion policies.
  </ConceptCard>
  <ConceptCard title="Document">
    Ensure traceability and audit trails for all data usage.
  </ConceptCard>
</ConceptGrid>

### AI-Specific Considerations

| Consideration | What It Means | PM Action |
| :-- | :-- | :-- |
| **Training Data Consent** | Users may not have agreed to AI use | Verify consent scope; consider synthetic data |
| **Model Explainability** | Regulations may require explanation of decisions | Plan for documentation and testing |
| **Bias Testing** | Models may perpetuate discrimination | Include fairness testing in acceptance criteria |
| **Data Residency** | Data may need to stay in specific jurisdictions | Architectural planning; cloud configuration |
| **Right to be Forgotten** | Users can request data deletion | Ensure AI models can comply |


<style>
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
</style>

---

---

## Quick Review
<FlashcardCarousel :cards="[
  { 
    front: 'Who is ultimately responsible for project compliance?', 
    back: 'The Project Manager, though they may delegate actual monitoring to specific leads.' 
  },
  { 
    front: 'What is a \'Compliance Register\'?', 
    back: 'A dedicated document tracking all legal, regulatory, and safety requirements for the project.' 
  },
  { 
    front: 'What are \'Cost of Quality\' components in compliance?', 
    back: 'Prevention (Training), Appraisal (Audits), and Failure (Fine/Lawsuits).' 
  },
  { 
    front: 'How does a Project Governance Board differ from a PMO?', 
    back: 'Governance focuses on authority and decision-making for a specific project; PMO focuses on standardization across all projects.' 
  },
  { 
    front: 'What is \'Quality Audit\' in the context of compliance?', 
    back: 'A structured, independent process to determine if project activities comply with organizational and project policies.' 
  }
]" />



