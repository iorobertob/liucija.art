#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# deploy.sh — Deploy thesis-website to production VPS
#
# Usage:
#   On the server:      bash /var/www/thesis-website/scripts/deploy.sh
#   From your machine:  ssh user@your-vps "bash /var/www/thesis-website/scripts/deploy.sh"
#
# Assumes:
#   - Repo cloned to /var/www/thesis-website  (change APP_DIR below if different)
#   - Node.js 20+ and PM2 installed globally
#   - PM2 process named "thesis" (matches `pm2 start npm --name "thesis" -- start`)
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

APP_DIR="/var/www/thesis-website"
PM2_APP="thesis"
NODE_ENV="production"

# ── Colours ────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log()  { echo -e "${GREEN}[deploy]${NC} $*"; }
warn() { echo -e "${YELLOW}[deploy]${NC} $*"; }
fail() { echo -e "${RED}[deploy] ERROR:${NC} $*"; exit 1; }

# ── Preflight ──────────────────────────────────────────────────────────────
[[ -d "$APP_DIR" ]] || fail "App directory $APP_DIR not found. Clone the repo first."
command -v node  >/dev/null 2>&1 || fail "Node.js not found. Install via nvm."
command -v npm   >/dev/null 2>&1 || fail "npm not found."
command -v pm2   >/dev/null 2>&1 || fail "PM2 not found. Run: npm install -g pm2"

log "Starting deployment at $(date '+%Y-%m-%d %H:%M:%S')"
cd "$APP_DIR"

# ── 1. Pull latest code ────────────────────────────────────────────────────
log "Pulling latest changes from git..."
git fetch --all
git reset --hard origin/main   # always deploy from main
log "Now at commit: $(git rev-parse --short HEAD) — $(git log -1 --pretty=%s)"

# ── 2. Install dependencies ────────────────────────────────────────────────
log "Installing production dependencies..."
npm ci --omit=dev

# ── 3. Build ───────────────────────────────────────────────────────────────
log "Building Next.js..."
NODE_ENV="$NODE_ENV" npm run build

# ── 4. Reload application ─────────────────────────────────────────────────
if pm2 list | grep -q "$PM2_APP"; then
  log "Reloading PM2 process '$PM2_APP' (zero-downtime)..."
  pm2 reload "$PM2_APP"
else
  warn "PM2 process '$PM2_APP' not found — starting it fresh..."
  pm2 start npm --name "$PM2_APP" -- start
  pm2 save
fi

# ── 5. Verify ─────────────────────────────────────────────────────────────
sleep 2
if pm2 list | grep -q "$PM2_APP.*online"; then
  log "Process is online."
else
  fail "Process did not come online. Check: pm2 logs $PM2_APP"
fi

# ── 6. Reload Nginx (optional) ────────────────────────────────────────────
if command -v nginx >/dev/null 2>&1; then
  log "Reloading Nginx..."
  sudo nginx -t && sudo systemctl reload nginx
fi

log "Deployment complete at $(date '+%Y-%m-%d %H:%M:%S')"
echo -e "${GREEN}────────────────────────────────────────${NC}"
echo -e "  Commit:  $(git rev-parse --short HEAD)"
echo -e "  Branch:  $(git rev-parse --abbrev-ref HEAD)"
echo -e "  App:     http://localhost:3000"
echo -e "${GREEN}────────────────────────────────────────${NC}"
