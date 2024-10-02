import projectsModelObj from "../../Models/projects.js";
const projectsPATCH = () => {
  return (req, res) => {
    const { title, description } = req.body;
    // Update the project with the new title
    projectsModelObj
      .findOne({ title: title })
      .then((data) => {
        data.description = description;
        data
          .save()
          .then((savedData) => {
            res.status(200).json({ status: 200 });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  };
};

export default projectsPATCH;
