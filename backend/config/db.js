import mongoose from "mongoose";
const mongoUrl = 'mongodb://127.0.0.1:27017/ezPay'

const connectDb = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("conneted to db...")
    } catch (error) {
        console.log(error.message)
    }
}

export { connectDb };