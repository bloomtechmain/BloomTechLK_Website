import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',           // Local development
    'https://bloomtech.lk',            // Production domain
    'https://www.bloomtech.lk',        // Production domain (www)
    /^https:\/\/.*\.pages\.dev$/       // Cloudflare preview deployments
  ],
  credentials: true
}));
app.use(express.json());

// Import Routes
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import expertRoutes from './routes/expertRoutes';
import portfolioRoutes from './routes/portfolioRoutes';
import contactRoutes from './routes/contactRoutes';
import './mailer';

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/expert', expertRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// Basic Route
app.get('/', (_req, res) => {
  res.send('BloomTechUS API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
