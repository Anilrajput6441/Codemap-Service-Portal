import React, { useState, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import { useAddAdmin } from "../Utils/useAddAdmin";
import { useAdminAuth } from "../Utils/useAdminAuth";
const Admin = () => {
  const navigate = useNavigate();
  const verifyUser = async () => {
    const dataObj = {
      token: localStorage.getItem("token"),
    };

    const response = await useAdminAuth(dataObj, "verify");
    if (response.status === 200) {
      alert("User is verified");
    } else {
      navigate("/cms");
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const [tigger, setTigger] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const addAdminFlag = useAddAdmin(tigger, name, email, password, token);
  const AddAdmin = (e) => {
    e.preventDefault();

    //Add Admin logic here
    //  console.log(name,email,password,token);
    setTigger(true);
  };

  return (
    <>
      <Header />
      <div className="mainHolder w-[100vw]  pb-14 flex  flex-col mt-[15vmin] md:mt-[12vmin] items-center 2xl:text-[2.25vmin]">
        <form className="w-[90vw] lg:w-[70vmin] border-lightGrey border-2 border-grey p-5  flex  flex-col gap-y-9">
          <p className="text-center text-[6.5vmin] md:text-[4.5vmin] font-extrabold text-deepViolet">
            Add Admin
          </p>
          <input
            type="text"
            placeholder="Add Admin Name..."
            className="border-b-[1px]  p-1"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="border-b-[1px] p-1"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Add new Password..."
            className="border-b-[1px] p-1"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="text"
            className="secretToken border-b-[1px] p-1"
            placeholder="Enter the secret Token..."
            id="secretToken"
            onChange={(e) => {
              setToken(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-deepViolet text-white p-2  w-[30%]"
            onClick={AddAdmin}
          >
            Add
          </button>

          {addAdminFlag ? alert("Admin added successfully") : <p></p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
