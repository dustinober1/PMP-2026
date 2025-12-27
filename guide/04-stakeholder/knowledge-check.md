# Knowledge Check: Stakeholder & Communication

Test your understanding of stakeholder analysis, engagement strategies, communication planning, and negotiation. These 25 questions cover the full breadth of Chapter 4 content in the 2026 PMP context.

<QuizComponent
  title="Chapter 4: Comprehensive Review (25 Questions)"
  :questions="[
    {
      text: 'A team member sends an email to a stakeholder with a technical explanation of a delay. The stakeholder acknowledges receipt but later complains they did not understand the impact. According to the Sender-Receiver model, where did the breakdown occur?',
      options: [
        'Encoding: The team member used technical jargon the stakeholder could not understand',
        'Transmission: The email was not the right medium',
        'Decoding: The stakeholder refused to read the email',
        'Feedback: The stakeholder acknowledged receipt implies agreement'
      ],
      correct: 1,
      explanation: 'Encoding is translating thoughts into language. Using technical jargon for a non-technical audience causes a failure in decoding, but the root cause is the sender\'s poor encoding.',
      reference: 'Section 4.2'
    },
    {
      text: 'You are managing a project with a team in Japan (High Context) and Germany (Low Context). The German team feels the Japanese team is being vague and indecisive. The Japanese team feels the German team is rude. What is the root cause?',
      options: [
        'A conflict of interest regarding the schedule',
        'A failure of the Communications Management Plan to specify email formats',
        'Cultural noise: High-Context cultures value relationship/tone; Low-Context cultures value directness',
        'The Japanese team is resistant to the project goals'
      ],
      correct: 3,
      explanation: 'This is a classic cultural communication issue. Understanding High vs. Low context helps the PM facilitate better norms.',
      reference: 'Section 4.2'
    },
    {
      text: 'In an Agile project, a key stakeholder complains they only see progress once a month. What is the best way to increase their engagement?',
      options: [
        'Send them a daily email status report',
        'Invite them to the Sprint Review/Demo every two weeks to see working product',
        'Add them to the daily standup as an active participant',
        'Ask the Product Owner to speak for them'
      ],
      correct: 2,
      explanation: 'The Sprint Review is the primary Agile ceremony for stakeholder engagement and feedback. (Stakeholders observe standups, they don\'t participate).',
      reference: 'Section 4.3'
    },
    {
      text: 'Two team members are constantly arguing during meetings about technical approaches, causing delays. You realize this behavior violates the team\'s agreed-upon norms. What should you have done to prevent this?',
      options: [
        'Used a stronger autocratic decision style',
        'Separated the team members into different sub-teams',
        'Established clear Ground Rules in the Team Charter during formation',
        'Reported them to HR for unprofessional conduct'
      ],
      correct: 3,
      explanation: 'Ground Rules (in the Team Charter) are the primary tool for setting behavioral expectations and preventing conflict before it starts.',
      reference: 'Section 4.4'
    },
    {
      text: 'A high-power, low-interest stakeholder suddenly discovers the project will impact their budget and is now openly resistant. What should you do FIRST?',
      options: [
        'Ask the sponsor to handle the communication with the stakeholder',
        'Analyze the impact on the budget and update the Stakeholder Register',
        'Inform the team to bypass this stakeholder for all future decisions',
        'Update the project schedule to include a delay for budget re-evaluation'
      ],
      correct: 1,
      explanation: 'When a stakeholder’s attitude or influence shifts, your first step is to analyze the change and update the Stakeholder Register to reflect the new reality.',
      reference: 'Section 4.1'
    },
    {
      text: 'Your project team has grown from 5 to 10 people. How many new communication channels have been added?',
      options: ['5', '10', '25', '35'],
      correct: 3,
      explanation: 'With 5 people, channels = (5*4)/2 = 10. With 10 people, channels = (10*9)/2 = 45. The delta (45 - 10) is 35 new channels.',
      reference: 'Section 4.2'
    },
    {
      text: 'Which communication method is most effective for a global team working across multiple time zones needing to access large technical specification documents?',
      options: [
        'Interactive: Schedule a daily video call',
        'Push: Email the documents to all team members',
        'Pull: Upload documents to a shared project portal or wiki',
        'Social: Use an instant messaging tool for all conversations'
      ],
      correct: 2,
      explanation: 'Pull communication is best for large audiences needing access to static, high-volume information like technical specs.',
      reference: 'Section 4.2'
    },
    {
      text: 'A senior executive who is an influential stakeholder asks for a status update. According to the Power/Interest grid, which strategy is most appropriate for a High Power / Low Interest stakeholder?',
      options: [
        'Manage Closely',
        'Keep Satisfied',
        'Keep Informed',
        'Monitor'
      ],
      correct: 1,
      explanation: 'Stakeholders with High Power but Low Interest should be Kept Satisfied to prevent them from using their power negatively against the project.',
      reference: 'Section 4.1a'
    },
    {
      text: 'You notice that a key stakeholder has stopped attending sprint reviews and is becoming unresponsive. What is the most proactive servant leadership action?',
      options: [
        'Flag them as a risk in the next status report',
        'Escalate to their manager to ensure attendance',
        'Reach out to them directly to understand the root cause of their disengagement',
        'Assume they are satisfied with the progress and focus on other stakeholders'
      ],
      correct: 2,
      explanation: 'Direct engagement and active listening to find the root cause of resistance or disengagement is the hallmark of modern stakeholder management.',
      reference: 'Section 4.3'
    },
    {
      text: 'During stakeholder discussions, you learn that an informal influencer (not on the org chart) is shaping executive opinions against the project. What should you do NEXT?',
      options: [
        'Ignore them since they have no formal authority',
        'Update the Stakeholder Register, map their influence/attitude, and plan targeted engagement',
        'Remove them from project communications to reduce noise',
        'Escalate immediately to legal because this is political interference'
      ],
      correct: 1,
      explanation: '“Power” can be informal. Capture the stakeholder, analyze their influence and attitude, then adjust engagement and communication plans accordingly.',
      reference: 'Section 4.1'
    },
    {
      text: 'A community group has low formal authority but has legitimacy (ethical right to be heard) and demands immediate action on environmental impact. In the Salience Model, what type is this?',
      options: [
        'Dormant (Power only)',
        'Dominant (Power + Legitimacy)',
        'Dependent (Legitimacy + Urgency)',
        'Dangerous (Power + Urgency)'
      ],
      correct: 2,
      explanation: 'Dependent stakeholders have legitimacy and urgency but typically need an advocate because they lack formal power.',
      reference: 'Section 4.1a'
    },
    {
      text: 'A regulator sets a compliance deadline and can stop operations if requirements are not met. In the Salience Model, what type is this stakeholder?',
      options: [
        'Demanding (Urgency only)',
        'Dormant (Power only)',
        'Definitive (Power + Legitimacy + Urgency)',
        'Discretionary (Legitimacy only)'
      ],
      correct: 2,
      explanation: 'Definitive stakeholders have all three salience attributes and demand immediate prioritization.',
      reference: 'Section 4.1a'
    },
    {
      text: 'A team member asks you to publish the full Stakeholder Register (including political influence notes) to the project wiki “for transparency.” What is the best response?',
      options: [
        'Publish it; transparency requires full access to stakeholder analysis',
        'Share a sanitized contact list or comms matrix and keep sensitive analysis confidential',
        'Email the register to the entire organization to reduce rumors',
        'Stop maintaining a Stakeholder Register to avoid privacy issues'
      ],
      correct: 1,
      explanation: 'Stakeholder registers often contain sensitive information and should be treated as confidential; share only what is needed and appropriate.',
      reference: 'Section 4.1b'
    },
    {
      text: 'You are preparing an update for an upward stakeholder (executive sponsor). What communication style is most appropriate?',
      options: [
        'A detailed task list and technical design decisions',
        'Options with tradeoffs, key risks, and a recommendation tied to business value',
        'An informal chat message with no decisions or requests',
        'A raw backlog export with no summary'
      ],
      correct: 1,
      explanation: 'Upward communication focuses on outcomes, value, risk, and decisions needed—often framed as options with a recommendation.',
      reference: 'Section 4.1b'
    },
    {
      text: 'A compliance lead is currently Neutral, but the project requires them to be Supportive to pass audits on schedule. What should you do FIRST?',
      options: [
        'Escalate to the sponsor to force compliance support',
        'Invite them to an early review to clarify non-negotiables and agree on a cadence',
        'Remove compliance items from scope to avoid delays',
        'Wait until the end of the project to request approval'
      ],
      correct: 1,
      explanation: 'Close engagement gaps early by involving key stakeholders, clarifying requirements, and setting an engagement cadence before late-stage surprises.',
      reference: 'Section 4.3'
    },
    {
      text: 'Which is a leading indicator that stakeholder engagement is slipping?',
      options: [
        'The schedule baseline is approved',
        'Stakeholders stop attending demos/reviews and decisions begin stalling',
        'The risk register has more than 10 risks',
        'Team velocity increases'
      ],
      correct: 1,
      explanation: 'Reduced participation and stalled decisions are early warning signs that support and attention are eroding.',
      reference: 'Section 4.3'
    },
    {
      text: 'Decisions keep getting revisited because people cannot find what was agreed. What should you improve first?',
      options: [
        'Add more meetings to increase alignment',
        'Create a decision log and define a single source of truth',
        'Reduce stakeholder communication to avoid confusion',
        'Ask the sponsor to make all decisions alone'
      ],
      correct: 1,
      explanation: 'A decision log and a single source of truth prevent rework and repeated debates—especially in distributed teams.',
      reference: 'Section 4.2'
    },
    {
      text: 'Two departments have competing requirements and emotions are rising. What is the best communication method to resolve it?',
      options: [
        'Pull: Post a document and wait for comments',
        'Push: Send a status email to both department heads',
        'Interactive: Facilitate a workshop to surface interests and agree on a decision',
        'Avoid communication until the schedule forces action'
      ],
      correct: 2,
      explanation: 'Interactive communication is best for complex, high-stakes alignment because it supports immediate clarification and trust building.',
      reference: 'Section 4.2'
    },
    {
      text: 'If a project team has 8 people, how many communication channels exist?',
      options: ['8', '12', '28', '56'],
      correct: 2,
      explanation: 'Channels = N(N-1)/2. For N=8: 8×7/2 = 28.',
      reference: 'Section 4.2'
    },
    {
      text: 'In a hybrid meeting, one person is remote and three are in a conference room. What is the best 2026 practice?',
      options: [
        'Let the in-room group talk freely; the remote person can interrupt if needed',
        'Treat everyone as remote: use shared digital tools, chat-first inclusion, and capture notes/recording',
        'Cancel the meeting and send an email instead',
        'Ask the remote person to present the entire time so they feel included'
      ],
      correct: 1,
      explanation: 'Hybrid meetings easily exclude remote participants. Treating everyone as remote reduces side-channel decisions and improves inclusion.',
      reference: 'Section 4.2'
    },
    {
      text: 'Stakeholders are receiving status reports on time, but they remain resistant and do not support decisions. What should you update first?',
      options: [
        'The Communications Management Plan',
        'The Stakeholder Engagement Plan (tactics to close engagement gaps)',
        'The schedule baseline',
        'The procurement management plan'
      ],
      correct: 1,
      explanation: 'If information flow exists but buy-in is missing, the issue is engagement, not communication. Update engagement tactics and involvement.',
      reference: 'Section 4.3'
    },
    {
      text: 'You have a High Power / High Interest stakeholder who is supportive. What is the best engagement approach?',
      options: [
        'Monitor only; they are already supportive',
        'Empower them as a champion and involve them in key reviews and decisions',
        'Keep them satisfied with infrequent high-level updates',
        'Limit their involvement to avoid scope creep'
      ],
      correct: 1,
      explanation: 'Supportive, high-power stakeholders are valuable champions. Keep them engaged and leverage their influence appropriately.',
      reference: 'Section 4.1a'
    },
    {
      text: 'A High Power stakeholder is resistant and is questioning the project value in public forums. What should you do FIRST?',
      options: [
        'Bypass them and proceed with the team',
        'Schedule a 1:1 to understand interests, clarify WIIFM, and update the engagement plan',
        'Send a formal warning email to stop the behavior',
        'Immediately escalate to legal'
      ],
      correct: 1,
      explanation: 'High-power resistance requires direct engagement to uncover interests and fears, then an updated engagement approach—not avoidance.',
      reference: 'Section 4.3'
    },
    {
      text: 'In interest-based negotiation, what is the best way to move past a stakeholder’s position (demand)?',
      options: [
        'Argue harder for your position',
        'Ask questions to uncover underlying interests and constraints',
        'Offer a quick compromise without discussion',
        'Use authority to force agreement'
      ],
      correct: 1,
      explanation: 'Interest-based negotiation separates positions from interests; uncovering the “why” enables options that create mutual value.',
      reference: 'Section 4.4'
    },
    {
      text: 'A vendor proposal is worse than your BATNA. What is the most appropriate action?',
      options: [
        'Accept it to keep the relationship positive',
        'Walk away or renegotiate using your BATNA as the boundary',
        'Threaten the vendor publicly to gain leverage',
        'Ignore the BATNA and focus on urgency'
      ],
      correct: 1,
      explanation: 'BATNA is your walk-away power. If the deal is worse than your alternative, you should not accept it as-is.',
      reference: 'Section 4.4'
    },
    {
      text: 'Two key stakeholders have a recurring conflict that is slowing decisions. You want a durable solution and long-term trust. Which conflict technique is best?',
      options: [
        'Force/Direct',
        'Withdraw/Avoid',
        'Collaborate/Problem Solve',
        'Smooth/Accommodate'
      ],
      correct: 2,
      explanation: 'Collaborate addresses root causes and creates a win-win outcome, which preserves relationships and prevents repeat conflict.',
      reference: 'Section 4.4'
    },
    {
      text: 'A safety violation occurs on-site and there is immediate risk of harm. Which conflict/decision approach is most appropriate?',
      options: [
        'Smooth/Accommodate to preserve harmony',
        'Compromise to move quickly',
        'Force/Direct to stop work and correct immediately',
        'Withdraw/Avoid until emotions settle'
      ],
      correct: 2,
      explanation: 'For safety and urgent compliance situations, directive action is appropriate to protect people and the organization.',
      reference: 'Section 4.4'
    },
    {
      text: 'You need a decision method that creates high buy-in so no one sabotages implementation. Which model is best?',
      options: [
        'Majority vote',
        'Consensus',
        'Plurality',
        'Autocratic'
      ],
      correct: 1,
      explanation: 'Consensus produces strong commitment (“I can live with it”), reducing the risk of sabotage and rework.',
      reference: 'Section 4.4'
    }
  ]"
/>

## Additional Study Topics

For complete mastery of Chapter 4, ensure you understand:

1.  **Analytical Models**: Power/Interest Grid vs. Salience Model vs. Stakeholder Cube.
2.  **Register Discipline**: What goes in the Stakeholder Register and when you update it.
3.  **Engagement Planning**: Current vs desired engagement and tactics to close gaps.
4.  **Comms Planning**: Push vs Pull vs Interactive and what belongs in the Communications Plan.
5.  **Negotiation**: Positions vs interests, objective criteria, and BATNA.
6.  **Conflict + Decisions**: Conflict techniques and choosing the right decision model (consensus vs majority vs autocratic).

---

<div class="study-tip">
  <strong>💡 Pro Tip:</strong> If an exam scenario describes a "political conflict" or "hidden agenda," look for an answer that involves <strong>Stakeholder Analysis</strong> or <strong>Engagement Assessment</strong>. Understanding the *Why* is always the first step.
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
