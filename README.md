# Travel Agent Toolkit Pro — PWA Package

This folder turns your existing tool into an installable app on Android (and iOS/desktop too).

## What's inside
- `index.html` — your original app, with PWA tags + service worker added
- `manifest.json` — app name/icon/colors used when installed
- `sw.js` — service worker that caches the app so it works offline
- `icons/` — app icons

## Important: this needs to be *hosted*, not opened from a file
Android's "Add to Home screen" install prompt and the offline service worker
only work over `https://` (or `http://localhost`) — not when you just
double-tap the `.html` file. Pick whichever hosting option is easiest:

### Option A — GitHub Pages (free, ~2 minutes)
1. Create a new GitHub repo and upload all the files in this folder
   (keep `icons/` as a subfolder).
2. Repo Settings → Pages → set source to your main branch.
3. Open the resulting `https://yourname.github.io/yourrepo/` URL on your
   Android phone in Chrome.

### Option B — Netlify Drop (free, no account needed)
1. Go to https://app.netlify.com/drop on a computer.
2. Drag this whole folder onto the page.
3. You'll get an instant `https://something.netlify.app` link — open it on
   your phone.

### Option C — Any web host / your own server
Upload the folder as-is (keep the file structure) to any static host.

## Installing on Android
1. Open the hosted URL in **Chrome** on your Android phone.
2. Tap the **⋮** menu → **"Add to Home screen"** / **"Install app"**
   (Chrome may also show an automatic install banner/button).
3. Confirm — the app icon now appears on your home screen and opens in
   its own window (no browser address bar), and keeps working without
   an internet connection.

## Updating later
If you edit `index.html`, change the `CACHE_NAME` value at the top of
`sw.js` (e.g. `ta-toolkit-v2`) so installed copies pick up the new version
instead of serving the old cached one.
