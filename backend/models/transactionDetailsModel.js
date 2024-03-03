import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    fromId: {
        type: String,
        required: true
    },
    toId: {
        type: String,
        required: true
    },
    sentAmount: {
        type: Number,
        required: true
    },
    transactionDesc: {
        type: String,
        required: true
    }
}, { timestamps: true });

const transactionModel = mongoose.model('transactionDetails', transactionSchema)

export { transactionModel }