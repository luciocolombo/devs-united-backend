const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
      },
      password: String,
   },
   {
      timestamps: true,
      strict: true,
   }
);

module.exports = mongoose.model("User", userSchema);
