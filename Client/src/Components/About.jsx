import Datacomponent from "./Datacomponent";

const About = () => {
  return (
    <>
      <div className="aboutSection ml-2 mt-10 pb-5 pt-4 overflow-x-hidden  ">
        {screen.width < 760 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold  text-[10vmin] md:text-[10vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap justify-center items-center gap-x-9 mt-2">
              <div className="imageHolder w-[85vw] h-[55vmin]">
                <img
                  src={require("../../assets/teamicon.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[99vw] mt-3 ml-[-1.45vmin]">
                <div className="mainTextHolder flex flex-col w-[100vmin]">
                  <div className="who border-black ">
                    <p className="font-bold text-[5vmin] ml-4">Who we are?</p>
                    <ul className="mt-2 mainText flex flex-col gap-y-4 text-[3.75vmin] ml-3">
                      <li>
                        We are a software development firm aimed to <br></br>{" "}
                        develop cost effective solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into <br></br>{" "}
                        Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision mt-4">
                    <p className="font-bold text-[4.75vmin] ml-4">
                      Our Vision and mission
                    </p>

                    <ul className="mt-2 mainText flex flex-col gap-y-4 text-[3.75vmin] ml-3">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable{" "}
                        <br></br>cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us{" "}
                        <br></br> to make strong long term relationship with our{" "}
                        <br></br> clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin] mt-2 ml-2 ">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width < 900 && screen.width >= 760 && (
          <>
            <div className="aboutHeader mt-2">
              <p className="font-extrabold  text-[10vmin] md:text-[10vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap justify-center items-center gap-x-9 mt-2 ml-1">
              <div className="imageHolder w-[95vw] h-[50vmin] flex justify-center items-center">
                <img
                  src={require("../../assets/teamicon.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[99vw] mt-6">
                <div className="mainTextHolder flex flex-col w-[100vmin]">
                  <div className="who border-black ">
                    <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText flex flex-col gap-y-4 text-[2.65vmin]">
                      <li>
                        We are a software development firm aimed to develop cost
                        effective solutions <br></br> for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development industry to <br></br>meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision mt-4">
                    <p className="font-bold text-[4.75vmin]">
                      Our Vision and mission
                    </p>

                    <ul className="mt-2 mainText flex flex-col gap-y-6 text-[2.65vmin]">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make strong long term <br></br>relationship with our
                        clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin] mt-4 ml-[-0.15vmin]">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width > 900 && screen.width <= 1280 && screen.height < 800 && (
          <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-12 mt-6  justify-center items-center">
              <div className="imageHolder w-[66vmin] h-[110vmin]">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder text-[2.95vmin] ml-[-1vmin] mt-[2vmin]">
                <div className="mainTextHolder flex flex-col w-[105vmin]">
                  <div className="who border-black ">
                    <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText text-[3vmin] leading-[5.65vmin]">
                      <li>
                        We are a software development firm aimed to develop cost
                        effective <br></br>solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development <br></br>industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision  h-[32vmin] mt-7">
                    <p className="font-bold text-[4.75vmin]">
                      Our Vision and mission
                    </p>

                    <ul className="mt-2 mainText flex flex-col gap-y-2  text-[3vmin] leading-[5.65vmin]">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make strong <br></br> long term relationship with our
                        clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin] mt-[4vmin]">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width > 900 && screen.width <= 1280 && screen.height >= 800 && (
          <>
            <div className="aboutHeader mt-[-1vmin] ">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap justify-center items-center gap-x-9 mt-6 ml-[1vmin] ">
              <div className="imageHolder w-[55vmin] h-[85vmin]">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[91.75vmin] text-[2.95vmin] ">
                <div className="mainTextHolder flex flex-col gap-y-3">
                  <div className="who border-black ">
                    <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText leading-[5.25vmin]">
                      <li>
                        We are a software development firm aimed to develop cost
                        effective <br></br>solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development <br></br>industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision  h-[32vmin] leading-[5.6vmin]">
                    <p className="font-bold text-[4.75vmin]">
                      Our Vision and mission
                    </p>

                    <ul className="mt-2 mainText flex flex-col gap-y-2 leading-[5.25vmin]">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make strong long term relationship with our clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin]">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width > 1280 && screen.width < 1440 && (
          <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder w-[100vw]  flex flex-wrap justify-center items-center gap-x-4">
              <div className="imageHolder w-[70vmin] h-[100vmin] ">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[96vmin] text-[2.95vmin] pr-3 leading-[5.25vmin]">
                <div className="mainTextHolder flex flex-col ">
                  <div className="who border-black ">
                    <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className=" mainText ">
                      <li>
                        We are a software development firm aimed to develop cost
                        effective solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision leading-[5.25vmin]">
                    <p className="font-bold text-[4.75vmin] mt-5">
                      Our Vision and mission
                    </p>

                    <ul className="mainText flex flex-col gap-y-2  ">
                      <li className="mt-[2.25vmin]">
                        Delivering top notch solutions to our clients
                      </li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make strong long term relationship with our clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin] mt-[4vmin]">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width >= 1400 &&
          screen.height <= 810 &&
          screen.width <= 1500 && (
            <>
              <div className="aboutHeader mt-[-1vmin]">
                <p className="font-extrabold text-[8vmin]">
                  About-
                  <span className="text-mainText">Us</span>
                </p>
              </div>
              <div className="contentHolder flex flex-wrap justify-center items-center gap-x-9 mt-6 ml-7 ">
                <div className="imageHolder w-[60vmin] h-[100vmin]">
                  <img
                    src={require("../../assets/aboutus.jpg")}
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>

                <div className="textHolder w-[95vmin] text-[2.95vmin]">
                  <div className="mainTextHolder flex flex-col w-[110vmin]">
                    <div className="who border-black h-[35vmin]">
                      <p className="font-bold text-[5vmin]">Who we are?</p>
                      <ul className="mt-2 mainText">
                        <li>
                          We are a software development firm aimed to develop
                          cost effective solutions for our clients
                        </li>
                        <li>
                          Our team has a rich experience in the software
                          development industry to meet your needs.
                        </li>
                        <li>
                          We ham a motto Where Ideas Transform Into Innovation.
                        </li>
                      </ul>
                    </div>
                    <div className="vision  h-[32vmin]">
                      <p className="font-bold text-[4.75vmin]">
                        Our Vision and mission
                      </p>

                      <ul className="mt-2 mainText flex flex-col gap-y-2">
                        <li>Delivering top notch solutions to our clients</li>
                        <li>
                          Providing top quality services at the most affordable
                          cost
                        </li>
                        <li>
                          Quality customer service is our motto which help us to
                          make strong long term relationship with our clients{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="dataHolder h-[25vmin]">
                      <Datacomponent />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        {screen.width >= 1400 &&
          screen.height > 810 &&
          screen.width <= 1500 && (
            <>
              <div className="aboutHeader mt-[-1vmin] ml-5 ">
                <p className="font-extrabold text-[8vmin]">
                  About-
                  <span className="text-mainText">Us</span>
                </p>
              </div>
              <div className="contentHolder flex flex-wrap gap-x-9 mt-6 justify-center items-center">
                <div className="imageHolder w-[70vmin] h-[95vmin]">
                  <img
                    src={require("../../assets/aboutus.jpg")}
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>

                <div className="textHolder w-[90vmin] text-[2.8vmin] ">
                  <div className="mainTextHolder flex flex-col w-[90vmin]">
                    <div className="who border-black h-[35vmin] ml-[-3.75vmin]">
                      <p className="font-bold text-[5vmin]">Who we are?</p>
                      <ul className="mt-2 mainText leading-[5.56vmin]">
                        <li>
                          We are a software development firm aimed to develop
                          cost effective solutions for our clients
                        </li>
                        <li>
                          Our team has a rich experience in the software
                          development industry to meet your needs.
                        </li>
                        <li>
                          We ham a motto Where Ideas Transform Into Innovation.
                        </li>
                      </ul>
                    </div>
                    <div className="vision  h-[32vmin] ml-[-3.75vmin] mt-[2vmin]">
                      <p className="font-bold text-[4.75vmin]">
                        Our Vision and mission
                      </p>

                      <ul className="mt-6 mainText flex flex-col gap-y-2 leading-[5.56vmin]">
                        <li>Delivering top notch solutions to our clients</li>
                        <li>
                          Providing top quality services at the most affordable
                          cost
                        </li>
                        <li>
                          Quality customer service is our motto which help us to
                          make strong long term relationship with our clients{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="dataHolder h-[25vmin] ml-[-3.75vmin] mt-[-1vmin]">
                      <Datacomponent />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        {screen.width > 1500 && screen.width <= 1700 && (
          <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin] ml-8">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 justify-center items-center">
              <div className="imageHolder w-[65vmin] h-[90vmin]">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[110vmin] text-[2.95vmin] mt-5 ml-[-2vmin]">
                <div className="mainTextHolder flex flex-col w-[110vmin]">
                  <div className="who border-black h-[35vmin]">
                    <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText leading-[5.25vmin]">
                      <li>
                        We are a software development firm aimed to develop cost
                        effective solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision  h-[32vmin]">
                    <p className="font-bold text-[4.75vmin]">
                      Our Vision and mission
                    </p>

                    <ul className="mt-3 mainText flex flex-col gap-y-2 leading-[5.25vmin]">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make strong long term relationship with our clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin] mt-[-1.45vmin] ">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width > 1700 && screen.width <= 1900 && (
          <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6  justify-center items-center">
              <div className="imageHolder w-[60vmin] h-[100vmin]">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[75vmin] text-[2.95vmin] ml-[2vmin]">
                <div className="mainTextHolder flex flex-col w-[110vmin]">
                  <div className="who border-black h-[35vmin]">
                    <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText">
                      <li>
                        We are a software development firm aimed to develop cost{" "}
                        <br></br> effective solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development <br></br>industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision  h-[32vmin]">
                    <p className="font-bold text-[4.75vmin]">
                      Our Vision and mission
                    </p>

                    <ul className="mt-2 mainText flex flex-col gap-y-2">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make <br></br> strong long term relationship with our
                        clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin]">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width > 1900 && screen.width <= 2047 && (
          <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin] ml-2">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 justify-center items-center">
              <div className="imageHolder w-[70vmin] h-[96vmin] mt-4">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[86vmin] text-[2.95vmin] ml-[2vmin] mt-4 ml-15">
                <div className="mainTextHolder flex flex-col w-[110vmin]">
                  <div className="who border-black ">
                    <p className="font-bold text-[5vmin] ">Who we are?</p>
                    <ul className="mt-2 mainText  leading-[5.65vmin]">
                      <li>
                        We are a software development firm aimed to develop cost{" "}
                        <br></br> effective solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development <br></br>industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision mt-6">
                    <p className="font-bold text-[4.75vmin]">
                      Our Vision and mission
                    </p>

                    <ul className="mt-2 mainText flex flex-col gap-y-2  leading-[5.65vmin]">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make <br></br> strong long term relationship with our
                        clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin] mt-6">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {screen.width > 2047 && (
          <>
            <div className="aboutHeader mt-[-1vmin] ml-4">
              <p className="font-extrabold text-[8vmin] ml-5">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 justify-center items-center">
              <div className="imageHolder w-[59vmin] h-[90vmin] mt-4">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[91vmin]  text-[2.95vmin] ml-[2vmin] mt-4 ml-1">
                <div className="mainTextHolder flex flex-col ">
                  <div className="who border-black">
                    <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText ml-2 leading-[5.25vmin]">
                      <li>
                        We are a software development firm aimed to develop cost{" "}
                        <br></br> effective solutions for our clients
                      </li>
                      <li>
                        Our team has a rich experience in the software
                        development <br></br>industry to meet your needs.
                      </li>
                      <li>
                        We ham a motto Where Ideas Transform Into Innovation.
                      </li>
                    </ul>
                  </div>
                  <div className="vision  h-[32vmin] mt-[4vmin]">
                    <p className="font-bold text-[4.75vmin]">
                      Our Vision and mission
                    </p>

                    <ul className="mt-2 mainText flex flex-col gap-y-2 ml-2 leading-[5.25vmin]">
                      <li>Delivering top notch solutions to our clients</li>
                      <li>
                        Providing top quality services at the most affordable
                        cost
                      </li>
                      <li>
                        Quality customer service is our motto which help us to
                        make <br></br> strong long term relationship with our
                        clients{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="dataHolder h-[25vmin]">
                    <Datacomponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default About;
