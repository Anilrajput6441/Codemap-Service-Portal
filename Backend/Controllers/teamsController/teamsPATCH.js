import teamsObj from "../../Models/teams.js";

const teamsPATCH = () => {
  return (req, res) => {
    const { name, description } = req.body;

    teamsObj
      .findOne({ name: name })
      .then((member) => {
        member.description = description;
        member
          .save()
          .then((updatedMember) => {
            res.status(200).send({ status: 200 });
          })
          .catch((error) => {
            res.status(500).send({ err: error.message });
          });
      })
      .catch((err) => {
        res.status(err.status).send({ err: err.message });
      });
  };
};

export default teamsPATCH;
