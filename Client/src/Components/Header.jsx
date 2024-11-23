import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = (props) => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="headerFrame bg-backgroundMain pt-6 pb-2 overflow-x-hidden overflow-y-hidden">
        <div className="Header h-[15vmin] md:h-[10vmin] 2xl:h-[8vmin]  bg-backgroundMain pt-2 pb-3 flex p-1">
          <div className="brandLogo flex mt-[-0.65vmin]">
            <div className="ml-1 logo-area w-[27vmin] md:w-[18vmin] h-[25vmin] md:h-[10vmin] 2xl:h-[6vmin]">
              <Link to="/">
                <img
                  src={require("../../assets/CodemapIconHorizontal.png")}
                  className="max-w-full max-h-full object-contain"
                />
              </Link>
            </div>
          </div>
          {screen.width > 1000 && (
            <>
              <div className="iconsArea flex gap-x-9  h-[10vmin] w-[65vw]  ml-[14vmin] justify-center mt-[0.5vmin] text-[2.45vmin]">
                <p
                  id="projects"
                  className="underline-offset-[1.35vmin] "
                  onMouseOver={() => {
                    document.getElementById("projects").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("projects").style.textDecoration =
                      "";
                  }}
                >
                  <Link to="/team">Team</Link>
                </p>

                <p
                  id="team"
                  className="underline-offset-[1.35vmin] "
                  onMouseOver={() => {
                    document.getElementById("team").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("team").style.textDecoration = "";
                  }}
                >
                  <Link to="/projects">Projects</Link>
                </p>

                <p
                  id="Career"
                  className="underline-offset-[1.35vmin] "
                  onMouseOver={() => {
                    document.getElementById("Career").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Career").style.textDecoration = "";
                  }}
                >
                  <Link to="/career">Career</Link>
                </p>

                <p
                  id="Blogs"
                  className="underline-offset-[1.35vmin] "
                  onMouseOver={() => {
                    document.getElementById("Blogs").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Blogs").style.textDecoration = "";
                  }}
                >
                  <Link to="/blogsarea">Blogs</Link>
                </p>
                <p
                  id="Partner"
                  className="underline-offset-[1.35vmin] "
                  onMouseOver={() => {
                    document.getElementById("Partner").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Partner").style.textDecoration =
                      "";
                  }}
                >
                  <Link to="/partner">Partner</Link>
                </p>
              </div>

              {props.category != "dashboard" && (
                <div className="buttonArea ml-[8vmin] mt-[-1.15vmin]">
                  <button
                    onClick={() => navigate("/clientlogin")}
                    className="p-3  bg-mainText text-white rounded-[5px] pl-6 pr-7 text-[2.45vmin] mt-[-0.1vmin]"
                  >
                    Login
                  </button>
                </div>
              )}

              {props.category === "dashboard" && (
                <div className="buttonArea ml-[8vmin] mt-[-1.15vmin]">
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/cms");
                    }}
                    className="p-3  bg-mainText text-white rounded-[5px] pl-6 pr-7 text-[2.45vmin] mt-[-0.1vmin]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
          {screen.width < 1000 && (
            <div
              className="ml-[53vmin] md:ml-[72vmin] mt-1"
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              <img src={require("../../assets/hamburger.png")} />
            </div>
          )}
        </div>
        <div className="ml-4 underline h-[2px] w-[92vw] 2xl:w-[96vw] border-headerUnderline border-t-[2px]"></div>
      </div>

      <div className="navIconHolder bg-backgroundMain pb-3 ">
        {screen.width < 1000 && showNav && (
          <>
            <div className="navIconsMobile gap-y-3 p-2 pl-3 flex flex-col">
              <p
                id="technologies1"
                className="underline-offset-[1.35vmin] "
                onClick={() => {
                  setShowNav(!showNav);
                }}
                onMouseOver={() => {
                  document.getElementById(
                    "technologies1"
                  ).style.textDecoration = "underline";
                }}
                onMouseOut={() => {
                  document.getElementById(
                    "technologies1"
                  ).style.textDecoration = "";
                }}
              >
                <Link to="/team">Team</Link>
              </p>

              <p
                id="projects1"
                className="underline-offset-[1.35vmin] "
                onClick={() => {
                  setShowNav(!showNav);
                }}
                onMouseOver={() => {
                  document.getElementById("projects1").style.textDecoration =
                    "underline";
                }}
                onMouseOut={() => {
                  document.getElementById("projects1").style.textDecoration =
                    "";
                }}
              >
                <Link to="/projects">Projects</Link>
              </p>
              <p
                id="career"
                className="underline-offset-[1.35vmin] "
                onClick={() => {
                  setShowNav(!showNav);
                }}
                onMouseOver={() => {
                  document.getElementById("career").style.textDecoration =
                    "underline";
                }}
                onMouseOut={() => {
                  document.getElementById("career").style.textDecoration = "";
                }}
              >
                <Link to="/career">Career</Link>
              </p>
              <p
                id="team1"
                className="underline-offset-[1.35vmin] "
                onClick={() => {
                  setShowNav(!showNav);
                }}
                onMouseOver={() => {
                  document.getElementById("team1").style.textDecoration =
                    "underline";
                }}
                onMouseOut={() => {
                  document.getElementById("team1").style.textDecoration = "";
                }}
              >
                <Link to="/blogs">Blogs</Link>
              </p>

              <p
                id="Services1"
                className="underline-offset-[1.35vmin] "
                onClick={() => {
                  setShowNav(!showNav);
                }}
                onMouseOver={() => {
                  document.getElementById("Services1").style.textDecoration =
                    "underline";
                }}
                onMouseOut={() => {
                  document.getElementById("Services1").style.textDecoration =
                    "";
                }}
              >
                <Link to="/partner">Partner</Link>
              </p>

              <div className="buttonArea">
                <button
                  onClick={() => navigate("/clientlogin")}
                  className="p-3 ml-[-0.35vmin] bg-mainText text-white rounded-[5px] pl-8 pr-8 text-[3.45vmin] md:text-[2.15vmin]"
                >
                  Login Now
                </button>
              </div>
              <div className="ml-[0.15px] underline h-[2px] w-[94vw] border-headerUnderline border-t-[2px]"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
