import partnershipModelObj from "../../Models/partnership.js";

const postPartnership = () => {
  return (req, res) => {
    const { service, description} = req.body;
    // the above line also can be written as below
    // const service = req.body.service;
    // const description = req.body.description;
    const partnershipModelObjNew = new partnershipModelObj({
      service: service,
      description: description,
     
    });

    partnershipModelObjNew
      .save()
      .then((data) => {
        res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
};

export default postPartnership;
