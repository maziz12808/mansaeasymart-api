const mongoose = require("mongoose");
mongoose.connect(
    process.env.PROD ? process.env.DB : process.env.DEV_DB
)

module.exports = mongoose
