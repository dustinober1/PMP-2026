# 5.3 Constraints & Assumptions

**ECO Task**: Plan and manage scope

Every project operates within a set of invisible walls. Identifying these early is critical for managing stakeholder expectations and project risk.

---

##  Definitions: Know the Difference

On the exam, you must distinguish between what is **Fact (Constraint)** and what is **Belief (Assumption)**.

<div class="ca-grid">
  <div class="ca-card constraint">
    <div class="ca-title">Constraints</div>
    <div class="ca-subtitle">"The Walls"</div>
    <p>Limiting factors that <strong>must</strong> be obeyed. They are not negotiable unless the sponsor changes them.</p>
    <ul>
      <li>Fixed Deadlines</li>
      <li>Approved Budgets</li>
      <li>Safety Regulations</li>
      <li>Physical Limits</li>
      <li>Contractual Terms</li>
    </ul>
  </div>
  <div class="ca-card assumption">
    <div class="ca-title">Assumptions</div>
    <div class="ca-subtitle">"The Foundations"</div>
    <p>Factors held to be true for planning purposes without proof. They are risk sources until validated.</p>
    <ul>
      <li>Resource Availability</li>
      <li>Tool Reliability</li>
      <li>Market Stability</li>
      <li>Team Skill Levels</li>
      <li>Vendor Performance</li>
    </ul>
  </div>
</div>

---

##  Common Constraint Types

| Constraint Type | Examples | Impact |
| --- | --- | --- |
| **Schedule** | Regulatory deadline, fixed launch date, seasonal window | Limits time available |
| **Cost/Funding** | Budget ceiling, fixed funding tranche, grant cap | Limits resource acquisition |
| **Scope/Features** | Must include capability for compliance or contract | Limits flexibility |
| **Quality/Safety** | Safety certification, zero-tolerance defect areas | Increases rigor requirements |
| **Resources** | Only 2 SMEs available, shared equipment, union rules | Limits execution capacity |
| **Technology** | Must use approved platform, data residency requirements | Limits solution options |
| **Legal/Regulatory** | GDPR, HIPAA, industry regulations | Non-negotiable compliance |

::: tip  Exam Pattern
If a stakeholder asks to "just change the deadline," your best next step is to **analyze impacts** and **escalate to the sponsor** (constraints are set by authority, not by the PM).
:::

---

##  The Triple Constraint (and Beyond)

The classic model represents core trade-offs:

| Constraint | Question | Trade-off |
| --- | --- | --- |
| **Scope** | What are we delivering? | More scope → More time/cost |
| **Time** | When must it be done? | Less time → Cut scope or add cost |
| **Cost** | What's the budget? | Less money → Reduce scope or extend time |
| **Quality** | How good does it need to be? | Higher quality → More time/cost |
| **Resources** | Who/what is available? | Limited resources → Adjust scope/time |
| **Risk** | How much uncertainty acceptable? | Lower risk tolerance → More time/cost |

### Constraint Flexibility Analysis

| Flexibility | Meaning | Example |
| --- | --- | --- |
| **Fixed** | Absolutely cannot change | Regulatory compliance deadline |
| **Firm** | Very difficult to change | Contract price |
| **Flexible** | Adjustable with approval | Scope features |
| **Open** | Team's decision | Technical approach |

---

##  PESTLE Analysis for External Constraints

**PESTLE** helps identify external factors that may constrain your project:

| Factor | Focus Areas |
| --- | --- |
| **P**olitical | Government policies, trade regulations, political stability |
| **E**conomic | Interest rates, inflation, exchange rates, labor costs |
| **S**ocial | Demographics, cultural norms, consumer behaviors |
| **T**echnological | Innovation rate, automation, technology change pace |
| **L**egal | Employment law, health & safety, data privacy |
| **E**nvironmental | Climate, sustainability requirements, carbon targets |

---

##  Assumption Categories

### By Source

| Category | Examples |
| --- | --- |
| **Resource** | SME availability, team skill levels, equipment access |
| **Technical** | API functionality, system performance, integration compatibility |
| **Business** | Market conditions, customer behavior, competitor actions |
| **Schedule** | Vendor lead times, approval turnaround, no major holidays |
| **Cost** | Price stability, exchange rates, no scope creep |

### By Risk Level

| Risk Level | Characteristics | Action |
| --- | --- | --- |
| **High** | Low confidence, high impact if wrong | Validate immediately; develop contingency |
| **Medium** | Moderate confidence or impact | Monitor closely; prepare alternatives |
| **Low** | High confidence, low impact | Document; periodic review |

---

##  Managing the Assumption Log

### The Assumption Lifecycle

```
Identified → Documented → Assigned Owner → Validated → Status Updated
     ↓                                          ↓
 If uncertain                              If valid → Closed
 → Register as Risk                        If invalid → Issue/Risk
```

### Key Principles

1. **Assumptions are Risk Sources**: Until validated, every assumption is a potential risk.
2. **Constraints Set the Sandbox**: They define boundaries for decisions.
3. **Validate, Don't Hope**: Put a date/owner on assumptions and actively confirm them.
4. **Promote Quickly**: Uncertain assumption → Risk. Failed assumption → Issue.

### Assumption Log Template

| Field | What to Capture | Example |
| --- | --- | --- |
| **ID** | Unique identifier | ASM-001 |
| **Statement** | Clear description | "Vendor delivers API by July 15" |
| **Owner** | Who validates it | John Smith |
| **Validation Date** | When to confirm | April 30, 2026 |
| **Impact if False** | Consequences | "6-week delay, $50K cost" |
| **Response/Fallback** | What to do if it fails | "Engage backup vendor" |
| **Status** | Current state | Open / Validated / Invalid |

---

##  Assumption Analysis Techniques

### Priority Matrix

| | HIGH IMPACT | LOW IMPACT |
| --- | --- | --- |
| **LOW CONFIDENCE** | Validate Immediately | Monitor Closely |
| **HIGH CONFIDENCE** | Validate First | Document & Review |

### Converting Assumptions to Risks

**Assumption:** "The vendor can deliver the API by July 15"

**Converted Risk:**
- **Statement:** "If vendor fails to deliver API by July 15, then schedule slips 6 weeks and costs $50K."
- **Probability:** 30%
- **Impact:** High
- **Response:** Backup vendor; contract penalties

---

##  Dependencies: The Third Category

| Type | Description | Example |
| --- | --- | --- |
| **Mandatory** | Legally required | Building permit before construction |
| **Discretionary** | Best practices | Testing before deployment |
| **External** | Depends on external party | Vendor delivery, regulatory approval |
| **Internal** | Depends on other project work | Design before development |

---

::: info  2026 Focus: Virtual Constraints
- **Data Privacy (GDPR/CCPA)**: Non-negotiable legal walls
- **API Latency**: Physical constraints of global software
- **Asynchronous Time Gaps**: 12-hour zone differences
- **AI Governance**: Emerging regulations on AI usage
- **Cloud Residency**: Data sovereignty requirements
:::

---

##  Practical Scenarios

### Scenario 1: New Regulation
**Situation:** A new data privacy law takes effect July 1. Your product must comply.
**Classification:** **Constraint** (Legal) - Non-negotiable deadline

### Scenario 2: Vendor Promise
**Situation:** Vendor says they'll deliver API by July 15, but contract isn't signed.
**Classification:** **Assumption** - Believed true but not validated

### Scenario 3: Resource Availability
**Situation:** Sponsor says lead architect will be available 50% of time.
**Classification:** **Assumption** - Verbal commitment, could change

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
}
.ca-card p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
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
  <strong> Exam Insight:</strong> If a planner makes a decision based on a "belief" that resources will be available, and they aren't, the root cause is a <strong>failed assumption</strong>. Never treat assumptions as facts without validation.
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
