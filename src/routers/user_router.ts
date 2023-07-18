// Express User Router
import { Router } from "express";
import User from "../models/user_model.js";
import { createNewUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/user.controller";

const router = Router();

// Route Handlers
router.post("/", createNewUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;