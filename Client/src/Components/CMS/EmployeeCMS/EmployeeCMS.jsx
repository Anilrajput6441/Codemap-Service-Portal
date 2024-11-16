import React, { useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { useAdminAuth } from "../Utils/useAdminAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../Card";
import { userGetData } from "../Utils/useGetData";
import CMSCard from "../CMSCard";
const EmployeeCMS = () => {
  const [count, setCount] = useState("0");
  const [state, setState] = useState("Frontend");
  // const [data, setData] = useState([]);
  const [tigger, setTigger] = useState(false);
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

  const data = userGetData(tigger, "apply");
  useEffect(() => {
    setTigger(true);
  }, []);

  console.log(data);
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
        <div className="navOptionsHolder flex justify-center items-center gap-x-[7vmin] md:gap-x-[15vmin] mt-10 text-gray 2xl:text-[2.65vmin]">
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

      <div className="mainHolder flex justify-center items-center pb-20">
        {data.map((val, index) => (
          <CMSCard type="application" data={val} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default EmployeeCMS;
