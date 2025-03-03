import { Request, Response } from "express";
import { putObject } from "../../services/multer/s3.service";
// import { upload } from "../../services/multer/multer.service";
import { v4 as uuidv4 } from "uuid";
export class filescontroller {
  uploadFile = async (req: Request, res: Response) => {
    try {
      //  console.log(req.file )

      // if you add return in this loop then it will provide big error like Record<string, any>>>
      // if ((req as any).invalidFiles) {
      //   res
      //     .status(400)
      //     .json({
      //       warning: true,
      //       message:
      //         "some files are not uploaded due to wrong type:" +
      //         (req as any).invalidFiles.join(" "),

      // to validate single files
      // if (!(req as any).errorMessage) {
      //   res.status(200).json({
      //     message: "file uploaded successfully",
      //   });

      // } else {
      //   res.status(422).json({
      //     message:
      //       "file is not uploaded due to wrong type"
      // })
      // }

      const { file } = req;
      const fileName = uuidv4(); // Genera

      const result = await putObject(file, fileName);
      

      res.status(200).json({
        message: "uploaded to BUCKET",
        result,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };
}
