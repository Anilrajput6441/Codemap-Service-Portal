import applicationModelObj from "../../Models/application.js";
const postApply=()=>{
  return async (req, res) => {
    try {
      const { name,email,phone,category,role} = req.body;
      const resume = req.file.filename;
      const newApplication = new applicationModelObj({
       name,
       email,
       phone,
       category,
       role,
       resume,
      });
      await newApplication.save();
      res.status(201).json({ status: true, message: "Application submitted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
  };
}
export { postApply };