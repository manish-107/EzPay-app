import { getBalance, transferAmt } from "../controllers/accountController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import express from 'express';
const accRouter = express.Router();

accRouter.route('/transfer').post(authMiddleware, transferAmt);
accRouter.route('/balance').get(authMiddleware, getBalance);

export default accRouter