MotoGuru cPanel upload package
=============================

Download this file to your computer (right-click in Cursor → Download):

  motoguru-cpanel-upload.zip

Then in cPanel File Manager:
  1. Open public_html
  2. Upload the zip
  3. Extract All
  4. Confirm public_html/api/contact.php and public_html/api/smtp-config.php exist

The zip is not stored on GitHub (it contains mail settings). Regenerate on this machine with:

  npm run package:cpanel

(requires .env with EMAIL_* filled in)
