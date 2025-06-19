# Risk‑Based Prioritization Guide

Full coverage is fantasy. We rank features by **blast radius**.

| Risk Tier | Definition | QA Depth |
|-----------|------------|----------|
| **Critical** | Outage kills revenue or data | Full suite + exploratory |
| **High** | User‑visible breakage, support spike | Smoke + targeted cases |
| **Medium** | Edge‑case annoyance | Basic functional check |
| **Low** | Cosmetic, low traffic | Visual scan only |

## How to Rate
1. **Impact** – How bad is failure?  
2. **Probability** – How likely is failure?  
3. **Recoverability** – How fast can we rollback/fix?  

Score 1–5 each, multiply. > 15 = Critical.
