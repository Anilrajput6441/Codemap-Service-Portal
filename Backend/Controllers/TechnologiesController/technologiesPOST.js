import technologiesModelObj from "../../Models/technologies.js";

const technologiesPOST = () => {
  return (req, res) => {
    const { name, category } = req.body;
    const image = req.file.filename;
    const technologiesModelObjNew = new technologiesModelObj({
      name: name,
      image: image,
      category: category,
    });

    technologiesModelObjNew
      .save()
      .then((data) => {
        res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
};

export default technologiesPOST;
