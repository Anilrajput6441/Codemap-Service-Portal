import { Link } from "react-router-dom"
const Card = (props) => {
  let orientation="";
  if(props.type==="Team") {
    if(props.value%2!=0){
     orientation = "reverse";
    }
   }
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
    <button className="bg-mainText text-white p-2 text-[3vmin] md:text-[1.95vmin]">
      <Link to="/apply">Apply Now</Link></button>
  </div>
     
      </div>
     
    </div>
     
     )|| (
      props.type==="Team" && orientation!="reverse" &&

        <div className="teamcard w-[90vw] md:w-[100vmin] flex flex-wrap md:gap-x-3">
            <div className="imageHolder h-[40vmin] w-[40vmin] md:h-[30vmin] md:w-[25vmin] flex lg:justify-center items-center">
              <img src={props.data.image} className="max-w-full max-h-full object-contain"></img>
            </div>

            <div className="textHolder w-[96vw] md:w-[70vmin] flex flex-col justify-center mt-3 lg:mt-0 lg:ml-5 ">
              <div className="personalInfo flex gap-x-3">

              <p className="font-poppins font-bold text-[5vmin] md:text-[3.45vmin]">{props.data.name}</p>
              {props.data.name ==="Anish Gupta" &&
              <div className="imageHolder h-[5.5vmin] w-[5.5vmin] md:w-[3vmin] md:h-[3vmin] mt-[2.5px] md:mt-[9px] ml-[9vmin] md:ml-0">
              <a href={props.data.Link} target="_blank">
              <img src={require("../../assets/linkedin.png")} className="max-w-full max-h-full object-contain"/>
              </a>
              </div>
              || (
                <div className="imageHolder h-[5vmin] w-[5vmin] md:w-[3vmin] md:h-[3vmin] mt-[2.5px] md:mt-[9px]">
              <a href={props.data.Link} target="_blank">
              <img src={require("../../assets/linkedin.png")} className="max-w-full max-h-full object-contain"/>
              </a>
              </div>
              )}
              </div>

              <div className="designation text-mainText 2xl:text-[2.15vmin]">
                <p>( {props.data.title} )</p>
              </div>

              <div className="HorizontalLine flex  mt-[1px] ">
             <div className="line w-[60vmin]  border-headerUnderline border-t-[1px] mt-2"></div>
             </div> 
             {screen.width<1000 && 

                <div className="descriptionHolder ">
                  <p className="font-poppins mt-2 text-[3.45vmin] md:text-[2vmin]">{props.data.description}</p>
                </div>
                }
             {screen.width<1700 && screen.width>=1000 &&

                  <div className="descriptionHolder pl-1">
                    <p className="text-[2.1vmin] pr-3 font-poppins mt-2">{props.data.description}</p>
                  </div>
             }
      {screen.width>=1700 && screen.width<=1900 &&

        <div className="descriptionHolder pl-1">
          <p className="text-[2.1vmin] pr-3 font-poppins mt-2">{props.data.description}</p>
        </div>
                }
          {
          screen.width>=1900 && screen.width<=2047 &&

          <div className="descriptionHolder pl-1">
          <p className="text-[1.87vmin] pr-1 font-poppins mt-1">{props.data.description}</p>
        </div>
        }
            </div>
        </div>
    

     )||(props.type==="Team" && orientation==="reverse" &&        
     
     

     <div className="teamcard w-[90vw] md:w-[98vmin] lg:w-[100vmin] flex flex-wrap-reverse md:gap-x-3 mt-4">
   

      <div className="textHolder w-[95vw] md:w-[68vmin] flex flex-col justify-center  mt-3 lg:mt-0 lg:ml-5">
        <div className="personalInfo flex gap-x-3">
        <p className="font-poppins font-bold text-[5vmin] md:text-[3.45vmin] md:ml-2">{props.data.name}</p>

 
        <div className="imageHolder h-[5vmin] w-[5vmin] md:w-[3vmin] md:h-[3vmin]  mt-[2.5px] md:mt-[9px]">
        <a href={props.data.Link} target="_blank">
        <img src={require("../../assets/linkedin.png")} className="max-w-full max-h-full object-contain"/>
        </a>
        </div>
       

        </div>

        <div className="designation text-mainText md:ml-2 2xl:text-[2.25vmin]">
      
          ( {props.data.title} )
    
        </div>

        <div className="HorizontalLine flex  mt-[1px] md:ml-2 ">
       <div className="line w-[60vmin]  border-headerUnderline border-t-[1px] mt-2"></div>
       </div> 

            {screen.width<1000 && 

      <div className="descriptionHolder md:w-[63vmin] md:ml-2">
        <p className="font-poppins mt-2 text-[3.45vmin] md:text-[2vmin]">{props.data.description}</p>
      </div>
      }
      {screen.width<1700 && screen.width>=1000 &&

        <div className="descriptionHolder pl-1">
          <p className="text-[2.1vmin] pr-3 font-poppins mt-2  ">{props.data.description}</p>
        </div>
      }
            
   
      {screen.width>=1700 && screen.width<=1900 &&

        <div className="descriptionHolder pl-1 mt-2">
          <p className="text-[1.87vmin] pr-3 font-poppins">{props.data.description}</p>
        </div>
      }
         {screen.width>=1900 && screen.width<=2047 &&

          <div className="descriptionHolder pl-1 mt-2">
          <p className="text-[1.87vmin] pr-1 font-poppins">{props.data.description}</p>
        </div>
        }

       
      </div>

      <div className="imageHolder h-[40vmin] w-[40vmin] md:h-[30vmin] md:w-[25vmin] flex justify-center items-center ml-[-0.5vmin] mt-3">
        <img src={props.data.image} className="max-w-full max-h-full object-contain"></img>
      </div>
  </div>
 )
     }


      </div>
    </>
  );
};

export default Card;
