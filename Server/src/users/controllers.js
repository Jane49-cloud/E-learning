import User from "./models.js";
import { hashPassword, comparePassword } from "../../helpers/bcrypt.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("User already exists");
      return res.send({
        success: false,
        message: "user with that email already already exist",
      });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
    });

    const user = await newUser.save();

    res.send({
      success: "true",
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: "false",
      message: error.message || "User creation failed",
      error: error.message || "User creation failed",
    });
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.send({
        success: false, // Changed "false" to false
        message: "User not found",
        error: "User not found",
      });
      return; // Exit the function after sending the response
    }
    // password
    const isMatch = await comparePassword(password, user.password);

    // jwt
    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    user.password = undefined;

    // send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
    });

    res.send({
      success: true, // Changed "success" to true
      message: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: error.message || "password or email is incorrect",
      error: error.message || "password or email is incorrect",
    });
  }
};
