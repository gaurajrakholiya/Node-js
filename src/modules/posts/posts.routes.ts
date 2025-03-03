import { Router } from "express"
import { upload } from "../../services/multer/multer.service"
import { postController } from "./posts.controller"


export class PostRoutes {
    router = Router()
    protected pc : postController = new postController()
    constructor() {
        this.router.post('/create-post' , upload.single('avatar') , this.pc.createPost)
        this.router.get('/get-post' , this.pc.getPost)  
    }
}