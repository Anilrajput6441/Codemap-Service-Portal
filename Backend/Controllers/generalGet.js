const generalGet = (req, res) => {
  const myObj = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };
  res.send(myObj);
};
export default generalGet;
