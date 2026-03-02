---
name: commit-conventions
description: Enforces consistent commit message format aligned with PR titles. Use when writing or reviewing commit messages, or when the user asks for commit message format.
---

# Commit Conventions

Use the same type prefix as in the PR title convention (see pr-quality-gates skill) so commits and PRs tell a consistent story.

## Format

```
<TYPE>: Short subject line (imperative, ~50 chars)

Optional body for context or rationale. Wrap at 72 characters.
```

## Types

- **feat** — New feature or capability
- **fix** — Bug fix
- **refactor** — Code refactoring (no new feature, no bug fix)
- **docs** — Documentation only (e.g. README, project docs)
- **test** — Adding or updating tests
- **chore** — Maintenance (deps, config, tooling)

## Examples

- `feat: add case study card for Project X`
- `fix: correct active nav state on case-study pages`
- `docs: update technical overview with new case study URLs`
- `refactor: extract hero styles into design tokens`
- `chore: add release checklist skill`

## Optional scope

You may add a scope in parentheses: `feat(portfolio): add case study X`. Use when it helps (e.g. multiple areas in one repo). Keep the subject in imperative mood ("add" not "added").

## Alignment with PRs

- PR title convention uses the same types: `[TYPE] Brief description` or `TYPE: Brief description`.
- Commits in a PR can use the same type as the PR, or more specific commits (e.g. `fix: nav active state` inside a PR titled `fix: navigation and mobile menu`).
