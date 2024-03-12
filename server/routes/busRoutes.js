import express from 'express';
import { getBuses } from '../controllers/busController.js';

const router = express.Router();

router.get('/buses', getBuses);

export default router;
