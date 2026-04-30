import { Request, Response } from 'express';
import { query } from '../db';

export const submitExpertInquiry = async (req: Request, res: Response): Promise<void> => {
  const { name, email, phone, company, jobTitle, serviceSlug, message } = req.body;

  if (!name || !email || !serviceSlug || !message) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  try {
    const sql = `
      INSERT INTO expert_inquiries (name, email, phone, company, job_title, service_slug, message)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [name, email, phone, company, jobTitle, serviceSlug, message];
    const result = await query(sql, values);
    
    res.status(201).json({ 
      message: 'Inquiry submitted successfully. An expert will reach out soon.',
      inquiry: result.rows[0]
    });
  } catch (err) {
    console.error('Error submitting inquiry:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
