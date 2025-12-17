---
title: 6.2 – Schedule Planning
description: Developing the project timeline
---

# 6.2 – Schedule Planning

## 6.2.1 Introduction

Schedule planning transforms scope into a timeline. It involves defining activities, sequencing them, estimating durations, and developing a schedule that enables project execution.

::: tip Key Insight
**The critical path determines project duration**. Understanding critical path analysis is essential for the PMP exam.
:::

---

## 6.2.2 Activity Definition

### From WBS to Activities

Activities are the work needed to complete work packages:

```
Work Package → Activity 1
             → Activity 2
             → Activity 3
```

### Activity Attributes

| Attribute     | Description                |
| ------------- | -------------------------- |
| Activity ID   | Unique identifier          |
| Activity name | Descriptive name           |
| Description   | What the activity involves |
| Predecessor   | What comes before          |
| Successor     | What comes after           |
| Resources     | What's needed              |
| Duration      | How long it takes          |
| Constraints   | Any limitations            |

---

## 6.2.3 Activity Sequencing

### Dependency Types

| Type                 | Abbreviation | Description                | Example                 |
| -------------------- | ------------ | -------------------------- | ----------------------- |
| **Finish-to-Start**  | FS           | B starts after A finishes  | Build → Test            |
| **Start-to-Start**   | SS           | B starts when A starts     | Write spec → Write code |
| **Finish-to-Finish** | FF           | B finishes when A finishes | Edit → Print            |
| **Start-to-Finish**  | SF           | B finishes when A starts   | Rare; shift work        |

**FS is most common** (>90% of dependencies).

### Dependency Reasons

| Type              | Description               | Flexibility          |
| ----------------- | ------------------------- | -------------------- |
| **Mandatory**     | Must follow this order    | Cannot change        |
| **Discretionary** | Best practice order       | Can change if needed |
| **External**      | Depends on outside factor | Cannot change        |
| **Internal**      | Depends on project team   | Can change           |

### Leads and Lags

| Term     | Description                           | Example                                 |
| -------- | ------------------------------------- | --------------------------------------- |
| **Lead** | Successor starts early (negative lag) | Start testing 2 days before coding ends |
| **Lag**  | Successor waits after predecessor     | Wait 3 days for concrete to cure        |

---

## 6.2.4 Duration Estimation

### Estimation Techniques

| Technique       | Description                          | When to Use                |
| --------------- | ------------------------------------ | -------------------------- |
| **Analogous**   | Use similar past projects            | Early stage, limited info  |
| **Parametric**  | Mathematical formula                 | Quantifiable relationships |
| **Bottom-up**   | Estimate each activity, sum          | Detailed planning          |
| **Three-point** | Optimistic, most likely, pessimistic | Uncertainty present        |

### Three-Point Estimation

**Triangular**: E = (O + M + P) / 3

**PERT (Beta)**: E = (O + 4M + P) / 6

| Variable | Meaning              |
| -------- | -------------------- |
| O        | Optimistic estimate  |
| M        | Most likely estimate |
| P        | Pessimistic estimate |
| E        | Expected duration    |

### Standard Deviation

**Standard Deviation (σ)** = (P - O) / 6

**Variance** = σ² = [(P - O) / 6]²

::: warning Exam Tip
Know both PERT formula and standard deviation calculation. These appear frequently on the exam.
:::

---

## 6.2.5 Critical Path Method (CPM)

### What Is the Critical Path?

The critical path is the **longest path** through the project network. It determines:
- **Minimum project duration**
- **Activities with zero float** (no schedule flexibility)

### Network Diagram Terms

| Term                  | Description                     |
| --------------------- | ------------------------------- |
| **Early Start (ES)**  | Earliest an activity can start  |
| **Early Finish (EF)** | Earliest an activity can finish |
| **Late Start (LS)**   | Latest an activity can start    |
| **Late Finish (LF)**  | Latest an activity can finish   |
| **Float (Slack)**     | Schedule flexibility            |

### Forward and Backward Pass

**Forward Pass** (calculate ES and EF):
- ES of first activity = 0 (or project start)
- EF = ES + Duration
- ES of successor = max(EF of predecessors)

**Backward Pass** (calculate LS and LF):
- LF of last activity = project end date
- LS = LF - Duration
- LF of predecessor = min(LS of successors)

### Calculate Float

**Total Float** = LS - ES (or LF - EF)

- Activities with **Float = 0** are on the critical path
- **Free Float** = ES(successor) - EF(current activity)

### Example

```
Activity  Duration  ES  EF  LS  LF  Float
A         3         0   3   0   3   0 (Critical)
B         2         3   5   3   5   0 (Critical)
C         4         5   9   5   9   0 (Critical)
D         2         3   5   5   7   2 (Not critical)
```

---

## 6.2.6 Schedule Compression

### When to Compress

- Project deadline at risk
- Client requests earlier delivery
- New dependencies emerge
- Resources become unavailable

### Compression Techniques

| Technique         | Description                       | Trade-off      |
| ----------------- | --------------------------------- | -------------- |
| **Crashing**      | Add resources to shorten duration | Increases cost |
| **Fast-tracking** | Overlap activities                | Increases risk |

### Crashing

Steps:
1. Identify critical path activities
2. Calculate cost per day of crashing each
3. Crash the lowest cost activity first
4. Repeat until target date reached or cost exceeds benefit

**Crash only critical path activities** (crashing non-critical doesn't shorten project)

### Fast-Tracking

- Start activities in parallel that were planned sequentially
- Only works if activities can truly overlap
- Increases risk of rework

---

## 6.2.7 Schedule Presentation

### Gantt Chart

Bar chart showing:
- Activities on vertical axis
- Time on horizontal axis
- Bars indicating duration
- Dependencies shown as links

### Milestone Chart

Shows only key dates:
- Major deliverables
- Phase completions
- External dependencies
- Decision points

### Network Diagram

Shows activity dependencies:
- Activities as nodes or arrows
- Dependencies as connections
- Critical path highlighted

---

## 6.2.8 Schedule in Agile

### Agile Schedule Elements

| Element              | Description                  |
| -------------------- | ---------------------------- |
| **Release**          | Major delivery milestone     |
| **Iteration/Sprint** | Time-boxed work period       |
| **Velocity**         | Team's historical throughput |
| **Burndown**         | Work remaining over time     |

### Release Planning

- Estimate backlog size (story points)
- Calculate velocity (points per sprint)
- **Releases = Total points / Velocity**

### Iteration Planning

- Select stories for the sprint
- Break into tasks
- Commit as a team
- Time-boxed (typically 2 weeks)

---

## 6.2.9 Key Takeaways

1. **Define activities from WBS**: Break work packages into estimable activities
2. **Sequence with dependencies**: FS is most common; use leads/lags sparingly
3. **Estimate with appropriate techniques**: Analogous, parametric, bottom-up, three-point
4. **Calculate critical path**: Longest path = minimum duration, zero float
5. **Compress carefully**: Crashing costs money, fast-tracking increases risk
6. **Agile uses velocity**: Story points and iterations instead of CPM

---

**Next**: [6.3 – Cost Planning](./cost-planning)
