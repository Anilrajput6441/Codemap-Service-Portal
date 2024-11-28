import customsoftwareModelObj from "../../Models/customsoftware.js";
const getcustomsoftware = (req, res) => {
    
    customsoftwareModelObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    }
  )};

  export default getcustomsoftware;