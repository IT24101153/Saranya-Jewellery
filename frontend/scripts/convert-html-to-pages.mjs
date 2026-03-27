import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDir = path.join(__dirname, '..');

const htmlFiles = fs
  .readdirSync(frontendDir)
  .filter((name) => name.endsWith('.html'))
  .sort();

function pageNameForFile(fileName) {
  return fileName === 'index.html' ? 'home' : fileName.replace('.html', '');
}

function escapeTemplateLiteral(value) {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

const pages = {};

for (const fileName of htmlFiles) {
  const filePath = path.join(frontendDir, fileName);
  const raw = fs.readFileSync(filePath, 'utf8');

  const titleMatch = raw.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'Saranya Jewellery';

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : '';

  const scripts = [];
  const scriptRegex = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
  let scriptMatch = scriptRegex.exec(bodyContent);

  while (scriptMatch) {
    const attrs = scriptMatch[1] || '';
    const content = scriptMatch[2] || '';
    const typeMatch = attrs.match(/type\s*=\s*["']([^"']+)["']/i);

    scripts.push({
      type: typeMatch ? typeMatch[1] : null,
      content
    });

    scriptMatch = scriptRegex.exec(bodyContent);
  }

  const htmlWithoutScripts = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').trim();

  pages[pageNameForFile(fileName)] = {
    title,
    html: htmlWithoutScripts,
    scripts
  };
}

let pagesOutput = 'export const pages = {\n';

for (const [pageName, pageData] of Object.entries(pages)) {
  pagesOutput += `  '${pageName}': {\n`;
  pagesOutput += `    title: \`${escapeTemplateLiteral(pageData.title)}\`,\n`;
  pagesOutput += `    html: \`${escapeTemplateLiteral(pageData.html)}\`,\n`;
  pagesOutput += '    scripts: [\n';

  for (const script of pageData.scripts) {
    pagesOutput += '      {\n';
    pagesOutput += `        type: ${script.type ? `\`${escapeTemplateLiteral(script.type)}\`` : 'null'},\n`;
    pagesOutput += `        content: \`${escapeTemplateLiteral(script.content)}\`\n`;
    pagesOutput += '      },\n';
  }

  pagesOutput += '    ]\n';
  pagesOutput += '  },\n';
}

pagesOutput += '};\n';

fs.writeFileSync(path.join(frontendDir, 'src', 'pages.js'), pagesOutput, 'utf8');
fs.copyFileSync(path.join(frontendDir, 'src', 'auth.js'), path.join(frontendDir, 'public', 'src', 'auth.js'));

const routeMapOutput = `export const routeMap = {\n${Object.keys(pages)
  .map((pageName) => {
    const route = pageName === 'home' ? '/' : `/${pageName}`;
    return `  '${route}': '${pageName}'`;
  })
  .join(',\n')}\n};\n`;

fs.writeFileSync(path.join(frontendDir, 'src', 'routeMap.js'), routeMapOutput, 'utf8');

console.log(`Converted ${htmlFiles.length} HTML files into React page definitions.`);
