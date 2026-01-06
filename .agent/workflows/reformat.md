---
description: Workflow for modernizing PMP study guide pages with interactive Vue components
---

This workflow describes the process for modernizing existing markdown pages in the PMP study guide by replacing static HTML/CSS with responsive Vue components (`ConceptCard`, `Flashcard`, etc.).

# 1. Analyze the Page
Open the target markdown file and identify areas for improvement:
- **Static HTML Grids**: Look for `<div class="some-grid">` or manually styled Flexbox/Grid layouts. These should be replaced with `<ConceptGrid>` and `<ConceptCard>`.
- **Lists of Facts/Stats**: Look for bulleted lists of key numbers (e.g., "185 questions", "240 minutes"). These are good candidates for `<FlashcardGrid>` and `<Flashcard>`.
- **Quizzes**: Look for static text-based quizzes. These can be replaced with `<Flashcard>` for self-review.

# 2. Add Script Setup
Ensure the file has a `<script setup>` block at the top importing the necessary components.

```vue
<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardGrid from '../../.vitepress/theme/components/FlashcardGrid.vue'
import Flashcard from '../../.vitepress/theme/components/Flashcard.vue'
</script>
```

*Note: Adjust the import path `../../` based on the file depth relative to `.vitepress`.*

# 3. Replace Content

## 3.1 Concept Cards
Replace static HTML informational cards with `ConceptCard`.

**Before:**
```html
<div class="card">
  <h3>Title</h3>
  <p>Description text.</p>
</div>
```

**After:**
```html
<ConceptGrid>
  <ConceptCard title="Title">
    Description text.
  </ConceptCard>
</ConceptGrid>
```

## 3.2 Flashcards
Add interactive flashcards for "Quick Review" sections.

**Example:**
```html
<FlashcardGrid>
  <Flashcard front="Term or Question" back="Definition or Answer" />
</FlashcardGrid>
```

# 4. Clean Up
- Remove any `<style>` blocks that were used for the old static HTML.
- Ensure the markdown is clean and readable.

# 5. Verify
- Run `npm run dev` or `npm run build` to ensure no syntax errors.
- Preview the page to check for responsiveness and correct rendering.

# 6. Commit
- Commit all changes made using standard commit languague
- Push all changes to github.