import userModel from "../models/user";
import User from "../interfaces/user.interface";

module.exports = {
   create: async (user: User) => {
      const response = await userModel.create(user);
      return response;
   },
   signin: async (name: String, password: String) => {
      const jwt = require("jsonwebtoken");
      const argon2 = require("argon2");
      const dbUser = await userModel.findOne({ name });
      if (!dbUser) return "User does not exist";
      const veredict = await argon2.verify(dbUser.password, password);
      if (!veredict) return false;
      let token = jwt.sign({ foo: "bar" }, process.env.JWT_SECRET);
      return token;
   },
   something: () => {
      return "We did something";
   },
};
