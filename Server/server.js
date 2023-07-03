import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on ${port}`));

connection();
