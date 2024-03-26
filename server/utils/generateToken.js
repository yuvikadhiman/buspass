import jwt from 'jsonwebtoken';

const generateTokenAndSetHeader = (user, res) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });

  res.setHeader('Authorization', `Bearer ${token}`);

  return token;
};

export default generateTokenAndSetHeader;
