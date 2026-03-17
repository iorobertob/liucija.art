#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# deploy-cpanel.sh — Deploy thesis-website on a Namecheap VPS with cPanel
#
# Differences from deploy.sh (plain Nginx VPS):
#   - App lives under /home/<CPANEL_USER>/, not /var/www/
#   - No Nginx; Apache is managed by cPanel — we don't touch it
#   - nvm is sourced from the user's home directory
#   - PM2 reload still works the same way
#
# Usage:
#   On the server:       bash /home/cpaneluser/thesis-website/scripts/deploy-cpanel.sh
#   From your machine:   ssh root@your-vps "bash /home/cpaneluser/thesis-website/scripts/deploy-cpanel.sh"
#
# First-time setup — run these manually before first deploy:
#   git clone https://github.com/YOUR/thesis-website.git /home/cpaneluser/thesis-website
#   cd /home/cpaneluser/thesis-website
#   cp .env.local.example .env.local   # edit if needed
#   npm ci && npm run build
#   pm2 start npm --name "thesis" -- start
#   pm2 save && pm2 startup
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

# ── Configuration — edit these two lines ──────────────────────────────────
CPANEL_USER="cpaneluser"          # ← your cPanel username
APP_DIR="/home/${CPANEL_USER}/thesis-website"
# ──────────────────────────────────────────────────────────────────────────

PM2_APP="thesis"
NODE_ENV="production"

# ── Colours ───────────────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
log()  { echo -e "${GREEN}[deploy]${NC} $*"; }
warn() { echo -e "${YELLOW}[deploy]${NC} $*"; }
fail() { echo -e "${RED}[deploy] ERROR:${NC} $*"; exit 1; }

# ── Source nvm so node/npm are available ─────────────────────────────────
export NVM_DIR="${HOME}/.nvm"
# shellcheck disable=SC1091
[[ -s "$NVM_DIR/nvm.sh" ]] && source "$NVM_DIR/nvm.sh" || \
  fail "nvm not found at $NVM_DIR. Install it first:\n  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"

nvm use default >/dev/null 2>&1 || nvm use 20

# ── Preflight checks ──────────────────────────────────────────────────────
[[ -d "$APP_DIR" ]] || fail "App directory $APP_DIR not found.\nClone the repo first:\n  git clone https://github.com/YOUR/thesis-website.git $APP_DIR"
command -v node >/dev/null 2>&1 || fail "node not found after sourcing nvm."
command -v npm  >/dev/null 2>&1 || fail "npm not found."
command -v pm2  >/dev/null 2>&1 || fail "PM2 not found. Run: npm install -g pm2"

log "Starting deployment at $(date '+%Y-%m-%d %H:%M:%S')"
log "Node $(node -v) | npm $(npm -v) | PM2 $(pm2 -v)"
cd "$APP_DIR"

# ── 1. Pull latest code ───────────────────────────────────────────────────
log "Pulling latest changes from git..."
git fetch --all
git reset --hard origin/main
log "Commit: $(git rev-parse --short HEAD) — $(git log -1 --pretty=%s)"

# ── 2. Install production dependencies ───────────────────────────────────
log "Installing dependencies (production only)..."
npm ci --omit=dev

# ── 3. Build ──────────────────────────────────────────────────────────────
log "Building Next.js..."
NODE_ENV="$NODE_ENV" npm run build

# ── 4. Reload via PM2 (zero-downtime) ────────────────────────────────────
if pm2 list | grep -q "$PM2_APP"; then
  log "Reloading PM2 process '$PM2_APP'..."
  pm2 reload "$PM2_APP"
else
  warn "Process '$PM2_APP' not found — starting fresh..."
  pm2 start npm --name "$PM2_APP" -- start
  pm2 save
fi

# ── 5. Health check ───────────────────────────────────────────────────────
sleep 3
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/lt || echo "000")
if [[ "$HTTP_STATUS" == "200" || "$HTTP_STATUS" == "307" ]]; then
  log "Health check passed (HTTP $HTTP_STATUS)."
else
  warn "Health check returned HTTP $HTTP_STATUS — check logs: pm2 logs $PM2_APP"
fi

# ── 6. Restart Apache so any .htaccess changes take effect ───────────────
# cPanel provides a safe restart command via /scripts/
if [[ -x "/usr/local/cpanel/scripts/restartsrv_httpd" ]]; then
  log "Restarting Apache via cPanel..."
  /usr/local/cpanel/scripts/restartsrv_httpd >/dev/null 2>&1 && log "Apache restarted." || warn "Apache restart failed — do it manually in WHM."
fi

log "Deployment complete at $(date '+%Y-%m-%d %H:%M:%S')"
echo -e "${GREEN}────────────────────────────────────────${NC}"
echo -e "  Commit:  $(git rev-parse --short HEAD)"
echo -e "  App:     http://127.0.0.1:3000  (proxied via Apache)"
echo -e "  Logs:    pm2 logs $PM2_APP"
echo -e "${GREEN}────────────────────────────────────────${NC}"
