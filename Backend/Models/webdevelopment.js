import mongoose from "mongoose";

const webdevelopmentSchema = mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
   
  },
  {
    Collection: "webdevelopment",
  }
);

const webdevelopmentModelObj = mongoose.model("webdevelopmentModelObj", webdevelopmentSchema);
export default webdevelopmentModelObj;
