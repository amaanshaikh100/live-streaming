import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth", authRoutes);

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server started on ${PORT}...`);
    });
    console.log("Server connected to DB.");
  })
  .catch((err) => {
    console.log("DB connection failed. Server not started");
    console.log(err.message);
  });
