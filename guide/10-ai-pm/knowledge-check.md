# Knowledge Check: AI & Project Management

Test your AI literacy and judgment to navigate the modern, tech-augmented project environment.

<QuizComponent
  title="Chapter 10: AI & PM"
  :questions="[
    {
      text: 'A project manager is using a free, public AI tool to help draft a project schedule. To ensure data security, what is the MOST important action the PM must take?',
      options: [
        'Use a complex password for the specific AI tool account',
        'Ensure that no confidential company data, PII, or trade secrets are uploaded',
        'Prompt the AI to delete the chat history after the session',
        'Only use the tool during official business hours on the VPN'
      ],
      correct: 1,
      explanation: 'Public AI models often use input data for training. You must never upload confidential or sensitive data to a public tool without enterprise contracts in place.',
      reference: 'Section 10.2'
    },
    {
      text: 'Your team uses an AI risk tool that flags a specific vendor as a High Risk for delays. The vendor has a perfect track record with your company individually. How should you proceed?',
      options: [
        'Ignore the AI alert as it is likely a hallucination based on bad data',
        'Immediately fire the vendor and switch to the backup supplier',
        'Use the alert as a trigger to investigate the vendor global supply chain status',
        'Add a 2-week buffer to the schedule without telling the vendor'
      ],
      correct: 2,
      explanation: 'In a HITL (Human-in-the-Loop) model, AI insights are triggers for human investigation. The AI may see global data (e.g., a strike at the vendor parent company) that you cannot see.',
      reference: 'Section 10.1'
    },
    {
      text: 'What is the primary risk of using an LLM to generate a Project Charter without a thorough human review?',
      options: [
        'The charter document file size will be too large',
        'The AI might hallucinate stakeholders or regulations that do not exist',
        'The sponsor will be upset that you saved time on the draft',
        'The AI will charge extra fees for commercial usage'
      ],
      correct: 1,
      explanation: 'Hallucination is a core limitation of probabilistic models. They can confidently invent potential stakeholders, laws, or requirements that are factually incorrect.',
      reference: 'Section 10.1'
    },
    {
      text: 'A Project Manager wants to establish clear rules for how the team uses GenAI tools (e.g., when to disclose usage). Which document should updated?',
      options: [
        'The Stakeholder Register',
        'The Issue Log',
        'The Team Working Agreement (Team Charter)',
        'The Project Schedule'
      ],
      correct: 2,
      explanation: 'Rules of engagement, including technology usage and ethical disclosure norms, belong in the Team Charter/Working Agreement.',
      reference: 'Section 10.2'
    },
    {
      text: 'In a regulated industry, stakeholders demand to know why an AI model rejected a loan application. The current model gives a simple Yes/No. What is missing?',
      options: [
        'Generative AI',
        'Explainability (XAI)',
        'Predictive Analytics',
        'Sentiment Analysis'
      ],
      correct: 1,
      explanation: 'Explainable AI (XAI) is required when you need to understand the logic/factors behind an AI decision, which is critical for compliance.',
      reference: 'Section 10.2'
    }
  ]"
/>

## Additional Study Topics

### 1. The HITL Principle
Always remember **Human-in-the-Loop**.
*   **AI**: Provides speed, scale, and pattern recognition.
*   **Human**: Provides context, ethics, and accountability.

### 2. AI as a Tool, Not a Methodology
AI is not a replacement for Agile or Predictive. It is a **Tech Enhancer** that sits on top of your existing methodology to remove friction.

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a team is resisting a new AI tool because they fear job loss, the PM should use <strong>Emotional Intelligence</strong> to address their concerns, educate them on the tool's benefits (removing drudgery), and reassure them of their human value.
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
