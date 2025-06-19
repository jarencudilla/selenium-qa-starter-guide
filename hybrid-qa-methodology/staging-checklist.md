# Staging Sanity Checklist

Minimal, not lazy. Covers what can still explode _after_ merge.

| Check | Owner | Notes |
|-------|-------|-------|
| App boots w/ no fatal logs | QA | Tail for 60s post‑deploy |
| Core workflow (happy path) | QA | Smoke via Playwright |
| Critical APIs respond < 400 ms | QA | Postman monitor |
| DB migrations complete | DevOps | Rollback plan in place |
| Feature toggles correct | QA | Flags match release notes |
| Error monitoring clean | DevOps | Sentry / Datadog alerts |
| Accessibility spot‑check | QA | Axe‑core quick run |
| Cross‑browser spot‑check | QA | Latest Chrome + Firefox |

**If any cell turns red, release pauses.**
