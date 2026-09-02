const fs = require('fs');

let content = fs.readFileSync('./src/styles/App.css', 'utf8');

// 1. Swap themes
content = content.replace(':root {', ':root_temp {');
content = content.replace('[data-theme="light"] {', ':root {');
content = content.replace(':root_temp {', '[data-theme="dark"] {');

// 1b. Fix color-scheme in new :root (was light, ensure it stays light, but wait the block had color-scheme: light at the bottom)
// Actually, it's safer to just do a precise replace for themes.
// Let's just use the known block.
