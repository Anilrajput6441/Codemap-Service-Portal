import webdevelopmentModelObj from "../../Models/webdevelopment.js";
const webdevelopmentDelete = (req, res) => {
  const service = req.query.service;
  webdevelopmentModelObj
    .deleteMany({ service: service })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default webdevelopmentDelete;
