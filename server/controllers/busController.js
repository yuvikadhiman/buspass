import Buses from '../models/Buses.js';

export const getBuses = async (req, res) => {
  try {
    const { from, to } = req.body;
    let allBuses;
    const fromPattern = new RegExp(from, 'i');
    const toPattern = new RegExp(to, 'i');

    if (from) {
      allBuses = await Buses.find({ from: fromPattern });
    } else if (to) {
      allBuses = await Buses.find({ to: toPattern });
    } else {
      allBuses = await Buses.find({});
    }

    res.json({ buses: allBuses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
