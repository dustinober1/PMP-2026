<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 5.3 Constraints and Assumptions

**ECO Task**: Plan and manage scope

Every project operates within a set of invisible walls. Identifying these early is critical for managing stakeholder expectations and project risk.

---

##  Definitions: Know the Difference

On the exam, you must distinguish between what is **Fact (Constraint)** and what is **Belief (Assumption)**.

<ConceptGrid>
  <ConceptCard title="Constraints (The Walls)">
    Limiting factors that **must** be obeyed. Not negotiable unless the sponsor changes them.
    - Fixed Deadlines
    - Approved Budgets
    - Safety Regulations
    - Physical Limits
    - Contractual Terms
  </ConceptCard>
  <ConceptCard title="Assumptions (The Foundations)">
    Factors held to be true for planning purposes without proof. Sources of risk until validated.
    - Resource Availability
    - Tool Reliability
    - Market Stability
    - Team Skill Levels
    - Vendor Performance
  </ConceptCard>
</ConceptGrid>

---

##  Common Constraint Types

| Constraint Type | Examples | Impact |
| --- | --- | --- |
| **Schedule** | Regulatory deadline, fixed launch date | Limits time available |
| **Cost/Funding** | Budget ceiling, fixed funding tranche | Limits resource acquisition |
| **Scope/Features** | Required for compliance or contract | Limits flexibility |
| **Quality/Safety** | Safety certification, zero-tolerance | Increases rigor requirements |
| **Resources** | Only 2 SMEs available, shared equipment | Limits execution capacity |
| **Technology** | Must use approved platform | Limits solution options |
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
| **Risk** | How much uncertainty is acceptable? | Lower risk tolerance → More time/cost |

---

##  Assumption Categories

<ConceptGrid>
  <ConceptCard title="Resource Assumptions">
    SME availability, team skill levels, equipment access.
  </ConceptCard>
  <ConceptCard title="Technical Assumptions">
    API functionality, system performance, integration compatibility.
  </ConceptCard>
  <ConceptCard title="Business Assumptions">
    Market conditions, customer behavior, competitor actions.
  </ConceptCard>
  <ConceptCard title="Schedule/Cost Assumptions">
    Vendor lead times, price stability, exchange rates.
  </ConceptCard>
</ConceptGrid>

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

---

## Quick Review

<FlashcardCarousel :cards="[
  { 
    front: 'Constraint', 
    back: 'A limiting factor that is a fact and non-negotiable (e.g., budget).' 
  },
  { 
    front: 'Assumption', 
    back: 'Something believed to be true for planning purposes until proven otherwise.' 
  },
  { 
    front: 'Triple Constraint', 
    back: 'The trade-off between Scope, Time, and Cost (plus Quality).' 
  },
  { 
    front: 'Assumption Log', 
    back: 'The project document used to track and validate assumptions throughout the lifecycle.' 
  },
  { 
    front: 'Assumption as Risk', 
    back: 'If an assumption is uncertain and has high impact, it should be moved to the Risk Register.' 
  },
  { 
    front: 'PESTLE', 
    back: 'Analysis framework (Political, Economic, Social, Technological, Legal, Environmental) for identifying external constraints.' 
  },
  { 
    front: 'Mandatory Dependency', 
    back: 'A \'Hard Logic\' dependency that is legally or physically required.' 
  },
  { 
    front: 'Discretionary Dependency', 
    back: 'A \'Soft Logic\' dependency based on best practices or preferred sequences.' 
  },
  { 
    front: 'Failed Assumption', 
    back: 'When an assumption is proven false, it becomes an Issue for the project manager to resolve.' 
  },
  { 
    front: 'Constraint Authority', 
    back: 'Constraints are typically set by the Sponsor or external bodies, not the PM.' 
  }
]" />

---

::: tip  2026 Focus: Virtual Constraints
- **Data Privacy (GDPR/CCPA)**: Non-negotiable legal walls
- **API Latency**: Physical constraints of global software
- **Asynchronous Time Gaps**: 12-hour zone differences
- **AI Governance**: Emerging regulations on AI usage
- **Cloud Residency**: Data sovereignty requirements
:::

---

::: tip  Exam Insight
If a planner makes a decision based on a "belief" that resources will be available, and they aren't, the root cause is a <strong>failed assumption</strong>. Never treat assumptions as facts without validation.
:::
