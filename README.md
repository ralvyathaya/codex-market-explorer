# market-research-sprint

`market-research-sprint` is a Codex skill for turning a rough market idea into customer research, pain points, offer ideas, validation plans, and landing page briefs.

It is useful for founders, indie hackers, marketers, creators, and builders who want to understand a market before building.

## What It Does

- Maps broad markets into categories, niches, and sub-niches.
- Creates Reddit, forum, review, and community search queries.
- Analyzes pasted Reddit comments, reviews, transcripts, surveys, or notes.
- Extracts customer pain points and exact customer language.
- Finds market gaps and ranks business opportunities.
- Turns research into offer ideas, validation tests, and landing page briefs.

## Requirements

- Codex with local skills support.
- Node.js 18 or newer.
- `npx`, which normally comes with Node.js.

Check your setup:

```powershell
node --version
npx --version
```

## Install

Run:

```powershell
npx --yes github:ralvyathaya/Market-explorer
```

Then restart Codex.

Use it by mentioning the skill in a prompt:

```text
Use $market-research-sprint to research AI tools for small business owners.
```

By default, the installer copies the skill to:

```text
~/.codex/skills/market-research-sprint
```

If `CODEX_HOME` is set, it uses:

```text
$CODEX_HOME/skills/market-research-sprint
```

## Install Options

```powershell
npx --yes github:ralvyathaya/Market-explorer where

npx --yes github:ralvyathaya/Market-explorer install --dry-run

npx --yes github:ralvyathaya/Market-explorer install --force

npx --yes github:ralvyathaya/Market-explorer install --dest "$env:USERPROFILE\.codex\skills"
```

These commands show the install path, preview the install, replace an existing copy, or install to a custom skills folder.

`--dest` can point to either a skills directory or the final `market-research-sprint` skill directory.

## How To Use

Start prompts with:

```text
Use $market-research-sprint to ...
```

The skill can use live web research when available, or it can analyze pasted data only. It will not invent customer quotes; quotes must come from pasted text or visible sources.

For best results, include:

- Market or niche.
- Target customer.
- Country/language, if relevant.
- Raw customer text, links, or notes.
- Desired output, such as market map, query pack, pain-point report, offer ideas, or landing page brief.

## Usage Examples

### Explore A Broad Market

```text
Use $market-research-sprint to explore the market for remote workers.
Map categories, niches, sub-niches, and the most promising customer segments.
```

```text
Use $market-research-sprint untuk explore market ibu muda yang ingin mulai bisnis online.
Breakdown kategori, niche, sub-niche, dan segmen yang paling menarik.
```

### Focus On One Niche

```text
Use $market-research-sprint to research meal planning for people with ADHD.
Focus only on this niche and find sub-segments, likely pain points, and current workarounds.
```

### Create Search Queries

```text
Use $market-research-sprint to create a search query pack for people struggling with custody transitions after divorce.
I want Reddit, forum, review, and competitor query ideas.
```

### Analyze Pasted Reddit Comments

```text
Use $market-research-sprint to analyze this Reddit data.
Extract pain points, exact customer quotes, frequency, intensity, current solutions, and potential market gaps.

[paste comments here]
```

### Find Market Gaps And Offer Ideas

```text
Use $market-research-sprint to turn these pain points into business opportunities.
Rank the top 3 offers by pain intensity, reachability, willingness to pay, differentiation, and speed to validate.

[paste pain-point notes here]
```

### Create A Landing Page Brief

```text
Use $market-research-sprint to create a landing page brief from this research.
Use customer language, Before-After-Bridge structure, objections, FAQ, and CTA ideas.

[paste research here]
```

### Create A Lovable.dev Prompt

```text
Use $market-research-sprint to create a Lovable.dev prompt from this customer research.
Include page structure, copy, design direction, form requirements, and CTA placement.

[paste research here]
```

### Run A Full Sprint

```text
Use $market-research-sprint to run a full market research sprint for solo accountants who want more clients.
Include market map, query pack, pain points, offer ideas, landing page brief, and validation next steps.
```

## Better Inputs

Good input:

```text
Market: divorced parents managing custody transitions
Audience: parents with children aged 5-12
Country: US
Goal: find painful problems and offer ideas
Data: pasted Reddit comments and forum posts
```

Weak input:

```text
Research parenting apps.
```

Weak input still works, but the output will be broader and more speculative.

You can ask for: `market map`, `search query pack`, `pain-point extraction`, `customer language`, `market gap analysis`, `top 3 offer ideas`, `MVP validation plan`, `landing page brief`, or `Lovable.dev prompt`.

## Troubleshooting

If `npx` is not recognized, install Node.js 18 or newer, then open a new terminal and run `node --version` and `npx --version`.

If the skill does not appear in Codex, restart Codex first. Then check the install path:

```powershell
npx --yes github:ralvyathaya/Market-explorer where
```

If needed, reinstall:

```powershell
npx --yes github:ralvyathaya/Market-explorer install --force
```

To avoid live web research, tell Codex:

```text
Use $market-research-sprint, but only analyze the pasted data. Do not browse.
```

## Development

Run checks:

```powershell
node .\bin\market-research-sprint.js --self-test
node .\scripts\validate-skill.js
```

Optional package checks:

```powershell
npm test
npm pack --dry-run
```

## License

MIT. The standalone skill folder also includes `LICENSE.txt` so the skill remains licensed when copied outside this repo.
