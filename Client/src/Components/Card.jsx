const Card = (props) => {
  console.log(props.data);
  return (
    <>
    <div>
    {props.type==="Service" && (
      <div className="bg-white card flex flex-col items-center justify-center pl-3 pr-4 md:pr-0 md:p-3 md:pl-2 w-[62vw] h-[70vmin]  md:w-[45vmin] 2xl:w-[50vmin]  border-[#d0cfcf] border-[1px] md:h-[40vmin] gap-y-5  pr-1">
        <div className="imageHolder">
      
          {props.data.title==="Website Development" && screen.width>1000 &&
          <img
            src={require("../../assets/web-development.png")}
            height={84}
            width={84}
          />
          || (props.data.title==="Android Development" && screen.width>1000 &&
            <img
            src={require("../../assets/app-development.png")}
            height={84}
            width={84}
          />
          ) || (
            props.data.title==="Custom  Development" && screen.width>1000 &&
            <img
            src={require("../../assets/software-development.png")}
            height={84}
            width={84}
          />
          ) }
          {props.data.title==="Website Development" && screen.width<1000 &&
            <img
            src={require("../../assets/web-development.png")}
            height={70}
            width={70}
          />
          || (props.data.title==="Android Development" && screen.width<1000 &&
            <img
            src={require("../../assets/app-development.png")}
            height={70}
            width={70}
          />
          ) || (
            props.data.title==="Custom  Development" && screen.width<1000 &&
            <img
            src={require("../../assets/software-development.png")}
            height={70}
            width={70}
          />
          )}
     
        
        </div>
        <div className="flex flex-col justify-center items-center"> 
        <div className="titleHolder">
          <p className="font-bold text-[4.65vmin] md:text-[3.25vmin]  ">
            {props.data.title}
          </p>
        </div>
        <div className="captionBody w-[100%] lg:w-[76%] text-center text-textGrey text-[3vmin] md:text-[2.15vmin]">
          <p className="mt-2 text-[3.45vmin] md:text-[2.15vmin]" >{props.data.descr}</p>
        </div>
        </div>
       
      </div>
     )||(

      
      props.type==="Career" && 

        
      <div className="bg-white card flex flex-col items-center justify-center pl-3 pr-4 md:pr-0 md:p-3 md:pl-2 w-[72vw] h-[55vmin]  md:w-[45vmin] 2xl:w-[50vmin]  border-[#d0cfcf] border-[1px] md:h-[35vmin]  pr-1">
     
      <div className="flex flex-col gap-y-2 justify-center items-center"> 
      <div className="titleHolder">
        <p className="font-bold text-[4.65vmin] md:text-[3.25vmin] bg-white  ">
          {props.data.title}
        </p>
       
      </div>
       <div className="HorizontalLine flex justify-center items-center mt-[1px] ">
            <div className="line w-[30vmin]  border-t-[1px]"></div>
        </div> 
        <div className="captionBody w-[100%] lg:w-[76%] text-center text-textGrey text-[3vmin] md:text-[2.15vmin]">
          <p className="mt-2 text-[3.45vmin] md:text-[2.15vmin]" >{props.data.description}</p>
  </div>

  <div className="buttonHolder mt-3 lg:mt-5">
    <button className="bg-mainText text-white p-2 text-[3vmin] md:text-[1.95vmin]">Apply Now</button>
  </div>
     
      </div>
     
    </div>
     
     )}


      </div>
    </>
  );
};

export default Card;
