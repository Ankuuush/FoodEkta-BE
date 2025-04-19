import express from "express";
import { createFood, getAllFoods, getFood, updateFood } from "../controller/food.controller";
import { isLoggedIn } from "../../common/middlewares/user.authentication.middleware";

export default (router: express.Router) => {
  router.post("/api/foods", isLoggedIn, createFood);
  router.get("/api/foods/:id", isLoggedIn, getFood);
  router.put("/api/foods/:id", isLoggedIn, updateFood);
  router.get("/api/foods", isLoggedIn, getAllFoods);
};
