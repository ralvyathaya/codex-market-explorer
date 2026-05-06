# market-research-sprint

`market-research-sprint` is a Codex skill for turning a rough market idea into practical customer research, pain points, offer ideas, and landing page briefs.

It is meant for founders, indie hackers, marketers, creators, and builders who want to understand a market before building a product.

You can use it to:

- Break a broad market into categories, niches, and sub-niches.
- Create search queries for Reddit, forums, reviews, and communities.
- Analyze pasted Reddit comments, reviews, transcripts, or notes.
- Extract customer pain points using real customer language.
- Find market gaps and rank business opportunities.
- Turn research into offer ideas and landing page briefs.

The skill is installed with `npx`. You do not need to publish anything to npm or log in to npm.

## Requirements

You need:

- Codex with local skills support.
- Node.js 18 or newer.
- `npx`, which normally comes with Node.js.
- Access to this GitHub repository.

Check Node and npx:

```powershell
node --version
npx --version
```

If those commands work, you can install the skill.

## Quick Install

Run this command:

```powershell
npx --yes github:ralvyathaya/Market-explorer
```

Then restart Codex.

After restart, use the skill by mentioning it in a prompt:

```text
Use $market-research-sprint to research AI tools for small business owners.
```

## What The Installer Does

The installer copies this folder:

```text
skills/market-research-sprint
```

Into your local Codex skills directory:

```text
$CODEX_HOME/skills/market-research-sprint
```

If `CODEX_HOME` is not set, it uses:

```text
~/.codex/skills/market-research-sprint
```

On Windows, that is usually:

```text
C:\Users\YOUR_NAME\.codex\skills\market-research-sprint
```

## Check Where It Will Install

Before installing, you can check the destination:

```powershell
npx --yes github:ralvyathaya/Market-explorer where
```

To preview the install without copying files:

```powershell
npx --yes github:ralvyathaya/Market-explorer install --dry-run
```

## Update Or Reinstall

If you already installed the skill and want to replace it with the latest version:

```powershell
npx --yes github:ralvyathaya/Market-explorer install --force
```

Restart Codex after updating.

## Install To A Custom Location

Use `--dest` if your skills folder is somewhere else:

```powershell
npx --yes github:ralvyathaya/Market-explorer install --dest "$env:USERPROFILE\.codex\skills"
```

`--dest` can point to either:

- A skills directory, such as `C:\Users\you\.codex\skills`.
- The final skill directory, such as `C:\Users\you\.codex\skills\market-research-sprint`.

## How To Use

After installing and restarting Codex, start prompts with:

```text
Use $market-research-sprint to ...
```

The skill can work in two ways:

- **With live research**: Codex can search the web if the environment supports browsing.
- **With pasted data**: You paste Reddit comments, reviews, transcripts, survey answers, or notes, and the skill analyzes them.

For best results, give it:

- The market or niche.
- The target customer.
- The country or language, if relevant.
- Any raw customer text you already have.
- The output you want: market map, query pack, pain-point report, offer ideas, or landing page brief.

## Example Prompts

### 1. Explore A Broad Market

Use this when you only have a broad area and need niche ideas.

```text
Use $market-research-sprint to explore the market for remote workers.
Map categories, niches, sub-niches, and the most promising customer segments.
```

### 2. Focus On One Niche

Use this when you already know the niche and want deeper segmentation.

```text
Use $market-research-sprint to research meal planning for people with ADHD.
Focus only on this niche and find sub-segments, likely pain points, and current workarounds.
```

### 3. Create Reddit And Forum Search Queries

Use this before collecting raw customer data.

```text
Use $market-research-sprint to create a search query pack for people struggling with custody transitions after divorce.
I want Reddit, forum, review, and competitor query ideas.
```

The output should help you find threads where people describe real problems in their own words.

### 4. Analyze Pasted Reddit Comments

Use this after collecting comments manually.

```text
Use $market-research-sprint to analyze this Reddit data.
Extract pain points, exact customer quotes, frequency, intensity, current solutions, and potential market gaps.

[paste comments here]
```

Important: the skill will not invent quotes. It only quotes text that you paste or that Codex can see from a source.

### 5. Find Market Gaps And Offer Ideas

Use this when you already have pain points or market notes.

```text
Use $market-research-sprint to turn these pain points into business opportunities.
Rank the top 3 offers by pain intensity, reachability, willingness to pay, differentiation, and speed to validate.

[paste pain-point notes here]
```

### 6. Create A Landing Page Brief

Use this when you want a conversion-focused page structure from research.

```text
Use $market-research-sprint to create a landing page brief from this research.
Use customer language, Before-After-Bridge structure, objections, FAQ, and CTA ideas.

[paste research here]
```

### 7. Create A Lovable Prompt

By default, the skill creates a builder-agnostic landing page brief. If you specifically want Lovable, ask for it:

```text
Use $market-research-sprint to create a Lovable.dev prompt from this customer research.
The prompt should include page structure, copy, design direction, form requirements, and CTA placement.

[paste research here]
```

### 8. Run A Full Sprint

Use this when you want the whole workflow.

```text
Use $market-research-sprint to run a full market research sprint for solo accountants who want more clients.
Include market map, query pack, likely pain points, offer ideas, landing page brief, and validation next steps.
```

## Good Input vs Weak Input

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

## Output You Can Ask For

You can ask for:

- `market map`
- `search query pack`
- `pain-point extraction`
- `customer language`
- `market gap analysis`
- `top 3 offer ideas`
- `MVP validation plan`
- `landing page brief`
- `Lovable.dev prompt`

## Troubleshooting

### `npx` is not recognized

Install Node.js 18 or newer, then open a new terminal and run:

```powershell
node --version
npx --version
```

### The skill does not appear in Codex

Try these steps:

1. Restart Codex.
2. Run `where` to check the install path:

```powershell
npx --yes github:ralvyathaya/Market-explorer where
```

3. Reinstall with `--force`:

```powershell
npx --yes github:ralvyathaya/Market-explorer install --force
```

### Existing skill already installed

Use:

```powershell
npx --yes github:ralvyathaya/Market-explorer install --force
```

### You do not want live web research

Tell Codex:

```text
Use $market-research-sprint, but only analyze the pasted data. Do not browse.
```

## Development

Run checks without relying on npm scripts:

```powershell
node .\bin\market-research-sprint.js --self-test
node .\scripts\validate-skill.js
```

Optional package checks if npm is working locally:

```powershell
npm test
npm pack --dry-run
```

## License

MIT. The standalone skill folder also includes `LICENSE.txt` so the skill remains licensed when copied outside this repo.
