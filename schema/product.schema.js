const mongoose = require("mongoose");
const { Schema } = mongoose

const productSchema = new Schema({
    // brand: { 
    //     type: Schema.ObjectId, 
    //     ref: "Brand" 
    // },
    purchaseProduct: {
        type: Schema.Types.ObjectId,
        ref: "Purchase"
    },
    price: {
        type: Number, 
        required: [true, "price is required"]
    },
    discount: {
        type: Number, 
        default: 0
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
productSchema.post('find', async function(docs,next) {
    console.log(docs);
});
module.exports = mongoose.model("Product",productSchema)