# 2.1c Project and Program Alignment

Individual projects can fail in isolation if their interdependencies aren't managed. **Programs** provide the connective tissue that ensures 1 + 1 = 3.

---

## 🔗 The Synergy Engine
Why group projects into a Program?

<div class="synergy-grid">
  <div class="synergy-card">
    <div class="synergy-title">Silo Breaking</div>
    <p>Prevents duplication of effort. (e.g., Two projects building the same login screen).</p>
  </div>
  <div class="synergy-card">
    <div class="synergy-title">Dependency Management</div>
    <p>Ensures Project B doesn't start until Project A finishes the prerequisite API.</p>
  </div>
  <div class="synergy-card">
    <div class="synergy-title">Resource Optimization</div>
    <p>Using one Data Architect across four projects instead of hiring four part-timers.</p>
  </div>
  <div class="synergy-card">
    <div class="synergy-title">Benefits Realization</div>
    <p>Delivering a "Platform" (Program Benefit) rather than just a collection of apps.</p>
  </div>
</div>

---

## 🚦 Managing Dependencies
A dependency is where one project holds the key to another's success.

*   **Finish-to-Start**: The Platform Foundation (Project A) must be complete before the App (Project B) can launch.
*   **Resource Lock**: Both projects need the Lead Security Engineer in Week 40.
*   **External**: Project C is waiting for a government permit.

::: tip 💡 Integrated Roadmaps
Program Managers use **Integrated Master Schedules** to visualize these dependencies. If Project A slips by 2 weeks, the software automatically highlights the crash in Project B.
:::

---

## 🔄 Delivery Contexts
How alignment works in different methodologies:

| Method             | Alignment Mechanism                                                                                                        |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Agile (Scaled)** | **PI Planning** (Program Increment): All teams meet every 10 weeks to map dependencies on a physical board (String board). |
| **Predictive**     | **Master Schedule**: A rigid Gantt chart linking critical paths across projects.                                           |
| **Hybrid**         | **Guardrails**: Fixed milestones (Launch Date) with flexible execution (Sprints) inside.                                   |

<style>
.synergy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.synergy-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  text-align: center;
}

.synergy-title {
  font-weight: 700;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.synergy-card p {
  font-size: 0.9rem;
  margin: 0;
  color: var(--vp-c-text-2);
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If you discover a dependency on another project that you do not control:
  1.  **Contact Peer PM**: Try to resolve it directly.
  2.  **Escalate to Program Manager**: If you cannot resolve it peer-to-peer.
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
