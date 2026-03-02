---
name: design-system
description: Enforces consistent use of design tokens and class naming in the Shape Seeds UX portfolio. Use when editing or adding CSS, creating new components, or changing typography, colors, or spacing.
---

# Design System

When writing or editing CSS and HTML for this portfolio, use the existing design system so the site stays visually and structurally consistent.

## Tokens (CSS variables)

Use only `:root` variables from [style.css](style.css). Do not introduce new hardcoded colors or font stacks. If a new token is needed, add it to `:root` in style.css.

**Categories in style.css:**
- **Colors:** `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-light`, `--color-accent-hover`, `--color-border`, `--color-tag-bg`, `--color-nav-bg`
- **Typography:** `--font-sans`, `--font-display`, `--font-serif`, `--font-mono`; `--text-xs` through `--text-6xl`; `--leading-*`, `--tracking-*`
- **Layout/spacing:** `--max-width`
- **Visual:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`; `--shadow-card`, `--shadow-card-hover`, `--shadow-elevated`; `--transition`

Reference [style.css](style.css) for the full list and current values.

## Class naming (BEM-like)

- **Block__element:** `nav__links`, `card__body`, `hero__title`, `case-hero__meta`
- **Block--modifier:** `hero--cinematic`, `btn--primary`, `btn--ghost`, `section--sm`, `tag--accent`

Use existing component classes before inventing new ones. Check style.css for card, button, tag, and section patterns.

## Layout primitives

- **Container:** `.container` — constrains width and horizontal padding
- **Sections:** `.section`, `.section--sm` — vertical spacing and structure
- **Scroll reveal:** Add class `.reveal` to elements that should animate in on scroll (script.js uses IntersectionObserver)
- **Hero animation:** `.hero-anim` with `data-delay="0"`, `data-delay="1"`, etc. for staggered entrance

## Buttons

Use `.btn` plus a modifier: `.btn--primary`, `.btn--ghost`, or other variants defined in style.css. Do not create new button styles without reusing or extending variables.

## Summary

- Colors, type, radius, shadows: use `var(--token-name)` from style.css
- Naming: `block__element`, `block--modifier`
- Layout: `.container`, `.section`, `.reveal`; hero: `.hero-anim` + `data-delay`
- Buttons: `.btn` + `.btn--primary` / `.btn--ghost`
