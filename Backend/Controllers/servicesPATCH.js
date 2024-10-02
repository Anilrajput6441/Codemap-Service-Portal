import servicesModelObj from "../Models/services.js";

const servicesPATCH = () => {
  return (req, res) => {
    const { title, description } = req.body;
    // Update the service with the new title
    servicesModelObj
      .findOne({ title: title })
      .then((data) => {
        data.description = description;
        data
          .save()
          .then((updatedData) => {
            res.status(200).json({ update: updatedData });
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default servicesPATCH;
