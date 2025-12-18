# 2.1b Portfolio Management

While Project Management is about "Doing things right," **Portfolio Management** is about **"Doing the right things."** It is the centralized management of projects to achieve strategic objectives.

---

## 🧭 The Hierarchy of Work
Understanding the distinction is vital for the exam.

<div class="hierarchy-grid">
  <div class="h-card portfolio">
    <div class="h-title">Portfolio</div>
    <div class="h-tag">The Strategy</div>
    <ul class="h-list">
      <li><strong>Focus</strong>: Strategic Value</li>
      <li><strong>Scope</strong>: The entire enterprise</li>
      <li><strong>Success</strong>: Aggregate investment performance</li>
    </ul>
  </div>
  <div class="h-card program">
    <div class="h-title">Program</div>
    <div class="h-tag">The Synergies</div>
    <ul class="h-list">
      <li><strong>Focus</strong>: Related Benefits</li>
      <li><strong>Scope</strong>: A group of projects</li>
      <li><strong>Success</strong>: Benefits Realization</li>
    </ul>
  </div>
  <div class="h-card project">
    <div class="h-title">Project</div>
    <div class="h-tag">The Deliverable</div>
    <ul class="h-list">
      <li><strong>Focus</strong>: Specific Output</li>
      <li><strong>Scope</strong>: Defined Scope Statement</li>
      <li><strong>Success</strong>: Time, Cost, Quality</li>
    </ul>
  </div>
</div>

---

## ⚖️ Portfolio Balancing
A healthy portfolio is a balanced mix of investments.

<div class="balance-grid">
  <div class="balance-card">
    <div class="balance-icon">🚀</div>
    <div class="balance-title">Transform</div>
    <p>High-risk, high-reward "Moonshots" that create new markets.</p>
  </div>
  <div class="balance-card">
    <div class="balance-icon">📈</div>
    <div class="balance-title">Grow</div>
    <p>Medium-risk enhancements to expand existing products.</p>
  </div>
  <div class="balance-card">
    <div class="balance-icon">💡</div>
    <div class="balance-title">Run</div>
    <p>Low-risk operational maintenance (Keep the lights on).</p>
  </div>
</div>

---

## ⚡ Resource Capacity
The hardest part of portfolio management is the **Resource Constraint**.
*   **WIP Limits**: Reducing the number of active projects to prevent "Resource Peanut-Butter" (spreading people so thin they perform poorly everywhere).
*   **Bottlenecks**: Identifying scarce skills (e.g., Security Architects) that throttle the entire portfolio.

<style>
.hierarchy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.h-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.portfolio { border-top: 4px solid #8b5cf6; }
.program { border-top: 4px solid #3b82f6; }
.project { border-top: 4px solid #10b981; }

.h-title {
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--vp-c-text-1);
}

.h-tag {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.h-list {
  padding-left: 1.25rem;
  font-size: 0.9rem;
  margin: 0;
}
.h-list li { margin-bottom: 0.5rem; }

.balance-grid {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.balance-card {
  flex: 1;
  min-width: 200px;
  text-align: center;
  padding: 1.5rem;
  background: var(--vp-c-bg-mute);
  border-radius: 12px;
}

.balance-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.balance-title { font-weight: 700; margin-bottom: 0.5rem; }
.balance-card p { font-size: 0.85rem; margin: 0; }
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If your project is "Green" (on time/budget) but the Portfolio Manager asks to cancel it, do not argue. The strategy may have shifted, making your project irrelevant. Your role is to execute an orderly administrative closure.
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
