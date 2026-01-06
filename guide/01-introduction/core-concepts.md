<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# 1.4 Core Project Management Concepts

Beyond methodology choice, every project leader must master a set of fundamental "Constants." These are the mental models and tools that apply whether you are building a skyscraper or a mobile app.

---

##  The Fundamental Block
Master the "Big 6" concepts that underpin every successful delivery in the 2026 era.

<ConceptGrid>
  <ConceptCard title="1.4a Stakeholders" link="./core-stakeholders" linkText="Analyze Stakeholders →">
    Managing the people who can make or break your vision.
  </ConceptCard>

  <ConceptCard title="1.4b Triple Constraint" link="./core-triple-constraint" linkText="Manage Constraints →">
    Balancing Scope, Schedule, and Cost in a volatile world.
  </ConceptCard>

  <ConceptCard title="1.4c Quality" link="./core-quality" linkText="Verify Quality →">
    Ensuring "Fit for Purpose" and adherence to ESG standards.
  </ConceptCard>

  <ConceptCard title="1.4d Risk" link="./core-risk" linkText="Mitigate Risk →">
    Proactively identifying threats and spotting opportunities.
  </ConceptCard>

  <ConceptCard title="1.4e Data & AI" link="./core-data" linkText="Leverage Data →">
    Using metrics and AI insights to drive decision-making.
  </ConceptCard>

  <ConceptCard title="1.4f Ethics" link="./core-ethics" linkText="Uphold Integrity →">
    The PMI Code of Ethics: Responsibility, Respect, Fairness, Honesty.
  </ConceptCard>
</ConceptGrid>

---

##  The PM Mindset: Integration
Success on the 2026 exam isn't about knowing these concepts in isolation—it's about **Integration**. 

*   **Scenario**: A risk materializes (1.4d), forcing a change to the scope (1.4b), which triggers a stakeholder concern (1.4a) about quality (1.4c).
*   **Action**: A PMP doesn't panic; they use data (1.4e) and ethical conduct (1.4f) to facilitate a transparent resolution.

::: tip  Sarah's Lesson
By month three, Sarah realized that a change in the office floor plan (Scope) wasn't just a technical update—it was a social risk that required stakeholder empathy and data-driven communication.
:::


## Quick Review

<FlashcardCarousel :cards="[
  { front: `What is the first step in stakeholder management?`, back: `Identify all individuals and groups who can affect or be affected by the project.` },
  { front: `What does the Triple Constraint refer to?`, back: `Scope, Schedule (Time), and Cost - three competing variables where changing one requires adjusting another.` },
  { front: `What is the role of quality in project management?`, back: `Ensuring deliverables meet stakeholder expectations and requirements, managed against quality standards.` },
  { front: `What is the difference between risk and uncertainty?`, back: `Risk: uncertain event with known probability/impact. Uncertainty: events whose probability/impact cannot be estimated.` },
  { front: `What are risk response strategies?`, back: `Avoid, Mitigate, Accept, Enhance, Exploit. Use Avoid/Mitigate for negative risks, Enhance/Exploit for positive risks.` },
  { front: `How does data drive project decisions?`, back: `Data provides objective evidence (metrics, trends) to replace gut feelings and enable evidence-based decision-making.` },
  { front: `What is professional ethics in PM?`, back: `Adhering to principles of responsibility, respect, fairness, and honesty in all project interactions and decisions.` },
  { front: `Why is stakeholder engagement critical to success?`, back: `Engaged stakeholders provide clarity, support decisions, remove obstacles, and validate deliverables - reducing rework.` },
  { front: `How do the Big 6 concepts interconnect?`, back: `Stakeholders drive requirements > scope/time/cost > quality standards > risk identification > data tracking > ethical decisions.` },
  { front: `What is the relationship between quality and scope?`, back: `Scope defines WHAT will be delivered. Quality defines HOW WELL it will be delivered and to what standards.` }
]" />
