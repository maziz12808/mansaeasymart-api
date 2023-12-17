const mongoose = require("mongoose");
mongoose.connect(
    process.env.PROD ? process.env.DB : process.env.DEV_DB
)

<<<<<<< HEAD
module.exports = mongoose

=======
module.exports = mongoose
>>>>>>> staging
