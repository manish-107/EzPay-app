import { getBalance, transferAmt, localtransferAmt } from "../controllers/accountController.js";
import { transactionHistory } from "../controllers/transactions.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import express from 'express';
const accRouter = express.Router();

accRouter.route('/transfer').post(authMiddleware, transferAmt);
accRouter.route('/localtransfer').post(authMiddleware, localtransferAmt);
accRouter.route('/balance').get(authMiddleware, getBalance);
accRouter.route('/transactionHistory').get(authMiddleware, transactionHistory);

export default accRouter