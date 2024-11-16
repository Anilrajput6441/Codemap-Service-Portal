import careerObj from "../../Models/career.js";
const getCareer = (req, res) => {
  careerObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export default getCareer;
