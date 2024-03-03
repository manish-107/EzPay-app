import mongoose from "mongoose";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { accountModel } from "../models/accountModel.js";
import { transactionModel } from "../models/transactionDetailsModel.js";
import zod, { number } from "zod";

// Get balance for the current user
const getBalance = asyncHandler(async (req, res) => {
    const userId = req.userId;

    // Find the account associated with the user ID
    const account = await accountModel.findOne({ userId });

    // If no account found, return a 404 error
    if (!account) {
        return res.status(404).json({ message: "Account not found" });
    }

    // Return the balance
    res.json({ balance: account.balance });
});

const zodeTransfer = zod.object({
    amount: zod.number(),
    to: zod.string(),
    desc: zod.string()
})

// Transfer amount between two accounts using a transaction
const transferAmt = asyncHandler(async (req, res) => {
    // Start a new Mongoose session for the transaction
    const session = await mongoose.startSession();

    // Start a transaction within the session
    session.startTransaction();

    // Extract amount and recipient from request body
    const { amount, to } = req.body;
    const { success } = zodeTransfer.safeParse(req.body)
    if (!success) {
        res.status(400).json({
            message: "invalid credentials"
        })
    }
    // Fetch the sender's account within the transaction
    const account = await accountModel.findOne({ userId: req.userId }).session(session);

    // Check if sender's account exists and has sufficient balance
    if (!account || account.balance < amount) {
        // Abort the transaction if conditions are not met
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    // Fetch the recipient's account within the transaction
    const toAccount = await accountModel.findOne({ userId: to }).session(session);

    // Check if recipient's account exists
    if (!toAccount) {
        // Abort the transaction if recipient's account is not found
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer by updating balances for sender and recipient
    await accountModel.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await accountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction if everything is successful
    await session.commitTransaction();

    // Return success message
    res.json({
        message: "Transfer successful"
    });
});

// Local transfer amount without transaction
const localtransferAmt = asyncHandler(async (req, res) => {
    const userId = req.userId;
    const { Amount, to, desc } = req.body;
    try {
        // Find the sender's account
        const account = await accountModel.findOne({ userId })

        // Check if sender's account exists and has sufficient balance
        if (!account || account.balance < Amount) {
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        // Find the recipient's account
        const toAccount = await accountModel.findOne({ userId: to });

        // Check if recipient's account exists
        if (!toAccount) {
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        // Perform the transfer
        await accountModel.updateOne({ userId }, { $inc: { balance: -Amount } });
        await accountModel.updateOne({ userId: to }, { $inc: { balance: Amount } });
        const transaction = await transactionModel.create({
            fromId: userId,
            toId: to,
            sentAmount: Amount,
            transactionDesc: desc
        })
        // Return success message
        return res.json({
            transaction
        });
    } catch (error) {
        // Handle internal server error
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// Export the functions
export { getBalance, transferAmt, localtransferAmt };
