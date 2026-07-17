import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: (Number(process.env.SMTP_PORT) || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

transporter.verify()
  .then(() => console.log('✅  SMTP transporter ready'))
  .catch((err) => console.error('⚠️  SMTP transporter verification failed:', err.message));

interface ContactInquiry {
  name: string;
  email: string;
  company?: string;
  interests?: string[];
  message: string;
}

export const sendContactNotification = async (inquiry: ContactInquiry): Promise<void> => {
  const { name, email, company, interests, message } = inquiry;

  await transporter.sendMail({
    from: `"BloomTech Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_NOTIFY_EMAIL || 'info@bloomtech.lk',
    replyTo: email,
    subject: `New Contact Inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || '-'}`,
      `Interested in: ${interests && interests.length ? interests.join(', ') : '-'}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  });
};

export default transporter;
