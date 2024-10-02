import projectsModelObj from "../../Models/projects.js";
const projectsPOST = () => {
  return (req, res) => {
    const { title, description, category, segment } = req.body;
    const image = req.file.filename;
    const projectsModelObjNew = new projectsModelObj({
      title,
      description,
      image,
      category,
      segment,
    });

    projectsModelObjNew
      .save()
      .then((data) => {
        res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  };
};
export default projectsPOST;
