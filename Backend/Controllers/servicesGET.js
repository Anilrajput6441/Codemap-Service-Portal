import servicesModelObj from "../Models/services.js";
const servicesGET = (req, res) => {
  servicesModelObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
export default servicesGET;
