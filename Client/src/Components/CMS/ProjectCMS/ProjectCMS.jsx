import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAdminAuth } from "../Utils/useAdminAuth";
import "react-toastify/dist/ReactToastify.css";
const ProjectCMS = () => {
  toast.configure();
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
      <Header />
      <div className="mainHolder h-[40vh] w-[100vw]"></div>
      <Footer />
    </>
  );
};

export default ProjectCMS;