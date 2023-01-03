const userModel = require("../models/user");

module.exports = {
   create: async function createUser(req, res) {
      const user = req.body.user;
      const response = await userModel.create(user);
      res.json(response);
   },
};
