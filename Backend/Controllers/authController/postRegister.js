import adminModelObj from "../../Models/admin.js";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../../Constants/backendConstants.js";
const postRegister = () => {
  return async (req, res) => {
    const { username, email, password, secretKey } = req.body;

    if (secretKey === process.env.SECRET_TOKEN) {
      try {
        if (!username || !email || !password) {
          return res
            .status(400)
            .json({ status: false, message: "All fields are required" });
        }

        const existingUser = await adminModelObj.findOne({ email });
        if (existingUser) {
          return res
            .status(409)
            .json({ status: false, message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newAdmin = new adminModelObj({
          username,
          email,
          password: hashedPassword,
        });

        const adminSaveObj = await newAdmin.save();
        if (adminSaveObj) {
          res
            .status(201)
            .json({ status: true, message: "User created successfully" });
        } else {
          res
            .status(500)
            .json({ status: false, message: "Failed to create user" });
        }
      } catch (error) {
        console.error(error);
        res
          .status(400)
          .json({ status: false, message: "Something went wrong" });
      }
    } else {
      res.status(401).json({ message: "Invalid secret key" });
    }
  };
};

export default postRegister;
