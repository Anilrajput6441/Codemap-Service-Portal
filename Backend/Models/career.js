import mongoose, { Collection } from "mongoose";

const careerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "careers",
  }
);

const careerObj = mongoose.model("careers", careerSchema);
export default careerObj;
