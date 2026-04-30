import { Request, Response } from 'express';
import * as db from '../db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { User } from '../types';

const JWT_SECRET = process.env.JWT_SECRET || 'bloomtech_secret_key';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req: Request, res: Response): Promise<void> => {
  const { token } = req.body as { token: string };

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      res.status(400).json({ error: 'Invalid Google token' });
      return;
    }

    const { name, email, sub: google_id } = payload;

    // Check if user exists
    let userResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    let user: User = userResult.rows[0];

    if (!user) {
      // Create new user for google login
      const newUser = await db.query(
        'INSERT INTO users (name, email, google_id) VALUES ($1, $2, $3) RETURNING id, name, email',
        [name, email, google_id]
      );
      user = newUser.rows[0];
    } else if (!user.google_id) {
      // Link google account if email matches but google_id is missing
      await db.query('UPDATE users SET google_id = $1 WHERE id = $2', [google_id, user.id]);
      user.google_id = google_id;
    }

    // Generate JWT
    const jwtToken = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Google login successful',
      token: jwtToken,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, company, job_title } = req.body as { name: string; email: string; password: string; company?: string; job_title?: string };

  try {
    // Check if user exists
    const userExist = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExist.rows.length > 0) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    const newUser = await db.query(
      'INSERT INTO users (name, email, password, company, job_title) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, email, company, job_title',
      [name, email, hashedPassword, company, job_title]
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: newUser.rows[0],
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body as { email: string; password: string };

  try {
    const userResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user: User = userResult.rows[0];

    if (!user) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password!);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await db.query('SELECT id, name, email FROM users WHERE id = $1', [req.user!.id]);
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
