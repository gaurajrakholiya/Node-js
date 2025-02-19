import express from "express";
import { userController } from "./user.controller"

export class userRoutes {
    router = express.Router()
    protected uc: userController = new userController()
    constructor(){
        this.router.use('/user', this.uc.createUser)
    }
}
