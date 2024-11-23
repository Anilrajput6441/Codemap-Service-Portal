import "./input.css";
const Footer = () => {
  return (
    <>
      <div className="footerHolder pb-4 pt-4 bg-bgColor flex flex-col justify-center items-center bg-backgroundMain overflow-x-hidden ">
        <div className="flex flex-col pb-4 pt-4 justify-center items-center row1  w-[100vw]">
          <div className="logoHolder flex  gap-x-4  justify-center items-center">
            <div className="logoPic   w-[28vmin] md:w-[16vmin]  lg:w-[17vmin]">
              <img
                src={require("../../assets/codemapIcon.png")}
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="logoText">
              <p className="text-[9vmin] font-bold ml-5">
                Code<span className="text-mainText">Map</span>
              </p>
            </div>
          </div>

          <div className="emailBoxHolder flex h-[10vmin] md:h-[7vmin] mt-[8vmin] lg:mt-6 2xl:mt-[4vmin]">
            <input
              type="text"
              className="w-[80vw] lg:w-[48vw] p-2 md:p-3 text-[4.5vmin] md:text-[2.45vmin]"
              placeholder="Enter your mail..."
            ></input>

            <div className="imageHolder h-[10vmin] md:h-[6.75vmin] bg-lightBlue p-2 md:p-3">
              <img
                src={require("../../assets/whitearrow.png")}
                className="max-w-full max-h-full object-contain"
                onClick={() => {
                  alert("Thanks for subscribing to our news letters!");
                }}
              ></img>
            </div>
          </div>
        </div>
        <div className="row2  pb-5 pt-7 flex justify-evenly items-center flex-wrap   w-[100vw] 2xl:mt-[3vmin]">
          <div className="col1 w-[90vw]  pb-4 pt-4 lg:w-[45vmin]   flex flex-col justify-center items-center">
            <div className="iconHolder h-[20vmin] w-[20vmin] md:h-[17vmin] md:w-[17vmin] lg:w-[13vmin] lg:h-[13vmin]  2xl:w-[13vmin] 2xl:h-[13vmin]">
              <img
                src={require("../../assets/location.png")}
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="w-[78vw] mt-3">
              <p className="text-center md:text-[2.35vmin]">
                IIMT LBF Incubation Center, 1st Floor,<br></br>Greater Noida,UP
              </p>
            </div>
          </div>
          <div className="col2 w-[90vw]  pb-4 pt-4 lg:w-[40vmin]   flex flex-col justify-center items-center">
            <div className="iconHolder  h-[20vmin] w-[20vmin] md:h-[17vmin] md:w-[17vmin] lg:h-[13vmin] lg:w-[13vmin] 2xl:h-[13vmin] 2xl:w-[13vmin]">
              <img
                src={require("../../assets/email.png")}
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="w-[78vw] mt-3">
              <p className="text-center md:text-[2.45vmin]">
                Email: codemap2024@gmail.com
              </p>
            </div>
          </div>
          <div className="col3 w-[90vw] mt-4  pb-4 pt-4 lg:w-[45vmin]  flex flex-col justify-center items-center">
            <div className="iconHolder mt-2  h-[20vmin] w-[20vmin] md:h-[17vmin] md:w-[17vmin] lg:h-[13vmin] lg:w-[13vmin] 2xl:h-[12vmin] 2xl:w-[12vmin]">
              <img
                src={require("../../assets/phone.png")}
                className="max-w-full max-h-full object-contain "
              ></img>
            </div>
            <div className="w-[78vw] ">
              <p className="text-center md:text-[2.35vmin] mt-3 ml-3">
                Call-Us At: +91 8090570646, 9354072118 , <br></br>
                7585824862
              </p>
            </div>
          </div>
        </div>
        <div className="row3 flex justify-center items-center h-[10vh]  lg:h-[10vh]  w-[88vw] p-2 text-[4.15vmin] md:text-[2.45vmin]">
          <p>Copyright &copy; 2024 Codemap partners.All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
