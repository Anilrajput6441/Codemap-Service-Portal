import React from "react";
import RevolvingHeader from "./RevolvingHeader";
import Header from "./Header";
import Footer from "./Footer";
import TitleComponent from "./TitleComponent";
const PartnerPage = () => {
  return (
    <>
      <div id="hero">
        {screen.width > 1000 && <RevolvingHeader />}

        <Header />

        {screen.width <= 1000 && (
          <>
            <TitleComponent
              title="Partnership Page"
              slogan="Partner with one of the best software development agency in India"
            />
            <div className="partnerContainer  pt-7 pb-7">
              <p className="text-[9vmin] font-extrabold ml-4">
                Why <span className="text-deepViolet">Codemap?</span>
              </p>
              <div className="partnerUs w-[100vw]  flex flex-wrap justify-center items-center mt-3">
                <div className="w-[92vw] flex flex-col justify-center items-center ">
                  <div className="imageHolder w-[92vw] flex justify-center items-center">
                    <img
                      src={require("../../assets/teamicon.avif")}
                      alt="Partnership Image"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                <div className="w-[96vw] flex flex-col  text-[3.75vmin] ml-2 mt-[-1.25vmin] p-2 ">
                  <div className="mt-7 font-poppins">
                    <p className="leading-[7.25vmin]">
                      Codemap is a leading software development and consulting
                      firm in India. We provide our technical solutions and
                      consulting services pan India across multiple business
                      domains in India like Finance, HealthCare, HR, Education
                      and many more.With an experienced team,We want to deliver
                      the best quality software solutions to our client. The
                      reasons to partner with codemap is as follows:
                    </p>

                    <ol className="leading-[7.25vmin]">
                      <li>
                        1. We believe in building long term relations with our
                        business partners.
                      </li>
                      <li>
                        2. Get higher incentives and commiss ions for your leads
                        generated.
                      </li>
                      <li>
                        3. We believe in trust building and mutual benefits
                        within the business partners and their stakeholders.
                      </li>
                      <li>
                        4. With moto of making strong collaborative partners to
                        excel and grow both of the partners
                      </li>
                    </ol>
                  </div>

                  <button className="bg-deepViolet text-white p-2 mt-6 text-[2.65vmin] w-[35%] text-[3.65vmin]">
                    <a href="#hero">Connect Now !!!</a>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {screen.width > 1000 && (
          <>
            <div className="mainBody w-[100vw] bg-backgroundMain flex flex-wrap pb-20">
              <div className="left w-[50vw]  flex justify-center items-center mt-8">
                <div className="imageHolder w-[100vw] md:w-[30vw] md:h-[55vh] 2xl:w-[25vw] mt-[7vmin]">
                  <img
                    src={require("../../assets/handshake.png")}
                    alt="partnerIcon"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="right w-[50vw] flex ">
                {screen.width < 1700 && (
                  <div className="w-[50vw] flex flex-col  items-start gap-y-10  ml-[10vmin] mt-[5.15vmin] ">
                    <div className="formHolder w-[39vw] bg-white p-6 rounded-[1vmin]">
                      <p className="text-[4vmin] font-bold">Partner with us</p>
                      <p className="text-mainText mt-[0.75px]">
                        {" "}
                        ( Explore opputunities to grow with Codemap!!! )
                      </p>
                      <form className="flex flex-col gap-y-8 p-3 mt-5">
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
                            Which service are you partnering for?
                          </option>
                          <option value="Talk to you later">
                            Lead Generation
                          </option>
                          <option value="To be honest">
                            Technology Outsourcing
                          </option>
                          <option value=" I don’t know">
                            Digital Marketing
                          </option>
                        </select>
                        <div className="flex justify-center items-center">
                          <button className="p-2 bg-mainText text-white w-[20vmin]">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {screen.width >= 1700 && screen.width <= 1919 && (
                  <div className="w-[50vw] h-[75vmin] flex flex-col gap-y-12   ml-[3vmin] mt-[8vmin]">
                    <div className="formHolder w-[40vw] bg-white p-7">
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
                )}

                {screen.width >= 1920 && screen.width <= 2047 && (
                  <div className="w-[50vw] flex flex-col gap-y-12   ml-[8vmin] mt-[6vmin]">
                    <div className="formHolder w-[36vw] bg-white p-9">
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
                )}
                {screen.width >= 2048 && (
                  <div className="w-[50vw] flex flex-col gap-y-12  ml-[8vmin] mt-[6vmin]">
                    <div className="formHolder w-[37vw] h-[60vmin] bg-white p-7">
                      <p className="text-[4vmin] font-bold">Contact us</p>
                      <p className="text-mainText mt-[0.75px] text-[2.21vmin]">
                        {" "}
                        ( Get Flat 20% discount on your first order )
                      </p>
                      <form className="flex flex-col gap-y-12 p-3 mt-5 text-[2.35vmin]">
                        <input
                          type="text"
                          className="text border-gray border-b-[1px] p-2 text-[2.35vmin]"
                          placeholder="Enter your name..."
                        />
                        <input
                          type="text"
                          className="text border-gray border-b-[1px] p-2 text-[2.35vmin]"
                          placeholder="Enter your email..."
                        />
                        <input
                          type="text"
                          className="text border-gray border-b-[1px] p-2 text-[2.35vmin]"
                          placeholder="Enter your phone..."
                        />
                        <select className="text border-gray text-[2.35vmin] border-b-[1px] p-2 text-[2vmin]">
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
                )}
              </div>
            </div>
            <div className="partnerContainer  pt-10 pb-20">
              <p className="text-[7vmin] font-extrabold ml-8">
                Why <span className="text-deepViolet">Codemap?</span>
              </p>
              <div className="partnerUs w-[100vw]  flex flex-wrap justify-center items-center">
                <div className="w-[35vw] flex flex-col justify-center items-center mt-8">
                  <div className="imageHolder w-[35vw] h-[90vh] flex justify-center items-center">
                    <img
                      src={require("../../assets/teamImage.jpg")}
                      alt="Partnership Image"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                <div className="w-[53vw] flex flex-col justify-center  h-[90vh]  text-[2.65vmin] ml-9 mt-[2vmin]">
                  <div className="mt-6 font-poppins mt-[2vmin]">
                    <p className="leading-[5.6vmin]">
                      Codemap is a leading software development and consulting
                      firm in India. We provide our technical solutions and
                      consulting services pan India across multiple business
                      domains in India like Finance, HealthCare, HR, Education
                      and many more.With an experienced team,We want to deliver
                      the best quality software solutions to our client.We
                      posses strong work ethic and are always strict towards
                      deadline .The reasons to partner with codemap is as
                      follows:
                    </p>

                    <ol className="leading-[5.6vmin] text-[2.45vmin]">
                      <li>
                        &nbsp;1. We believe in building long term relations with
                        our business partners.
                      </li>
                      <li>
                        &nbsp;2. Get higher incentives and commiss ions for your
                        leads generated.
                      </li>
                      <li>
                        &nbsp;3. We believe in trust building and mutual
                        benefits within the business partners and their
                        stakeholders.
                      </li>
                      <li>
                        &nbsp;4. With moto of making strong collaborative
                        partners to excel and grow both of the partners
                      </li>
                    </ol>
                  </div>

                  <button className="bg-deepViolet text-white p-2 mt-9 text-[2.45vmin] w-[35%] 2xl:w-1/4 text-[2.25vmin]">
                    <a href="#hero">Connect Now !!!</a>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
};

export default PartnerPage;
