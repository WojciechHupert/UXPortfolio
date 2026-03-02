---
name: vanilla-html-js
description: Keeps the Shape Seeds portfolio strictly vanilla HTML, CSS, and JavaScript with no framework assumptions. Use when editing HTML or script.js, or when the user asks to add behavior or structure without a framework.
---

# Vanilla HTML and JavaScript

This portfolio is a static, multi-page site: HTML, CSS, and vanilla JavaScript only. No React, Vue, or other framework. When editing markup or [script.js](script.js), follow these rules.

## HTML

- **Semantic elements:** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<a>` as appropriate. Avoid non-semantic div/span for interactive or landmark content when a semantic tag fits.
- **Forms:** Use `<form>`, `<label>`, `<input>`, `<textarea>` with proper `for`/`id` or wrapping. No framework-specific form libraries unless the project explicitly adds one later.
- **No framework markup:** No JSX, no Vue directives, no custom component tags. Plain HTML only.

## JavaScript

- **No framework runtime:** Do not introduce React, Vue, Svelte, or similar. Use the DOM API (querySelector, addEventListener, classList, etc.).
- **Existing patterns:** [script.js](script.js) uses: IIFE for nav active state; getElementById for burger and mobile nav; querySelectorAll for links and reveal elements; IntersectionObserver for scroll reveal; addEventListener for click and submit. Follow these patterns for consistency (e.g. no jQuery or heavy libs unless the user explicitly requests one).
- **Progressive enhancement:** Page content and navigation should remain usable if JS is slow or disabled (e.g. links work, form can fall back to mailto). Do not rely on JS for critical navigation or content.
- **Minimal and focused:** Keep script.js small and readable. For heavy or isolated behavior (e.g. a 3D demo), use a separate page and script (see assets-and-demos skill).

## CSS

- Use the project design system (see design-system skill): `:root` variables and BEM-like classes from [style.css](style.css). No Tailwind or other utility framework in this repo unless the project scope changes.

## When in doubt

- Prefer native browser APIs and semantic HTML.
- Add behavior in script.js only if it fits the existing style; otherwise suggest a separate script or page for the feature.
