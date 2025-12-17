# 6.2 Schedule Planning

Time is your most perishable resource. Schedule planning is the process of defining how and when the project will deliver its products, services, and results.

---

## 🛠️ From Work Packages to Activities
To build a schedule, you must break down **Work Packages** into **Activities**.
- **Activity**: A distinct, scheduled portion of work performed during the course of a project.
- **Milestone**: A significant point or event in a project (duration = 0).

---

## 🧭 Dependency Types
How do activities relate to each other?
- **Finish-to-Start (FS)**: The successor can't start until the predecessor finishes. (Most common).
- **Start-to-Start (SS)**: The successor can't start until the predecessor starts.
- **Finish-to-Finish (FF)**: The successor can't finish until the predecessor finishes.
- **Start-to-Finish (SF)**: The successor can't finish until the predecessor starts. (Very rare).

::: info 🚦 Lead vs. Lag
- **Lead**: Acceleration of a successor. (Starting work early).
- **Lag**: Delay of a successor. (Waiting for concrete to dry).
:::

---

## 📊 The Critical Path Method (CPM)
The **Critical Path** is the sequence of activities that represents the **longest path** through a project, which determines the **shortest possible project duration**.
- **Total Float (Slack)**: The amount of time an activity can be delayed without delaying the project finish date.
- **Critical Path Float**: Always **Zero**.

---

## ⚡ Schedule Compression
When the project is behind, you have two primary options:
1. **Crashing**: Adding resources to activities on the critical path to shorten duration. (*Increases Cost*).
2. **Fast-Tracking**: Performing activities in parallel that were originally planned in sequence. (*Increases Risk*).

---

## 🔄 Estimation Techniques
How do you know how long things take?
| Technique              | Description                                             | Accuracy         |
| :--------------------- | :------------------------------------------------------ | :--------------- |
| **Analogous**          | Based on past similar projects.                         | Low (Quick)      |
| **Parametric**         | Based on mathematical data (e.g., $X$ hours per sq ft). | Medium           |
| **Three-Point (PERT)** | Beta Distribution: $(O + 4M + P) / 6$.                  | High             |
| **Bottom-Up**          | Estimating every single activity and rolling it up.     | Very High (Slow) |

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a question asks what to do if the project is behind schedule, look for <strong>Crashing</strong> or <strong>Fast-Tracking</strong>. If it asks specifically for a method that won't increase cost, the answer is <strong>Fast-Tracking</strong>.
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
