---
name: pr-quality-gates
description: Enforces PR size limits, single-responsibility, required sections, and title conventions. Use when creating or reviewing pull requests, or when discussing PR standards.
---

# PR Quality Gates

Source: [cursor.directory/pr-quality-gates](https://cursor.directory/pr-quality-gates) by Buddy OS. Apply when creating or reviewing pull requests.

## PR Size Limits

| Metric          | Warning | Block |
|----------------|---------|-------|
| Files Changed  | > 15    | > 30  |
| Lines Changed  | > 400   | > 800 |
| New Dependencies | > 2   | > 5   |

If limits are exceeded, suggest splitting the PR.

## Single Responsibility

Each PR should do one thing:

- Add a feature, or
- Fix a bug, or
- Refactor code

Do not combine (e.g. add feature + refactor + unrelated fix) in one PR.

## Required PR Sections

Every PR must include:

```markdown
## Summary
[What this PR does in 1–2 sentences]

## Changes
- [ ] Change 1
- [ ] Change 2

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing done

## Screenshots
[For UI changes, before/after screenshots]
```

## Checks Before Opening a PR

- File count: `git diff --stat main | wc -l`
- Lines changed: `git diff --shortstat main`
- Run tests (e.g. `npm test`), lint (e.g. `npm run lint`), type check (e.g. `npm run type-check`) when available.

## PR Title Convention

`[TYPE] Brief description`

Types: `feat` (new feature), `fix` (bug fix), `refactor`, `docs`, `test`, `chore` (maintenance).

Example: `feat: add case study card component`
