import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("", async (req, res) => {
  res.json("Hello");
});

app.listen(3001, async () => {
  console.log("app is running");
});
