import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Buses from '../models/Buses.js';
import { buses } from './data.js';

dotenv.config({ path: '../../.env' });

const insertionData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    Buses.insertMany(buses)
      .then(() => {
        console.log('Insertion successful.');
      })
      .catch((err) => console.log(err))
      .finally(() => {
        mongoose.disconnect();
      });
  } catch (error) {
    console.error('Error: ', error);
  }
};

insertionData();
