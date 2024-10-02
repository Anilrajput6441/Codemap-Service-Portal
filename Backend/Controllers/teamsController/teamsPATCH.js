import teamsObj from "../../Models/teams.js";

const teamsPATCH = () => {
  return (req, res) => {
    const image = req.file.filename;
    const { name, description } = req.body;

    // console.log(name, image, description);

    if (description === undefined) {
      teamsObj
        .findOne({ name: name })
        .then((member) => {
          member.image = image;
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
    } else {
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
    }

    res.send({ status: 200 });
  };
};

export default teamsPATCH;
