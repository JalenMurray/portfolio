#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

git pull
npm install
npm run build

COMMIT=$(git rev-parse --short HEAD)
TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "{\"commit\": \"$COMMIT\", \"time\": \"$TIME\"}" > deploy.json

pm2 reload portfolio || pm2 start npm --name portfolio -- start
