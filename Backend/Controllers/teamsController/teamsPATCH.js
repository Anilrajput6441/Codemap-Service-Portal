import teamsObj from "../../Models/teams.js";

const teamsPATCH = () => {
  return (req, res) => {
    const { name, image, description } = req.body;

    console.log(name, image, description);
  };
};

export default teamsPATCH;
