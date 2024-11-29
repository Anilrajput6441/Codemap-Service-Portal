import webdevelopmentModelObj from "../../Models/webdevelopment.js";

const postWebDevelopment = () => {
  return (req, res) => {
    const { service, description} = req.body;
    // the above line also can be written as below
    // const service = req.body.service;
    // const description = req.body.description;
    const webdevelopmentModelObjNew = new webdevelopmentModelObj({
      service: service,
      description: description,
     
    });

    webdevelopmentModelObjNew
      .save()
      .then((data) => {
        res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
};

export default postWebDevelopment;
