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
    // this is table name
    Collection: "android", 
     
  }
);
// this is 
const androidModelObj = mongoose.model("android", androidSchema);
export default androidModelObj;