import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    specs: [{
        specsTitle: {
            type: String,
        },
        specsDescription: {
            type: String,
        }
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number, 
        required: true, 
    },
    stock: {
        type: Number, 
        required: true,
    },
    //TODO IMAGENES DEL PRODUCTO
});

export default mongoose.model('Product', productSchema)