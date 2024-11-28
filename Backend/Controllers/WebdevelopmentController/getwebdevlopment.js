import webdevelopmentModelObj from "../../Models/webdevelopment.js";

const getwebdevelopment = (req, res) => {
    
    webdevelopmentModelObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    }
  )};

  export default getwebdevelopment;