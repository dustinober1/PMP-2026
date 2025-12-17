---
title: 7.2 – Quality Management
description: Ensuring deliverables meet requirements
---

# 7.2 – Quality Management

## 7.2.1 Introduction

Quality management ensures that project deliverables meet the requirements and are fit for purpose. It's about building quality in from the start, not inspecting it in at the end.

::: tip Key Insight
**Quality = meeting requirements**. A deliverable has quality if it satisfies the stated needs. Quality is not the same as grade.
:::

---

## 7.2.2 Quality Fundamentals

### Quality vs. Grade

| Concept     | Definition                           | Example                      |
| ----------- | ------------------------------------ | ---------------------------- |
| **Quality** | Degree to which requirements are met | Working features, no defects |
| **Grade**   | Category of characteristics          | Economy vs. luxury car       |

- **Low quality** is always a problem (doesn't meet requirements)
- **Low grade** may be acceptable (simple but functional)

### Quality Perspectives

| View                           | Focus                         |
| ------------------------------ | ----------------------------- |
| **Conformance**                | Meets specifications          |
| **Customer satisfaction**      | Meets or exceeds expectations |
| **Continuous improvement**     | Always getting better         |
| **Prevention over inspection** | Build it right the first time |

---

## 7.2.3 Quality Planning

### Quality Management Plan

Documents how quality will be managed:

| Element                        | Description                    |
| ------------------------------ | ------------------------------ |
| **Quality standards**          | What standards apply           |
| **Quality objectives**         | Specific quality targets       |
| **Roles and responsibilities** | Who ensures quality            |
| **Quality tools**              | Methods for quality management |
| **Quality metrics**            | How quality is measured        |
| **Process improvement**        | How processes will improve     |

### Quality Metrics

Measurable quality characteristics:

| Metric Type               | Examples                         |
| ------------------------- | -------------------------------- |
| **Defect rates**          | Defects per 1000 lines of code   |
| **Customer satisfaction** | Survey scores, NPS               |
| **Performance**           | Response time, throughput        |
| **Reliability**           | Mean time between failures       |
| **Compliance**            | Audit findings, conformance rate |

---

## 7.2.4 Quality Assurance vs. Quality Control

### Quality Assurance (QA)

**Focus**: The process—are we doing things right?

| Aspect         | Description                       |
| -------------- | --------------------------------- |
| **Timing**     | Ongoing throughout project        |
| **Focus**      | Processes and procedures          |
| **Goal**       | Prevent defects                   |
| **Activities** | Audits, process reviews, training |

### Quality Control (QC)

**Focus**: The deliverables—are the things we made right?

| Aspect         | Description                   |
| -------------- | ----------------------------- |
| **Timing**     | After work is completed       |
| **Focus**      | Deliverables and outputs      |
| **Goal**       | Detect defects                |
| **Activities** | Testing, inspections, reviews |

::: warning Exam Tip
QA is about process (prevention). QC is about product (detection). Know the difference.
:::

---

## 7.2.5 Seven Basic Quality Tools

These tools are frequently tested on the PMP exam:

### 1. Cause-and-Effect Diagram (Fishbone/Ishikawa)

Identifies root causes of problems:

```
        People    Methods
           \       /
            \     /
             Problem
            /     \
           /       \
     Equipment  Materials
```

### 2. Control Chart

Monitors process stability over time:

- **Upper Control Limit (UCL)**: Upper boundary
- **Lower Control Limit (LCL)**: Lower boundary
- Measurements within limits = in control
- Points outside or patterns = out of control

### 3. Flowchart

Visual representation of process steps:
- Shows sequence and decisions
- Identifies bottlenecks and redundancies
- Helps standardize processes

### 4. Histogram

Bar chart showing frequency distribution:
- Shows variation in measurements
- Identifies patterns and outliers
- Helps understand process capability

### 5. Pareto Chart

Bar chart ordered by frequency:
- 80/20 rule: 80% of problems from 20% of causes
- Prioritizes improvement efforts
- Focus on vital few, not trivial many

### 6. Scatter Diagram

Shows relationship between two variables:
- Positive correlation: both increase together
- Negative correlation: one increases, other decreases
- No correlation: no relationship

### 7. Check Sheet

Simple data collection form:
- Structured for consistency
- Easy to use and analyze
- Foundation for other tools

---

## 7.2.6 Other Quality Tools

### Statistical Sampling

Inspect a subset to make inferences about the whole:
- More efficient than 100% inspection
- Sample size affects confidence
- Random sampling reduces bias

### Inspections

Formal examination of deliverables:
- Reviews, walkthroughs, audits
- Verify conformance to requirements
- Identify defects before delivery

### Testing

Validate that work products meet requirements:
- Unit testing, integration testing, system testing
- Acceptance testing (customer verification)
- Performance testing, security testing

---

## 7.2.7 Cost of Quality

### Categories

| Category             | Type            | Description                           |
| -------------------- | --------------- | ------------------------------------- |
| **Prevention**       | Conformance     | Cost to prevent defects               |
| **Appraisal**        | Conformance     | Cost to detect defects                |
| **Internal Failure** | Non-conformance | Cost of defects found before delivery |
| **External Failure** | Non-conformance | Cost of defects found after delivery  |

### Examples

| Category             | Examples                                  |
| -------------------- | ----------------------------------------- |
| **Prevention**       | Training, planning, equipment maintenance |
| **Appraisal**        | Testing, inspections, audits              |
| **Internal Failure** | Rework, scrap, retesting                  |
| **External Failure** | Warranty, returns, lawsuits, reputation   |

### Optimal Quality Cost

- Invest in prevention to reduce failure costs
- Prevention is almost always cheaper than failure
- External failure is the most expensive category

---

## 7.2.8 Continuous Improvement

### Philosophies

| Approach      | Description                     |
| ------------- | ------------------------------- |
| **Kaizen**    | Small, continuous improvements  |
| **PDCA**      | Plan-Do-Check-Act cycle         |
| **Six Sigma** | Data-driven defect reduction    |
| **Lean**      | Eliminate waste, maximize value |

### Plan-Do-Check-Act (PDCA)

1. **Plan**: Identify improvement, plan change
2. **Do**: Implement change on small scale
3. **Check**: Measure results, compare to goals
4. **Act**: Adopt, modify, or abandon based on results

### In Agile

- Retrospectives identify improvements
- Changes implemented next iteration
- Continuous integration/deployment
- Test-driven development

---

## 7.2.9 Quality in Agile

### Agile Quality Practices

| Practice                    | Description                     |
| --------------------------- | ------------------------------- |
| **Definition of Done**      | Clear criteria for completion   |
| **Test-Driven Development** | Write tests before code         |
| **Continuous Integration**  | Merge and test frequently       |
| **Pair Programming**        | Two developers, one workstation |
| **Code Reviews**            | Peer examination of code        |
| **Retrospectives**          | Regular process improvement     |

---

## 7.2.10 Key Takeaways

1. **Quality = meeting requirements**: Not the same as grade
2. **QA vs. QC**: Process (prevention) vs. product (detection)
3. **Know the 7 tools**: Cause-effect, control chart, flowchart, histogram, Pareto, scatter, check sheet
4. **Prevention over inspection**: Build quality in, don't inspect it in
5. **Cost of quality**: Prevention is cheaper than failure
6. **Continuously improve**: PDCA, retrospectives, incremental enhancement

---

**Next**: [7.3 – Navigating Complexity](./navigating-complexity)
