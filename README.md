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

```bash
npm run build
npm start
```

### Vercel
- Framework: Next.js
- Env vars: add the `EMAIL_*` values in the Vercel project settings

### cPanel (Node or PHP)
- Node app: run `npm run build && npm start`, set the same env vars
- Or static + PHP: use `smtp:config` and `/api/contact.php` as above

## Project map

- `src/app/` — pages
- `src/app/api/contact/` — SMTP API route (nodemailer)
- `public/api/` — optional cPanel PHP SMTP handler
- `src/content/site.ts` — shared copy, nav, FAQs, app links
- `.env` — SMTP credentials (gitignored)
