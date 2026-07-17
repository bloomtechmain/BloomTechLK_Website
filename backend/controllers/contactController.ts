import { Request, Response } from 'express';
import { query } from '../db';
import { sendContactNotification } from '../mailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const submitContactInquiry = async (req: Request, res: Response): Promise<void> => {
  const { name, email, company, interests, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  if (!EMAIL_REGEX.test(email)) {
    res.status(400).json({ error: 'Please provide a valid email address' });
    return;
  }

  const safeInterests = Array.isArray(interests) ? interests : [];

  try {
    const sql = `
      INSERT INTO contact_inquiries (name, email, company, interests, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name, email, company, safeInterests, message];
    const result = await query(sql, values);

    res.status(201).json({
      message: 'Thank you for reaching out. A member of our team will get back to you within one business day.',
      inquiry: result.rows[0],
    });

    try {
      await sendContactNotification({ name, email, company, interests: safeInterests, message });
    } catch (mailErr) {
      console.error('Error sending contact notification email:', mailErr);
    }
  } catch (err) {
    console.error('Error submitting contact inquiry:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
