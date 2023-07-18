"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_gridfs_storage_1 = require("multer-gridfs-storage");
const storage = new multer_gridfs_storage_1.GridFsStorage({
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
        }
        else {
            return `${Date.now()}_${file.originalname}`;
        }
    },
});
exports.upload = (0, multer_1.default)({ storage });
