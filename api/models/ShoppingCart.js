import mongoose from "mongoose";

const schema = new mongoose.Schema({
    totalCost: {
        type: Number, 
        required: true,
        default: 0,
    },
    payDate: {
        type: Date, 
        required: true,
        default: Date.now,
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        }
    }
    ],
    isActive: {
        type: Boolean,
        default: true,
    }
});

export default mongoose.model('ShoppingCart', schema)