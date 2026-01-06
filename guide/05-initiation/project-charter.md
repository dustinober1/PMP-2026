<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 5.2 The Project Charter

**ECO Task**: Develop a common vision
**ECO Task**: Define and establish project governance

The **Project Charter** is the "Birth Certificate" of the project. It is the formal document that authorizes the project manager to exist and use company resources.

---

##  The PM's Source of Power

The Charter is not just paperwork; it is the foundation of your authority. Without an approved charter, you are just a person with an idea, not a Project Manager.

<ConceptGrid>
  <ConceptCard title="Formal Authorization">
    Sign-off from the **Sponsor** (the person providing the money/resources).
  </ConceptCard>
  <ConceptCard title="PM Appointment">
    Explicitly names the Project Manager and defines their level of authority.
  </ConceptCard>
  <ConceptCard title="Strategic Anchor">
    High-level goals, success criteria, and summary milestones.
  </ConceptCard>
  <ConceptCard title="Resource Commitment">
    Budget envelope and commitment to provide organizational resources.
  </ConceptCard>
</ConceptGrid>

---

##  The Charter as an Initiation Gate

On the exam, the charter is the "start line." It tells you:
- **The organization is committing resources**
- **You are authorized to lead**
- **Planning can begin**

### The Charter's Role in the Project Lifecycle

```
Business Need → Needs Assessment → Business Case → PROJECT CHARTER → Project Planning
                                                           ↑
                                                    AUTHORIZATION GATE
                                                    (Work legally begins here)
```

---

##  Common Inputs (What Feeds the Charter)

### Business Documents

*   **Business Case / Benefits Management Plan**: The value justification and how benefits will be measured.
*   **Agreements**: Contracts, MOUs, or SLAs. If you are doing work for an external customer, the **Contract** precedes the Charter.

<ConceptGrid>
  <ConceptCard title="Enterprise Environmental Factors (EEF)">
    **Conditions not under your control**. Examples: Market conditions, regulations, organizational culture, infrastructure.
  </ConceptCard>
  <ConceptCard title="Organizational Process Assets (OPA)">
    **Processes and knowledge bases you can use**. Examples: Templates, lessons learned, historical files, procedures.
  </ConceptCard>
</ConceptGrid>

::: tip  EEF vs. OPA Hint
If it **constrains** you (laws, culture, systems), it's an **EEF**.
If it **helps** you (templates, prior project files), it's an **OPA**.
:::

### Quick Reference: EEF vs OPA

| Factor | EEF or OPA? | Why? |
| --- | --- | --- |
| Government safety regulations | EEF | External legal constraint |
| Company's project management methodology | OPA | Internal process asset |
| Market trends affecting demand | EEF | External condition |
| Lessons learned from past projects | OPA | Corporate knowledge base |
| Organizational culture (risk averse) | EEF | Internal condition you can't change |
| Charter template from PMO | OPA | Reusable process asset |

::: warning  Exam Trap: "Start Work Immediately"
If you're asked to begin execution (hire vendors, build deliverables, spend budget) **without an approved charter**, the best next step is to **work with the sponsor to finalize and approve the charter**.
:::

---

##  Standard Charter Components

While every company has its own template, the PMP exam expects these core elements:

### Essential Charter Elements

| Element | Description | Example |
| --- | --- | --- |
| **Project Purpose** | The "Why" (linked to Business Case) | "Enable 40% faster onboarding" |
| **Success Criteria** | How we know the project succeeded | "Launch by Q3 with <5% defect rate" |
| **High-Level Risks** | Known threats identified early | "Vendor dependency, skills gap" |
| **Summary Milestone Schedule** | Major phase endpoints | "Design Complete: Feb, Go-Live: July" |
| **Pre-approved Budget** | The high-level funding envelope | "$1.2M with contingency reserve" |
| **Key Stakeholder List** | Who cares? | "Sponsor: CFO, Customer: Sales VP" |
| **Assumptions and Constraints** | The project boundaries | "Assumes SME availability; Deadline Q4" |

---

##  Agile Chartering: The "Elevator Pitch"

In Adaptive/Agile environments, the charter is often lighter and focused on **Vision**.

### Agile Vision Statement Template
```
For [target customer],
who [statement of need/problem],
the [product name] is a [product category]
that [key benefit/reason to buy].
Unlike [primary competitive alternative],
our product [key differentiation].
```

---

## Quick Review

<FlashcardGrid>
  <Flashcard front="Birth Certificate" back="Metaphor for the Project Charter; it authorizes the project." />
  <Flashcard front="Sponsor" back="The person who provides resources and signs the Charter." />
  <Flashcard front="EEF" back="Enterprise Environmental Factors; constraints you can't control (e.g., laws)." />
  <Flashcard front="OPA" back="Organizational Process Assets; things you can use (e.g., templates)." />
  <Flashcard front="PM Authority" back="Defined in the Charter; allows the PM to use company resources." />
  <Flashcard front="High-Level Risks" back="Initial threats documented in the Charter before detailed planning." />
  <Flashcard front="Agile Vision Statement" back="The core focus of an agile charter; defines target and benefit." />
  <Flashcard front="Charter vs Project Plan" back="Charter authorizes the project; Plan defines HOW it will be done." />
  <Flashcard front="Success Criteria" back="Measurable outcomes defined in the Charter to judge project success." />
  <Flashcard front="Authorization Gate" back="The point where a project is formally allowed to begin work." />
</FlashcardGrid>

---

::: tip  Exam Insight
If a Functional Manager refuses to release a resource because they "don't report to you," show them the <strong>Project Charter</strong>. This document proves you are authorized by Senior Management to request those resources.
:::
