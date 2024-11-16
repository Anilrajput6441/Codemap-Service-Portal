import { useState } from "react";
import { useAdminAuth } from "./CMS/Utils/useAdminAuth";
import Footer from "./Footer";
import Header from "./Header";
import RevolvingHeader from "./RevolvingHeader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = (props) => {
  toast.configure();

  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [clientId, setClientId] = useState(null);

  const LoginUser = async (e) => {
    e.preventDefault();

    if (props.category != "client") {
      const loginStatusObj = await useAdminAuth({ email, password }, "login");
      console.log(loginStatusObj);
      if (loginStatusObj.status === 201) {
        toast("login Successful... ", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/cmsDashboard");
      } else {
        toast.error("login Failed... ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      const loginStatusObj = useAdminAuth({ email, clientId }, "login");
      if (loginStatusObj.status === 201) {
        alert("User Logged in");
      } else {
        alert("Invalid credentials");
      }
    }
  };
  return (
    <>
      {screen.width > 1000 && <RevolvingHeader />}
      <div className="bg-backgroundMain h-[100vh]">
        <Header />
        <div className="mainBody w-[100vw]  lg:h-[calc(100vh-12vmin)] bg-backgroundMain flex justify-center lg:items-center">
          <div className="loginForm  w-[93vw] md:w-[67vmin] p-5 pb-5  lg:p-3 lg:pb-5 flex flex-col gap-y-6 bg-white mt-8 md:p-7 md:mt-[15vmin]  lg:mt-[-6.45vmin]">
            <div className="logoArea">
              <div className="logoIcon ml-4 flex justify-center  items-center gap-x-4">
                <img
                  src={require("../../assets/codemapIcon.png")}
                  alt="icon"
                  height={90}
                  width={90}
                />
                <div className="logoText text-mainText font-bold text-[6vmin] lg:text-[3.75vmin]">
                  {props.category} Login
                </div>
              </div>
            </div>

            <div className="lineHolder">
              <div className="line md:w-[58vmin] border-gray border-t-[1px] ml-2 lg:ml-8 h-4 p"></div>
            </div>

            <div className="textHolder mt-2">
              {(props.category === "Client" && (
                <p className="text-[3.15vmin] md:text-[2.1vmin] 2xl:text-[1.98vmin] text-deepViolet mt-[-4vmin] text-center ">
                  {" "}
                  ( Track your project timeline and payments in our platform )
                </p>
              )) || (
                <p className="text-[3.15vmin] md:text-[2.1vmin] 2xl:text-[1.98vmin text-deepViolet mt-[-4vmin] text-center ">
                  {" "}
                  ( Track and manage your clients and partners in the CMS )
                </p>
              )}
            </div>
            <form className="flex flex-col gap-y-8  mt-6 2xl:p-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-lightGrey p-3 2xl:text-[2.15vmin] mt-[-2.45vmin]"
                onChange={(e) => setEmail(e.target.value)}
              />

              {(props.category === "Client" && (
                <input
                  type="password"
                  placeholder="Enter your client-id"
                  className="bg-lightGrey p-3  2xl:text-[2.1vmin]"
                  onChange={(e) => setClientId(e.target.value)}
                />
              )) || (
                <input
                  type="password"
                  placeholder="Enter your password..."
                  className="bg-lightGrey p-3  2xl:text-[2.1vmin]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}
              <div className="btnHolder flex justify-center items-center mt-[-1.5vmin]">
                <button
                  type="submit"
                  className="mt-5 bg-mainText text-white rounded-md p-2 w-24 text-[2.45vmin] lg:text-[2min]"
                  onClick={LoginUser}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" border-headerUnderline border-t-[2px] w-[95vw] "></div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
