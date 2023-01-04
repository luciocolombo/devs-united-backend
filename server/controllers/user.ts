
const userServices = require("../services/user")

import { Request, Response} from "express"

module.exports = {
   create: async function createUser(req: Request, res: Response) {
      if(!req.body) return
      const user = req.body.user;
      try {
         const response = await userServices.create(user)
         res.json(response);
         
      } catch (error) {
         if(error instanceof Error) res.json(error.message)
      }
   },
   signin: async function (req: Request, res: Response) {
     
      if(!req.body) return
      const { name, password } = req.body.user;
      const token = await userServices.signin(name, password)
      if(!token) return res.json("Authentication failed")
      return res.json(token);
   },
   something: (req: Request, res: Response) => {
      res.json(userServices.something());
   },
};
