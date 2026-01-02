// Simple build script to copy compiled JS files to public directory for Vercel deployment
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// Files to copy from dist to root
const files = [
  'types.js',
  'theme.js',
  'auth.js',
  'add-member.js',
  'dashboard.js',
  'tree.js',
  'index.js'
];

console.log('Copying compiled TypeScript files to public directory...');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✓ Created public directory');
}

files.forEach(file => {
  const srcPath = path.join(distDir, file);
  const destPath = path.join(publicDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file} to public/`);
  } else {
    console.log(`⚠ ${file} not found in dist/`);
  }
});

console.log('Build complete! Files ready in public/ for Vercel deployment.');
