import React, { useEffect } from "react";
import { useAdminAuth } from "./Utils/useAdminAuth";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import CMSCard from "./CMSCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { title } from "process";
import { link } from "fs";
import RevolvingHeader from "../RevolvingHeader";

toast.configure();

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
    {
      image: require("../../../assets/Technologies.png"),
      title: "Add Technology",
      link: "/TechnologiesCMS",
    },
    {},
    {},
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
      toast.error("User not verified... ", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/cms");
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <>
      {screen.width > 1000 && <RevolvingHeader />}
      <Header category="dashboard" />
      <div className="mainHolder ml-[-1vmin] pb-20 w-[100vw] flex flex-wrap justify-center items-center mt-10 gap-y-6   gap-x-12">
        {apiResponse.map((val, index) => (
          <CMSCard data={val} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CMSDashboard;
