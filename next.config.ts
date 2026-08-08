import type { NextConfig } from "next";
import path from "path";

const isCpanel = process.env.CPANEL_BUILD === "1";

const nextConfig: NextConfig = {
  // CPANEL_BUILD=1 → static export for cPanel (forms use /api/contact.php SMTP).
  // Default → Node server so /api/contact (nodemailer) works on Vercel/Node hosts.
  ...(isCpanel ? { output: "export" as const } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
