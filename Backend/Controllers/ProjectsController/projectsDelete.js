import projectsModelObj from "../../Models/projects.js";
const projectsDelete = (req, res) => {
  const title = req.query.title;
  projectsModelObj
    .deleteOne({ title: title })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default projectsDelete;
