import React, { useEffect } from "react";
import { useAdminAuth } from "./Utils/useAdminAuth";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const CMSDashboard = () => {
  const navigate = useNavigate();
  const verifyUser = async () => {
    const dataObj = {
      token: localStorage.getItem("token"),
    };

    console.log(dataObj.token);
    const response =await useAdminAuth(dataObj, "verify");
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
       <div className="mainHolder w-[100vw] h-[100vh]">

       </div>
      <Footer />
    </>
  );
};

export default CMSDashboard;
