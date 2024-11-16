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
    <div className="w-[100vw]  flex flex-col  pl-4 2xl:pl-8  pr-4 pt-8 pb-3 mt-7">
      <div className="headerArea">
        <p className="text-center text-[8vmin] font-extrabold ">
          Our <span className="text-mainText font-extrabold">Blogs</span>
        </p>
        <p className="text-center pl-3 text-textGrey m text-[2.25vmin]">
          Get the latest tech and business blogs by Codemap’s team
        </p>
      </div>
      <div className="flex w-[100vw]  pl-4 pr-4 pt-8 pb-8 mt-6">
        <div className="mainArea  w-[55vw] ml-4">
          <div className="mainBlogCardHolder flex flex-col justify-center items-center w-[55vw]  p-4 pb-7 2xl:gap-y-9">
            <div className="mainBlogCard flex flex-col justify-center">
              {screen.width <= 1000 && (
                <>
                  <div className="imageArea   w-[55vw] h-[42vmin] 2xl:h-[57vmin]pl-4">
                    <img
                      src={require("../../../assets/PM5.webp")}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </>
              )}
              {screen.width > 1000 && screen.width <= 1095 && (
                <>
                  <div className="imageArea  w-[65vw] h-[52vmin] pl-4">
                    <img
                      src={require("../../../assets/PM5.webp")}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </>
              )}
              {screen.width >= 1096 &&
                screen.width <= 1280 &&
                screen.height < 800 && (
                  <>
                    <div className="imageArea  w-[55vw] h-[59vmin] pl-4">
                      <img
                        src={require("../../../assets/PM5.webp")}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </>
                )}
              {screen.width >= 1096 &&
                screen.width <= 1280 &&
                screen.height >= 800 && (
                  <div className="imageArea  w-[55vw] h-[42vmin] 2xl:h-[57vmin] pl-2">
                    <img
                      src={require("../../../assets/PM5.webp")}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

              {screen.width > 1280 &&
                screen.width <= 1400 &&
                screen.height <= 810 && (
                  <div className="imageArea  w-[55vw] h-[42vmin] 2xl:h-[48vmin] pl-4">
                    <img
                      src={require("../../../assets/PM5.webp")}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

              {screen.width > 1280 &&
                screen.width <= 1400 &&
                screen.height <= 810 && (
                  <div className="imageArea  w-[55vw] h-[42vmin] 2xl:h-[48vmin] pl-4">
                    <img
                      src={require("../../../assets/PM5.webp")}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

              {screen.width >= 1400 &&
                screen.width <= 1500 &&
                screen.height < 810 && (
                  <>
                    <div className="imageArea  w-[55vw] h-[50vmin] pl-4">
                      <img
                        src={require("../../../assets/PM5.webp")}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </>
                )}
              {screen.width > 1500 && screen.width <= 1700 && (
                <div className="imageArea  w-[55vw] h-[59vmin]  pl-4">
                  <img
                    src={require("../../../assets/PM5.webp")}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              {screen.width > 1700 && screen.width <= 1900 && (
                <div className="imageArea  w-[55vw] h-[45vmin] pl-4">
                  <img
                    src={require("../../../assets/PM5.webp")}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              {screen.width > 1900 && (
                <div className="imageArea  w-[55vw] h-[42vmin] 2xl:h-[52vmin] pl-4">
                  <img
                    src={require("../../../assets/PM5.webp")}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <div className="dateArea">
                <p className="text-[#FF0000] text-[2.45vmin] pl-3 mt-3 p-2">
                  November 12,2024
                </p>
              </div>
              <div className="blogTitleArea">
                <p className="font-bold text-[4.25vmin] pl-3 font-poppins">
                  What is Project Management in our software industry ?
                </p>
              </div>
              <div className="readMoreArea pl-3 text-textGrey mt-3 text-[2.15vmin]">
                Read more...
              </div>
            </div>
          </div>
        </div>

        <div className="sideArea flex gap-y-10 w-[40vw]  pl-[0.15px] ml-1 2xl:ml-3 2xl:pl-1">
          <div className="sideArea flex gap-y-9 w-[40vw]  pl-[1.5px] ml-1 2xl:ml-2 2xl:pl-1 mt-[-1.75vmin]">
            <ul>
              {apiResponse.map((val, index) => (
                <SideBlogCard data={val} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
