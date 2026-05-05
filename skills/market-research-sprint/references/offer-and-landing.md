# Offer and Landing Workflow

## Opportunity Generation

Start from known pain points. If no pain evidence exists, generate hypotheses but mark them as unvalidated.

Apply these lenses:

- **Segment wedge**: solve the pain for a specific underserved group before going broad.
- **Simplification**: remove complexity from existing solutions and focus on the core job.
- **Premium/service layer**: add expert help, done-with-you support, accountability, or trust.
- **Business model shift**: subscription, one-time kit, concierge service, marketplace, community, audit, course, template, or hybrid.
- **Distribution wedge**: community, SEO, partnerships, creators, professional referrals, integrations, local channels.
- **New paradigm**: new tech, behavior shift, regulation, data availability, or cultural change that makes a different approach viable.

For each concept, include:

- Name.
- Target segment.
- Pain addressed.
- Core promise.
- Mechanism: why this works differently.
- MVP test: smallest manual proof before building.
- Business model.
- Differentiator.
- Risks.

## Opportunity Ranking

Rank the top 3 using:

| Factor | Meaning |
|---|---|
| Pain severity | The problem is urgent, costly, or emotionally loaded. |
| Reachability | The audience gathers in findable places. |
| Payment likelihood | Users already spend money or time solving this. |
| Differentiation | The concept has a clear wedge beyond generic quality. |
| Build feasibility | A small version can be tested quickly. |
| Category potential | It could become the obvious choice for a narrow niche. |

Be brutally honest. If every idea is weak, say so and propose a sharper pivot.

## Offer Brief

Use this structure:

```markdown
**Offer**
- Name:
- Audience:
- Problem:
- Promise:
- Mechanism:
- Format:
- Price hypothesis:
- Primary acquisition channel:

**Why This Segment**
- Evidence:
- Inference:

**MVP Test**
- Build:
- Do manually:
- Success metric:
- Kill criterion:
```

## Landing Page Brief

Create a builder-agnostic landing page brief by default. Only create a Lovable.dev, Framer, Webflow, or other tool-specific prompt when the user asks for that tool.

Use a Before-After-Bridge structure:

1. Above the fold: product, audience, urgent problem, differentiated promise, primary CTA.
2. Current pain: make the audience feel understood using verified customer language.
3. Desired outcome: show the new reality and emotional payoff.
4. Bridge/product: explain the mechanism and why it is credible.
5. How it works: 3 steps maximum unless the product truly needs more.
6. Proof: testimonials, quotes, case snippets, waitlist signal, or transparent "early access" framing.
7. Pricing or next step: trial, consultation, waitlist, audit, preorder, or interview.
8. FAQ: objections from the research.
9. Final CTA.

Do not invent testimonials, founder credentials, expert endorsements, medical/legal claims, or fake integrations. Use placeholders when proof is missing.

## Builder Prompt Format

When asked for a builder prompt, return one copy-paste block:

```markdown
Create a conversion-focused landing page for [offer name].

Audience:
[specific audience]

Positioning:
[one-sentence positioning]

Use this structure:
1. Above the fold...
2. Current pain...
3. Desired outcome...
4. Product bridge...
5. How it works...
6. Proof...
7. FAQ...
8. Final CTA...

Copy requirements:
- Use these verified phrases where appropriate: [...]
- Do not invent testimonials or claims.
- Keep tone: [tone].

Design requirements:
- Mobile-first.
- Clear typography.
- High contrast.
- CTA visible above the fold and near final section.
- Visual style fitted to the market, not generic SaaS decoration.

Form/integration requirements:
[email capture, calendar booking, checkout, waitlist, or none]
```
