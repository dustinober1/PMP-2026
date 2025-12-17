#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Chapter 2 file mappings
const chapter2Files = [
  {
    source: 'Chapter 02 - Strategic Alignment and Business Environment/02.1 – Strategy and Portfolio Alignment.md',
    dest: 'guide/02-strategic/strategy-alignment.md'
  },
  {
    source: 'Chapter 02 - Strategic Alignment and Business Environment/02.2 – Benefits, Value, and Sustainability.md',
    dest: 'guide/02-strategic/benefits-value.md'
  },
  {
    source: 'Chapter 02 - Strategic Alignment and Business Environment/02.3 – Compliance, Risk, and Governance.md',
    dest: 'guide/02-strategic/compliance-governance.md'
  },
  {
    source: 'Chapter 02 - Strategic Alignment and Business Environment/02.4 – Organizational Change and Readiness.md',
    dest: 'guide/02-strategic/organizational-change.md'
  },
  {
    source: 'Chapter 02 - Strategic Alignment and Business Environment/02.5 – Program Management.md',
    dest: 'guide/02-strategic/program-management.md'
  }
]

// Function to add frontmatter to markdown files
function addFrontmatter(content, title) {
  const frontmatter = `---
title: ${title}
description: ${title}
---

`

  // Check if file already has frontmatter
  if (content.startsWith('---')) {
    return content
  }

  return frontmatter + content
}

// Function to update internal links
function updateLinks(content) {
  // Update markdown links to remove .md extensions for web
  content = content.replace(/\[([^\]]+)\]\([^)]+\.md\)/g, '[$1]($2)')

  // Update chapter internal links to use new paths
  content = content.replace(/Chapter \d+ - [^/]+/g, (match) => {
    const chapterNum = match.match(/Chapter (\d+)/)[1]

    // Mapping of chapter numbers to new directory names
    const chapterMapping = {
      '1': '01-introduction',
      '2': '02-strategic',
      '3': '03-team-leadership',
      '4': '04-stakeholder',
      '5': '05-initiation',
      '6': '06-project-planning',
      '7': '07-risk-quality',
      '8': '08-execution',
      '9': '09-monitoring',
      '10': '10-exam-prep'
    }

    const chapterName = match.split(' - ')[1].trim().toLowerCase()
    const mappedName = chapterMapping[chapterNum] || `chapter-${chapterNum}`

    return `/guide/${mappedName}/`
  })

  // Fix specific broken links
  content = content.replace(/\.\.\/Chapter%20[^)]+/g, '/guide/')
  content = content.replace(/Chapter%2098/g, 'guide')

  return content
}

// Migrate each file
let migratedCount = 0
chapter2Files.forEach(({ source, dest }) => {
  const sourcePath = path.join(__dirname, '..', source)
  const destPath = path.join(__dirname, '..', dest)

  // Ensure destination directory exists
  const destDir = path.dirname(destPath)
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  if (fs.existsSync(sourcePath)) {
    console.log(`\nMigrating: ${source}`)
    console.log(`  To: ${dest}`)

    let content = fs.readFileSync(sourcePath, 'utf8')
    const title = content.split('\n')[0].replace(/^#+\s*/, '')

    content = addFrontmatter(content, title)
    content = updateLinks(content)

    fs.writeFileSync(destPath, content)
    console.log(`  ✓ Migrated successfully`)
    migratedCount++
  } else {
    console.log(`\n⚠ Source file not found: ${sourcePath}`)
  }
})

console.log(`\n✅ Migration complete! ${migratedCount} of ${chapter2Files.length} files migrated.`)

// Create a knowledge check file for Chapter 2
const knowledgeCheckContent = `# Knowledge Check: Strategic Alignment and Business Environment

Test your understanding of strategic alignment, benefits management, and organizational governance.

<QuizComponent
  title="Chapter 2 Knowledge Check"
  :questions="[
    {
      text: 'What is the primary focus of the Business Environment domain on the PMP exam?',
      options: [
        'Team leadership and stakeholder management',
        'Project execution and monitoring processes',
        'Strategy alignment, compliance, and value delivery',
        'Agile and hybrid methodologies'
      ],
      correct: 2,
      explanation: 'The Business Environment domain focuses on strategy alignment, benefits realization, compliance, governance, and ensuring projects deliver value to the organization.',
      reference: 'Chapter 2'
    },
    {
      text: 'Which of the following best describes portfolio management?',
      options: [
        'Managing individual projects to completion',
        'Coordinating multiple related programs',
        'Selecting and prioritizing projects to align with strategic objectives',
        'Overseeing day-to-day project activities'
      ],
      correct: 2,
      explanation: 'Portfolio management involves selecting and prioritizing projects and programs to ensure they align with the organization\'s strategic objectives and optimize resource allocation.',
      reference: 'Section 2.5'
    },
    {
      text: 'What is benefits realization management primarily concerned with?',
      options: [
        'Completing projects on time and within budget',
        'Ensuring project deliverables meet technical specifications',
        'Measuring and achieving the intended business value from project outcomes',
        'Following standardized project management processes'
      ],
      correct: 2,
      explanation: 'Benefits realization management focuses on ensuring that projects deliver their intended business value and achieve the desired outcomes and benefits defined in the business case.',
      reference: 'Section 2.2'
    },
    {
      text: 'Which organizational change management approach emphasizes preparing, managing, and reinforcing change?',
      options: [
        'Technical training only',
        'ADKAR model (Awareness, Desire, Knowledge, Ability, Reinforcement)',
        'Process improvement methodology',
        'Quality assurance framework'
      ],
      correct: 1,
      explanation: 'The ADKAR model is a structured approach to change management that focuses on ensuring individuals have Awareness, Desire, Knowledge, Ability, and Reinforcement to successfully adopt change.',
      reference: 'Section 2.4'
    },
    {
      text: 'What is the primary purpose of project governance?',
      options: [
        'To control project budgets and schedules',
        'To provide oversight, decision-making, and control frameworks',
        'To manage project team performance',
        'To conduct technical reviews and quality checks'
      ],
      correct: 1,
      explanation: 'Project governance provides the framework for decision-making, oversight, and control to ensure projects align with organizational objectives and deliver expected value.',
      reference: 'Section 2.3'
    }
  ]"
/>

## Additional Study Topics

For complete mastery of Chapter 2, ensure you understand:

1. **Strategic Alignment**
   - How projects connect to organizational strategy
   - Portfolio management processes
   - Project selection and prioritization criteria

2. **Benefits Management**
   - Defining and measuring project benefits
   - Benefits realization planning
   - Value delivery methodologies

3. **Compliance and Governance**
   - Regulatory requirements
   - Organizational governance structures
   - Ethical considerations in projects

4. **Change Management**
   - Organizational change theories
   - Stakeholder resistance management
   - Communication strategies for change

5. **Program Management**
   - Program vs. project differences
   - Benefits coordination across projects
   - Program lifecycle management

---

<div class="study-tip">
  <strong>💡 Pro Tip:</strong> Remember that Business Environment questions now represent 26% of the exam (up from 8%), so mastery of these topics is crucial for success.
</div>
`

const kcPath = path.join(__dirname, '..', 'guide', '02-strategic', 'knowledge-check.md')
fs.writeFileSync(kcPath, knowledgeCheckContent)
console.log('\n✅ Created knowledge-check.md for Chapter 2')