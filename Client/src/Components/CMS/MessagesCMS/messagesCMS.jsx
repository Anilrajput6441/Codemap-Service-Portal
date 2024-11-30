import React, { useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../Utils/useAdminAuth";
const MessagesCMS = () => {
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
      <Header category="dashboard" />
      <div className="messagesBody"></div>
      <Footer />
    </>
  );
};

export default MessagesCMS;
