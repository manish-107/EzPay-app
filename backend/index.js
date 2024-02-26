import express from "express";
import { connectDb } from "./config/db.js";
import router from "./routes/userRoutes.js";
import cors from "cors";
import accRouter from "./routes/accountRoutes.js";
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectDb();
app.use('/api/v1/user', router);
app.use('/api/v1/account', accRouter);

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})