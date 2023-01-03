const mongoose = require("mongoose");

module.exports = () => {
   const connection = mongoose.connect(process.env.DB_URI);
   connection.then(() => console.log("DB connected"));
};
