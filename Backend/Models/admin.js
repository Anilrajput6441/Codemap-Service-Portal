import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "admins",
  }
);

const adminModelObj = mongoose.model("admins", adminSchema);

export default adminModelObj;
