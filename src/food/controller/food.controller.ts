import { logger } from "../../common/logger/logger";
import { NextFunction, Request, Response } from "express";
import * as foodService from "../service/food.service";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the create food method");
    foodService.createFood(req, res);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the get food method");
    foodService.getFood(req, res);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
export const getAllFoods = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("Entering the get all foods method");
    foodService.getAllFoods(req, res);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
