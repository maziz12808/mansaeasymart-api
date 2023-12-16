const mongoose = require("mongoose");
const { Schema } = mongoose

const purchaseSchema = new Schema({
    category: { 
        type: Schema.ObjectId, 
        ref: "Category" 
    },
    brand: { 
        type: Schema.ObjectId, 
        ref: "Brand" 
    },
    title: {
        type: String, 
        required: [true,"title is requied"]
    },
    price: {
        type: Number, 
        required: [true, "price is required"]
    },
    stock: {
        type: Number, 
        required: [true,"stock is required"]
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

module.exports = mongoose.model("Purchase",purchaseSchema)

