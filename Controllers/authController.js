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
