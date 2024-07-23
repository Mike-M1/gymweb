import express from "express";
const router = express.Router();
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import connection from "../server.js";

const TestimonialSchema = new mongoose.Schema(
  {
    Name: String,
    Goal_In_Training: String,
    Content: String,
  },
  { collection: "Testimonials" }
);

const TestimonialModel = mongoose.model("Testimonials", TestimonialSchema);

// Route To Read/Get All Testimonials
router.get("/", async (req, res) => {
  const testimonials = await TestimonialModel.find();
  res.send(testimonials)
});

//Route To Find Specific Testimonial
router.get("/:id", async (req, res) => {
  let data = await TestimonialModel.findOne({ id: req.params.id });
  if (data == null) {
    console.log(data);
    res.send({ data });
  } else if (data != null) {
    res.send({ data, confirm: "User Exists" });
  }
});

// Route to Create Testimonial
router.post("/CreateTestimonialProfile", async (req, res) => {
  let user = req.body.user;
  let response = await TestimonialModel.create(req.body);
  res.send(response);
});

//Route To Update Testimonial Profile
router.put("/updateTestimonialProfile/:id", async (req, res) => {
  let id = req.params.id;
  let updateUser = await TestimonialModel.updateOne({ id: id }, {$set: {name: req.body.name}});
});

//Route To Delete Testimonial Profile
router.delete("/deleteTestimonial/:id", async (req, res) => {
  let id = req.params.id;
  let deletedTrainer = await TestimonialModel.deleteOne({id: id})

});

export default router;
