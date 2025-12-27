# 2.1a Organizational Strategy & Project Selection

"Why are we doing this?" Organizations have unlimited ideas but limited resources. **Project Selection** is the strategic filter that separates the "Good ideas" from the "Right ideas."

---

## 🧠 The PMP Decision Rule
Selection questions test whether you can distinguish between:
- **Desirable work** (interesting, popular, "nice to have")
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

### 📊 SWOT Deep Dive: When to Use What

| Finding | Strategic Response | Project Example |
| :-- | :-- | :-- |
| **Strength + Opportunity** | **Aggressive growth** - Leverage what you're good at | "We have AI expertise and the market wants AI products → Launch AI product line" |
| **Weakness + Opportunity** | **Develop capability** - Build what you lack | "Market wants mobile; we lack skills → Mobile dev training program" |
| **Strength + Threat** | **Diversify** - Use strengths defensively | "Competitor entering our market → Accelerate new feature development" |
| **Weakness + Threat** | **Defensive** - Minimize exposure | "Regulation targeting our weakness → Compliance remediation project" |

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
| **NPV** | Future money, converted to today's dollars | Comparing long-term investments | Mentions "discount rate" or "present value" |
| **ROI** | Return relative to cost | Quick financial sanity check | Mentions "benefits vs costs" |
| **Payback Period** | How fast you recover the investment | Cash-constrained organizations | Mentions "time to recoup" |
| **Benefit/Cost Ratio** | Benefits divided by costs | Ranking multiple options | Mentions "ratio" or "BCR" |
| **IRR** | Projected annual growth rate | Comparing investment returns | Mentions "rate of return" |
| **Scoring Model** | Weighted criteria (value, risk, compliance, capacity) | Comparing mixed/uncertain options | Mentions "score", "ranking", "weights" |

::: tip 💡 Scoring Model Example
If "Strategic Fit" is weighted at 40% and "Risk" is weighted at 20%, a project with perfect ROI but poor fit may still lose.
:::

---

## 📐 Financial Formulas (Know These Cold!)

Understanding these formulas is essential for PMP exam success. You don't need to perform complex calculations, but you must understand what the results mean.

### 1. Net Present Value (NPV)

**Formula**: NPV = Σ (Cash Flow / (1 + r)^t) - Initial Investment

**Plain English**: "What is the future money worth in today's dollars?"

**Decision Rule**: 
- **NPV > 0** → Project adds value (ACCEPT)
- **NPV < 0** → Project destroys value (REJECT)
- **NPV = 0** → Break-even (indifferent)

<div class="formula-example">
  <strong>📝 Worked Example:</strong>
  <p>Project costs $100,000 upfront. Expected to return $40,000/year for 3 years. Discount rate is 10%.</p>
  <ul>
    <li>Year 1: $40,000 / (1.10)¹ = $36,364</li>
    <li>Year 2: $40,000 / (1.10)² = $33,058</li>
    <li>Year 3: $40,000 / (1.10)³ = $30,053</li>
    <li><strong>Total PV = $99,475</strong></li>
    <li><strong>NPV = $99,475 - $100,000 = -$525</strong></li>
  </ul>
  <p><strong>Decision:</strong> NPV is negative → Project destroys value at 10% discount rate.</p>
</div>

### 2. Return on Investment (ROI)

**Formula**: ROI = (Benefits - Costs) / Costs × 100%

**Plain English**: "For every dollar I invest, how many cents do I get back?"

**Decision Rule**: Higher ROI is better. Compare to organizational hurdle rate or alternative investments.

<div class="formula-example">
  <strong>📝 Worked Example:</strong>
  <p>Project costs $50,000 and generates $75,000 in benefits.</p>
  <ul>
    <li>ROI = ($75,000 - $50,000) / $50,000 × 100%</li>
    <li>ROI = $25,000 / $50,000 × 100%</li>
    <li><strong>ROI = 50%</strong></li>
  </ul>
  <p><strong>Decision:</strong> For every $1 invested, you get $0.50 in profit.</p>
</div>

### 3. Benefit-Cost Ratio (BCR)

**Formula**: BCR = Total Benefits / Total Costs

**Decision Rule**:
- **BCR > 1** → Benefits exceed costs (ACCEPT)
- **BCR < 1** → Costs exceed benefits (REJECT)
- **BCR = 1** → Break-even

<div class="formula-example">
  <strong>📝 Worked Example:</strong>
  <p>Project A: Benefits = $200,000, Costs = $150,000 → BCR = 1.33</p>
  <p>Project B: Benefits = $500,000, Costs = $450,000 → BCR = 1.11</p>
  <p><strong>Decision:</strong> Project A has a higher BCR, so it's more efficient per dollar spent.</p>
</div>

### 4. Payback Period

**Formula**: Payback Period = Initial Investment / Annual Cash Flow

**Plain English**: "How many years until I get my money back?"

**Decision Rule**: Shorter is better, especially in cash-constrained environments.

<div class="formula-example">
  <strong>📝 Worked Example:</strong>
  <p>Project costs $120,000. Expected annual savings = $40,000/year.</p>
  <ul>
    <li>Payback Period = $120,000 / $40,000 = 3 years</li>
  </ul>
  <p><strong>Decision:</strong> Investment recovered in 3 years. Compare to organizational threshold (e.g., "Max 2 years" → REJECT).</p>
</div>

### 5. Internal Rate of Return (IRR)

**Concept**: The discount rate at which NPV = 0. Think of it as the "interest rate" your investment earns.

**Decision Rule**: 
- **IRR > Required Rate of Return** → ACCEPT
- **IRR < Required Rate of Return** → REJECT
- When comparing projects: **Higher IRR is generally better** (all else being equal)

::: warning ⚠️ IRR Limitations
IRR can be misleading when:
- Cash flows are unconventional (multiple sign changes)
- Comparing projects of very different sizes
- Reinvestment assumptions are unrealistic

For the exam, know that **higher IRR is generally preferred**, but NPV is often considered more reliable.
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
| **Economic Value Added (EVA)** | Net operating profit minus the cost of capital. | Measures true value creation beyond covering capital costs. |
| **Depreciation** | Allocation of asset cost over its useful life. | Affects cash flow analysis; not an actual cash outflow. |

### 🎯 The Sunk Cost Fallacy (Deep Dive)

This is one of the most tested concepts on the PMP exam. Here's a detailed scenario:

<div class="scenario-box">
  <strong>Scenario: The Doomed Project</strong>
  <p>Your organization has spent $5 million on a CRM implementation. The project is 75% complete. A market analysis reveals that the product you're building will be obsolete before launch due to a competitor's announcement. Completing the project will cost another $2 million.</p>
  
  <p><strong>The Sponsor says:</strong> "We can't waste the $5 million we already spent. We must finish!"</p>
  
  <p><strong>❌ Wrong Answer:</strong> Continue because of the $5 million invested.</p>
  <p><strong>✅ Right Answer:</strong> Recommend termination. The $5 million is a sunk cost. The only relevant question is: "Will spending $2 million more create value?" If the answer is no, stop.</p>
</div>

### 🔄 Opportunity Cost Calculation Examples

| Choice | Project A Value | Project B Value | Opportunity Cost of Choosing A |
| :-- | :-- | :-- | :-- |
| Scenario 1 | $100,000 | $80,000 | $80,000 (what you gave up) |
| Scenario 2 | $250,000 | $200,000 | $200,000 |
| Scenario 3 | $50,000 | $150,000 | $150,000 (you chose poorly!) |

---

## 🧩 Non-Financial Selection Filters (Often the Real Deciders)
Even a high-ROI idea can be rejected if it fails critical constraints:

- **Risk appetite / risk threshold** (is the organization willing to take this risk now?)
- **Capacity** (do we have the people and skills?)
- **Time criticality** (regulatory deadlines, competitive window)
- **Dependencies** (blocked by another program/project)
- **ESG / ethics** (vendor behavior, sustainability constraints)
- **Strategic fit** (does it align with where we're going?)
- **Customer impact** (will this improve or hurt customer experience?)

### 📋 Weighted Scoring Model Example

| Criterion | Weight | Project A Score (1-10) | Weighted A | Project B Score | Weighted B |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Strategic Fit | 30% | 9 | 2.7 | 6 | 1.8 |
| Financial Return (ROI) | 25% | 7 | 1.75 | 9 | 2.25 |
| Risk Level (lower = better) | 20% | 8 | 1.6 | 5 | 1.0 |
| Resource Availability | 15% | 6 | 0.9 | 7 | 1.05 |
| Time to Market | 10% | 8 | 0.8 | 8 | 0.8 |
| **Total** | **100%** | | **7.75** | | **6.9** |

**Decision**: Project A wins despite lower financial return because of superior strategic fit and lower risk.

---

## 🔄 Methodology Alignment
*   **Predictive**: Locked in via the **Business Case** before the Charter is signed.
*   **Agile**: Validated continuously via the **Product Vision** and Backlog prioritization.
*   **Hybrid**: Business case justifies the initiative; value is validated iteratively.

### 📊 Selection by Methodology

| Approach | Selection Artifact | Validation Frequency | Change Response |
| :-- | :-- | :-- | :-- |
| Predictive | Business Case → Charter | At phase gates | Formal change control |
| Agile | Product Vision → Backlog | Every iteration/sprint | Continuous reprioritization |
| Hybrid | Business Case → Backlog | At milestones + sprints | Guardrails + flexibility |

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

.formula-example {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
}

.formula-example strong {
  color: var(--vp-c-brand);
}

.scenario-box {
  background: rgba(239, 68, 68, 0.1);
  border-left: 4px solid #ef4444;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project no longer aligns with a shifting strategy, the PM's duty is to <strong>Recommend Termination</strong>. Continuing to spend budget on a project that the company no longer needs is a failure of stewardship.
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
