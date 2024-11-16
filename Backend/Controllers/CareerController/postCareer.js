import careerObj from "../../Models/career.js";
const postCareer = () => {
  return async (req, res) => {
    try {
      const { title, description, category, duration } = req.body;
      const newCareerObj = new careerObj({
        title: title,
        description: description,
        category: category,
        duration: duration,
      });
      await newCareerObj.save();
      res
        .status(201)
        .json({ status: true, message: "Application submitted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  };
};

export default postCareer;
