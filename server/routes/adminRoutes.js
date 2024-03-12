import express from 'express';
import adminProtect from '../middleware/adminProtect.js';
import { checkPass } from '../controllers/adminControllers.js';

const router = express.Router();

router.get('/check', adminProtect, checkPass);

export default router;
