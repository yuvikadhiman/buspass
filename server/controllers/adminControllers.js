import Pass from '../models/Pass.js';

export const checkPass = (req, res) => {
  try {
    const { id } = req.body;
    const newId = ` ${id}`
    const pass = Pass.find()
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error' });
  }
};
