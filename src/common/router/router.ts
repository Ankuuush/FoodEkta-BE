import express from "express";

const router = express.Router();
import user from "../../user/router/user.router";
import food from "../../ngo/router/food.router";
import health from "./health.router";

export default (): express.Router => {
  user(router);
  food(router);
  health(router);
  return router;
};
