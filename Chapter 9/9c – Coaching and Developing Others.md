# 9c – Coaching and Developing Others

Sarah makes a shift that changes everything: **Instead of giving people answers, she asks them questions.**

Marcus came to Sarah frustrated: "I do not know how to optimize this query. It is too slow."

Sarah's instinct was to say: "Have you tried adding an index? Here is how..." But instead, she said: "Tell me what you have tried. What do you think is causing the slowness?"

Marcus started thinking out loud. "Well, the query is joining three tables... Maybe the join order is inefficient? Or maybe there is a missing index?"

Sarah said: "Those are good hypotheses. How would you test them?"

Thirty minutes later, Marcus figured it out himself. He felt more capable. And he learned something—he understood the diagnosis process, not just the answer.

This section teaches you **coaching**—using questions to help people find their own answers, build competence, and develop confidence.

---

## 9.1 What Is Coaching?

Coaching is **helping someone find their own answers instead of giving them answers.**

It is different from:
- **Telling** (giving information): "The answer is X"
- **Teaching** (explaining): "Here is how to solve this type of problem"
- **Consulting** (advising): "I recommend Y"

Coaching is asking questions so the person thinks through the problem themselves.

### 9.1.1 The Power of Coaching

**Why coaching works better than telling**:

1. **Learning sticks**: When people figure something out, they remember it better than when you tell them
2. **Confidence builds**: "I solved that" feels different from "They solved it for me"
3. **Ownership increases**: They own the solution because they created it
4. **Growth happens**: They develop problem-solving skills, not just learn the answer
5. **Motivation increases**: Solving problems feels good

**Example**:
If Sarah told Marcus the answer (add an index), he would use that fix. But next time he had a slow query, he would come back to Sarah or guess randomly.

By coaching him to figure it out, Marcus learned the diagnostic process. Next slow query, he applies the same thinking and solves it himself.

### 9.1.2 When to Coach vs. When to Tell

You do not always coach. Sometimes you need to tell.

| Situation | Approach | Why |
|---|---|---|
| Person is inexperienced and uncertain | Tell + Coaching | They need both direction and development |
| Person has time to think and learn | Coaching | Investment pays off |
| Person is capable but has not figured it out | Coaching | They can do it; help them think |
| Crisis, need immediate answer | Tell | No time for coaching |
| Person has asked for an answer | Sometimes coaching, sometimes tell | Respect their request; check if they want to learn or need a quick answer |
| You want them to develop the skill | Coaching | Growth requires active thinking |
| You just need the work done | Tell | Efficiency over development |

**The art**: Know when to do each. Most leaders under-coach because telling is faster in the moment.

---

## 9.2 The Coaching Conversation: A Framework

A coaching conversation typically follows this structure:

### Step 1: Establish the Context

**What you say**: "I want to talk about [situation]. Do you have 15 minutes?"

**Why**: Sets expectations. Coaching is intentional, not rushed.

### Step 2: Understand Their Perspective

**What you ask**:
- "What is your understanding of the situation?"
- "What is working well? What is not working?"
- "How are you feeling about this?"

**Why**: You understand their view before jumping to solutions. This builds trust and respect.

**Common mistake**: Asking one question, then jumping in with your view. Ask, listen, ask again.

### Step 3: Help Them Think It Through

**What you ask**:
- "What do you think caused that?"
- "What are your options?"
- "What would happen if you [option A]?"
- "What would happen if you [option B]?"
- "What do you think is the best approach?"

**Why**: They think through the implications, not just the answer. This develops judgment.

**Key technique: Socratic questioning**
- Ask questions that help them reach their own conclusions
- Do not lead to your preferred answer (unless you are also teaching)
- Let them explore

### Step 4: Help Them Plan

**What you ask**:
- "So what will you do first?"
- "When will you do that?"
- "What could get in the way?"
- "How will you handle that?"
- "Who do you need to involve?"

**Why**: They own the plan, not you. They are more likely to execute what they planned.

### Step 5: Commitment and Follow-Up

**What you say**:
- "Great. Let's check in on [date] to see how it went"
- "Let me know if you get stuck"
- "I trust you on this"

**Why**: You show you believe in them. You are available but not hovering.

### Step 6: Reflect Together (Follow-up conversation)

**What you ask**:
- "How did it go?"
- "What worked well?"
- "What would you do differently next time?"
- "What did you learn?"

**Why**: They consolidate learning. They think about how to apply this differently next time.

---

## 9.3 Powerful Coaching Questions

Here are questions that open thinking:

### For Understanding the Situation
- "Tell me more about that..."
- "Help me understand your perspective"
- "What else is going on?"
- "What is really concerning you?"

### For Exploring Alternatives
- "What options are you considering?"
- "What else could you try?"
- "If you were advising a friend in this situation, what would you say?"
- "What would happen if you [tried something different]?"

### For Examining Impact
- "What would be the consequences of that approach?"
- "How would that affect [other person/the team]?"
- "What is the best outcome? What is the worst outcome?"
- "How would you measure whether that worked?"

### For Building Capability
- "What would help you be successful?"
- "What skill do you need to develop?"
- "Who could mentor you on this?"
- "What would the expert do in this situation?"

### For Fostering Ownership
- "What will you do?"
- "When will you do it?"
- "How will you hold yourself accountable?"
- "Who else needs to know about this plan?"

### For Developing Judgment
- "What do you think is the right choice here?"
- "What do your instincts tell you?"
- "What does your experience tell you?"
- "What would success look like?"

---

## 9.4 What Makes Coaching Effective

### 9.4.1 Psychological Safety

People think best when they feel safe. **Psychological safety** means:
- You will not judge them for not knowing something
- You will not shame them if they make a mistake
- Your questions are genuine (not testing them)
- You care about their learning, not just their performance

**How to build psychological safety**:
- Say: "I do not have all the answers either. Let's figure this out together"
- Admit your own mistakes: "I faced a similar situation and made a different choice. It was the wrong call. Here is what I learned"
- React calmly to mistakes: "That did not work. What did you learn? What will you do differently?"
- Ask permission: "Can I ask you some questions to help you think this through?" (not assuming)
- Respect their thinking: "That is a good point. I had not thought of it that way"

**Sarah's example**:
Sarah was reviewing the architect's approach and had concerns. Instead of saying, "This is wrong," Sarah said: "I have some concerns. Can we think through them together? I might be missing something."

The architect felt safe to explain their thinking. Sarah's concerns were addressed. Or, if they were valid, the architect could decide what to do about them. Either way, the architect felt respected.

### 9.4.2 Genuine Curiosity

**Fake coaching** sounds like:
- "What do you think?" (but you are thinking "That is stupid")
- "Help me understand" (but you are not really listening)
- "What are your options?" (but you have decided which is right)

**Genuine coaching** sounds like:
- "What do you think?" (and you actually want to know)
- "Help me understand" (and you listen fully)
- "What are your options?" (and you are open to being surprised)

**How to be genuinely curious**:
- Listen to understand, not to argue
- Be willing to change your mind
- Ask follow-up questions if you do not understand
- Assume they have good reasons for their thinking
- Avoid "Why did you...?" (sounds accusatory); use "Help me understand your thinking"

### 9.4.3 Timing and Readiness

**Good coaching happens when**:
- The person is ready to learn (not defensive)
- There is enough time to think (not rushed)
- It is in a safe space (private, quiet)
- They trust you
- They are open to different perspectives

**Poor timing**:
- Right after failure (emotions too high)
- In a public setting (shame/embarrassment)
- When they are rushed
- When they do not trust you yet
- When they are not ready to hear it

---

## 9.5 Coaching Different Scenarios

### Scenario 1: Someone Made a Mistake

**Directive approach** (do not do this):
"You made a mistake. Do not do that again. Here is how you do it right."

**Coaching approach**:
- "I noticed [what happened]. Talk me through your thinking on that."
- Listen to their explanation
- "What would you do differently next time?"
- "What did you learn?"
- "I trust you on this next time"

**Result**: They think about the mistake and what they learned. They feel respected. They are less likely to repeat it.

**Sarah's example**:
The QA person missed a critical bug. Sarah could have been directive: "You should have caught that. Test more thoroughly."

Instead, Sarah said: "Tell me about your test plan for that module. What was your thinking?" The QA person realized they had not tested a critical workflow. Sarah asked: "How would you have designed the test differently?" The QA person outlined a more thorough approach.

Sarah said: "That is solid. Can you use that approach going forward?" The QA person was now committed to a better approach because she designed it.

### Scenario 2: Someone Is Struggling with a Task

**Directive approach** (sometimes needed):
"Here is how to do this. Follow these steps."

**Coaching approach**:
- "You seem to be struggling with this. What is getting in the way?"
- "What have you tried?"
- "What do you think is the issue?"
- If they are stuck: "Here are some options. What do you think would work?"
- If they are very stuck: "Let me walk through my thinking, and then you can decide"

**Result**: They learn. They build capability. But you also help; you do not leave them floundering.

**Sarah's example**:
The junior developer was struggling with integrating the API. Sarah could have just done it for him or given him step-by-step instructions.

Instead, Sarah asked: "What is the challenge? Walk me through what you have tried."

The developer was overcomplicating the authentication piece. Sarah asked: "What does the API documentation say about authentication?" The developer read it. "Oh, I was overcomplicating it."

Sarah said: "Exactly. Go ahead." The developer completed the integration.

Then Sarah asked: "What would you do differently next time?" The developer said: "Read the docs first instead of guessing." Lesson learned.

### Scenario 3: Someone Wants to Grow in a Direction

**Directive approach** (not helpful):
"That is a good goal. Here is the plan I created for you."

**Coaching approach**:
- "That is a great goal. What does success look like?"
- "What skills do you need to develop?"
- "How do you want to develop them? (learning, projects, mentoring, etc.)"
- "What can I do to support you?"
- "Let's check in regularly"

**Result**: They own their development. You support it. They are more likely to follow through.

**Sarah's example**:
The mid-level developer wanted to become a tech lead. Sarah said: "That is great. What does a tech lead do that a developer does not?"

The developer listed things: architecture decisions, mentoring, technical strategy. Sarah said: "What skills do you need? Where are you strong? Where do you need to develop?"

They worked together to create a plan: "Lead the architecture for the next component (stretch). Mentor a junior developer (develop mentoring skills). Share your thinking in architecture reviews (build visibility)."

Six months later, the developer was ready for a tech lead role because they had developed the skills, not because Sarah promoted them.

---

## 9.6 Coaching Across Ways of Working

### Coaching in Agile

Agile is built for coaching:
- **Daily standup**: "What is blocking you? How can we help?"
- **Sprint planning**: "What should we build? How do we approach this?"
- **Sprint demo**: "What worked well? What did we learn?"
- **Retrospective**: "How can we improve?"

The scrum master's role is primarily coaching: helping the team see their own dynamics, improve their own process, solve their own problems.

### Coaching in Predictive

Predictive projects have more direction, but coaching still applies:
- **Planning meetings**: Ask the team, "How would you approach this? What risks concern you?"
- **Status meetings**: "What is going well? What is getting in the way? What do you need?"
- **Problem-solving**: "What have you tried? What do you think caused this? What is your recommendation?"

The PM may direct more (timelines, scope are more fixed), but coaching still develops people.

### Coaching in Hybrid

Hybrid projects have both structured and flexible elements. Use coaching in the flexible areas:
- **Phase 1 (structured)**: More directive on what is required, coaching on how to achieve it
- **Phase 2 (iterate)**: "What did we learn? What will we adjust? How will we implement the change?"
- **Across phases**: "What skills are you developing? Where do you want to grow?"

---

## 9.7 Common Coaching Mistakes and How to Avoid Them

**Mistake 1: Asking questions, then not listening**
- Fix: Pause. Let them think. Do not interrupt with your answer

**Mistake 2: Leading questions** ("Don't you think X is the issue?")
- Fix: Ask open questions ("What do you think is the issue?")

**Mistake 3: Giving advice disguised as questions** ("Have you tried X?")
- Fix: Either ask genuine questions or give advice; do not disguise one as the other

**Mistake 4: Coaching when the person is not ready**
- Fix: Ask permission ("Can I ask some questions to help you think this through?")

**Mistake 5: Only coaching failures, not successes**
- Fix: Coach about what worked too ("What did you do well there? What would you do the same next time?")

**Mistake 6: Coaching instead of deciding when you need to decide**
- Fix: "I need to make this decision. Here is my thinking. What am I missing?" (Consultative, not coaching)

---

## Key Takeaways: Coaching and Developing Others

1. **Coaching is asking questions instead of giving answers**: People learn and own the solution
2. **Coaching framework**: Understand, explore, plan, commit, reflect
3. **Psychological safety is essential**: People think best when they feel safe
4. **Genuine curiosity matters**: Ask because you want to know, not to test
5. **Timing matters**: Coach when people are ready, not when emotions are high
6. **Different scenarios, different approaches**: Mistakes, struggles, growth all have coaching moments
7. **It takes time**: Coaching is slower than telling in the moment, but faster long-term
8. **Not always coaching**: Sometimes you need to tell quickly; know the difference
9. **Works across all project types**: Agile, predictive, hybrid—all benefit from coaching
10. **Impact is significant**: People become more capable and confident

---

## Practice Scenario

**Context**: You are coaching a team member, Jordan, who had been assigned to lead a component's design but is hesitant.

Jordan comes to you and says: "I am not sure I should be leading this. The design is too complex. Maybe you should do it or assign it to someone more senior."

How would you coach Jordan through this?

**Questions to think about**:
1. What would you ask Jordan to understand their hesitation?
2. How would you help them build confidence?
3. How would you explore their capabilities without being dismissive?
4. What would you commit to support them?
5. How would you follow up?

---

*ECO Connection: People Domain – Task 1: Build and develop the project team*

