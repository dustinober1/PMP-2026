# Knowledge Check: Team Leadership

Test your EQ and leadership mindset to handle the most unpredictable part of any project: People. These 25 questions cover the full breadth of Chapter 3 content.

<QuizComponent
  title="Chapter 3: Comprehensive Review (25 Questions)"
  :questions="[
    {
      text: 'A critical team member is blocked by a database issue. As a Servant Leader, what is your FIRST action?',
      options: [
        'Ask them to figure it out to build resilience',
        'Call the Database Admin yourself to clear the blocker',
        'Add it to the risk register',
        'Escalate to the sponsor'
      ],
      correct: 1,
      explanation: 'Servant leaders remove blockers. If the team member is stuck, you use your influence to unstick them. You serve them.',
      reference: 'Section 3.2'
    },
    {
      text: 'You overhear two engineers arguing about which AI library to use. The debate is heated but technical. What do you do?',
      options: [
        'Intervene immediately to stop the fighting',
        'Do nothing; this is healthy creative friction',
        'Send them to HR for unprofessional conduct',
        'Decide the library for them to save time'
      ],
      correct: 1,
      explanation: 'Task conflict is healthy. As long as it does not become personal, you should let the team self-organize and resolve it.',
      reference: 'Section 3.3'
    },
    {
      text: 'Your team is new and keeps missing handoffs because they are unsure who is Responsible vs Accountable for key deliverables. Which tool is missing?',
      options: [
        'The Project Charter',
        'The Team Charter',
        'A RACI matrix',
        'The Risk Register'
      ],
      correct: 2,
      explanation: 'A RACI matrix is the clearest tool for defining responsibility and accountability for deliverables. Team charters define working agreements, but RACI removes role ambiguity fast.',
      reference: 'Section 3.1a'
    },
    {
      text: 'According to Herzberg, which action will actually motivate a bored team (as opposed to just preventing dissatisfaction)?',
      options: [
        'Raising salaries by 3%',
        'Installing a free coffee machine',
        'Letting the team design their own solution (Autonomy)',
        'Fixing the noisy air conditioner'
      ],
      correct: 2,
      explanation: 'Herzberg: motivators like responsibility, achievement, recognition, and growth drive satisfaction. Pay and working conditions are hygiene factors that reduce dissatisfaction but rarely create sustained motivation.',
      reference: 'Section 3.4'
    },
    {
      text: 'A remote team member in a different time zone feels isolated and is disengaging. What is the best virtual leadership response?',
      options: [
        'Mandate they attend the 3 AM (local time) daily standup',
        'Schedule a 1-on-1 during their convenient hours to check in',
        'Replace them with a local resource',
        'Send them a written warning'
      ],
      correct: 1,
      explanation: 'Empathy (EQ) is key. Making a personal connection during *their* hours shows respect and inclusion.',
      reference: 'Section 3.1d'
    },
    {
      text: 'A highly cohesive team has been working together for 6 months and is in the Performing stage. A new key technical lead joins the team today. What stage is the team likely in now?',
      options: [
        'Performing (they absorb the new member)',
        'Norming (they explain the rules)',
        'Storming (dynamics shift and roles are tested)',
        'Adjourning (the old team is gone)'
      ],
      correct: 2,
      explanation: 'Teams are fragile ecosystems. Adding or removing a key member almost always regresses the team back to Forming or Storming as they re-establish social dominance and roles.',
      reference: 'Section 3.1b'
    },
    {
      text: 'A safety violation has occurred on the construction site that puts lives at risk. The team is debating the best way to fix the safety guard. What is the appropriate leadership style?',
      options: [
        'Servant Leadership (ask the team what they want to do)',
        'Laissez-faire (let the experts handle it)',
        'Democratic (take a vote)',
        'Directing (order the work stopped immediately)'
      ],
      correct: 3,
      explanation: 'While Servant Leadership is the default, in matters of SAFETY or severe compliance, a Directive/Autocratic style is required to protect people immediately.',
      reference: 'Section 3.2'
    },
    {
      text: 'Two department heads have a fundamental disagreement about the project scope. Both are powerful. You want a solution that resolves the root cause so it does not happen again. Which technique is best?',
      options: [
        'Smoothing (emphasize areas of agreement)',
        'Collaborate / Problem Solve',
        'Compromise (split the difference)',
        'Forcing (ask the sponsor to decide)'
      ],
      correct: 1,
      explanation: 'Collaborate (Problem Solving) is the only technique that leads to a Win-Win and resolves the root cause. Compromise is often a temporary fix (Lose-Lose).',
      reference: 'Section 3.3'
    },
    {
      text: 'During a sprint retrospective, a usually vocal team member is silent and looking at the floor. You suspect they are upset about a comment made earlier. Which EQ domain are you using?',
      options: [
        'Self-Management',
        'Social Awareness',
        'Relationship Management',
        'Self-Awareness'
      ],
      correct: 1,
      explanation: 'Social Awareness is the ability to perceive the emotions of others (reading the room). Relationship Management would be the *action* you take next.',
      reference: 'Section 3.2'
    },
    {
      text: 'A team member is struggling to complete a task because they lack specific technical knowledge. They are hardworking and eager to learn. What is your BEST course of action?',
      options: [
        'Assign the task to a senior developer instead',
        'Schedule training or pair programming for them',
        'Put them on a Performance Improvement Plan',
        'Ask them to figure it out (Autonomy)'
      ],
      correct: 1,
      explanation: 'If a team member has “Low Skill” but “High Will”, the Servant Leader provides Coaching and Training (S2 style). Replacing them ignores the opportunity for growth.',
      reference: 'Section 3.2'
    },
    {
      text: 'During planning, you realize the project requires cloud security expertise, but no one on the team has it. What should you do FIRST?',
      options: [
        'Start the work and hope the team can learn as they go',
        'Create a skills matrix and perform a gap analysis to define the need clearly',
        'Escalate to the sponsor immediately',
        'Hire an external specialist without following procurement'
      ],
      correct: 1,
      explanation: 'The PMI pattern is to assess and make the gap visible first (skills/capacity), then choose a response (train, coach/pair, acquire externally, or adjust plans).',
      reference: 'Section 3.1a'
    },
    {
      text: 'In a RACI chart, how many people should be Accountable (A) for a single task or deliverable?',
      options: [
        'Zero; accountability is shared by the whole team',
        'One',
        'Two (to ensure backup coverage)',
        'As many as needed to make stakeholders happy'
      ],
      correct: 1,
      explanation: 'Each task should have exactly one Accountable to avoid confusion and decision paralysis. Others can be Consulted or Informed.',
      reference: 'Section 3.1a'
    },
    {
      text: 'You are in a matrix organization and a functional manager will not allocate a key specialist. What is the best FIRST action?',
      options: [
        'Escalate to the sponsor and demand the resource',
        'Meet with the functional manager to align priorities and negotiate a workable allocation',
        'Threaten to report the functional manager to HR',
        'Remove the specialist work from the project without analysis'
      ],
      correct: 1,
      explanation: 'In matrix environments, influence and negotiation come before escalation. Align on goals, show project value, and propose options with tradeoffs.',
      reference: 'Section 3.1a'
    },
    {
      text: 'Your team is arguing and challenging each other’s ideas, and tension is rising. You want to move the team toward Norming. What should you do?',
      options: [
        'Replace the most vocal team member to restore peace',
        'Facilitate a working session to clarify goals, roles, and working agreements, and reinforce psychological safety',
        'Ignore it; conflict always resolves itself',
        'Force a decision to end the discussion'
      ],
      correct: 1,
      explanation: 'Storming is normal. The PM helps the team build clarity, norms, and safety so disagreement stays task-focused and becomes productive.',
      reference: 'Section 3.1b'
    },
    {
      text: 'Delivery metrics look fine, but you notice frustration, disengagement, and rising tension on the team. What is the best action?',
      options: [
        'Increase status reporting and add more meetings',
        'Conduct a team performance assessment using 1-on-1s and a retrospective, then implement improvements',
        'Wait until the project is behind schedule to intervene',
        'Send a written warning to the team'
      ],
      correct: 1,
      explanation: 'A team performance assessment surfaces hidden issues early (trust, clarity, workload, process friction) so you can adjust working agreements and support the team.',
      reference: 'Section 3.1b'
    },
    {
      text: 'The team repeats the same debate every week because decisions do not stick. What should you improve first?',
      options: [
        'The risk register',
        'Decision rules and how decisions are recorded in the team charter',
        'The project budget baseline',
        'The procurement contract'
      ],
      correct: 1,
      explanation: 'Clear decision models and decision logging prevent rework. When the team cannot decide, strengthen the charter rules and make decisions visible.',
      reference: 'Section 3.1c'
    },
    {
      text: 'In meetings, people multitask, interrupt, and decisions are missed. What is the best response?',
      options: [
        'Cancel all meetings immediately',
        'Revisit and update the meeting ground rules in the team charter, then enforce them consistently',
        'Escalate the issue to HR as the first step',
        'Replace the meeting facilitator with the sponsor'
      ],
      correct: 1,
      explanation: 'The PMI-friendly move is to use working agreements: define meeting norms, make them visible, and let the team self-police with support from the PM.',
      reference: 'Section 3.1c'
    },
    {
      text: 'A distributed team keeps reopening decisions because they cannot find what was agreed. What should you do?',
      options: [
        'Schedule daily two-hour meetings to increase alignment',
        'Create a single source of truth for decisions and make decision logging a remote working agreement',
        'Tell the team to search their email harder',
        'Force all decisions to be made by the PM only'
      ],
      correct: 1,
      explanation: 'Remote teams need explicit working agreements. A decision log plus visible work reduces confusion, rework, and the distance tax.',
      reference: 'Section 3.1d'
    },
    {
      text: 'Your global team reports that meeting times always favor one region, and morale is dropping in the other time zones. What is the best action?',
      options: [
        'Keep the schedule; team members must adapt',
        'Rotate meeting times and increase asynchronous updates so the inconvenience is shared fairly',
        'Remove the impacted region from meetings entirely',
        'Require cameras off to reduce stress'
      ],
      correct: 1,
      explanation: 'Time zone fairness is a core virtual leadership practice. Rotate meeting times and use async norms so inclusion does not depend on geography.',
      reference: 'Section 3.1d'
    },
    {
      text: 'A junior team member asks for long-term career guidance and how to navigate the organization. What is the best support approach?',
      options: [
        'Coaching',
        'Mentoring',
        'Training',
        'Forcing'
      ],
      correct: 1,
      explanation: 'Mentoring supports long-term development and organizational navigation. Coaching is more focused on improving performance on current work.',
      reference: 'Section 3.2'
    },
    {
      text: 'You influence stakeholders to support your plan primarily because of your deep expertise and credible data. Which type of power are you using?',
      options: [
        'Expert power',
        'Coercive power',
        'Reward power',
        'Legitimate power'
      ],
      correct: 0,
      explanation: 'Expert power comes from competence and credibility. It is one of the most effective and ethical forms of influence for PMs in matrix organizations.',
      reference: 'Section 3.2'
    },
    {
      text: 'During a meeting, two team members begin raising voices and the conversation turns personal. What is the best immediate action?',
      options: [
        'Force a decision immediately to stop the argument',
        'Withdraw temporarily by calling a short break and scheduling a private, facilitated conversation',
        'Compromise by splitting the difference on the spot',
        'Collaborate in the same meeting without any cool-down'
      ],
      correct: 1,
      explanation: 'When emotions are high, de-escalate first. A short pause plus a private, structured conversation prevents damage and enables a better collaboration session.',
      reference: 'Section 3.3'
    },
    {
      text: 'Two teams disagree on a minor UI detail. The impact is low, but time is short and you need a quick agreement. Which conflict technique is most appropriate?',
      options: [
        'Collaborate (Problem Solve)',
        'Compromise',
        'Force / Direct',
        'Withdraw'
      ],
      correct: 1,
      explanation: 'Compromise is acceptable when you need a fast, temporary resolution and the issue is not worth a long problem-solving effort.',
      reference: 'Section 3.3'
    },
    {
      text: 'Morale is low because tools are unreliable and the team loses hours each week to outages and rework. According to Herzberg, what is the best FIRST action?',
      options: [
        'Give public recognition at the next meeting',
        'Offer bonuses to boost morale',
        'Fix the work environment by improving tools and removing process friction',
        'Give the team more autonomy without changing anything else'
      ],
      correct: 2,
      explanation: 'Unreliable tools are a hygiene factor problem. Fix hygiene issues first, then increase motivators like autonomy, recognition, and growth.',
      reference: 'Section 3.4'
    },
    {
      text: 'Two team members do comparable work, but only one is repeatedly recognized and given high-visibility assignments. The other disengages. What is the best action?',
      options: [
        'Tell the disengaged person to be more resilient',
        'Increase transparency and rebalance recognition and opportunities to restore fairness',
        'Remove the disengaged person from the project',
        'Give the disengaged person more money only'
      ],
      correct: 1,
      explanation: 'Perceived unfairness destroys motivation quickly. Transparent workload and recognition practices reduce equity issues and improve engagement.',
      reference: 'Section 3.4'
    }
  ]"
/>

---

## 🏆 Key Takeaways

| Concept        | The "PMI Way"                                            |
| :------------- | :------------------------------------------------------- |
| **Leadership** | Servant. Support the team, remove blockers, carry water. |
| **Conflict**   | Collaborate (Win-Win) > Compromise (Lose-Lose).          |
| **Motivation** | Fix hygiene first, then motivators (growth, autonomy, recognition). |
| **Teams**      | Clarity (RACI + Charter) + Psychological Safety = performance. |
| **Virtual**    | Make remote norms explicit: tools, response times, decision logs. |

## Additional Study Topics

Use these as a one-stop review before the exam:
1. **Acquire vs develop vs manage**: match the "PMI verb" to the scenario.
2. **RACI rules**: one Accountable; clarify ownership early to prevent Storming.
3. **Team charter**: working agreements, meeting norms, decision models, escalation path.
4. **Tuckman**: Storming is normal; regression happens when team membership changes.
5. **Conflict modes**: collaborate is best; compromise is acceptable when time/impact is low; force is for emergencies.
6. **Virtual leadership**: reduce the distance tax with visibility and explicit agreements (decision logs).
7. **Motivation**: hygiene vs motivators; tailor with achievement/affiliation/power needs.
8. **Influence**: expert and referent power are stronger than coercion in matrix organizations.

<div class="study-tip">
  <strong>📝 Exam Insight:</strong> If you are ever unsure, choose the answer that sounds like the **"Nicest, most helpful human being in the room."** That is usually the Servant Leader answer.
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
