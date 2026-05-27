import { query } from './db';

const migrateGoogleAuth = async (): Promise<void> => {
  const sql = `
    ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(255) UNIQUE;
    ALTER TABLE users ALTER COLUMN password DROP NOT NULL;
  `;
  try {
    await query(sql);
    console.log('Database migrated for Google Auth successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error migrating database:', err);
    process.exit(1);
  }
};

migrateGoogleAuth();
