import { JWT_SECRET } from "../utils/user";
import { asyncHandler } from "./asyncHandler.js";
import jwt from "jsonwebtoken";

const authMiddleware = asyncHandler(async (req, res, next) => {
    const authHeader = await res.header.authorization;

    if (!authHeader || !authHeader.startWith('Bearer ')) { //api key Bearer
        return res.status(403).json({})
    }

    const token = await authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.userId) {
            req.userId = decoded.userId;
            next()
        } else {
            return res.status(403).json({});
        }
    } catch (error) {
        return res.status(403).json({});
    }
})

export { authMiddleware }