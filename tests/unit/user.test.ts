const userService = require("../../server/services/user");

describe("Test userServices", () => {
   const user = {
      name: "Luci" + Math.random(),
      password: "blala",
   };

   it("Creating user should add a user", async () => {
      const response = await userService.create(user);
      expect(response).toHaveProperty("createdAt");
   });

   it("Signin should create a JWT token", async () => {
      const response = await userService.signin(user.name, user.password);
      expect(response).toBeInstanceOf(String);
   });

   it("'Something' should return a String", () => {
      const answer = userService.something();
      expect(answer).toBeInstanceOf(String);
   });
});
