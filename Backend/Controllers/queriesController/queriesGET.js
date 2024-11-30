import queryModelObj from "../../Models/queries.js";

const queriesGET = (req, res) => {
  queryModelObj
    .find()
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
};

export default queriesGET;
