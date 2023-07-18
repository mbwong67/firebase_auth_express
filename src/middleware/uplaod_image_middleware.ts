// Upload Image with multer and Gridfs
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb+srv://teebhagg:teebhagg@cluster0.ibbgkwr.mongodb.net/?retryWrites=true&w=majority",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  file: (req, file) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      return new Promise((resolve, reject) => {
        const filename = file.originalname.split(".")[0];
        const fileInfo = {
          filename: `${Date.now()}_${filename}`,
          bucketName: "images",
        };
        resolve(fileInfo);
      });
    } else {
      return `${Date.now()}_${file.originalname}`;
    }
  },
});

export const upload = multer({ storage });
// export default upload;
