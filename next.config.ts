import type { NextConfig } from "next";
import { execSync } from "child_process";
import path from "path";

const isCpanel = process.env.CPANEL_BUILD === "1";

function getBuildId(): string {
  if (process.env.VERCEL_GIT_COMMIT_SHA) {
    return process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7);
  }
  try {
    return execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();
  } catch {
    return "local";
  }
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_ID: getBuildId(),
  },
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
