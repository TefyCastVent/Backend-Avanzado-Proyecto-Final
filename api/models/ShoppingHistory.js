import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    sales: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sale"  
        }]
})