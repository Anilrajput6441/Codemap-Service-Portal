import teamsObj from "../../Models/teams";
const teamsDELETE = () => {
  return (req, res) => {
    const name = req.query.name;
    console.log(name);
  };
};
export default teamsDELETE;
