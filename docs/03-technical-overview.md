# Technical Overview

## Architecture Snapshot

- **Application type:** Static multi-page website
- **Core stack:** HTML, CSS, vanilla JavaScript
- **Primary assets:** `*.html`, `style.css`, `script.js`, image/media files

## Structure

- Marketing and navigation pages:
  - `index.html`
  - `services.html`
  - `about.html`
  - `contact.html`
- Work and case study pages:
  - `portfolio.html`
  - `case-study*.html` variants
- Shared frontend resources:
  - `style.css` (global design system + component styles)
  - `script.js` (navigation, reveal behavior, form handling)

## Styling System

- CSS custom properties define color, typography, spacing, radius, and shadows.
- Global classes establish layout primitives (`container`, `section`, display scales).
- Interaction and visual patterns are class-driven (reveal, nav states, button variants).

## JavaScript Behavior

- Active navigation state based on current path.
- Mobile menu open/close and accessibility attribute updates (`aria-expanded`).
- Scroll reveal via `IntersectionObserver` with fallback for unsupported environments.
- Contact form uses a `mailto:` fallback flow.

## Performance and Quality Notes

- Keep JS lightweight and avoid heavy runtime dependencies.
- Prefer compressed/optimized image assets for hero and case studies.
- Maintain semantic HTML and alt text discipline for accessibility.
- Verify responsive behavior across key breakpoints before release.

## Technical Debt Log

| Area | Debt Item | Impact | Priority | Owner | Status |
|---|---|---|---|---|---|
| Contact flow | `mailto:` fallback has limited tracking/control | Medium | High | Dev owner | Open |
| Asset pipeline | No automated image optimization step | Medium | Medium | Dev owner | Open |
| QA automation | No automated test suite for UI regressions | Medium | Medium | Dev owner | Open |

## Deployment Notes

- Hosting target: static hosting/CDN compatible platform.
- Release unit: updated static files and assets.
- Rollback strategy: redeploy previous stable file bundle.

