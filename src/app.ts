import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";
import { router } from "./routes";

dotenv.config();
const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const connection = mysql.createConnection(process.env.DATABASE_URL || "");

app.set("connection", connection);
app.use(router);
app.listen("5080", () => {
  connection.connect();
  console.log("http://localhost:5080");
});
