// Simple build script to copy compiled JS files to root directory
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const rootDir = __dirname;

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

console.log('Copying compiled TypeScript files...');

files.forEach(file => {
  const srcPath = path.join(distDir, file);
  const destPath = path.join(rootDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file}`);
  } else {
    console.log(`⚠ ${file} not found in dist/`);
  }
});

console.log('Build complete!');
