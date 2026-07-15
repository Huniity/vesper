---
description: Work a BACKLOG task end-to-end (plan → implement → verify → tick)
argument-hint: <task-id, e.g. E2.T5>
---
Work BACKLOG task $ARGUMENTS.
1. Read `docs/SESSION.md` for current state. Open `docs/BACKLOG.md` at $ARGUMENTS: read the task, its *why*, subtasks, and the epic's acceptance criteria.
2. Restate scope + acceptance criteria in ≤3 lines. If anything conflicts with the codebase or `docs/PROJECT.md`, stop and ask before coding.
3. Plan briefly: files to touch, tests to add. Use plan mode for multi-file changes.
4. Implement, following the path rules. Tests are named for behavior, not implementation.
5. Verify: run the relevant `pnpm test` / `pnpm typecheck`. Show real output.
6. Tick BACKLOG checkboxes ONLY for items actually verified. Leave the rest unticked.
7. Summarize done / not-done / follow-ups and propose a Conventional Commit message. Do not commit unless I say so.
