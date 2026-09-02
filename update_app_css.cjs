const fs = require('fs');

let css = fs.readFileSync('./src/styles/App.css', 'utf8');

// 1. Swap themes
css = css.replace(/:root \{([\s\S]*?)\}/, ':root_temp {$1}');
css = css.replace(/\[data-theme="light"\] \{([\s\S]*?)\}/, ':root {$1}');
css = css.replace(/:root_temp \{([\s\S]*?)\}/, '[data-theme="dark"] {$1}');

// 2. Map old light theme vars to baby pink
css = css.replace(/--primary: #2563eb;/g, '--primary: #111111;');
css = css.replace(/--secondary: #f1f5f9;/g, '--secondary: #555555;');
css = css.replace(/--text-h: #0f172a;/g, '--text-h: #111111;');
css = css.replace(/--text-dark: #1e293b;/g, '--text-dark: #111111;');
css = css.replace(/--text-main: #475569;/g, '--text-main: #555555;');
css = css.replace(/--text-muted: #334155;/g, '--text-muted: #777777;');
css = css.replace(/--cyan: #0891b2;/g, '--cyan: #ffb6c1;');
css = css.replace(/--blue: #2563eb;/g, '--blue: #ffb6c1;');
css = css.replace(/--electric: #7c3aed;/g, '--electric: #ffb6c1;');
css = css.replace(/--accent: #2563eb;/g, '--accent: #ffb6c1;');
css = css.replace(/--accent-glow: rgba\(37, 99, 235, 0.2\);/g, '--accent-glow: rgba(255, 182, 193, 0.4);');
css = css.replace(/--shadow-glow: 0 0 20px rgba\(37, 99, 235, 0.15\);/g, '--shadow-glow: 0 0 20px rgba(255, 182, 193, 0.4);');

// 3. Update buttons
css = css.replace(/\.btn-primary \{[\s\S]*?\}/, `.btn-primary {
  background: var(--accent);
  color: #111111 !important;
  box-shadow: 0 4px 15px var(--accent-glow);
  border: 1px solid transparent;
  font-weight: 600;
}`);
css = css.replace(/\.btn-primary:hover \{[\s\S]*?\}/, `.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px var(--accent-glow);
  background: var(--accent);
  color: #111111 !important;
}`);

css = css.replace(/\.btn-outline \{[\s\S]*?\}/, `.btn-outline {
  background: var(--background-dark);
  border: 2px solid var(--accent);
  color: var(--text-h) !important;
  font-weight: 600;
}`);
css = css.replace(/\.btn-outline:hover \{[\s\S]*?\}/, `.btn-outline:hover {
  background: var(--white-alpha-02);
  border-color: var(--accent);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px var(--accent-glow);
  color: var(--text-h) !important;
}`);

// 4. Update glass card hover
css = css.replace(/\.glass-card:hover::before \{/, `.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 40px var(--shadow-glow);
  border-color: var(--accent);
}

.glass-card:hover::before {`);
css = css.replace(/linear-gradient\(90deg, transparent, var\(--white-alpha-15\), transparent\)/, 'linear-gradient(90deg, transparent, var(--accent), transparent)');

// 5. Typography
css = css.replace(/h1, h2, h3, h4, h5, h6 \{[\s\S]*?\}/, `h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-h);
  overflow-wrap: anywhere;
  word-break: break-word;
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  letter-spacing: -0.03em;
  margin-bottom: 0.5em;
}

h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 0.5em;
}

h3 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  margin-bottom: 0.5em;
}

p {
  max-width: 70ch;
  line-height: 1.7;
  color: var(--text-main);
}`);
css = css.replace(/background: linear-gradient\(135deg, var\(--strong-text\), var\(--cyan\)\);/, 'background: linear-gradient(135deg, var(--strong-text), var(--accent));');

fs.writeFileSync('./src/styles/App.css', css);
console.log('App.css updated successfully.');
