import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="headerFrame bg-backgroundMain pt-6 pb-2 ">
        <div className="Header h-[15vmin] md:h-[10vmin] 2xl:h-[8vmin]  bg-backgroundMain pt-2 pb-3 flex p-2">
          <div className="brandLogo flex mt-[-0.65vmin]">
            <div className="ml-1 logo-area w-[27vmin] md:w-[18vmin] h-[25vmin] md:h-[10vmin] 2xl:h-[6vmin]">
              <img
                src={require("../../assets/CodemapIconHorizontal.png")}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          {screen.width > 1000 && (
            <>
              <div className="iconsArea flex gap-x-7  h-[10vmin] w-[65vw]  ml-[14vmin] justify-center mt-[0.5vmin] text-[2.45vmin]">
                <p
                  id="about-us"
                  className="underline-offset-4 "
                  onMouseOver={() => {
                    document.getElementById("about-us").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("about-us").style.textDecoration =
                      "";
                  }}
                >
                  About-us
                </p>

                <p
                  id="projects"
                  className="underline-offset-4"
                  onMouseOver={() => {
                    document.getElementById("projects").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("projects").style.textDecoration =
                      "";
                  }}
                >
                  Projects
                </p>

                <p
                  id="team"
                  className="underline-offset-4"
                  onMouseOver={() => {
                    document.getElementById("team").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("team").style.textDecoration = "";
                  }}
                >
                  Team
                </p>

                <p
                  id="Services"
                  className="underline-offset-4"
                  onMouseOver={() => {
                    document.getElementById("Services").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Services").style.textDecoration =
                      "";
                  }}
                >
                  Services
                </p>

                <p
                  id="Career"
                  className="underline-offset-4 "
                  onMouseOver={() => {
                    document.getElementById("Career").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Career").style.textDecoration = "";
                  }}
                >
                  Career
                </p>

                <p
                  id="Blogs"
                  className="underline-offset-4 "
                  onMouseOver={() => {
                    document.getElementById("Blogs").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Blogs").style.textDecoration = "";
                  }}
                >
                  Blogs
                </p>
                <p
                  id="Contact"
                  className="underline-offset-4 "
                  onMouseOver={() => {
                    document.getElementById("Contact").style.textDecoration =
                      "underline";
                  }}
                  onMouseOut={() => {
                    document.getElementById("Contact").style.textDecoration =
                      "";
                  }}
                >
                  Contact
                </p>
              </div>

              <div className="buttonArea ml-[5vmin] mt-[-0.65vmin]">
                <button className="p-3 bg-mainText text-white rounded-[5px] pl-5 pr-5 text-[2.15vmin]">
                  Get Quote
                </button>
              </div>
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
        <div className="ml-4 underline h-[2px] w-[96vw] border-headerUnderline border-t-[2px]"></div>
      </div>

      <div className="navIconHolder bg-backgroundMain pb-3 ">
        {screen.width < 1000 && showNav && (
          <>
            <div className="navIconsMobile gap-y-3 p-2 pl-3 flex flex-col">
              <p
                id="about-us1"
                className="underline-offset-4 "
                onClick={() => {
                  setShowNav(!showNav);
                }}
                onMouseOver={() => {
                  document.getElementById("about-us1").style.textDecoration =
                    "underline";
                }}
                onMouseOut={() => {
                  document.getElementById("about-us1").style.textDecoration =
                    "";
                }}
              >
                About-us
              </p>
              <p
                id="technologies1"
                className="underline-offset-4 "
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
                Technologies
              </p>
              <p
                id="projects1"
                className="underline-offset-4"
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
                Projects
              </p>
              <p
                id="testinomials1"
                className="underline-offset-4"
                onClick={() => {
                  setShowNav(!showNav);
                }}
                onMouseOver={() => {
                  document.getElementById(
                    "testinomials1"
                  ).style.textDecoration = "underline";
                }}
                onMouseOut={() => {
                  document.getElementById(
                    "testinomials1"
                  ).style.textDecoration = "";
                }}
              >
                Testimoinials
              </p>
              <p
                id="team1"
                className="underline-offset-4"
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
                Team
              </p>

              <p
                id="Services1"
                className="underline-offset-4"
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
                Services
              </p>
              <p
                id="Our Strategy1"
                onClick={() => {
                  setShowNav(!showNav);
                }}
                className="underline-offset-4"
                onMouseOver={() => {
                  document.getElementById(
                    "Our Strategy1"
                  ).style.textDecoration = "underline";
                }}
                onMouseOut={() => {
                  document.getElementById(
                    "Our Strategy1"
                  ).style.textDecoration = "";
                }}
              >
                Our Strategy
              </p>
              <p
                id="Blogs"
                className="underline-offset-4 "
                onMouseOver={() => {
                  document.getElementById("Blogs").style.textDecoration =
                    "underline";
                }}
                onMouseOut={() => {
                  document.getElementById("Blogs").style.textDecoration = "";
                }}
              >
                Blogs
              </p>
              <p
                id="Contact1"
                onClick={() => {
                  setShowNav(!showNav);
                }}
                className="underline-offset-4 "
                onMouseOver={() => {
                  document.getElementById("Contact1").style.textDecoration =
                    "underline";
                }}
                onMouseOut={() => {
                  document.getElementById("Contact1").style.textDecoration = "";
                }}
              >
                Contact
              </p>
              <div className="buttonArea">
                <button className="p-3 ml-[-0.35vmin] bg-mainText text-white rounded-[5px] pl-8 pr-8 text-[3.45vmin]">
                  Get Quote
                </button>
              </div>
              <div className="ml-2 underline h-[2px] w-[96vw] border-headerUnderline border-t-[2px]"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
