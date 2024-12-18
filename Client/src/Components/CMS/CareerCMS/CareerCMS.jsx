import { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePostData } from "../Utils/usePostData";
import { useAdminAuth } from "../Utils/useAdminAuth";
import { useNavigate } from "react-router-dom";
const CareerCMS = () => {
  toast.configure();
  const [tigger, setTigger] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const status = usePostData(tigger, "career", data, "career");
  const postData = (e) => {
    e.preventDefault();
    const data = {
      title: document.getElementById("title").value,
      category: document.getElementById("category").value,
      duration: document.getElementById("duration").value,
      description: document.getElementById("description").value,
    };
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("description").value = "";
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
    verifyUser();
  }, []);
  return (
    <>
      <Header category="dashboard" />
      <div className="mainHolder flex justify-center items-center p-4 pb-20 mt-7">
        <div className="formHolder border-textGrey border-[1px] w-[96vw] md:w-[60vmin] p-5">
          <form className="flex flex-col text-[2.05vmin] ">
            <p className="lg:text-[3.45vmin] text-[5.85vmin] text-center">
              Add Career
            </p>
            <input
              type="text"
              name="name"
              id="title"
              placeholder="Enter title..."
              className=" border-textGrey border-b-[1px] p-1 mt-4"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              id="category"
              placeholder="Enter Category..."
              className=" border-textGrey border-b-[1px] p-1"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration..."
              className=" border-textGrey border-b-[1px] p-1"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              id="description"
              placeholder="Enter Descripition..."
              className=" border-textGrey border-b-[1px] p-1"
            ></input>
            <br></br>
            <br></br>

            <button className="bg-deepViolet text-white p-2" onClick={postData}>
              Add career
            </button>
          </form>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
};

export default CareerCMS;
