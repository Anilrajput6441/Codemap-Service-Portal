import teamsObj from "../../Models/teams.js";
const teamsGET = (req, res) => {
  teamsObj
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export default teamsGET;
