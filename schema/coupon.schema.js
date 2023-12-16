const mongoose = require("mongoose");
const { Schema } = mongoose;

const couponSchema = new Schema({
    couponCode : {
        type: String, 
        required: [true,"fullname is required"]
    },
    discount: {
        type: Number,
        default: 0
    },
    maxDiscount: {
        type: Number,
        default: 0
    },
    expireDate : {
        type: Date, 
        required: [true,"end date is required"]
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

module.exports = mongoose.model("Coupon",couponSchema);
