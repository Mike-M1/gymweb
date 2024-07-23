import express from "express";
const router = express.Router();
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import connection from "../server.js";

const CTAContactSchema = new mongoose.Schema(
  {
    Name: String,
    Email: String,
  },
  { collection: "CTAContacts" }
);

const CTAContactModel = mongoose.model("CTAContacts", CTAContactSchema);

// Route To Read/Get All Blog Post
router.get("/", async (req, res) => {
  const users = await CTAContactModel.find();
});

//Route To Find Specific Blog
router.get("/:id", async (req, res) => {
  let data = await CTAContactModel.findOne({ id: req.params.id });
  if (data == null) {
    console.log(data);
    res.send({ data });
  } else if (data != null) {
    res.send({ data, confirm: "User Exists" });
  }
});

// Route to Create CTAContact Profile
router.post("/CreateCTAContactProfile", async (req, res) => {
  let user = req.body.user;
  let response = await CTAContactModel.create(req.body);
  res.send(response);
});

//Route To Update CTAContact Profile
router.put("/updateCTAContactProfile/:id", async (req, res) => {
  let id = req.params.id;
  let updateUser = await CTAContactModel.updateOne({ id: id });
});

//Route To Delete CTAContact Profile
router.delete("/deleteCTAContact/:id", async (req, res) => {
  let id = req.params.id;
  let deletedCTAContact = await CTAContactModel.deleteOne({ id: id });
});

export default router;
