import mongoose from "mongoose";

const rejectSchema = mongoose.Schema(
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
    Collection: "rejections",
  }
);

const rejectionsObj = mongoose.model("rejections", rejectSchema);
export default rejectionsObj;
