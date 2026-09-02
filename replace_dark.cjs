const fs = require('fs');
const path = require('path');
const replaceMap = {
  '#020617': 'var(--background)',
  'rgba(2, 6, 23, 0.98)': 'var(--background-alpha-98)',
  'rgba(2, 6, 23, 0.95)': 'var(--background-alpha-95)',
  'rgba(2, 6, 23, 0.9)': 'var(--background-alpha-90)',
  'rgba(2, 6, 23, 0.8)': 'var(--background-alpha-80)',
  'rgba(2, 6, 23, 0.75)': 'var(--background-alpha-75)'
};

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.jsx') || p.endsWith('.css')) {
      let content = fs.readFileSync(p, 'utf8');
      let modified = content;
      for (const [k, v] of Object.entries(replaceMap)) {
        // Only replace if it doesn't already have var(--background) wrapping it
        // A simple split and join is fine for now, we'll fix duplicate vars if any
        modified = modified.split(k).join(v);
      }
      if (content !== modified) {
        fs.writeFileSync(p, modified);
        console.log('Updated', p);
      }
    }
  });
}

walk('./src');
