import React from "react";

const Hero = () => {
  return (
    <div className="font-poppins HeroArea w-[100vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] pb-8  bg-backgroundMain pb-10">
      <div className="textHolder flex flex-col items-center h-[100%]">
        <div className="textContainer flex flex-col  mt-[15vmin] md:mt-[11vmin] items-center h-[100%] p-2">
          <p className="font-poppins text-[3.65vmin] md:text-[3.45vmin] font-medium text-center">
            We transform ideas into powerful digital solutions with innovation,
            precision, and passion
          </p>
          <p className="text-[17vmin] md:text-[15vmin] font-extrabold text-center">
            Codemap <span className="text-mainText">Services</span>
          </p>
          <p className="text-[5vmin] md:text-[4vmin] font-medium mt-2">
            ( Your one stop IT solutions partner )
          </p>

          <p className="text-center text-[4.25vmin] md:text-[3.45vmin] font-medium text-textGrey mt-[7vmin]">
            Plan - Prepare - Develop - Test - Deploy
          </p>
          <button className="bg-mainText text-white p-2 pr-10 pl-10 mt-12 text-[4vmin] md:text-[3.15vmin]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
