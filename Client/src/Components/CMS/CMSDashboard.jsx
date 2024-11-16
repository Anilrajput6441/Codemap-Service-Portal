import React, { useEffect } from "react";
import { useAdminAuth } from "./Utils/useAdminAuth";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import CMSCard from "./CMSCard";

const CMSDashboard = () => {
  const apiResponse = [
    {
      image: require("../../../assets/employee.png"),
      title: "Employee Management",
      link: "/EmployeeCMS",
    },
    {
      image: require("../../../assets/careerImage.png"),
      title: "Career Management",
      link: "/CareerCMS",
    },
  ];
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
  return (
    <>
      <Header category="dashboard" />
      <div className="mainHolder w-[100vw] pb-20 flex justify-center items-center mt-10   gap-x-12">
        {apiResponse.map((val, index) => (
          <CMSCard data={val} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CMSDashboard;
