import servicesModelObj from "../Models/services.js";
const servicesPOST = () => {
  return (req, res) => {
    const { title, description } = req.body;
    const image = req.file.filename;

    const servicesModelObjNew = new servicesModelObj({
      title: title,
      image: image,
      description: description,
    });

    servicesModelObjNew
      .save()
      .then((data) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  };
};

export default servicesPOST;
