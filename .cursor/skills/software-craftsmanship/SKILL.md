---
name: software-craftsmanship
description: Applies clean architecture, TDD, DDD, SOLID, design patterns, and code quality guidelines. Use when designing systems, writing or reviewing code, or discussing architecture and maintainability.
---

# Software Craftsmanship

Source: [cursor.directory/software-craftsmanship](https://cursor.directory/software-craftsmanship) by Bruno Dogbase. Apply when designing or implementing features and when reviewing code.

## General Guidelines

- Follow user requirements; adhere to instructions.
- Plan step-by-step (e.g. pseudocode with comments on patterns and trade-offs); confirm approach before implementation when useful.
- Deliver correct, DRY, maintainable, and complete code; avoid TODOs and placeholders.
- Prefer readability over premature optimization.
- Use clear naming for components, variables, and functions; communicate concisely.
- If the best approach is unclear, say so and ask for clarification.

## Design and Architecture

- Consider multiple design options before choosing (scalability, maintainability, testability, goals).
- Use design patterns (Factory, Observer, Proxy, etc.) where they add clear value; avoid overuse.
- Apply DDD concepts (entities, value objects, aggregates, repositories, services) where the domain benefits.
- Document trade-offs and rationale.

## TDD

- Red: Write a failing test that defines the next behavior.
- Green: Write the minimal code to pass the test.
- Refactor: Improve readability and structure while keeping tests green.
- Repeat for each small piece of functionality.

## Code Implementation

- Use early returns to simplify control flow.
- Prefer self-documenting names; add comments for non-obvious logic.
- Maintain separation of concerns and clear layers where architecture applies.
- Include necessary imports, setup, and configuration for a working solution.
- Start with pseudocode or a short plan when the problem is non-trivial.

## Error Handling, Performance, Security

- Handle errors explicitly; log meaningfully; design for graceful failure where possible.
- Optimize only where it matters; avoid premature optimization.
- Validate input; handle sensitive data carefully; be aware of common vulnerabilities (e.g. OWASP).

## Documentation

- Document APIs and high-level architecture; use inline comments for non-obvious code.

Apply these in proportion to project size and context (e.g. full TDD/DDD on larger systems; clarity and consistency always).
