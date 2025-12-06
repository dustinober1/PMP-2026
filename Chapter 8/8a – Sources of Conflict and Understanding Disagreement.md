# 8a – Sources of Conflict and Understanding Disagreement

Sarah makes an important discovery: **Most conflicts have a surface issue and a root cause. If you only solve the surface issue, the conflict comes back.**

When the architect and agile coach disagreed about the technical approach, Sarah initially thought it was about technical philosophy—scalability vs. simplicity. But deeper conversation revealed something else. The architect was worried about technical debt; the agile coach was worried about timeline pressure. They were not really disagreeing about architecture. They were disagreeing about risk tolerance and timeline.

When regional directors resisted standardization, Sarah thought it was about control—they wanted to keep autonomy. But when she listened more carefully, she realized it was about competence. They genuinely believed the standard process would not work in their regional context. They feared they would look bad if they had to implement something that failed.

This section teaches you to **dig beneath the surface** to understand what people are really fighting about.

---

## 8.1 Where Does Conflict Come From?

Conflicts in projects arise from several sources:

### 8.1.1 Resource Constraints and Competition

When there is not enough of something (time, budget, people, equipment), people compete for it.

**Examples**:
- Two projects competing for the same developer: "I need them for my sprint" vs. "I already committed them to my initiative"
- Budget allocation: Finance wants the new system to cost less; Operations wants it fully built and integrated
- Time: The team is committed to the current project but the sponsor wants them on a new project
- Equipment: Two projects need the same testing server at the same time

**Why it is conflict**: The resources are finite. Someone will not get what they want.

**Sarah's example (Expense System)**:
The developers are committed to sprint delivery, but the Finance Manager (product owner) wants them to spend time fixing issues in the old system. The developers say they cannot do both at full speed. The Finance Manager says the old system is losing them thousands in manual processing. Both are right. There is a real conflict over developer time.

### 8.1.2 Competing Priorities and Success Criteria

Different stakeholders prioritize differently. The project has multiple goals, and you cannot optimize for all of them equally.

**Examples**:
- Timeline vs. Quality: "We need to launch by March" vs. "We cannot launch until it is perfect"
- Cost vs. Capability: "Keep it cheap" vs. "Include all these features"
- Standardization vs. Flexibility: "Everyone must use the same process" vs. "We need to adapt to our regional context"
- Business goals vs. Technical sustainability: "Get revenue now" vs. "Build a foundation that scales"

**Why it is conflict**: These are not technical disagreements. They are value disagreements about what matters most.

**Sarah's example (Renovation)**:
The Finance Director prioritizes cost control (March 15 deadline with minimal budget). The Facilities Manager prioritizes creating an excellent workspace (nice finishes, thoughtful layout). These priorities can conflict when trade-offs are needed. Both are legitimate.

### 8.1.3 Different Approaches and Methods

People disagree on *how* to do things, even when they agree on *what* to achieve.

**Examples**:
- Agile vs. Predictive: Team disagrees on methodology for building the system
- Incremental vs. Big-Bang: Should you phase implementation or go all at once?
- Buy vs. Build: Should you use an off-the-shelf solution or build custom?
- Centralized vs. Decentralized: Should decisions be made at HQ or regional level?

**Why it is conflict**: People have different mental models of what works. These models are based on experience, training, values.

**Sarah's example (Transformation)**:
The IT team wants a big-bang implementation (single date, all regions at once, lowest risk of inconsistency). Operations wants gradual rollout (one region at a time, learn and adjust). Both approaches have merit. Big-bang is faster and simpler from a technical perspective. Gradual rollout is safer and allows learning.

### 8.1.4 Interpersonal and Personality Differences

Sometimes conflict is not about the project; it is about personality or relationship.

**Examples**:
- Assertive person vs. collaborative person: One person makes decisions quickly; another wants discussion and consensus
- Detail-oriented person vs. big-picture person: One person wants specifications; another wants flexibility
- Introverted vs. extroverted: One person processes internally; another needs to talk out loud
- Past grievances: Two people have history; they approach each other defensively

**Why it is conflict**: People have different communication and working styles. Misunderstandings happen. Trust may be low.

**Sarah's example**:
In the agile team, the architect (detail-oriented, technical thinker) and the agile coach (big-picture, people-focused) had a hard time understanding each other's concerns. Not because they disagreed about the outcome, but because they approached problems differently.

### 8.1.5 Values and Beliefs

Sometimes people disagree because they have fundamentally different values about what matters.

**Examples**:
- Work-life balance: "We should not work weekends" vs. "We need to do whatever it takes to deliver"
- Inclusivity: "Everyone should be involved in decisions" vs. "Fast decisions require less discussion"
- Transparency: "Communicate everything" vs. "Share only what people need to know"
- Risk tolerance: "Better safe than sorry" vs. "Innovation requires risk"
- Integrity: "We cannot cut corners, even if it delays delivery" vs. "Done is better than perfect"

**Why it is conflict**: Values are deeply held and not easily changed. When two people have different values, conflict can be persistent.

**Sarah's example (Transformation)**:
One regional director values stability and consistency ("The process should be the same everywhere"). Another values autonomy and local adaptation ("Each region needs to decide for itself"). These are value differences, not just preference differences.

### 8.1.6 Information Gaps and Miscommunication

Sometimes what feels like conflict is actually misunderstanding.

**Examples**:
- You said "approximately March 15"; they heard "exactly March 15"
- You thought the scope was clear; they had a different understanding
- You assumed they knew about a decision; they were not informed
- You understood the constraint differently than they did

**Why it is conflict**: Misunderstanding feels like disagreement. The other person seems unreasonable ("How could you have thought that?").

**Sarah's example**:
The renovation timeline conflict partly came from misunderstanding. Sarah understood that asbestos meant a 4-week delay. The Finance Director heard delay but thought it might be shorter. They were not disagreeing about asbestos (both agreed it had to be remediated). They were disagreeing about timeline because they had different information.

### 8.1.7 Power and Authority Issues

Sometimes conflict is about who gets to decide, not what gets decided.

**Examples**:
- "Why should the architect decide the technical approach? I should have a say"
- "The product owner changes their mind too much; they should stick to decisions"
- "Finance keeps overriding our team decisions; that undermines my authority"
- "Why was this decision made without me? I should have been involved"

**Why it is conflict**: People feel disrespected or excluded. Trust in decision-making authority is questioned.

**Sarah's example**:
In the transformation program, the pilot teams felt the design team was making decisions without them. The design team felt the pilot teams kept second-guessing their work. The real conflict was about authority: Who decides on the process? The design team (with expertise) or pilot teams (with local knowledge)?

---

## 8.2 The Anatomy of Conflict: Surface vs. Root Cause

Sarah learns that addressing conflict requires understanding the layers:

**Surface Issue**: What people are explicitly arguing about
- "We cannot launch until testing is complete" (timeline conflict)
- "We need to standardize the process" (approach conflict)
- "The furniture blocks the fire exit" (technical conflict)

**Underlying Interests**: What people really care about (often unstated)
- "I am worried about quality and our reputation if we launch too fast"
- "I am worried my region will be blamed if the standard process does not work"
- "I am worried about safety and liability"

**Root Cause**: Why they care about these interests
- Quality concern comes from past experience (maybe a previous launch went badly)
- Regional concern comes from lack of trust in corporate (maybe corporate changes their mind a lot)
- Safety concern comes from professional responsibility (as a facilities manager, safety is their job)

**Example: The Architect-Agile Coach Conflict**

*Surface issue*: "Should we build a scalable architecture or the simplest thing that works?"

*First-level understanding*:
- Architect cares about technical sustainability
- Agile coach cares about speed and iteration

*Root cause (deeper conversation)*:
- Architect is worried because they have seen projects fail from technical debt
- Agile coach is worried because the business is impatient and might kill the project if it takes too long
- Both are worried the project will fail, just for different reasons

*Real conflict*: Risk tolerance and timeline certainty, not architecture philosophy

Once Sarah understands the root cause, she can address it differently. She can acknowledge both concerns ("You are right that technical debt matters. You are also right that timeline matters.") and help find a solution that addresses both ("What if we spend week 1 on basic scalability work, then iterate?"). This is different from saying, "Pick one: scalability or speed."

---

## 8.3 Common Conflict Patterns in Projects

Sarah notices that certain conflicts repeat across projects:

### 8.3.1 The Scope-Schedule-Cost Triangle

The most common project conflict is someone wanting more scope, faster timeline, or lower cost than the constraints allow.

**Pattern**:
- Stakeholder A: "We need all these features, launched by March, for $200K"
- Reality: All those features, March launch, and $200K are not compatible. You need to trade-off

**Why it happens**: Different stakeholders prioritize differently and may not understand constraints. Or they understand constraints but hope you are creative enough to overcome them.

**How to address it**:
1. Make the constraint visible: "We have $200K, March deadline, and these five features. These three things are in tension. We need to prioritize."
2. Help them choose: "If all features are required, we need more budget or more time. If timeline and budget are fixed, we need to reduce scope. What is the priority?"
3. Document the decision: "We prioritized timeline. We are cutting features X and Y to meet March. This is the trade-off we made."

### 8.3.2 The Technical-Business Conflict

Technical people and business people often disagree:
- Technical: "We need to refactor the code; it is unmaintainable"
- Business: "We need new features; we do not care about the code"

**Why it happens**: Technical people see technical sustainability; business people see revenue and features.

**How to address it**: Help each understand the other. "If we do not refactor, we will eventually slow down feature delivery because the code is hard to change." "If we refactor indefinitely, we will never deliver features customers want." Usually the answer is both-and: "We will do 70% feature work and 30% technical work."

### 8.3.3 The Autonomy-Alignment Conflict

Teams want autonomy to make decisions. Organizations want standardization and alignment.
- Team: "We should decide how to implement this in our context"
- Organization: "Everyone needs to do it the same way"

**Why it happens**: Teams see local context and believe they can optimize for their situation. Organizations see chaos and confusion if everyone does it differently.

**How to address it**: Find the hybrid. "Core process is standard (alignment). How you implement each step is flexible (autonomy)."

### 8.3.4 The Speed-Quality Conflict

Every project faces this: quality takes time; speed requires shortcuts.
- Quality-focused person: "We should not launch until it is perfect"
- Speed-focused person: "Perfect is the enemy of done"

**Why it happens**: Both are right. Perfection delays delivery. But poor quality damages reputation.

**How to address it**: Define "good enough." "Here is the quality standard we are committing to. It is not perfect; it meets these criteria. That is what we will deliver on March 15."

---

## 8.4 Distinguishing Real Conflict from Personality Clash

Sometimes what feels like conflict is just personality difference.

**Real conflict** (worth engaging in):
- "I disagree with your approach because it creates technical debt"
- "I cannot support the timeline because of the safety issue"
- "This does not align with our business strategy"

**Personality clash** (should be managed, not resolved):
- "I do not like how they communicate"
- "They are too aggressive" / "They are too passive"
- "They never listen to my ideas"

**How to tell the difference**:
- Real conflict: If you remove emotion and personalities, is there still a disagreement about the project?
- Personality clash: Is the disagreement really about the project or about how they are?

**How to handle**:
- Real conflict: Engage directly in the disagreement (next sections on resolution)
- Personality clash: Manage the relationship, do not try to resolve the clash. Help them work despite the personality difference.

**Example**:
Sarah's architect and agile coach are very different people. The architect is formal and analytical. The agile coach is casual and relational. If Sarah tried to change them, she would fail. But she can help them work together by respecting their differences and creating space for each to contribute.

---

## 8.5 Recognizing When Conflict Is Healthy

Not all conflict is bad. **Constructive conflict** leads to better decisions.

**Healthy conflict** has these characteristics:
- **Focused on ideas, not personalities**: "I disagree with that approach because..." not "You are wrong"
- **Respectful**: People can disagree without being disagreeable
- **Open to being wrong**: "I might be missing something; help me understand your perspective"
- **Outcome-focused**: People care about finding the best answer, not winning

**Unhealthy conflict** has these characteristics:
- **Personal attacks**: "That is a stupid idea" not "I have concerns about that approach"
- **Disrespectful**: People interrupt, dismiss, or talk over each other
- **Closed**: "I am right and you are wrong" not "I wonder if we are both right about something"
- **Political**: People care about winning, not finding the best answer

**Sarah's observation**:
When the architect and agile coach disagreed, it was healthy conflict. They challenged each other's thinking. When Sarah listened, she learned something from both of them. That is productive conflict.

But when the regional director dismissed the transformation program ("This will never work here"), that felt unhealthy. There was no openness to understanding; just dismissal.

---

## 8.6 Your Conflict Style

Before you can choose how to respond to conflict, you need to understand your natural style.

Most people have a default conflict style—the way they naturally respond to disagreement:

**Competing**: "I need to win this argument"
- You push for your perspective
- You are comfortable with conflict
- You speak up quickly and forcefully
- You may not listen to the other side

**Collaborating**: "We need to find a solution that works for everyone"
- You want to understand all perspectives
- You invest time in discussion
- You assume there is a solution that addresses everyone's needs
- You may spend too much time discussing and not decide fast enough

**Compromising**: "Everyone gives up a little to meet in the middle"
- You look for middle ground
- You are pragmatic and realistic
- You do not expect perfection
- You may settle for solutions that no one really wanted

**Accommodating**: "I will go along with what you want"
- You are focused on maintaining relationships
- You do not like conflict
- You are good at seeing the other person's perspective
- You may give in too quickly and not advocate for your view

**Avoiding**: "I hope this conflict goes away"
- You do not like conflict
- You delay or ignore disagreements
- You may seem unengaged
- You may miss important issues

**Which is your style?** Most people have a primary style and a secondary style. You might be naturally collaborative but become competitive when you feel disrespected.

**The key insight**: **No single style is right all the time. Different situations require different approaches.** Your job is to:
1. Know your natural style (so you understand your bias)
2. Learn to adapt your style to the situation

---

## 8.7 Understanding the Other Person's Perspective

Before you can resolve conflict, you need to really understand what the other person thinks and why.

**Techniques for understanding**:

**1. Listen without planning your response**
- Do not think about how to counter their argument while they are talking
- Actually hear what they are saying

**2. Ask clarifying questions**
- "Help me understand why that matters to you"
- "What is your concern about this approach?"
- "If we do it your way, what happens?"

**3. Reflect back what you heard**
- "So you are concerned about timeline because the business is impatient?"
- "Am I understanding correctly that you want standardization for consistency?"
- Verify you understood before responding

**4. Look for common ground**
- Where do you agree? Start there.
- "We both want the project to succeed. We just disagree on how."

**5. Assume good intent**
- They are not trying to be difficult
- They have a legitimate reason for their perspective (even if you think it is wrong)
- Ask: "What leads you to believe that?"

**Sarah's approach**:
When Sarah speaks with the regional director who is skeptical about the transformation, she does not argue. She asks: "What concerns you about the standard process? What do you think will not work in your region?" Then she listens. Often, the director's concerns are legitimate. And once they feel heard, they are more open to exploring solutions.

---

## Key Takeaways: Sources of Conflict and Understanding Disagreement

1. **Conflict comes from multiple sources**: Resources, priorities, approaches, personalities, values, information gaps, authority issues
2. **Surface issue ≠ root cause**: Dig deeper to understand what people really care about
3. **Not all disagreement is conflict**: Misunderstanding sometimes feels like conflict; clarify before assuming
4. **Certain patterns repeat**: Scope-schedule-cost, technical-business, autonomy-alignment, speed-quality
5. **Distinguish real conflict from personality clash**: Engage with real conflict; manage personality differences
6. **Healthy conflict exists**: Constructive disagreement leads to better decisions
7. **Know your conflict style**: Understand your natural approach so you can adapt it
8. **Understand the other person's perspective**: Listen, ask questions, verify understanding, look for common ground

---

## Practice Scenario

**Context**: You are managing a system migration project. The current system is 10 years old and increasingly difficult to maintain. You have identified a modern replacement system.

Two key stakeholders disagree:
- **IT Director**: Wants a 6-month implementation (big-bang migration on a specific date). Says this is the cleanest approach, lowest risk of data inconsistency, simplest from a technical perspective
- **Operations Manager**: Wants a 12-month phased implementation (one department at a time). Says this gives teams time to learn, allows you to catch issues early, is less disruptive

Both want the project to succeed. But they disagree on approach.

**Questions**:
1. Is this real conflict or personality clash? Why?
2. What are the legitimate interests underlying each position?
3. What is the root cause of the disagreement?
4. What questions would you ask to understand each person's perspective better?

---

*ECO Connection: People Domain – Task 3: Determine, confirm, or update project success criteria and resolve competing or conflicting objectives*

