import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authProtect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'Unauthorized - No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ msg: 'Unauthorized - No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      console.error('JWT verification error:', error);
      return res.status(401).json({ msg: 'Unauthorized - Invalid token' });
    }
  } catch (error) {
    console.error('Error in authProtect middleware:', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

export default authProtect;
