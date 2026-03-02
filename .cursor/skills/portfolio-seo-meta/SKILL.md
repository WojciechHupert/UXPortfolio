---
name: portfolio-seo-meta
description: Keeps SEO and meta tags consistent across the Shape Seeds UX portfolio. Use when adding or editing pages, creating case studies, or when the user asks about SEO or meta tags.
---

# Portfolio SEO and Meta

When adding or editing pages, ensure each page has proper discovery and semantics for search and sharing.

## Required per page

- **Title:** One `<title>` per page, unique and descriptive (e.g. "Work — Shape Seeds" or "Project Name — Shape Seeds"). Keep concise; include site/brand where helpful.
- **Description:** One `<meta name="description" content="...">` per page, unique and under ~160 characters. Summarize the page content; avoid duplicating the same text on every page.
- **Viewport:** Already in boilerplate (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`); do not remove.

## Semantic structure

- **One `<h1>` per page** — main page heading. Use `<h2>`, `<h3>` in logical order for sections.
- **Images:** Meaningful images must have descriptive `alt`; decorative images use `alt=""` and optionally `aria-hidden="true"` (see accessibility-guard skill).

## Optional (when you want richer sharing or discovery)

- **Open Graph:** For key pages (e.g. index, portfolio), optional `<meta property="og:title">`, `og:description`, `og:url`, `og:type="website">`. Use same or similar text as `<title>` and meta description.
- **Sitemap:** For larger sites, add a `sitemap.xml` listing main URLs (index, portfolio, services, about, contact, and key case studies) so crawlers can discover pages.

## Reference

- Existing pages (e.g. [index.html](index.html), [portfolio.html](portfolio.html), [case-study-1.html](case-study-1.html)) show the pattern: unique title and meta description in `<head>`.
- Align with add-page skill for new pages: include title and meta description in the head boilerplate.
