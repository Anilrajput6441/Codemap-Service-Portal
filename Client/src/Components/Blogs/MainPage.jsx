import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import SearchBar from "./SearchBar";
import BlogsCard from "./BlogsCard";
import { title } from "process";
import RevolvingHeader from "../RevolvingHeader";

const MainPage = () => {

  
const apiResponse=[
  {
      image:require("../../../assets/PM1.jpg"),
      title:"What is Project Management and its importance?",
      date:"November 12, 2024",
      link: "/mainBlogs"
  
  },
  {
    image:require("../../../assets/teamicon.avif"),
    title:"What is Project Management and its importance?",
    date:"November 15, 2024",
    link: "/mainBlogs"
  },
  {
    image:require("../../../assets/partner.jpg"),
    title:"What is Project Management and its importance in software?",
    date:"November 20, 2024",
    link: "/mainBlogs"
  },
 
]
  
  return (

    <>
    {
      screen.width>1000 &&
      <RevolvingHeader />
    }

    <Header />
    <div className="holder pb-16 pt-10 ">
    <SearchBar />

    <p className="pl-3 md:pl-7 2xl:ml-10 mt-10 font-medium text-[5.5vmin] md:text-[4.45vmin] font-poppines">Our Latest Blogs...</p>

    <div className="cardBlogsHolder flex flex-wrap justify-center items-center w-[100vw] mt-9 gap-x-9 gap-y-8">


      {
        apiResponse.map((val, index) => (
          <BlogsCard data={val} />
        ))
      }

  
      </div>
    </div>
   
   <Footer />
    </>
  )
};

export default MainPage;
