import teamsObj from "../../Models/teams.js";
const teamsDELETE = (req, res) => {
  const name = req.query.name;
  teamsObj
    .deleteOne({ name: name })
    .then((val) => {
      return res.status(200).send({ status: 200 });
    })
    .catch((err) => {
      res.status(err.status).send({ status: err.status });
    });
};
export default teamsDELETE;
