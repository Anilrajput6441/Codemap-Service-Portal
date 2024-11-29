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

  const getwebdevelopmentQuery = (req, res) => {
    const service = req.query.service;

    webdevelopmentModelObj
    .find({service : service})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    }
  )};

  export default getwebdevelopment;
  export {getwebdevelopmentQuery};