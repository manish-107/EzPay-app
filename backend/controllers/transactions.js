import { asyncHandler } from "../middlewares/asyncHandler";
import { transactionModel } from "../models/transactionDetailsModel";

const transactionHistory = asyncHandler(async (req, res) => {
    try {
        const userId = await req.userId;
        const userHistory = await transactionModel.find({ fromId: userId })
        return res.json({
            userHistory
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

export { transactionHistory }