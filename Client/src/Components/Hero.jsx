import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="mainHero">
      {(screen.width < 1000 && (
        <div className="font-poppins HeroArea w-[100vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] pb-8  bg-backgroundMain pb-10">
          <div className="textHolder flex flex-col items-center h-[100%]">
            <div className="textContainer flex flex-col  mt-[15vmin] md:mt-[11vmin] items-center h-[100%] p-2">
              <p className="font-poppins text-[3.65vmin] md:text-[3.15vmin]  text-center">
                We transform ideas into powerful digital solutions with
                innovation, precision, and passion
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
                <Link to="/contact">Contact us</Link>
              </button>
            </div>
          </div>
        </div>
      )) || (
        <div className="mainHeroLaptop pb-6">
          {screen.width < 1700 && (
            <div className="font-poppins flex  HeroArea w-[100vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)]  bg-backgroundMain pb-10">
              <div className="flex">
                <div className="w-[50vw] flex flex-col gap-y-10 items-center mt-[15vmin]">
                  <div className="flex">
                    <div className="w-[85vmin] border-mainText  rounded-[4px] lg:ml-16 flex">
                      <div className="verticalLine h-[8vmin]  w-2 bg-mainText mt-4 rounded-[3px] ml-5"></div>
                      <div className="ml-1">
                        <p className="HeroheaderText font-bold text-[8vmin] ml-2">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </p>
                        <p className="ml-[-1vmin] text-mainText font-medium mt-1">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[90vmin] text-[2.35vmin] pl-7 pr-5 font-roboto">
                    <p className="ml-10 mt-1">
                      We at codemap aim to deliver quality technical solutions
                      to our clients at the most affordable cost. Give us a
                      chance to make your digital dream come true!!!
                    </p>
                    <button className="bg-mainText text-white pr-4 pl-4 mt-10 ml-8 p-2">
                      {" "}
                      <Link to="/contact">Contact us</Link>
                    </button>
                  </div>
                </div>
                <div className="w-[50vw] flex flex-col gap-y-10 lg:ml-[18vmin]  ml-[12vmin] mt-[3vmin]">
                  <div className="formHolder w-[37vw] bg-white p-3 2xl:p-5">
                    <p className="text-[4vmin] font-bold ml-1 2xl:ml-0">
                      Contact us
                    </p>
                    <p className="text-mainText mt-[0.75px] ml-1 2xl:ml-0">
                      {" "}
                      ( Get Flat 20% discount on your first order )
                    </p>
                    <form className="flex flex-col gap-y-8 p-3 mt-5 text-[2.25vmin]">
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your name..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your email..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your phone..."
                      />
                      <select className="text border-gray border-b-[1px] p-2">
                        <option value="None">
                          Which service are you looking for?
                        </option>
                        <option value="Talk to you later">TTYL</option>
                        <option value="To be honest">TBH</option>
                        <option value=" I don’t know">IDK</option>
                      </select>
                      <div className="flex justify-center items-center">
                        <button className="p-2 bg-mainText text-white w-[20vmin]">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {screen.width >= 1700 && screen.width <= 1919 && (
            <div className="font-poppins flex  HeroArea w-[100vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-15vmin)] pb-8  bg-backgroundMain pb-10">
              <div className="flex">
                <div className="w-[50vw] flex flex-col gap-y-10 items-center mt-[19vmin]">
                  <div className="flex">
                    <div className="w-[85vmin] border-mainText  rounded-[4px] ml-44 flex">
                      <div className="verticalLine h-[8vmin]  w-3 bg-mainText mt-4 rounded-[4px]"></div>
                      <div className="ml-4">
                        <p className="HeroheaderText font-bold text-[6.85vmin] ml-2">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </p>
                        <p className="ml-1 text-mainText font-medium mt-2 text-[2.25vmin]">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80vmin] text-[2.15vmin] pl-5 pr-5 font-roboto ml-5">
                    <p className="ml-6 mt-1">
                      We at codemap aim to deliver quality technical solutions
                      to our clients at the most affordable cost. Give us a
                      chance to make your digital dream come true!!!
                    </p>
                    <button className="bg-mainText text-white pr-4 pl-4 mt-10 ml-6 p-2">
                      {" "}
                      <Link to="/contact">Contact us</Link>
                    </button>
                  </div>
                </div>
                <div className="w-[50vw] flex flex-col gap-y-10   ml-[12vmin] mt-[13vmin]">
                  <div className="formHolder w-[30vw] bg-white p-6">
                    <p className="text-[4vmin] font-bold">Contact us</p>
                    <p className="text-mainText mt-[0.75px]">
                      {" "}
                      ( Get Flat 20% discount on your first order )
                    </p>
                    <form className="flex flex-col gap-y-10 p-3 mt-5 text-[2vmin]">
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your name..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your email..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your phone..."
                      />
                      <select className="text border-gray border-b-[1px] p-2 text-[2vmin]">
                        <option value="None">
                          Which service are you looking for?
                        </option>
                        <option value="Talk to you later">TTYL</option>
                        <option value="To be honest">TBH</option>
                        <option value=" I don’t know">IDK</option>
                      </select>
                      <div className="flex justify-center items-center">
                        <button className="p-2 bg-mainText text-white w-[20vmin]">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {screen.width >= 1920 && screen.width <= 2047 && (
            <div className="font-poppins flex  HeroArea w-[100vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-12vmin)] pb-8  bg-backgroundMain pb-10">
              <div className="flex">
                <div className="w-[50vw] flex flex-col gap-y-10 items-center mt-[19vmin]">
                  <div className="flex">
                    <div className="w-[85vmin] border-mainText  rounded-[4px] ml-36 flex">
                      <div className="verticalLine h-[8vmin]  w-3 bg-mainText mt-4 rounded-[4px]"></div>
                      <div className="ml-1">
                        <p className="HeroheaderText font-bold text-[6.85vmin] ml-2">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </p>
                        <p className="ml-1 text-mainText font-medium mt-2 text-[2.25vmin]">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80vmin] text-[2.15vmin] pl-5 pr-5 font-roboto ml-5">
                    <p className="ml-4 mt-1">
                      We at codemap aim to deliver quality technical solutions
                      to our clients at the most affordable cost. Give us a
                      chance to make your digital dream come true!!!
                    </p>
                    <button className="bg-mainText text-white pr-4 pl-4 mt-10 ml-6 p-2">
                      {" "}
                      <Link to="/contact">Contact us</Link>
                    </button>
                  </div>
                </div>
                <div className="w-[50vw] flex flex-col gap-y-10   ml-[12vmin] mt-[13vmin]">
                  <div className="formHolder w-[30vw] bg-white p-6">
                    <p className="text-[4vmin] font-bold">Contact us</p>
                    <p className="text-mainText mt-[0.75px]">
                      {" "}
                      ( Get Flat 20% discount on your first order )
                    </p>
                    <form className="flex flex-col gap-y-10 p-3 mt-5 text-[2vmin]">
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your name..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your email..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your phone..."
                      />
                      <select className="text border-gray border-b-[1px] p-2 text-[2vmin]">
                        <option value="None">
                          Which service are you looking for?
                        </option>
                        <option value="Talk to you later">TTYL</option>
                        <option value="To be honest">TBH</option>
                        <option value=" I don’t know">IDK</option>
                      </select>
                      <div className="flex justify-center items-center">
                        <button className="p-2 bg-mainText text-white w-[20vmin]">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          {screen.width >= 2048 && (
            <div className="font-poppins flex  HeroArea w-[100vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-12vmin)] pb-8  bg-backgroundMain pb-10">
              <div className="flex">
                <div className="w-[50vw] flex flex-col gap-y-10 items-center mt-[19vmin]">
                  <div className="flex">
                    <div className="w-[85vmin] border-mainText  rounded-[4px] ml-36 flex">
                      <div className="verticalLine h-[8vmin]  w-3 bg-mainText mt-4 rounded-[4px] ml-1"></div>
                      <div className="ml-1">
                        <p className="HeroheaderText font-bold text-[6.85vmin] ml-3">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </p>
                        <p className="ml-1 text-mainText font-medium mt-2 text-[2.25vmin]">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[80vmin] text-[2.15vmin] pl-5 pr-5 font-roboto ml-5">
                    <p className="ml-4 mt-1">
                      We at codemap aim to deliver quality technical solutions
                      to our clients at the most affordable cost. Give us a
                      chance to make your digital dream come true!!!
                    </p>
                    <button className="bg-mainText text-white pr-4 pl-4 mt-10 ml-6 p-2">
                      {" "}
                      <Link to="/contact">Contact us</Link>
                    </button>
                  </div>
                </div>
                <div className="w-[50vw] flex flex-col gap-y-14   ml-[12vmin] mt-[13vmin]">
                  <div className="formHolder w-[30vw] bg-white p-6">
                    <p className="text-[4vmin] font-bold">Contact us</p>
                    <p className="text-mainText mt-[0.75px]">
                      {" "}
                      ( Get Flat 20% discount on your first order )
                    </p>
                    <form className="flex flex-col gap-y-12 p-3 mt-5 text-[2.05vmin]">
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your name..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your email..."
                      />
                      <input
                        type="text"
                        className="text border-gray border-b-[1px] p-2"
                        placeholder="Enter your phone..."
                      />
                      <select className="text border-gray border-b-[1px] p-2 text-[2vmin]">
                        <option value="None">
                          Which service are you looking for?
                        </option>
                        <option value="Talk to you later">TTYL</option>
                        <option value="To be honest">TBH</option>
                        <option value=" I don’t know">IDK</option>
                      </select>
                      <div className="flex justify-center items-center">
                        <button className="p-2 bg-mainText text-white w-[20vmin]">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
