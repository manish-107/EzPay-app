import { asyncHandler } from "../middlewares/asyncHandler";
import { accountModel } from "../models/accountModel";

const getBalance = asyncHandler(async (req, res) => {
    const userId = await req.userId;

    const account = await accountModel.findOne({
        userId
    })

    res.json({
        balance: account.balance
    })
})



export { getBalance }