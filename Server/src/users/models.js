import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    role: {
      type: [String],
      required: true,
      default: ["subscriber"],
      enum: ["subscriber", "admin", "instructor"],
    },

    stripe_account_id: {},
    stripe_seller: {},
    stripeSessions: {},
    passwordResetCode: {},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
