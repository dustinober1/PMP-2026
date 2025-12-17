---
title: 7.1 – Risk Management
description: Identifying and responding to project uncertainty
---

# 7.1 – Risk Management

## 7.1.1 Introduction

Risk management is about dealing with uncertainty. Every project has risks—events that may or may not occur but would affect project objectives if they do. Effective risk management increases the probability of positive outcomes and decreases the impact of negative ones.

::: tip Key Insight
**Risk ≠ Problem**. A risk is an uncertain event that may or may not occur. Once it occurs, it becomes an issue. Manage risks proactively before they become issues.
:::

---

## 7.1.2 Risk Fundamentals

### What Is a Risk?

A risk is an **uncertain event or condition** that, if it occurs, has a positive or negative effect on project objectives.

| Type            | Description   | Example                                |
| --------------- | ------------- | -------------------------------------- |
| **Threat**      | Negative risk | Key resource may leave                 |
| **Opportunity** | Positive risk | New technology may accelerate delivery |

### Risk Components

**Risk = Probability × Impact**

- **Probability**: Likelihood the risk will occur
- **Impact**: Effect on objectives if it occurs

---

## 7.1.3 Risk Management Planning

### Risk Management Plan

The plan describes how risk management will be conducted:

| Element                            | Description                               |
| ---------------------------------- | ----------------------------------------- |
| **Methodology**                    | How risks will be identified and analyzed |
| **Roles and responsibilities**     | Who does what                             |
| **Budget**                         | Funding for risk activities               |
| **Timing**                         | When risk activities occur                |
| **Risk categories**                | Structure for organizing risks (RBS)      |
| **Probability/impact definitions** | Scales for assessment                     |
| **Stakeholder tolerances**         | Acceptable risk levels                    |
| **Reporting formats**              | How risks are communicated                |

### Risk Breakdown Structure (RBS)

Hierarchical categorization of risk sources:

```
Project Risks
├── Technical
│   ├── Requirements
│   ├── Technology
│   └── Complexity
├── External
│   ├── Regulatory
│   ├── Market
│   └── Supplier
├── Organizational
│   ├── Resources
│   ├── Funding
│   └── Prioritization
└── Project Management
    ├── Estimating
    ├── Planning
    └── Controlling
```

---

## 7.1.4 Risk Identification

### Goal

Find risks early while there's time to respond. Unidentified risks become surprises.

### Identification Techniques

| Technique               | Description                                   |
| ----------------------- | --------------------------------------------- |
| **Brainstorming**       | Team generates list of potential risks        |
| **Checklists**          | Review common risks from past projects        |
| **Interviews**          | Discuss risks with experts and stakeholders   |
| **SWOT analysis**       | Strengths, Weaknesses, Opportunities, Threats |
| **Root cause analysis** | Identify underlying sources of risk           |
| **Assumption analysis** | Test assumptions for risk implications        |
| **Document analysis**   | Review plans, contracts for risk indicators   |

### Risk Register

The risk register documents identified risks:

| Element           | Description               |
| ----------------- | ------------------------- |
| Risk ID           | Unique identifier         |
| Description       | What might happen         |
| Category          | Classification (from RBS) |
| Owner             | Who is responsible        |
| Probability       | Likelihood of occurring   |
| Impact            | Effect if it occurs       |
| Priority          | P × I ranking             |
| Response strategy | How to address            |
| Status            | Open, closed, occurred    |

---

## 7.1.5 Qualitative Risk Analysis

### Purpose

Prioritize risks based on probability and impact to focus response efforts.

### Probability and Impact Assessment

Rate each risk:

| Probability     | Description             |
| --------------- | ----------------------- |
| Very High (0.9) | Almost certain to occur |
| High (0.7)      | Likely to occur         |
| Medium (0.5)    | May or may not occur    |
| Low (0.3)       | Unlikely to occur       |
| Very Low (0.1)  | Rare                    |

| Impact    | Description                          |
| --------- | ------------------------------------ |
| Very High | Project failure, major overrun       |
| High      | Significant impact on objectives     |
| Medium    | Moderate impact, workaround possible |
| Low       | Minor impact                         |
| Very Low  | Negligible impact                    |

### Probability-Impact Matrix

```
              Impact
         Low  Med  High
High    [M]  [H]  [VH]
Med     [L]  [M]  [H]   Probability
Low     [VL] [L]  [M]
```

### Risk Priority

**Priority Score = Probability × Impact**

Higher scores warrant more attention and response planning.

---

## 7.1.6 Quantitative Risk Analysis

### Purpose

Numerically analyze the effect of identified risks on overall project objectives.

### When to Use

- Large, complex projects
- Need precise schedule/cost predictions
- Stakeholders require quantified confidence levels

### Techniques

| Technique                         | Description                                             |
| --------------------------------- | ------------------------------------------------------- |
| **Monte Carlo Simulation**        | Run many scenarios to produce probability distributions |
| **Decision Tree Analysis**        | Calculate expected value of different decisions         |
| **Sensitivity Analysis**          | Identify which risks have greatest impact               |
| **Expected Monetary Value (EMV)** | Probability × monetary impact                           |

### Expected Monetary Value (EMV)

**EMV = Probability × Impact (in dollars)**

| Risk             | Probability | Impact   | EMV         |
| ---------------- | ----------- | -------- | ----------- |
| Vendor delay     | 30%         | -$50,000 | -$15,000    |
| Early completion | 20%         | +$30,000 | +$6,000     |
| **Total EMV**    |             |          | **-$9,000** |

EMV helps quantify contingency needs.

---

## 7.1.7 Risk Response Strategies

### For Threats (Negative Risks)

| Strategy     | Description                  | Example                              |
| ------------ | ---------------------------- | ------------------------------------ |
| **Avoid**    | Eliminate the threat         | Change approach to remove risk       |
| **Mitigate** | Reduce probability or impact | Add testing to catch defects earlier |
| **Transfer** | Shift impact to third party  | Buy insurance, fixed-price contract  |
| **Accept**   | Acknowledge and prepare      | Create contingency plan              |
| **Escalate** | Raise to higher authority    | Risk outside project scope           |

### For Opportunities (Positive Risks)

| Strategy     | Description                    | Example                           |
| ------------ | ------------------------------ | --------------------------------- |
| **Exploit**  | Ensure opportunity occurs      | Assign best resources             |
| **Enhance**  | Increase probability or impact | Accelerate development            |
| **Share**    | Partner to capture upside      | Joint venture                     |
| **Accept**   | Take advantage if it happens   | No specific action                |
| **Escalate** | Raise to higher authority      | Opportunity outside project scope |

::: warning Exam Alert
Know the strategies for both threats and opportunities. Questions often describe a scenario and ask which strategy is being applied.
:::

---

## 7.1.8 Risk Monitoring and Control

### Ongoing Activities

| Activity               | Description                         |
| ---------------------- | ----------------------------------- |
| **Risk audits**        | Review risk process effectiveness   |
| **Risk reviews**       | Regular reassessment of risks       |
| **Variance analysis**  | Compare actual vs. planned outcomes |
| **Reserve analysis**   | Assess adequacy of contingency      |
| **Trigger monitoring** | Watch for risk warning signs        |

### Residual and Secondary Risks

| Term               | Description                         |
| ------------------ | ----------------------------------- |
| **Residual risk**  | Risk remaining after response       |
| **Secondary risk** | New risk created by response        |
| **Workaround**     | Unplanned response to realized risk |

---

## 7.1.9 Risk in Agile

### Agile Risk Approach

| Aspect                    | Agile Practice                              |
| ------------------------- | ------------------------------------------- |
| Early risk reduction      | Build risky features first                  |
| Continuous identification | Risks discussed in standups, retrospectives |
| Short iterations          | Fail fast, adjust quickly                   |
| Transparency              | Visible impediments and blockers            |
| Adaptation                | Change approach based on learning           |

---

## 7.1.10 Key Takeaways

1. **Proactive management**: Address risks before they become issues
2. **Both threats and opportunities**: Manage positive and negative risks
3. **Prioritize with P × I**: Focus on high-probability, high-impact risks
4. **Know the strategies**: Avoid, mitigate, transfer, accept (threats)
5. **EMV quantifies risk**: Probability × Impact = expected value
6. **Monitor continuously**: Risks evolve throughout the project

---

**Next**: [7.2 – Quality Management](./quality-management)
