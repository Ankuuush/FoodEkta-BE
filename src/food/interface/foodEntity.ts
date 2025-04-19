import { Types } from "mongoose";

export default interface FoodI {
  itemName: string;
  description: string;
  quantity: number;
  unit: string;
  expiryDate: Date;
  img: string;
  location: string;
  isActive: boolean;
  userId: Types.ObjectId;
}
