// Copy HTML files to public directory
const fs = require('fs');
const path = require('path');

const rootDir = __dirname.replace('\\scripts', '').replace('/scripts', '');
const publicDir = path.join(rootDir, 'public');

console.log('Copying HTML files to public directory...');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// HTML files to copy
const htmlFiles = [
  'index.html',
  'auth.html',
  'dashboard.html',
  'add_member.html',
  'tree.html',
  'calendar.html',
  'search.html',
  'profile.html',
  'manage_codes.html'
];

htmlFiles.forEach(file => {
  const srcPath = path.join(rootDir, file);
  const destPath = path.join(publicDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file} to public/`);
  }
});

// Copy assets directory
const assetsDir = path.join(rootDir, 'assets');
const publicAssetsDir = path.join(publicDir, 'assets');

if (fs.existsSync(assetsDir)) {
  // Remove old assets if exists
  if (fs.existsSync(publicAssetsDir)) {
    fs.rmSync(publicAssetsDir, { recursive: true, force: true });
  }
  
  // Copy assets directory recursively
  fs.cpSync(assetsDir, publicAssetsDir, { recursive: true });
  console.log('✓ Copied assets/ to public/assets/');
}

console.log('HTML and assets copy complete!');
