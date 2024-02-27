import mongoose from "mongoose";
import { asyncHandler } from "../middlewares/asyncHandler";
import { accountModel } from "../models/accountModel";
import { userModel } from "../models/userModel";

const getBalance = asyncHandler(async (req, res) => {
    const userId = await req.userId;

    const account = await accountModel.findOne({
        userId
    })

    res.json({
        balance: account.balance
    })
})

const transferAmt = asyncHandler(async (req, res) => {
    try {

        const session = await mongoose.startSession();
        session.startTransaction();
        const { amount, to } = req.body;

        const account = await userModel.findOne({
            userId: req.userId
        }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            })
        }

        const toAccount = await userModel.findOne({
            userId: to
        }).session(session);

        if (!toAccount) {
            session.abortTransaction();
            res.status(400).json({
                message: "User not found"
            })
        }

        await userModel.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await userModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.json({
            message: "transfer completed"
        });

    } catch (error) {
        console.log(error)
        session.abortTransaction();
        res.status(500).json({
            message: "Error occurred"
        })
    }

})


export { getBalance, transferAmt }