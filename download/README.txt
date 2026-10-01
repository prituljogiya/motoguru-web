DOWNLOAD CPANEL ZIP
===================

Direct download from GitHub (works on your computer):

  https://github.com/prituljogiya/motoguru-web/raw/main/download/cpanel-upload.zip

Or in this project folder:

  download/cpanel-upload.zip

cPanel steps:
  1. File Manager → public_html
  2. Upload cpanel-upload.zip
  3. Extract
  4. Edit public_html/api/smtp-config.php → set smtp_pass to your enquiry@motoguru.in mailbox password
  5. Save

Forms need contact.php + smtp-config.php in public_html/api/

Regenerate zip after code changes:
  npm run package:cpanel-public

Full zip with mail password baked in (cloud agent only, not on GitHub):
  npm run package:cpanel
