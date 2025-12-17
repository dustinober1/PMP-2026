#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Mapping of source to destination files
const migrations = [
  {
    source: 'Chapter 01 - Introduction and Fundamentals/01.2 – How To Use This Study Guide.md',
    dest: 'guide/01-introduction/using-guide.md'
  },
  {
    source: 'Chapter 01 - Introduction and Fundamentals/01.3 – Ways of Working and Tailoring.md',
    dest: 'guide/01-introduction/ways-of-working.md'
  },
  {
    source: 'Chapter 01 - Introduction and Fundamentals/01.4 – Core Project Management Concepts and Tools.md',
    dest: 'guide/01-introduction/core-concepts.md'
  },
  {
    source: 'Chapter 10 - Exam Preparation and Future Trends/10.1 – Exam Strategy and Test-Taking Skills.md',
    dest: 'guide/10-exam-prep/exam-strategy.md'
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

  // Update chapter internal links
  content = content.replace(/Chapter \d+ - [^/]+/g, (match) => {
    const chapterNum = match.match(/Chapter (\d+)/)[1]
    const chapterName = match.split(' - ')[1].trim().toLowerCase().replace(/ /g, '-')
    return `/guide/${chapterNum.padStart(2, '0')}-${chapterName}/`
  })

  return content
}

// Migrate each file
migrations.forEach(({ source, dest }) => {
  const sourcePath = path.join(__dirname, '..', source)
  const destPath = path.join(__dirname, '..', dest)

  // Ensure destination directory exists
  const destDir = path.dirname(destPath)
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  if (fs.existsSync(sourcePath)) {
    console.log(`Migrating ${source} to ${dest}`)

    let content = fs.readFileSync(sourcePath, 'utf8')
    const title = content.split('\n')[0].replace(/^#+\s*/, '')

    content = addFrontmatter(content, title)
    content = updateLinks(content)

    fs.writeFileSync(destPath, content)
    console.log(`  ✓ Migrated successfully`)
  } else {
    console.log(`  ✗ Source file not found: ${sourcePath}`)
  }
})

console.log('\nMigration complete!')