const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
   const headers = req?.get("Authorization").split("Bearer ").pop();
   if (!headers) return res.json("No auth");
   try {
      const veredict = jwt.verify(headers, process.env.JWT_SECRET);
      if (!veredict) return res.json("Bad authorizacion");
      return next();
   } catch (err) {
      res.json(err.message);
   }
};
