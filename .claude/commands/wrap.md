---
description: End-of-session handoff — update SESSION.md, sync BACKLOG, propose commits
---
Wrap up this session.
1. Update `docs/SESSION.md`: Now / Next actions (ordered) / Blockers / Recent decisions. Mirror durable decisions into `docs/DECISIONS.md` (append-only). Add one dated line to the Session log.
2. Verify `docs/BACKLOG.md` checkboxes match reality — untick anything claimed but unverified.
3. If code changed: run `pnpm typecheck` and `pnpm test`; record failures honestly in SESSION.md (no optimistic summaries).
4. Propose Conventional Commit message(s) for uncommitted work; list untracked files.
5. Close with a 3-line handoff: where we are, the first action next session, and anything we're waiting on (Apple review, testers, etc.).
