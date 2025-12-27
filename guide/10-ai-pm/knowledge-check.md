# Knowledge Check: AI & Project Management

Test your AI literacy and judgment to navigate the modern, tech-augmented project environment. These 25 questions cover the major concepts from Chapter 10.

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
      reference: 'Section 10.2 - Data Privacy'
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
      reference: 'Section 10.1 - Human-in-the-Loop'
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
      reference: 'Section 10.1 - Hallucination Risk'
    },
    {
      text: 'A Project Manager wants to establish clear rules for how the team uses GenAI tools (including when to disclose usage). Which document should be updated?',
      options: [
        'The Stakeholder Register',
        'The Issue Log',
        'The Team Working Agreement (Team Charter)',
        'The Project Schedule'
      ],
      correct: 2,
      explanation: 'Rules of engagement, including technology usage and ethical disclosure norms, belong in the Team Charter/Working Agreement.',
      reference: 'Section 10.2 - AI Charter'
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
      reference: 'Section 10.2 - Explainability (XAI)'
    },
    {
      text: 'Which AI category is BEST suited for drafting a Project Charter from sanitized meeting notes?',
      options: [
        'Predictive AI',
        'Generative AI (LLMs)',
        'Automation agents',
        'Sentiment analysis'
      ],
      correct: 1,
      explanation: 'Generative AI is strongest at drafting and summarizing text-based artifacts such as charters, emails, and minutes.',
      reference: 'Section 10.1 - The New PM Toolbox'
    },
    {
      text: 'Which AI category is BEST suited for forecasting schedule delays using historical performance data?',
      options: [
        'Generative AI (LLMs)',
        'Predictive AI',
        'Automation agents',
        'Optical Character Recognition (OCR)'
      ],
      correct: 1,
      explanation: 'Predictive AI is used for forecasting outcomes from historical data (delays, cost overruns, bottlenecks).',
      reference: 'Section 10.1 - The New PM Toolbox'
    },
    {
      text: 'An AI tool suggests tasks and durations for your schedule. What should the PM do BEFORE baselining the schedule?',
      options: [
        'Baseline it immediately to lock in commitments',
        'Validate the output with the team/SMEs and confirm assumptions and constraints',
        'Increase the model temperature to get more creative ideas',
        'Ask the AI to send the schedule directly to stakeholders'
      ],
      correct: 1,
      explanation: 'AI output is a draft. The PM must validate assumptions, confirm constraints, and review with the team before committing to a baseline.',
      reference: 'Section 10.1 - Trust, but Verify'
    },
    {
      text: 'Which action BEST reduces the risk of hallucinations in AI-generated project artifacts?',
      options: [
        'Ask the AI to be more confident in its answers',
        'Provide approved reference material and require the AI to stick to it',
        'Use longer prompts to overwhelm the model with data',
        'Avoid specifying an output format'
      ],
      correct: 1,
      explanation: 'Grounding with approved sources (and requiring assumptions/unknowns) reduces guesswork and hallucination risk.',
      reference: 'Section 10.1 - Grounding Checklist'
    },
    {
      text: 'In AI terms, what does RAG (Retrieval-Augmented Generation) describe?',
      options: [
        'Risk Assessment Grid used in qualitative risk analysis',
        'A method where the AI retrieves relevant internal documents to ground its response',
        'A scheduling technique that randomizes task dependencies',
        'A compliance framework for AI governance'
      ],
      correct: 1,
      explanation: 'RAG combines retrieval of relevant source material with generation, producing answers grounded in approved internal content.',
      reference: 'Section 10.1 - Key Concepts'
    },
    {
      text: 'A team wants to improve consistency of AI-generated deliverables across many projects. Which approach is typically MOST appropriate to try first?',
      options: [
        'Fine-tune the model immediately using confidential project data',
        'Standardize prompts, templates, and HITL review checklists before changing the model',
        'Let each PM invent their own approach without governance',
        'Increase temperature to make outputs less repetitive'
      ],
      correct: 1,
      explanation: 'Most PM teams get the biggest gains from prompt/template standardization and strong review controls before considering model-level changes like fine-tuning.',
      reference: 'Section 10.4 - Prompt Template / HITL Checklist'
    },
    {
      text: 'Which prompt element MOST directly improves auditability and maturity in PMP-style AI usage?',
      options: [
        'A request for jokes and creative metaphors',
        'A requirement to list assumptions, unknowns, and what needs human validation',
        'A request to avoid asking any clarifying questions',
        'A request to keep the output unstructured'
      ],
      correct: 1,
      explanation: 'Strong prompts require assumptions/unknowns and validation steps, which aligns with professional judgment and governance.',
      reference: 'Section 10.3 - Prompt Engineering'
    },
    {
      text: 'A team proposes an AI tool that can automatically send stakeholder updates. What is the MOST appropriate guardrail?',
      options: [
        'Allow auto-sending to save time because executives prefer speed',
        'Require human approval before any external communication is sent',
        'Disable audit logging to reduce storage costs',
        'Let the AI update scope baselines without change control'
      ],
      correct: 1,
      explanation: 'External communication and baseline-impacting actions should require Human-in-the-Loop approval to manage tone, accuracy, and governance.',
      reference: 'Section 10.3 - Guardrails for Automation Agents'
    },
    {
      text: 'A team member is using an unapproved GenAI tool to summarize confidential client meetings. What should the PM do FIRST?',
      options: [
        'Ignore it because it improves productivity',
        'Stop the behavior and notify IT/Security per policy',
        'Ask the AI to delete the conversation history',
        'Wait until the project closes to address it'
      ],
      correct: 1,
      explanation: 'This is a security/privacy incident. The PM should contain and escalate according to organizational policy before focusing on coaching or process improvements.',
      reference: 'Section 10.2 - Shadow AI / Incident Response'
    },
    {
      text: 'An AI tool consistently recommends the same type of candidate for leadership roles and overlooks diverse team members. What is the MOST appropriate response?',
      options: [
        'Accept the recommendation because AI is objective',
        'Audit for bias and validate decisions with human review and fair criteria',
        'Let the tool decide to reduce conflict',
        'Remove all governance rules to speed up staffing'
      ],
      correct: 1,
      explanation: 'AI can reflect historical bias. The PM must audit outputs, use fair criteria, and ensure decisions are reviewed by humans.',
      reference: 'Section 10.2 - Bias Awareness'
    },
    {
      text: 'An AI-generated cost estimate contains errors and is presented to the sponsor. Who is ultimately accountable for the content shared?',
      options: [
        'The AI tool, because it generated the estimate',
        'The vendor who built the AI model',
        'The Project Manager (and the organization), because they chose to use the output',
        'No one, because AI is experimental'
      ],
      correct: 2,
      explanation: 'Accountability remains with humans. AI is a tool; the PM/organization is responsible for validating outputs before sharing.',
      reference: 'Section 10.2 - Accountability'
    },
    {
      text: 'According to the governance RACI concept, who is typically RESPONSIBLE for leading response to a suspected data exposure incident?',
      options: [
        'The AI model',
        'IT/Security',
        'The project scheduler',
        'The newest team member who used the tool'
      ],
      correct: 1,
      explanation: 'Incident response is typically led by IT/Security with Legal/Compliance involvement as required. The PM supports containment and communication.',
      reference: 'Section 10.2 - Governance RACI'
    },
    {
      text: 'You want to prompt an AI tool with meeting notes. Which approach BEST follows data minimization and privacy best practices?',
      options: [
        'Paste the full transcript including names, emails, and client details',
        'Sanitize the notes, remove identifiers, and replace specifics with placeholders',
        'Include passwords so the AI can access supporting systems',
        'Add more confidential detail to increase accuracy'
      ],
      correct: 1,
      explanation: 'Redaction and placeholders reduce privacy risk while still providing sufficient context to draft useful artifacts.',
      reference: 'Section 10.4 - Data Redaction Checklist'
    },
    {
      text: 'When evaluating an AI vendor/tool for enterprise use, which question is MOST critical for data governance?',
      options: [
        'Does the tool have a colorful user interface?',
        'Will prompts and outputs be used to train the model, and can you contractually opt out?',
        'Does the tool generate poems quickly?',
        'Can it run without any authentication?'
      ],
      correct: 1,
      explanation: 'Training/retention terms and contractual controls are central to protecting organizational data and meeting compliance obligations.',
      reference: 'Section 10.4 - Vendor Due Diligence'
    },
    {
      text: 'A sponsor wants to use a black-box AI model for critical compliance decisions, but auditors require traceability. What is the BEST action?',
      options: [
        'Proceed because accuracy is all that matters',
        'Shift to an explainable/auditable approach (XAI and logs) that meets governance requirements',
        'Hide the AI usage from auditors to avoid questions',
        'Ask the AI to justify itself without evidence'
      ],
      correct: 1,
      explanation: 'Regulated decisions require explainability and auditability. Governance requirements override convenience.',
      reference: 'Section 10.2 - Explainability (XAI)'
    },
    {
      text: 'An AI tool predicts the project will miss the target date. What should the PM do FIRST?',
      options: [
        'Commit to the AI forecast and announce a new date',
        'Validate the data and investigate root causes with the team',
        'Ignore the forecast to avoid stakeholder concern',
        'Add buffer without telling stakeholders'
      ],
      correct: 1,
      explanation: 'AI insights should trigger investigation. Validate inputs and analyze root causes before changing commitments.',
      reference: 'Section 10.1 - Trust, but Verify'
    },
    {
      text: 'In Agile/Hybrid environments, using AI to turn rough ideas into user stories with acceptance criteria is MOST aligned with which activity?',
      options: [
        'Sprint Review',
        'Daily Scrum',
        'Backlog Refinement',
        'Project Closing'
      ],
      correct: 2,
      explanation: 'Backlog refinement is where items are clarified, decomposed, and prepared with acceptance criteria for future work.',
      reference: 'Section 10.3 - Agile + Hybrid Add-Ons'
    },
    {
      text: 'AI clusters retrospective comments into themes. What should the PM do next to make this valuable?',
      options: [
        'Archive the output and move on',
        'Validate themes with the team and create concrete improvement actions/experiments',
        'Send it externally without review to demonstrate transparency',
        'Use it to assign blame for past failures'
      ],
      correct: 1,
      explanation: 'Lessons learned are only valuable when validated with the team and translated into actionable improvements that are tracked and owned.',
      reference: 'Section 10.3 - Closing'
    },
    {
      text: 'A stakeholder says: “We should switch to AI project management methodology.” What is the BEST response?',
      options: [
        'Agree and replace Agile/Predictive processes with AI immediately',
        'Explain that AI is a tool that augments your chosen approach; integrate it with governance and HITL controls',
        'Stop using all tools and rely on manual processes',
        'Adopt AI first and define governance later'
      ],
      correct: 1,
      explanation: 'AI is an accelerator, not a methodology. The PM integrates AI into existing delivery approaches with appropriate controls and accountability.',
      reference: 'Section 10.3 - AI as a Tool, Not a Methodology'
    },
    {
      text: 'An organization wants to roll out AI support for PMs. What is the BEST first step to reduce risk and build trust?',
      options: [
        'Deploy across all projects immediately to maximize ROI',
        'Start with a low-risk pilot, define success metrics, and train the team on redaction and HITL review',
        'Let everyone use any tool they want and compare results',
        'Disable governance to avoid slowing the rollout'
      ],
      correct: 1,
      explanation: 'A controlled pilot with clear metrics and training supports change management, reduces risk, and creates evidence for scaling.',
      reference: 'Section 10.4 - Pilot-to-Production'
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
