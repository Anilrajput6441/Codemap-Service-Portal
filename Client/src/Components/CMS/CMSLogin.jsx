import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAdminAuth } from "./Utils/useAdminAuth";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CMSLogin = () => {
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const authObj = {
      email: email.current.value,
      password: password.current.value,
    };
    const response = await useAdminAuth(authObj, "login");
    if (response.status === 201) {
      toast("login Successful... ", {
        position: toast.POSITION.TOP_RIGHT,
      });

      navigate(`/cmsDashboard`);
    } else {
      toast("login Failed... ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="formContainer w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="formHolder w-4/12 p-6 flex flex-col justify-center items-center border-headerUnderline border-[0.35px] shadow-lg">
        <form className="flex flex-col justify-center items-center w-[85%] 2xl:text-[2.5vmin]">
          <p className="mt-3 font-poppins text-mainText font-extrabold text-[3.65vmin]">
            Admin Login...
          </p>
          <input
            type="email"
            name="email"
            ref={email}
            id="email"
            className="border-black border-b-[1px] mt-11 w-[85%] p-2"
            placeholder="Enter your email..."
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            ref={password}
            id="password"
            placeholder="Enter your password..."
            className="border-black border-b-[1px] mt-4 w-[85%] p-2"
          />
          <br />
          <br />
          <p className="mt-2 text-textGrey">
            <Link to="/admin/register">Register new admin?</Link>
          </p>
          <button
            type="submit"
            className="mt-8 bg-mainText text-white p-2 pl-6 pr-6"
            onClick={onHandleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CMSLogin;
