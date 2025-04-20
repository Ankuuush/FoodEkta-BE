import { ObjectId } from "mongoose";

export default interface FoodI {
  userId: ObjectId;
  foodId: ObjectId;
  quantity: number;
  unit: string;
  status: string;
  dateRequested: Date;
  dateCompleted: Date;
  message: string;
  rating: number;
}
