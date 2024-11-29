import technologiesModelObj from "../../Models/technologies.js";

const technologiesGET = (req, res) => {
  technologiesModelObj
    .find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const technologiesGETQuery = (req, res) => {
  const category = req.query.category;
  technologiesModelObj
    .find({ category })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default technologiesGET;
export { technologiesGETQuery };
