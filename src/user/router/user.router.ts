import express from "express";

import {
  signup,
  fetchUser,
  login,
  search,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";
import { isLoggedIn } from "../../common/middlewares/user.authentication.middleware";

export default (router: express.Router) => {
  router.post("/user/signup",isLoggedIn, signup);
  router.get("/user/login",isLoggedIn, login);
  router.post("/user/search", isLoggedIn, search);
  router.get("/user/:id", isLoggedIn, fetchUser);
  router.put("/user/:id", isLoggedIn, updateUser);
  router.delete("/user/:id", isLoggedIn, deleteUser);
};
