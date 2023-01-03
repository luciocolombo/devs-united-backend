const userModel = require("../models/user");
import { Request, Response} from "express"

module.exports = {
   create: async function createUser(req: Request, res: Response) {
      if(!req.body) return
      const user = req.body.user;
      const response = await userModel.create(user);
      res.json(response);
      res
   },
   signin: async function (req: Request, res: Response) {
      const jwt = require("jsonwebtoken");
      const argon2 = require("argon2");
      if(!req.body) return
      const { name, password } = req.body.user;
      const dbUser = await userModel.findOne({ name });

      const veredict = await argon2.verify(dbUser.password, password);
      if (!veredict) return res.json("Bad credentials");
      let token = jwt.sign({ foo: "bar" }, process.env.JWT_SECRET);
      return res.json(token);
   },
   something: (req: Request, res: Response) => {
      res.json("We did something");
   },
};
