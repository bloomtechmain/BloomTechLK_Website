import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import expertRoutes from './routes/expertRoutes';

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/expert', expertRoutes);

// Basic Route
app.get('/', (_req, res) => {
  res.send('BloomTechUS API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
