#!/usr/bin/env node
/**
 * Build cPanel zip safe for GitHub (smtp-config uses example — set password on server after upload).
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const zipPath = path.join(root, "download", "cpanel-upload.zip");
const exampleConfig = path.join(root, "public", "api", "smtp-config.example.php");

const build = spawnSync("npm", ["run", "build:cpanel"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    NEXT_PUBLIC_CONTACT_ENDPOINT: "/api/contact.php",
  },
});

if (build.status !== 0) {
  process.exit(build.status || 1);
}

const outConfig = path.join(outDir, "api", "smtp-config.php");
fs.copyFileSync(exampleConfig, outConfig);

fs.mkdirSync(path.dirname(zipPath), { recursive: true });
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const zip = spawnSync("zip", ["-r", "-q", zipPath, "."], { cwd: outDir });
if (zip.status !== 0) {
  process.exit(zip.status || 1);
}

console.log(`\n✓ Public cPanel zip (commit to GitHub): ${zipPath}`);
console.log("  After upload: edit public_html/api/smtp-config.php and set smtp_pass on the server.");
