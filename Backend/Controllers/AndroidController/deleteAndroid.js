import androidModelObj from "../../Models/android.js";
const androidDelete = (req, res) => {
  const service = req.query.service;
  androidModelObj
    .deleteMany({ service: service })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default androidDelete;
