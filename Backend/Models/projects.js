import mongoose from "mongoose";

const projectsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
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

    segment: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "projects",
  }
);

const projectsModelObj = mongoose.model("projects", projectsSchema);
export default projectsModelObj;
