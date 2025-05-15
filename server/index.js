import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth", authRoutes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server started on ${PORT}...`);
});
