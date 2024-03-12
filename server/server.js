import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';

import connectDB from './database/connectDB.js';
import authRouter from './routes/authRoutes.js';
import passRouter from './routes/passRoutes.js';
import adminRouter from './routes/adminRoutes.js';

dotenv.config({ path: '../.env' });

const PORT = process.env.PORT || 3001;
const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', authRouter);
app.use('/api/user', passRouter);
app.use('/admin', adminRouter);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
