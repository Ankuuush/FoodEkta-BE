import mongoose, { Schema } from "mongoose";

const FoodSchema= new Schema({
    itemName:{type: String, required: true},
    quantity : {type : Number, required: true},
    unit : { type : String, enum :["KG","Litre","Nos.","Packet"],required: true},
    expiryDate: {type: Date, required: true},
    isActive: { type: Boolean, required: true},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
})

export const FoodModel = mongoose.model("Food", FoodSchema);