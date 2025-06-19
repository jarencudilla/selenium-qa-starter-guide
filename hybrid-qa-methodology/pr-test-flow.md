# Pull‑Request Test Flow

**Goal:** Kill defects _before_ they hit staging.

```
Dev commits  ─▶  PR created
               ├─▶  CI: lint + unit tests
               └─▶  AWS deploys PR env  (pr-###.feature.app.com)
QA hits PR env ─▶  Manual + smoke automation
               ├─▶  PASS → code review
               └─▶  FAIL → dev rework
Code review    ─▶  Merge to `staging`
Staging sanity ─▶  Release candidate
```

## Step‑by‑Step

1. **Commit & Push**  
   - Feature branch name pattern: `feat/{ticket-id}-{slug}`  
   - Unit tests mandatory.

2. **Open PR**  
   - Template auto‑adds checkboxes for readiness.  
   - CI runs: linters, unit tests, SAST scan.

3. **AWS PR Environment**  
   - Terraform spins isolated infra.  
   - URL added as PR comment by GitHub Action.

4. **QA Branch Testing**  
   - Run Playwright/Cypress smoke suite.  
   - Manual exploratory on edge cases.  
   - Post **PASS/FAIL + context** in PR thread.

5. **Code Review**  
   - Senior dev reviews style, security, logic.  
   - **Merge** only after QA PASS **and** review approve.

6. **Staging Deployment**  
   - Auto‑deploy ± migrate DB.  
   - Notify QA via Slack + Jira webhook.

7. **Staging Sanity**  
   - Integration hotspots, shared data, UI regressions.  
   - Green light = tag `rc/{version}`.

## Rules of Engagement
- One PR = one test env. No cross‑contamination.
- All verdicts in PR—not Slack DM.
- Depth belongs in nightly suites, not PR smoke.
