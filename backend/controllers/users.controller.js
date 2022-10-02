const jwt = require("jsonwebtoken");
const bycript = require("bcrypt");
const errorHandler = require("express-async-handler");

const userModel = require("../models/users.model");

const getUsers = errorHandler(async (req, res) => {
  const users = await userModel.find();

  res.json(users);
});

const registerUser = errorHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const userExist = await userModel.findOne({ email });
  if (userExist) {
    throw new Error("email already exist");
  }

  // hash password
  const salt = await bycript.genSalt(10);
  const hashedPassword = await bycript.hash(password, salt);

  // create user

  const user = userModel.create({ name, email, password: hashedPassword });

  if (user) {
    return res.status(200).json({
      message: "user added successfully",
      data: { ...user, token: generateToken(user._id) },
      status: "OK",
    });
  } else {
    res.status(400);
    throw new Error("something went wrong");
  }
});

const loginUser = errorHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user && (await bycript.compare(password, user.password))) {
    return res.status(200).json({
      message: "user loggin successfully",
      data: { ...user, token: generateToken(user._id) },
      status: "OK",
    });
  } else {
    res.status(400);
    throw new Error("Invalid criedentials");
  }
});

const getMe = errorHandler(async (req, res) => {
  const { name, email } = await userModel.findById(req.user._id);

  res.json({ message: "successful", data: { name, email }, status: "OK" });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  getUsers,
  loginUser,
  getMe,
};
