# Knowledge Check: Stakeholder & Communication

Test your understanding of stakeholder analysis, engagement strategies, communication planning, and negotiation. These 25 questions cover the full breadth of Chapter 4 content in the 2026 PMP context.

<QuizComponent
  title="Chapter 4: Comprehensive Review (25 Questions)"
  :questions="[
    {
      text: 'A project team has 12 members. The PM adds 3 new team members to accelerate delivery. How many NEW communication channels have been added?',
      options: [
        '3 new channels',
        '24 new channels',
        '39 new channels',
        '105 total channels now'
      ],
      correct: 2,
      explanation: 'With 12 people: 12×11/2 = 66 channels. With 15 people: 15×14/2 = 105 channels. New channels = 105 - 66 = 39.',
      reference: 'Section 4.2 - Communication Channels Formula'
    },
    {
      text: 'During stakeholder identification, you discover that an administrative assistant regularly influences executive decisions despite having no formal authority. According to stakeholder analysis principles, what should you do?',
      options: [
        'Ignore them since they have no decision-making authority',
        'Add them to the Stakeholder Register with appropriate power/influence analysis',
        'Report this to the executive as a governance concern',
        'Only communicate with formal decision-makers'
      ],
      correct: 1,
      explanation: 'Informal power is real power. The administrative assistant has influence that can affect the project. They should be documented in the register with their actual influence mapped.',
      reference: 'Section 4.1 - Shadow Stakeholders'
    },
    {
      text: 'You are using the Salience Model and identify a community environmental group that has legitimacy (ethical right to be heard) and urgency (demanding immediate response) but no formal authority. What type of stakeholder is this?',
      options: [
        'Dormant',
        'Dangerous',
        'Dependent',
        'Demanding'
      ],
      correct: 2,
      explanation: 'Dependent stakeholders have Legitimacy + Urgency but lack Power. They need an advocate (like the sponsor) to have their concerns addressed.',
      reference: 'Section 4.1a - Salience Model'
    },
    {
      text: 'A stakeholder who was previously supportive is now neutral after a requirement change affected their department. What should you do FIRST?',
      options: [
        'Escalate to the sponsor to mandate their support',
        'Update the Stakeholder Register and conduct root cause analysis',
        'Remove them from the communications distribution list',
        'Wait to see if their attitude improves naturally'
      ],
      correct: 1,
      explanation: 'When stakeholder attitude shifts, the first step is always to document the change in the register and understand why it happened before taking action.',
      reference: 'Section 4.1b - Engagement Assessment'
    },
    {
      text: 'According to the Trust Equation (Trustworthiness = Credibility + Reliability + Intimacy / Self-Orientation), which factor has the MOST destructive impact when high?',
      options: [
        'Low Credibility',
        'Low Reliability',
        'Low Intimacy',
        'High Self-Orientation'
      ],
      correct: 3,
      explanation: 'Self-Orientation is in the denominator. High self-orientation (I am trying to sell you something) destroys trust faster than the positive factors can build it.',
      reference: 'Section 4.3 - Trust Equation'
    },
    {
      text: 'Your project has stakeholders in Japan (high-context culture) and Germany (low-context culture). The German team feels the Japanese team is being evasive. The Japanese team feels the Germans are disrespectful. What is the root cause?',
      options: [
        'A conflict of interest requiring arbitration',
        'Failed communication technology',
        'Cultural noise - different communication style expectations',
        'Deliberate resistance from one of the teams'
      ],
      correct: 2,
      explanation: 'High-context cultures (Japan) communicate meaning through relationship and tone, while low-context cultures (Germany) are explicit and direct. Neither is wrong - they need cultural bridging.',
      reference: 'Section 4.2 - Cross-Cultural Communication'
    },
    {
      text: 'A vendor proposal of $150K is on the table. Your BATNA is a different vendor at $140K. What should you do?',
      options: [
        'Accept the $150K to preserve the relationship',
        'Walk away or negotiate down using your BATNA as leverage',
        'Split the difference at $145K',
        'Threaten to sue if they don\'t lower the price'
      ],
      correct: 1,
      explanation: 'If the current offer is worse than your BATNA, you should not accept it. Use your BATNA as the walk-away point and try to negotiate better terms.',
      reference: 'Section 4.4 - BATNA'
    },
    {
      text: 'In a negotiation, the stakeholder says: I need 10 developers. You ask: What are you trying to accomplish with 10 developers? This technique is designed to:',
      options: [
        'Challenge their authority to make requests',
        'Distinguish their position from their underlying interests',
        'Delay the negotiation until you have more time',
        'Force them to reduce their request'
      ],
      correct: 1,
      explanation: 'Interest-based negotiation focuses on WHY someone wants something (interest) rather than WHAT they are asking for (position). This enables creative solutions.',
      reference: 'Section 4.4 - Interest-Based Negotiation'
    },
    {
      text: 'Two functional managers are in heated conflict about resource allocation and cannot agree. Emotions are running high. What conflict resolution technique is BEST as an immediate first step?',
      options: [
        'Force/Direct - make the decision for them',
        'Collaborate/Problem Solve - work together on a solution',
        'Withdraw/Avoid - pause until emotions settle',
        'Compromise - split resources evenly'
      ],
      correct: 2,
      explanation: 'When emotions are too high for productive discussion, Withdraw/Avoid is appropriate as a cooling-off tactic. Return to Collaborate once people can think clearly.',
      reference: 'Section 4.4 - Conflict Resolution Techniques'
    },
    {
      text: 'A safety violation is discovered on a construction project. Which conflict/decision approach is MOST appropriate?',
      options: [
        'Compromise - balance safety with schedule needs',
        'Collaborate - find a solution that works for everyone',
        'Force/Direct - stop work immediately and correct the issue',
        'Smooth/Accommodate - maintain harmony with the contractor'
      ],
      correct: 2,
      explanation: 'For safety, compliance, and emergency situations, Force/Direct is appropriate. Immediate action is required to protect people.',
      reference: 'Section 4.4 - Conflict Resolution Techniques'
    },
    {
      text: 'When selecting a decision-making model for a team decision that requires high commitment and where no one should sabotage the outcome, which model is BEST?',
      options: [
        'Majority vote',
        'Autocratic',
        'Consensus',
        'Plurality'
      ],
      correct: 2,
      explanation: 'Consensus (I can live with it) produces strong commitment and reduces the risk of sabotage because everyone has agreed to support the outcome.',
      reference: 'Section 4.4 - Decision-Making Models'
    },
    {
      text: 'A project team of 8 has how many communication channels?',
      options: [
        '8',
        '16',
        '28',
        '56'
      ],
      correct: 2,
      explanation: 'Communication channels = N×(N-1)/2 = 8×7/2 = 28.',
      reference: 'Section 4.2 - Channel Calculation'
    },
    {
      text: 'Which communication method is MOST appropriate for distributing large technical specification documents to a global team across multiple time zones?',
      options: [
        'Interactive - schedule a video call to review',
        'Push - email the documents to everyone',
        'Pull - upload to a shared project portal',
        'Hold a face-to-face meeting'
      ],
      correct: 2,
      explanation: 'Pull communication (project portals, wikis) is best for large volumes of static information that audiences access on their own schedule - ideal for global/async teams.',
      reference: 'Section 4.2 - Communication Methods'
    },
    {
      text: 'According to the Sender-Receiver model, a PM sends a technical email with jargon that a business stakeholder doesn\'t understand. The stakeholder acknowledges receipt but misses the key point. Where did the breakdown occur?',
      options: [
        'Transmission - the email failed to deliver',
        'Encoding - the PM used language the receiver couldn\'t decode',
        'Feedback - the stakeholder should have asked questions',
        'Acknowledgment - the stakeholder lied about receiving it'
      ],
      correct: 1,
      explanation: 'Encoding is translating thoughts into language. Using technical jargon for a non-technical audience is an encoding failure - the message wasn\'t translated appropriately for the receiver.',
      reference: 'Section 4.2 - Sender-Receiver Model'
    },
    {
      text: 'A High Power / Low Interest stakeholder has started attending your meetings and asking detailed questions. What has likely happened?',
      options: [
        'They should be removed from the stakeholder list',
        'Their Interest level has increased - reclassify and adjust engagement',
        'This is normal behavior for High Power / Low Interest stakeholders',
        'They are trying to sabotage the project'
      ],
      correct: 1,
      explanation: 'Stakeholder positions are not static. Increased attendance and questions signal increased interest. Reclassify them (possibly to Manage Closely) and adjust your engagement approach.',
      reference: 'Section 4.1a - Stakeholder Mapping'
    },
    {
      text: 'In the RACI matrix, which role makes the final decision and is ultimately answerable for the outcome?',
      options: [
        'Responsible',
        'Accountable',
        'Consulted',
        'Informed'
      ],
      correct: 1,
      explanation: 'Accountable (the A) is the single person who owns the outcome and makes the final call. There should be only one A per deliverable.',
      reference: 'Section 4.1 - RACI Matrix'
    },
    {
      text: 'A stakeholder is currently Resistant but the project needs them to be Neutral to avoid blocking critical approvals. According to the Engagement Assessment Matrix, what is the engagement gap?',
      options: [
        'No gap - they are already engaged',
        '1 level (from Resistant to Neutral)',
        '2 levels (from Resistant to Supportive)',
        '3 levels (from Resistant to Leading)'
      ],
      correct: 1,
      explanation: 'The engagement scale is: Unaware → Resistant → Neutral → Supportive → Leading. Moving from Resistant to Neutral is a gap of 1 level.',
      reference: 'Section 4.1b - Engagement Assessment Matrix'
    },
    {
      text: 'According to Cialdini\'s principles of influence, which principle is being used when you say: The CTO and VP of Engineering have already endorsed this approach?',
      options: [
        'Reciprocity',
        'Authority',
        'Social Proof',
        'Scarcity'
      ],
      correct: 2,
      explanation: 'Social Proof leverages the fact that people look to respected peers to guide their decisions. Showing that leaders already support something encourages others to follow.',
      reference: 'Section 4.3 - Influence Strategies'
    },
    {
      text: 'In a hybrid meeting with 3 people in a conference room and 1 person remote, what is the 2026 best practice?',
      options: [
        'Let the in-room group talk normally; the remote person can interrupt',
        'Treat everyone as remote - use digital tools and chat-first inclusion',
        'Have the remote person present the whole meeting',
        'Cancel and reschedule when everyone can be co-located'
      ],
      correct: 1,
      explanation: '2026 focus: If one person is remote, everyone is remote. Using shared digital tools and chat-first strategies prevents in-room bias and ensures equitable participation.',
      reference: 'Section 4.2 - Virtual Meeting Best Practices'
    },
    {
      text: 'Stakeholders receive status reports on time, but they remain disengaged and do not support decisions. Which plan should you update FIRST?',
      options: [
        'Communications Management Plan',
        'Stakeholder Engagement Plan',
        'Project Schedule',
        'Risk Management Plan'
      ],
      correct: 1,
      explanation: 'If information is flowing (comms plan is working) but support is missing (engagement is failing), the issue is engagement tactics, not communication mechanics.',
      reference: 'Section 4.3 - Engagement vs Communication'
    },
    {
      text: 'A vendor is not meeting their contractual obligations. Following the Dispute Resolution Ladder, what should you try FIRST?',
      options: [
        'File for arbitration',
        'Engage a mediator',
        'Direct negotiation using contract terms and objective criteria',
        'Begin litigation proceedings'
      ],
      correct: 2,
      explanation: 'The dispute resolution ladder starts with lowest friction: Direct negotiation → Escalation → Mediation → Arbitration → Litigation (last resort).',
      reference: 'Section 4.4 - Dispute Resolution Ladder'
    },
    {
      text: 'The sponsor asks for a project status update. According to Direction of Influence principles, what communication style is MOST appropriate for Upward communication?',
      options: [
        'Detailed task lists and technical specifications',
        'Options with tradeoffs, key risks, and a recommendation',
        'Informal chat message with no documentation',
        'Raw backlog export with all items'
      ],
      correct: 1,
      explanation: 'Upward communication to executives should focus on outcomes, value, risks, and decisions needed - typically framed as options with a recommendation.',
      reference: 'Section 4.1b - Direction of Influence'
    },
    {
      text: 'In the negotiation, the other party uses anchoring by stating an extremely high initial price. What is the BEST response?',
      options: [
        'Accept the anchor and negotiate small reductions',
        'Walk away immediately',
        'Counter-anchor or ignore the anchor; focus on interests and objective criteria',
        'Match their extreme position with your own extreme counter'
      ],
      correct: 2,
      explanation: 'Anchoring is a common tactic. You can counter-anchor with your own reasonable position, ignore the anchor, or redirect to interests and objective criteria (market rates, benchmarks).',
      reference: 'Section 4.4 - Negotiation Tactics'
    },
    {
      text: 'A stakeholder who was Leading (actively driving project success) has become Supportive (helpful but passive). What is a likely cause?',
      options: [
        'This is normal progression as projects mature',
        'Burnout, lack of recognition, or exclusion from decisions',
        'They have completed their role in the project',
        'The project has been cancelled'
      ],
      correct: 1,
      explanation: 'When champions disengage, common causes include burnout, feeling taken for granted, or being excluded from decisions they care about. Investigate and re-engage.',
      reference: 'Section 4.1b - Stakeholder State Transitions'
    },
    {
      text: 'To prevent conflict BEFORE it arises, what should be established during team formation?',
      options: [
        'Legal contracts with penalty clauses',
        'Ground Rules in the Team Charter',
        'Detailed escalation procedures to HR',
        'Individual performance warnings'
      ],
      correct: 1,
      explanation: 'Ground Rules in the Team Charter set behavioral expectations before conflict starts. Examples: Attack problems, not people; We decide by consensus.',
      reference: 'Section 4.4 - Ground Rules'
    }
  ]"
/>

## Additional Study Topics

For complete mastery of Chapter 4, ensure you understand:

1. **Analytical Models**: Power/Interest Grid vs. Salience Model vs. Stakeholder Cube—when to use each.
2. **Register Discipline**: What goes in the Stakeholder Register, when you update it, and confidentiality requirements.
3. **Engagement Planning**: Current vs desired engagement, tactics to close gaps, and leading indicators of disengagement.
4. **Communication Methods**: Push vs Pull vs Interactive, channel formula, and message selection.
5. **Cultural Intelligence**: High-context vs low-context, global team practices, and virtual facilitation.
6. **Negotiation**: Positions vs interests, BATNA/ZOPA, objective criteria, and negotiation tactics.
7. **Conflict + Decisions**: Five conflict techniques, decision models (consensue vs majority vs autocratic), and when to use each.
8. **Influence Strategies**: Cialdini's principles, coalition building, and managing resistance.

---

## Quick Reference: Exam Patterns

| Scenario Pattern | Best First Action |
| :--- | :--- |
| New stakeholder identified | Update Stakeholder Register |
| Stakeholder attitude changed | Analyze root cause, update register |
| Political conflict or hidden agendas | Stakeholder analysis and engagement assessment |
| Communication breakdown | Update Communications Management Plan |
| Stakeholder disengaging | Direct outreach to understand why |
| Team conflict | Collaborate (unless emergency → Force) |
| Vendor dispute | Direct negotiation first |
| High-power resistor | 1:1 meeting, root cause, WIIFM |

---

<div class="study-tip">
  <strong>💡 Pro Tip:</strong> If an exam scenario describes a "political conflict" or "hidden agenda," look for an answer that involves <strong>Stakeholder Analysis</strong> or <strong>Engagement Assessment</strong>. Understanding the <em>Why</em> is always the first step.
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
