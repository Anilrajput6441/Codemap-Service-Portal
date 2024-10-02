const generalGet = (req, res) => {
  const statusObj = {
    status: 200,
    message: "OK",
  };
  res.status(statusObj.status).json(statusObj);
};
export default generalGet;
