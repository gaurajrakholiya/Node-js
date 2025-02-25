import aws from "aws-sdk";
import { Upload } from "@aws-sdk/lib-storage";
import fs from "fs"
import dotenv from "dotenv";
dotenv.config();

export const putObject = async (file, fileName) => {
  // console.log(file.buffer);
  // console.log(file);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `/test/img/${fileName}`,
    Body: file.buffer,
  };

  fs.writeFile("./test" , file.buffer , (err)=>{
    console.log(err)
  })

  const s3client = new aws.S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey:
       process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  return s3client.upload(params);
};
