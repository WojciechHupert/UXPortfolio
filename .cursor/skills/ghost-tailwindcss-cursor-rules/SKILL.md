---
name: ghost-tailwindcss-cursor-rules
description: Guides Ghost CMS theming with Handlebars, Alpine.js, and Tailwind CSS including theme structure, routing, content API, and performance. Use when building or modifying Ghost themes or integrating Ghost with Tailwind.
---

# Ghost CMS with Tailwind CSS Cursor Rules

Source: [cursor.directory/ghost-tailwindcss-cursor-rules](https://cursor.directory/ghost-tailwindcss-cursor-rules) by ghostFam. Apply when working with Ghost themes and Tailwind.

## Key Principles

- Write concise, technical responses with accurate Ghost theme examples.
- Use Ghost’s content API and dynamic routing effectively.
- Prioritize performance and asset management.
- Use descriptive names and Ghost naming conventions.
- Organize files using Ghost’s theme structure.

## Ghost Theme Structure

- `assets/` — css/, js/, images/
- `partials/`
- `post.hbs`, `page.hbs`, `index.hbs`, `default.hbs`
- `package.json`

## Component Development

- Create `.hbs` files for Handlebars components.
- Use partial composition and reusability.
- Use Ghost helpers for data; use `{{content}}` and custom helpers appropriately.

## Routing and Templates

- Use Ghost’s template hierarchy.
- Use `routes.yaml` for custom routes; use dynamic routing and slug handling.
- Use `error.hbs` for 404; use collection templates for content organization.

## Content and API

- Use Ghost Content API for dynamic content; use tags and authors; use membership/subscription when needed.
- Use primary/secondary tags and custom taxonomies as needed.
- Use filters, pagination, and cache API responses where appropriate.

## Performance

- Minimize JS; use Alpine.js for dynamic UI.
- Defer non-critical JS; preload critical assets; lazy-load images and heavy content.
- Use Ghost image optimization and caching.

## SEO and Meta

- Use Ghost SEO features; set Open Graph and Twitter Card meta; use canonical URLs; add structured data when useful.

## Styling with Tailwind

- Integrate Tailwind with the Ghost theme build process.
- Use utility classes in templates; use responsive and theme utilities; extend theme when needed; avoid `@apply` in production.

## Testing and Accessibility

- Test themes with GScan; test membership/subscription flows.
- Use semantic HTML, ARIA where needed, keyboard support, and WCAG guidelines.

## Documentation

- Ghost: https://ghost.org/docs/
- Forum: https://forum.ghost.org/
- GitHub: https://github.com/TryGhost/Ghost
