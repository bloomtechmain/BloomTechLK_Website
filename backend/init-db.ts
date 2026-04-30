import { query } from './db';

const createUsersTable = async (): Promise<void> => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      company VARCHAR(150),
      job_title VARCHAR(100),
      role VARCHAR(20) DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await query(sql);
    console.log('Users table created successfully');
  } catch (err) {
    console.error('Error creating users table:', err);
  }
};

const createExpertInquiriesTable = async (): Promise<void> => {
  const sql = `
    CREATE TABLE IF NOT EXISTS expert_inquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      phone VARCHAR(20),
      company VARCHAR(150),
      job_title VARCHAR(100),
      service_slug VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await query(sql);
    console.log('expert_inquiries table created successfully');
  } catch (err) {
    console.error('Error creating expert_inquiries table:', err);
  }
};

const init = async () => {
  await createUsersTable();
  await createExpertInquiriesTable();
  process.exit(0);
}

init();
