const mongoose = require("mongoose");
const { Schema } = mongoose

const purchaseSchema = new Schema({
    category: { 
        type: Schema.Types.ObjectId, 
        ref: "Category" 
    },
    childrenCategory: { 
        type: String, 
        required: [true,"childrenCategory is required!"] 
    },
    // brand: { 
    //     type: Schema.ObjectId, 
    //     ref: "Brand" 
    // },
    title: {
        type: String, 
        required: [true,"title is requied"]
    },
    purchasePrice: {
        type: Number, 
        required: [true, "purchase price is required"]
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

