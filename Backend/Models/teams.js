import mongoose from "mongoose";

const teamSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    linkedin: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    Collection: "teams",
  }
);

const teamsObj = mongoose.model("teams", teamSchema);
export default teamsObj;
