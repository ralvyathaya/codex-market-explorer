#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const skillName = 'market-research-sprint';
const packageRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(packageRoot, 'skills', skillName);

function usage() {
  return `
market-research-sprint

Install the ${skillName} Codex skill into your local skills directory.

Usage:
  npx --yes github:ralvyathaya/Market-explorer
  npx --yes github:ralvyathaya/Market-explorer install
  npx --yes github:ralvyathaya/Market-explorer install --force
  npx --yes github:ralvyathaya/Market-explorer install --dest <skills-dir-or-skill-dir>
  npx --yes github:ralvyathaya/Market-explorer where

  npx --yes market-research-sprint@latest install

Options:
  --codex-home <path>  Use a specific Codex home directory.
  --dest <path>        Install into a skills directory, or into a final skill directory.
  --dry-run            Print the planned action without copying files.
  --force              Replace an existing installed skill.
  --help               Show this help.
  --version            Show package version.
  --self-test          Verify the packaged skill files exist.

Default destination:
  CODEX_HOME/skills/${skillName}, or ~/.codex/skills/${skillName}
`.trim();
}

function packageVersion() {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8')
  );
  return packageJson.version;
}

function parseArgs(argv) {
  const options = {
    codexHome: null,
    command: 'install',
    dest: null,
    dryRun: false,
    force: false
  };

  const commands = new Set(['install', 'where']);
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (commands.has(arg)) {
      options.command = arg;
    } else if (arg === '--codex-home') {
      index += 1;
      if (!argv[index]) throw new Error('--codex-home requires a path.');
      options.codexHome = argv[index];
    } else if (arg === '--dest') {
      index += 1;
      if (!argv[index]) throw new Error('--dest requires a path.');
      options.dest = argv[index];
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--force') {
      options.force = true;
    } else if (arg === '--help' || arg === '-h') {
      options.command = 'help';
    } else if (arg === '--version' || arg === '-v') {
      options.command = 'version';
    } else if (arg === '--self-test') {
      options.command = 'self-test';
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function defaultCodexHome() {
  if (process.env.CODEX_HOME) {
    return path.resolve(process.env.CODEX_HOME);
  }

  const home = os.homedir();
  if (!home) {
    throw new Error('Cannot determine home directory. Set CODEX_HOME or pass --dest.');
  }

  return path.join(home, '.codex');
}

function resolveDestination(options) {
  if (options.dest) {
    const dest = path.resolve(options.dest);
    return path.basename(dest) === skillName ? dest : path.join(dest, skillName);
  }

  const codexHome = options.codexHome
    ? path.resolve(options.codexHome)
    : defaultCodexHome();
  return path.join(codexHome, 'skills', skillName);
}

function validatePackagedSkill() {
  const required = [
    path.join(sourceDir, 'SKILL.md'),
    path.join(sourceDir, 'agents', 'openai.yaml'),
    path.join(sourceDir, 'references', 'research-workflow.md'),
    path.join(sourceDir, 'references', 'query-patterns.md'),
    path.join(sourceDir, 'references', 'offer-and-landing.md'),
    path.join(sourceDir, 'LICENSE.txt')
  ];

  const missing = required.filter((filePath) => !fs.existsSync(filePath));
  if (missing.length > 0) {
    throw new Error(`Packaged skill is incomplete:\n${missing.join('\n')}`);
  }
}

function assertSafeDestination(dest) {
  if (path.basename(dest) !== skillName) {
    throw new Error(`Destination must resolve to a ${skillName} directory: ${dest}`);
  }

  const parent = path.dirname(dest);
  if (parent === dest || parent === path.dirname(parent)) {
    throw new Error(`Refusing unsafe destination: ${dest}`);
  }
}

function install(options) {
  validatePackagedSkill();

  const dest = resolveDestination(options);
  assertSafeDestination(dest);

  if (options.dryRun) {
    console.log(`Would install ${skillName}`);
    console.log(`From: ${sourceDir}`);
    console.log(`To:   ${dest}`);
    console.log(`Mode: ${fs.existsSync(dest) ? (options.force ? 'replace' : 'abort existing') : 'create'}`);
    return;
  }

  if (fs.existsSync(dest)) {
    if (!options.force) {
      throw new Error(
        `Skill already exists at ${dest}\n` +
          'Use --force to replace it, or --dest to choose another location.'
      );
    }
    fs.rmSync(dest, { recursive: true, force: true });
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(sourceDir, dest, { recursive: true });

  console.log(`Installed ${skillName} to:`);
  console.log(dest);
  console.log('');
  console.log('Restart Codex so the new skill is discovered.');
  console.log(`Invoke it with: $${skillName}`);
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.command === 'help') {
    console.log(usage());
    return;
  }

  if (options.command === 'version') {
    console.log(packageVersion());
    return;
  }

  if (options.command === 'self-test') {
    validatePackagedSkill();
    console.log(`${skillName} package self-test passed.`);
    return;
  }

  if (options.command === 'where') {
    console.log(resolveDestination(options));
    return;
  }

  install(options);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
