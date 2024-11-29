import React from "react";
import { Link } from "react-router-dom";

const { API_TEST_URL } = process.env;
const CMSCard = (props) => {
  return (
    <>
      {props.type != "application" && (
        <div className="cardHolder bg-white border-gray border-[1px] w-[88vw] md:w-[60vmin] lg:w-[54vmin] pl-2 pb-4 flex flex-col justify-center items-center p-2 pl-4">
          <div className="imageHolder mt-[5vmin]">
            <img src={props.data.image} height={140} width={140} />
          </div>
          <div className="cardHolderContainer text-[6vmin] md:text-[4vmin]  w-[88vw]  lg:w-[50vmin]">
            <p className="cardTitle font-extrabold text-center mt-5 font-poppins">
              {props.data.title}
            </p>
            <div className="flex justify-center items-center mt-4">
              <buttton className="bg-deepViolet text-white text-[3.45vmin] md:text-[2.15vmin] p-2">
                <Link to={props.data.link}>Click Here!!!</Link>
              </buttton>
            </div>
          </div>
        </div>
      )}

      {props.type == "application" && (
        <div className="cardHolder bg-white border-gray border-[1px] w-[88vw] md:w-[60vmin] lg:w-[55vmin] pl-2 pb-4 flex flex-col justify-center items-center p-2 pl-4">
          <div className="cardHolderContainer text-[4vmin] md:text-[2.45vmin]  w-[88vw]  lg:w-[50vmin]">
            <p className="cardTitle font-extrabold text-center mt-5 font-poppins">
              {props.data.name}
            </p>
            <p className="text-center mt-5 font-poppins">
              Email: {props.data.email}
            </p>
            <p className="text-center mt-5 font-poppins">
              Phone: {props.data.phone}
            </p>
            <p className="text-center mt-5 font-poppins">
              Role:{props.data.role}
            </p>
            <p className="text-center mt-5 font-poppins">
              Category: {props.data.category}
            </p>

            <div className="flex justify-center items-center mt-4">
              <buttton className="bg-deepViolet text-white text-[3.45vmin] md:text-[2.15vmin] p-2">
                <Link to={API_TEST_URL + props.data.resume} target="_blank">
                  Resume!!!
                </Link>
              </buttton>
            </div>
          </div>
          <div className="areaHolder  bg-backgroundMain h-16 w-[100%] mt-6 flex justify-between pl-4 pr-4 p-3">
            <img
              src={require("../../../assets/check.png")}
              height={50}
              width={50}
            />
            <img
              src={require("../../../assets/cancel.png")}
              height={50}
              width={50}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CMSCard;
