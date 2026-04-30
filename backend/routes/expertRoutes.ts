import { Router } from 'express';
import { submitExpertInquiry } from '../controllers/expertController';

const router = Router();

router.post('/submit', submitExpertInquiry);

export default router;
