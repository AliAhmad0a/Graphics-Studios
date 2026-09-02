const fs = require('fs');
const path = require('path');

let p = path.join(__dirname, 'src/components/TechStack.jsx');
if (fs.existsSync(p)) {
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/'#61DAFB'/g, "'var(--cyan)'"); // React
  content = content.replace(/'#3776AB'/g, "'var(--blue)'"); // Python
  content = content.replace(/'#2496ED'/g, "'var(--blue)'"); // Docker
  content = content.replace(/'#646CFF'/g, "'var(--blue)'"); // Vite
  content = content.replace(/'#06B6D4'/g, "'var(--cyan)'"); // Tailwind
  content = content.replace(/'#31A8FF'/g, "'var(--blue)'"); // Ps, Lr
  fs.writeFileSync(p, content);
  console.log('Fixed TechStack colors');
}
