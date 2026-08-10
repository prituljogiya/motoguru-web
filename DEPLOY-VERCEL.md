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

Contact forms use `/api/contact/` (nodemailer + SMTP).
