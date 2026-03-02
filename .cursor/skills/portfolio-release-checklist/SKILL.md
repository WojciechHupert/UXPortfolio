---
name: portfolio-release-checklist
description: Runs a pre-launch checklist for the Shape Seeds UX portfolio before deploy or marking a release done. Use when preparing to deploy, releasing, or when the user asks if the site is ready to ship.
---

# Portfolio Release Checklist

When preparing to deploy or marking a release as done, run through this checklist. Use when the user asks to "check if ready to deploy," "pre-launch," or "release."

## Before deploy

- [ ] **Internal links:** All in-page and cross-page links work (no 404s). Check nav, footer, case study cards, and CTAs.
- [ ] **Nav state:** Active page is highlighted correctly (script.js sets `.active` from pathname; verify on each main page).
- [ ] **Contact flow:** Contact form or mailto works; no broken `mailto:` or missing form handler.
- [ ] **Meta per page:** Each important page has a unique `<title>` and `<meta name="description" content="...">` (see portfolio-seo-meta skill).
- [ ] **Console:** No uncaught errors or warnings in browser console on key pages (index, portfolio, contact).
- [ ] **Responsive:** Quick check at one mobile width and one desktop width; nav (including burger), content, and buttons are usable.
- [ ] **Assets:** Images and scripts load (correct paths; no broken `src`/`href`).

## Optional but recommended

- [ ] **Docs:** If the release is notable, add a row to [docs/04-change-log.md](docs/04-change-log.md) (Date | Area | Change | Why | Impact | Owner).

## After deploy (GitHub Pages)

- [ ] Visit live URL; confirm index and at least one case study and contact page.
- [ ] Test one internal link and the contact action from the live site.

If any item fails, fix before considering the release done. Use the design-system and accessibility-guard skills when fixing UI or a11y issues.
