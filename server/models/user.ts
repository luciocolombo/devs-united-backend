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

export default mongoose.model("User", userSchema);
