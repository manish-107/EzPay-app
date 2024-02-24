import { JWT_SECRET } from "../utils/user";
import { asyncHandler } from "./asyncHandler.js";
import jwt from "jsonwebtoken";

const authMiddleware = asyncHandler(async (req, res, next) => {
    const authHeader = await res.header.authorization;

    if (!authHeader || !authHeader.startWith('Bearer ')) {
        return res.status(403).json({})
    }

    const token = await authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next()
    } catch (error) {
        return res.status(403).json({});
    }
})

export { authMiddleware }