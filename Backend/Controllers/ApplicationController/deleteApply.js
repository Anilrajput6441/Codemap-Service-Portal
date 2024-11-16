import applicationModelObj from "../../Models/application.js";
const deleteApply = (req, res) => {
  const email = req.query.email;
  applicationModelObj
    .deleteOne({ email: email })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default deleteApply;
