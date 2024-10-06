import adminModelObj from "../../Models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const postLogin = () => {
  return async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          status: false,
          message: "Please provide the email and password",
        });
      }

      const user = await adminModelObj.findOne({ email: email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        console.log("In thie block");
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      return res
        .status(201)
        .json({ status: true, message: "Login Successful", token: token });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message });
    }
  };
};

export default postLogin;
