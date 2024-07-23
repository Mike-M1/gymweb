import express from "express";
const router = express.Router();
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import connection from "../server.js";

const MetricsSchema = new mongoose.Schema(
  {
    Time_40: [String],
    Vertical: [String],
    Power_Output: [String],
    Mile_Time: [String],
  },
  { collection: "Metrics" }
);

const MetricsModel = mongoose.model("Metrics", MetricsSchema);


//Route To Find Specific Users Metrics
router.get("/:id", async (req, res) => {
  let data = await MetricsModel.findOne({ id: req.params.id });
  if (data == null) {
    console.log(data);
    res.send({ data });
  } else if (data != null) {
    res.send({ data, confirm: "User Exists" });
  }
});


// Route to Create Metrics Profile
router.post("/CreateMetricsProfile", async (req, res) => {
  let user = req.body.user;
  let response = await MetricsModel.create(req.body);
  res.send(response);
});


//Route To Update Metrics Profile
router.put("/updateMetricsProfile/:id", async (req, res) => {
  let id = req.params.id;
  let updateMetrics = await MetricsModel.updateOne({ id: id });
});


//Route To Delete Metrics Profile
router.delete("/deleteMetrics/:id", async (req, res) => {
  let id = req.params.id;
  let deletedMetrics = await MetricsModel.deleteOne({ id: id });
});


export default router;
