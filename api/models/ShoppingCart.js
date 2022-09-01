import mongoose from "mongoose";

const schema = new mongoose.Schema({
    totalCost: {
        type: Number, 
        default: 0,
    },
    payDate: {
        type: Date, 
        default: Date.now,
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
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