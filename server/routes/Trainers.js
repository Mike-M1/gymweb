import express from "express";
const router = express.Router();
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import connection from "../server.js";

const TrainerSchema = new mongoose.Schema(
  {
    Name: String,
    Expertise: String,
    Blurb: String,
    Services: String,
  },
  { collection: "Trainers" }
);

const TrainerModel = mongoose.model("Trainers", TrainerSchema);

// Route To Read/Get All Blog Post
router.get("/", async (req, res) => {
  const users = await TrainerModel.find();
  res.send(users)
});

//Route To Find Specific Blog
router.get("/:id", async (req, res) => {
  let data = await TrainerModel.findOne({ id: req.params.id });
  if (data == null) {
    console.log(data);
    res.send({ data });
  } else if (data != null) {
    res.send({ data, confirm: "User Exists" });
  }
});

// Route to Create Trainer Profile
router.post("/CreateTrainerProfile", async (req, res) => {
  let user = req.body.user;
  let response = await TrainerModel.create(req.body);
  res.send(response);
});

//Route To Update Trainer Profile
router.put("/updateTrainerProfile/:id", async (req, res) => {
  let id = req.params.id;
  let updateUser = await TrainerModel.updateOne({ id: id }, {$set: {blurb: req.body.blurb}});
});

//Route To Delete Trainer Profile
router.delete("/deleteTrainer/:id", async (req, res) => {
  let id = req.params.id;
  let deletedTrainer = await TrainerModel.deleteOne({ id: id });
});

export default router;
