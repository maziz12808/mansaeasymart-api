const mongoose = require("mongoose");
const { Schema } = mongoose

const salesSchema = new Schema({
    customer: {
        type: Schema.ObjectId, 
        ref: "Customer"
    },
    product: {
        type: Schema.ObjectId, 
        ref: "Product"
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    updatedAt : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Sale",salesSchema)
