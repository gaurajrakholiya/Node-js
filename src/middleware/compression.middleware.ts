import { NextFunction, Request, Response } from "express";
import sharp from "sharp";

export const compressor = (req: Request, res: Response, next: NextFunction) => {
  const input = "src/services/multer/uploads/photo 3.jpg";
  const output = "src/services/multer/uploads/compress.jpg";

  const compressionOptions = {
    quality: 50,
    progressive: true,
    force: false,
  };

  sharp(input)
    .jpeg(compressionOptions)
    .toFile(output, (err, info) => {
      console.log(err);  // it will log : null
    });
};
