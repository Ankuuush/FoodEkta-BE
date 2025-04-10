import { Schema } from "mongoose";
import MetaDataI from "./metaDataEntity";

export default interface UserI extends MetaDataI {
  firstName: string;
  lastName: string;
  userId: string; //no
  emailId: string; // no
  profilePicture: string;
  address: AddressI;
  userType: string; //no
  userRole:string; //no
  gender: string;
  dob: Date;
  phoneNumber: string; //no
  lastLogin: Date;
  profileCompleted: boolean;
}

export interface AddressI {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}


