#!/usr/bin/env node
/**
 * Build cPanel static export, copy to download/, and zip for public_html upload.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const downloadDir = path.join(root, "download");
const directDir = path.join(downloadDir, "cpanel-public_html");
const zipInDownload = path.join(downloadDir, "motoguru-cpanel-upload.zip");
const zipAtRoot = path.join(root, "motoguru-cpanel-upload.zip");

function rmrf(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

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

fs.mkdirSync(downloadDir, { recursive: true });
rmrf(directDir);
copyDir(outDir, directDir);

for (const zipPath of [zipAtRoot, zipInDownload]) {
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }
  const zip = spawnSync("zip", ["-r", "-q", zipPath, "."], { cwd: outDir });
  if (zip.status !== 0) {
    process.exit(zip.status || 1);
  }
}

console.log("\n✓ cPanel build ready — upload ONE of these to public_html:\n");
console.log(`  Folder (all files inside → public_html):`);
console.log(`    ${directDir}/`);
console.log(`  Zip (upload + Extract in public_html):`);
console.log(`    ${zipInDownload}`);
