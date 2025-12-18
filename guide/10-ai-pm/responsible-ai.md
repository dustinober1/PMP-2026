# 10.2 Responsible AI: Ethics & Governance

Using AI is not just a technical choice; it is an **ethical** one. As a Project Manager, you are the steward of your organization's data, your client's secrets, and your team's integrity.

---

## 🛡️ The 3 Pillars of Responsible AI
To navigate the risks of AI, follow these pillars:

<div class="resp-grid">
  <div class="resp-card">
    <div class="resp-title">1. Data Privacy</div>
    <div class="resp-tag">The Red Line</div>
    <p><strong>Rule:</strong> Never put sensitive data (PII, Financials, IP, Strategy) into a public, free AI model (like standard ChatGPT). It may be used to train the model.</p>
  </div>
  <div class="resp-card">
    <div class="resp-title">2. Bias Awareness</div>
    <div class="resp-tag">The Blind Spot</div>
    <p><strong>Rule:</strong> AI is trained on history. If history was biased (e.g., hiring practices), the AI will be biased. You must actively audit outputs for fairness.</p>
  </div>
  <div class="resp-card">
    <div class="resp-title">3. Accountability</div>
    <div class="resp-tag">The Owner</div>
    <p><strong>Rule:</strong> The AI is a tool, like a calculator. If a bridge collapses because of a calculation error, the engineer is blamed, not the calculator.</p>
  </div>
</div>

---

## 📜 The "AI Charter"
Just as you create a Team Charter for human interactions, you need an **AI Working Agreement**. It should define:
*   **Approved Tools**: Which specific engines (Enterprise versions) are safe to use?
*   **Transparency**: When must a team member *disclose* that a document was written by AI?
*   **Validation**: What is the mandatory review process before AI content leaves the team?

::: danger 🚫 "Shadow AI"
Using unapproved AI tools to bypass security protocols is known as "Shadow AI." This is a major compliance violation. The PM must provide safe, approved alternatives so the team isn't tempted to go rogue.
:::

---

## 🏛️ Explainability (XAI)
In regulated industries (Healthcare, Finance), you cannot just say "The AI told me to reject this loan." You need **Explainability**.
*   **Black Box AI**: Inputs go in, answers come out, no one knows why. (Avoid for critical decisions).
*   **Explainable AI**: The system provides the "Why" behind the decision. (Required for Governance).

<style>
.resp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.resp-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.resp-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--vp-c-brand);
}

.resp-tag {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.resp-card p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a team member uses a free online AI to summarize a confidential meeting with a client, they have committed a <strong>Security Breach</strong>. The PM's response is to immediateContain (notify IT/Security) and then Educate the team on proper tool usage.
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
