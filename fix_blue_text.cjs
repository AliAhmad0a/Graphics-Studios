const fs = require('fs');
const path = require('path');

const colorMap = {
  '#3b82f6': 'var(--blue)',
  '#60a5fa': 'var(--cyan)',
  '#22d3ee': 'var(--cyan)',
  '#38bdf8': 'var(--cyan)'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [hex, cssVar] of Object.entries(colorMap)) {
    // React inline style: color: '#3b82f6' or color: "#3b82f6"
    let regexInline1 = new RegExp(`color:\\s*'${hex}'`, 'g');
    content = content.replace(regexInline1, `color: '${cssVar}'`);
    
    let regexInline2 = new RegExp(`color:\\s*"${hex}"`, 'g');
    content = content.replace(regexInline2, `color: '${cssVar}'`);

    // CSS/styled-jsx style: color: #3b82f6;
    let regexCss = new RegExp(`color:\\s*${hex}(;|\\s|})`, 'g');
    content = content.replace(regexCss, (match, p1) => `color: ${cssVar}${p1}`);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed text colors in', filePath);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.jsx') || p.endsWith('.css')) {
      processFile(p);
    }
  });
}

walk('./src');
