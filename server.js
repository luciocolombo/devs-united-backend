const connectDB = require("./server/loaders/mongoose");
const expressInit = require("./server/loaders/express");

require("dotenv").config();

connectDB();
expressInit();
