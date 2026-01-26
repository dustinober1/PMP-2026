import { createSidebar } from './sidebar/chapters.mjs'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'PMP Exam Prep 2026',
  description: 'Comprehensive Study Guide for the Project Management Professional Exam',
  lang: 'en-US',
  lang: 'en-US',

  // Ignore dead links for the legacy README
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Chapters',
        items: [
          { text: 'Chapter 1 - Introduction', link: '/guide/01-introduction/' },
          { text: 'Chapter 2 - Strategic', link: '/guide/02-strategic/' },
          { text: 'Chapter 3 - Leadership', link: '/guide/03-team-leadership/' },
          { text: 'Chapter 4 - Stakeholders', link: '/guide/04-stakeholder/' },
          { text: 'Chapter 5 - Initiation', link: '/guide/05-initiation/' },
          { text: 'Chapter 6 - Planning', link: '/guide/06-project-planning/' },
          { text: 'Chapter 7 - Risk & Quality', link: '/guide/07-risk-quality/' },
          { text: 'Chapter 8 - Execution', link: '/guide/08-execution/' },
          { text: 'Chapter 9 - Monitoring', link: '/guide/09-monitoring/' },
          { text: 'Chapter 10 - AI & PM', link: '/guide/10-ai-pm/' },
          { text: 'Chapter 11 - Exam Prep', link: '/guide/11-exam-prep/' }
        ]
      },
      { text: 'Appendices', link: '/guide/appendices/' }
    ],

    sidebar: createSidebar(),

    editLink: {
      pattern: 'https://github.com/dustinober/PMP-2026/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Dustin Ober'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },

  vite: {
    optimizeDeps: {
      include: ['vue', 'chart.js', 'vue-chartjs']
    }
  },

  mermaid: {
    // mermaidConfig: {
    //   securityLevel: 'loose',
    // }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#924dbf' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { property: 'og:title', content: 'PMP Exam Prep 2026' }]
  ]
})