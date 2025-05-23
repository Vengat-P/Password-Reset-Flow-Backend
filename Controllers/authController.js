import users from "../Models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sendEmail from "../utils/nodeMailer.js";

dotenv.config();

//Register user

export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new users({ username, email, password: hashPassword });
    await newUser.save();
    res
      .status(200)
      .json({ message: "user Registered Successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login user

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    user.token = token;
    await user.save();
    res
      .status(200)
      .json({ message: "User Loggedin Successfully", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get user
export const getUser = async (req, res) => {
  try {
    const _id = req.user._id;
    const user = await users.findOne({ _id });
    res.status(200).json({ message: `welcome ${user.username}`, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
