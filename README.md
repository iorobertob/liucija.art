# Liucija Dervinytė — Thesis Website

Interactive exhibition of the master's thesis
**"Artist as a Creator of Connections in a Nature–Culture Rhizome"**
Vilnius Academy of Arts, Textile Art & Design, 2023.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| i18n | next-intl v4 — Lithuanian (`lt`) + English (`en`) |
| 3D map | @react-three/fiber v9 + Three.js |
| Styling | Tailwind CSS v4 + inline styles |
| CMS | Sanity v5 (optional, see below) |
| Fonts | Cormorant Garamond + Inter (Google Fonts) |

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (Turbopack)
npm run dev
# → http://localhost:3000
```

The site auto-redirects to `/lt` (default locale). Switch to `/en` via the language toggle.

### Regenerate the English PDF

The EN thesis PDF at `public/downloads/thesis-en.pdf` is pre-generated. To rebuild it after content changes:

```bash
# Terminal 1 — keep the dev server running
npm run dev

# Terminal 2 — generate the PDF
npm run generate-en-pdf
```

Requires Google Chrome at `/Applications/Google Chrome.app` (standard macOS install).
On Linux, update `CHROME_PATH` in `scripts/generate-en-pdf.mjs`.

### Sanity CMS (optional)

The studio is at `/studio`. It requires a Sanity project ID to function.
Without one it shows a setup guide. To activate:

1. Create a free project at sanity.io
2. Create `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. Restart the dev server.

---

## Project structure

```
app/
  [locale]/
    page.tsx              # Homepage (3D rhizome map)
    about/                # About the author
    thesis/
      introduction/
      [section]/[sub]/    # 9 subsection pages
      conclusion/
      print/              # Printable full-thesis page
  studio/                 # Sanity Studio
components/
  Navigation/             # Top bar + hamburger menu
  RhizomeMap/             # Three.js 3D scene
  PrintButton/            # Client-side image preloader
lib/
  thesis-data.ts          # Structure: sections, slugs, positions, colours
  thesis-content.tsx      # All body text (LT + EN) with figures
messages/
  lt.json                 # Lithuanian UI strings
  en.json                 # English UI strings
public/
  downloads/
    thesis-lt.pdf         # Original Lithuanian thesis PDF (3.2 MB)
    thesis-en.pdf         # Generated English translation PDF (2.2 MB)
  images/                 # img-000.jpg … img-029.jpg
scripts/
  generate-en-pdf.mjs     # Puppeteer script to rebuild thesis-en.pdf
  deploy.sh               # Generic VPS deploy (plain Linux, Nginx)
  deploy-cpanel.sh        # Deploy for Namecheap VPS with cPanel
```

---

## Deployment — Namecheap VPS with cPanel

> This is the recommended path for the current hosting setup.
> Use this section. The generic Linux/Nginx section below is for reference only.

### Why cPanel is different

Namecheap VPS with cPanel/WHM runs **Apache** (not Nginx) on ports 80/443, managed entirely by cPanel. You **cannot** create Nginx vhosts or touch Apache's main config directly — cPanel would overwrite them. Instead:

- The Node.js app runs on a private port (3000) via **PM2** over SSH
- Apache proxies public traffic to it via a **`.htaccess`** rule or a cPanel-managed vhost include
- The app lives under **`/home/<cpanel-user>/`**, not `/var/www/`
- The OS is typically **AlmaLinux/CentOS** — use `dnf` instead of `apt`

### Prerequisites (run once as root over SSH)

```bash
# Connect to your VPS
ssh root@your-server-ip

# Node.js 20 via nvm (install under root; each cPanel user can have their own nvm too)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20 && nvm use 20 && nvm alias default 20

# Verify
node -v   # → v20.x.x

# PM2
npm install -g pm2

# Git (usually already installed on cPanel servers)
git --version
```

### First-time setup

```bash
# 1. Decide on a directory — outside public_html to keep source private
#    Replace "cpaneluser" with your actual cPanel username
APP_DIR="/home/cpaneluser/thesis-website"

git clone https://github.com/YOUR_USER/thesis-website.git "$APP_DIR"
cd "$APP_DIR"

# 2. Environment file
cp .env.local.example .env.local
# Edit .env.local if you need Sanity — otherwise leave it as-is

# 3. Install, build, start on port 3000
npm ci
npm run build
pm2 start npm --name "thesis" -- start
pm2 save

# 4. Make PM2 restart on server reboot
pm2 startup
# → PM2 will print a command like:
#   sudo env PATH=... pm2 startup systemd -u root --hp /root
# Run that command exactly as printed.
```

### Point the domain to Node.js (Apache reverse proxy)

cPanel uses Apache. Enable proxying for your domain via one of these two methods:

**Method A — `.htaccess` (easiest, no WHM access needed)**

In cPanel → File Manager, open the `.htaccess` file inside the domain's `public_html` folder
(or create it if it doesn't exist) and add:

```apache
RewriteEngine On

# Proxy everything to Node.js on port 3000
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^ - [L]

# WebSocket support
RewriteCond %{HTTP:Upgrade} websocket [NC]
RewriteRule /(.*) ws://127.0.0.1:3000/$1 [P,L]

RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]

# Pass real IP to Node
RequestHeader set X-Forwarded-Proto "https"
RequestHeader set X-Real-IP %{REMOTE_ADDR}s
```

> This requires `mod_proxy` and `mod_rewrite` to be enabled in WHM → Apache Configuration.
> On Namecheap managed VPS they are enabled by default.

**Method B — WHM Apache include (cleaner, requires WHM root access)**

In WHM → Apache Configuration → Include Editor → Pre VirtualHost Include, add for your domain:

```apache
<VirtualHost *:443>
    ServerName luicija.art
    ServerAlias www.luicija.art

    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    # WebSocket support
    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteRule /(.*) ws://127.0.0.1:3000/$1 [P,L]
</VirtualHost>
```

Then restart Apache: **WHM → Restart Services → HTTP Server (Apache)**.

### HTTPS / SSL

cPanel handles SSL automatically. In cPanel → SSL/TLS → AutoSSL, run "Run AutoSSL" for your domain.
This provisions a free Let's Encrypt certificate and renews it automatically — no `certbot` command needed.

### Verify it's working

```bash
# Check the Node.js process is running
pm2 list

# Check it responds locally
curl http://127.0.0.1:3000/lt

# Tail logs if something is wrong
pm2 logs thesis --lines 50
```

### Subsequent deploys

Use the cPanel deploy script:

```bash
bash /home/cpaneluser/thesis-website/scripts/deploy-cpanel.sh
```

Or trigger it remotely from your machine:

```bash
ssh root@your-server-ip "bash /home/cpaneluser/thesis-website/scripts/deploy-cpanel.sh"
```

---

## Deployment — plain Linux VPS (Nginx, no cPanel)

> Use this if you have a plain Ubuntu/Debian VPS **without** cPanel.
> Skip this section if you're on Namecheap cPanel.

### Prerequisites

```bash
# Node.js 20+
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 20 && nvm use 20

# PM2
npm install -g pm2

# Nginx
sudo apt install -y nginx git
```

### First-time setup

```bash
git clone https://github.com/YOUR_USER/thesis-website.git /var/www/thesis-website
cd /var/www/thesis-website
cp .env.local.example .env.local
npm ci
npm run build
pm2 start npm --name "thesis" -- start
pm2 save && pm2 startup
```

### Nginx configuration

Create `/etc/nginx/sites-available/thesis`:

```nginx
server {
    listen 80;
    server_name luicija.art www.luicija.art;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve static PDFs directly (bypass Node)
    location /downloads/ {
        alias /var/www/thesis-website/public/downloads/;
        add_header Content-Disposition 'attachment';
        expires 30d;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/thesis /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# HTTPS
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d luicija.art -d www.luicija.art
```

### Subsequent deploys

```bash
bash /var/www/thesis-website/scripts/deploy.sh
```

---

## Continuous deployment (both setups)

From your local machine or a CI job (GitHub Actions, etc.):

```bash
# cPanel VPS
ssh root@your-server-ip "bash /home/cpaneluser/thesis-website/scripts/deploy-cpanel.sh"

# Plain Linux VPS
ssh user@your-server-ip "bash /var/www/thesis-website/scripts/deploy.sh"
```

---

## Content editing

### Text & images
All thesis text lives in `lib/thesis-content.tsx` (LT + EN bodies) and `lib/thesis-data.ts` (structure/metadata).
Edit these files, commit, and redeploy.

### Thesis PDFs
- `public/downloads/thesis-lt.pdf` — replace with updated LT file if needed.
- `public/downloads/thesis-en.pdf` — regenerate with `npm run generate-en-pdf` after any content change, then commit.

### UI strings
`messages/lt.json` and `messages/en.json` — all navigation labels, hints, and button text.
