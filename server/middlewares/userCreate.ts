const argon2 = require("argon2");
import { Request, Response, NextFunction } from "express";

module.exports = async (req: Request, res: Response, next: NextFunction) => {
   if (!req?.body?.user?.name || !req.body.user.password) return res.json("Empty user details");
   const { name, password } = req.body.user;
   try {
      const hash = await argon2.hash(password);
      req.body.user.password = hash;
   } catch (err) {
      res.send(err);
   }
   return next();
};
