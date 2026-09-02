const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/AnimatedBackground.jsx',
  'src/components/AnimatedSoftwareBackground.jsx',
  'src/components/AnimatedBubbleBackground.jsx',
  'src/components/Loader.jsx'
];

for (const file of filesToUpdate) {
  let filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace inline styles
    content = content.replace(/background:\s*['"]var\(--background\)['"]/g, "background: 'var(--page-bg)'");
    
    // Replace css classes if any
    content = content.replace(/background:\s*var\(--background\);/g, "background: var(--page-bg);");

    fs.writeFileSync(filePath, content);
    console.log('Updated background in', file);
  }
}
