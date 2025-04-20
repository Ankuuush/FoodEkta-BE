import { Schema } from "mongoose";

export const addressSchema = new Schema({
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    addressLine3: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pinCode: { type: String, required: true },
  });