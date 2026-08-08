<?php
/**
 * Example SMTP config for Motoguru contact forms (cPanel).
 *
 * Setup:
 * 1. In cPanel → Email Accounts, create e.g. noreply@yourdomain.com
 * 2. Copy this file to smtp-config.php (same folder)
 * 3. Fill in the values below
 *
 * Common cPanel SMTP settings:
 * - Host: mail.yourdomain.com  (or the host shown in cPanel → Email → Connect Devices)
 * - Port 465 + secure ssl   OR   Port 587 + secure tls
 * - User: full email address
 * - Pass: email account password
 */

return [
    'smtp_host' => 'mail.yourdomain.com',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl', // 'ssl' (465) or 'tls' (587)
    'smtp_user' => 'noreply@yourdomain.com',
    'smtp_pass' => 'CHANGE_ME',
    'from_email' => 'noreply@yourdomain.com',
    'from_name' => 'Motoguru Website',
    'to_email' => 'support@motoguru.in',
    'timeout' => 30,
];
