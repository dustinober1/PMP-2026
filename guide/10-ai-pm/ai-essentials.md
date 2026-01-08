<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# 10.1 AI Essentials for PMs

**ECO Task**: Determine appropriate project methodology/methods and practices

Project Managers in 2026 don't need to code AI, but they must fluently "speak" AI. Understanding the **capabilities** and **limitations** of these tools is now a mandatory competency delta.

---

## The New PM Toolbox
Most AI tools you will use fall into three specific categories. You must know which to use when.

<ConceptGrid>
  <ConceptCard title="Generative AI (LLMs)" tag="The Creator">
    <strong>Goal:</strong> Drafting content.<br><strong>Uses:</strong> Writing Charters, User Stories, Emails, and Summarizing Meeting Minutes.
  </ConceptCard>
  <ConceptCard title="Predictive AI" tag="The Forecaster">
    <strong>Goal:</strong> Seeing the future.<br><strong>Uses:</strong> Analyzing historical data to predict delays, cost overruns, and resource bottlenecks.
  </ConceptCard>
  <ConceptCard title="Automation Agents" tag="The Do-er">
    <strong>Goal:</strong> Removing busywork.<br><strong>Uses:</strong> Scheduling meetings, updating ticket status, and sending reminders.
  </ConceptCard>
</ConceptGrid>

---

## Key AI Concepts (Exam-Relevant, Plain English)
You don't need math or model architecture for the PMP. You do need **good judgment** about what AI can/can't do, and how to use it safely.

| Concept | What it means | PMP-relevant takeaway |
|---|---|---|
| **LLM (Large Language Model)** | A system that generates text by predicting likely word sequences | Great for drafting/summarizing; can sound confident while being wrong |
| **Tokens / context window** | AI reads text in chunks (“tokens”) up to a limit | Longer prompts can lose earlier context; keep inputs clean and structured |
| **Temperature** | Controls creativity vs consistency | Use lower creativity for formal artifacts; increase creativity for brainstorming |
| **Grounding** | Forcing AI to use *your* provided sources | Reduces hallucinations when you supply approved reference material |
| **RAG (Retrieval-Augmented Generation)** | AI pulls relevant internal docs at answer time | Best for enterprise PM work: up-to-date, more traceable, less guessing |
| **Fine-tuning** | Training the model on custom examples | Higher effort/risk; governance-heavy; not the first move for most PM teams |
| **Automation agents** | AI that can take actions (create tickets, send messages) | Requires least-privilege access and strict Human-in-the-Loop controls |

::: tip PMP lens
AI knowledge is tested through scenario judgment: protect data, follow policy, validate outputs, and keep accountability with the PM/team.
:::

---

## The "Hallucination" Risk
AI is a **Probabilistic** engine, not a **Deterministic** one.
*   **Deterministic**: A Calculator. $2 + 2 = 4$ every time.
*   **Probabilistic**: An LLM. It guesses the "next most likely word."

Because of this, AI can "hallucinate"—confidently stating facts, dates, or regulations that are completely false.

::: warning The Golden Commandment
**Trust, but Verify.** Never send an AI-generated artifact to a stakeholder without a human review. You are accountable for the output, not the bot.
:::

---

## How to Reduce Hallucinations (Grounding Checklist)
Use these controls to make AI safer and more useful:
*   **Provide approved source material** (sanitized notes, templates, policies) and ask the AI to stick to it.
*   **Require assumptions and unknowns** (“List what you had to assume and what you need clarified”).
*   **Ask for a verification plan** (“How would a PM validate this before publishing?”).
*   **Use structure** (tables, required headings, acceptance criteria) to prevent omissions.
*   **Treat outputs as drafts** (review with SMEs/team, then baseline through normal governance).

---

## Human-in-the-Loop (HITL)
The 2026 standard is **HITL**. AI produces the draft; the Human provides the judgment.

| AI Strengths (The Machine)                            | Human Strengths (The Leader)                            |
| :---------------------------------------------------- | :------------------------------------------------------ |
| **Speed**: Drafting 50 pages in seconds.              | **Empathy**: Negotiating with an angry user.            |
| **Patterns**: Finding a trend in 10,000 rows of data. | **Context**: Understanding organizational politics.     |
| **Logic**: Following a ruleset perfectly.             | **Ethics**: Deciding what is "right" vs. " profitable." |

---

## Prompting Framework for PMs (Copy/Paste Pattern)
High-quality prompts reduce rework and produce more exam-aligned artifacts.

<ConceptCard title="📋 PM Prompt Template" type="tip">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 12px; padding: 20px; font-family: 'Consolas', 'Monaco', monospace; font-size: 0.9em;">
    <div style="margin-bottom: 12px;">
      <span style="color: #00d9ff; font-weight: bold;">Role:</span>
      <span style="color: #e0e0e0;"> Act as a PMP-certified project manager.</span>
    </div>
    <div style="margin-bottom: 12px;">
      <span style="color: #00d9ff; font-weight: bold;">Context (sanitized):</span>
      <span style="color: #e0e0e0;"> Project type, constraints, stakeholders (roles), delivery approach.</span>
    </div>
    <div style="margin-bottom: 12px;">
      <span style="color: #00d9ff; font-weight: bold;">Task:</span>
      <span style="color: #e0e0e0;"> Create [artifact] with [required sections].</span>
    </div>
    <div style="margin-bottom: 12px;">
      <span style="color: #00d9ff; font-weight: bold;">Constraints:</span>
      <span style="color: #e0e0e0;"> Do not invent facts; ask clarifying questions if needed; keep within one page.</span>
    </div>
    <div style="margin-bottom: 12px;">
      <span style="color: #00d9ff; font-weight: bold;">Output:</span>
      <span style="color: #e0e0e0;"> Provide Markdown with headings + a table for key data.</span>
    </div>
    <div>
      <span style="color: #00d9ff; font-weight: bold;">Quality bar:</span>
      <span style="color: #e0e0e0;"> Flag assumptions, risks, open questions, and what needs human validation.</span>
    </div>
  </div>
</ConceptCard>

::: tip When AI answers too fast
If you get a “perfect” answer with no assumptions or questions, that’s a red flag. In real PM work (and on the exam), **clarifying questions** and **risk flags** are signs of maturity.
:::

---

## Advanced Prompting Techniques
To get "Expert" level outputs, use these specific techniques.

| Technique | How it works | When to use |
| :--- | :--- | :--- |
| **Few-Shot Prompting** | Give the AI 2-3 examples of "good" output before asking for the new one. | When you need a specific format for a Risk Register or Status Report. |
| **Chain of Thought** | Ask the AI to "think step-by-step" or "explain your reasoning before giving the answer." | For complex calculations (budget/schedule) or logic problems (root cause analysis). |
| **Role Prompting** | Assign a specific persona (e.g., "Act as a skeptical Auditor" or "Act as an empathetic Agile Coach"). | When you need a specific tone or perspective (e.g., identifying gaps in a plan). |
| **Iterative Refinement** | Don't accept the first draft. Ask: "Critique this against the PMBOK Guide 7th Edition principles and suggest improvements." | For critical artifacts like the Project Charter or Quality Management Plan. |

---

## AI Selection Decision Framework

Not every task needs AI. Use this framework to decide whether AI is worth the risk.

| Factor | Use AI | Avoid AI |
|---|---|---|
| **Data volume** | Large datasets (100+ records) | Small/sparse data (< 20 records) |
| **Risk of error** | Low-stakes drafts, summaries | High-stakes decisions (safety, legal) |
| **Explainability needed?** | Drafting, brainstorming, analysis | Regulated decisions (black-box outputs) |
| **Privacy/Compliance** | Approved tools, sanitized inputs | Confidential data, unapproved vendors |
| **Time value** | Saves 10+ hours per month | Saves < 2 hours per month |
| **Team confidence** | Team trained + skeptical of output | Team treats AI as oracle |

**Example: Project Charter Drafting**
-  Use AI: Drafts charter outline from sanitized notes (1-2 hours → 10 minutes). Heavy HITL review catches hallucinations. **Time-value = HIGH**
-  Avoid: Using AI to generate vendor contracts without SME review. **Risk = TOO HIGH**

---

## Cognitive Biases When Using AI

Even experienced PMs fall victim to these traps:

| Bias | Risk | Mitigation |
|---|---|---|
| **Automation Bias** | Trusting AI outputs without validation | Require HITL sign-off; validate assumptions |
| **Confirmation Bias** | Cherry-picking AI insights that match your beliefs | Ask the team: "What am I missing?" |
| **Overconfidence** | Assuming AI eliminates risk | Plan for failure; keep manual fallbacks |
| **Recency Bias** | Over-weighting recent AI predictions | Validate trends over 3+ cycles |

---

## Practical Worked Example: Temperature & Creativity

<strong>Scenario:</strong> You're using AI to draft meeting minutes vs. brainstorm new ideas.

- **Meeting Minutes** (Low creativity): Temperature = 0.2 (consistent, factual)
  - Output: "Jane reported the database migration completed on Friday at 3 PM."

- **Risk Brainstorm** (High creativity): Temperature = 0.8 (explorative, diverse ideas)
  - Output: "What if we use AI to predict failure modes? Or run simulations? Or..."

The temperature setting changes the tool's behavior; know your goal first.

---

## AI Model Types Deep Dive

Understanding the architecture helps you select the right tool and set appropriate expectations.

| Model Type | What It Is | PM Use Case | Governance Consideration |
|---|---|---|---|
| **Foundation Model (LLM)** | General-purpose model trained on internet-scale data (GPT-4, Claude, Gemini) | Drafting, summarizing, analysis, brainstorming | Highest hallucination risk; requires HITL review |
| **Fine-Tuned Model** | Foundation model customized with organization-specific data | Industry-specific terminology, company templates | Higher governance (training data security); more accurate for domain |
| **Retrieval-Augmented (RAG)** | LLM + real-time document retrieval | Answering questions from project docs, policies | Most traceable; lower hallucination; requires approved document sources |
| **Specialized Agent** | AI that takes actions (creates tickets, sends messages, updates systems) | Workflow automation, status updates | Highest risk; requires least-privilege access + approval gates |
| **Predictive/ML Model** | Statistical model trained on historical patterns | Schedule forecasting, cost prediction, risk scoring | Needs explainability for regulated decisions; prone to historical bias |

::: tip PMP Exam Pattern
When a scenario asks "which AI approach should the PM recommend?", match the **task type** to the **model strength**. Drafting = LLM. Forecasting = Predictive. Internal Q&A = RAG. Automation = Agent with guardrails.
:::

---

## Context Window Limitations (Practical Limits)

Every AI model has a **context window**—the maximum amount of text it can "see" at once. Understanding this prevents wasted effort and missed context.

| Model Family | Approximate Limit | What This Means for PMs |
|---|---|---|
| GPT-4 Turbo | ~128,000 tokens (~96K words) | Can analyze a full 100-page project plan in one prompt |
| Claude 3.5 | ~200,000 tokens (~150K words) | Entire project documentation library feasible |
| Gemini 1.5 Pro | ~1,000,000 tokens (~750K words) | Multi-year project archives in a single context |
| Smaller/Free Models | ~4,000-32,000 tokens | Only 1-5 pages; requires chunking large documents |

<strong>Practical Implications:</strong>
- **Long documents**: Break into logical sections if exceeding limits; process sequentially
- **Conversation memory**: Earlier parts of a long conversation may be "forgotten" (dropped from context)
- **Quality degrades at edges**: Models perform best on content in the middle of the context; put critical instructions at the beginning AND end

**Worked Example: Processing a 200-page RFP**
1. Summarize each section independently (10-page chunks)
2. Combine summaries into a master analysis prompt
3. Use the master summary to draft the response outline
4. Expand each section with focused prompts

---

## API vs. UI Tools (Governance Implications)

| Aspect | Web UI (e.g., ChatGPT.com) | API (Programmatic Access) |
|---|---|---|
| **Ease of use** | Anyone can use; no technical setup | Requires developer integration |
| **Data control** | Terms vary; may train on inputs | Enterprise contracts; no training on your data |
| **Audit logging** | Limited; depends on vendor | Full logging possible; integrate with SIEM |
| **Access control** | Individual accounts; hard to govern | Centralized; role-based; revocable |
| **Cost** | Per-seat subscription | Pay-per-token; scales with usage |
| **Compliance** | Higher risk for regulated industries | Preferred for healthcare, finance, government |

::: warning Exam Relevance
If a scenario mentions "team using free AI tools" with confidential data, the correct answer always involves: **(1) Stop/contain, (2) Provide approved alternative, (3) Update policy/training**. API-based enterprise tools are the governance-compliant pattern.
:::

---

## Advanced Prompting Patterns (Expanded)

<ConceptGrid>
  <ConceptCard title="🚫 Negative Prompting" tag="Reduce Errors">
    <p style="margin-bottom: 12px; color: #a0a0a0;">Tell the AI what NOT to do. This reduces common failure modes.</p>
    <div style="background: linear-gradient(135deg, #2d1b1b 0%, #1a1a2e 100%); border-radius: 10px; padding: 16px; font-family: 'Consolas', 'Monaco', monospace; font-size: 0.85em;">
      <div style="color: #ff6b6b; font-weight: bold; margin-bottom: 8px;">❌ Constraints:</div>
      <ul style="color: #e0e0e0; margin: 0; padding-left: 20px; line-height: 1.8;">
        <li>Do NOT invent specific dates, costs, or regulations</li>
        <li>Do NOT use generic placeholders like "TBD" without flagging</li>
        <li>Do NOT exceed 15 risk items</li>
      </ul>
    </div>
  </ConceptCard>
  <ConceptCard title="🔒 Constraint Injection" tag="Regulated Work">
    <p style="margin-bottom: 12px; color: #a0a0a0;">Embed hard rules that the AI must follow, especially for regulated work.</p>
    <div style="background: linear-gradient(135deg, #1b2d1b 0%, #1a1a2e 100%); border-radius: 10px; padding: 16px; font-family: 'Consolas', 'Monaco', monospace; font-size: 0.85em;">
      <div style="color: #51cf66; font-weight: bold; margin-bottom: 8px;">✓ Hard Constraints (non-negotiable):</div>
      <ul style="color: #e0e0e0; margin: 0; padding-left: 20px; line-height: 1.8;">
        <li>All cost estimates must include ±15% contingency range</li>
        <li>All regulatory references must cite specific statute numbers</li>
        <li>Flag any assumption about vendor capacity for SME validation</li>
      </ul>
    </div>
  </ConceptCard>
  <ConceptCard title="🎭 Multi-Persona Debate" tag="Surface Risks">
    <p style="margin-bottom: 12px; color: #a0a0a0;">Have the AI argue multiple perspectives to surface risks you might miss.</p>
    <div style="background: linear-gradient(135deg, #1b1b2d 0%, #1a1a2e 100%); border-radius: 10px; padding: 16px; font-family: 'Consolas', 'Monaco', monospace; font-size: 0.85em;">
      <div style="color: #748ffc; font-weight: bold; margin-bottom: 8px;">🔄 Workflow:</div>
      <ol style="color: #e0e0e0; margin: 0; padding-left: 20px; line-height: 1.8;">
        <li><strong style="color: #51cf66;">Optimistic PM:</strong> Defend the timeline</li>
        <li><strong style="color: #ff6b6b;">Skeptical Auditor:</strong> Critique it</li>
        <li><strong style="color: #ffd43b;">Synthesize:</strong> Create balanced assessment</li>
      </ol>
    </div>
  </ConceptCard>
  <ConceptCard title="📊 Output Format Control" tag="Reduce Rework">
    <p style="margin-bottom: 12px; color: #a0a0a0;">Precise format instructions reduce rework and enable automation.</p>
    <div style="background: linear-gradient(135deg, #2d2d1b 0%, #1a1a2e 100%); border-radius: 10px; padding: 16px; font-family: 'Consolas', 'Monaco', monospace; font-size: 0.85em;">
      <div style="color: #ffd43b; font-weight: bold; margin-bottom: 8px;">📋 Format Rules:</div>
      <ul style="color: #e0e0e0; margin: 0; padding-left: 20px; line-height: 1.8;">
        <li><strong>Risk ID:</strong> RSK-001, RSK-002, etc.</li>
        <li><strong>Probability:</strong> L/M/H only</li>
        <li><strong>Impact:</strong> L/M/H only</li>
        <li><strong>Owner:</strong> Role only (not name)</li>
      </ul>
    </div>
  </ConceptCard>
</ConceptGrid>

---

## Complete Worked Example: Risk Brainstorm Prompt

<strong>Scenario:</strong> You're leading a new software implementation project and need to identify risks quickly.

<ConceptCard title="🎯 Risk Brainstorm Prompt Template" type="tip">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 12px; padding: 24px; font-family: 'Consolas', 'Monaco', monospace;">
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
      <span style="color: #00d9ff; font-weight: bold; font-size: 1.1em;">📋 Role:</span>
      <div style="color: #e0e0e0; margin-top: 8px; padding-left: 16px;">Act as a senior PMP-certified project manager with 15 years of experience in enterprise software implementations.</div>
    </div>
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
      <span style="color: #51cf66; font-weight: bold; font-size: 1.1em;">🏢 Context:</span>
      <ul style="color: #e0e0e0; margin: 8px 0 0 0; padding-left: 32px; line-height: 1.8;">
        <li><strong>Project type:</strong> ERP implementation (cloud-based)</li>
        <li><strong>Industry:</strong> Manufacturing</li>
        <li><strong>Duration:</strong> 18 months</li>
        <li><strong>Key constraints:</strong> Fixed budget ($2M), integration with legacy systems, union labor force</li>
        <li><strong>Delivery approach:</strong> Hybrid (Agile for development, Predictive for infrastructure)</li>
      </ul>
    </div>
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
      <span style="color: #ffd43b; font-weight: bold; font-size: 1.1em;">✅ Task:</span>
      <ol style="color: #e0e0e0; margin: 8px 0 0 0; padding-left: 32px; line-height: 1.8;">
        <li>Generate 15 risk statements using the format: "Because [cause], [event] may occur, resulting in [impact]."</li>
        <li>Separate into Threats (10) and Opportunities (5).</li>
        <li>For each risk, suggest: probability (L/M/H), impact (L/M/H), and one response strategy.</li>
      </ol>
    </div>
    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
      <span style="color: #ff6b6b; font-weight: bold; font-size: 1.1em;">🚫 Constraints:</span>
      <ul style="color: #e0e0e0; margin: 8px 0 0 0; padding-left: 32px; line-height: 1.8;">
        <li>Do NOT invent specific vendor names, dates, or cost figures.</li>
        <li>Flag any assumptions you made.</li>
        <li>If you need clarification on any constraint, ask before generating.</li>
      </ul>
    </div>
    <div>
      <span style="color: #748ffc; font-weight: bold; font-size: 1.1em;">📊 Output format:</span>
      <div style="color: #e0e0e0; margin-top: 8px; padding-left: 16px;">Markdown table with columns: Risk ID | Category | Risk Statement | Prob | Impact | Response Strategy</div>
    </div>
  </div>
</ConceptCard>

### What Good Output Looks Like

<ConceptCard title="📊 Sample AI Output" tag="Example">
  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
      <thead>
        <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <th style="padding: 12px; text-align: left; color: white;">Risk ID</th>
          <th style="padding: 12px; text-align: left; color: white;">Category</th>
          <th style="padding: 12px; text-align: left; color: white;">Risk Statement</th>
          <th style="padding: 12px; text-align: center; color: white;">Prob</th>
          <th style="padding: 12px; text-align: center; color: white;">Impact</th>
          <th style="padding: 12px; text-align: left; color: white;">Response Strategy</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: rgba(255,107,107,0.1);">
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>RSK-001</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #ff6b6b;">⚠️ Threat</span></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Because legacy systems use outdated APIs, integration failures may occur, resulting in 4-6 week delays</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: center;"><span style="background: #ffd43b; color: #000; padding: 2px 8px; border-radius: 4px; font-weight: bold;">M</span></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: center;"><span style="background: #ff6b6b; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: bold;">H</span></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Mitigate:</strong> Early integration spike; allocate buffer</td>
        </tr>
        <tr style="background: rgba(255,107,107,0.1);">
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>RSK-002</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #ff6b6b;">⚠️ Threat</span></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Because union agreements restrict weekend work, deployment windows are limited, resulting in extended cutover period</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: center;"><span style="background: #ff6b6b; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: bold;">H</span></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: center;"><span style="background: #ffd43b; color: #000; padding: 2px 8px; border-radius: 4px; font-weight: bold;">M</span></td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Accept:</strong> Plan deployment in contractual windows</td>
        </tr>
        <tr style="background: rgba(81,207,102,0.1);">
          <td style="padding: 10px;"><strong>OPP-001</strong></td>
          <td style="padding: 10px;"><span style="color: #51cf66;">🌟 Opportunity</span></td>
          <td style="padding: 10px;">Because cloud vendor offers training credits, we may reduce training costs, resulting in 10-15% budget savings</td>
          <td style="padding: 10px; text-align: center;"><span style="background: #ffd43b; color: #000; padding: 2px 8px; border-radius: 4px; font-weight: bold;">M</span></td>
          <td style="padding: 10px; text-align: center;"><span style="background: #ffd43b; color: #000; padding: 2px 8px; border-radius: 4px; font-weight: bold;">M</span></td>
          <td style="padding: 10px;"><strong>Exploit:</strong> Claim credits in first 90 days</td>
        </tr>
      </tbody>
    </table>
  </div>
</ConceptCard>

<ConceptGrid>
  <ConceptCard title="⚠️ Assumptions Flagged by AI" tag="Validate These">
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
      <li>Assumed standard manufacturing shift patterns (not 24/7)</li>
      <li>Assumed no pending labor negotiations</li>
      <li>Assumed legacy systems are documented</li>
    </ul>
  </ConceptCard>
  <ConceptCard title="✅ PM's HITL Review Actions" tag="Human Validation">
    <ol style="margin: 0; padding-left: 20px; line-height: 1.8;">
      <li>Validate union constraint with HR</li>
      <li>Confirm legacy API documentation exists (or add documentation risk)</li>
      <li>Add missing risks: cybersecurity, change resistance, vendor SLA</li>
    </ol>
  </ConceptCard>
</ConceptGrid>

---

<ConceptCard type="study-tip">
  <strong> Exam Insight:</strong> A question may ask: "Your AI tool identified a 95% chance of a schedule delay. What do you do?" The answer is <strong>"Analyze the data with the team to validate the root cause."</strong> Never blindly accept the prediction; use it as a trigger for human investigation. This is the core of Human-in-the-Loop thinking.
</ConceptCard>

---

## Quick Review

<FlashcardCarousel :cards="[
  { front: `What is Generative AI (LLM) best used for in PM?`, back: `Drafting content (charters, stories, emails) and summarizing large texts.` },
  { front: `Deterministic vs. Probabilistic?`, back: `Deterministic = Calculator (always same answer). Probabilistic = AI (guesses next likely word, can vary).` },
  { front: `What is \\'Hallucination\\' in AI?`, back: `When an AI confidently states false facts, dates, or regulations.` },
  { front: `What is the \\'Human-in-the-Loop\\' (HITL) rule?`, back: `AI drafts, Human reviews/approves. You are accountable for the output, not the bot.` },
  { front: `What is RAG (Retrieval-Augmented Generation)?`, back: `Forcing the AI to use YOUR approved internal documents to answer questions, reducing hallucinations.` },
  { front: `Temperature Setting: Low vs. High?`, back: `Low (0.1) = Consistent/Factual (Status Reports). High (0.8) = Creative/Diverse (Brainstorming).` },
  { front: `What is Prompt Grounding?`, back: `providing approved source material in the prompt and asking the AI to stick to it.` },
  { front: `What is \\'Shadow AI\\'?`, back: `Using unapproved/public AI tools with enterprise data - a major security/compliance violation.` },
  { front: `Chain of Thought Prompting?`, back: `Asking the AI to \\'think step-by-step\\' or explain reasoning before giving the final answer.` },
  { front: `Automation Bias?`, back: `The cognitive trap of trusting AI outputs blindly without validation.` }
]" />

