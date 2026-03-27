import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDir = path.join(__dirname, '..');
const srcDir = path.join(frontendDir, 'src');
const pagesDir = path.join(srcDir, 'pages');
const pagesModulePath = path.join(srcDir, 'pages.js');

const { pages } = await import(pathToFileURL(pagesModulePath).href);

fs.mkdirSync(pagesDir, { recursive: true });

const escapeTemplateLiteral = (value) =>
  value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const toIdentifier = (pageName) =>
  pageName
    .replace(/[^a-zA-Z0-9_$]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^[^a-zA-Z_$]/, '_$&');

const pageEntries = Object.entries(pages);

for (const [pageName, pageData] of pageEntries) {
  const filePath = path.join(pagesDir, `${pageName}.js`);

  let output = '';
  output += 'const page = {\n';
  output += `  title: \`${escapeTemplateLiteral(pageData.title || '')}\`,\n`;
  output += `  html: \`${escapeTemplateLiteral(pageData.html || '')}\`,\n`;
  output += '  scripts: [\n';

  for (const script of pageData.scripts || []) {
    output += '    {\n';
    output += `      type: ${script.type ? `\`${escapeTemplateLiteral(script.type)}\`` : 'null'},\n`;
    output += `      content: \`${escapeTemplateLiteral(script.content || '')}\`\n`;
    output += '    },\n';
  }

  output += '  ]\n';
  output += '};\n\n';
  output += 'export default page;\n';

  fs.writeFileSync(filePath, output, 'utf8');
}

let indexOutput = '';

for (const [pageName] of pageEntries) {
  const importName = `${toIdentifier(pageName)}Page`;
  indexOutput += `import ${importName} from './${pageName}.js';\n`;
}

indexOutput += '\nexport const pages = {\n';
for (const [pageName] of pageEntries) {
  const importName = `${toIdentifier(pageName)}Page`;
  indexOutput += `  '${pageName}': ${importName},\n`;
}
indexOutput += '};\n';

fs.writeFileSync(path.join(pagesDir, 'index.js'), indexOutput, 'utf8');

console.log(`Split ${pageEntries.length} pages into ${pagesDir}`);
