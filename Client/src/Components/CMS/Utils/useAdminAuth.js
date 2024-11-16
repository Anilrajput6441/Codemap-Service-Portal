import axios from "axios";
import dotenv from "dotenv";

const { API_TEST_URL } = process.env;

dotenv.config();
export const useAdminAuth = async (data, type) => {
  // console.log(API_TEST_URL);
  if (type === "login") {
    const { email, password } = data;
    try {
      const response = await axios.post(API_TEST_URL + "api/v1/auth/login", {
        email,
        password,
      });

      if (response.data.status === true) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        return { status: 201, data: response.data.data };
      } else {
        return { status: 400, message: response.data.message };
      }
    } catch (error) {
      console.error(error);
      return { status: 400, message: "Invalid credentials" };
    }
  } else if (type == "verify") {
    try {
      const token = JSON.parse(data.token);

      var header = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await axios.post(
        API_TEST_URL + "api/v1/auth/auth",
        {},
        header
      );
      if (response.data.status === true) {
        return { status: 200 };
      } else {
        return { status: 401, message: response.data.message };
      }
    } catch (error) {
      console.error(error);
      return { status: 401, message: "Invalid token" };
    }
  }
};
