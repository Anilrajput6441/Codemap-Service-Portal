import Datacomponent from "./Datacomponent";
import { Slide, Zoom } from "react-awesome-reveal";
const About = () => {
  return (
    <>
      <div className="aboutSection ml-6 mt-24 pb-24 pt-4 h">
        {screen.width < 900 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold mt-[-7vmin] text-[10vmin] md:text-[10vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-2 ">
              <div className="imageHolder w-[95vw] h-[60vmin]">
                <img
                  src={require("../../assets/teamicon.avif")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[95vw] mt-3">
                <p className="leading-loose md:text-[3.25vmin]">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>

                <Datacomponent />
              </div>
            </div>
          </>
        )}

        {screen.width > 900 && screen.width <= 1280 && screen.height >= 800 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-2">
              <div className="imageHolder w-[67vmin] h-[55vmin]">
                <img
                  src={require("../../assets/teamicon.avif")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[75vmin]">
                <p className="leading-loose text-[2.55vmin]">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>

                <Datacomponent />
              </div>
            </div>
          </>
        )}

        {screen.width > 900 && screen.width <= 1115 && screen.height < 800 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-10 mt-6 ml-6">
              <div className="imageHolder w-[67vmin] h-[60vmin]">
                <img
                  src={require("../../assets/teamicon.avif")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[77vmin] font-poppins">
                <p className="leading-loose">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>

                <Datacomponent />
              </div>
            </div>
          </>
        )}

        {screen.width > 1115 && screen.width <= 1280 && screen.height < 800 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-10 mt-6 ml-6">
              <div className="imageHolder w-[94vmin] h-[60vmin]">
                <img
                  src={require("../../assets/teamicon.avif")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[88vmin] font-poppins">
                <p className="leading-loose">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>

                <Datacomponent />
              </div>
            </div>
          </>
        )}

        {screen.width > 1280 && screen.width < 1440 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4">
              <div className="imageHolder w-[88vmin] h-[60vmin]">
                <img
                  src={require("../../assets/teamicon.avif")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[80vmin] text-[2.75vmin]">
                <p className="leading-loose">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>
                <Datacomponent />{" "}
              </div>
            </div>
          </>
        )}

        {screen.width >= 1400 &&
          screen.height <= 810 &&
          screen.width <= 1500 && (
            <>
              <div className="aboutHeader">
                <p className="font-extrabold text-[8vmin]">
                  About-
                  <span className="text-mainText">Us</span>
                </p>
              </div>
              <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4">
                <div className="imageHolder w-[88vmin] h-[60vmin]">
                  <img
                    src={require("../../assets/teamicon.avif")}
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>

                <div className="textHolder w-[80vmin] text-[2.75vmin]">
                  <p className="leading-loose">
                    We at Codemap family try to deliver the best software
                    products to our client keeping in mind all the needs and
                    requirements of the project. Our team deeply focus on
                    excellence over the apps developed for clients under the
                    domains of web, android app & custom desktop application
                    development.We also thrive as one of the most reliable
                    brands in website and app development service industry
                  </p>
                  <Datacomponent />{" "}
                </div>
              </div>
            </>
          )}

        {screen.width >= 1400 &&
          screen.height > 810 &&
          screen.width <= 1500 && (
            <>
              <div className="aboutHeader">
                <p className="font-extrabold text-[8vmin]">
                  About-
                  <span className="text-mainText">Us</span>
                </p>
              </div>
              <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4">
                <div className="imageHolder w-[78vmin] h-[60vmin]">
                  <img
                    src={require("../../assets/teamicon.avif")}
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>

                <div className="textHolder w-[79vmin] text-[2.75vmin]">
                  <p className="leading-loose">
                    We at Codemap family try to deliver the best software
                    products to our client keeping in mind all the needs and
                    requirements of the project. Our team deeply focus on
                    excellence over the apps developed for clients under the
                    domains of web, android app & custom desktop application
                    development.We also thrive as one of the most reliable
                    brands in website and app development service industry
                  </p>
                  <Datacomponent />{" "}
                </div>
              </div>
            </>
          )}

        {screen.width > 1500 && screen.width <= 1700 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4">
              <div className="imageHolder w-[88vmin] h-[60vmin]">
                <img
                  src={require("../../assets/teamicon.avif")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[84vmin] text-[2.95vmin]">
                <p className="leading-loose">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>
                <Datacomponent />{" "}
              </div>
            </div>
          </>
        )}

        {screen.width > 1700 && screen.width <= 1900 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-4 mt-6 ml-4">
              <div className="imageHolder w-[70vmin] h-[55vmin]">
                <img
                  src={require("../../assets/teamicon.avif")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[76vmin] text-[2.65vmin] ml-3">
                <p className="leading-loose">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>
                <Datacomponent />{" "}
              </div>
            </div>
          </>
        )}

        {screen.width > 1900 && screen.width <= 2047 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-4 mt-6 ml-4">
              <div className="imageHolder w-[88vmin] h-[55vmin]">
                <img
                  src={require("../../assets/team.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[80vmin] text-[2.65vmin] ml-3">
                <p className="leading-loose">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>
                <Datacomponent />{" "}
              </div>
            </div>
          </>
        )}

        {screen.width > 2047 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4">
              <div className="imageHolder w-[88vmin] h-[60vmin]">
                <img
                  src={require("../../assets/team.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[80vmin] text-[2.95vmin]">
                <p className="leading-loose">
                  We at Codemap family try to deliver the best software products
                  to our client keeping in mind all the needs and requirements
                  of the project. Our team deeply focus on excellence over the
                  apps developed for clients under the domains of web, android
                  app & custom desktop application development.We also thrive as
                  one of the most reliable brands in website and app development
                  service industry
                </p>
                <Datacomponent />{" "}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default About;
