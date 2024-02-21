import { signup } from "../controllers/usersContriller.js";
import express from "express";
const router = express.Router();

router.route('/user/signup').post(signup);

export default router