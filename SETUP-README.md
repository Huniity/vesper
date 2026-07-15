# Vesper Claude Code kit — install (2 minutes)

1) Extract this folder's CONTENTS into your repo root (so `CLAUDE.md` and `.claude/` sit at the top level).
2) Move `_user-global/CLAUDE.md` → `~/.claude/CLAUDE.md` (merge if one exists), then delete `_user-global/`.
3) Add to `.gitignore`:
   CLAUDE.local.md
   .claude/settings.local.json
4) The Prettier-on-edit hook needs `jq` (`sudo apt install jq`). Don't want it? Delete the `hooks` block in `.claude/settings.json`.
5) First run: `claude` in repo root → `/memory` to confirm loaded files (root CLAUDE.md + 4 rules + your user file) → try `/task E1.T1`.

Notes
- Auto memory is ON by default — leave it. Browse/edit anytime via `/memory`.
- "Remember X" in chat → goes to auto memory. "Add this to CLAUDE.md" → goes to the file.
- Rules in `.claude/rules/` load only when Claude touches matching paths — that's why they're per-package.
- Path references in CLAUDE.md are backticked on purpose: `@docs/PROJECT.md` would import ~500 lines into every session.
- Monthly hygiene: run `/doctor` (v2.1.206+) and accept its CLAUDE.md trims.
