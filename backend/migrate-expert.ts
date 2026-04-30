import { query } from './db';

const migrate = async () => {
  try {
    // Add phone column if not exists
    await query('ALTER TABLE expert_inquiries ADD COLUMN IF NOT EXISTS phone VARCHAR(20)');
    console.log('Migration successful: phone column added to expert_inquiries');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
};

migrate();
