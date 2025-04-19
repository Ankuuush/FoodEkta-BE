import { ObjectId } from "mongodb";
import z from "zod";

const foodSchema = z.object({
  _id: z.instanceof(ObjectId),
  itemName: z.string().min(1),
  quantity: z.number(),
  unit: z.string().min(1),
  expiryDate: z.date(),
  img: z.string().optional(),
  description: z.string().optional(),
  location: z.string().min(1),
  isActive: z.boolean(),
  userId: z.string().min(1),
});

const foodsSchema = z.array(foodSchema);

export const validateFood = (data: any) => {
  return foodSchema.parse(data);
};
export const validateFoods = (data: any) => {
  return foodsSchema.parse(data);
};
