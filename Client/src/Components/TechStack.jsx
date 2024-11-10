const TechStack = () => {
  return (
    <div className="Holder w-[100vw] bg-backgroundMain p-3">
      <p className="text-extrabold text-center text-[7.25vmin] p-2 font-extrabold">
        Tech <span className="text-mainText">Stack</span>
      </p>

      <div className="iconHolder flex justify-center items-center text-textGrey gap-x-[10vmin] mt-10 text-[3.1vmin] font-poppins">
        <div>
          <p>Frontend</p>
          <div className="underline h-2 w-20 bg-mainText"></div>
        </div>
        <p>Backend</p>
        <p>Database</p>
        <p>Android Development</p>
      </div>

      <div className="holder flex justify-center items-center">
        <div className="line w-[88vw] border-t-[0.5px] mt-6"></div>
      </div>

      <div className="mt-5 iconHolder w-[90vw] h-[55vmin] flex flex-col justify-center items-center gap-x-20 ml-12 mt-[-3vmin] lg:mt-[-5vmin]">
        <div className="w-[60vw]  h-[44vmin]  flex flex-wrap gap-x-14 justify-center items-center gap-y-4">
          <img
            src={require("../../assets/html.png")}
            height={80}
            width={80}
          ></img>

          <img
            src={require("../../assets/css.png")}
            height={95}
            width={95}
            className="mt-[-1vmin]"
          ></img>
          <img
            src={require("../../assets/js.webp")}
            height={100}
            width={100}
            className="mt-2"
          ></img>
          <img
            src={require("../../assets/tailwind.webp")}
            height={85}
            width={85}
            className="mt-2"
          ></img>
          <img
            src={require("../../assets/bootstrap.png")}
            height={85}
            width={85}
            className="mt-2"
          ></img>
          <img
            src={require("../../assets/mui.png")}
            height={85}
            width={85}
            className="mt-2"
          ></img>
          <img
            src={require("../../assets/react.png")}
            height={130}
            width={130}
          ></img>

          <img
            src={require("../../assets/angular.webp")}
            height={76}
            width={76}
            className="mt-[-1vmin]"
          ></img>
          <img
            src={require("../../assets/vue.png")}
            height={76}
            width={76}
            className="mt-2"
          ></img>
          <img
            src={require("../../assets/next.png")}
            height={76}
            width={76}
            className="mt-2"
          ></img>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TechStack;
