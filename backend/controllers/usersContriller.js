import { asyncHandler } from "../middlewares/asyncHandler.js";
import zod, { string } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { userModel } from "../models/userModel.js";
import { JWT_SECRET } from "../utils/user.js";
import { accountModel } from "../models/accountModel.js";


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
            message: "Email already taken / incorrect email"
        })
    }

    const existingUser = await userModel.findOne({ userName: req.body.userName })
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
    //-------create new account with random balance------
    await accountModel.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    //-------------------------------------------------

    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })
})

const zodSignin = zod.object({
    userName: string().email(),
    password: string()
})

const signin = asyncHandler(async (req, res) => {
    const { success } = zodSignin.safeParse(req.body);
    if (!success) {
        return res.status(411).json({ message: "Email already taken or incorrect email" })
    }

    const existingUser = await userModel.findOne({
        userName: req.body.userName
    })
    if (!existingUser) {
        return res.status(411).json({ message: "User name does not exists" })
    }

    const user = await userModel.findOne({
        userName: req.body.userName
    })

    if (user) {
        const isPassword = await bcrypt.compare(req.body.password, user.password)
        if (isPassword) {
            const token = jwt.sign({
                userId: user._id
            }, JWT_SECRET);

            res.json({
                token: token
            })
            return;
        }
    }

    res.status(411).json({ message: "Incorrect password" })
})

const zodUpdate = zod.object({
    password: string().optional(),
    firstName: string().optional(),
    lastName: string().optional()
})

const updateUser = asyncHandler(async (req, res) => {
    const { success } = zodUpdate.safeParse(req.body);

    try {
        if (!success) {
            return res.status(401).json({ message: "Enter correct values" })
        }
        await userModel.updateOne({ _id: req.userId }, req.body)
        res.json({
            message: "User updated"
        })
    } catch (error) {
        res.status(403).json({ message: "Error while updating data" })
    }

})

const getUserBulk = asyncHandler(async (req, res) => {
    const currentUser = await req.headers.userid;
    console.log(currentUser)
    const filter = await req.query.filter || "";
    console.log(filter)
    const users = await userModel.find({
        $and: [
            {
                $or: [
                    { firstName: { "$regex": filter } },
                    { lastName: { "$regex": filter } }
                ]
            },
            { _id: { $ne: currentUser } } // Exclude the current user
        ]
    });
    console.log(users)
    res.json({
        users: users.map(user => ({
            username: user.userName,
            firstname: user.firstName,
            lastname: user.lastName,
            _id: user._id
        }))
    });
});


export { signup, signin, updateUser, getUserBulk }