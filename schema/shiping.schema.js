const mongoose = require("mongoose");
const { Schema } = mongoose;

const shipingSchema = new Schema({
    customer : {
        type: Schema.ObjectId, 
        ref: "Customer"
    },
    address : {
        street: {type: String, required: [true,"street is required"]}, 
        landmark: {type: String, required: [true,"landmark is required"]}, 
        country: {type: String, required: [true,"country is required"]}, 
        state: {type: String, required: [true,"state is required"]}, 
        city: {type: String, required: [true,"city is required"]}, 
        postalCode: {type: String, required: [true,"postal code is required"]}, 
        
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

module.exports = mongoose.model("Shiping",shipingSchema);
