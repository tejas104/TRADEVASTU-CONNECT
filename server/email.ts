export async function sendContactEmail(data: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  // For now, log the contact. In production, integrate with SendGrid/Resend/etc
  console.log("📧 Contact Email:", {
    from: data.email,
    name: data.name,
    service: data.service,
    message: data.message,
    timestamp: new Date().toISOString(),
  });

  // TODO: Integrate with email service
  // Example with Resend:
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@tradevastu.com',
  //   to: process.env.CONTACT_EMAIL!,
  //   subject: `New Contact: ${data.name} - ${data.service}`,
  //   html: `...`,
  // });
}
