# Knowledge Check: Team Leadership & Development

Test your EQ and leadership mindset to handle the most unpredictable part of any project: People. These 25 questions cover the full breadth of Chapter 3 content, including team formation, development, servant leadership, conflict management, and motivation.

<QuizComponent
  title="Chapter 3: Comprehensive Review (25 Questions)"
  :questions="[
    {
      text: 'A project team has been working smoothly for 4 months and is in the Performing stage. A key architect leaves and a new senior developer joins. What stage is the team most likely in now?',
      options: [
        'Performing — a skilled professional will adapt quickly',
        'Norming — they just need to explain the rules',
        'Storming — team dynamics shift and roles are re-tested',
        'Adjourning — the original team is effectively dissolved'
      ],
      correct: 2,
      explanation: 'Teams are fragile ecosystems. Adding or removing a key member almost always regresses the team back to Forming or Storming as they re-establish roles, trust, and working relationships. The PM should shift back to a Coaching leadership style.',
      reference: 'Section 3.1b - Tuckman Model'
    },
    {
      text: 'According to Herzberg Two-Factor Theory, which action will actually MOTIVATE a disengaged team (as opposed to just reducing dissatisfaction)?',
      options: [
        'Increasing salaries by 5%',
        'Fixing the broken air conditioning',
        'Giving the team more autonomy over their technical approach',
        'Ensuring everyone has ergonomic equipment'
      ],
      correct: 2,
      explanation: 'Herzberg classifies pay, working conditions, and equipment as Hygiene Factors—their absence causes dissatisfaction, but their presence does not motivate. Motivators like autonomy, recognition, responsibility, and growth are what drive engagement.',
      reference: 'Section 3.4 - Herzberg Theory'
    },
    {
      text: 'The team repeats the same technical debate every sprint because decisions do not stick. What should the PM do FIRST?',
      options: [
        'Escalate to the sponsor to enforce a decision',
        'Strengthen the decision model and decision log in the Team Charter',
        'Replace the team members who keep reopening decisions',
        'Add more meetings to increase alignment'
      ],
      correct: 1,
      explanation: 'Repeating debates indicates a system problem (unclear decision rules, decisions not recorded). The correct first action is to improve the Team Charter with clear decision models and ensure all decisions are logged and visible.',
      reference: 'Section 3.1c - Decision Models'
    },
    {
      text: 'A remote team member in Singapore feels isolated because all meetings are scheduled for US Eastern time. Morale is dropping. What is the BEST action?',
      options: [
        'Require the team member to attend—flexibility is expected in global projects',
        'Rotate meeting times so the inconvenience is shared fairly and increase async updates',
        'Replace the team member with someone in a more convenient time zone',
        'Tell the team member to watch recordings instead of attending live'
      ],
      correct: 1,
      explanation: 'Time zone fairness is a core virtual leadership practice. Rotating meeting times, using asynchronous standup formats, and ensuring inclusion regardless of geography are essential for distributed team health.',
      reference: 'Section 3.1d - Virtual Teams'
    },
    {
      text: 'Two department heads have a fundamental scope disagreement. Both are powerful stakeholders. The PM wants a solution that resolves the root cause so it does not resurface. Which conflict resolution mode is BEST?',
      options: [
        'Smooth/Accommodate (emphasize agreement to preserve relationships)',
        'Collaborate/Problem Solve (find a Win-Win solution)',
        'Compromise (split the difference quickly)',
        'Force (ask the sponsor to make the decision)'
      ],
      correct: 1,
      explanation: 'Collaborate (Problem Solving) is the only technique that leads to Win-Win, resolves root causes, and creates lasting solutions. Compromise creates Lose-Lose and may resurface later. Force damages trust.',
      reference: 'Section 3.3 - Conflict Resolution Modes'
    },
    {
      text: 'In a RACI chart, how many people should be Accountable (A) for a single task or deliverable?',
      options: [
        'Zero — accountability is shared by the whole team',
        'Exactly one',
        'Two — to ensure backup coverage',
        'As many as needed to make stakeholders feel included'
      ],
      correct: 1,
      explanation: 'Each task should have exactly one Accountable person to ensure clear ownership and avoid confusion/decision paralysis. Having multiple Accountables leads to nobody being truly responsible.',
      reference: 'Section 3.1a - RACI Matrix'
    },
    {
      text: 'A team member believes they CAN do the work (high Expectancy) and WANTS the reward (high Valence), but does NOT believe the company will actually deliver the promised bonus (low Instrumentality). According to Vroom, will they be motivated?',
      options: [
        'Yes — two out of three factors are positive',
        'Yes — belief in ability is the most important factor',
        'No — motivation is multiplicative; if any factor is zero, motivation is zero',
        'Maybe — it depends on their personality type'
      ],
      correct: 2,
      explanation: 'Vroom Expectancy formula is M = E × I × V (multiplicative). If trust in the reward system (Instrumentality) is zero, total motivation is zero. This is why transparent, reliable reward systems matter.',
      reference: 'Section 3.4 - Vroom Expectancy Theory'
    },
    {
      text: 'During a Sprint Retrospective, a usually vocal team member is silent and looking at the floor. You suspect they are upset about a comment made earlier. Which EQ competency are you USING when you notice this?',
      options: [
        'Self-Awareness',
        'Self-Regulation',
        'Empathy (Social Awareness)',
        'Relationship Management'
      ],
      correct: 2,
      explanation: 'Empathy (Social Awareness) is the ability to perceive and understand the emotions of others—reading the room. Relationship Management would be the action you take next based on what you observed.',
      reference: 'Section 3.2 - Emotional Intelligence'
    },
    {
      text: 'A new team member is struggling to complete a task because they lack specific technical knowledge. They are hardworking and eager to learn. According to Situational Leadership, what is the PM BEST approach?',
      options: [
        'Delegate fully and let them figure it out (S4)',
        'Provide coaching: explain what and why, encourage through difficulty (S2)',
        'Put them on a Performance Improvement Plan',
        'Reassign the task to a senior developer'
      ],
      correct: 1,
      explanation: 'A team member with Low Skill but High Will is at Development Level D1/D2. The correct leadership response is Coaching (S2): high direction + high support. Provide training, explain why, encourage through failure.',
      reference: 'Section 3.2 - Situational Leadership II'
    },
    {
      text: 'You are negotiating a contract with a vendor. You want to build a long-term partnership where both sides benefit. Which negotiation strategy should you use?',
      options: [
        'Distributive (Fixed Pie / Win-Lose)',
        'Integrative (Expand the Pie / Win-Win)',
        'Coercive (Power-Based)',
        'Avoidance (Walk away from the table)'
      ],
      correct: 1,
      explanation: 'Integrative negotiation focuses on expanding the pie and finding mutual value. It explores interests (not positions) to create options that benefit both parties. This is essential for long-term partnerships.',
      reference: 'Section 3.3 - Negotiation Strategies'
    },
    {
      text: 'Your global hybrid team has in-person members in the New York office and remote members in Europe. What is the BEST practice to ensure equitable participation?',
      options: [
        'Allow the office team to have sidebar conversations for efficiency',
        'If one person is remote, everyone joins on their own device—no room-only sidebars',
        'Prioritize in-person members since they are more visible',
        'Have remote members attend only for their agenda items to save time'
      ],
      correct: 1,
      explanation: 'The if one is remote, all are remote rule ensures equal participation. Everyone joining on their own device eliminates the room full of people vs. small square on screen dynamic that disadvantages remote participants.',
      reference: 'Section 3.1d - Hybrid Teams'
    },
    {
      text: 'A safety violation has occurred on the construction site that puts workers at immediate physical risk. The team is debating the best way to address the hazard. What leadership style should the PM use?',
      options: [
        'Servant Leadership — ask the team what they want to do',
        'Democratic — take a vote on the best approach',
        'Laissez-faire — let the safety experts handle it',
        'Autocratic/Directive — order the work stopped immediately'
      ],
      correct: 3,
      explanation: 'While Servant Leadership is the default for most situations, in matters of SAFETY or severe compliance, an Autocratic/Directive style is required. Protect people first, then repair trust and collaborate on prevention later.',
      reference: 'Section 3.2 - Leadership Styles'
    },
    {
      text: 'The project requires cloud security expertise that no current team member possesses. What should the PM do FIRST?',
      options: [
        'Start the work and hope the team can learn on the job',
        'Create a Skills Matrix and perform a Gap Analysis to define the need clearly',
        'Immediately escalate to the sponsor to hire a contractor',
        'Remove the cloud security features from scope'
      ],
      correct: 1,
      explanation: 'The PMI pattern is Assess → Options → Decide → Execute. First, make the gap visible with a Skills Matrix and Gap Analysis. Then evaluate options (train, coach/pair, acquire externally, adjust scope) before deciding.',
      reference: 'Section 3.1a - Skills Matrix and Gap Analysis'
    },
    {
      text: 'A distributed team keeps reopening decisions because they cannot find what was agreed. What is the BEST action?',
      options: [
        'Schedule more daily meetings to increase alignment',
        'Create a single source of truth for decisions and add decision logging to the Remote Working Agreement',
        'Tell the team to search their email and chat history more carefully',
        'Have all decisions made exclusively by the PM to avoid confusion'
      ],
      correct: 1,
      explanation: 'Remote teams need explicit working agreements. A centralized decision log plus visible work reduces the distance tax of confusion, rework, and repeated debates. This is a system fix, not a people fix.',
      reference: 'Section 3.1d - Remote Working Agreements'
    },
    {
      text: 'During a heated meeting, two team members begin raising voices and the conversation turns personal. What is the PM BEST immediate action?',
      options: [
        'Force a decision immediately to stop the argument',
        'Compromise on the spot by splitting the difference',
        'Withdraw temporarily: call a short break and schedule a private, facilitated conversation',
        'Let them work it out—conflict resolution is a team responsibility'
      ],
      correct: 2,
      explanation: 'When emotions are high, de-escalate first. A short break allows people to calm down. Then a private, structured conversation prevents damage and enables productive collaboration. Never force a decision when emotions are running hot.',
      reference: 'Section 3.3 - De-escalation Techniques'
    },
    {
      text: 'A team member consistently misinterprets requirements, leading to rework. According to Training Needs Analysis, what should the PM check FIRST?',
      options: [
        'Is this a Knowledge gap (they do not know), Skill gap (they cannot do), Will gap (they will not do), or Environment gap (something blocks them)?',
        'Put them on a Performance Improvement Plan immediately',
        'Reassign them to a less critical role',
        'Escalate to HR for formal counseling'
      ],
      correct: 0,
      explanation: 'Before prescribing a solution, diagnose the gap type. Knowledge gaps need training. Skill gaps need practice/coaching. Will gaps need motivation/counseling. Environment gaps need blocker removal. The wrong diagnosis leads to the wrong solution.',
      reference: 'Section 3.2 - Training Needs Analysis'
    },
    {
      text: 'According to McClelland Acquired Needs Theory, which assignment would be BEST for a team member with a high need for Achievement (nAch)?',
      options: [
        'Assign them to coordinate stakeholder meetings and build relationships',
        'Give them leadership of a large team to exercise influence',
        'Assign them a challenging technical problem with clear success criteria and feedback',
        'Have them focus on administrative tasks to reduce their workload'
      ],
      correct: 2,
      explanation: 'People with high Achievement needs are motivated by challenging tasks, clear goals, and personal responsibility for outcomes. They want feedback on their performance. Give them hard problems to solve, not coordination or administrative work.',
      reference: 'Section 3.4 - McClelland Theory'
    },
    {
      text: 'You influence stakeholders to support your plan primarily because of your deep technical expertise and credible data. Which type of power are you using?',
      options: [
        'Expert power',
        'Referent power',
        'Legitimate power',
        'Coercive power'
      ],
      correct: 0,
      explanation: 'Expert power comes from competence, knowledge, and credibility. It is one of the most effective and ethical forms of influence for PMs—especially in matrix organizations where legitimate authority is limited.',
      reference: 'Section 3.2 - Types of Power'
    },
    {
      text: 'The team is confused about whether a story is finished. The developer says it is done because the code is written; QA says it is not because testing is incomplete. What agreement is missing?',
      options: [
        'The Project Charter',
        'The Definition of Done (DoD)',
        'The Resource Management Plan',
        'The Communications Management Plan'
      ],
      correct: 1,
      explanation: 'The Definition of Done (DoD) is a shared checklist of quality criteria that applies to ALL work items. It ensures the entire team agrees on what done means (e.g., code reviewed, tested, documented). This prevents the done but not done problem.',
      reference: 'Section 3.1c - DoD vs Acceptance Criteria'
    },
    {
      text: 'A functional manager will not allocate a key specialist to your project, citing higher-priority department work. What is the PM BEST first action?',
      options: [
        'Escalate immediately to the sponsor and demand the resource',
        'Meet with the functional manager to align priorities, show project value, and negotiate a workable allocation',
        'Report the functional manager to HR for non-cooperation',
        'Remove the work requiring the specialist from project scope without analysis'
      ],
      correct: 1,
      explanation: 'In matrix environments, influence and negotiation come before escalation. Meet with the functional manager to understand their constraints, align on organizational priorities, show mutual benefit, and propose options with tradeoffs.',
      reference: 'Section 3.1a - Negotiating for Resources'
    },
    {
      text: 'According to Hofstede cultural dimensions, a team member from a high Power Distance culture may hesitate to challenge the PM ideas openly. What is the BEST adaptation?',
      options: [
        'Interpret silence as agreement and proceed with decisions',
        'Demand they speak up—everyone should be treated the same',
        'Use anonymous input methods and 1-on-1 conversations to gather their feedback',
        'Remove them from decision-making discussions'
      ],
      correct: 2,
      explanation: 'In high Power Distance cultures, people may defer to authority and not challenge leaders openly. The PM should adapt by creating safe channels for input: anonymous brainstorming, direct 1-on-1 conversations, or explicitly inviting input.',
      reference: 'Section 3.1d - Hofstede Cultural Dimensions'
    },
    {
      text: 'A senior developer who has been high-performing suddenly starts missing deadlines and seems disengaged. According to Situational Leadership, what should the PM do?',
      options: [
        'Switch to Directing (S1) and provide detailed task instructions',
        'Switch to Supporting (S3): ask open-ended questions to understand what is happening',
        'Immediately issue a formal warning',
        'Delegate more work to challenge them'
      ],
      correct: 1,
      explanation: 'A previously high performer showing sudden decline needs support, not micromanagement. Switch to S3 (Supporting): ask open questions, show empathy, and discover if they are burned out, facing personal issues, or blocked by something.',
      reference: 'Section 3.2 - Situational Leadership II'
    },
    {
      text: 'Morale is low because the team tools are unreliable, causing frequent outages and rework. According to Herzberg, what should the PM do FIRST?',
      options: [
        'Give public recognition to boost morale',
        'Offer bonuses to compensate for the frustration',
        'Fix the hygiene factors by improving tools and removing process friction',
        'Give the team more autonomy without addressing the tool problems'
      ],
      correct: 2,
      explanation: 'Unreliable tools are a Hygiene Factor problem. According to Herzberg, you must fix hygiene issues first (tools, environment, processes). Only after the baseline is stable do motivators (autonomy, recognition, growth) become effective.',
      reference: 'Section 3.4 - Herzberg Theory'
    },
    {
      text: 'Google Project Aristotle research identified Psychological Safety as the #1 predictor of team success. Which PM behavior BEST builds psychological safety?',
      options: [
        'Never admit mistakes to maintain authority and credibility',
        'Publicly acknowledge your own mistakes and thank people who raise problems early',
        'Focus only on performance metrics and task completion',
        'Avoid discussing failures to keep team morale high'
      ],
      correct: 1,
      explanation: 'Psychological safety is built by modeling vulnerability. When leaders admit mistakes and respond positively to problems being raised, team members feel safe to take risks, ask questions, and surface issues early—before they become disasters.',
      reference: 'Section 3.1b - Psychological Safety'
    },
    {
      text: 'Two teams disagree on a minor UI color scheme. The impact is low, but you need a quick decision to keep the sprint on track. Which conflict resolution mode is MOST appropriate?',
      options: [
        'Collaborate (spend time finding the perfect solution)',
        'Compromise (each team gives up something for quick agreement)',
        'Force (PM decides the color)',
        'Withdraw (avoid the decision and let them figure it out)'
      ],
      correct: 1,
      explanation: 'Compromise is acceptable when you need a fast resolution, the issue is low-stakes, and both parties can give something up without major impact. Collaborate is best for high-impact decisions; Compromise is appropriate for minor issues under time pressure.',
      reference: 'Section 3.3 - Conflict Mode Selection'
    }
  ]"
/>

---

## 🏆 Key Takeaways

| Concept        | The "PMI Way"                                            |
| :------------- | :------------------------------------------------------- |
| **Leadership** | Servant. Support the team, remove blockers, carry water. |
| **Conflict**   | Collaborate (Win-Win) > Compromise (Lose-Lose) in most cases. |
| **Motivation** | Fix hygiene first, then add motivators (growth, autonomy, recognition). |
| **Teams**      | Clarity (RACI + Charter) + Psychological Safety = Performance. |
| **Virtual**    | Make remote norms explicit: tools, response times, decision logs. |
| **Culture**    | Adapt to cultural differences; do not assume everyone communicates the same way. |

---

## 📚 Study Topic Checklist

Use these as a one-stop review before the exam:

### Team Formation (3.1a)
- [ ] **Skills Matrix**: Rate capability, identify gaps, choose response (train, coach, acquire, adjust)
- [ ] **RACI**: One Accountable per task; clarify ownership early to prevent Storming
- [ ] **Resource Leveling vs Smoothing**: Leveling can extend schedule; Smoothing uses float only
- [ ] **Matrix Organizations**: Influence and negotiation before escalation

### Team Development (3.1b)
- [ ] **Tuckman Model**: Forming → Storming → Norming → Performing → Adjourning
- [ ] **Regression happens**: Adding/removing members resets team dynamics
- [ ] **Psychological Safety**: Model vulnerability; respond constructively to failure
- [ ] **Project Aristotle**: Safety, Dependability, Structure, Meaning, Impact

### Team Charter and Agreements (3.1c)
- [ ] **Team Charter contents**: Purpose, roles, communication, decisions, conflict path, quality
- [ ] **Ground Rules**: Collaborative, Visible, Self-Policing
- [ ] **Definition of Done vs Acceptance Criteria**: DoD applies to all; AC applies to one item
- [ ] **Decision Models**: Consensus, Majority, Expert, PM tie-breaker, Sponsor

### Virtual Teams (3.1d)
- [ ] **Hofstede Dimensions**: Power Distance, Individualism, Uncertainty Avoidance, etc.
- [ ] **Async First**: Write before meeting; capture outcomes
- [ ] **Remote Working Agreement**: Core hours, response times, decision log, time zone fairness
- [ ] **Hybrid pitfall**: If one is remote, all are remote

### Servant Leadership and Coaching (3.2)
- [ ] **Situational Leadership II**: Match style (S1-S4) to development level (D1-D4)
- [ ] **GROW Model**: Goal, Reality, Options, Will for coaching conversations
- [ ] **EQ Competencies**: Self-Awareness, Self-Regulation, Motivation, Empathy, Social Skills
- [ ] **Power Types**: Expert and Referent > Coercive (which is usually a trap answer)

### Conflict Management (3.3)
- [ ] **5 Modes**: Collaborate is default best; Compromise for time pressure; Force for emergencies
- [ ] **Task vs Relationship conflict**: Task conflict can be healthy; Relationship conflict is always harmful
- [ ] **BATNA/ZOPA**: Know your alternative; find the overlap for Win-Win
- [ ] **Process is usually the cause**: Look for scope/schedule/priority issue before blaming personality

### Motivation and Performance (3.4)
- [ ] **Herzberg**: Hygiene does not equal Motivation; fix hygiene first, then add motivators
- [ ] **Vroom**: M = E × I × V — if any is zero, motivation is zero
- [ ] **McClelland**: Achievement, Affiliation, Power — match assignments to needs
- [ ] **Performance Issues**: Meet privately → Clarify expectations → Enable success → Plan → Escalate last

---

<div class="study-tip">
  <strong>📝 Final Exam Insight:</strong> If you are ever unsure, choose the answer that sounds like the <strong>Most helpful, most empathetic, most supportive human being in the room.</strong> That is usually the Servant Leader answer. Escalate last. Collaborate first. Fix the system, not just the symptom.
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
