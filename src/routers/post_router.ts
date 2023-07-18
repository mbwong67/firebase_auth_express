// Express Post Routers
import { Router } from "express";
import {
  createNewBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getOneBlogPost,
  upDateBlogPost,
} from "../controllers/post_controller";
import { upload } from "../middleware/uplaod_image_middleware";

const router = Router();

// Route Handlers
router.post("/", upload.single("image"), createNewBlogPost);
router.get("/", getAllBlogPosts);
router.get("/:id", getOneBlogPost);
router.put("/:id", upDateBlogPost);
router.delete("/:id", deleteBlogPost);

export default router;
