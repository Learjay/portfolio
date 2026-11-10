# Database Safety

## Explicit approval for destructive changes

- Never create, modify, or execute a command, migration, script, application change, cleanup job, rollback, or reset that deletes, drops, truncates, overwrites, or otherwise destroys database data or objects without the user's explicit prior approval for that specific operation.
- A general request to change or fix the database is not approval for destructive work.
- If a requested change would be destructive, or its impact is uncertain, stop before making or running it. Explain the affected data or objects and the consequences, then wait for explicit approval.
- Backups, transactions, and reversible migrations are good safeguards, but do not replace the required approval.

## Safe defaults

- Read-only inspection is allowed.
- Prefer additive, data-preserving changes and preserve existing data by default.
- Do not assume an environment is disposable; verify the target environment before database operations.
