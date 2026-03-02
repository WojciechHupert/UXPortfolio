---
name: assets-and-demos
description: Keeps images, media, and interactive demos organized and avoids repo bloat or performance issues on GitHub Pages. Use when adding images, video, 3D assets, or interactive demos (e.g. Three.js) to the Shape Seeds portfolio.
---

# Assets and Demos

When adding images, video, 3D assets, or heavy interactive demos, follow these rules so the repo stays organized and performant on GitHub Pages.

## Images

- **Location:** Prefer an `assets/` or `images/` directory if it exists in the project; otherwise use repo root (see [docs/03-technical-overview.md](docs/03-technical-overview.md)).
- **Accessibility:** Every meaningful image must have an `alt` attribute. Purely decorative images may use `aria-hidden="true"` and empty or minimal alt.
- **Performance:** Use compressed/optimized assets for web where possible.

## Demos and 3D

- **One page per heavy demo:** Use a dedicated HTML page for each interactive or 3D demo (e.g. a single Three.js scene). Do not load heavy scripts (e.g. Three.js) on every page or in the main [script.js](script.js).
- **Loading:** Include the demo script only on that page’s `<script>` tag (or page-specific JS file). Link to the demo from [portfolio.html](portfolio.html) or the relevant case study.

## Repo size (GitHub Pages)

- The site is deployed via GitHub Pages. Keep the repo under ~1 GB.
- **Do not commit large video files.** Recommend external hosting (e.g. YouTube, Vimeo, or a CDN) and embed or link from the portfolio.

## Summary

- Images: use `assets/` or `images/` if present; always set `alt` or `aria-hidden` for decorative.
- Demos/3D: one HTML page per demo; load heavy JS only on that page.
- No large video in repo; host elsewhere and link or embed.
