# Knowledge Check: AI & Project Management

Test your AI literacy and your ability to navigate the ethical challenges of the modern project environment.

<QuizComponent
  title="Chapter 10 Knowledge Check"
  :questions="[
    {
      text: 'A project manager is using a public AI tool to help draft a project schedule. What is the MOST important action the PM should take to ensure data security?',
      options: [
        'Use a complex password for the AI tool account',
        'Ensure that no confidential company data or PII is uploaded to the tool',
        'Ask the AI to delete the chat history after the schedule is drafted',
        'Only use the tool during business hours on a corporate VPN'
      ],
      correct: 1,
      explanation: 'Public AI models often use input data for training. You must never upload confidential or sensitive data to a public tool without enterprise guardrails.',
      reference: 'Section 10.2'
    },
    {
      text: 'The team uses an AI-powered risk analyzer that flags a specific vendor as a \"High Risk\" for upcoming delays. The vendor has a good track record with this team. How should the PM proceed?',
      options: [
        'Ignore the AI as it is likely a hallucination',
        'Immediately fire the vendor and find a replacement',
        'Use the AI alert as a prompt to investigate the vendor\'s current capacity and supply chain',
        'Trust the AI and update the schedule to include a 2-week delay for that vendor'
      ],
      correct: 2,
      explanation: 'AI is a diagnostic tool. In a HITL (Human-in-the-Loop) model, the PM uses the AI insight to trigger further human investigation.',
      reference: 'Section 10.1'
    },
    {
      text: 'What is the primary risk of using an LLM (Large Language Model) to generate a Project Charter without human review?',
      options: [
        'The charter will be too long',
        'The AI might hallucinate requirements or stakeholders that do not exist',
        'The sponsor will be angry that you saved time',
        'The AI will charge extra fees for long documents'
      ],
      correct: 1,
      explanation: 'Hallucination is a major limitation of LLMs. They can invent plausible-sounding but incorrect information.',
      reference: 'Section 10.1'
    },
    {
      text: 'A Project Manager wants to establish clear rules for how the team uses GenAI tools. Which document should they update?',
      options: [
        'The Stakeholder Register',
        'The Issue Log',
        'The Team Working Agreement (or Team Charter)',
        'The Project Schedule'
      ],
      correct: 2,
      explanation: 'Ways of working, including AI usage and disclosure rules, belong in the Team Working Agreement.',
      reference: 'Section 10.2'
    }
  ]"
/>

## Additional Study Topics

### 1. The HITL Model
Always remember the **Human-in-the-Loop** principle. AI provides the "Low-Level Work" (drafting, analyzing), while the Human provides the "High-Level Value" (empathy, ethics, final decision).

### 2. AI as an "Input"
On the exam, AI is often listed as an **Input** or a **Tool/Technique**, never as an **Output**. The output is still a Charter, a Plan, or a Decision.

---

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If a team is resisting a new AI tool because they fear job loss, the PM should use <strong>Emotional Intelligence</strong> to address their concerns and explain that the AI is there to <strong>Augment</strong> their skills, not replace them.
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
