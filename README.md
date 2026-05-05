# market-research-sprint

`market-research-sprint` is an original Codex skill for practical market research: niche mapping, Reddit/community query generation, pain-point extraction, market gap discovery, offer shaping, and landing-page briefs.

It is packaged as a small `npx` CLI so other users can install the skill with one command. The installer has no runtime dependencies and does not use `postinstall`; users explicitly run it through `npx`.

## Install

Recommended install from GitHub:

```powershell
npx --yes github:ralvyathaya/Market-explorer
```

When a tagged version exists, install a specific tag:

```powershell
npx --yes github:ralvyathaya/Market-explorer#v0.1.0
```

If the package is ever published to the npm registry, this also works:

```powershell
npx --yes market-research-sprint@latest
```

The installer copies the skill to:

```text
$CODEX_HOME/skills/market-research-sprint
```

If `CODEX_HOME` is not set, it falls back to:

```text
~/.codex/skills/market-research-sprint
```

Restart Codex after installing so the skill is discovered.

## Installer Options

```powershell
npx --yes github:ralvyathaya/Market-explorer install --force
npx --yes github:ralvyathaya/Market-explorer install --dry-run
npx --yes github:ralvyathaya/Market-explorer install --dest "$env:USERPROFILE\.codex\skills"
npx --yes github:ralvyathaya/Market-explorer where
```

Use `--force` to replace an existing installed copy.

## Use

Example prompts:

```text
Use $market-research-sprint to research custody transitions and generate offer ideas.
Use $market-research-sprint on this Reddit data and extract pain points.
Use $market-research-sprint to create a landing page brief from these market notes.
```

The skill supports hybrid research: it can use live web sources when available, or work from manually pasted comments, reviews, transcripts, and notes.

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
