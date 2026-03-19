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

## Deployment — Namecheap Shared Hosting (cPanel)

This setup uses cPanel's **Setup Node.js App** feature, which runs the app via **Phusion Passenger**. Passenger handles domain routing automatically — no Apache/Nginx configuration, no PM2, no root access needed.

### 1. Create `server.js` in the project root

Passenger requires a custom entry point file. Add this to the repository before uploading:

```js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 3000);
});
```

### 2. Upload the project to your server

Connect via SSH (cPanel → Terminal, or any SSH client) and clone the repo into your home directory — **outside** `public_html`:

```bash
git clone https://github.com/YOUR_USER/thesis-website.git ~/thesis-website
```

Alternatively, upload the files via cPanel File Manager or FTP, keeping the same directory structure.

### 3. Create the Node.js App in cPanel

Go to cPanel → **Setup Node.js App** → **Create Application**:

| Setting | Value |
|---|---|
| Node.js version | 20.x or higher |
| Application mode | Production |
| Application root | `thesis-website` (relative to your home dir) |
| Application URL | your domain or subdomain |
| Application startup file | `server.js` |

Click **Create**. cPanel will set up Passenger and link your domain to the app automatically.

### 4. Install dependencies

In the app settings page, click **Run NPM Install**. This installs all dependencies using cPanel's Node.js environment.

### 5. Build the app

Open cPanel → **Terminal** (or SSH) and run:

```bash
cd ~/thesis-website
npm run build
```

> **Note:** Next.js builds are memory-intensive. On shared hosting, if the build fails with an out-of-memory error, you can build locally on your machine and upload the `.next` folder via FTP/File Manager instead.

### 6. Set environment variables

In cPanel → Setup Node.js App → your app → **Environment Variables**, add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### 7. Start the application

Click **Start App**. Passenger will start the Node.js process and serve it at your domain. It manages restarts automatically — no PM2 or manual process management needed.

### SSL / HTTPS

cPanel handles this automatically. Go to cPanel → **SSL/TLS** → **AutoSSL** and run it for your domain. It provisions and renews a free Let's Encrypt certificate without any extra tools.

### Subsequent deploys

```bash
# Via SSH / cPanel Terminal
cd ~/thesis-website
git pull
npm install
npm run build
```

Then go to cPanel → Setup Node.js App → **Restart** the app.

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
