import mongoose from "mongoose";
import dotenv from "dotenv";
import { logger } from "../logger/logger";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => logger.error(error));
mongoose.connection.on("connected", () => logger.info("Connected to mongo"));
