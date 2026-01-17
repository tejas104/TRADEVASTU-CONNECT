import nodemailer from "nodemailer";

export async function sendContactEmail(data: { name: string; email: string; message: string; }) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("⚠️ SMTP not configured. Email skipped.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
    subject: `New contact message from ${data.name}`,
    replyTo: data.email,
    text: data.message,
  });
}
