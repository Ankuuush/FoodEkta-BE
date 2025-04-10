import { logger } from "../../common/logger/logger";
import { NextFunction, Request, Response } from "express";
import * as foodService from "../service/food.service"


export const createFood= async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      logger.info("Entering the create food method");
      foodService.createFood(req,res)
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };