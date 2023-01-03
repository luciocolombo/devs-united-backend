const argon2 = require("argon2");

module.exports = async (req, res, next) => {
   const { name, password } = req.body.user;
   if (!name || !password) return res.json("Empty user details");
   try {
      const hash = await argon2.hash(password);
      req.body.user.password = hash;
   } catch (err) {
      res.send(err);
   }
   return next();
};
