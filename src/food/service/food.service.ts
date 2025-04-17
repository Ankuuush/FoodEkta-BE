import { logger } from "../../common/logger/logger";
import { Request, Response } from "express";
import { FoodModel } from "../model/food.model";
import { validateFoods } from "../../food/validators/foods";
import responder from "../../common/utils/responder";

export const createFood = async (req: Request, res: Response) => {
  logger.info("Entered create food service");
  const newFood = new FoodModel({
    ...req.body,
    isActive: true,
    userId: req.user.user_id,
  });
  logger.debug("food model created");
  const savedFood = await newFood.save();
  logger.info("food saved");
  res.status(201).json(savedFood);
};

export const getFood = async (req: Request, res: Response) => {
  const id = req.params.id;
  logger.debug(`Fetching food details for id: ${id}`);

  const food = await FoodModel.findOne({ _id: id });

  if (!food || !food.isActive) {
    logger.warn(`Food with id ${id} not found`);
    return res.status(404).json({ message: "Food not found" });
  }

  logger.info(`Food details fetched successfully for id: ${id}`);

  res.status(200).json(food);
};
export const getAllFoods = async (req: Request, res: Response) => {
  logger.debug(`Fetching all foods`);

  const foods = await FoodModel.find({ isActive: true }).select("-__v");

  logger.info(`Foods fetched successfully`, foods);
  validateFoods(foods);

  responder.success(res, foods, 200);
};
