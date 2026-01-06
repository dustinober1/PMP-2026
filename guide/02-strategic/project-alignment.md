<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 2.3 Project Alignment & Synergy

**ECO Task**: Evaluate and deliver project value and benefits

No project exists in a vacuum. A PM must manage dependencies across the program or portfolio to ensure the collective outcome is greater than the sum of its parts.

---

##  Program Synergy
A **Program** is managed to achieve benefits not available from managing projects individually.

<ConceptGrid>
  <ConceptCard title="Capability Sharing">
    Two projects using the same architectural framework should share the development cost and the "lessons learned."
  </ConceptCard>
  <ConceptCard title="Resource Optimization">
    Shared designers or testing labs scheduled to avoid "idle time" or "resource locks."
  </ConceptCard>
  <ConceptCard title="Risk Mitigation">
    Identifying a risk in Project A that might also impact Project B, and creating a joint response.
  </ConceptCard>
</ConceptGrid>

---

##  Cross-Project Dependencies

| Dependency Type | Example | PM Action |
| :-- | :-- | :-- |
| **Prerequisite** | Project A must deliver the API before Project B can build the UI. | Track Project A's critical path as a risk to Project B. |
| **Resource Lock** | Both projects require the organization's only Data Scientist in June. | Negotiate prioritization with the Program Manager. |
| **Technical Constraint** | Project C is migrating to Cloud; Project D must use the new Cloud instance. | Align technical requirements early. |

---

## Quick Review
<FlashcardGrid>
  <Flashcard 
    front="What is a dependency in a program context?" 
    back="When one project holds the key to another's success (e.g., Project A must finish a prerequisite for Project B)." 
  />
  <Flashcard 
    front="How does Agile handle alignment at scale?" 
    back="Through PI (Program Increment) Planning, where all teams meet to map dependencies." 
  />
  <Flashcard 
    front="What is an Integrated Master Schedule?" 
    back="A tool used by Program Managers to visualize critical paths and dependencies across multiple projects." 
  />
  <Flashcard 
    front="What should a PM do if they discover a dependency they don't control?" 
    back="1. Contact peer PM directly. 2. Escalate to Program Manager if unresolved." 
  />
</FlashcardGrid>

---

::: tip Exam Insight
If you discover a dependency on another project that you do not control:
1. **Contact Peer PM**: Try to resolve it directly.
2. **Escalate to Program Manager**: If you cannot resolve it peer-to-peer.
:::
