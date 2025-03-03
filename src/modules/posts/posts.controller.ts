import { Request, Response } from "express";
import db from "../../models";
import { getObject, putObject } from "../../services/multer/s3.service";

export class postController {
  async createPost(req: Request, res: Response) {
    try {
      // const { image_path } = req.body
      const file = req.file;

      console.log(file);
      const filename = file.originalname;
      const image_path = `test/img/image/${filename}`;

      const result = await putObject(file, filename);

      const post = db.Posts.create({
        title: "this is itt",
        content: "werwrw",
        user_id: 4,
        image_path,
      });

      res.status(200).send({
        post,
        message: "post created successfully",
      });
    } catch (error) {}
  }

  async getPost(req: Request, res: Response) {
    try {
      const file = await db.Posts.findAll({
        attributes: ['title','image_path'],
      });
      res.status(200).send({
        file,
        message:"get all files"
      })
    } catch (error) {
        res.status(400).send({
            message:error
        })
    }

  }
}
