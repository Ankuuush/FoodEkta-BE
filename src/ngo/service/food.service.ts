import { logger } from "../../common/logger/logger";
import { Request, Response } from "express";
import { FoodModel } from "../../ngo/model/food.model";

export const createFood = async (req: Request, res: Response) => {
  logger.info("Entered create food service");
  const newFood = new FoodModel({
    ...req.body,
    isActive: true,
    userId: req.params.id,
  });
  logger.debug("food model created");
  const savedFood = await newFood.save();
  logger.info("food saved");
  res.status(201).json(savedFood);
};
