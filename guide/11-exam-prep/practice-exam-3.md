<script setup>
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# Practice Exam 3: Integration & Final Challenge

The final challenge: Integration, AI, Ethics, and high-stakes scenarios.

<QuizComponent
  title="Practice Exam 3: Final Integration"
  :questions="[
    {
      text: 'A project manager uses an AI tool to generate a Preliminary Risk Register. What is the MOST appropriate next step?',
      options: [
        'Accept the AI output as final to save the team 4 hours of meeting time',
        'Use the AI list as a collaborative starting point and validate it with the team',
        'Refuse to use the tool due to the risk of hallucination',
        'Upload the company financials to the AI to get a better cost risk profile'
      ],
      correct: 1,
      explanation: 'AI is a Co-Pilot, not an Autopilot. The output must be treated as a draft and validated by human experts (HITL model).',
      reference: 'Chapter 10'
    },
    {
      text: 'The formula EAC = BAC / CPI is used when:',
      options: [
        'Current variances are atypical and unlikely to recur',
        'Current cost performance is expected to continue for the future work',
        'Schedule deadlines are legally fixed and cannot move',
        'The project is under budget and ahead of schedule'
      ],
      correct: 1,
      explanation: 'EAC = BAC / CPI assumes the current Spend Rate (CPI) will persist. If you are bad at spending now, you will likely be bad later.',
      reference: 'Chapter 9'
    },
    {
      text: 'According to Herzberg Motivation-Hygiene Theory, which action acts as a true Motivator (not just Hygiene)?',
      options: [
        'Buying new ergonomic chairs for the office',
        'Publicly recognizing the team for a complex milestone achievement',
        'Turning up the air conditioning during a heatwave',
        'Increasing the base salary by 2%'
      ],
      correct: 1,
      explanation: 'Recognition, Growth, and Responsibility are Motivators. Chairs, Salary, and AC are Hygiene factors—their absence causes pain, but their presence does not create passion.',
      reference: 'Chapter 3'
    },
    {
      text: 'You discover the organization strategy has shifted, making your project redundant. What is the FIRST action?',
      options: [
        'Stop work immediately and send the team home',
        'Conduct a strategic alignment analysis and present it to the Sponsor',
        'Keep the project running quietly to protect your team jobs',
        'Delete the Project Charter'
      ],
      correct: 1,
      explanation: 'You must analyze and communicate. You do not have the authority to cancel a project (that is likely the Sponsor role), but you must trigger the decision.',
      reference: 'Chapter 2'
    },
    {
      text: 'You discover a conflict of interest involving yourself and a potential vendor. According to the PMI Code of Ethics, what must you do?',
      options: [
        'Ignore it if the vendor is the cheapest option',
        'Disclose the conflict to stakeholders/Sponsor immediately',
        'Resign from the company to save face',
        'Ask a colleague to sign the contract for you'
      ],
      correct: 1,
      explanation: 'Transparency is non-negotiable. Conflicts of interest must be disclosed so the organization can decide how to handle them.',
      reference: 'Chapter 1'
    }
  ]"
/>

---

##  Final Readiness Checklist

| Domain       | Proficiency Check                                                                 |
| :----------- | :-------------------------------------------------------------------------------- |
| **People**   | Can you distinguish between *Servant Leadership* and *Command & Control*?         |
| **Process**  | Can you explain the difference between *Quality Assurance* and *Quality Control*? |
| **Business** | Do you know when to use *NPV* vs. *IRR* to select a project?                      |
| **AI**       | Do you understand the *Human-in-the-Loop* requirement?                            |

::: tip  Ready?
If you scored **4/5** or higher on all three exams, you are ready to simulate a full **185-question / 240-minute** test with **two 5-minute breaks**. If not, revisit the specific chapters linked in the "Reference" field of each question.
:::

<div class="action-bar">
  <a href="/" class="action-button primary">Return to Home</a>
</div>

<style>
.action-bar {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
}

.action-button.primary {
  padding: 0.75rem 2rem;
  background: var(--vp-c-brand);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.action-button.primary:hover {
  opacity: 0.9;
}
</style>

<FlashcardCarousel :cards="[
  { front: `What is scenario-based questioning on the PMP exam?`, back: `Questions presenting a project situation and asking what action the PM should take - tests application, not memorization.` },
  { front: `How do I approach a scenario question?`, back: `Understand the situation, identify the core issue, consider PMBOK guidance, and choose the best PM response.` },
  { front: `What is a situational question asking about?`, back: `Usually testing PM judgment and decision-making - not just factual recall but 'what would you do'.` },
  { front: `How do I distinguish between similar-sounding answers?`, back: `Look at context: predictive vs Agile, stakeholder type, project phase, and organizational culture.` },
  { front: `What is the PMBOK perspective on most questions?`, back: `PMI favors proactive approaches, stakeholder engagement, risk management, and integrated thinking.` },
  { front: `Should I apply real-world experience or PMBOK theory?`, back: `Apply PMBOK theory - the exam tests standard practices, not what works in specific companies.` },
  { front: `How do I spot the 'best' answer among 4 options?`, back: `The best answer aligns with PMI values: proactive, stakeholder-focused, process-based, integrated thinking.` },
  { front: `What topics appear most frequently in scenario questions?`, back: `Stakeholder management, risk response, scope/schedule/cost trade-offs, leadership, and integration.` },
  { front: `How should I study for scenario questions?`, back: `Practice with real questions, discuss reasoning with peers, understand 'why' answers are correct.` },
  { front: `What percentage of the exam is scenario-based?`, back: `Approximately 60-70% of questions are scenario-based, testing application beyond basic knowledge.` }
]" />
