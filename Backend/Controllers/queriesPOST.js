import queryModelObj from "../Models/queries.js";

const queriesPOST = () => {
  return (req, res) => {
    const { name, email, phone, message } = req.body;
    const queryModelObjNew = new queryModelObj({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });

    queryModelObjNew
      .save()
      .then((data) => {
        res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
};

export default queriesPOST;
