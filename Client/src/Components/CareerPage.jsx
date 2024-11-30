import React from "react";
import Header from "./Header";
import Card from "./Card";
import RevolvingHeader from "./RevolvingHeader";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGetData } from "./CMS/Utils/useGetData";

const { API_TEST_URL } = process.env;
const CareerPage = () => {
  const [count, setCount] = useState("0");
  const [state, setState] = useState("Frontend");
  const [tigger, setTigger] = useState(false);

  const data = useGetData(tigger, "career");

  const changeColor = () => {
    console.log(state);
    document.getElementById(count).style.backgroundColor = "#6e41c6";
  };

  useEffect(() => {
    setTigger(true);
  }, []);
  useEffect(() => {
    changeColor();
  }, [count]);

  //   const apiResponse=
  //   [
  //     {
  //         title: 'Software Engineer',
  //         description: 'Develop and maintain software applications and systems',
  //         location: 'Remote',
  //         duration: 'Full Time',
  //         salary: '$100,000 - $150,000',
  //         qualifications: ['Bachelor’s degree in Computer Science, Software Engineering, or a related field', 'Experience in software development', 'Strong problem-solving and analytical skills', 'Experience with modern programming languages (e.g., Python, JavaScript, Java)', 'Experience with version control systems (e.g., Git)'],
  //         benefits: ['Flexible work hours', 'Competitive salary and benefits', 'Remote work opportunities', 'Work on cutting-edge technology', 'Networking opportunities']
  //     },
  //     {
  //         title: 'Frontend Developer',
  //         description: 'Create and maintain user interfaces for web applications',
  //         location: 'Remote',
  //         duration: 'Full Time',
  //         salary: '$70,000 - $100,000',
  //         qualifications: ['Bachelor’s degree in Computer Science, Information Systems, or a related field', 'Experience in front-end development', 'Strong problem-solving and analytical skills', 'Experience with modern web technologies (e.g., HTML, CSS, JavaScript)', 'Experience with version control systems (e.g., Git)'],
  //         benefits: ['Flexible work hours', 'Competitive salary and benefits', 'Remote work opportunities', 'Work on cutting-edge technology', 'Networking opportunities']
  //     },
  //     {
  //         title: 'Backend Developer',
  //         description: 'Design and implement server-side applications and systems',
  //         location: 'Remote',
  //         duration: 'Full Time',
  //         salary: '$80,000 - $120,000',
  //         qualifications: ['Bachelor’s degree in Computer Science, Information Systems, or a related field', 'Experience in back-end development', 'Strong problem-solving and analytical skills', 'Experience with modern web technologies (e.g., HTML, CSS, JavaScript)', 'Experience with version control systems (e.g., Git)'],
  //         benefits: ['Flexible work hours', 'Competitive salary and benefits', 'Remote work opportunities', 'Work on cutting-edge technology', 'Networking opportunities']
  //     },
  //     {
  //       title: 'Backend Developer',
  //       description: 'Design and implement server-side applications and systems',
  //       location: 'Remote',
  //       duration: 'Full Time',
  //       salary: '$80,000 - $120,000',
  //       qualifications: ['Bachelor’s degree in Computer Science, Information Systems, or a related field', 'Experience in back-end development', 'Strong problem-solving and analytical skills', 'Experience with modern web technologies (e.g., HTML, CSS, JavaScript)', 'Experience with version control systems (e.g., Git)'],
  //     },
  //     {
  //       title: 'Software Engineer',
  //       description: 'Develop and maintain software applications and systems',
  //       location: 'Remote',
  //       duration: 'Full Time',
  //       salary: '$100,000 - $150,000',
  //       qualifications: ['Bachelor’s degree in Computer Science, Software Engineering, or a related field', 'Experience in software development', 'Strong problem-solving and analytical skills', 'Experience with modern programming languages (e.g., Python, JavaScript, Java)', 'Experience with version control systems (e.g., Git)'],
  //       benefits: ['Flexible work hours', 'Competitive salary and benefits', 'Remote work opportunities', 'Work on cutting-edge technology', 'Networking opportunities']
  //     }
  // ]

  return (
    <>
      {screen.width > 1000 && <RevolvingHeader />}
      <Header />
      <div className="bg-backgroundMain flex flex-wrap p-5 pb-16">
        <div className="optionsBox ">
          <div className="mt-[-1.65vmin] text-gray lg:mt-1 text-[4.15vmin] md:text-[2.65vmin] optionsHolder flex gap-x-14  ml-6 text-[2.85vmin]">
            <div className="bg-">
              <p
                onClick={() => {
                  document.getElementById(count).style.backgroundColor =
                    "#f2f2f2";
                  setCount("0");
                  setState("Technical");
                }}
              >
                Technical
              </p>
              <div
                className="underline bg-lightGrey h-1 w-[10vmin] mt-1"
                id="0"
              ></div>
            </div>
            <div>
              <p
                onClick={() => {
                  document.getElementById(count).style.backgroundColor =
                    "#f2f2f2";
                  setCount("1");
                  setState("Non-Technical");
                }}
              >
                Non-Technical
              </p>
              <div
                className="underline bg-lightGrey h-1 w-[10vmin] mt-1"
                id="1"
              ></div>
            </div>
          </div>
          <div className="pt-4 HorizontalLine flex justify-center items-center mt-1">
            <div className="line w-[92vw] h-4 border-gray border-t-[1px]"></div>
          </div>
        </div>
        {}

        {(count === "0" && data.length > 0 && (
          <div className="displayArea mt-8 lg:mt-4  w-[100vw] flex flex-wrap justify-center items-center gap-x-6 gap-y-8">
            {data
              .filter((val) => val.category === "Technical")
              .map((item, index) => (
                <Card data={item} type="Career" />
              ))}
          </div>
        )) ||
          (count === "1" && data.length > 0 && (
            <div className="displayArea mt-8 lg:mt-4  w-[100vw] flex flex-wrap justify-center items-center gap-x-6 gap-y-8">
              {data
                .filter((val) => val.category === "Non Technical")
                .map((item, index) => (
                  <Card data={item} type="Career" />
                ))}
            </div>
          ))}

        {count === "1" && (
          <div className="displayArea mt-8 lg:mt-4  w-[100vw] flex flex-wrap justify-center items-center gap-x-6 gap-y-8"></div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <div className=" border-headerUnderline border-t-[2px] w-[95vw] "></div>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
