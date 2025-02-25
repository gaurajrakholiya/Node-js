import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectionDb } from "./services/connection.service";
import { Routes } from "./routes";
import multer from 'multer';

dotenv.config();

export class AppServer {
  protected app: express.Application = express();
  constructor() {
    this.app.use(cors());
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: true }));

    const port = process.env.PORT;
    connectionDb();

    const route = new Routes();
    this.app.use("/api", route.path());


    this.app.listen(port, () => {
      console.log("Server is running on port : ", port);
    });
  }
}
