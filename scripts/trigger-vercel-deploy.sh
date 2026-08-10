#!/usr/bin/env bash
# Trigger a Vercel production deploy via Deploy Hook (no CLI login required).
#
# One-time setup in Vercel:
#   Project motoguru-in → Settings → Git → Deploy Hooks → Create Hook (branch: main)
#
# Usage:
#   export VERCEL_DEPLOY_HOOK_URL="https://api.vercel.com/v1/integrations/deploy/..."
#   npm run deploy:vercel-hook
set -euo pipefail

if [[ -z "${VERCEL_DEPLOY_HOOK_URL:-}" ]]; then
  echo "Missing VERCEL_DEPLOY_HOOK_URL."
  echo "Create a Deploy Hook in Vercel (Settings → Git → Deploy Hooks) and export its URL."
  exit 1
fi

echo "Triggering Vercel deploy..."
curl -fsS -X POST "$VERCEL_DEPLOY_HOOK_URL"
echo ""
echo "Deploy queued. Check https://vercel.com/dashboard — site should update in ~2 minutes."
