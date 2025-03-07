import express from 'express'
import { userRoutes } from './modules/user/user.routes'
import { profileRoutes } from './modules/profile/profile.routes'
import { filesRoutes } from './modules/files/files.routes'
import { PostRoutes } from './modules/posts/posts.routes'

export class Routes {
    route = express.Router()
    path(){
        this.route.use('/user',new userRoutes().router)
        this.route.use('/profile',new profileRoutes().router)
        this.route.use('/files',new filesRoutes().router)
        this.route.use('/post',new PostRoutes().router)
        return this.route
    }
}