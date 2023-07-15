import express from "express";
import {
  register,
  login,
  logout,
  currentUser,
  testEmail,
  forgotPassword,
  resetPassword,
} from "./controllers.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/current-user", authMiddleware, currentUser);
router.get("/send-email", testEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
