import { useEffect, useState } from "react";
import { userGetData } from "../Utils/useGetData";

const TechStack = () => {
  const [count, setCount] = useState("0");
  const [tigger, setTigger] = useState("Frontend");
  const navMap = {
    0: "Frontend",
    1: "Backend",
    2: "Database",
    3: "Android",
  };
  const { API_TEST_URL1, API_TEST_URL } = process.env;
  const data = userGetData(tigger, "technologies", "technologies");

  const handleChange = (index) => {
    if (index != count) {
      document.getElementById(count).style.backgroundColor = "#f0f2ff";
      setTigger(navMap[index]);
      setCount(index);
    }
  };
  const changeColor = () => {
    document.getElementById(count).style.backgroundColor = "#6e41c6";
  };
  useEffect(() => {
    changeColor();
  }, [count, tigger]);
  return (
    <div className="Holder w-[100vw] bg-backgroundMain p-3">
      <p className="text-extrabold text-center text-[7.25vmin] p-2 font-extrabold">
        Tech <span className="text-mainText">Stack</span>
      </p>

      <div className="iconHolder flex justify-center items-center text-textGrey gap-x-[10vmin] mt-10 text-[3.1vmin] font-poppins">
        <div>
          <p
            onClick={() => {
              handleChange("0");
            }}
          >
            Frontend
          </p>
          <div className="underline h-2 w-20 bg-backgroundMain" id="0"></div>
        </div>
        <div>
          <p
            onClick={() => {
              handleChange("1");
            }}
          >
            Backend
          </p>
          <div className="underline h-2 w-20 bg-backgroundMain" id="1"></div>
        </div>
        <div>
          <p
            onClick={() => {
              handleChange("2");
            }}
          >
            Database
          </p>
          <div className="underline h-2 w-20 bg-backgroundMain" id="2"></div>
        </div>
        <div>
          <p
            onClick={() => {
              handleChange("3");
            }}
          >
            Android Development
          </p>
          <div className="underline h-2 w-20 bg-backgroundMain" id="3"></div>
        </div>
      </div>

      <div className="holder flex justify-center items-center">
        <div className="line w-[88vw] border-t-[0.5px] mt-6"></div>
      </div>

      <div className="iconHolder w-[90vw] p-10  flex flex-col justify-center items-center gap-x-20 ml-12 mt-[-3vmin] lg:mt-[-5vmin]">
        <div className="w-[60vw]    flex flex-wrap gap-x-14 justify-center items-center gap-y-4">
          {data.length > 0 && (
            <>
              <div className="mt-12 imageContainer flex flex-wrap justify-center items-center p-10  gap-x-20 gap-y-24">
                {data.map((val) => (
                  <div className="imageHolder h-[20vmin]  w-[20vmin] md:h-[11vmin] md:w-[11vmin]">
                    {(val.name === "PHP" && val.name === "Neo4j" && (
                      <img
                        src={API_TEST_URL + val.image}
                        className="max-w-full max-h-full object-contain mt-[3.15vmin]"
                      ></img>
                    )) || (
                      <img
                        src={API_TEST_URL + val.image}
                        className="max-w-full max-h-full object-contain "
                      ></img>
                    )}
                  </div>
                ))}
              </div>
              <div></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
