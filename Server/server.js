import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connection from "./database/db.js";
import userRoutes from "./src/users/routes.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/users", userRoutes);

app.listen(port, () => console.log(`listening on ${port}`));

connection();
