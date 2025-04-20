import { addressSchema } from "../../common/model/address.model";
import { metaDataSchema } from "../../common/model/metaData.model";
import mongoose, { Schema } from "mongoose";

const FoodSchema = new Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: {
    type: String,
    enum: ["KG", "Litre", "Pieces", "Packet"],
    required: true,
  },
  expiryDate: { type: Date, required: true },
  img: { type: String },
  description: { type: String },
  address: { type: addressSchema },
  isActive: { type: Boolean, required: true },
  userId: {
    type: String,
    ref: "User",
  },
}).add(metaDataSchema);

export const FoodModel = mongoose.model("Food", FoodSchema);
