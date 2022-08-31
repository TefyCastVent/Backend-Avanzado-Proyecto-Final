import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    shoppingCart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ShoppingCart",
        required: true
    },
    date: {
        type: Date(),
        required: true,
        default: Date.now,
    },
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon",        
    },
    totalCost: {
        type: Number, 
        required: true,
        default: 0,
    }
});

export default mongoose.model("Sales", schema);