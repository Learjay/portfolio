# Development Workflow

## Before implementation

1. Read the root `AGENTS.md` and relevant documents in `docs/`.
2. Inspect the current implementation and identify the smallest set of affected files.
3. Preserve existing behavior and avoid unrelated changes.

## During implementation

- Follow the source boundaries described in `ARCHITECTURE.md`.
- Keep changes typed, accessible, and responsive.
- Reuse existing patterns before adding dependencies or abstractions.
- Update documentation when project setup or behavior changes.

## Before reporting completion

1. Review the modified files and final diff.
2. Run relevant checks; for application code, run `npm run build`.
3. Verify user-facing behavior where practical.
4. State what changed, what checks ran, and any remaining limitations accurately.

## Git hygiene

- Keep changes focused and commits descriptive.
- Never overwrite unrelated user changes.
- Do not commit generated output, secrets, or local environment files.
