const userRoutes = require("./user");
import express from 'express'

module.exports = (app: express.Application) => {
   userRoutes(app);
};
