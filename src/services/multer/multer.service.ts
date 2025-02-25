import multer from "multer";
import fs from "fs";
import path from "path";

// export const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const dir = "src/services/multer/uploads";
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//     // Date.now() + path.extname(file.originalname)
//   },
// });

export const storage = multer.memoryStorage() 

export const upload = multer({ storage , 
  fileFilter : function(req,file,cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
      cb(null , true)
    } else {
      (req as any).errorMessage = 'invalid file type!! upload files `jpg` or `png` '
      cb(null,false)
    }
  }
 });

export const uploadDocus = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "application/pdf") {
      cb(null, true);
    } else {
      // to validate multiple files
      !(req as any).invalidFiles
        ? ((req as any).invalidFiles = [file.originalname])
        : (req as any).invalidFiles.push(file.originalname);
      cb(null, false);
    }
  },
  limits: { fileSize:  5 * 1024 * 1024 }, // 5 MB
});
