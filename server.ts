import connectDB from "./server/loaders/mongoose"
import expressInit from "./server/loaders/express";

require("dotenv").config();

connectDB();
expressInit();
