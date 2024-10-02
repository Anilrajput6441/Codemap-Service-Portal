import projectsModelObj from "../../Models/projects.js";

const projectsGET = (req, res) => {
  projectsModelObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export default projectsGET;
