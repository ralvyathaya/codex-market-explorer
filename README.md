# market-research-sprint

`market-research-sprint` is an original Codex skill for practical market research: niche mapping, Reddit/community query generation, pain-point extraction, market gap discovery, offer shaping, and landing-page briefs.

The workflow was inspired by a private research prompt PDF, but the implementation is rewritten for public use and does not include the source PDF or third-party branding.

## Install

Copy the skill folder into your Codex skills directory:

```powershell
Copy-Item -Recurse -Force .\skills\market-research-sprint "$env:USERPROFILE\.codex\skills\market-research-sprint"
```

Restart Codex after installing so the skill is discovered.

## Use

Example prompts:

```text
Use $market-research-sprint to research custody transitions and generate offer ideas.
Use $market-research-sprint on this Reddit data and extract pain points.
Use $market-research-sprint to create a landing page brief from these market notes.
```

The skill supports hybrid research: it can use live web sources when available, or work from manually pasted comments, reviews, transcripts, and notes.

## License

MIT
