import MetaDataI from "user/interface/metaDataEntity";
import { Schema } from "mongoose";

export const metaDataSchema = new Schema<MetaDataI>({
  createdById: { type: String, required: true, default:""  },
  createdDate: { type: Date, required: true, default: Date.now },
  lastModifiedById: { type: String, required: true, default:"" },
  lastModifiedDate: { type: Date, required: true, default: Date.now },
  isActive: { type: Boolean, required: true, default: false },
});
