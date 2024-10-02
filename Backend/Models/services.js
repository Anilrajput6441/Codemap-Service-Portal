import mongoose from "mongoose";

const servicesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "Services",
  }
);

const servicesModelObj = mongoose.model("Services", servicesSchema);
export default servicesModelObj;
