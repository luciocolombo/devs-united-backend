const userController = require("../controllers/user");
const userCreateMiddleware = require("../middlewares/userCreate");
module.exports = (app) => {
   app.post("/user", userCreateMiddleware, userController.create);
};
