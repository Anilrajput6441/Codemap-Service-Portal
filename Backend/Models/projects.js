import mongoose from "mongoose";

const projectsSchema = mongoose.schema(
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
      type: Array,
      required: true,
    },
    //   client: {
    //     type: String,
    //     required: true,
    //   },
    //   date: {
    //     type: Date,
    //     default: Date.now,
    //   },
  },
  {
    Collection: "projects",
  }
);

const projectsModelObj = mongoose.model("projects", projectsSchema);
export default projectsModelObj;
