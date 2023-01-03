const userController = require("../controllers/user");
const userCreateMiddleware = require("../middlewares/userCreate");
const auth = require("../middlewares/auth");

module.exports = (app) => {
   app.post("/user", userCreateMiddleware, userController.create);
   app.post("/signin", userController.signin);
   app.get("/something", auth, userController.something);
};
