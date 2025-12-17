# 6.3 Cost Planning

Cost management is about more than just staying under budget; it's about optimizing resource allocation to deliver the maximum possible value.

---

## 🏗️ The Path to the Baseline
How does a folder full of estimates become a formal budget?
1. **Activity Estimates**: How much does each task cost?
2. **Work Package Estimates**: Summing the activities.
3. **Contingency Reserve**: Money set aside for **"Known-Unknowns"** (Risks you've identified).
4. **Cost Baseline**: The approved version of the time-phased project budget.
5. **Management Reserve**: Money set aside for **"Unknown-Unknowns"** (Risks you haven't identified).
6. **Project Budget**: The Cost Baseline + Management Reserve.

::: warning 🚦 Baseline vs. Budget
The **Project Manager** controls the **Cost Baseline** (and the contingency reserve). The **Sponsor** or Management controls the **Management Reserve**.
:::

---

## 📊 Estimation Accuracy
Accuracy is a journey, not a destination.
- **Rough Order of Magnitude (ROM)**: Used during initiation. Range: **-25% to +75%**.
- **Definitive Estimate**: Used during planning. Range: **-5% to +10%**.

---

## 🛠️ Cost of Quality (COQ)
Spending money now to prevent spending much more later.
| Category             | Examples                                        | Timing          |
| :------------------- | :---------------------------------------------- | :-------------- |
| **Prevention**       | Training, process documentation.                | Before/During   |
| **Appraisal**        | Testing, destructive testing loss, inspections. | During          |
| **Internal Failure** | Rework, scrap.                                  | Before delivery |
| **External Failure** | Liabilities, warranty work, lost business.      | After delivery  |

::: tip 🔍 Key Insight
**External Failure** is always the most expensive cost of quality. In the 2026 exam, focus on **Prevention** over Inspection.
:::

---

## 🔄 Cost in Agile
In Agile, the cost is often **Fixed** (Team Salary $\times$ Time), and the **Scope** is the variable.
- **Burn Rate**: The rate at which the project budget is being spent.
- **Value-Based Prioritization**: Ensuring the most expensive "features" are only built if they provide the highest ROI.

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project is $10k over budget but the $10k was taken from the <strong>Contingency Reserve</strong> to handle a risk that actually happened, the project is technically <strong>On Budget</strong> relative to the formal project funding.
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
