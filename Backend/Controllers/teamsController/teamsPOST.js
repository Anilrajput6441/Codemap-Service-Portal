import teamsObj from "../../Models/teams.js";

const teamsPOST = () => {
  return (req, res) => {
    // const image = req.file.filename;
    const { name, image, designation, description, linkedin } = req.body;
    const teamsModelObjNew = new teamsObj({
      image: image,
      name: name,
      designation: designation,
      description: description,
      linkedin: linkedin,
    });

    teamsModelObjNew
      .save()
      .then((data) => {
        res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
};

export default teamsPOST;
