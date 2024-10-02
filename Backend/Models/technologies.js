import mongoose from "mongoose";

const technologiesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "technologies",
  }
);

const technologiesModelObj = mongoose.model("Technologies", technologiesSchema);

export default technologiesModelObj;
