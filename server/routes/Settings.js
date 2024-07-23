import express from "express";
const router = express.Router();
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import connection from "../server.js";
import { UserModel } from "../users.js";



//Route To Find Specific Blog
router.get("/:id", async (req, res) => {
  let data = await UserModel.findOne({ id: req.params.id });
  if (data == null) {
    console.log(data);
    res.send({ data });
  } else if (data != null) {
    res.send({ data, confirm: "User Exists" });
  }
});

//Route To Update Trainer Profile
router.put("/updateUserSettings/:id", async (req, res) => {
  let id = req.params.id;
  let updateUserSettings = await UserModel.updateOne({ id: id });
});

//Route To Delete Trainer Profile
router.delete("/deleteSettings/:id", async (req, res) => {
  let id = req.params.id;
  let deletedUser = await UserModel.deleteOne({ id: id });
});

export default router;
