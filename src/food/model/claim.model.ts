import { addressSchema } from "common/model/address.model";
import { metaDataSchema } from "common/model/metaData.model";
import mongoose, { Schema } from "mongoose";

const ClaimSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
  }, // reference to user
  foodId: {
    type: String,
    ref: "Food",
  }, // reference to food
  quantity: { type: Number, required: true },
  unit: {
    type: String,
    enum: ["KG", "Litre", "Pieces", "Packet"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Rejected"],
    required: true,
  },
  dateRequested: { type: Date, required: true }, // when user made claim
  dateCompleted: { type: Date }, // when transaction finished
  message: { type: String, required: true }, // optional communication
  rating: { type: Number, required: true },
});

export const ClaimModel = mongoose.model("Claim", ClaimSchema);
