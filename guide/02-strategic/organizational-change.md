# 2.4 Organizational Change

"Technology projects don't fail because of technology—they fail because people don't adopt the change." This is the core principle of **Organizational Change Management (OCM)**.

---

## 🧭 The PMP Mindset: Adoption Is Part of “Done”
If the project delivers the tool but nobody uses it, value is not realized. PMI expects you to plan for:
- **Readiness** (are people prepared?)
- **Adoption** (are people actually using it?)
- **Sustainment** (will the behavior stick?)

## 👥 The Adoption Gap
The chasm between "Output" and "Outcome" is human adoption.

| The Deliverable (Output) | The Human Reality (Risk)                              | The OCM Solution                                         |
| :----------------------- | :---------------------------------------------------- | :------------------------------------------------------- |
| **New CRM System**       | Sales Reps stick to Excel because it's familiar.      | Early "Champion" program to build advocacy.              |
| **New AI Coding Tool**   | Developers fear job loss and sabotage implementation. | Transparent communication on job security + re-skilling. |
| **New Safety Protocol**  | Workers ignore it because it slows them down.         | "WIIFM" (What's in it for me) safety bonuses.            |

---

## 🪜 Change Frameworks
You must know the language of change dynamics.

<div class="change-grid">
  <div class="change-card adkar">
    <div class="change-title">ADKAR</div>
    <div class="change-tag">Individual</div>
    <ul>
      <li><strong>A</strong>wareness: "I know why."</li>
      <li><strong>D</strong>esire: "I want to do it."</li>
      <li><strong>K</strong>nowledge: "I know how."</li>
      <li><strong>A</strong>bility: "I can do it."</li>
      <li><strong>R</strong>einforcement: "I will keep doing it."</li>
    </ul>
  </div>
  <div class="change-card kotter">
    <div class="change-title">Kotter's 8 Steps</div>
    <div class="change-tag">Organizational</div>
    <ul>
      <li>Create a sense of urgency</li>
      <li>Build a guiding coalition</li>
      <li>Form a strategic vision</li>
      <li>Enlist a volunteer army</li>
      <li>Enable action by removing barriers</li>
      <li>Generate short-term wins</li>
      <li>Sustain acceleration</li>
      <li>Institute change</li>
    </ul>
  </div>
  <div class="change-card lewin">
    <div class="change-title">Lewin's Model</div>
    <div class="change-tag">Process</div>
    <ul>
      <li>🧊 <strong>Unfreeze</strong>: Break the status quo.</li>
      <li>🌊 <strong>Change</strong>: The transition state.</li>
      <li>❄️ <strong>Refreeze</strong>: Lock in the new state.</li>
    </ul>
  </div>
</div>

---

## 📄 The Change Management Plan (What It Typically Contains)
In practice (and on the exam), change is supported by a set of coordinated plans:
- **Change impact assessment** (who is impacted and how)
- **Stakeholder engagement and communications** (messages, channels, cadence)
- **Training and support model** (learning paths, job aids, help desk)
- **Change champion network** (local advocates)
- **Resistance management approach** (how feedback is captured and acted on)
- **Adoption and benefit metrics** (how you measure readiness and usage)

### Example Adoption Metrics
| Metric | Why it matters | Example |
| :-- | :-- | :-- |
| Training completion | Readiness signal | 95% complete before go-live |
| Active usage | Adoption signal | 80% weekly active users |
| Process compliance | Behavior signal | 90% of requests in new system |
| Support tickets trend | Friction signal | Tickets decrease after week 4 |

---

## 🛑 Managing Resistance
Resistance is a natural reaction to fear. Do not punish it; manage it.

*   **Root Cause**: Are they resisting because they *can't* do it (Lack of Knowledge) or because they *won't* do it (Lack of Desire)?
*   **WIIFM**: Communicate the benefits to *them*, not just the company.
*   **Saturation Check**: If the org is undergoing 5 changes simultaneously, adding a 6th will fail regardless of quality. The strategic move is to **Delay**.

::: tip 💡 ADKAR Diagnosis Shortcut
If training is excellent but adoption is still low, you usually have a **Desire** problem (motivation, fear, incentives), not a Knowledge problem.
:::

---

## 🧬 Culture vs. Strategy
Peter Drucker famously said, *"Culture eats strategy for breakfast."*

*   **Culture**: The shared values and "unwritten rules" of the organization (e.g., "We value speed over perfection" or "We never deliver bad news upwards").
*   **Strategy**: The plan to achieve goals.

**Exam Insight**: If your project strategy conflicts with the culture (e.g., trying to implement "Fail Fast" Agile in a culture that punishes all errors), the project will fail unless you address the culture first. You cannot install a tool that violates the culture.

## 🔄 Agile Change Management
In predictive projects, change is often a "Big Bang" at the end. In Agile, change is **iterative**:
*   **Continuous Feedback**: Users see the tool every 2 weeks, so resistance is caught early.
*   **Co-Creation**: Stakeholders help build the solution, so "Desire" (from ADKAR) is built-in.
*   **Minimal Viable Change**: Introduce small shifts incrementally rather than one massive shock.

<style>
.change-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.change-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.adkar { border-top: 4px solid #10b981; }
.kotter { border-top: 4px solid #3b82f6; }
.lewin { border-top: 4px solid #f59e0b; }

.change-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--vp-c-text-1);
}

.change-tag {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.change-card ul {
  padding-left: 1.25rem;
  margin: 0;
  font-size: 0.9rem;
}

.change-card li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a question says adoption is low despite great training, the problem is likely **Desire** (Lack of motivation/WIIFM). Training solves "Knowledge/Ability," but it cannot solve "Desire."
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
