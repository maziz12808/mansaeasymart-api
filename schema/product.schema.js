const mongoose = require("mongoose");
const { Schema } = mongoose

const productSchema = new Schema({
    category: { 
        type: Schema.ObjectId, 
        ref: "Category" 
    },
    childrenCategory: { 
        type: String, 
        required: [true,"title is requied"] 
    },
    // brand: { 
    //     type: Schema.ObjectId, 
    //     ref: "Brand" 
    // },
    title: {
        type: String, 
        required: [true,"title is requied"]
    },
    price: {
        type: Number, 
        required: [true, "price is required"]
    },
    discount: {
        type: Number, 
        default: 0
    },
    stock: {
        type: Number, 
        required: [true,"stock is required"]
    },
    image: [String],
    description: {
        type: String, 
        required: [true,"description is required"]
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
})

// productSchema.pre('findOneAndUpdate', function() {
// });

module.exports = mongoose.model("Product",productSchema)