import { signup, signin, updateUser } from "../controllers/usersContriller.js";
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route('/user/signup').post(signup);
router.route('/user/signin').post(signin);
router.route('/user/').put(authMiddleware, updateUser);

export default router