import { asyncHandler } from "../middlewares/asyncHandler.js";
import zod, { string } from "zod";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import { JWT_SECRET } from "../utils/user.js";


const signZod = zod.object({
    userName: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

const signup = asyncHandler(async (req, res) => {

    const { success } = signZod.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            msg: "Email already taken / incorrect email"
        })
    }

    const existingUser = await userModel.findOne({ username: req.body.userName })
    if (existingUser) {
        return res.status(411).json("Email already exists..")
    }

    const user = await userModel.create({
        userName: req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    const userId = user._id;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        msg: "User created successfully",
        token: token
    })
})

const signin = asyncHandler(async (req, res) => {
    const zodSignin = zod.object({
        userName: string().email(),
        password: string()
    })

    const
})

export { signup }