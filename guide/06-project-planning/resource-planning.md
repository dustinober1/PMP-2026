# 6.4 Resource & Procurement Planning

Project success depends on getting the right people, tools, and materials in the right place at the right time.

---

## 🏗️ The Resource Spectrum
In PMP terms, "Resources" includes both human talent and physical materials.

<div class="resource-grid">
  <div class="resource-card">
    <div class="resource-title">Team Resources</div>
    <div class="resource-tag human">People</div>
    <p>Managing skills, availability, and growth. Focus on <strong>Servant Leadership</strong> and team health.</p>
  </div>
  <div class="resource-card">
    <div class="resource-title">Physical Resources</div>
    <div class="resource-tag physical">Tools & Material</div>
    <p>Managing equipment, rentals, software licenses, and facilities. Focus on <strong>Logistics</strong> and control.</p>
  </div>
</div>

---

## 📋 Key Planning Artifacts
1.  **Resource Management Plan**: The strategy for how resources will be acquired, managed, and released.
2.  **Resource Requirements**: A detailed list of what is needed (e.g., "3 Senior Developers for 2 months").
3.  **Physical Resource Documentation**: Ensuring you have the legal right to use tools/materials.
4.  **Team Charter**: Explicitly defined in Chapter 3, but legally part of Resource Planning because it defines how human resources will interact.

---

## 🧩 Roles & Responsibility (RAM / RACI)
When a question signals confusion about “who owns what,” you’re in responsibility assignment territory.

- **RAM (Responsibility Assignment Matrix)**: The umbrella term that links WBS work to owners.
- **RACI**: A common RAM format: **Responsible, Accountable, Consulted, Informed**.

| Deliverable | R (Does Work) | A (Final Owner) | C (Input) | I (Aware) |
| :---------- | :------------ | :-------------- | :-------- | :-------- |
| Requirements baseline | BA | PM | Sponsor, Team | Ops |
| Test plan | QA Lead | PM | Dev Lead | Sponsor |

::: tip 💡 Exam Clue
For a single deliverable, there should be **one Accountable** party (clear ownership).
:::

---

## 📅 Resource Calendars (Availability Is a Constraint)
Planning is not just “how many people” — it’s **when they are available**:
- Vacations, part-time allocation, holidays, time zones, on-call rotations
- Equipment delivery windows and facility access
- Vendor lead times and shipping/customs risk for physical items

---

## 📈 Managing Constraints
*   **Resource Leveling**: Adjusting the schedule based on resource limits. Often changes the critical path and **usually delays** the finish date.
*   **Resource Smoothing**: Adjusting activities within their **Float** so as not to exceed resource limits. **Does not** change the finish date (uses available slack).

::: info 🛠️ 2026 Focus: Virtual Logistics
Modern resource planning must account for **Digital Latency**. If your team is global, do they have the same cloud infrastructure? Is the physical hardware available in their specific region (e.g., chip shortages)?
:::

---

## 🧾 Procurement Planning (External Resources)
When you cannot source resources internally, procurement planning helps you get the work done without uncontrolled risk.

### Key Procurement Concepts
- **Make-or-Buy Analysis**: Decide whether to build internally or purchase externally.
- **Procurement SOW**: Defines what you want a seller to deliver (scope for the vendor).
- **RFP vs. RFQ**: RFP asks for approach/solution; RFQ asks for price for a defined item.

### Source Selection Analysis
How do you pick the winner?
- **Least Cost**: Standard item, price is king.
- **Qualifications Only**: Small expert tasks (e.g., finding a doctor).
- **Quality-Based (Technical/Management)**: Best solution, then negotiate price.
- **Fixed Budget**: "We have $50k, tell us the most scope you can give us."

### Bidder Conferences
A meeting with all prospective sellers to ensure everyone has a clear, common understanding of the procurement (scope, requirements, etc.).
- **Fairness Rule**: No secret meetings. If one vendor asks a question, the answer goes to everyone.

### Contract Types (Exam Essentials)
| Contract | Who Holds More Cost Risk? | When It Fits |
| :------- | :------------------------ | :----------- |
| **Fixed Price (FFP)** | Seller | Scope is clear/stable |
| **Cost-Reimbursable (CP)** | Buyer | Scope is uncertain/R&D |
| **Time & Materials (T&M)** | Shared | Staff augmentation / urgent work |

<style>
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.resource-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.resource-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.resource-tag {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 1rem;
}

.human { background: #dcfce7; color: #166534; }
.physical { background: #dbeafe; color: #1e40af; }

.resource-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project is delayed because of "waiting for equipment," the root cause is poor <strong>Physical Resource Planning</strong> (availability/lead time). If it's delayed because of "unclear roles," the fix is a <strong>RAM/RACI</strong>. If the question is about shifting cost risk to a vendor, a <strong>Fixed-Price</strong> contract generally puts more risk on the seller (assuming scope is stable).
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
