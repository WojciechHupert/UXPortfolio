---
name: add-page
description: Keeps new HTML pages (marketing or case study) consistent with site structure and script behavior. Use when adding a new page, new case study, or new marketing page to the Shape Seeds UX portfolio.
---

# Add Page

When adding a new HTML page to the portfolio, follow this structure so navigation and scripts work correctly.

## Required boilerplate

**Head (every page):**
- `<meta charset="UTF-8" />`, `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- `<title>` and `<meta name="description" content="..." />` — unique per page
- `<link rel="stylesheet" href="style.css" />`

**Navigation:** Copy the full nav block from [index.html](index.html) (lines 15–36). It must include:
- `class="nav"`, inner `nav__inner`, `nav__links`, `nav__logo`
- **Exact IDs:** `id="navBurger"` on the button, `id="navMobile"` on the mobile menu div — required for [script.js](script.js)
- Same five links in both desktop and mobile: index.html (Approach), portfolio.html (Work), services.html (Services), about.html (About), contact.html (Contact) with `class="nav__cta"` on Contact

**Main wrapper:** `<main class="page-wrapper">` — all page content goes inside this.

**Before `</body>`:** `<script src="script.js"></script>`

## Case study pages

Use [case-study-1.html](case-study-1.html) as the reference. Include:
- **Breadcrumb:** e.g. `<a href="portfolio.html">Work</a> › <span>Project Name</span>` inside a `.breadcrumb` (or equivalent)
- **Case hero:** Section with class `case-hero`, containing:
  - `.case-hero__meta` — tags (e.g. `<span class="tag tag--accent">...</span>`)
  - `.case-hero__title` — main heading (e.g. `display-lg`)
  - `.case-hero__summary` — short intro paragraph

Add content sections below using `.container`, `.section`, and `.reveal` where appropriate.

## After adding a new case study

1. **Portfolio listing:** Add a card or link to the new case study on [portfolio.html](portfolio.html) (same pattern as existing case study cards).
2. **Technical docs:** Add the new filename (e.g. `case-study-myproject.html`) to the "Case study URLs" list in [docs/03-technical-overview.md](docs/03-technical-overview.md).

## Checklist

- [ ] Nav has `id="navBurger"` and `id="navMobile"`
- [ ] All five nav links match existing pages (desktop + mobile)
- [ ] `style.css` and `script.js` linked; script at end of body
- [ ] If case study: portfolio.html updated and docs/03-technical-overview.md updated
