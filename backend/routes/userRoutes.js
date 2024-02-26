import { signup, signin, updateUser, getUserBulk } from "../controllers/usersContriller.js";
import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route('/user/signup').post(signup);
router.route('/user/signin').post(signin);
router.route('/user/updateUser').put(authMiddleware, updateUser);
router.route('/user/bulk').get(getUserBulk);

export default router