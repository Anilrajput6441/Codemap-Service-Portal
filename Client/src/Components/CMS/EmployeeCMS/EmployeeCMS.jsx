import React, { useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { useAdminAuth } from "../Utils/useAdminAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const EmployeeCMS = () => {
  const [count, setCount] = useState("0");
  const [state, setState] = useState("Frontend");
  const changeColor = () => {
    console.log(state);
    document.getElementById(count).style.backgroundColor = "#6e41c6";
  };

  const navigate = useNavigate();
  const verifyUser = async () => {
    const dataObj = {
      token: localStorage.getItem("token"),
    };

    console.log(dataObj.token);
    const response = await useAdminAuth(dataObj, "verify");
    if (response.status === 200) {
      console.log("User is verified");
    } else {
      navigate("/cms");
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  useEffect(() => {
    changeColor();
  }, [count]);
  return (
    <>
      <Header category="dashboard" />

      <div className="mainHolder  pb-20 w-[100vw]">
        <div className="navOptionsHolder flex justify-center items-center gap-x-[15vmin] mt-10 text-gray">
          <div>
            <p
              onClick={() => {
                document.getElementById(count).style.backgroundColor =
                  "#808080e2";
                setCount("0");
              }}
            >
              Apply
            </p>
            <div className="underline h-1 w-20 bg-gray mt-2" id="0"></div>
          </div>
          <div>
            <p
              onClick={() => {
                document.getElementById(count).style.backgroundColor =
                  "#808080e2";
                setCount("1");
              }}
            >
              Selected
            </p>
            <div className="underline h-1 w-20 bg-gray  mt-2" id="1"></div>
          </div>
          <div>
            <p
              onClick={() => {
                document.getElementById(count).style.backgroundColor =
                  "#808080e2";
                setCount("2");
              }}
            >
              Rejected
            </p>
            <div className="underline h-1 w-20 bg-gray mt-2" id="2"></div>
          </div>
        </div>
        <div className="mainHolder flex justify-center items-center">
          <div className="underLine border-headerUnderline border-[1px] w-[85vw] mt-7"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EmployeeCMS;
