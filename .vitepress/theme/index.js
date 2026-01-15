import Theme from 'vitepress/theme-without-fonts'
import './styles/custom.css'
import './styles/vars.css'

// Import custom layout
import CustomLayout from './CustomLayout.vue'

// Import custom components
import QuizComponent from './components/QuizComponent.vue'
import ProgressBar from './components/ProgressBar.vue'
import ConceptGrid from './components/ConceptGrid.vue'
import ConceptCard from './components/ConceptCard.vue'
import PowerInterestGrid from './components/PowerInterestGrid.vue'
import TriangleViz from './components/TriangleViz.vue'
import FlashcardCarousel from './components/FlashcardCarousel.vue'
import BuyMeCoffee from './components/BuyMeCoffee.vue'

export default {
  extends: Theme,
  Layout: CustomLayout,
  enhanceApp({ app, router }) {
    // Register global components
    app.component('QuizComponent', QuizComponent)
    app.component('ProgressBar', ProgressBar)
    app.component('ConceptGrid', ConceptGrid)
    app.component('ConceptCard', ConceptCard)
    app.component('PowerInterestGrid', PowerInterestGrid)
    app.component('TriangleViz', TriangleViz)
    app.component('FlashcardCarousel', FlashcardCarousel)
    app.component('BuyMeCoffee', BuyMeCoffee)

    // Scroll to top on route change
    if (router && typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }
  }
}