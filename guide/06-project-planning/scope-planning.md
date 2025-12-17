---
title: 6.1 – Scope Planning
description: Defining and managing what the project will deliver
---

# 6.1 – Scope Planning

## 6.1.1 Introduction

Scope planning defines what is—and isn't—included in the project. Clear scope management prevents scope creep, ensures stakeholder alignment, and provides the foundation for schedule and cost planning.

::: tip Key Insight
**Scope = Work required to deliver the product**. Product scope is the features of the deliverable. Project scope is the work required to create those features.
:::

---

## 6.1.2 Requirements Collection

### What Are Requirements?

Requirements are conditions or capabilities that the project must satisfy. They come from:

- Stakeholder needs and expectations
- Standards and regulations
- Organizational policies
- Contractual obligations

### Types of Requirements

| Type               | Description                 | Example                         |
| ------------------ | --------------------------- | ------------------------------- |
| **Business**       | Why the project exists      | "Reduce processing time by 30%" |
| **Stakeholder**    | What stakeholders need      | "Users need mobile access"      |
| **Solution**       | Technical and non-technical | "System must handle 1000 users" |
| **Functional**     | What the product does       | "Calculate tax automatically"   |
| **Non-functional** | How the product performs    | "Response time < 2 seconds"     |
| **Transition**     | Moving to new state         | "Data migration from legacy"    |

### Requirements Collection Techniques

| Technique                 | Description               | Best For                      |
| ------------------------- | ------------------------- | ----------------------------- |
| **Interviews**            | One-on-one discussions    | Detailed exploration          |
| **Focus Groups**          | Group discussions         | Diverse perspectives          |
| **Questionnaires**        | Written surveys           | Large groups, remote          |
| **Facilitated Workshops** | Structured group sessions | Building consensus            |
| **Observation**           | Watching current work     | Understanding actual practice |
| **Prototyping**           | Building mockups          | Clarifying requirements       |
| **Document Analysis**     | Reviewing existing docs   | Understanding constraints     |
| **Context Diagrams**      | Visual system scope       | Clarifying boundaries         |

---

## 6.1.3 Scope Statement

### What Is a Project Scope Statement?

The scope statement describes in detail what the project will deliver:

| Element                       | Description                   |
| ----------------------------- | ----------------------------- |
| **Product scope description** | Features and characteristics  |
| **Deliverables**              | What will be produced         |
| **Acceptance criteria**       | How deliverables are verified |
| **Exclusions**                | What is NOT included          |
| **Constraints**               | Limiting factors              |
| **Assumptions**               | Factors assumed true          |

### Acceptance Criteria

Acceptance criteria define how deliverables will be evaluated:

| Good Criteria                               | Poor Criteria       |
| ------------------------------------------- | ------------------- |
| "System processes 100 transactions/second"  | "System is fast"    |
| "Report generated in < 5 seconds"           | "Report is quick"   |
| "99.9% uptime during business hours"        | "High availability" |
| "All tests pass with zero critical defects" | "Quality is good"   |

---

## 6.1.4 Work Breakdown Structure (WBS)

### What Is a WBS?

The WBS is a hierarchical decomposition of the total scope into manageable work packages.

```
Project
├── Deliverable 1
│   ├── Work Package 1.1
│   ├── Work Package 1.2
│   └── Work Package 1.3
├── Deliverable 2
│   ├── Work Package 2.1
│   └── Work Package 2.2
└── Deliverable 3
    └── Work Package 3.1
```

### Key WBS Concepts

| Term                | Description                                        |
| ------------------- | -------------------------------------------------- |
| **WBS**             | The complete hierarchical breakdown                |
| **Work Package**    | Lowest level of WBS; can be estimated and managed  |
| **WBS Dictionary**  | Details about each WBS element                     |
| **Control Account** | Management control point for scope, cost, schedule |
| **100% Rule**       | WBS must include ALL project scope                 |

### WBS Development Tips

- **Decompose to manageable size**: Work packages should be estimable (often 8-80 hours)
- **Deliverable-oriented**: Organize by what is delivered, not activities
- **Use nouns**: "Requirements Document" not "Writing Requirements"
- **100% rule**: All work is either in the WBS or out of scope
- **No overlapping**: Each element belongs in only one place

### WBS Dictionary

The WBS dictionary provides details for each element:

| Element               | Description                |
| --------------------- | -------------------------- |
| WBS ID                | Unique identifier          |
| Description           | What this element includes |
| Responsible party     | Who owns this work         |
| Deliverables          | What is produced           |
| Acceptance criteria   | How it's verified          |
| Assumptions           | Related assumptions        |
| Resource requirements | What's needed              |
| Cost estimate         | Expected cost              |
| Schedule milestones   | Key dates                  |

---

## 6.1.5 Scope Baseline

### What Is a Scope Baseline?

The scope baseline is the approved version of scope used to measure project performance:

| Component           | Description                |
| ------------------- | -------------------------- |
| **Scope Statement** | Detailed scope description |
| **WBS**             | Complete work breakdown    |
| **WBS Dictionary**  | Details for each element   |

### Using the Baseline

- **Measure variance**: Compare actual vs. planned scope
- **Control changes**: Changes require formal approval
- **Track progress**: Mark work packages as complete
- **Inform estimates**: Basis for schedule and cost

---

## 6.1.6 Scope in Agile

### Agile Approach to Scope

| Predictive                  | Agile                            |
| --------------------------- | -------------------------------- |
| Scope defined upfront       | Scope emerges over time          |
| Fixed scope                 | Fixed time/cost, flexible scope  |
| Detailed requirements early | Requirements refined iteratively |
| WBS decomposition           | Product backlog                  |
| Scope baseline              | Backlog as rolling plan          |

### Product Backlog

The backlog serves as agile's scope:

| Element        | Description                     |
| -------------- | ------------------------------- |
| **Epic**       | Large feature or capability     |
| **Feature**    | Functional capability           |
| **User Story** | Small, user-valued increment    |
| **Task**       | Work needed to complete a story |

### User Stories

User stories follow the format:

**As a [type of user], I want [goal] so that [benefit]**

Example: "As a customer, I want to reset my password so that I can regain access to my account."

---

## 6.1.7 Scope Change Control

### Why Control Scope Changes?

Uncontrolled scope changes ("scope creep") cause:
- Schedule delays
- Budget overruns
- Quality issues
- Team burnout
- Stakeholder frustration

### Change Control Process

1. **Submit** change request
2. **Evaluate** impact (scope, schedule, cost, quality, risk)
3. **Review** by Change Control Board (CCB) or appropriate authority
4. **Decide** approve, reject, or defer
5. **Update** plans and baselines if approved
6. **Communicate** decision to stakeholders
7. **Implement** approved changes

### In Agile

Agile welcomes change through backlog management:
- New items added to backlog
- Product owner prioritizes
- Lower-priority items may be deferred
- Sprint scope is protected (changes in next sprint)

---

## 6.1.8 Key Takeaways

1. **Collect requirements systematically**: Use multiple techniques
2. **Define scope clearly**: Scope statement with acceptance criteria
3. **Decompose with WBS**: Hierarchical breakdown to work packages
4. **Establish baseline**: Approved scope for measuring performance
5. **Control changes**: Formal process for scope changes
6. **Agile adapts**: Backlog instead of WBS, embracing change

---

**Next**: [6.2 – Schedule Planning](./schedule-planning)
