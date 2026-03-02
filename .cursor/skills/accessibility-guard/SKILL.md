---
name: accessibility-guard
description: Enforces web accessibility (WCAG 2.2) patterns for interactive elements, images, forms, focus, modals, and keyboard. Use when implementing or reviewing UI for accessibility; treat violations as blocking issues.
---

# Accessibility Guard

Source: [cursor.directory/accessibility-guard](https://cursor.directory/accessibility-guard) by Buddy OS. Treat accessibility violations as blocking. Apply for both React and vanilla HTML/CSS/JS.

## Icon Buttons

- Required: accessible name (e.g. `aria-label="Close"` or visible text). Missing label is a violation.

## Custom Interactive Elements

- Non-button clickable elements (e.g. divs, spans) must be keyboard operable and have an appropriate role (e.g. `role="button"`) and `tabindex="0"` if needed, plus keyboard handler (Enter/Space). Toggle controls need `aria-pressed` or equivalent.

## Images

- Meaningful images: require descriptive `alt` text.
- Decorative images: use `alt=""` and optionally `aria-hidden="true"`.
- Missing `alt` on meaningful images is a violation.

## Form Fields

- Every input must have an associated `<label>` (by `for`/`id` or wrapping) or `aria-label`/`aria-labelledby`.

## Error Announcements

- Errors must be announced to screen readers (e.g. `aria-live` region, or associating error text with the field via `aria-describedby`).

## Focus Management

- Use a visible focus indicator (e.g. `:focus-visible { outline: 2px solid #0066cc; outline-offset: 2px; }`).
- Do not remove focus outline without providing a visible alternative (e.g. never `outline: none` without a replacement).

## Modal Focus Trap

- When a modal is open, trap focus inside it: focus first focusable element on open; on Tab from last element, move to first; support Escape to close. Query focusable elements: `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`.

## Keyboard Navigation

- Support Enter and Space for activation on custom controls.
- Support Escape to close overlays where appropriate.
- Ensure all interactive elements are reachable and operable by keyboard.

## WCAG 2.2 Highlights

- **2.5.8 Target Size:** Minimum 24×24 CSS pixels for touch targets.
- **2.4.12 Focus Not Obscured:** Focus indicator must not be hidden by other content.
- **3.3.7 Redundant Entry:** Avoid asking for the same information twice in the same process.

For vanilla HTML: use semantic elements (`button`, `a`, `input` with `<label>`), ensure `alt` on images, visible `:focus-visible` styles, and keyboard-operable custom widgets.
