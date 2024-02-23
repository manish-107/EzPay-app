import { signup, signin } from "../controllers/usersContriller.js";
import express from "express";
const router = express.Router();

router.route('/user/signup').post(signup);
router.route('/user/signin').post(signin);

export default router