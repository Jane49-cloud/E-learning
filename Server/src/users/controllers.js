import User from "./models.js";
import { hashPassword, comparePassword } from "../../helpers/bcrypt.js";
import jwt from "jsonwebtoken";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config();

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "us-east-1",
};

AWS.config.update(awsConfig);
const SES = new AWS.SES();

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
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
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
        success: false,
        message: "User not found",
        error: "User not found",
      });
      return;
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      res.send({
        success: false,
        message: "Incorrect password",
        error: "Incorrect password",
      });
      return;
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    user.password = undefined;

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.send({
      success: true,
      message: "User logged in successfully",
      data: user,
      token: token,
    });

    console.log(user);
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: error.message || "Password or email is incorrect",
      error: error.message || "Password or email is incorrect",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie();
    res.send({
      success: true,
      message: "Logout successful...",
    });
    return;
  } catch (error) {
    res.send({
      success: false,
      message: "Logout failed...",
    });
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      success: true,
      message: "data fetched successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
};

export const testEmail = async (req, res) => {
  try {
    const params = {
      Source: process.env.EMAIL_FROM,
      Destination: {
        ToAddresses: ["janendirangu49@gmail.com"],
      },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
            <html>
            <body>
            <h1>Hello</h1>
            <p>Testing email</p>
            <
            /body>
            </html>
            `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Test email",
        },
      },
    };

    const emailSent = SES.sendEmail(params).promise();
    emailSent.then((data) => {
      console.log(data);
      res.send({
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const shortCode = nanoid(6).toUpperCase();
    const user = await User.findOneAndUpdate(
      { email },
      { passwordResetCode: shortCode }
    );

    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
        error: "User not found",
      });
    }

    const params = {
      Source: process.env.EMAIL_FROM,
      Destination: {
        ToAddresses: [email],
      },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <html>
              <head>
                <title>Password Reset</title>
              </head>
              <body>
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h2>Password Reset</h2>
                  <p>Hello,</p>
                  <p>You have requested to reset your password. Click the link below to proceed with the password reset process:</p>
                  <p>Use this code to reset your password:<span style="color:red"> ${shortCode}</span></p>
                  <p>If you did not request this password reset, please ignore this email.</p>
                  <p>Best regards,</p>
                  <p>E-student Team</p>
                </div>
              </body>
              </html>
              `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Reset Password",
        },
      },
    };

    const emailSent = SES.sendEmail(params).promise();
    emailSent.then((data) => {
      console.log(data);
      res.send({
        success: true,
        message: "Email sent successfully",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, code, password } = req.body;
    // console.table([email, code, password]);
    const hashedPassword = await hashPassword(password);
    const user = await User.findOneAndUpdate(
      {
        email,
        passwordResetCode: code,
      },
      {
        password: hashedPassword,
        passwordResetCode: "",
      }
    ).exec();
    res.send({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.log(error);
  }
};
