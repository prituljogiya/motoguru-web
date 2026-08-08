import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Server mode so /api/contact can send mail via SMTP (nodemailer).
  // For pure static cPanel uploads, set NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact.php
  // and generate public/api/smtp-config.php with `npm run smtp:config`.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
