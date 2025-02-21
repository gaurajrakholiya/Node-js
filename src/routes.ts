import express from 'express'
import { userRoutes } from './modules/user/user.routes'
import { profileRoutes } from './modules/profile/profile.routes'

export class Routes {
    route = express.Router()
    path(){
        this.route.use('/user',new userRoutes().router)
        this.route.use('/profile',new profileRoutes().router)
        return this.route
    }
}