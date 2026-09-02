const fs = require('fs');
const path = require('path');
const replaceMap = {
  'rgba(255, 255, 255, 0.02)': 'var(--white-alpha-02)',
  'rgba(255, 255, 255, 0.04)': 'var(--white-alpha-04)',
  'rgba(255, 255, 255, 0.05)': 'var(--white-alpha-05)',
  'rgba(255, 255, 255, 0.06)': 'var(--white-alpha-06)',
  'rgba(255, 255, 255, 0.08)': 'var(--white-alpha-08)',
  'rgba(255, 255, 255, 0.1)': 'var(--white-alpha-10)',
  'rgba(255, 255, 255, 0.12)': 'var(--white-alpha-12)',
  'rgba(255, 255, 255, 0.15)': 'var(--white-alpha-15)',
  'rgba(255, 255, 255, 0.2)': 'var(--white-alpha-20)',
  "color: '#ffffff'": "color: 'var(--strong-text)'",
  'color: "#ffffff"': 'color: "var(--strong-text)"',
  'color: #ffffff': 'color: var(--strong-text)'
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
