const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res, next) => {
  const { email, password, businessName, businessCode, username } = req.body;
  try {
    const user = new User({ email, password, businessName, businessCode, username });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
 
  }}