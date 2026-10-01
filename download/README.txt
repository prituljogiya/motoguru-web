cPanel — upload directly to public_html
======================================

OPTION A — ZIP (easiest)
  File: download/motoguru-cpanel-upload.zip
  cPanel → File Manager → public_html → Upload zip → Extract
  After extract you must see: public_html/index.html and public_html/api/contact.php

OPTION B — FOLDER
  Copy everything INSIDE this folder into public_html (not the folder itself):
  download/cpanel-public_html/
  So public_html/index.html is at the top level.

Full path on this machine:
  /workspace/download/motoguru-cpanel-upload.zip
  /workspace/download/cpanel-public_html/

Regenerate after code changes:
  npm run package:cpanel
  (requires .env with EMAIL_PASS)

Do not commit the zip or cpanel-public_html to GitHub (mail settings inside).
