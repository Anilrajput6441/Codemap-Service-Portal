import technologiesModelObj from "../../Models/technologies.js";

const technologiesDELETE = (req, res) => {
  const name = req.query.name;
  technologiesModelObj
    .deleteOne({ name: name })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      res.status(err.status).send({ status: err.status });
    });
};

export default technologiesDELETE;
