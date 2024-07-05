import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { UserModel } from "./users.js";
import mongoose from "mongoose";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

await mongoose.connect(
  "mongodb+srv://mikalmckeever:password123!@cluster0.0ow6cml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/", async (req, res) => {
  res.json("Hello");
});

app.post("/createuser", (req, res) => {
  try {
    console.log(
      "Received Name is: ",
      req.body.name,
      ". ",
      "Received Email is: ",
      req.body.email,
      ". ",
      "Received Password is:",
      req.body.password,
      ". "
    );
    let newPerson = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newPerson.save().then((doc) => {
      console.log("User Created: ", doc);
      res.json({user1: doc})
    
    })
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, async () => {
  console.log("app is running");
});
