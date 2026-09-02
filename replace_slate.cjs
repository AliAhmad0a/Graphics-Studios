const fs = require('fs');
const path = require('path');
const replaceMap = {
  '#e2e8f0': 'var(--text-dark)',
  '#64748b': 'var(--text-muted)',
  'rgba(11, 17, 32, 0.65)': 'var(--glass-bg)',
  'rgba(11, 17, 32, 0.7)': 'var(--glass-bg)',
  'rgba(11, 17, 32, 0.8)': 'var(--glass-bg)'
};

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.jsx') || p.endsWith('.css')) {
      let content = fs.readFileSync(p, 'utf8');
      let modified = content;
      
      // We don't want to replace inside App.css where these are defined, so skip App.css definitions
      if (p.includes('App.css')) {
        // Skip
      } else {
        for (const [k, v] of Object.entries(replaceMap)) {
          modified = modified.split(k).join(v);
        }
        if (content !== modified) {
          fs.writeFileSync(p, modified);
          console.log('Updated', p);
        }
      }
    }
  });
}

walk('./src');
