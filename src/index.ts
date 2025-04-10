import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import router from "./common/router/router";
import helmet from "helmet";
import "./common/mongo/mongo";
import { errorHandler } from "./common/middlewares/error.middleware";

export const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(errorHandler);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use("/", router()); // Assuming router is defined properly and returns a router object
app.get("*", function (req, res) {
  res.status(404).send("aayein?? baigan!!🍆");
});
