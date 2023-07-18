// Express Post Routers
import { upload } from "../middleware/uplaod_image_middleware";
import BlogPost from "../models/post_model";
import asyncHandler from "express-async-handler"
import fs from 'fs'


// Get all BlogPosts
export const getAllBlogPosts = asyncHandler(async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    console.log(blogPosts);
    res.status(200).json(blogPosts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Get one BlogPost
export const getOneBlogPost = asyncHandler( async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.findById(id);
    console.log(blogPost);
    res.status(200).json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Update BlogPost
export const upDateBlogPost = asyncHandler( async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(
      id,
      { $set: { title, content } },
      { new: true }
    );
    console.log(blogPost);
    res.status(200).json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Create new BlogPost
export const createNewBlogPost = asyncHandler( async (req, res) => {
  const { title, content, } = req.body;
  // Upload Image to MongoDB
//   if (!req.file || !req.file.mimetype.startsWith("image/")) {
//     res.status(500).json({error:"Please select an image"});
//     return;
//   }

//   console.log(req.file.path)
//   if (fs.existsSync(req.file.path)) {
//       var img = fs.readFileSync(req.file.path);
//         var encode_img = img.toString('base64');
//         var image = {
//             contentType:req.file.mimetype,
//             image: new Buffer(encode_img,'base64')
//         };
    
      
//     } else {
//         res.status(404).json({error: "File not found"})
//     }
    try {
      const blogPost = await BlogPost.create({ title, content });
      console.log(blogPost);
      res.status(200).json(blogPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
});

// Delete BlogPost
export const deleteBlogPost = asyncHandler(  async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.findByIdAndDelete(id);
    console.log(blogPost);
    res.status(200).json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});
