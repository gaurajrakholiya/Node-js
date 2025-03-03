import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandOutput,
  GetObjectAclCommand,
  GetObjectCommand,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

export const s3client = new S3Client({
  // region: process.env.AWS_REGION || "us-east-1",
  endpoint: process.env.BUCKET_URL,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export const putObject = async (file, fileName) => {
  try {
    // const spacesEndpoint = new S3Client.Endpoint(S3CONFIG[i].AWS_CONFIG.BUCKET_URL);

    const filePath = `test/img/image/${fileName}`;

    const params = {
      Bucket: process.env.BUCKET_NAME as string,
      Key: filePath,
      Body: file.buffer,
      ContentType: file.mimetype || "image/png",
    };

    // Upload to S3
    const command = new PutObjectCommand(params);
    const response = await s3client.send(command);

    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const getObject = async (fileName) => {
  const image_path = `test/img/image/${fileName}`

  const qwer = new GetObjectCommand({
    Bucket: process.env.BUCKET_NAME as string,
    Key: image_path,
  });

  const fileUrl = await getSignedUrl(s3client, qwer);
  console.log("File uploaded successfully! URL:", fileUrl);
  return { fileUrl };
};
