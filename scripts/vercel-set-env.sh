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

# Load .env (supports simple KEY=VALUE and quoted values)
set -a
# shellcheck disable=SC1091
source <(sed -e '/^#/d' -e '/^$/d' -e 's/\r$//' .env | sed -E "s/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/export \1=\2/")
set +a

VARS=(
  EMAIL_HOST
  EMAIL_PORT
  EMAIL_USER
  EMAIL_PASS
  EMAIL_SECURE
  EMAIL_FROM
  EMAIL_FROM_NAME
  EMAIL_TO
  NEXT_PUBLIC_CONTACT_ENDPOINT
)

for key in "${VARS[@]}"; do
  val="${!key-}"
  if [[ -z "$val" ]]; then
    echo "Skip $key (empty)"
    continue
  fi
  for env_target in production preview development; do
    echo "Setting $key → $env_target"
    printf '%s' "$val" | npx vercel env add "$key" "$env_target" --force >/dev/null
  done
done

echo "Done. Redeploy with: npx vercel --prod"
