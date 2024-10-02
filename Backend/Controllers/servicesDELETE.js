import servicesModelObj from "../Models/services.js";
const servicesDELETE = (req, res) => {
  const title = req.query.title;
  servicesModelObj
    .deleteOne({ title: title })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      console.log(err);
    });
};
export default servicesDELETE;
