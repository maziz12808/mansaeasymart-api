const mongoose = require("mongoose");
const {Schema} = mongoose;

const categorySchema = new Schema({
    title : {
        type: String,
        required: [true,"title is required"]
    },
    childrenCategory: {type: Array},
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
