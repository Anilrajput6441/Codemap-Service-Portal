import mongoose from "mongoose";

const androidSchema = mongoose.Schema(
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
    Collection: "android",
  }
);

const androidModelObj = mongoose.model("androidModelObj", androidSchema);
export default androidModelObj;