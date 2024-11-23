const Contactus = () => {
  const apiResponseMock = [
    {
      image: require("../../assets/locationContact.png"),
      title: "Location:",
      description:
        "1st Floor,IIMT LBF Incubation Center,Greater Noida,UP,201310",
    },
    {
      image: require("../../assets/emailContact.png"),
      title: "Email:",
      description: "codemap2024@gmail.com",
    },
    {
      image: require("../../assets/phoneContact.png"),
      title: "Phone:",
      description: "+91 7585824862",
    },
  ];
  return (
    <>
      {screen.width < 700 && (
        <>
          <div className="w-[100vw] flex flex-col pt-[9vmin] pb-[18vmin] overflow-x-hidden">
            <div className="mainHolder w-[100vw]  flex flex-col justify-center  items-center">
              <div className="textHolder w-[100vw] flex flex-col justify-center items-center">
                <p className="text-[9vmin] font-extrabold">
                  Contact <span className="text-deepViolet">Us</span>
                </p>
                <p className="text-textGrey text-center mt-3">
                  We have a mission to provide top quality and affordable
                  services to our clients
                </p>
              </div>
              <div className="contactHolder w-[95%] mt-[10vmin]  bg-deepViolet  rounded-[1vmin]">
                <div className="contactForm flex flex-col ml-5  gap-y-10 mt-[5vmin] pb-[4vmin]">
                  <p className="text-lightGrey font-medium text-[5vmin] font-poppins">
                    Please Fill the details...
                  </p>
                  <input
                    type="text"
                    className="p-3 w-[92%] rounded-md"
                    placeholder="Enter your name..."
                  />
                  <input
                    type="email"
                    className="p-3 w-[92%] rounded-md"
                    placeholder="Enter your email..."
                  />
                  <input
                    type="phone"
                    className="p-3 w-[92%] rounded-md"
                    placeholder="Enter your phone..."
                  />
                  <textarea
                    className="w-[92%] p-3 rounded-md"
                    placeholder="Enter your message..."
                  />
                  <div className="buttonHolder flex justify-center items-center">
                    <button className="submitButton bg-backgroundMain   w-[35%] p-3  font-medium text-[4vmin] mt-5 font-poppins">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {screen.width >= 700 && screen.width <= 1000 && (
        <div className="w-[100vw] p-5 pb-10 pt-8 "></div>
      )}

      {screen.width >= 1000 && (
        <>
          <div className="w-[100vw] p-5 pb-10 pt-8 flex pl-4">
            <div className="leftHolder w-[55vw]  flex flex-col  ">
              <div className="textHolder flex flex-col mt-[10vmin] flex justify-center items-center">
                <p className="title text-deepViolet text-[2.35vmin]  font-bold">
                  Contact Us
                </p>
                <p className="purpose text-[8.75vmin] font-extrabold mt-[-0.75vmin]">
                  Get In Touch
                </p>
                <p className="sloganBodyLarge mt-5 w-[89%] ml-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ea repudiandae, neque iusto perspiciatis doloribus a
                  magni ratione sunt! Fugit doloribus numquam saepe porro
                  perspiciatis animi eos libero, hic id. Lorem ipsum dolor sit
                </p>
              </div>

              {apiResponseMock.map((val, index) => (
                <div className="iconsHolder flex flex-col gap-y-8 mt-16 ml-[12vmin]">
                  <div className="infoHolder flex gap-x-5">
                    <div className="imageHolder">
                      <div className="squreHolder w-[9.45vmin] h-[9.45vmin] p-4 bg-deepViolet rounded-[0.45vmin]">
                        <img
                          src={val.image}
                          alt="contactIcon"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="textHolder w-[38vmin]">
                      <div className="title font-extrabold font-poppins">
                        {val.title}
                      </div>
                      <div className="information text-[2vmin] text-textGrey mt-1">
                        {val.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rightHolder w-[45vw]  h-[100vh] flex items-center">
              <div className="contactHolder w-[95%] mt-[10vmin]  bg-backgroundMain  rounded-[1vmin]">
                <div className="contactForm flex flex-col ml-8 gap-y-10 mt-[5vmin] pb-[4vmin]">
                  <p className="text-mainText font-medium text-[2.75vmin] font-poppins">
                    Please Fill the details...
                  </p>
                  <input
                    type="text"
                    className="p-3 w-[90%]"
                    placeholder="Enter your name..."
                  />
                  <input
                    type="email"
                    className="p-3 w-[90%]"
                    placeholder="Enter your email..."
                  />
                  <input
                    type="phone"
                    className="p-3 w-[90%]"
                    placeholder="Enter your phone..."
                  />
                  <textarea
                    className="w-[90%] p-5 pb-10"
                    placeholder="Enter your message..."
                  />
                  <div className="buttonHolder flex justify-center items-center">
                    <button className="submitButton bg-deepViolet text-white  w-[35%] p-3  font-medium text-[2.25vmin] mt-5 font-poppins">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contactus;
