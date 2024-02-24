import { signup, signin, updateUser } from "../controllers/usersContriller.js";
import express from "express";
const router = express.Router();

router.route('/user/signup').post(signup);
router.route('/user/signin').post(signin);
router.route('/user/').put(updateUser);

export default router