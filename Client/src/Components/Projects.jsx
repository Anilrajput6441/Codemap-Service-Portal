import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import TitleComponent from "./TitleComponent";
import { useState, useEffect } from "react";

const Projects = () => {
  const [count, setCount] = useState("0");
  const [state, setState] = useState("Web");
  const navMap = {
    0: "Web",
    1: "Android",
    2: "Custom",
  };
  const handleChange = (index) => {
    if (index != count) {
      document.getElementById(count).style.backgroundColor = "#fff";
      setState(navMap[index]);
      setCount(index);
    }
  };
  const changeColor = () => {
    document.getElementById(count).style.backgroundColor = "#6e41c6";
  };
  useEffect(() => {
    changeColor();
  }, [count]);

  const apiResponse = [
    {
      title: "Lyft Ecommerce",
      image: "https://i.ibb.co/ncR6b0B/ecom.webp",
      live: true,
      Link: "https://www.linkedin.com/in/aritra-chakraborty-396604217/",
      description:
        "This project is an ecommerce website named as Lyft Ecommerce which operates in items of clothes, cosmetics, electronics and many more...",
    },
    {
      title: "CMS",
      image: "https://i.ibb.co/ncR6b0B/ecom.webp",
      live: false,
      Link: "https://www.linkedin.com/in/abhishek-kr-pandey-57544325a/",
      description:
        "This project is an ecommerce website named as Lyft Ecommerce which operates in items of clothes, cosmetics, electronics and many more..",
    },
    {
      title: "Lyft Ecomerce",
      image: "https://i.ibb.co/ncR6b0B/ecom.webp",
      Link: "https://www.linkedin.com/in/anish-gupta-5471a129a/",
      live: true,
      description:
        "This project is an ecommerce website named as Lyft Ecommerce which operates in items of clothes, cosmetics, electronics and many more...",
    },
  ];
  return (
    <>
      <Header />
      <TitleComponent
        title="Our Projects"
        slogan="Some of our recent projects done by our team"
      />
      <div className="projectsNavHolder flex justify-center items-center  flex-wrap text-[3vmin] gap-x-8 text-textGrey p-4">
        <div className="optionHolder flex justify-center items-center  flex-wrap text-[3.65vmin] md:text-[2.75vmin] gap-x-12 gap-y-5 md:gap-x-36 text-textGrey p-3">
          <div>
            <p
              onClick={() => {
                handleChange("0");
              }}
            >
              Web Projects
            </p>
            <div
              className="underline h-1 w-[13vmin] mt-1 bg-white"
              id="0"
            ></div>
          </div>
          <div>
            <p
              onClick={() => {
                handleChange("1");
              }}
            >
              Android Projects
            </p>
            <div
              className="underline  h-1 w-[13vmin] mt-1 bg-white"
              id="1"
            ></div>
          </div>
          <div>
            <p
              onClick={() => {
                handleChange("2");
              }}
            >
              Custom Project
            </p>
            <div
              className="underline  h-1 w-[13vmin] mt-1 bg-white"
              id="2"
            ></div>
          </div>
        </div>
      </div>

      <div className="HorizontalLine flex justify-center items-center mt-[-0.5vmin]">
        <div className="line w-[92vw] h-2 border-gray border-t-[1px]"></div>
      </div>
      <div className="cardHolder p-2">
        <div className="TeamCardHolder flex flex-col flex-wrap justify-center  items-center mt-5 md:mt-9  gap-y-[10vmin] md:gap-y-[8.25vmin] pb-16 pl-2  mr-[2vmin] pr-3">
          {apiResponse.map((val, index) => (
            <Card data={apiResponse[index]} type="Projects" value={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Projects;
