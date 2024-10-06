import adminModelObj from "../../Models/admin.js";
import jwt from "jsonwebtoken";
const postAuth = () => {
  return async (req, res) => {
    try {
      const token = req.headers?.authorization.split(" ")[1];

      if (!token) {
        return res
          .status(401)
          .json({ status: false, message: "Access Denied" });
      }
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, value) => {
        const user = await adminModelObj.findById(value?.id);
        if (!user) {
          return res.json({ status: false, message: "Unauthorized" });
        }
        const userData = {
          id: user?.id,
          username: user?.username,
          email: user?.email,
        };

        return res
          .status(200)
          .json({ status: true, message: "Authenticated", data: userData });
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: "Server Error" });
    }
  };
};

export default postAuth;
