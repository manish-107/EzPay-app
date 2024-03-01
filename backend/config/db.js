import mongoose from "mongoose";

const mongoUrl = 'mongodb+srv://thestranger2676:bMlI7g1YbqlfE6Rl@ezpay.au7aiza.mongodb.net/?retryWrites=true&w=majority&appName=ezPay'

const connectDb = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("conneted to db...")
    } catch (error) {
        console.log(error.message)
    }
}

export { connectDb };