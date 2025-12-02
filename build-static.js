// Static site generator for GitHub Pages
import { writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the app from the built worker
const appModule = await import('./dist/_worker.js');
const app = appModule.default;

// Pages to generate
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/about', file: 'about/index.html' },
  { path: '/fertilization', file: 'fertilization/index.html' },
  { path: '/hydro-seeding', file: 'hydro-seeding/index.html' },
  { path: '/fencing', file: 'fencing/index.html' },
  { path: '/deck-services', file: 'deck-services/index.html' },
  { path: '/pest-control', file: 'pest-control/index.html' },
  { path: '/service-areas', file: 'service-areas/index.html' },
  { path: '/gallery', file: 'gallery/index.html' },
  { path: '/testimonials', file: 'testimonials/index.html' },
  { path: '/contact', file: 'contact/index.html' },
];

// Create docs directory for GitHub Pages
const docsDir = join(__dirname, 'docs');
if (!existsSync(docsDir)) {
  mkdirSync(docsDir, { recursive: true });
}

console.log('Building static site for GitHub Pages...\n');

// Generate HTML for each route
for (const route of routes) {
  try {
    // Create mock request
    const req = new Request(`http://localhost${route.path}`);

    // Get response from Hono app
    const res = await app.fetch(req);
    const html = await res.text();

    // Create directory structure
    const filePath = join(docsDir, route.file);
    const fileDir = dirname(filePath);

    if (!existsSync(fileDir)) {
      mkdirSync(fileDir, { recursive: true });
    }

    // Write HTML file
    writeFileSync(filePath, html);
    console.log(`✓ Generated: ${route.file}`);
  } catch (error) {
    console.error(`✗ Failed to generate ${route.file}:`, error.message);
  }
}

// Copy static assets
console.log('\nCopying static assets...');
const publicDir = join(__dirname, 'public');
if (existsSync(publicDir)) {
  cpSync(publicDir, docsDir, { recursive: true });
  console.log('✓ Copied public/ → docs/');
}

// Create .nojekyll to prevent GitHub Pages from ignoring files starting with _
writeFileSync(join(docsDir, '.nojekyll'), '');
console.log('✓ Created .nojekyll');

// Create 404.html (copy from index for SPA routing)
const indexPath = join(docsDir, 'index.html');
const notFoundPath = join(docsDir, '404.html');
if (existsSync(indexPath)) {
  cpSync(indexPath, notFoundPath);
  console.log('✓ Created 404.html');
}

console.log('\n✅ Static site built successfully in docs/ directory!');
console.log('\nNext steps:');
console.log('1. git add docs/');
console.log('2. git commit -m "Add static site build for GitHub Pages"');
console.log('3. git push origin main');
console.log('4. Enable GitHub Pages in repository settings (source: docs/ folder)');
