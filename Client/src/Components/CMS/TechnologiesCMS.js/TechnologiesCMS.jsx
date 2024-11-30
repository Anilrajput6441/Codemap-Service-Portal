import React, { useEffect } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../Utils/usePostData";
import { useAdminAuth } from "../Utils/useAdminAuth";
const TechnologiesCMS = () => {
  toast.configure();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [tigger, setTigger] = useState(false);
  const [state, setState] = useState({
    selectedFile: null,
    filename: null,
  });

  let status = usePostData(tigger, "technologies", data, "technologies");

  //   const navigate = useNavigate();
  const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
    console.log(file);
  };

  const fileUploadHandler = (event) => {
    event.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      category: document.getElementById("category").value,
      file: state.selectedFile,
      filename: state.filename,
    };
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";

    setData(data);
    setTigger(true);
  };
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
    status = null;
  }, [status]);

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <>
      <Header category="dashboard" />
      <div className="technologiesHolder p-20 flex justify-center items-center">
        <div className="formHolder w-[96vw] lg:w-[50%] border-[1px] p-4">
          <p className="text-center mt-5 text-[5vmin] md:text-[3.5vmin] font-extrabold text-deepViolet">
            Add Technologies
          </p>
          <form className="flex flex-col gap-y-10 w-9/11 mainHolder mt-10">
            <input
              id="category"
              type="text"
              className="text w-[96%] md:text-[2.25vmin] p-2 border-headerUnderline border-b-[1.5px]"
              placeholder="Add Category..."
            />
            <input
              type="text"
              id="name"
              className="text w-[96%] md:text-[2.25vmin] p-2 border-headerUnderline border-b-[1.5px]"
              placeholder="Add Name..."
            />
            <input
              type="file"
              name="file"
              id="file"
              onChange={fileSelectedHandler}
            />
            <div className="buttonHolder">
              <button
                className="submit p-3 bg-deepViolet text-white"
                onClick={fileUploadHandler}
              >
                Add Technology
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechnologiesCMS;
