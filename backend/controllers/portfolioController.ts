import { Request, Response } from 'express';
import { query } from '../db';

export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, status, featured } = req.query;

    let sql = 'SELECT * FROM portfolio_projects WHERE is_active = true';
    const params: unknown[] = [];
    let idx = 1;

    if (category && category !== 'All') {
      sql += ` AND category = $${idx++}`;
      params.push(category);
    }
    if (status && status !== 'all') {
      sql += ` AND status = $${idx++}`;
      params.push(status);
    }
    if (featured === 'true') {
      sql += ' AND featured = true';
    }

    sql += ' ORDER BY featured DESC, display_order ASC, created_at DESC';

    const result = await query(sql, params);
    res.json({ projects: result.rows, total: result.rowCount });
  } catch (err) {
    console.error('Portfolio getProjects error:', err);
    res.status(500).json({ message: 'Failed to fetch portfolio projects' });
  }
};

export const getProjectBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;
    const result = await query(
      'SELECT * FROM portfolio_projects WHERE slug = $1 AND is_active = true',
      [slug]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.json({ project: result.rows[0] });
  } catch (err) {
    console.error('Portfolio getProjectBySlug error:', err);
    res.status(500).json({ message: 'Failed to fetch project' });
  }
};
