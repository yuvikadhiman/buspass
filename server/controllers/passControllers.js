import Pass from '../models/Pass.js';

export const bookMyPass = async (req, res) => {
  try {
    const { from, to } = req.body;
    req.body.createdBy = req.user._id;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    const newPass = new Pass({
      from,
      to,
      validity: expirationDate.toISOString(),
      userId: req.body.createdBy,
    });

    await newPass.save();

    res.status(201).json({
      msg: 'Pass created successfully',
      pass: newPass,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const getMyPass = async (req, res) => {
  try {
    const passes = await Pass.find({ userId: req.user._id });
    if (!passes) {
      return res.status(201).json({ msg: `You don't have any pass` });
    }
    res.json(passes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
