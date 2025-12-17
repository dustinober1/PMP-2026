export function createSidebar() {
  return [
    {
      text: '🏠 Introduction',
      items: [
        { text: 'PMP Exam Prep 2026', link: '/' }
      ]
    },
    {
      text: '📖 Chapter 1 - Introduction & Fundamentals',
      collapsed: false,
      items: [
        { text: 'Chapter Overview', link: '/guide/01-introduction/' },
        { text: '1.1 Understanding the New PMP Exam', link: '/guide/01-introduction/understanding-exam' },
        { text: '1.2 How To Use This Study Guide', link: '/guide/01-introduction/using-guide' },
        { text: '1.3 Ways of Working and Tailoring', link: '/guide/01-introduction/ways-of-working' },
        { text: '1.4 Core Project Management Concepts', link: '/guide/01-introduction/core-concepts' },
        { text: '📝 Knowledge Check', link: '/guide/01-introduction/knowledge-check' }
      ]
    },
    {
      text: '🎯 Chapter 2 - Strategic Alignment',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/02-strategic/' },
        { text: '2.1 Strategy and Portfolio Alignment', link: '/guide/02-strategic/strategy-alignment' },
        { text: '2.2 Benefits, Value, and Sustainability', link: '/guide/02-strategic/benefits-value' },
        { text: '2.3 Compliance, Risk, and Governance', link: '/guide/02-strategic/compliance-governance' },
        { text: '2.4 Organizational Change and Readiness', link: '/guide/02-strategic/organizational-change' },
        { text: '2.5 Program Management', link: '/guide/02-strategic/program-management' },
        { text: '📝 Knowledge Check', link: '/guide/02-strategic/knowledge-check' }
      ]
    },
    {
      text: '👥 Chapter 3 - Team Leadership',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/03-team-leadership/' },
        { text: '3.1 Building and Leading Teams', link: '/guide/03-team-leadership/building-teams' },
        { text: '3.2 Coaching, Mentoring, and Servant Leadership', link: '/guide/03-team-leadership/coaching-mentoring' }
      ]
    },
    {
      text: '🤝 Chapter 4 - Stakeholder Engagement',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/04-stakeholder/' },
        { text: '4.1 Stakeholder and Communication Mastery', link: '/guide/04-stakeholder/stakeholder-communication' },
        { text: '4.2 Conflict, Negotiation, and Decision-Making', link: '/guide/04-stakeholder/conflict-negotiation' }
      ]
    },
    {
      text: '🚀 Chapter 5 - Initiation & Requirements',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/05-initiation/' },
        { text: '5.1 Starting the Project', link: '/guide/05-initiation/starting-project' }
      ]
    },
    {
      text: '📋 Chapter 6 - Project Planning',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/06-project-planning/' },
        { text: '6.1 Planning for Value Delivery', link: '/guide/06-project-planning/planning-value' }
      ]
    },
    {
      text: '⚠️ Chapter 7 - Risk, Quality & Complexity',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/07-risk-quality/' }
      ]
    },
    {
      text: '⚡ Chapter 8 - Execution & Value Delivery',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/08-execution/' },
        { text: '8.1 Value Delivery and Outcomes', link: '/guide/08-execution/value-delivery' }
      ]
    },
    {
      text: '📊 Chapter 9 - Monitoring & Closing',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/09-monitoring/' },
        { text: '9.1 Monitoring, Controlling, and Closing', link: '/guide/09-monitoring/monitoring-closing' }
      ]
    },
    {
      text: '🎓 Chapter 10 - Exam Preparation',
      collapsed: true,
      items: [
        { text: 'Chapter Overview', link: '/guide/10-exam-prep/' },
        { text: '10.1 Exam Strategy and Test-Taking Skills', link: '/guide/10-exam-prep/exam-strategy' },
        { text: '10.2 AI Essentials for Project Professionals', link: '/guide/10-exam-prep/ai-essentials' },
        { text: '📝 Practice Exam 1', link: '/guide/10-exam-prep/practice-exam-1' },
        { text: '📝 Practice Exam 2', link: '/guide/10-exam-prep/practice-exam-2' },
        { text: '📝 Practice Exam 3', link: '/guide/10-exam-prep/practice-exam-3' }
      ]
    },
    {
      text: '📚 Appendices',
      collapsed: true,
      items: [
        { text: 'Appendix Overview', link: '/guide/appendices/' },
        { text: 'Key Formulas and Definitions', link: '/guide/appendices/formulas-definitions' },
        { text: 'Tools and Artifacts Index', link: '/guide/appendices/tools-artifacts' }
      ]
    }
  ]
}