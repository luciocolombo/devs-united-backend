
module.exports = () => {
   const mongoose = require("mongoose");
   const connection = mongoose.connect(process.env.DB_URI);
   connection.then(() => console.log("DB connected"));
};
