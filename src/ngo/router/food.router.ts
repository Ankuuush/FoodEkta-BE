import express from "express";
import { createFood } from "../../ngo/controller/food.controller";
import { isLoggedIn } from "../../common/middlewares/user.authentication.middleware";

export default (router: express.Router)=>{
    router.post("/food/create/:id",isLoggedIn, createFood)
}