<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>

# 2.2 Benefits, Value, and Sustainability

**ECO Task**: Evaluate and deliver project benefits and value

Value is the net result of realized benefits minus the costs required to achieve them. In 2026, value includes ethical and sustainable dimensions, not just profit.

---

##  Value Delivery System (How Value Actually Reaches Customers)
Projects create value when deliverables flow through a **value delivery system**:

1. **Idea / Opportunity** → identified through strategy and environmental scanning
2. **Selection** → funded because it supports objectives and benefits
3. **Delivery** → outputs created (product, process, capability)
4. **Adoption** → people use it (change management)
5. **Realization** → benefits measured and sustained (operations ownership)

This is why the PMP exam increasingly rewards **incremental delivery** and early validation: value is discovered and confirmed over time.

##  Agile Value: MVP vs. MBI
In Agile, we deliver value in small packages. Know the difference:

*   **MVP (Minimum Viable Product)**: The smallest thing you can build to **learn** if your hypothesis is true. (Focus: Learning/Risk Reduction).
*   **MBI (Minimum Business Increment)**: The smallest piece of value that can be **released** to a customer to generate ROI. (Focus: Value/Revenue).

**Exam Insight**: You might build an internal MVP to test a theory, but you release an MBI to the market to get paid.

##  The Value Equation
Traditional PM focused on Scope, Time, and Cost. The modern PM focuses on the **Triple Bottom Line**:

<ConceptGrid>
  <ConceptCard title="Profit">
    Does the project make financial sense? (ROI, NPV, Cost Savings).
  </ConceptCard>
  <ConceptCard title="People">
    Does it improve lives for the community and employees? (Social Impact).
  </ConceptCard>
  <ConceptCard title="Planet">
    Is it environmentally sustainable? (Carbon footprint, Waste reduction).
  </ConceptCard>
</ConceptGrid>

---

##  Quick Review
<FlashcardCarousel :cards="[
  { 
    front: 'What is the difference between MVP and MBI?', 
    back: 'MVP (Minimum Viable Product) is for learning/risk reduction; MBI (Minimum Business Increment) is for releasing value/generating ROI.' 
  },
  { 
    front: 'What is the Benefits Owner responsible for?', 
    back: 'Ensuring the project deliverables actually generate the promised revenue or savings after the project closes.' 
  },
  { 
    front: 'What are the three pillars of the Triple Bottom Line?', 
    back: 'Profit, People, and Planet.' 
  },
  { 
    front: 'Should a PM choose a cheaper vendor who violates human rights?', 
    back: 'No. Ethics and ESG policies trump financial profit on the PMP exam.' 
  },
  { 
    front: 'When is value usually realized in a project lifecycle?', 
    back: 'Usually after the project ends, once the deliverables are adopted and used by the business.' 
  },
  { 
    front: 'What are the five stages of the Value Delivery System?', 
    back: 'Idea/Opportunity, Selection, Delivery, Adoption, and Realization.' 
  },
  { 
    front: 'Why does the PMP exam reward incremental delivery?', 
    back: 'Because value is discovered and confirmed over time through early validation and feedback.' 
  },
  { 
    front: 'What is the \'Profit\' pillar of the Triple Bottom Line?', 
    back: 'Financial viability including ROI, NPV, and cost savings.' 
  },
  { 
    front: 'What is the \'People\' pillar of the Triple Bottom Line?', 
    back: 'Social impact including improved lives for employees and the community.' 
  },
  { 
    front: 'What is the \'Planet\' pillar of the Triple Bottom Line?', 
    back: 'Environmental sustainability including carbon footprint reduction and waste management.' 
  }
]" />

