import { v2 as cloudinary } from 'cloudinary';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    let { imgUrl } = req.body;

    if (password === '') {
      return res.status(400).json({ error: 'Enter a password' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'Email already exist' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (imgUrl) {
      let uploadedResponse = await cloudinary.uploader.upload(imgUrl, {
        folder: 'buspass',
      });
      imgUrl = uploadedResponse.secure_url;
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      photo: imgUrl,
    });

    if (newUser) {
      let userDetails = newUser;
      userDetails = userDetails.toObject();
      if (userDetails.role != 'admin') {
        delete userDetails.role;
      }

      const token = generateTokenAndSetCookie(newUser, res);

      await newUser.save();
      res
        .status(201)
        .json({ msg: 'Account created successfully', userDetails, token });
    } else {
      return res.status(400).json({ error: 'Invalid user data' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ''
    );

    if (!user || !isPasswordCorrect) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    let userDetails = user;
    userDetails = userDetails.toObject();
    if (user.role != 'admin') {
      delete userDetails.role;
    }

    const token = generateTokenAndSetCookie(userDetails, res);

    return res.status(200).json({
      msg: 'User Logged in Successful',
      userDetails,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ msg: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
