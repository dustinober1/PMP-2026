---
title: 5.1 – Business Case and Project Selection
description: Understanding why projects are undertaken and how they are selected
---

# 5.1 – Business Case and Project Selection

## 5.1.1 Introduction

Before a project begins, organizations must decide whether it's worth pursuing. The business case provides the justification for investing resources, while project selection methods help compare alternatives and prioritize investments.

::: tip Key Insight
**The business case is created BEFORE the project is authorized**. It provides the justification that leads to a project charter and formal project initiation.
:::

---

## 5.1.2 The Business Case

### What Is a Business Case?

A business case is a documented justification for undertaking a project. It answers the fundamental question: **"Why should we do this?"**

### Purpose of the Business Case

| Purpose                  | Description                                       |
| ------------------------ | ------------------------------------------------- |
| **Justify investment**   | Demonstrate that benefits outweigh costs          |
| **Compare alternatives** | Evaluate options including "do nothing"           |
| **Align to strategy**    | Show how project supports organizational goals    |
| **Establish baseline**   | Provide reference for measuring realized benefits |
| **Support governance**   | Enable informed go/no-go decisions                |

### Business Case Components

| Component                 | Description                             |
| ------------------------- | --------------------------------------- |
| **Business need**         | Problem or opportunity being addressed  |
| **Situation analysis**    | Current state and root causes           |
| **Options analysis**      | Alternative approaches considered       |
| **Recommended option**    | Preferred solution and rationale        |
| **Cost-benefit analysis** | Expected costs and benefits             |
| **Risk assessment**       | Key risks and potential impacts         |
| **Strategic alignment**   | Connection to organizational objectives |
| **Success criteria**      | How outcomes will be measured           |

---

## 5.1.3 Cost-Benefit Analysis

### Types of Benefits

| Type           | Description                 | Examples                          |
| -------------- | --------------------------- | --------------------------------- |
| **Tangible**   | Quantifiable monetary value | Cost savings, revenue increase    |
| **Intangible** | Difficult to quantify       | Brand reputation, employee morale |
| **Direct**     | Directly caused by project  | New product revenue               |
| **Indirect**   | Enabled by project          | Improved customer relationships   |

### Types of Costs

| Type            | Description                    | Examples                                       |
| --------------- | ------------------------------ | ---------------------------------------------- |
| **Capital**     | One-time investments           | Equipment, construction                        |
| **Operating**   | Ongoing expenses               | Staff, maintenance, licenses                   |
| **Opportunity** | Value of foregone alternatives | What else could we do with these resources?    |
| **Hidden**      | Often overlooked               | Training, change management, productivity loss |

---

## 5.1.4 Project Selection Methods

### Financial Methods

#### Net Present Value (NPV)

NPV calculates the present value of all cash flows, accounting for the time value of money.

**NPV = Σ (Cash Flow / (1 + r)^t) - Initial Investment**

| NPV Result     | Meaning                                 |
| -------------- | --------------------------------------- |
| Positive (> 0) | Project adds value—generally acceptable |
| Zero (= 0)     | Project breaks even                     |
| Negative (< 0) | Project destroys value—generally reject |

**When comparing projects**: Higher NPV is better.

#### Internal Rate of Return (IRR)

IRR is the discount rate at which NPV equals zero—the "break-even" rate of return.

| IRR Result          | Meaning                                   |
| ------------------- | ----------------------------------------- |
| IRR > Required rate | Project exceeds return expectations       |
| IRR = Required rate | Project meets minimum threshold           |
| IRR < Required rate | Project fails to meet return expectations |

**When comparing projects**: Higher IRR is better (generally).

#### Payback Period

Time required to recover the initial investment.

**Payback Period = Initial Investment / Annual Cash Flow**

| Payback Result  | Meaning                                 |
| --------------- | --------------------------------------- |
| Shorter payback | Faster return of investment, lower risk |
| Longer payback  | More capital at risk for longer         |

**When comparing projects**: Shorter payback is generally preferred.

#### Benefit-Cost Ratio (BCR)

**BCR = Total Benefits / Total Costs**

| BCR Result | Meaning                                |
| ---------- | -------------------------------------- |
| BCR > 1    | Benefits exceed costs—acceptable       |
| BCR = 1    | Benefits equal costs—break even        |
| BCR < 1    | Costs exceed benefits—generally reject |

**When comparing projects**: Higher BCR is better.

### Comparison of Financial Methods

| Method      | Strengths                            | Weaknesses                                              |
| ----------- | ------------------------------------ | ------------------------------------------------------- |
| **NPV**     | Considers time value, absolute value | Requires discount rate assumption                       |
| **IRR**     | Easy percentage comparison           | Can give misleading results for non-standard cash flows |
| **Payback** | Simple, focuses on risk              | Ignores time value, ignores cash flows after payback    |
| **BCR**     | Simple ratio comparison              | Doesn't consider project size                           |

::: warning Exam Tip
Know how to interpret these values: "Positive NPV means accept," "Higher NPV is better," "IRR > required return means accept."
:::

---

## 5.1.5 Non-Financial Selection Methods

### Scoring Models

Weighted criteria used to evaluate and compare projects:

| Criterion             | Weight | Project A Score | Project B Score |
| --------------------- | ------ | --------------- | --------------- |
| Strategic alignment   | 30%    | 8               | 6               |
| Technical feasibility | 25%    | 7               | 9               |
| Resource availability | 20%    | 5               | 7               |
| Risk level            | 15%    | 6               | 4               |
| Stakeholder support   | 10%    | 8               | 8               |
| **Weighted Total**    | —      | **6.75**        | **6.85**        |

### Constrained Optimization

Mathematical optimization when resources are limited:
- Integer linear programming
- Multi-objective programming
- Dynamic programming

### Murder Boards

Executive review panels that challenge project proposals aggressively to test robustness.

---

## 5.1.6 Make-or-Buy Decisions

### Factors in Make-or-Buy Analysis

| Factor              | Make (Internal)          | Buy (External)              |
| ------------------- | ------------------------ | --------------------------- |
| **Core competency** | Yes, build capability    | No, outsource               |
| **Cost**            | Lower internal cost      | Lower external cost         |
| **Capacity**        | Have available resources | Resources constrained       |
| **Control**         | Need tight control       | Can accept external control |
| **Risk**            | Manageable internally    | Transfer risk to vendor     |
| **Speed**           | Can deliver in time      | Faster external delivery    |

### Contract Types for "Buy" Decisions

| Type                         | Description                         | Risk to Buyer | When Used          |
| ---------------------------- | ----------------------------------- | ------------- | ------------------ |
| **Fixed Price (FFP)**        | Set price regardless of actual cost | Low           | Well-defined scope |
| **Cost Plus (CPFF, CPIF)**   | Reimburse costs plus fee            | High          | Uncertain scope    |
| **Time and Materials (T&M)** | Pay for time and materials used     | Moderate      | Duration uncertain |

---

## 5.1.7 Opportunity Cost

### What Is Opportunity Cost?

Opportunity cost is the value of the next best alternative that is foregone when a choice is made.

### Example

If you have $1M to invest and three project options:
- Project A: Expected NPV = $150K
- Project B: Expected NPV = $200K
- Project C: Expected NPV = $120K

If you choose Project B, your opportunity cost is $150K (the value of Project A, the next best option).

::: tip Exam Application
If asked about opportunity cost, it's the value of what you gave up, not what you gained.
:::

---

## 5.1.8 Sunk Costs

### What Are Sunk Costs?

Sunk costs are money already spent that cannot be recovered, regardless of future decisions.

### Key Principle

**Sunk costs should NOT influence future decisions**. Only consider future costs and benefits when making decisions.

### Example

You've spent $500K on a project that's failing. Should you continue?

- **Wrong thinking**: "We've invested $500K, we can't stop now!"
- **Right thinking**: "Regardless of past spending, what are the future costs and benefits of continuing vs. stopping?"

---

## 5.1.9 Key Takeaways

1. **Business case precedes the charter**: It justifies why the project should exist
2. **Know financial methods**: NPV (absolute value), IRR (rate), Payback (time), BCR (ratio)
3. **Higher NPV/IRR/BCR is better**: When comparing projects
4. **Shorter payback is better**: Less capital at risk
5. **Opportunity cost**: Value of what you gave up
6. **Sunk costs are irrelevant**: Don't consider past spending in future decisions
7. **Make-or-buy**: Consider core competency, cost, control, risk, speed

---

**Next**: [5.2 – Project Charter](./project-charter)