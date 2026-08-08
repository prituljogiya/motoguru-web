import nodemailer from "nodemailer";

export type ContactPayload = {
  formType: "enquiry" | "partner";
  email: string;
  phone: string;
  city: string;
  fullName?: string;
  message?: string;
  workshopName?: string;
  ownerName?: string;
  services?: string[];
};

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getSmtpConfig() {
  const port = Number(process.env.EMAIL_PORT || "465");
  const secureEnv = (process.env.EMAIL_SECURE || "").toLowerCase();
  const secure = secureEnv ? secureEnv === "ssl" || secureEnv === "true" : port === 465;

  return {
    host: requiredEnv("EMAIL_HOST"),
    port,
    secure,
    user: requiredEnv("EMAIL_USER"),
    pass: requiredEnv("EMAIL_PASS"),
    fromEmail: process.env.EMAIL_FROM?.trim() || requiredEnv("EMAIL_USER"),
    fromName: process.env.EMAIL_FROM_NAME?.trim() || "Motoguru Website",
    toEmail: process.env.EMAIL_TO?.trim() || requiredEnv("EMAIL_USER"),
  };
}

export function buildEmail(payload: ContactPayload): { subject: string; text: string } {
  if (payload.formType === "enquiry") {
    return {
      subject: `Motoguru General Enquiry from ${payload.fullName}`,
      text: [
        "Form: General Enquiry",
        `Full name: ${payload.fullName}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `City: ${payload.city}`,
        "",
        "How can we help?",
        payload.message || "",
      ].join("\n"),
    };
  }

  const services =
    payload.services && payload.services.length > 0
      ? payload.services.join(", ")
      : "Not specified";

  return {
    subject: `Motoguru Partner Request from ${payload.workshopName}`,
    text: [
      "Form: Join as Partner",
      `Workshop / garage name: ${payload.workshopName}`,
      `Owner name: ${payload.ownerName}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `City: ${payload.city}`,
      `Services: ${services}`,
    ].join("\n"),
  };
}

export async function sendContactEmail(payload: ContactPayload) {
  const smtp = getSmtpConfig();
  const { subject, text } = buildEmail(payload);

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: `"${smtp.fromName}" <${smtp.fromEmail}>`,
    to: smtp.toEmail,
    replyTo: payload.email,
    subject,
    text,
  });
}
