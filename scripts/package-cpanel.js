#!/usr/bin/env node
/**
 * Build cPanel static export and zip out/ for upload to public_html.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const zipPath = path.join(root, "motoguru-cpanel-upload.zip");

const build = spawnSync("npm", ["run", "build:cpanel"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

if (build.status !== 0) {
  process.exit(build.status || 1);
}

if (!fs.existsSync(path.join(outDir, "api", "smtp-config.php"))) {
  console.error("\nMissing out/api/smtp-config.php — add EMAIL_PASS to .env and rebuild.");
  process.exit(1);
}

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const zip = spawnSync("zip", ["-r", zipPath, "."], { cwd: outDir, stdio: "inherit" });
if (zip.status !== 0) {
  process.exit(zip.status || 1);
}

console.log(`\n✓ Upload zip ready: ${zipPath}`);
