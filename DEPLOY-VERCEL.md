# Deploy Motoguru on Vercel

## Fastest way (about 2 minutes)

1. **Import project:**  
   https://vercel.com/new/import?s=https://github.com/prituljogiya/motoguru-web

2. **Project name:** use `motoguru-in` (avoid `motoguru-web` — that URL is used by another site)

3. **Add Production environment variables** before clicking Deploy:

| Name | Value |
|------|-------|
| `EMAIL_HOST` | `mail.motoguru.in` |
| `EMAIL_PORT` | `465` |
| `EMAIL_USER` | `enquiry@motoguru.in` |
| `EMAIL_PASS` | your email password |
| `EMAIL_SECURE` | `ssl` |
| `EMAIL_FROM` | `enquiry@motoguru.in` |
| `EMAIL_FROM_NAME` | `Motoguru Website` |
| `EMAIL_TO` | `enquiry@motoguru.in` |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | `/api/contact/` |

4. Click **Deploy**

5. After deploy: **Settings → Deployment Protection** → turn **Vercel Authentication OFF** so anyone can view the site

Your live URL will be like: `https://motoguru-in.vercel.app`

---

## CLI deploy (if already linked)

```bash
npx vercel login
npx vercel link
npm run smtp:vercel-env   # pushes EMAIL_* from .env to Vercel
npm run deploy:vercel
```

---

## Auto-deploy from GitHub

Once imported, every push to `main` redeploys automatically.

For GitHub Actions deploy, add these **repository secrets** (Settings → Secrets → Actions):

| Secret | Where to find it |
|--------|------------------|
| `VERCEL_TOKEN` | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Project Settings → General → Project ID section (team id) |
| `VERCEL_PROJECT_ID` | Same page — Project ID |
| `EMAIL_PASS` | Your `enquiry@motoguru.in` mailbox password |

---

## Site still shows old content?

The code on GitHub `main` is correct. If the live site still shows **“Stories From Car Owners”** or **“Trusted by India”**, Vercel has **not** redeployed yet.

**Fix (about 1 minute):**

1. Open https://vercel.com/dashboard → project **motoguru-in**
2. **Deployments** → latest → **⋯** → **Redeploy**
3. Turn **Use existing Build Cache** **OFF**
4. Hard refresh the site (Ctrl+Shift+R / Cmd+Shift+R)

**Verify:** footer shows **Build** with a 7-character git hash (e.g. `Build 7c28562`). You should see **“Download Motoguru”** on the homepage — not the old testimonials section.

**Deploy Hook (no dashboard):** Settings → Git → Deploy Hooks → create hook for `main`, then:

```bash
export VERCEL_DEPLOY_HOOK_URL="https://api.vercel.com/v1/integrations/deploy/..."
npm run deploy:vercel-hook
```

Contact forms use `/api/contact/` (nodemailer + SMTP).

---

## Contact form / SMTP not working?

SMTP to `mail.motoguru.in` works when credentials are set. If the form fails on the live site, it is almost always **missing server config**, not broken code.

### Vercel (Node `/api/contact/`)

1. **Settings → Environment Variables** — add all `EMAIL_*` from the table above for **Production** (and Preview if you test preview URLs).
2. **`EMAIL_PASS`** must be the exact mailbox password for `enquiry@motoguru.in` (no extra quotes).
3. **Redeploy** after saving env vars (env changes do not apply until redeploy).
4. **Check config:** open `https://YOUR-VERCEL-URL/api/contact/` in the browser — you should see `{"ok":true,"configured":true}`. If you see `missing: ["EMAIL_PASS", ...]`, add those vars and redeploy.

Local test:

```bash
cp .env.example .env   # fill EMAIL_PASS
npm run smtp:test      # sends a test email
npm run dev
# submit the contact form, or:
curl -s http://localhost:3000/api/contact/
```

### cPanel (PHP `/api/contact.php`)

1. Build with credentials in `.env`: `npm run build:cpanel`
2. Upload **`out/`** including **`out/api/contact.php`** and **`out/api/smtp-config.php`**
3. Set `NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact.php` at build time (the cpanel script does this automatically)

If `smtp-config.php` still has `CHANGE_ME`, run `npm run smtp:config` after filling `.env`.
