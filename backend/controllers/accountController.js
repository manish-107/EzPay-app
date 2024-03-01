import mongoose from "mongoose";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { accountModel } from "../models/accountModel.js";

const getBalance = asyncHandler(async (req, res) => {
    const userId = req.userId;

    const account = await accountModel.findOne({ userId });

    if (!account) {
        return res.status(404).json({ message: "Account not found" });
    }

    res.json({ balance: account.balance });
});

const transferAmt = asyncHandler(async (req, res) => {
    const userId = req.userId;
    console.log(userId)
    const demno = await accountModel.findOne({ userId })
    console.log(demno)
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await accountModel.findOne({ userId: req.userId }).session(session);
    // console.log(account)
    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await accountModel.findOne({ userId: to }).session(session);
    console.log(toAccount)
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await accountModel.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await accountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});

export { getBalance, transferAmt };
