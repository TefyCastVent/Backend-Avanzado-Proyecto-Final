import mongoose from "mongoose";

const schema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    }, 
    categoryDescription: {
        type: String,
        required: true
    }
});

export default mongoose.model('Category', schema)