import express from 'express';
import authProtect from '../middleware/authProtect.js';
import { bookMyPass, getMyPass } from '../controllers/passControllers.js';

const router = express.Router();

router.post('/book', authProtect, bookMyPass);
router.get('/get-pass', authProtect, getMyPass);

export default router;
