import Theme from 'vitepress/theme-without-fonts'
import './styles/custom.css'
import './styles/vars.css'

// Import custom components
import QuizComponent from './components/QuizComponent.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
  extends: Theme,
  enhanceApp({ app }) {
    // Register global components
    app.component('QuizComponent', QuizComponent)
    app.component('ProgressBar', ProgressBar)
  }
}