# market-research-sprint

`market-research-sprint` is an original Codex skill for practical market research: niche mapping, Reddit/community query generation, pain-point extraction, market gap discovery, offer shaping, and landing-page briefs.

It is packaged as a small npm CLI so other users can install the skill with one command. The installer has no runtime dependencies and does not use `postinstall`; users explicitly run the installer through `npx` or `npm exec`.

## Install

After the package is published to npm:

```powershell
npx --yes market-research-sprint@latest
```

Equivalent npm command:

```powershell
npm exec --yes --package market-research-sprint@latest -- market-research-sprint install
```

Before npm publishing, users can install from the GitHub repo after the latest changes are pushed:

```powershell
npx --yes github:ralvyathaya/Market-explorer
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
npx --yes market-research-sprint@latest install --force
npx --yes market-research-sprint@latest install --dry-run
npx --yes market-research-sprint@latest install --dest "$env:USERPROFILE\.codex\skills"
npx --yes market-research-sprint@latest where
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

Run package checks:

```powershell
npm test
npm run pack:dry
```

Publish when ready:

```powershell
npm publish
```

The package name `market-research-sprint` was not present in the npm registry when checked on May 6, 2026. Check again before publishing.

## License

MIT. The standalone skill folder also includes `LICENSE.txt` so the skill remains licensed when copied outside this repo.
