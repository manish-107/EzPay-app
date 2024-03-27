import { signup, signin, updateUser, getUserBulk } from "../controllers/usersContriller.js";
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/updateUser').put(authMiddleware, updateUser);
router.route('/bulk').get(authMiddleware, getUserBulk);

export default router