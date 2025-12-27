# 2.1a Organizational Strategy & Project Selection

"Why are we doing this?" Organizations have unlimited ideas but limited resources. **Project Selection** is the strategic filter that separates the "Good ideas" from the "Right ideas."

---

## 🧠 The PMP Decision Rule
Selection questions test whether you can distinguish between:
- **Desirable work** (interesting, popular, “nice to have”)
- **Viable work** (fits capacity, timing, risk appetite)
- **Mandatory work** (compliance, safety, legal)
- **Strategic work** (directly supports objectives and measurable value)

If work is **not aligned**, the PMI-aligned response is to **re-evaluate the business case**, **re-prioritize**, or **recommend termination**.

## 🏗️ Strategic Lenses
Leaders use these frameworks to find gaps in their strategy.

<div class="lens-grid">
  <div class="lens-card">
    <div class="lens-title">SWOT Analysis</div>
    <div class="lens-content">
      <div class="swot-item s"><strong>S</strong>trengths (Internal)</div>
      <div class="swot-item w"><strong>W</strong>eaknesses (Internal)</div>
      <div class="swot-item o"><strong>O</strong>pportunities (External)</div>
      <div class="swot-item t"><strong>T</strong>hreats (External)</div>
    </div>
  </div>
  <div class="lens-card">
    <div class="lens-title">Balanced Scorecard</div>
    <ul>
      <li>💰 <strong>Financial</strong>: ROI & Profit.</li>
      <li>👥 <strong>Customer</strong>: Satisfaction & Loyalty.</li>
      <li>⚙️ <strong>Internal</strong>: Efficiency & Process.</li>
      <li>🌱 <strong>Growth</strong>: Innovation & Skills.</li>
    </ul>
  </div>
</div>

---

## 🚦 The Selection Filter
Not all projects are created equal. They fall into three buckets:

| Category        | Description                                                     | Driver            |
| :-------------- | :-------------------------------------------------------------- | :---------------- |
| **Operational** | "Keep the lights on." Upgrades, maintenance, and efficiency.    | Risk Avoidance    |
| **Strategic**   | "Change the business." New products, market expansion, and R&D. | Growth / Revenue  |
| **Compliance**  | "Stay out of jail." Regulatory mandates (GDPR, Safety).         | Legal / Essential |

::: danger 🛑 The Compliance Trap
**Compliance projects are non-negotiable.** Even if they have a negative NPV (they cost money and generate zero revenue), they must be done to keep the license to operate.
:::

---

## 🧮 Benefit Measurement Methods (How Organizations Compare Options)
Selection is often a combination of **financial** and **strategic** criteria.

| Method | What it means (plain English) | When it is useful | Common exam clue |
| :-- | :-- | :-- | :-- |
| **NPV** | Future money, converted to today’s dollars | Comparing long-term investments | Mentions “discount rate” or “present value” |
| **ROI** | Return relative to cost | Quick financial sanity check | Mentions “benefits vs costs” |
| **Payback Period** | How fast you recover the investment | Cash-constrained organizations | Mentions “time to recoup” |
| **Benefit/Cost Ratio** | Benefits divided by costs | Ranking multiple options | Mentions “ratio” or “BCR” |
| **Scoring Model** | Weighted criteria (value, risk, compliance, capacity) | Comparing mixed/uncertain options | Mentions “score”, “ranking”, “weights” |

::: tip 💡 Scoring Model Example
If “Strategic Fit” is weighted at 40% and “Risk” is weighted at 20%, a project with perfect ROI but poor fit may still lose.
:::

---

## 💰 Critical Financial Concepts (The "Trap" Concepts)
The exam loves to trick you with these. Know them cold:

| Concept | Definition | The Exam Rule |
| :-- | :-- | :-- |
| **Sunk Cost** | Money already spent that cannot be recovered. | **Ignore it.** Never make a future decision based on "saving" past spend. If a project is failing, the $1M you already spent is irrelevant. |
| **Opportunity Cost** | The value of the "next best alternative" you didn't choose. | If you choose Project A ($100k value) over Project B ($80k value), the Opportunity Cost is **$80k**. |
| **IRR (Internal Rate of Return)** | The projected annual growth rate of the investment. | **Higher is better.** If choosing between Project A (IRR 12%) and Project B (IRR 8%), choose A (all else being equal). |
| **Law of Diminishing Returns** | The point where adding more input (money/people) yields less output. | Adding more people to a late project often makes it later (Brooks' Law). |

---

## 🧩 Non-Financial Selection Filters (Often the Real Deciders)
Even a high-ROI idea can be rejected if it fails critical constraints:

- **Risk appetite / risk threshold** (is the organization willing to take this risk now?)
- **Capacity** (do we have the people and skills?)
- **Time criticality** (regulatory deadlines, competitive window)
- **Dependencies** (blocked by another program/project)
- **ESG / ethics** (vendor behavior, sustainability constraints)

---

## 🔄 Methodology Alignment
*   **Predictive**: Locked in via the **Business Case** before the Charter is signed.
*   **Agile**: Validated continuously via the **Product Vision** and Backlog prioritization.

<style>
.lens-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.lens-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.lens-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-border);
  padding-bottom: 0.5rem;
}

.lens-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.swot-item {
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-align: center;
  background: var(--vp-c-bg-mute);
}

.s { border-left: 3px solid #10b981; }
.w { border-left: 3px solid #ef4444; }
.o { border-left: 3px solid #3b82f6; }
.t { border-left: 3px solid #f59e0b; }

.lens-card ul {
  padding-left: 1.25rem;
  margin: 0;
  font-size: 0.9rem;
}

.lens-card li {
  margin-bottom: 0.5rem;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project no longer aligns with a shifting strategy, the PM's duty is to **Recommend Termination**. Continuing to spend budget on a project that the company no longer needs is a failure of stewardship.
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
