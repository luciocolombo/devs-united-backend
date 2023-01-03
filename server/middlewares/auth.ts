const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction} from "express"

module.exports = (req: Request, res: Response, next: NextFunction) => {
   const headers = req?.get("Authorization")?.split("Bearer ").pop();
   if (!headers) return res.json("No auth");
   try {
      const veredict = jwt.verify(headers, process.env.JWT_SECRET);
      if (!veredict) return res.json("Bad authorizacion");
      return next();
   } catch (err) {
      if(err instanceof Error) res.json(err.message);
   }
};
