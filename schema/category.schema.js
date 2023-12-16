const mongoose = require("mongoose");
const {Schema} = mongoose;

const categorySchema = new Schema({
    title : {
        type: String,
        required: [true,"title is required"]
    },
    childrenCategory: [String],
    createdAt : {
        type: Date,
        default: Date.now
    },
    updatedAt : {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Category",categorySchema)
