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

Output is written to the `out/` folder. Upload that folder to your host (cPanel public_html, Netlify, S3, etc.).

## Contact form

The contact page posts to Formspree. Create a form at [formspree.io](https://formspree.io), then add:

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Rebuild after setting the env var so it is baked into the static export.

## Deploy

### Vercel / Netlify
- Connect this repo (or upload the project)
- Build command: `npm run build`
- Output directory: `out`
- Attach your custom domain in the host dashboard

### cPanel / any static host
1. Run `npm run build` locally
2. Upload the contents of `out/` to `public_html` (or your domain folder)
3. Point DNS A/CNAME records to the host

## Project map

- `src/app/` — pages (Home, About, Contact, Merchant, FAQ, Blogs, Privacy, Terms)
- `content/blog/` — markdown blog posts
- `public/images/` — media copied from WordPress uploads
- `src/content/site.ts` — shared copy, nav, FAQs

WordPress reference (unchanged): `C:\xampp\htdocs\motoguru`
