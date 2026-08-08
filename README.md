# Motoguru Web (Next.js)

Static marketing site rebuilt from the Motoguru WordPress site. Ready to deploy to any domain host.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build static files

```bash
npm run build
```

Output is written to the `out/` folder. Upload that folder to your host (cPanel `public_html`, Netlify, S3, etc.).

## Contact forms + cPanel SMTP

The Contact page has two forms:

1. **General Enquiry** — full name, phone, email, city, message, security check
2. **Join as Partner** — workshop name, owner, phone, email, city, services offered, security check

Forms POST to `/api/contact.php`, which sends mail over SMTP using your cPanel email account.

### Setup on cPanel

1. Create an email account in **cPanel → Email Accounts** (e.g. `noreply@yourdomain.com`)
2. After `npm run build`, upload the `out/` folder to `public_html`
3. Ensure `public_html/api/contact.php` and `smtp-config.example.php` are present
4. Copy the example config:

```bash
cp api/smtp-config.example.php api/smtp-config.php
```

5. Edit `api/smtp-config.php`:

```php
return [
    'smtp_host' => 'mail.yourdomain.com', // or host from cPanel → Connect Devices
    'smtp_port' => 465,
    'smtp_secure' => 'ssl', // use 'tls' with port 587 if preferred
    'smtp_user' => 'noreply@yourdomain.com',
    'smtp_pass' => 'your-email-password',
    'from_email' => 'noreply@yourdomain.com',
    'from_name' => 'Motoguru Website',
    'to_email' => 'support@motoguru.in',
    'timeout' => 30,
];
```

Optional: set `NEXT_PUBLIC_CONTACT_ENDPOINT` before build if the PHP endpoint lives at a different URL.

## App download links

Edit Play Store / App Store URLs in `src/content/site.ts` (`playStoreUrl`, `appStoreUrl`).

## Deploy

### Vercel / Netlify
- Connect this repo (or upload the project)
- Build command: `npm run build`
- Output directory: `out`
- Attach your custom domain in the host dashboard
- Note: PHP SMTP only works on hosts that run PHP (e.g. cPanel). On pure static hosts, point `NEXT_PUBLIC_CONTACT_ENDPOINT` at a PHP-capable URL.

### cPanel / any static host
1. Run `npm run build` locally
2. Upload the contents of `out/` to `public_html` (or your domain folder)
3. Configure `api/smtp-config.php` as above
4. Point DNS A/CNAME records to the host

## Project map

- `src/app/` — pages (Home, About, Contact, Merchant, FAQ, Blogs, Privacy, Terms)
- `content/blog/` — markdown blog posts
- `public/images/` — media copied from WordPress uploads
- `public/api/` — cPanel PHP contact + SMTP handler
- `src/content/site.ts` — shared copy, nav, FAQs, app links
