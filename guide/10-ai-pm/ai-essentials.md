# 10.1 AI Essentials for PMs

Project Managers in 2026 don't need to code AI, but they must fluently "speak" AI. Understanding the **capabilities** and **limitations** of these tools is now a mandatory competency delta.

---

## 🛠️ The New PM Toolbox
Most AI tools you will use fall into three specific categories. You must know which to use when.

<div class="ai-grid">
  <div class="ai-card">
    <div class="ai-title">Generative AI (LLMs)</div>
    <div class="ai-tag">The Creator</div>
    <p><strong>Goal:</strong> Drafting content.<br><strong>Uses:</strong> Writing Charters, User Stories, Emails, and Summarizing Meeting Minutes.</p>
  </div>
  <div class="ai-card">
    <div class="ai-title">Predictive AI</div>
    <div class="ai-tag">The Forecaster</div>
    <p><strong>Goal:</strong> Seeing the future.<br><strong>Uses:</strong> Analyzing historical data to predict delays, cost overruns, and resource bottlenecks.</p>
  </div>
  <div class="ai-card">
    <div class="ai-title">Automation Agents</div>
    <div class="ai-tag">The Do-er</div>
    <p><strong>Goal:</strong> Removing busywork.<br><strong>Uses:</strong> Scheduling meetings, updating ticket status, and sending reminders.</p>
  </div>
</div>

---

## 🔍 The "Hallucination" Risk
AI is a **Probabilistic** engine, not a **Deterministic** one.
*   **Deterministic**: A Calculator. $2 + 2 = 4$ every time.
*   **Probabilistic**: An LLM. It guesses the "next most likely word."

Because of this, AI can "hallucinate"—confidently stating facts, dates, or regulations that are completely false.

::: warning ⚠️ The Golden Commandment
**Trust, but Verify.** Never send an AI-generated artifact to a stakeholder without a human review. You are accountable for the output, not the bot.
:::

---

## 👤 Human-in-the-Loop (HITL)
The 2026 standard is **HITL**. AI produces the draft; the Human provides the judgment.

| AI Strengths (The Machine)                            | Human Strengths (The Leader)                            |
| :---------------------------------------------------- | :------------------------------------------------------ |
| **Speed**: Drafting 50 pages in seconds.              | **Empathy**: Negotiating with an angry user.            |
| **Patterns**: Finding a trend in 10,000 rows of data. | **Context**: Understanding organizational politics.     |
| **Logic**: Following a ruleset perfectly.             | **Ethics**: Deciding what is "right" vs. " profitable." |

<style>
.ai-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.ai-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.ai-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--vp-c-brand);
}

.ai-tag {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.ai-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> A question may ask: "Your AI tool identified a 95% chance of a schedule delay. What do you do?" The answer is <strong>"Analyze the data with the team to validate the root cause."</strong> Never blindly accept the prediction; use it as a trigger for human investigation.
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
