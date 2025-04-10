import { Request, Response, NextFunction } from "express";
import { logger } from "../../common/logger/logger";
import * as userService from "../service/user.service";

// Signup endpoint
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the signup method");
    userService.signup(req, res);
  } catch (error) {
    logger.error(`Error occurred during signup: ${error}`);
    next(error);
  }
};

// Login endpoint
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the login method");
    userService.login(req, res);
  } catch (error) {
    logger.error(`Error occurred during login: ${error}`);
    next(error);
  }
};

// Search endpoint
export const search = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the search method");
    userService.searchUser(req, res);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

// User details endpoint
export const fetchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the userDetail method");
    userService.fetchUser(req, res);
  } catch (error) {
    logger.error(`Error occurred while fetching user details: ${error}`);
    next(error);
  }
};

// User update endpoint
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the userDetail method");
    userService.updateUser(req, res);
  } catch (error) {
    logger.error(`Error occurred while fetching user details: ${error}`);
    next(error);
  }
};


// User delete endpoint
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the delete user method");
    userService.deleteUser(req, res);
  } catch (error) {
    logger.error(`Error occurred while fetching user details: ${error}`);
    next(error);
  }
};
