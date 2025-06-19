# Tool Stack

| Layer | Tool | Why We Use It |
|-------|------|---------------|
| **CI/CD** | GitHub Actions | Native, fast, extensible |
| **Env Deploy** | Terraform + AWS ECS | Repeatable infra per PR |
| **UI Tests** | Playwright | Fast, reliable, TypeScript‑native |
| **API Tests** | Postman CLI | CI‑friendly, reportable |
| **Static Analysis** | ESLint, Bandit | Fail fast on obvious issues |
| **Monitoring** | Sentry, Datadog | Alert on leaks & spikes |
| **Reporting** | TestRail | Traceability when auditors appear |

If a tool stops delivering signal, we replace it—no nostalgia.
