// Express User Router
import asyncHandler from "express-async-handler";
import User from "../models/user_model";

// Create new User
export const createNewUser = asyncHandler(async (req, res) => {
  const { id, email, password } = req.body;
  try {
    const user = await User.create({ _id:id, email, password });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Get all Users
export const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Get one User
export const getOneUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Update User
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $set: { email, password } },
      { new: true }
    );
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Delete User
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});
