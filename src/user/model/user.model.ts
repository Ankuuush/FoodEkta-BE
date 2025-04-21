import mongoose, { Schema } from "mongoose";
import { metaDataSchema } from "../../common/model/metaData.model";
import UserI from "../interface/userEntity";
import { addressSchema } from "../../common/model/address.model";



const UserSchema = new Schema<UserI>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  userId: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (emailid: string) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  profilePicture: { type: String },
  address: { type: addressSchema },
  userType: {
    type: String,
    required(this: any) {
      return this.isActive.valueOf();
    },
    enum: ["Individual", "NGO"],
  },
  userRole: { type: String, enum: ["User", "Admin"], default: "User" },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  dob: { type: Date },
  phoneNumber: {
    type: String,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^\d{10}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid phone number!`,
    },
  },
  lastLogin: { type: Date, required: true },

  profileCompleted: { type: Boolean, required: true, default: false },
}).add(metaDataSchema);

UserSchema.index({ firstName: 1 });
UserSchema.index({ lastName: 1 });
UserSchema.index({ phoneNumber: 1 });
UserSchema.index({ emailId: 1 });
UserSchema.index({ userType: 1 });
UserSchema.index({ userId: 1 });

export const UserModel = mongoose.model("User", UserSchema);
