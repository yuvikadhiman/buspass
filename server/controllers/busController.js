import {buses} from '../utils/data.js';

export const getBuses = (req, res) => {
  try {
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
