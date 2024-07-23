import express, { response } from "express";
const router = express.Router();
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import connection from "../server.js";

const blogSchema = new mongoose.Schema(
  {
    Title: String,
    Author: String,
    Description: String,
    Content: String,
  },
  { collection: "Blogs" }
);

const BlogModel = mongoose.model("Blogs", blogSchema);

// Route To Read/Get All Blog Post
router.get("/", async (req, res) => {
  const response = await BlogModel.find();
  res.send(response)
});

//Route To Find Specific Blog
router.get("/:id", async (req, res) => {
  let data = await BlogModel.findOne({ id: req.params.id });
  if (data == null) {
    console.log(data);
    res.send({ data });
  } else if (data != null) {
    res.send({ data, confirm: "User Exists" });
  }
});

// Route to Create Blog Post
router.post("/CreateBlog", async (req, res) => {
  let user = req.body.user;
  let response = await BlogModel.create(req.body);
  res.send(response);
});

//Route To Update Blog Post
router.put("/updateBlog/:id", async (req, res) => {
  let id = req.params.id;
  let updateUser = await UserModel.updateOne({ id: id });
});

//Route To Delete Blog Post
router.delete("/deleteBlog/:id", async (req, res) => {
  let id = req.params.id;
  let deletedUser = await BlogModel.deleteOne({ id: id });
});

export default router;
