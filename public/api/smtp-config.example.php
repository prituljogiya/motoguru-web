<?php
/**
 * Example SMTP config for Motoguru contact forms (cPanel).
 *
 * Preferred setup: put credentials in project .env, then run:
 *   npm run smtp:config
 *
 * That writes public/api/smtp-config.php from EMAIL_* variables.
 *
 * Common cPanel SMTP settings:
 * - Host: mail.yourdomain.com
 * - Port 465 + secure ssl   OR   Port 587 + secure tls
 */

return [
    'smtp_host' => 'mail.motoguru.in',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl', // 'ssl' (465) or 'tls' (587)
    'smtp_user' => 'enquiry@motoguru.in',
    'smtp_pass' => 'CHANGE_ME',
    'from_email' => 'enquiry@motoguru.in',
    'from_name' => 'Motoguru Website',
    'to_email' => 'enquiry@motoguru.in',
    'timeout' => 30,
];
