import express from 'express'
import { userRoutes } from './modules/user/user.routes'

export class Routes {
    route = express.Router()
    path(){
        this.route.use('/user',new userRoutes().router)
    }
}