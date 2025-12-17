import { createSidebar } from './sidebar/chapters.js'

export default {
  title: 'PMP Exam Prep 2026',
  description: 'Comprehensive Study Guide for the Project Management Professional Exam',
  lang: 'en-US',
  base: '/PMP-2026/',

  // Ignore dead links for the legacy README
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Chapters',
        items: [
          { text: 'Chapter 1 - Introduction', link: '/guide/01-introduction/' },
          { text: 'Chapter 2 - Strategic Alignment', link: '/guide/02-strategic/' },
          { text: 'Chapter 3 - Team Leadership', link: '/guide/03-team-leadership/' },
          { text: 'Chapter 4 - Stakeholder Engagement', link: '/guide/04-stakeholder/' },
          { text: 'Chapter 5 - Initiation', link: '/guide/05-initiation/' },
          { text: 'Chapter 6 - Project Planning', link: '/guide/06-project-planning/' },
          { text: 'Chapter 7 - Risk & Quality', link: '/guide/07-risk-quality/' },
          { text: 'Chapter 8 - Execution', link: '/guide/08-execution/' },
          { text: 'Chapter 9 - Monitoring', link: '/guide/09-monitoring/' },
          { text: 'Chapter 10 - Exam Prep', link: '/guide/10-exam-prep/' }
        ]
      },
      { text: 'Appendices', link: '/guide/appendices/' },
      { text: 'PDF Resources', link: '/assets/pdfs/' }
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
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    carbonAds: {
      code: '',
      placement: ''
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  vite: {
    optimizeDeps: {
      include: ['vue', 'chart.js', 'vue-chartjs']
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#924dbf' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { property: 'og:title', content: 'PMP Exam Prep 2026' }],
    ['meta', { property: 'og:description', content: 'Comprehensive Study Guide for the Project Management Professional Exam' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://dustinober.github.io/PMP-2026/' }],
    ['meta', { property: 'og:image', content: 'https://dustinober.github.io/PMP-2026/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@dustinober' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/chart.js', defer: true }]
  ]
}