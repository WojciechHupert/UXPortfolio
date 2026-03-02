---
name: docs-updates
description: Keeps Shape Seeds portfolio documentation in sync when scope, structure, or decisions change. Use when scope or deliverables change, when adding/removing pages, when updating tech or deployment, or when the user asks to update project docs.
---

# Docs Updates

When the project’s scope, structure, or decisions change, update the relevant doc so the [docs/](docs/) folder stays accurate.

## Which doc to update

| Change type | Document | What to update |
|-------------|----------|----------------|
| Scope, deliverables, milestones | [docs/01-project-scope.md](docs/01-project-scope.md) | In Scope, Out of Scope, Milestones, or Scope Changes table |
| Technical structure, case study list, deployment, technical debt | [docs/03-technical-overview.md](docs/03-technical-overview.md) | Structure, Case study URLs, Deployment Notes, or Technical Debt Log |
| Any meaningful change (copy, structure, features) | [docs/04-change-log.md](docs/04-change-log.md) | Add one row: Date \| Area \| Change \| Why \| Impact \| Owner |
| Significant decisions (hosting, tooling, approach) | [docs/05-decision-log.md](docs/05-decision-log.md) | Use existing decision table format if present |

## Format rules

- **Dates:** YYYY-MM-DD
- **Change log:** Keep entries short and outcome-oriented (see existing rows in [docs/04-change-log.md](docs/04-change-log.md))
- **Tables:** Keep the same column headers and structure as in each file; add rows, do not remove or rename columns

## When in doubt

- Small copy or style tweaks: consider a brief change-log entry if it affects “what we ship.”
- New page or case study: update [docs/03-technical-overview.md](docs/03-technical-overview.md) case study list (and scope if it changes deliverables).
- Big decision (e.g. hosting, stack): update [docs/05-decision-log.md](docs/05-decision-log.md) and optionally [docs/04-change-log.md](docs/04-change-log.md).
