const fs = require('fs');
const path = require('path');
const replaceMap = {
  '#94a3b8': 'var(--text-main)',
  '#cbd5e1': 'var(--text-muted)'
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
