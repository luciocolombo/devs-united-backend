module.exports = (req, res, next) => {
   const { name, password } = req.body;
   if (!name || !password) return res.json("Empty user details");
   return next();
};
