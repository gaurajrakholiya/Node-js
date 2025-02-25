import { NextFunction, Request, Response } from "express";
import multer from "multer";

export const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({ error: err.message });
  } else {
    next(err); // Pass other errors to the next error handler
  }
};