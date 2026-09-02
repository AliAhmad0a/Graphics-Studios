const fs = require('fs');
const path = require('path');

const replaceMap = {
  '#3b82f6': '#ffb6c1',
  'rgba(59, 130, 246': 'rgba(255, 182, 193',
  'rgba(59,130,246': 'rgba(255,182,193',
  '#60a5fa': '#ffc0cb',
  '#38bdf8': '#ffc0cb',
  'rgba(34, 211, 238': 'rgba(255, 240, 245',
  'rgba(34,211,238': 'rgba(255,240,245',
  '#22d3ee': '#ffb6c1'
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
        console.log('Updated colors in', p);
      }
    }
  });
}

walk('./src');
