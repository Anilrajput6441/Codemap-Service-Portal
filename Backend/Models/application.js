import mongoose from "mongoose";

const applicationSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },

},{
    Collection: "applications"
}
);

const applicationModelObj=mongoose.model("applications", applicationSchema);

export default applicationModelObj;