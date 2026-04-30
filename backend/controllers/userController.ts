import { Request, Response } from 'express';
import * as db from '../db';

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const results = await db.query('SELECT * FROM users');
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
