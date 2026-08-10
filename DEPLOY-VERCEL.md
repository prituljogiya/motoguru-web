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
