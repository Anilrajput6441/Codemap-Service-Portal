import mongoose from "mongoose";

const querySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    Collection: "partnership",
  }
);

const partnershipModelObj = mongoose.model("partnership", partnershipSchema);
export default partnershipModelObj;
