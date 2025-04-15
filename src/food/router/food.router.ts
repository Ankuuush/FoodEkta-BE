import express from "express";
import { createFood, getAllFoods, getFood } from "../controller/food.controller";
import { isLoggedIn } from "../../common/middlewares/user.authentication.middleware";

export default (router: express.Router) => {
  router.post("/api/foods", isLoggedIn, createFood);
  router.get("/api/foods/:id", isLoggedIn, getFood);
  router.get("/api/foods", isLoggedIn, getAllFoods);
};
