# Motoguru Web (Next.js)

Marketing site for Motoguru with contact forms that send mail over SMTP.

## Local development

```bash
npm install
cp .env.example .env   # then fill EMAIL_PASS
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## SMTP (.env)

Create `.env` (never commit secrets):

```bash
EMAIL_HOST=mail.motoguru.in
EMAIL_PORT=465
EMAIL_USER=enquiry@motoguru.in
EMAIL_PASS=your-password
EMAIL_SECURE=ssl
EMAIL_FROM=enquiry@motoguru.in
EMAIL_FROM_NAME=Motoguru Website
EMAIL_TO=enquiry@motoguru.in
NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact
```

Contact forms POST to `/api/contact`, which sends mail with **nodemailer** using those variables.

Verify SMTP:

```bash
npm run smtp:test
```

### cPanel PHP fallback

If you deploy a static export and need PHP mail on cPanel:

```bash
npm run smtp:config   # writes public/api/smtp-config.php from .env
```

Then set `NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact.php` and upload `api/contact.php` + `api/smtp-config.php` with the site.

## Build & deploy

### Node / Vercel (review / production)
**One-click import:** https://vercel.com/new/import?s=https://github.com/prituljogiya/motoguru-web

After import, add these **Production** env vars in Vercel → Settings → Environment Variables:

```
EMAIL_HOST=mail.motoguru.in
EMAIL_PORT=465
EMAIL_USER=enquiry@motoguru.in
EMAIL_PASS=your-password
EMAIL_SECURE=ssl
EMAIL_FROM=enquiry@motoguru.in
EMAIL_FROM_NAME=Motoguru Website
EMAIL_TO=enquiry@motoguru.in
NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact/
```

Then **Redeploy** from the Deployments tab. Your preview URL will look like:
`https://motoguru-web-prituljogiyas-projects.vercel.app`

```bash
npm run build
npm start
```
Optional CLI helper (requires `npx vercel login` + `npx vercel link`):
```bash
npm run smtp:vercel-env
npx vercel --prod
```

### cPanel (recommended for motoguru.in)
```bash
npm run build:cpanel
```
Upload **everything inside** `out/` to `public_html` (replace the under-construction page).

This build includes:
- Static site pages
- `/api/contact.php` + `/api/smtp-config.php` (SMTP to `mail.motoguru.in`)

Forms submit to `/api/contact.php` and email `enquiry@motoguru.in`.

## Project map

- `src/app/` — pages
- `src/app/api/contact/` — SMTP API route (nodemailer)
- `public/api/` — optional cPanel PHP SMTP handler
- `src/content/site.ts` — shared copy, nav, FAQs, app links
- `.env` — SMTP credentials (gitignored)
