import express from "express";
import bodyparser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { connectionDb } from "./services/connection.service";
import { Routes } from "./routes";
dotenv.config()

export class AppServer {
    protected app: express.Application = express()
    constructor(){
        this.app.use(cors())
        this.app.use(bodyparser.json())
        this.app.use(bodyparser.urlencoded({ extended : true}))

        const port = process.env.PORT
        connectionDb()

        this.app.use('/api',new Routes().path)
        this.app.listen(port, () => {
            console.log("Server is running on port : ", port);
        });
    }
    
}