const userModel = require("../models/user");

module.exports = {
   create: async function createUser(req, res) {
      const user = req.body.user;
      const response = await userModel.create(user);
      res.json(response);
   },
   signin: async function (req, res) {
      const jwt = require("jsonwebtoken");
      const argon2 = require("argon2");
      const { name, password } = req.body.user;
      const dbUser = await userModel.findOne({ name });

      const veredict = await argon2.verify(dbUser.password, password);
      if (!veredict) return res.json("Bad credentials");
      let token = jwt.sign({ foo: "bar" }, process.env.JWT_SECRET);
      return res.json(token);
   },
   something: (req, res) => {
      res.json("We did something");
   },
};
