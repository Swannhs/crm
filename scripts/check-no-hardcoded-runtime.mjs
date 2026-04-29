import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const TARGET_DIRS = [
  'frontend/micro-app/src',
  'services/api-router-service/src',
  'services/booking-service/src',
  'gateway/nginx',
  'infra/compose/dev',
  'infra/compose/prod',
];

const ALLOWED_EXT = new Set(['.ts', '.tsx', '.js', '.mjs', '.cjs', '.yml', '.yaml', '.conf']);
const SKIP_PARTS = ['node_modules', 'dist', 'coverage', '__tests__', '/test/', '/tests/', '/docs/'];

const forbiddenLiterals = [
  'owner@example.com',
  'user-123',
];

const hardcodedServiceUrlPattern = /http:\/\/[a-z0-9-]+-service:\d+/gi;

function shouldSkip(filePath) {
  return SKIP_PARTS.some((part) => filePath.includes(part));
}

function collectFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (shouldSkip(full)) continue;
    if (entry.isDirectory()) {
      collectFiles(full, out);
      continue;
    }
    if (!ALLOWED_EXT.has(path.extname(entry.name))) continue;
    out.push(full);
  }
  return out;
}

const findings = [];
const files = TARGET_DIRS.flatMap((dir) => collectFiles(path.join(ROOT, dir)));

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(ROOT, file);
  const lines = content.split(/\r?\n/);

  lines.forEach((line, idx) => {
    for (const literal of forbiddenLiterals) {
      if (line.includes(literal)) {
        findings.push(`${rel}:${idx + 1} contains forbidden literal "${literal}"`);
      }
    }
  });

  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    const matches = content.match(hardcodedServiceUrlPattern) || [];
    for (const m of matches) {
      findings.push(`${rel} contains hardcoded internal service URL "${m}"`);
    }
  }
}

if (findings.length > 0) {
  console.error('Hardcoded runtime check failed:\n' + findings.map((f) => `- ${f}`).join('\n'));
  process.exit(1);
}

console.log('Hardcoded runtime check passed.');
