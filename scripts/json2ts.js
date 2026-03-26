const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'lib', 'articles.json'), 'utf-8'));

const lines = [];
lines.push(`export type ContentBlock =`);
lines.push(`  | { type: 'text'; value: string }`);
lines.push(`  | { type: 'image'; value: string }`);
lines.push(`  | { type: 'heading'; value: string };`);
lines.push(``);
lines.push(`export type Article = {`);
lines.push(`  title: string;`);
lines.push(`  heroImage: string;`);
lines.push(`  content: ContentBlock[];`);
lines.push(`};`);
lines.push(``);
lines.push(`export const articles: Record<string, Article> = {`);

for (const [id, art] of Object.entries(data)) {
  const escStr = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  lines.push(`  '${id}': {`);
  lines.push(`    title: \`${escStr(art.title)}\`,`);
  lines.push(`    heroImage: \`${escStr(art.heroImage)}\`,`);
  lines.push(`    content: [`);
  for (const block of art.content) {
    lines.push(`      { type: '${block.type}', value: \`${escStr(block.value)}\` },`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
}

lines.push(`};`);

const outPath = path.join(__dirname, '..', 'lib', 'party-articles.ts');
fs.writeFileSync(outPath, lines.join('\n') + '\n', 'utf-8');
console.log(`Written ${Object.keys(data).length} articles to ${outPath}`);
