<script setup>
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
</script>

# Chapter 10: AI & Project Management

AI is the single most transformative force in modern project management. In the 2026 PMP exam, you aren't expected to be a data scientist, but you *must* be an **AI-Augmented Leader**.

---

## The New Co-Pilot
AI doesn't replace the Project Manager; it replaces the *administrative burden* of project management. Your value shifts from tracking tasks to **interpreting insights**, **making strategy**, and **leading people**.

## What You'll Master (PMP Lens)
By the end of this chapter, you should be able to:
*   **Choose the right AI tool** (GenAI vs predictive vs automation) for the job.
*   **Spot the risks** (hallucinations, bias, privacy, over-reliance) and apply guardrails.
*   **Use AI inside PMP workflows** (charters, plans, risks, comms, status, lessons learned) without breaking governance.
*   **Answer exam scenarios** with the correct mindset: policy-first, human judgment always, accountability stays with the PM.

<ConceptGrid>
  <ConceptCard
    title="10.1 AI Essentials"
    href="./ai-essentials"
  >
    Core concepts: LLMs vs. Predictive Analytics, and how to prompt for PM success.
  </ConceptCard>
  <ConceptCard
    title="10.2 Responsible AI"
    href="./responsible-ai"
  >
    Ethics, privacy, bias, and the "Human-in-the-Loop" requirement.
  </ConceptCard>
  <ConceptCard
    title="10.3 AI in the Lifecycle"
    href="./ai-lifecycle"
  >
    Practical use cases: drafting charters, optimizing schedules, and automating status reports.
  </ConceptCard>
  <ConceptCard
    title="10.4 AI PM Toolkit"
    href="./toolkit"
  >
    Copy/paste templates: AI working agreement, redaction checklist, prompt patterns, and AI risk register add-ons.
  </ConceptCard>
  <ConceptCard
    title="10.5 Change Management & Adoption"
    href="./change-management"
  >
    Overcome team resistance, build confidence, and drive successful AI adoption through emotional intelligence.
  </ConceptCard>
  <ConceptCard
    title="Knowledge Check"
    href="./knowledge-check"
    variant="knowledge-check"
  >
    Test your judgment on AI ethics and implementation scenarios.
  </ConceptCard>
</ConceptGrid>

---

## 2026 Mindset: Human + AI
Success in this new era requires a dual mindset:
*   **The Scientist**: Using AI to analyze massive datasets (e.g., "Predict the probability of a delay based on historical weather patterns").
*   **The Artist**: Using human empathy to negotiate the conflicts that AI predicts but cannot solve.

<FlashcardCarousel :cards="[
  { front: `What is AI in project management?`, back: `Using artificial intelligence tools and techniques for scheduling, resource optimization, risk prediction, and insights.` },
  { front: `How can AI improve project forecasting?`, back: `AI models analyze historical data to predict schedule/cost outcomes more accurately than manual methods.` },
  { front: `What is AI-powered resource optimization?`, back: `Using machine learning to allocate resources efficiently, predict burnout, and optimize team composition.` },
  { front: `How can AI identify risks earlier?`, back: `Pattern recognition in project data can surface risks before they become visible to human PMs.` },
  { front: `What is responsible AI?`, back: `Using AI ethically: ensuring fairness, transparency, avoiding bias, and using AI to augment (not replace) PM judgment.` },
  { front: `What data does AI need to work well?`, back: `Historical project data (schedules, costs, team performance), along with domain knowledge and clear objectives.` },
  { front: `What are limitations of AI in PM?`, back: `Cannot replace human judgment, requires good data, may perpetuate historical biases, needs ongoing monitoring.` },
  { front: `How should PMs approach AI integration?`, back: `Start with specific use cases, validate outputs, ensure transparency, maintain human oversight, and build organizational capability.` },
  { front: `What is AI-driven change impact analysis?`, back: `Using AI to simulate scenarios and forecast impacts of proposed changes more comprehensively than manual analysis.` },
  { front: `Can AI manage stakeholder communication?`, back: `AI can assist with status report generation, meeting scheduling, and sentiment analysis - but PM must maintain relationships.` }
]" />
