const mongoose = require("mongoose");
const { Schema } = mongoose;

const brandSchema = new Schema({
    category: {type: Schema.ObjectId, ref: "Category"},
    title: {type: String,requied: [true,"title is required"]},
    createdAt : {
        type: Date,
        default: Date.now
    },
    updatedAt : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Brand",brandSchema)
