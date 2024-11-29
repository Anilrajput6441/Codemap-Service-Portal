import androidModelObj from "../../Models/android.js";

const postAndroid = () => {
  return (req, res) => {
    const { service, description } = req.body;
    // the above line also can be written as below
    // const service = req.body.service;
    // const description = req.body.description;
    const androidModelObjNew = new androidModelObj({
      service: service,
      description: description,
    });

    androidModelObjNew
      .save()
      .then((data) => {
        res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
};

export default postAndroid;
