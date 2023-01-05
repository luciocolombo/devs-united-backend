const setupRoutes = require("../routes/index.ts");
import { Request, Response } from "express";
import express from "express";

export default () => {
   const app = express();
   const cors = require("cors");

   app.use(express.json());
   app.use(cors());
   setupRoutes(app);
   app.get("/", (req: Request, res: Response) => {
      res.send("landing page");
   });

   app.listen(process.env.PORT || 3000, () => {
      console.log(`app runnning in port ${process.env.PORT || 3000}`);
   });
};
