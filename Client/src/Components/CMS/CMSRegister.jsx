import React, { useRef } from "react";
import Header from "../Header";
import { toast } from "react-toastify";
import dotenv from "dotenv";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "./Utils/useAdminAuth";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

dotenv.config();
const CMSRegister = () => {
  const secretKey = useRef(null);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObj = {
      secretKey: secretKey.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    const response = await useAdminAuth(authObj, "register");
    if (response.status === 201) {
      toast("Registration Successful... ", {
        position: toast.POSITION.TOP_RIGHT,
      });

      navigate(`/admin`);
    } else {
      toast("Registration Failed... ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <div className="formContainer w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="formHolder w-4/12  p-6 flex flex-col justify-center items-center border-headerUnderline border-[0.35px] shadow-lg  border-headerUnderline border-[0.35px] shadow-lg">
          <p className="mt-3 mt-3 font-poppins text-mainText font-extrabold text-[3.65vmin]">
            Register Admin...
          </p>
          <form className="flex flex-col 2xl:text-[2.5vmin] justify-center items-center w-[85%] 2xl:text-[2.5vmin]">
            <input
              type="text"
              ref={secretKey}
              name="secretKey"
              id="secretKey"
              className="border-black border-b-[1px] mt-9 w-[85%] p-2"
              placeholder="Enter Secret Key..."
            />
            <input
              type="text"
              ref={username}
              name="username"
              id="username"
              className="border-black border-b-[1px] mt-9 w-[85%] p-2"
              placeholder="Enter the username..."
            />
            <input
              type="text"
              ref={email}
              name="email"
              id="email"
              placeholder="Enter your email..."
              className="border-black border-b-[1px] mt-9 w-[85%] p-2"
            />
            <input
              type="text"
              ref={password}
              name="password"
              id="password"
              placeholder="Enter your password..."
              className="border-black border-b-[1px] mt-9 w-[85%] p-2"
            />
            <p className="mt-7 text-textGrey">
              <Link to="/admin">Already have an account?</Link>
            </p>
            <button
              className="p-2 pl-6 pr-6 bg-mainText text-white mt-7"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CMSRegister;
