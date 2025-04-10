import  winston from "winston"
import dotenv from "dotenv";
dotenv.config();

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: process.env.LOGGER_FILE_PATH}), 
  ],
});


