import axios from "axios";
import dotenv from "dotenv";
import { API_TEST_URL } from "../Constants/Links";

dotenv.config();
export const useAdminAuth = async (data, type) => {
  if (type === "register") {
    const { secretKey, username, email, password } = data;
    const response = await axios.post(API_TEST_URL + "api/v1/auth/register", {
      username,
      email,
      password,
      secretKey,
    });
    if (response.data.status === true) {
      return { status: 201 };
    } else {
      return { status: 400, message: response.data.message };
    }

    // console.log(API_TEST_URL);
  } else if (type === "login") {
    const { email, password } = data;
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
  } else if (type == "verify") {
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
  }
};
