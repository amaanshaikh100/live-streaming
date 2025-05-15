import express from "express";
import Joi from "joi";
import ExpressValidation from "express-joi-validation";
import { postLogin, postRegister } from "../controllers/controllers.js";

const router = express.Router();

const validator = ExpressValidation.createValidator({});

router.get("/register", postRegister);
router.get("/login", postLogin);

export default router;
