import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("this is a register route");
});

router.get("/login", (req, res) => {
  res.send("this is a login route");
});

export default router;
