#!/usr/bin/env node
/**
 * Build a static site for cPanel public_html with PHP SMTP contact handler.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const apiDir = path.join(root, "src", "app", "api");
const apiBackup = path.join(root, "src", "app", "_api_backup_for_cpanel");

function run(cmd, args, env = {}) {
  const result = spawnSync(cmd, args, {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, ...env },
  });
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

// Hide Next.js API routes during static export (incompatible with output: "export")
if (fs.existsSync(apiBackup)) {
  fs.rmSync(apiBackup, { recursive: true, force: true });
}
if (fs.existsSync(apiDir)) {
  fs.renameSync(apiDir, apiBackup);
}

let failed = false;
try {
  run("node", ["scripts/generate-smtp-config.js"]);
  run("npx", ["next", "build"], {
    CPANEL_BUILD: "1",
    NEXT_PUBLIC_CONTACT_ENDPOINT: "/api/contact.php",
  });

  const outApi = path.join(root, "out", "api");
  fs.mkdirSync(outApi, { recursive: true });
  for (const file of ["contact.php", "smtp-config.php", "smtp-config.example.php"]) {
    const src = path.join(root, "public", "api", file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(outApi, file));
    }
  }

  // Ensure SMTP config exists in out (required for cPanel forms)
  if (!fs.existsSync(path.join(outApi, "smtp-config.php"))) {
    console.error("Missing out/api/smtp-config.php — run with EMAIL_* set in .env");
    failed = true;
  } else {
    console.log("\n✓ cPanel package ready in out/");
    console.log("  Upload contents of out/ to public_html");
    console.log("  Forms post to /api/contact.php via mail.motoguru.in SMTP");
  }
} catch (error) {
  console.error(error);
  failed = true;
} finally {
  if (fs.existsSync(apiBackup)) {
    if (fs.existsSync(apiDir)) {
      fs.rmSync(apiDir, { recursive: true, force: true });
    }
    fs.renameSync(apiBackup, apiDir);
  }
}

process.exit(failed ? 1 : 0);
