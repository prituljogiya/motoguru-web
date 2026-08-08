<?php
/**
 * Motoguru contact form handler — SMTP via cPanel.
 *
 * Upload this file (and smtp-config.php) to your public_html/api/ folder
 * alongside the static Next.js export, or keep them in the project public/api/
 * so they are copied into out/api/ on build.
 *
 * Configure credentials in smtp-config.php (copy from smtp-config.example.php).
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Accept, Content-Type');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/smtp-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'SMTP is not configured. Copy smtp-config.example.php to smtp-config.php and set your cPanel mail credentials.',
    ]);
    exit;
}

/** @var array $config */
$config = require $configPath;

function field(string $key): string
{
    $value = $_POST[$key] ?? '';
    return trim(is_string($value) ? $value : '');
}

function respond(int $code, array $payload): void
{
    http_response_code($code);
    echo json_encode($payload);
    exit;
}

$formType = field('form_type');
if (!in_array($formType, ['enquiry', 'partner'], true)) {
    respond(400, ['ok' => false, 'error' => 'Invalid form type.']);
}

$email = filter_var(field('email'), FILTER_VALIDATE_EMAIL);
$phone = field('phone');
$city = field('city');

if (!$email || $phone === '' || $city === '') {
    respond(400, ['ok' => false, 'error' => 'Please fill in all required fields.']);
}

$lines = [];
$subject = '';

if ($formType === 'enquiry') {
    $fullName = field('full_name');
    $message = field('message');
    if ($fullName === '' || $message === '') {
        respond(400, ['ok' => false, 'error' => 'Please fill in all required fields.']);
    }
    $subject = 'Motoguru General Enquiry from ' . $fullName;
    $lines = [
        'Form: General Enquiry',
        'Full name: ' . $fullName,
        'Phone: ' . $phone,
        'Email: ' . $email,
        'City: ' . $city,
        '',
        'How can we help?',
        $message,
    ];
} else {
    $workshop = field('workshop_name');
    $owner = field('owner_name');
    $services = $_POST['services'] ?? [];
    if (!is_array($services)) {
        $services = [$services];
    }
    $services = array_values(array_filter(array_map(static function ($item) {
        return trim(is_string($item) ? $item : '');
    }, $services)));

    if ($workshop === '' || $owner === '') {
        respond(400, ['ok' => false, 'error' => 'Please fill in all required fields.']);
    }

    $subject = 'Motoguru Partner Request from ' . $workshop;
    $lines = [
        'Form: Join as Partner',
        'Workshop / garage name: ' . $workshop,
        'Owner name: ' . $owner,
        'Phone: ' . $phone,
        'Email: ' . $email,
        'City: ' . $city,
        'Services: ' . (count($services) ? implode(', ', $services) : 'Not specified'),
    ];
}

$body = implode("\n", $lines) . "\n";

$to = $config['to_email'] ?? ($config['smtp_user'] ?? '');
$fromEmail = $config['from_email'] ?? ($config['smtp_user'] ?? '');
$fromName = $config['from_name'] ?? 'Motoguru Website';

if ($to === '' || $fromEmail === '') {
    respond(500, ['ok' => false, 'error' => 'SMTP recipient/from address is missing in smtp-config.php.']);
}

$host = $config['smtp_host'] ?? 'mail.yourdomain.com';
$port = (int) ($config['smtp_port'] ?? 465);
$user = $config['smtp_user'] ?? '';
$pass = $config['smtp_pass'] ?? '';
$secure = strtolower((string) ($config['smtp_secure'] ?? 'ssl')); // ssl or tls
$timeout = (int) ($config['timeout'] ?? 30);

if ($user === '' || $pass === '' || str_contains($pass, 'CHANGE_ME')) {
    respond(500, ['ok' => false, 'error' => 'Update smtp-config.php with your cPanel email password.']);
}

try {
    smtp_send([
        'host' => $host,
        'port' => $port,
        'secure' => $secure,
        'user' => $user,
        'pass' => $pass,
        'timeout' => $timeout,
        'from_email' => $fromEmail,
        'from_name' => $fromName,
        'to' => $to,
        'reply_to' => $email,
        'subject' => $subject,
        'body' => $body,
    ]);
    respond(200, ['ok' => true]);
} catch (Throwable $e) {
    respond(500, ['ok' => false, 'error' => 'Unable to send email right now. Please try again later.']);
}

/**
 * Minimal SMTP client for cPanel (AUTH LOGIN over SSL/TLS).
 *
 * @param array<string, mixed> $opts
 */
function smtp_send(array $opts): void
{
    $host = (string) $opts['host'];
    $port = (int) $opts['port'];
    $secure = (string) $opts['secure'];
    $timeout = (int) $opts['timeout'];

    $remote = ($secure === 'ssl' ? 'ssl://' : '') . $host . ':' . $port;
    $fp = @stream_socket_client($remote, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT);
    if (!$fp) {
        throw new RuntimeException("SMTP connect failed: $errstr ($errno)");
    }
    stream_set_timeout($fp, $timeout);

    smtp_expect($fp, [220]);
    smtp_cmd($fp, 'EHLO motoguru.local', [250]);

    if ($secure === 'tls') {
        smtp_cmd($fp, 'STARTTLS', [220]);
        $crypto = STREAM_CRYPTO_METHOD_TLS_CLIENT;
        if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
            $crypto |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
        }
        if (!stream_socket_enable_crypto($fp, true, $crypto)) {
            throw new RuntimeException('STARTTLS failed');
        }
        smtp_cmd($fp, 'EHLO motoguru.local', [250]);
    }

    smtp_cmd($fp, 'AUTH LOGIN', [334]);
    smtp_cmd($fp, base64_encode((string) $opts['user']), [334]);
    smtp_cmd($fp, base64_encode((string) $opts['pass']), [235]);

    $from = (string) $opts['from_email'];
    $to = (string) $opts['to'];
    smtp_cmd($fp, 'MAIL FROM:<' . $from . '>', [250]);
    smtp_cmd($fp, 'RCPT TO:<' . $to . '>', [250, 251]);
    smtp_cmd($fp, 'DATA', [354]);

    $subject = smtp_encode_header((string) $opts['subject']);
    $fromName = smtp_encode_header((string) $opts['from_name']);
    $replyTo = (string) $opts['reply_to'];
    $body = str_replace(["\r\n", "\r"], "\n", (string) $opts['body']);
    $body = str_replace("\n.", "\n..", $body);
    $body = str_replace("\n", "\r\n", $body);

    $headers = [
        'Date: ' . date('r'),
        'From: ' . $fromName . ' <' . $from . '>',
        'To: <' . $to . '>',
        'Reply-To: <' . $replyTo . '>',
        'Subject: ' . $subject,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: Motoguru-ContactForm',
    ];

    $data = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.";
    fwrite($fp, $data . "\r\n");
    smtp_expect($fp, [250]);
    smtp_cmd($fp, 'QUIT', [221]);
    fclose($fp);
}

/**
 * @param resource $fp
 * @param list<int> $ok
 */
function smtp_cmd($fp, string $command, array $ok): void
{
    fwrite($fp, $command . "\r\n");
    smtp_expect($fp, $ok);
}

/**
 * @param resource $fp
 * @param list<int> $ok
 */
function smtp_expect($fp, array $ok): void
{
    $response = '';
    while (($line = fgets($fp, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $ok, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }
}

function smtp_encode_header(string $value): string
{
    if (preg_match('/^[\x20-\x7E]+$/', $value)) {
        return $value;
    }
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}
