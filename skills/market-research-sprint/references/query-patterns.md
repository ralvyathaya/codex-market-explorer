# Query Patterns

Use these patterns to help the user gather evidence. Adapt language, geography, and community names to the market. Prefer several targeted queries over one huge query.

## Reddit Queries

Core pattern:

```text
"{market or pain}" site:reddit.com/r/ "{first-person phrase}"
```

Useful first-person phrases:

```text
"I tried"
"I hate"
"I wish"
"I can't"
"I struggle with"
"my biggest problem"
"my biggest fear"
"what worked for me"
"what I wish I knew"
"does anyone else"
"any alternatives to"
"worth it"
"too expensive"
"waste of money"
"finally found"
"I regret"
```

Pain-oriented patterns:

```text
"{market}" site:reddit.com "I struggle with"
"{market}" site:reddit.com "what I wish I knew"
"{market}" site:reddit.com "any alternatives to"
"{competitor or solution}" site:reddit.com "too expensive"
"{competitor or solution}" site:reddit.com "I hate"
"{job to be done}" site:reddit.com "does anyone else"
```

Subreddit pattern:

```text
site:reddit.com/r/{subreddit} "{pain phrase}" "{market term}"
```

## Community and Forum Queries

```text
"{market}" "forum" "I struggle"
"{market}" "community" "I wish"
"{market}" "support group" "I tried"
"{market}" "Facebook group" "recommend"
"{market}" "Discord" "problem"
```

## Review and Competitor Queries

```text
"{competitor}" reviews "too expensive"
"{competitor}" "alternatives"
"{competitor}" "complaints"
"{competitor}" "not worth it"
"{category}" "best" "for {specific segment}"
"{category}" "for {specific segment}" "reviews"
```

## Jobs-to-Be-Done Queries

Use when the product category is unclear:

```text
"how do I {job}" "{audience}"
"best way to {job}" "{constraint}"
"tool for {job}" "{audience}"
"template for {job}" "{market}"
"service that helps with {job}"
```

## Output Format

When asked for a query pack, return:

```markdown
**Search Strategy**
- Goal:
- Best sources:
- Exclusions:

**Queries**
| Source | Query | What it should reveal |
|---|---|---|

**Collection Instructions**
1. Open 5-10 promising threads or review pages.
2. Save first-person comments with context and links.
3. Keep positive and negative comments separate.
4. Paste raw comments back for pain-point extraction.
```
