import Pass from '../models/Pass.js';

export const checkPass = (req, res) => {
  try {
    const { busId } = req.body;

    const pass = Pass.find({ _id: busId });

    if (!pass) {
      return res.json(404).json({ err: 'No pass found' });
    }

    res.json({ msg: 'Pass is valid' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
