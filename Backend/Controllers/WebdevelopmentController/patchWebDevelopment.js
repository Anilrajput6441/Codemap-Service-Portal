import webdevelopmentModelObj from "../../Models/webdevelopment.js";
const webdevelopmentPATCH = () => {
  return (req, res) => {
    const { service, description } = req.body;
    // Update the description with the new description
   webdevelopmentModelObj
      .findOne({ service: service })
      .then((data) => {
        // update all the data as needed
        data.description = description;
        // the below code will be same in any case 
        data
          .save()
          .then((savedData) => {
            res.status(200).json({ status: 200 });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  };
};

export default webdevelopmentPATCH;
