import partnershipModelObj from "../../Models/partnership.js";

const getpartnership = (req, res) => {
    
    partnershipModelObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    }
  )};

  export default getpartnership;