import React from "react";
import SideBlogCard from "./SideBlogCard";

const BlogHome = () => {
  const apiResponse = [
    {
      image: require("../../../assets/clientrelations.jpeg"),
      title: "How to manage stable and long term client relationship?",
      date: "November 12, 2024",
      Link: "/mainBlogs",
    },
    {
      image: require("../../../assets/ecom.jpg"),
      title: "Get a Modern ecommerce web app with Codemap",
      date: "November 20, 2024",
      Link: "/mainBlogs",
    },
    {
      image: require("../../../assets/customer-service.jpg"),
      title: "How and what is customer service in the agency business?",
      date: "November 27, 2024",
      Link: "/mainBlogs",
    },
  ];
  return (
    <div className="w-[100vw]  flex flex-col mt-6">
      <div className="headerArea">
        <p className="text-center text-[8vmin] font-extrabold ">
          Our <span className="text-mainText font-extrabold">Blogs</span>
        </p>
      </div>
      <div className="blogsHolder flex mt-[5vmin] pb-[4vmin]">
        <div className="mainBlogs w-[62%]  h-[100vh] flex flex-col items-center ml-3">
          <div className="blogHolder mt-[-2.45vmin]">
            <div className="imageholder  w-[98%] h-[60vh] 2xl:h-[63vh]  mt-[5vmin] flex justify-center items-center ml-1">
              <img
                src={require("../../../assets/PM5.webp")}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="textHolder">
              <p className="text-red mt-2 text-[2.65vmin] ml-3">
                November 12,2024
              </p>

              <div className="titleText">
                <p className="font-extrabold text-[5vmin] ml-3">
                  What is Project Management in our software industry ?
                </p>
                <p className="text-textGrey ml-3 mt-4 text-[2.45vmin]">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sideBlogs w-[38%]   h-[100vh] lg:ml-1 2xl:ml-[0.15px]  mt-[-1.45vmin] flex flex-col  justify-center">
          {apiResponse.map((val, index) => (
            <SideBlogCard data={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
