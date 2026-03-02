---
name: gatsby-development-best-practices
description: Applies Gatsby, TypeScript, and React best practices for structure, GraphQL, images, and deployment. Use when building or refactoring a Gatsby site or when considering Gatsby for the project.
---

# Gatsby Development Best Practices

Source: [cursor.directory/gatsby-development-best-practices](https://cursor.directory/gatsby-development-best-practices) by Nathan Brachotte. Apply when working with Gatsby.

## Code Style and Structure

- Write concise, technical TypeScript; use functional, declarative patterns; avoid classes.
- Prefer iteration and modularization over duplication.
- Use descriptive names with auxiliary verbs (e.g. isLoaded, hasError).
- Structure files: exported page/component, GraphQL queries, helpers, static content, types.

## Naming and TypeScript

- Prefer named exports for components and utilities.
- Prefix GraphQL query files with `use` (e.g. useSiteMetadata.ts).
- Use TypeScript throughout; prefer interfaces over types; avoid enums (use objects/maps); avoid `any`/`unknown` and unnecessary `as`/`!`.

## Syntax and Formatting

- Use the `function` keyword for pure functions.
- Use concise conditionals; keep JSX minimal and readable.

## UI and Styling

- Use Tailwind for utility-based styling; use a mobile-first approach.

## Gatsby Best Practices

- Use `useStaticQuery` for build-time GraphQL data.
- Use `gatsby-node.js` for programmatic page creation from data.
- Use Gatsby’s `Link` component for internal navigation (preloading).
- Put non-programmatic pages in `src/pages/`.
- Optimize images with gatsby-plugin-image and gatsby-transformer-sharp.
- Use environment variables for sensitive data (gatsby-config.js).
- Use gatsby-browser.js and gatsby-ssr.js for browser/SSR-specific APIs.
- Use caching (gatsby-plugin-offline, gatsby-plugin-cache) as needed.

Refer to official Gatsby documentation for data fetching, GraphQL, and build optimization.
