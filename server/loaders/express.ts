
const setupRoutes = require("../routes/index.ts");
import { Request, Response} from "express"
import express from 'express'

module.exports = () => {
   const app = express();

   app.use(express.json());
   setupRoutes(app);
   app.get("/", (req: Request, res: Response) => {
      res.send("landing page");
   });

   app.listen(process.env.PORT || 3000, () => {
      console.log(`app runnning in port ${process.env.PORT || 3000}`);
   });
};
