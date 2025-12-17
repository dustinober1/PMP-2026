---
title: 6.3 – Cost Planning
description: Estimating and budgeting project costs
---

# 6.3 – Cost Planning

## 6.3.1 Introduction

Cost planning estimates project costs and develops the budget that funds project activities. Understanding cost estimation and budgeting is essential for project success and exam performance.

::: tip Key Insight
**Estimate → Budget → Baseline**: Cost estimates are developed, aggregated into a budget, and approved as the cost baseline for measuring performance.
:::

---

## 6.3.2 Cost Estimation

### What's Included in Costs?

| Cost Type    | Description                    | Examples                 |
| ------------ | ------------------------------ | ------------------------ |
| **Direct**   | Directly attributed to project | Team salaries, materials |
| **Indirect** | Shared across projects         | Facilities, utilities    |
| **Fixed**    | Constant regardless of volume  | Equipment lease          |
| **Variable** | Changes with volume            | Materials, hourly labor  |

### Estimation Techniques

| Technique                          | Description               | Accuracy          | When Used                  |
| ---------------------------------- | ------------------------- | ----------------- | -------------------------- |
| **Rough Order of Magnitude (ROM)** | High-level estimate       | -25% to +75%      | Very early, limited info   |
| **Analogous**                      | Based on similar projects | -15% to +25%      | Early planning             |
| **Parametric**                     | Mathematical model        | -10% to +15%      | Quantifiable relationships |
| **Bottom-up**                      | Detailed estimation       | -5% to +10%       | Detailed planning          |
| **Three-point**                    | Range with probability    | Depends on spread | Uncertainty present        |

### Analogous Estimation

Uses actual costs from similar past projects:

- Quick and inexpensive
- Relies on historical data quality
- Less accurate than detailed estimates
- Best for early estimates

### Parametric Estimation

Uses statistical relationships:

- **Cost = Unit rate × Quantity**
- Example: $10/line of code × 10,000 lines = $100,000
- Requires reliable historical data
- Scalable and repeatable

### Bottom-Up Estimation

Estimates individual activities, then sums:

- Most accurate when work is well-defined
- Time-consuming
- Requires detailed WBS
- Best for final budget development

### Three-Point Cost Estimation

Same formulas as schedule estimation:

**Triangular**: E = (O + M + P) / 3

**Beta (PERT)**: E = (O + 4M + P) / 6

---

## 6.3.3 Budget Development

### From Estimates to Budget

```
Activity Estimates
    ↓ (Aggregate)
Work Package Estimates
    ↓ (Aggregate)
Control Account Budgets
    ↓ (Aggregate)
Project Budget
    ↓ (Add contingency)
Cost Baseline
    ↓ (Add management reserve)
Project Funding Requirement
```

### Budget Components

| Component                   | Description                          |
| --------------------------- | ------------------------------------ |
| **Activity cost estimates** | Individual activity costs            |
| **Contingency reserves**    | For known risks (in baseline)        |
| **Cost baseline**           | Approved, time-phased budget         |
| **Management reserve**      | For unknown risks (outside baseline) |
| **Project budget**          | Total funding required               |

### Contingency vs. Management Reserve

| Contingency Reserve           | Management Reserve         |
| ----------------------------- | -------------------------- |
| For known risks               | For unknown risks          |
| Part of cost baseline         | Outside cost baseline      |
| PM can use                    | Requires sponsor approval  |
| Calculated from risk analysis | Percentage of total budget |

---

## 6.3.4 Cost Baseline

### What Is the Cost Baseline?

The cost baseline is the approved, time-phased budget used to measure project performance:

- Shows planned expenditure over time
- Used to calculate variances
- Changes only through formal change control
- Foundation for Earned Value Management

### S-Curve

The cost baseline often follows an S-curve pattern:

- **Low spending** early (planning, startup)
- **High spending** middle (execution peak)
- **Declining spending** late (closeout)

---

## 6.3.5 Funding Requirements

### Cash Flow Planning

| Element              | Description                     |
| -------------------- | ------------------------------- |
| **Funding limits**   | Maximum spending per period     |
| **Funding schedule** | When funds are released         |
| **Reconciliation**   | Matching funding to expenditure |

### Funding Constraints

Projects may face:
- Annual budget cycles
- Milestone-based funding
- Customer payment schedules
- Internal approval thresholds

---

## 6.3.6 Cost of Quality

### Quality Costs Categories

| Category             | Type            | Examples                      |
| -------------------- | --------------- | ----------------------------- |
| **Prevention**       | Conformance     | Training, planning, equipment |
| **Appraisal**        | Conformance     | Testing, inspections, audits  |
| **Internal Failure** | Non-conformance | Rework, scrap                 |
| **External Failure** | Non-conformance | Warranty, recalls, lawsuits   |

### Cost of Quality Principle

**Investing in prevention and appraisal reduces failure costs**

- Prevention is cheapest
- External failure is most expensive
- Quality is not just a cost—it's an investment

---

## 6.3.7 Life Cycle Costing

### Beyond Project Costs

Life cycle costing considers total ownership cost:

| Phase           | Costs                                 |
| --------------- | ------------------------------------- |
| **Acquisition** | Purchase, development, implementation |
| **Operations**  | Maintenance, support, utilities       |
| **Disposal**    | Decommissioning, environmental        |

### Why It Matters

A cheaper project option may cost more over the product's life:

| Option | Project Cost | Operating Cost (10 yr) | Total   |
| ------ | ------------ | ---------------------- | ------- |
| A      | $100K        | $150K                  | $250K   |
| B      | $150K        | $80K                   | $230K ✓ |

---

## 6.3.8 Cost in Agile

### Agile Cost Approach

| Predictive                    | Agile                             |
| ----------------------------- | --------------------------------- |
| Fixed budget, estimated scope | Fixed budget/time, flexible scope |
| Detailed cost estimates       | Capacity-based funding            |
| Cost baseline                 | Budget burn rate                  |

### Agile Budgeting

- Time-boxed iterations with fixed team cost
- Budget = Team cost × Number of iterations
- Scope adjusted to fit budget
- Value prioritized within constraints

---

## 6.3.9 Key Takeaways

1. **Multiple estimation techniques**: Use appropriate method for project stage
2. **Accuracy improves over time**: ROM → Analogous → Parametric → Bottom-up
3. **Build reserves**: Contingency for known risks, management for unknown
4. **Baseline is approved budget**: Changes require formal approval
5. **Consider quality costs**: Prevention is cheaper than failure
6. **Think life cycle**: Total cost may matter more than project cost

---

**Next**: [6.4 – Resource and Procurement Planning](./resource-planning)
