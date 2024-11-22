import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  // const height_test = 864;
  // const width_test = 1536;
  // const { height, width } = screen;
  // if (height_test === height && width_test === width) {
  //   alert("Screen Found");
  // }
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
        <div className="mainHeroLaptop pb-3">
          {screen.width <= 1280 && screen.height >= 800 && (
            <>
              <div className="holder w-[100vw] flex bg-backgroundMain">
                <div className="textHolder  w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] flex justify-center items-center">
                  <div className="headerText w-[87%] 2xl:w-[85%] flex flex-col gap-y-[4.95vmin]">
                    <div className="mainBrandHolderText ">
                      <div className="brandIconHolder flex gap-x-2">
                        <div className="verticalLine h-[11vmin] w-[1.25vmin] bg-deepViolet rounded-lg"></div>
                        <div className="brandText text-[6.85vmin]  font-extrabold font-poppins">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </div>
                      </div>

                      <div className="sloganHolder">
                        <p className="slogan mt-2 text-mainText text-[2.45vmin] font-medium font-poppins">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>

                    <div className="headerExplain">
                      <p className="text-[2.35vmin] 2xl:text-[2.55vmin] leading-[5.35vmin] font-poppins">
                        We at codemap aim to deliver quality technical solutions
                        to our clients at the most affordable cost. Give us a
                        chance to make your digital dream come true!!!
                      </p>
                    </div>

                    <div className="buttonHolder">
                      <button className="bg-deepViolet text-white p-2 pl-8 pr-8">
                        <p className="text-[2.45vmin]">Contact Us</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="formHolder w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] ">
                  <div className="formHolder flex h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] justify-center items-center">
                    <div className="w-[78%]  bg-white rounded-lg mt-[-5.25vmin]">
                      <div className="formHolder flex flex-col gap-y-10 p-6 ">
                        <div className="textHolder">
                          <p className="font-extrabold text-[4vmin]">
                            Contact us
                          </p>
                          <p className="text-deepViolet mt-1 text-[2.45vmin]">
                            ( Get Flat 20% discount on your first order )
                          </p>
                        </div>
                        <div className="inputHolder flex flex-col gap-y-12">
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.65vmin]"
                              placeholder="Enter your name..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.65vmin]"
                              placeholder="Enter your email..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.65vmin]"
                              placeholder="Enter your phone..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>

                          <div className="w-[100%]">
                            <select
                              name="cars"
                              id="cars"
                              className="w-[100%] text-[2.65vmin]"
                            >
                              <option value="volvo">
                                Which service are you looking for?
                              </option>
                              <option value="saab">Web Development</option>
                              <option value="mercedes">
                                Android Development
                              </option>
                              <option value="audi">
                                Custom Software Development
                              </option>
                            </select>
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                        </div>
                        <div className="buttonHolderContainer flex justify-center items-center">
                          <div className="buttonHolder w-[35%] bg-deepViolet text-white flex justify-center items-center">
                            <button className="p-2 text-[2.45vmin]">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {screen.width <= 1280 && screen.height < 800 && (
            <>
              <div className="holder w-[100vw] flex bg-backgroundMain">
                <div className="textHolder  w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] flex justify-center items-center">
                  <div className="headerText w-[87%] 2xl:w-[85%] flex flex-col gap-y-[4.95vmin]">
                    <div className="mainBrandHolderText ">
                      <div className="brandIconHolder flex gap-x-2">
                        <div className="verticalLine h-[11vmin] w-[1.25vmin] bg-deepViolet rounded-lg"></div>
                        <div className="brandText text-[8.75vmin]  font-extrabold font-poppins mt-[-0.65vmin]">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </div>
                      </div>

                      <div className="sloganHolder">
                        <p className="slogan mt-2 text-mainText text-[2.45vmin] font-medium font-poppins">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>

                    <div className="headerExplain">
                      <p className="text-[2.35vmin] 2xl:text-[2.55vmin] leading-[5.35vmin] font-poppins">
                        We at codemap aim to deliver quality technical solutions
                        to our clients at the most affordable cost. Give us a
                        chance to make your digital dream come true!!!
                      </p>
                    </div>

                    <div className="buttonHolder">
                      <button className="bg-deepViolet text-white p-2 pl-8 pr-8">
                        <p className="text-[2.45vmin]">Contact Us</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="formHolder w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] ">
                  <div className="formHolder flex h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] justify-center items-center">
                    <div className="w-[78%]  bg-white rounded-lg mt-[-4.5vmin]">
                      <div className="formHolder flex flex-col gap-y-10 p-6 ">
                        <div className="textHolder">
                          <p className="font-extrabold text-[4vmin]">
                            Contact us
                          </p>
                          <p className="text-deepViolet mt-1 text-[2.45vmin]">
                            ( Get Flat 20% discount on your first order )
                          </p>
                        </div>
                        <div className="inputHolder flex flex-col gap-y-12">
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.65vmin]"
                              placeholder="Enter your name..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.65vmin]"
                              placeholder="Enter your email..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.65vmin]"
                              placeholder="Enter your phone..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>

                          <div className="w-[100%]">
                            <select
                              name="cars"
                              id="cars"
                              className="w-[100%] text-[2.65vmin]"
                            >
                              <option value="volvo">
                                Which service are you looking for?
                              </option>
                              <option value="saab">Web Development</option>
                              <option value="mercedes">
                                Android Development
                              </option>
                              <option value="audi">
                                Custom Software Development
                              </option>
                            </select>
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                        </div>
                        <div className="buttonHolderContainer flex justify-center items-center">
                          <div className="buttonHolder w-[35%] bg-deepViolet text-white flex justify-center items-center">
                            <button className="p-2 text-[2.45vmin]">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {screen.width > 1280 && screen.width < 1700 && (
            <>
              <div className="holder w-[100vw] flex bg-backgroundMain">
                <div className="textHolder  w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] flex justify-center items-center">
                  <div className="headerText w-[87%] 2xl:w-[85%] flex flex-col gap-y-[4.95vmin] mt-[-2.45vmin]">
                    <div className="mainBrandHolderText ">
                      <div className="brandIconHolder flex gap-x-3">
                        <div className="verticalLine h-[11vmin] w-[1.25vmin] bg-deepViolet rounded-lg"></div>
                        <div className="brandText text-[6.85vmin] 2xl:text-[8.5vmin] font-extrabold font-poppins">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </div>
                      </div>

                      <div className="sloganHolder">
                        <p className="slogan mt-4 text-mainText text-[2.45vmin] font-medium font-poppins">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>

                    <div className="headerExplain">
                      <p className="text-[2.35vmin] 2xl:text-[2.55vmin] leading-[5.35vmin] font-poppins">
                        We at codemap aim to deliver quality technical solutions
                        to our clients at the most affordable cost. Give us a
                        chance to make your digital dream come true!!!
                      </p>
                    </div>

                    <div className="buttonHolder">
                      <button className="bg-deepViolet text-white p-2 pl-8 pr-8">
                        <p className="text-[2.45vmin]">Contact Us</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="formHolder w-[50vw] h-[calc(100vh-27vmin)] 6.25md:h-[calc(100vh-10vmin)] ">
                  <div className="formHolder flex h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] justify-center items-center">
                    <div className="w-[78%]  bg-white rounded-lg mt-[-6.25vmin]">
                      <div className="formHolder flex flex-col gap-y-10 p-6 ">
                        <div className="textHolder">
                          <p className="font-extrabold text-[4vmin]">
                            Contact us
                          </p>
                          <p className="text-deepViolet mt-1 text-[2.45vmin]">
                            ( Get Flat 20% discount on your first order )
                          </p>
                        </div>
                        <div className="inputHolder flex flex-col gap-y-12">
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.45vmin]"
                              placeholder="Enter your name..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.45vmin]"
                              placeholder="Enter your email..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.45vmin]"
                              placeholder="Enter your phone..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>

                          <div className="w-[100%]">
                            <select
                              name="cars"
                              id="cars"
                              className="w-[100%] text-[2.45vmin]"
                            >
                              <option value="volvo">
                                Which service are you looking for?
                              </option>
                              <option value="saab">Web Development</option>
                              <option value="mercedes">
                                Android Development
                              </option>
                              <option value="audi">
                                Custom Software Development
                              </option>
                            </select>
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                        </div>
                        <div className="buttonHolderContainer flex justify-center items-center">
                          <div className="buttonHolder w-[35%] bg-deepViolet text-white flex justify-center items-center">
                            <button className="p-2 text-[2.45vmin]">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {screen.width >= 1700 && screen.width <= 1919 && (
            <div className="holder w-[100vw] flex bg-backgroundMain">
              <div className="textHolder mt-[-4vmin]  w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] flex justify-center items-center">
                <div className="headerText w-[94%] 2xl:w-[85%] flex flex-col gap-y-[4.95vmin]">
                  <div className="mainBrandHolderText ">
                    <div className="brandIconHolder flex gap-x-4">
                      <div className="verticalLine h-[11vmin] w-[1.25vmin] bg-deepViolet rounded-lg"></div>
                      <div className="brandText text-[6.55vmin]  font-extrabold font-poppins">
                        Codemap <span className="text-mainText">Services</span>
                      </div>
                    </div>

                    <div className="sloganHolder">
                      <p className="slogan mt-2 text-mainText text-[2.45vmin] font-medium font-poppins">
                        ( where ideas transform into innovation )
                      </p>
                    </div>
                  </div>

                  <div className="headerExplain">
                    <p className="text-[2.25vmin] leading-[5.35vmin] font-poppins">
                      We at codemap aim to deliver quality technical solutions
                      to our clients at the most affordable cost. Give us a
                      chance to make your digital dream come true!!!
                    </p>
                  </div>

                  <div className="buttonHolder">
                    <button className="bg-deepViolet text-white p-2 pl-8 pr-8">
                      <p className="text-[2.45vmin]">Contact Us</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="formHolder w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] ">
                <div className="formHolder flex h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] justify-center items-center">
                  <div className="w-[80%]  bg-white rounded-lg mt-[-7.75vmin]">
                    <div className="formHolder flex flex-col gap-y-12 p-6 ">
                      <div className="textHolder">
                        <p className="font-extrabold text-[4vmin]">
                          Contact us
                        </p>
                        <p className="text-deepViolet mt-1 text-[2.45vmin]">
                          ( Get Flat 20% discount on your first order )
                        </p>
                      </div>
                      <div className="inputHolder flex flex-col gap-y-16">
                        <div>
                          <input
                            type="text"
                            className="text text-grey p-1 text-[2.45vmin]"
                            placeholder="Enter your name..."
                          />
                          <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                        </div>
                        <div>
                          <input
                            type="text"
                            className="text text-grey p-1 text-[2.45vmin]"
                            placeholder="Enter your email..."
                          />
                          <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                        </div>
                        <div>
                          <input
                            type="text"
                            className="text text-grey p-1 text-[2.45vmin]"
                            placeholder="Enter your phone..."
                          />
                          <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                        </div>

                        <div className="w-[100%]">
                          <select
                            name="cars"
                            id="cars"
                            className="w-[100%] text-[2.45vmin]"
                          >
                            <option value="volvo">
                              Which service are you looking for?
                            </option>
                            <option value="saab">Web Development</option>
                            <option value="mercedes">
                              Android Development
                            </option>
                            <option value="audi">
                              Custom Software Development
                            </option>
                          </select>
                          <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                        </div>
                      </div>
                      <div className="buttonHolderContainer flex justify-center items-center">
                        <div className="buttonHolder w-[35%] bg-deepViolet text-white flex justify-center items-center">
                          <button className="p-2 text-[2.45vmin]">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {screen.width >= 1920 && screen.width <= 2047 && (
            <div className="holder"></div>
          )}
          {screen.width >= 2048 && (
            <>
              <div className="holder w-[100vw] flex bg-backgroundMain">
                <div className="textHolder ml-4 flex justify-center items-center w-[50vw]  mt-[-2.75vmin] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)]">
                  <div className="headerText w-[89%] flex flex-col gap-y-[6vmin]">
                    <div className="mainBrandHolderText ">
                      <div className="brandIconHolder flex gap-x-5">
                        <div className="verticalLine h-[11vmin] w-[1.25vmin] bg-deepViolet rounded-lg"></div>
                        <div className="brandText text-[7.65vmin] font-extrabold font-poppins">
                          Codemap{" "}
                          <span className="text-mainText">Services</span>
                        </div>
                      </div>

                      <div className="sloganHolder">
                        <p className="slogan mt-3 text-mainText text-[2.45vmin] font-medium font-poppins">
                          ( where ideas transform into innovation )
                        </p>
                      </div>
                    </div>

                    <div className="headerExplain">
                      <p className="text-[2.35vmin] 2xl:text-[2.65vmin] leading-[5.35vmin]">
                        We at codemap aim to deliver quality technical solutions
                        to our clients at the most affordable cost. Give us a
                        chance to make your digital dream come true!!!
                      </p>
                    </div>

                    <div className="buttonHolder">
                      <button className="bg-deepViolet text-white p-3 pl-[5vmin] pr-[5vmin]">
                        <p className="text-[2.65vmin]">Contact Us</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="formHolder w-[50vw] h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] ">
                  <div className="formHolder flex h-[calc(100vh-27vmin)] md:h-[calc(100vh-10vmin)] justify-center items-center">
                    <div className="w-[78%]  bg-white rounded-lg mt-[-4.75vmin]">
                      <div className="formHolder flex flex-col gap-y-10 p-10 pb-[6vmin] ">
                        <div className="textHolder">
                          <p className="font-extrabold text-[4vmin]">
                            Contact us
                          </p>
                          <p className="text-deepViolet mt-1 text-[2.45vmin]">
                            ( Get Flat 20% discount on your first order )
                          </p>
                        </div>
                        <div className="inputHolder flex flex-col gap-y-[6vmin]">
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.45vmin]"
                              placeholder="Enter your name..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.45vmin]"
                              placeholder="Enter your email..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="text text-grey p-1 text-[2.45vmin]"
                              placeholder="Enter your phone..."
                            />
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>

                          <div className="w-[100%]">
                            <select
                              name="cars"
                              id="cars"
                              className="w-[100%] text-[2.45vmin]"
                            >
                              <option value="volvo">
                                Which service are you looking for?
                              </option>
                              <option value="saab">Web Development</option>
                              <option value="mercedes">
                                Android Development
                              </option>
                              <option value="audi">
                                Custom Software Development
                              </option>
                            </select>
                            <div className="underline border-headerUnderline border-[0.15px] mt-1"></div>
                          </div>
                        </div>
                        <div className="buttonHolderContainer flex justify-center items-center mt-3">
                          <div className="buttonHolder w-[35%] bg-deepViolet text-white flex justify-center items-center">
                            <button className="p-2 text-[2.45vmin]">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
