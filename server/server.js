 import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { UserModel } from "./users.js";
import mongoose from "mongoose";
import multer from "multer"
import { GridFSBucket } from "mongodb";
import { createReadStream, unlink } from "fs";
import path from "path"
import { fileURLToPath } from "url";

import Testimonials from "./routes/Testimonial.js"
import Blogs from "./routes/Blogs.js"
import CTA_Users from "./routes/CTA_Users.js"
import Metrics from "./routes/Metrics.js"
import Settings from "./routes/Settings.js"
import Trainers from "./routes/Trainers.js"
import {router as Users} from "./routes/Users.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

await mongoose.connect(
  "mongodb+srv://mikalmckeever:password123!@cluster0.0ow6cml.mongodb.net/Website?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection


app.use("/Testimonials", Testimonials)
app.use("/Blogs1", Blogs)
app.use("/CTA_Users", CTA_Users)
app.use("/Metrics", Metrics)
app.use("/Settings", Settings)
app.use("/Trainers", Trainers)
app.use("/Users", Users)



app.listen(3001, async () => {
  console.log("app is running");
});

export default connection