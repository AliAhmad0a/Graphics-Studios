const fs = require('fs');
const path = require('path');

const replaceMap = {
  'rgba(10, 66, 219': 'rgba(255, 182, 193',
  'rgba(10,66,219': 'rgba(255,182,193',
  '#0a42db': '#ffb6c1',
  '#1e3a8a': '#ffb6c1',
  '#0284c7': '#ffb6c1' /* Footer linkedin hover */
};

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.jsx')) {
      let content = fs.readFileSync(p, 'utf8');
      let modified = content;
      
      for (const [k, v] of Object.entries(replaceMap)) {
        modified = modified.split(k).join(v);
      }
      
      if (content !== modified) {
        fs.writeFileSync(p, modified);
        console.log('Updated more colors in', p);
      }
    }
  });
}

walk('./src');
