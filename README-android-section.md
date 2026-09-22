## Android APK

This app also builds as an installable Android APK, generated automatically by
GitHub Actions. It wraps the exact same `index.html` / `manifest.json` / `sw.js`
you already have — nothing about the web/PWA version changes.

1. Open this repository on GitHub.
2. Click the **Actions** tab.
3. Select **Android APK Build** in the left sidebar.
4. If it hasn't run automatically, click **Run workflow** (workflow_dispatch) → **Run workflow**.
5. Wait for the run to finish (a few minutes — green checkmark).
6. Open that completed workflow run.
7. Scroll down to the **Artifacts** section at the bottom of the run summary.
8. Download **TA-Toolkit-Android-APK**.
9. GitHub always gives you a `.zip` — unzip it to get `app-debug.apk`.
10. Copy `app-debug.apk` to your Android phone and tap it to install
    (you may need to allow "install from this source" the first time).

This is a **debug** build, so no signing keys are required to produce it. It's
fully installable but not suitable for Play Store distribution as-is — that
would need a signed release build with your own keystore, which is a
separate, optional step.
