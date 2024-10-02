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

export default technologiesGET;
