import customsoftwareModelObj from "../../Models/customsoftware.js";
const customsoftwareDelete = (req, res) => {
  const service = req.query.service;
  customsoftwareModelObj
    .deleteMany({ service: service })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default customsoftwareDelete;
