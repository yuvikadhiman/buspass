import express from 'express';
import authProtect from '../middleware/authProtect.js';
import {
  bookMyPass,
  bookMyPassCrypto,
  getMyPass,
} from '../controllers/passControllers.js';

const router = express.Router();

router.get('/get-pass', authProtect, getMyPass);
router.post('/book', authProtect, bookMyPass);
router.post('/book-crypto', authProtect, bookMyPassCrypto);

export default router;
