import mongoose from "mongoose";

const selctionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "selections",
  }
);

const selectionsObj = mongoose.model("selections", selctionSchema);
export default selectionsObj;
