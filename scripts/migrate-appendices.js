#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Key appendices to migrate
const appendicesFiles = [
  {
    src: 'Appendix A – The Process Groups Implementation Guide.md',
    dest: 'process-groups.md',
    title: 'Process Groups Implementation Guide'
  },
  {
    src: 'Appendix B – Key Formulas and Definitions.md',
    dest: 'formulas-definitions.md',
    title: 'Key Formulas and Definitions'
  },
  {
    src: 'Appendix C – Sources and References.md',
    dest: 'sources.md',
    title: 'Sources and References'
  },
  {
    src: 'Appendix D – Tools and Artifacts Index.md',
    dest: 'tools-artifacts.md',
    title: 'Tools and Artifacts Index'
  },
  {
    src: 'Study-Plans.md',
    dest: 'study-plans.md',
    title: 'Study Plans'
  },
  {
    src: 'Templates.md',
    dest: 'templates.md',
    title: 'Project Management Templates'
  },
  {
    src: 'Checklists.md',
    dest: 'checklists.md',
    title: 'Project Management Checklists'
  }
]

// Create appendices directory
const appendicesDir = path.join(__dirname, '..', 'guide', 'appendices')
if (!fs.existsSync(appendicesDir)) {
  fs.mkdirSync(appendicesDir, { recursive: true })
}

console.log('Migrating Appendices...\n')

appendicesFiles.forEach(({ src, dest, title }) => {
  const sourcePath = path.join(__dirname, '..', 'Appendices', src)

  if (fs.existsSync(sourcePath)) {
    let content = fs.readFileSync(sourcePath, 'utf8')

    // Add frontmatter
    if (!content.startsWith('---')) {
      content = `---
title: ${title}
description: ${title}
---

` + content
    }

    const destPath = path.join(appendicesDir, dest)
    fs.writeFileSync(destPath, content)
    console.log(`  ✓ Migrated: ${src}`)
  } else {
    console.log(`  ⚠ File not found: ${src}`)
  }
})

// Create appendices index
const appendicesIndex = `# Appendices

This section contains reference materials, templates, and additional resources to support your PMP exam preparation.

## Available Appendices

1. **[Process Groups Implementation Guide](process-groups.md)**
   - Detailed explanation of the 5 process groups
   - ITTOs (Inputs, Tools & Techniques, Outputs)
   - Process flows and interactions

2. **[Key Formulas and Definitions](formulas-definitions.md)**
   - Earned Value Management formulas
   - Critical path calculations
   - Important PMP terminology

3. **[Sources and References](sources.md)**
   - PMI standards and guides
   - Additional reading materials
   - Online resources

4. **[Tools and Artifacts Index](tools-artifacts.md)**
   - Comprehensive list of PM tools
   - When to use each tool
   - Best practices

5. **[Study Plans](study-plans.md)**
   - 30-day study plan
   - 60-day study plan
   - 90-day study plan

6. **[Templates](templates.md)**
   - Project charter template
   - Risk register template
   - Stakeholder register template
   - And more...

7. **[Checklists](checklists.md)**
   - Project initiation checklist
   - Planning phase checklist
   - Execution checklist
   - Closing checklist

## How to Use These Materials

- **Reference**: Use the appendices as quick references while studying
- **Practice**: Apply templates and checklists to your own projects
- **Review**: Review formulas and definitions regularly
- **Download**: Many templates are available for download

---

<div class="appendix-tip">
  <strong>📚 Tip:</strong> Don't try to memorize everything in the appendices. Focus on understanding concepts and knowing where to find information when needed.
</div>
`

fs.writeFileSync(path.join(appendicesDir, 'index.md'), appendicesIndex)
console.log('\n  ✓ Created appendices index')
console.log('\n✅ Appendices migration complete!')