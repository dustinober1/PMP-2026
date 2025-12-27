# 5.1 Business Case & Strategic Selection

Before a project is authorized, it must be justified. The organization needs to know: *Is this investment better than all the other options?* In the 2026 era, this choice is driven by **Value Realization**.

---

## 📄 The Business Case
The Business Case is a pre-project document that provides the economic feasibility study. It answers the "Why?"

<div class="case-grid">
  <div class="case-card">
    <div class="case-title">Economic Feasibility</div>
    <p>Do the financial rewards outweigh the costs and risks? (NPV, IRR analysis).</p>
  </div>
  <div class="case-card">
    <div class="case-title">Strategic Alignment</div>
    <p>How does this project support the organization's 2026-2030 strategic roadmap?</p>
  </div>
  <div class="case-card">
    <div class="case-title">Benefits Realization</div>
    <p>What specific value (tangible or intangible) will be delivered to the customer?</p>
  </div>
</div>

---

## 🧩 Business Case vs Charter (Don’t Mix These Up)
These documents are connected, but they answer different questions.

| Document | Primary Question | What it Contains (High Level) | Who Approves It |
| --- | --- | --- | --- |
| **Business Case** | **Should we invest?** | Value justification, options, benefits, costs, assumptions | Sponsor / Portfolio governance |
| **Benefits Management Plan** | **How will benefits be measured and realized?** | Measures, owners, timeline, sustainment approach | Sponsor / Benefits owner |
| **Project Charter** | **Are we authorized to start?** | PM authority, high-level scope, milestones, budget ceiling | Sponsor |

::: tip 🧠 Exam Pattern
If a question asks **“Should we continue?”**, the best answer often involves **revalidating the Business Case** and **escalating to the Sponsor** if the value case has changed.
:::

---

## 🕵️‍♀️ Pre-Charter: The Needs Assessment
Before a Business Case is even written, a **Needs Assessment** is often conducted to understand the *business problem* or *opportunity*.
*   **Gap Analysis**: "Where are we now (Current State) vs. Where do we want to be (Future State)?"
*   **Recommendation**: The Business Case is the result of selecting the best option to close that gap.

---

## 📉 Critical Economic Concepts
The exam tests your ability to ignore irrelevant data (Sunk Cost) and value what you give up (Opportunity Cost).

<div class="metric-grid">
  <div class="metric-card">
    <div class="metric-name">Sunk Cost</div>
    <div class="metric-desc">Money Already Spent</div>
    <div class="metric-rule">Ignore It</div>
    <p>Money spent in the past is gone. Never make future decisions based on "saving" past spend. Focus only on <strong>future value</strong>.</p>
  </div>
  <div class="metric-card">
    <div class="metric-name">Opportunity Cost</div>
    <div class="metric-desc">Value of the Path Not Taken</div>
    <div class="metric-rule">Know It</div>
    <p>If you choose Project A ($100k value) over Project B ($80k value), the Opportunity Cost is <strong>$80k</strong> (the value of the rejected option).</p>
  </div>
  <div class="metric-card">
    <div class="metric-name">Diminishing Returns</div>
    <div class="metric-desc">The Plateau</div>
    <div class="metric-rule">Watch For It</div>
    <p>The point where adding more resources/money yields less and less value per unit.</p>
  </div>
</div>

---

## 📊 Project Selection Metrics
The PMP exam expects you to choose projects based on cold, hard data.

<div class="metric-grid">
  <div class="metric-card">
    <div class="metric-name">NPV</div>
    <div class="metric-desc">Net Present Value</div>
    <div class="metric-rule">Higher is Better</div>
    <p>The total value in today's dollars. If NPV > 0, the project is profitable.</p>
  </div>
  <div class="metric-card">
    <div class="metric-name">IRR</div>
    <div class="metric-desc">Internal Rate of Return</div>
    <div class="metric-rule">Higher is Better</div>
    <p>The interest rate the project "earns." Compare this to the company's hurdle rate.</p>
  </div>
  <div class="metric-card">
    <div class="metric-name">BCR</div>
    <div class="metric-desc">Benefit-Cost Ratio</div>
    <div class="metric-rule">> 1.0 is Better</div>
    <p>For every $1 spent, how much do we get back? A BCR of 1.5 = $1.50 return per $1 spent.</p>
  </div>
  <div class="metric-card">
    <div class="metric-name">Payback</div>
    <div class="metric-desc">Payback Period</div>
    <div class="metric-rule">Shorter is Better</div>
    <p>The time it takes to recover the initial investment.</p>
  </div>
</div>

::: warning 🚦 Exam Trap: NPV is King
If Project A has a 2-year payback and $10k NPV, but Project B has a 4-year payback and $80k NPV, **pick Project B**. NPV reflects the true scale of value delivery.
:::

### Quick Formulas (Know the Shape)
- **NPV**: `NPV = Σ [CF_t / (1 + r)^t] - Initial Investment`
- **BCR**: `BCR = PV(Benefits) / PV(Costs)`
- **Payback**: Time to recover the initial investment *(ignores time value of money)*

### Mini Example: NPV in Plain English
If you invest **$100,000** now and expect **$60,000** at the end of Year 1 and **$60,000** at the end of Year 2, with a **10%** discount rate:
- `NPV ≈ 60,000/1.1 + 60,000/1.1^2 - 100,000 ≈ 4,000`
- **NPV > 0** ⇒ the project creates value *after* accounting for the cost of capital.

---

## 🛠️ The Benefits Management Plan
Pairing with the Business Case, this defines *how* and *when* value will be measured.

### Tangible vs. Intangible Benefits
*   **Tangible (Hard)**: Easy to quantify in dollars.
    *   *Examples*: Revenue increase, cost savings, market share %, staff reduction.
*   **Intangible (Soft)**: Real value, but harder to track directly in financial terms.
    *   *Examples*: Brand reputation, customer satisfaction (NPS), employee morale, strategic alignment.

### Core Plan Components
1.  **Target Benefits (Outcomes)**: The measurable outcomes the organization wants.
2.  **Measures + Baselines**: How you’ll measure each benefit and what “today” looks like.
3.  **Benefit Owner**: The person accountable for realizing/measuring benefits *after* project closure.
4.  **Realization Timeline**: When benefits will show up (immediate vs. long-term).
5.  **Sustainment Plan**: Who maintains the capability so benefits persist.
6.  **Key Assumptions**: What must remain true for benefits to happen.

<style>
.case-grid, .metric-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.case-card, .metric-card {
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.case-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.metric-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--vp-c-brand);
}

.metric-desc {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.metric-rule {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-brand-soft);
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 1rem;
}

.case-card p, .metric-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project no longer aligns with the strategy defined in the <strong>Business Case</strong>, the PM must escalate to the <strong>Sponsor</strong>. Projects that don't deliver value should not exist.
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
