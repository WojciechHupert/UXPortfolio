---
name: ui-ux-design-best-practices
description: Applies UI/UX design principles for software development including visual hierarchy, interaction design, accessibility, performance, and responsive patterns. Use when designing or implementing UI, reviewing UX, or discussing design decisions.
---

# UI/UX Design Best Practices

Source: [cursor.directory/ui-ux-design-best-practices](https://cursor.directory/ui-ux-design-best-practices) by Bence Csernak. Apply these principles when designing or implementing interface and experience.

## Visual Design

- Establish a clear visual hierarchy to guide attention.
- Use a cohesive color palette (align with brand guidelines when provided).
- Use typography for readability and emphasis.
- Maintain sufficient contrast for legibility (WCAG 2.1 AA).
- Keep a consistent style across the application.

## Interaction Design

- Create intuitive navigation patterns.
- Use familiar UI components to reduce cognitive load.
- Provide clear calls-to-action.
- Implement responsive design for cross-device compatibility.
- Use animations sparingly to support, not distract.

## Accessibility

- Follow WCAG guidelines.
- Use semantic HTML for screen readers.
- Provide alternative text for images and non-text content.
- Ensure keyboard navigability for all interactive elements.
- Test with assistive technologies when possible.

## Performance

- Optimize images and assets for fast load.
- Lazy-load non-critical resources.
- Use code splitting to improve initial load where applicable.
- Monitor Core Web Vitals (LCP, FID, CLS).

## User Feedback

- Give clear feedback for user actions.
- Use loading indicators for async operations.
- Provide clear error messages and recovery options.
- Use analytics to understand behavior and pain points.

## Information Architecture

- Organize content logically.
- Use clear labeling and categorization in navigation.
- Implement search when content volume justifies it.
- Use a sitemap to visualize structure.

## Mobile-First and Responsive

- Design for mobile first, then scale up.
- Use touch-friendly targets (min 44x44px).
- Consider thumb zones for primary actions.
- Use relative units (%, em, rem); use CSS Grid and Flexbox.
- Use breakpoints based on content needs; test across devices.
- Use responsive images (srcset, sizes); lazy-load images/video.
- Use relative units for typography; ensure readable line height and letter-spacing on small screens.

## Consistency

- Use and extend the design system (see project design-system skill).
- Use consistent terminology and positioning of recurring elements.
- Keep visual consistency across sections.

## Testing and Iteration

- Use A/B testing for critical design decisions when possible.
- Use heatmaps and session recordings to analyze behavior.
- Gather and incorporate user feedback.
- Iterate based on data and feedback.

## Documentation

- Maintain a style guide; document design patterns and component usage.
- Create user-flow diagrams for complex flows.
- Keep design assets organized and accessible.

## Forms and Navigation

- Design forms that adapt to screen size; use appropriate input types; use inline validation and clear errors.
- Use mobile-friendly navigation (e.g. hamburger); ensure keyboard and screen reader access; consider sticky header for access.

Stay aligned with WCAG and current responsive and UI/UX best practices.
