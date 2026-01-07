
const fs = require('fs');
const path = require('path');

const filePath = '/Users/dustinober/PMP-2026/guide/09-monitoring/monitoring-closing.md';
const content = fs.readFileSync(filePath, 'utf8');

const tags = [];
const selfClosing = ['img', 'br', 'hr', 'input', 'path', 'circle', 'line', 'rect', 'stop'];

// Simple and naive parser
let lines = content.split('\n');
let row = 0;

const regex = /<\/?([a-zA-Z0-9-]+)(\s+[^>]*)?\/?>/g;

for (const line of lines) {
    row++;
    // Skip code blocks
    if (line.trim().startsWith('```')) continue; // Very naive, doesn't handle blocks well

    let match;
    while ((match = regex.exec(line)) !== null) {
        const fullTag = match[0];
        const tagName = match[1];
        const isClosing = fullTag.startsWith('</');
        const isSelfClosing = fullTag.endsWith('/>') || selfClosing.includes(tagName);

        if (isClosing) {
            const lastTag = tags.pop();
            if (lastTag && lastTag.name !== tagName) {
                console.log(`Mismatch at line ${row}: Expected closing </${lastTag.name}> but found </${tagName}>`);
                // Simple recovery for the check
                if (tags.length > 0 && tags[tags.length - 1].name === tagName) {
                    console.log(`... Assuming missing closing tag for <${lastTag.name}>`);
                    tags.pop(); // Pop the matching one
                }
            } else if (!lastTag) {
                console.log(`Extra closing tag </${tagName}> at line ${row}`);
            }
        } else if (!isSelfClosing) {
            tags.push({ name: tagName, line: row });
        }
    }
}

if (tags.length > 0) {
    console.log('Unclosed tags:');
    tags.forEach(t => console.log(`${t.name} at line ${t.line}`));
} else {
    console.log('No unclosed tags found (naive check).');
}
