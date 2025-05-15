import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server started on ${PORT}...`);
});
