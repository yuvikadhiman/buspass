import authProtect from './authProtect.js';

const adminProtect = async (req, res, next) => {
  try {
    await authProtect(req, res, next);
    if (req.user.role != 'admin') {
      return res.status(404).json({ msg: 'You are not authorized' });
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error' });
  }
};

export default adminProtect;
