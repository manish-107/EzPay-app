import express from "express";
import { connectDb } from "./config/db";
import router from "./routes/userRoutes";
const PORT = 3000;
const app = express();

connectDb();
app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})