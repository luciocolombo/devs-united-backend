const express = require("express");
const setupRoutes = require("../routes/index.js");
module.exports = () => {
   const app = express();

   app.use(express.json());
   setupRoutes(app);
   app.get("/", (req, res) => {
      res.send("landing page");
   });

   app.listen(process.env.PORT || 3000, () => {
      console.log(`app runnning in port ${process.env.PORT || 3000}`);
   });
};
