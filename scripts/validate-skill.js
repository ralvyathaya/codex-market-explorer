#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const skillName = 'market-research-sprint';
const skillDir = path.join(root, 'skills', skillName);
const skillFile = path.join(skillDir, 'SKILL.md');

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

function read(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    fail(`Missing file: ${path.relative(root, filePath)}`);
  }
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) fail('SKILL.md must start with YAML frontmatter.');

  const frontmatter = {};
  for (const rawLine of match[1].split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) fail(`Unsupported frontmatter line: ${rawLine}`);
    frontmatter[pair[1]] = pair[2].replace(/^["']|["']$/g, '');
  }
  return frontmatter;
}

const requiredFiles = [
  'SKILL.md',
  'LICENSE.txt',
  'agents/openai.yaml',
  'references/research-workflow.md',
  'references/query-patterns.md',
  'references/offer-and-landing.md'
];

for (const file of requiredFiles) {
  const fullPath = path.join(skillDir, ...file.split('/'));
  if (!fs.existsSync(fullPath)) fail(`Missing ${file}`);
}

const skillContent = read(skillFile);
const frontmatter = parseFrontmatter(skillContent);
const allowedKeys = new Set(['name', 'description', 'license', 'allowed-tools', 'metadata']);

for (const key of Object.keys(frontmatter)) {
  if (!allowedKeys.has(key)) fail(`Unexpected frontmatter key: ${key}`);
}

if (frontmatter.name !== skillName) {
  fail(`Expected name "${skillName}", found "${frontmatter.name || ''}"`);
}

if (!/^[a-z0-9-]+$/.test(frontmatter.name)) {
  fail('Skill name must be lowercase hyphen-case.');
}

if (!frontmatter.description || frontmatter.description.length > 1024) {
  fail('Description must exist and be 1024 characters or fewer.');
}

if (/[<>]/.test(frontmatter.description)) {
  fail('Description must not contain angle brackets.');
}

const openaiYaml = read(path.join(skillDir, 'agents', 'openai.yaml'));
if (!openaiYaml.includes(`$${skillName}`)) {
  fail('agents/openai.yaml default_prompt should mention the skill invocation.');
}

const allSkillText = requiredFiles
  .map((file) => read(path.join(skillDir, ...file.split('/'))))
  .join('\n');

for (const forbidden of ['TODO', '[TODO]']) {
  if (allSkillText.includes(forbidden)) {
    fail(`Found unfinished placeholder: ${forbidden}`);
  }
}

console.log(`${skillName} skill validation passed.`);
