import androidModelObj from "../../Models/android.js";

const getandroid = (req, res) => {
    
    androidModelObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    }
  )};

  export default getandroid;