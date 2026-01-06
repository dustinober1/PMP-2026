#!/usr/bin/env node

/**
 * Script to convert FlashcardGrid to FlashcardCarousel format
 * Converts individual <Flashcard> components to :cards array prop
 */

const fs = require('fs');
const path = require('path');

function getAllMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllMarkdownFiles(filePath, fileList);
        } else if (file.endsWith('.md')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

function convertFlashcardGridToCarousel(content) {
    let modified = false;

    // Add FlashcardCarousel import if FlashcardGrid is imported
    if (content.includes("import FlashcardGrid from")) {
        if (!content.includes("import FlashcardCarousel from")) {
            content = content.replace(
                /(import FlashcardGrid from '.*?')/,
                "$1\nimport FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'"
            );
            modified = true;
        }
    }

    // Find and convert all FlashcardGrid blocks
    const gridRegex = /<FlashcardGrid>([\s\S]*?)<\/FlashcardGrid>/g;

    content = content.replace(gridRegex, (match, gridContent) => {
        // Extract all individual flashcards
        const flashcardRegex = /<Flashcard\s+front="((?:[^"\\]|\\.)*)"\s+back="((?:[^"\\]|\\.)*)"\s*\/>/g;
        const cards = [];
        let flashcardMatch;

        while ((flashcardMatch = flashcardRegex.exec(gridContent)) !== null) {
            const front = flashcardMatch[1];
            const back = flashcardMatch[2];
            cards.push({ front, back });
        }

        if (cards.length === 0) {
            return match; // No flashcards found, return original
        }

        // Build the carousel format
        const cardsArray = cards.map(card => {
            // Escape single quotes in the content
            const front = card.front.replace(/'/g, "\\'");
            const back = card.back.replace(/'/g, "\\'");
            return `  { \n    front: '${front}', \n    back: '${back}' \n  }`;
        }).join(',\n');

        modified = true;
        return `<FlashcardCarousel :cards="[\n${cardsArray}\n]" />`;
    });

    return { content, modified };
}

function main() {
    const guideDir = path.join(__dirname, '..', 'guide');
    const files = getAllMarkdownFiles(guideDir);

    let totalConverted = 0;
    const convertedFiles = [];

    for (const filePath of files) {
        const content = fs.readFileSync(filePath, 'utf8');

        if (!content.includes('<FlashcardGrid>')) {
            continue; // Skip files without FlashcardGrid
        }

        const { content: newContent, modified } = convertFlashcardGridToCarousel(content);

        if (modified) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            totalConverted++;
            const relativePath = path.relative(guideDir, filePath);
            convertedFiles.push(relativePath);
            console.log(`✓ Converted: ${relativePath}`);
        }
    }

    console.log(`\n✅ Conversion complete!`);
    console.log(`   Total files converted: ${totalConverted}`);

    if (convertedFiles.length > 0) {
        console.log(`\nConverted files:`);
        convertedFiles.forEach(f => console.log(`  - ${f}`));
    }
}

main();
