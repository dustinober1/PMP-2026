# 5.4 Delivery Strategy

One of the PM's first "process" decisions is selecting the high-level delivery strategy. In 2026, this is not a religious choice between Scrum or Predictive—it is a logical choice based on **Risk** and **Frequency of Value**.

---

## 🧭 The Selection Matrix
Use these diagnostic markers to choose the right path for your project.

<div class="strategy-grid">
  <div class="strategy-card predictive">
    <div class="strategy-title">Predictive</div>
    <p>Best for <strong>Stable</strong> environments with known solutions.</p>
    <ul>
      <li>High cost of change</li>
      <li>Single final release</li>
      <li>Detailed upfront planning</li>
    </ul>
  </div>
  <div class="strategy-card agile">
    <div class="strategy-title">Adaptive (Agile)</div>
    <p>Best for <strong>Volatile</strong> environments with emerging requirements.</p>
    <ul>
      <li>Low cost of change</li>
      <li>Frequent incremental releases</li>
      <li>Continuous planning (Sprints)</li>
    </ul>
  </div>
  <div class="strategy-card hybrid">
    <div class="strategy-title">Hybrid</div>
    <p>Best for <strong>Complex</strong> projects with mixed characteristics.</p>
    <ul>
      <li>Stable foundation / Agile features</li>
      <li>Predictive dates / Agile path</li>
      <li>Gated releases</li>
    </ul>
  </div>
</div>

---

## 🛠️ Tailoring Factors
When determining the strategy during initiation, consider the **Tailoring Matrix**:

1.  **Complexity**: How many moving parts? High complexity often benefits from Agile's empirical loops.
2.  **Risk**: Can you afford to fail fast? If yes, use Agile. If failure is catastrophic (Bridge Building), use Predictive.
3.  **Frequency of Delivery**: Does the customer need value every 2 weeks, or can they wait 1 year?
4.  **Resource Availability**: Do you have a dedicated cross-functional team (Agile) or shared resources (Predictive)?

::: info 💡 The 2026 Standard
Most modern enterprise projects are **Hybrid**. They use Predictive milestones for the "Business Case" and "Go-Live" while allowing teams to use Agile "Sprints" for execution and refinement.
:::

<style>
.strategy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.strategy-card {
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}

.strategy-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.strategy-card p {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.strategy-card ul {
  padding-left: 1.25rem;
  font-size: 0.8rem;
  margin: 0;
}

.predictive { border-top: 4px solid #3b82f6; }
.agile { border-top: 4px solid #10b981; }
.hybrid { border-top: 4px solid #f59e0b; }
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a project has high uncertainty but a non-negotiable legal deadline, the best strategy is <strong>Hybrid</strong>. Use Predictive guardrails for the date and Agile cycles for the content.
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
