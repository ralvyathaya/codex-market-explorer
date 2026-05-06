---
name: market-research-sprint
description: Original market research workflow for discovering niches, extracting customer pain points from Reddit/community data, finding market gaps, shaping offer concepts, and drafting landing page briefs or builder prompts. Use when Codex is asked to research a market, explore Health/Wealth/Relationships niches, analyze pasted comments or search results, identify customer language and unmet needs, rank business opportunities, or create conversion-oriented offer/landing-page assets from research.
---

# Market Research Sprint

## Overview

Use this skill to run a practical market research sprint from rough market idea to evidence-backed offer direction. Preserve what is evidence, label what is inference, and avoid presenting invented quotes, fake market data, or generic startup advice as research.

Match the user's language in final outputs. Keep this skill's internal reasoning and structure in English unless the user asks otherwise.

## Workflow

Choose the smallest workflow that answers the user:

1. **Market map**: use when the user wants ideas, categories, niches, or a focused market tree.
2. **Source query pack**: use when the user needs Reddit/community/web search queries before data collection.
3. **Pain-point extraction**: use when the user provides comments, reviews, transcripts, links, or search results.
4. **Gap and offer generation**: use when pain points or a market segment are known and the user wants business ideas.
5. **Landing-page brief**: use when the user wants page copy, a builder prompt, or a conversion brief from research.
6. **Full sprint**: use when the user wants market research end-to-end. Run the steps above in order, pausing only when required evidence is missing.

Read only the reference file needed for the current task:

- `references/research-workflow.md`: intake, market maps, pain extraction, ranking, evidence rules.
- `references/query-patterns.md`: Reddit, forum, review, and web search query patterns.
- `references/offer-and-landing.md`: opportunity generation, offer shaping, and landing-page brief formats.

## Ground Rules

- Do not quote users unless the text was provided by the user or retrieved from a visible source.
- Separate **Evidence**, **Inference**, and **Recommendation** when research quality matters.
- If using live web, cite sources and dates when available. If browsing is unavailable, provide query packs and ask for pasted source data.
- For Reddit/community analysis, prioritize first-person pain, attempted solutions, workarounds, tradeoffs, emotional stakes, repeated complaints, and requests for alternatives.
- Ignore shallow complaints, hypotheticals, advice-only threads, and comments without a concrete experienced problem.
- Do not default to broad TAM claims. Rank opportunities by pain intensity, reachable audience, willingness to pay, differentiation, and speed to validate.
- For sensitive domains such as health, legal, finance, parenting, custody, or mental health, avoid professional claims and include appropriate uncertainty.

## Default Output

For full sprint requests, produce:

```markdown
**Verdict**
Strong / Promising but unproven / Weak / Pivot required

1-3 direct sentences on whether this market deserves more validation, what makes it attractive or risky, and the single biggest assumption.

**Research Snapshot**
- Market:
- Target customer:
- Geography/language:
- Evidence quality:
- Main assumption:
- Current data limitation:

**Market Map**
...

**Search Query Pack**
...

**Pain Point Scorecard**
| Pain | Evidence | Frequency | Intensity | Current workaround | Solvability |
|---|---|---:|---:|---|---:|

**Customer Language**
- "..."
- "..."

**Evidence vs Inference**
- Evidence:
- Inference:
- Unknowns:

**Market Gaps**
| Gap | Segment | Why it exists | Existing alternatives | Opportunity |
|---|---|---|---|---|

**Top 3 Offers**
| Offer | Buyer | Promise | Differentiator | MVP test | Risk |
|---|---|---|---|---|---|

**Landing Page Brief**
- Positioning:
- Above the fold:
- Pain section:
- Outcome section:
- Proof needed:
- CTA:

**Validation Plan**
1. Fastest manual test:
2. Success metric:
3. Kill criterion:
```

Shorten the output when the user asks for only one stage.

## Quality Bar

Before finalizing, check:

- The answer is specific to the chosen market, not a generic template.
- Every quote is traceable to provided or retrieved text.
- Assumptions are named plainly.
- Recommendations follow from pain evidence.
- The verdict is explicit and not hedged.
- The top opportunity can be tested manually before building software.
- Success metrics and kill criteria are concrete enough to run this week.
