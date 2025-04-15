import { Types } from "mongoose";

export default interface FoodI {
  itemName: string;
  quantity: number;
  unit: string;
  expiryDate: Date;
  img: string;
  location: string;
  contactPerson: string;
  phoneNumber: string;
  isActive: boolean;
  userId: Types.ObjectId;
}
