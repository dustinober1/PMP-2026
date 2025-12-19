import Theme from 'vitepress/theme-without-fonts'
import './styles/custom.css'
import './styles/vars.css'

// Import custom components
import QuizComponent from './components/QuizComponent.vue'
import ProgressBar from './components/ProgressBar.vue'
import ConceptGrid from './components/ConceptGrid.vue'
import ConceptCard from './components/ConceptCard.vue'
import PowerInterestGrid from './components/PowerInterestGrid.vue'
import TriangleViz from './components/TriangleViz.vue'

export default {
  extends: Theme,
  enhanceApp({ app }) {
    // Register global components
    app.component('QuizComponent', QuizComponent)
    app.component('ProgressBar', ProgressBar)
    app.component('ConceptGrid', ConceptGrid)
    app.component('ConceptCard', ConceptCard)
    app.component('PowerInterestGrid', PowerInterestGrid)
    app.component('TriangleViz', TriangleViz)
  }
}