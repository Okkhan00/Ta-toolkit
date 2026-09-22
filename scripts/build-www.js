// Copies the EXISTING static PWA files into www/ so Capacitor has a webDir
// to package. This does not modify index.html, manifest.json, sw.js, or
// icons/ in place — it only copies them. The web/PWA version at the repo
// root is untouched and keeps working exactly as before.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');

const filesToCopy = ['index.html', 'manifest.json', 'sw.js'];
const dirsToCopy = ['icons'];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const f of filesToCopy) {
  const src = path.join(root, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(out, f));
    console.log('copied', f);
  } else {
    console.warn('skip (not found):', f);
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const s = path.join(srcDir, entry.name);
    const d = path.join(destDir, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

for (const d of dirsToCopy) {
  const src = path.join(root, d);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(out, d));
    console.log('copied dir', d);
  } else {
    console.warn('skip (dir not found):', d);
  }
}

console.log('www/ build folder ready at', out);
