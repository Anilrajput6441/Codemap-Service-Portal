import React, { useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useGetData } from "../Utils/useGetData";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../Utils/useAdminAuth";
import CMSCard from "../CMSCard";
const PartnershipCMS = () => {
  const [tigger, setTigger] = useState(true);
  toast.configure();

  const data = useGetData(tigger, "partnership");

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
    setTigger(false);
  }, []);
  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <>
      <Header category="dashboard" />
      <div className="messagesBody">
        {data.length > 0 ? (
          <>
            <div className="messageHolde flex flex-wrap gap-x-6 gap-y-6  pb-20 w-[100vw] pt-20 justify-center items-center">
              {data.map((val) => (
                <CMSCard data={val} type="message" />
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PartnershipCMS;
