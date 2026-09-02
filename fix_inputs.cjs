const fs = require('fs');
const path = require('path');

function replaceFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Fix neon-input in Contact.jsx
  if (filePath.includes('Contact.jsx')) {
    content = content.replace(/background: rgba\(2, 6, 23, 0\.5\);/g, 'background: var(--white-alpha-04);');
    content = content.replace(/border: 1px solid rgba\(255, 255, 255, 0\.09\);/g, 'border: 1px solid var(--border);');
    content = content.replace(/color: white;/g, 'color: var(--text-h);');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed', filePath);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.jsx')) {
      replaceFile(p);
    }
  });
}

walk('./src');
