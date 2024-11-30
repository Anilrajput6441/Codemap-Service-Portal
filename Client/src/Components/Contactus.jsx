import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputValidator } from "../Utils/InputValidator.js";
import { usePostDataMain } from "../Utils/usePostDataMain";

const Contactus = () => {
  toast.configure();

  const [data, setData] = useState([]);
  const [tigger, setTigger] = useState(false);
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

  let status = usePostDataMain(tigger, "queries", data, "queries");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you should send the form data to your server-side API
    // For the purpose of this example, we'll simulate the form submission using console.log
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message1").value;

    // Validate the form data before submission
    const verifyData = {
      email: email,
      phone: phone,
    };

    const verifyResult = InputValidator(verifyData);

    if (message != "") {
      if (name != "") {
        if (verifyResult) {
          // alert(verifyResult);
          const dataBody = {
            name: name,
            email: email,
            phone: phone,
            message: message,
          };

          setData(dataBody);
          setTigger(true);

          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
        } else {
          toast.error("Invalid email or phone no. ... ", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        toast.error("Please enter your name... ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error("Please enter your message ... ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    setTigger(false);
    status = null;
  }, [status]);

  return (
    <>
      {screen.width < 700 && (
        <>
          <div className="w-[100vw] flex flex-col pt-[9vmin] pb-[18vmin] lg:pb-[1.35vmin] overflow-x-hidden">
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
                    id="name"
                    placeholder="Enter your name..."
                  />
                  <input
                    type="email"
                    id="email"
                    className="p-3 w-[92%] rounded-md"
                    placeholder="Enter your email..."
                  />
                  <input
                    type="phone"
                    className="p-3 w-[92%] rounded-md"
                    id="phone"
                    placeholder="Enter your phone..."
                  />
                  <textarea
                    className="w-[92%] p-3 rounded-md"
                    id="message1"
                    placeholder="Enter your message..."
                  />
                  <div className="buttonHolder flex justify-center items-center">
                    <button
                      className="submitButton bg-backgroundMain   w-[35%] p-3  font-medium text-[4vmin] mt-5 font-poppins"
                      onClick={handleSubmit}
                    >
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
        <>
          <div className="w-[100vw] flex flex-col pt-[9vmin] pb-[18vmin] lg:pb-[2.5vmin] overflow-x-hidden">
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
                  <p className="text-lightGrey font-medium text-[5vmin] md:text-[3.45vmin] font-poppins">
                    Please Fill the details...
                  </p>
                  <input
                    type="text"
                    className="p-3 w-[95%] rounded-md"
                    id="name"
                    placeholder="Enter your name..."
                  />
                  <input
                    type="email"
                    id="email"
                    className="p-3 w-[95%] rounded-md"
                    placeholder="Enter your email..."
                  />
                  <input
                    type="phone"
                    className="p-3 w-[95%] rounded-md"
                    id="phone"
                    placeholder="Enter your phone..."
                  />
                  <textarea
                    className="w-[95%] p-3 rounded-md"
                    id="message1"
                    placeholder="Enter your message..."
                  />
                  <div className="buttonHolder flex justify-center items-center">
                    <button
                      className="submitButton bg-backgroundMain   w-[35%] p-3  font-medium text-[4vmin] mt-5 font-poppins"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {screen.width >= 1000 && (
        <>
          <div className="w-[100vw] p-5 pt-1 pb-[8vmin] 2xl:pb-[3.25vmin] flex pl-1">
            <div className="leftHolder w-[55vw]  flex flex-col  ml-[-4.75vmin]">
              <div className="textHolder flex flex-col mt-[13vmin] flex justify-center items-center">
                <p className="title text-deepViolet text-[2.35vmin]  font-bold">
                  Contact Us
                </p>
                <p className="purpose text-[8.75vmin] font-extrabold mt-[-0.75vmin]">
                  Get In Touch
                </p>
                <p className="sloganBodyLarge mt-5 w-[85%] ml-10 text-[2.15vmin] leading-[5vmin]">
                  We’d love to hear from you! Whether you have a question,
                  suggestion, or need support, our team is here to help. Please
                  feel free to reach out to us through any of the following
                  channels
                </p>
              </div>

              {apiResponseMock.map((val, index) => (
                <div className="iconsHolder flex flex-col gap-y-12 mt-16 ml-[12vmin]">
                  <div className="infoHolder flex gap-x-5">
                    <div className="imageHolder">
                      <div className="squreHolder w-[8vmin] h-[8vmin] p-3 bg-deepViolet rounded-[0.45vmin]">
                        <img
                          src={val.image}
                          alt="contactIcon"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="textHolder w-[38vmin]">
                      <div className="title font-extrabold font-poppins ">
                        <p className="text-[2.15vmin]">{val.title}</p>
                      </div>
                      <div className="information text-[2vmin] text-textGrey mt-1">
                        {val.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rightHolder w-[45vw]  h-[100vh] flex mt-[4vmin] items-center">
              <div className="contactHolder w-[96.75%] mt-[12vmin]  bg-backgroundMain  rounded-[1vmin] ml-[1.35vmin]">
                <div className="contactForm flex flex-col ml-8 gap-y-10 mt-[5vmin] pb-[6vmin]">
                  <p className="text-mainText font-medium text-[2.75vmin] font-poppins">
                    Please Fill the details...
                  </p>
                  <input
                    type="text"
                    className="p-3 w-[90%] text-[2.35vmin]"
                    id="name"
                    placeholder="Enter your name..."
                  />
                  <input
                    type="email"
                    className="p-3 w-[90%] text-[2.35vmin]"
                    id="email"
                    placeholder="Enter your email..."
                  />
                  <input
                    type="phone"
                    className="p-3 w-[90%] text-[2.35vmin]"
                    id="phone"
                    placeholder="Enter your phone..."
                  />
                  <textarea
                    className="w-[90%] p-5 pb-10 text-[2.35vmin]"
                    id="message1"
                    placeholder="Enter your message..."
                  />
                  <div className="buttonHolder flex justify-center items-center">
                    <button
                      className="submitButton bg-deepViolet text-white  w-[35%] p-3  font-medium text-[2.25vmin] mt-5 font-poppins"
                      onClick={handleSubmit}
                    >
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
