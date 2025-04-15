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
  location: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  userId: {
    type:String,
    ref: "User",
  },
});

export const FoodModel = mongoose.model("Food", FoodSchema);
