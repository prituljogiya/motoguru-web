#!/usr/bin/env node
/**
 * Verifies EMAIL_* SMTP credentials by connecting and sending a test message.
 */
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const out = {};
  for (const rawLine of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

const root = path.join(__dirname, "..");
const env = {
  ...loadEnvFile(path.join(root, ".env")),
  ...loadEnvFile(path.join(root, ".env.local")),
};

const host = env.EMAIL_HOST;
const port = Number(env.EMAIL_PORT || 465);
const secure =
  (env.EMAIL_SECURE || "").toLowerCase() === "ssl" ||
  (env.EMAIL_SECURE || "").toLowerCase() === "true" ||
  (!(env.EMAIL_SECURE || "") && port === 465);
const user = env.EMAIL_USER;
const pass = env.EMAIL_PASS;
const from = env.EMAIL_FROM || user;
const to = env.EMAIL_TO || user;

if (!host || !user || !pass) {
  console.error("Missing EMAIL_HOST / EMAIL_USER / EMAIL_PASS in .env");
  process.exit(1);
}

async function main() {
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  console.log(`Connecting to ${host}:${port} (secure=${secure}) as ${user}...`);
  await transporter.verify();
  console.log("SMTP verify OK");

  const info = await transporter.sendMail({
    from: `"Motoguru SMTP Test" <${from}>`,
    to,
    subject: "Motoguru SMTP test",
    text: `SMTP test from Motoguru website at ${new Date().toISOString()}`,
  });

  console.log("Test email sent:", info.messageId || info.response);
}

main().catch((error) => {
  console.error("SMTP test failed:", error.message || error);
  process.exit(1);
});
