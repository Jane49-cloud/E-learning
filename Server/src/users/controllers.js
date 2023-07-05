import User from "./models.js";
import { hashPassword, comparePassword } from "../../helpers/bcrypt.js";

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
