import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authProtect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ msg: 'Unauthorized - No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ msg: 'Unauthorized - No token provided' });
    }
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error' });
  }
};

export default authProtect;
