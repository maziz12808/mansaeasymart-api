const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
    cart: {type: Schema.ObjectId, ref: "Product"},
    fullname : {
        type: String, 
        required: [true,"fullname is required"]
    },
    email : {
        type: String, 
        required: [true,"email is required"]
    },
    mobile : {
        type: String, 
        required: [true,"mobile is required"]
    },
    password: {
        type: String, 
        required: [true,"password is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Customer",customerSchema);