import express from "express";
import { register, login, logout, currentUser } from "./controllers.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/current-user", authMiddleware, currentUser);

export default router;
