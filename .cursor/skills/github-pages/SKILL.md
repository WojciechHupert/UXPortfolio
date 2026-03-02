---
name: github-pages
description: Ensures deployment and link assumptions stay correct for the Shape Seeds portfolio on GitHub Pages. Use when deploying the site, fixing broken links or deployment, or discussing GitHub Pages setup.
---

# GitHub Pages

The portfolio is deployed as a static site on GitHub Pages. Keep these assumptions in mind when changing links or deployment.

## Publish setup

- **Source:** Static files from the repository root. No build step; HTML, CSS, and JS are served as-is.
- **Branch:** Typically the default branch (e.g. `main`) is used for GitHub Pages; confirm in the repo’s Settings > Pages.

## Links

- Use **relative URLs** for all internal links: `index.html`, `portfolio.html`, `case-study-1.html`, `style.css`, `script.js`, etc. No absolute paths that depend on a specific domain or subpath.
- The site is frontend-only: no server-side logic. Contact uses client-side mailto or an external form service (e.g. Formspree).

## Custom domain

If a custom domain is used, a `CNAME` file in the repo root may be required (GitHub Pages docs). No code changes are needed in the skill beyond this reminder; configure in the repository and DNS as needed.

## Summary

- Static site from repo root; no build step.
- Relative links only; no server-side logic.
- Custom domain: use `CNAME` in root if required.
