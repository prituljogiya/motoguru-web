#!/usr/bin/env bash
# Push EMAIL_* from local .env into a linked Vercel project (Production + Preview).
# Usage:
#   npx vercel login
#   npx vercel link
#   npm run smtp:vercel-env
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -f .env ]]; then
  echo "Missing .env — copy .env.example and fill EMAIL_PASS first."
  exit 1
fi

node <<'NODE'
const { spawnSync } = require("child_process");
const path = require("path");
require("./load-env.js");

const vars = [
  "EMAIL_HOST",
  "EMAIL_PORT",
  "EMAIL_USER",
  "EMAIL_PASS",
  "EMAIL_SECURE",
  "EMAIL_FROM",
  "EMAIL_FROM_NAME",
  "EMAIL_TO",
  "NEXT_PUBLIC_CONTACT_ENDPOINT",
];

for (const key of vars) {
  const val = process.env[key];
  if (!val) {
    console.log(`Skip ${key} (empty)`);
    continue;
  }
  for (const envTarget of ["production", "preview", "development"]) {
    console.log(`Setting ${key} → ${envTarget}`);
    const result = spawnSync(
      "npx",
      ["vercel", "env", "add", key, envTarget, "--force"],
      { input: val, stdio: ["pipe", "inherit", "inherit"], cwd: path.join(__dirname, "..") }
    );
    if (result.status !== 0) process.exit(result.status || 1);
  }
}

console.log("Done. Redeploy with: npx vercel --prod");
NODE
