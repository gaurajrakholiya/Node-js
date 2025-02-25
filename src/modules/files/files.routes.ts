import { Router } from "express";
import { upload , uploadDocus } from "../../services/multer/multer.service";
import { filescontroller } from "./files.controller";
import { multerErrorHandler } from "../../middleware/multer.middleware";
import { compressor } from "../../middleware/compression.middleware";


export class filesRoutes {
  router = Router();
  protected fc: filescontroller = new filescontroller();
  constructor() {
    // here in single() we will pass the same attribute which we have write in the html form
    this.router.post("/upload", upload.single('avatar') ,multerErrorHandler, this.fc.uploadFile);
    this.router.post("/upload-multiple", uploadDocus.array('avatars') ,multerErrorHandler  , this.fc.uploadFile);
  }
}
