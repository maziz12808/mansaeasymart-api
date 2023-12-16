const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
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

module.exports = mongoose.model("Admin",adminSchema);
