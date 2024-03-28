import express from 'express';
import adminProtect from '../middleware/adminProtect.js';
import { checkPass } from '../controllers/adminControllers.js';

const router = express.Router();

router.post('/check', checkPass);

export default router;
