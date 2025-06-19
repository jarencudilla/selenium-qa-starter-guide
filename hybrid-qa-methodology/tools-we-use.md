# Tool Stack

| Layer | Tool | Why We Use It |
|-------|------|---------------|
| **CI/CD** | GitHub Actions | Native, fast, extensible |
| **Env Deploy** | AWS + CI Scripted PR Envs | PR environments auto-generated from GitHub workflows |
| **UI Tests** | Playwright | Fast, reliable, CI-integrated |
| **API Tests** | Postman CLI | Easy to maintain, runs well in pipelines |
| **Static Analysis** | ESLint | Basic code hygiene (frontend/backend) |
| **Project Tracking** | Taiga | Clean Agile board flow with labels and epics |
| **Monitoring** | _Planned: Sentry_ | Used in other stacks, pending implementation here |

---

If a tool stops delivering signal, we replace it—no nostalgia.
