import Datacomponent from "./Datacomponent";

const About = () => {
  return (
    <>
      <div className="aboutSection ml-6 mt-24 pb-24 pt-4 h">
        {screen.width < 900 && (
          <>
            <div className="aboutHeader">
              <p className="font-extrabold mt-[-12vmin] text-[10vmin] md:text-[10vmin]">
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
         <div className="aboutHeader mt-[-1vmin]">
           <p className="font-extrabold text-[8vmin]">
             About-
             <span className="text-mainText">Us</span>
           </p>
         </div>
         <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-[0.5vmin] ">
           <div className="imageHolder w-[60vmin] h-[100vmin]">
             <img
               src={require("../../assets/aboutus.jpg")}
               className="max-w-full max-h-full object-contain"
             ></img>
           </div>

           <div className="textHolder w-[75vmin] text-[2.95vmin] ml-[-1vmin]">
            <div className="mainTextHolder flex flex-col w-[110vmin]">
             <div className="who border-black h-[35vmin]">
               <p className="font-bold text-[5vmin]">Who we are?</p>
                 <ul className="mt-2 mainText">
                  <li>We are a software development firm aimed to develop cost effective <br></br>solutions for our clients</li>
                  <li>Our team has a rich experience in the software development <br></br>industry to meet your needs.</li>
                  <li>We ham a motto Where Ideas Transform Into Innovation.</li>
                 </ul>
               </div>
             <div className="vision  h-[32vmin]">
             <p className="font-bold text-[4.75vmin]">Our Vision and mission</p>
             
           
             <ul className="mt-2 mainText flex flex-col gap-y-2">
                  <li>Delivering top notch  solutions to our clients</li>
                  <li>Providing top quality services at the most affordable cost</li>
                  <li>Quality customer service is our motto which help us to make strong <br></br> long term relationship with our clients </li>
                 </ul>
             </div>
             <div className="dataHolder h-[25vmin]">
               <Datacomponent />
             </div>
            </div>
           </div>
         </div>
       </>
        )}

        {screen.width > 1280 && screen.width < 1440 && (
           <>
           <div className="aboutHeader mt-[-1vmin]">
             <p className="font-extrabold text-[8vmin]">
               About-
               <span className="text-mainText">Us</span>
             </p>
           </div>
           <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4 ">
             <div className="imageHolder w-[60vmin] h-[100vmin]">
               <img
                 src={require("../../assets/aboutus.jpg")}
                 className="max-w-full max-h-full object-contain"
               ></img>
             </div>

             <div className="textHolder w-[95vmin] text-[2.95vmin]">
              <div className="mainTextHolder flex flex-col w-[110vmin]">
               <div className="who border-black h-[35vmin]">
                 <p className="font-bold text-[5vmin]">Who we are?</p>
                   <ul className="mt-2 mainText">
                    <li>We are a software development firm aimed to develop cost effective solutions for our clients</li>
                    <li>Our team has a rich experience in the software development industry to meet your needs.</li>
                    <li>We ham a motto Where Ideas Transform Into Innovation.</li>
                   </ul>
                 </div>
               <div className="vision  h-[32vmin]">
               <p className="font-bold text-[4.75vmin]">Our Vision and mission</p>
               
             
               <ul className="mt-2 mainText flex flex-col gap-y-2">
                    <li>Delivering top notch  solutions to our clients</li>
                    <li>Providing top quality services at the most affordable cost</li>
                    <li>Quality customer service is our motto which help us to make strong long term relationship with our clients </li>
                   </ul>
               </div>
               <div className="dataHolder h-[25vmin]">
                 <Datacomponent />
               </div>
              </div>
             </div>
           </div>
         </>
        )}

        {screen.width >= 1400 &&
          screen.height <= 810 &&
          screen.width <= 1500 && (
            <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4 ">
              <div className="imageHolder w-[60vmin] h-[100vmin]">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[95vmin] text-[2.95vmin]">
               <div className="mainTextHolder flex flex-col w-[110vmin]">
                <div className="who border-black h-[35vmin]">
                  <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText">
                     <li>We are a software development firm aimed to develop cost effective solutions for our clients</li>
                     <li>Our team has a rich experience in the software development industry to meet your needs.</li>
                     <li>We ham a motto Where Ideas Transform Into Innovation.</li>
                    </ul>
                  </div>
                <div className="vision  h-[32vmin]">
                <p className="font-bold text-[4.75vmin]">Our Vision and mission</p>
                
              
                <ul className="mt-2 mainText flex flex-col gap-y-2">
                     <li>Delivering top notch  solutions to our clients</li>
                     <li>Providing top quality services at the most affordable cost</li>
                     <li>Quality customer service is our motto which help us to make strong long term relationship with our clients </li>
                    </ul>
                </div>
                <div className="dataHolder h-[25vmin]">
                  <Datacomponent />
                </div>
               </div>
              </div>
            </div>
          </>
          )}

        {screen.width >= 1400 &&
          screen.height > 810 &&
          screen.width <= 1500 && (
            <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4 justify-center items-center">
              <div className="imageHolder w-[70vmin] h-[100vmin]">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[110vmin] text-[2.95vmin]">
               <div className="mainTextHolder flex flex-col w-[110vmin]">
                <div className="who border-black h-[35vmin]">
                  <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText">
                     <li>We are a software development firm aimed to develop cost effective solutions for our clients</li>
                     <li>Our team has a rich experience in the software development industry to meet your needs.</li>
                     <li>We ham a motto Where Ideas Transform Into Innovation.</li>
                    </ul>
                  </div>
                <div className="vision  h-[32vmin]">
                <p className="font-bold text-[4.75vmin]">Our Vision and mission</p>
                
              
                <ul className="mt-2 mainText flex flex-col gap-y-2">
                     <li>Delivering top notch  solutions to our clients</li>
                     <li>Providing top quality services at the most affordable cost</li>
                     <li>Quality customer service is our motto which help us to make strong long term relationship with our clients </li>
                    </ul>
                </div>
                <div className="dataHolder h-[25vmin]">
                  <Datacomponent />
                </div>
               </div>
              </div>
            </div>
          </>
          )}

        {screen.width > 1500 && screen.width <= 1700 && (
          <>
            <div className="aboutHeader mt-[-1vmin]">
              <p className="font-extrabold text-[8vmin]">
                About-
                <span className="text-mainText">Us</span>
              </p>
            </div>
            <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-4 justify-center items-center">
              <div className="imageHolder w-[70vmin] h-[100vmin]">
                <img
                  src={require("../../assets/aboutus.jpg")}
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <div className="textHolder w-[110vmin] text-[2.95vmin]">
               <div className="mainTextHolder flex flex-col w-[110vmin]">
                <div className="who border-black h-[35vmin]">
                  <p className="font-bold text-[5vmin]">Who we are?</p>
                    <ul className="mt-2 mainText">
                     <li>We are a software development firm aimed to develop cost effective solutions for our clients</li>
                     <li>Our team has a rich experience in the software development industry to meet your needs.</li>
                     <li>We ham a motto Where Ideas Transform Into Innovation.</li>
                    </ul>
                  </div>
                <div className="vision  h-[32vmin]">
                <p className="font-bold text-[4.75vmin]">Our Vision and mission</p>
                
              
                <ul className="mt-2 mainText flex flex-col gap-y-2">
                     <li>Delivering top notch  solutions to our clients</li>
                     <li>Providing top quality services at the most affordable cost</li>
                     <li>Quality customer service is our motto which help us to make strong long term relationship with our clients </li>
                    </ul>
                </div>
                <div className="dataHolder h-[25vmin]">
                  <Datacomponent />
                </div>
               </div>
              </div>
            </div>
          </>
        )}

        {screen.width > 1700 && screen.width <= 1900 && (
           <>
           <div className="aboutHeader mt-[-1vmin]">
             <p className="font-extrabold text-[8vmin]">
               About-
               <span className="text-mainText">Us</span>
             </p>
           </div>
           <div className="contentHolder flex flex-wrap gap-x-9 mt-6 ml-[0.5vmin] ">
             <div className="imageHolder w-[60vmin] h-[100vmin]">
               <img
                 src={require("../../assets/aboutus.jpg")}
                 className="max-w-full max-h-full object-contain"
               ></img>
             </div>
  
             <div className="textHolder w-[75vmin] text-[2.95vmin] ml-[2vmin]">
              <div className="mainTextHolder flex flex-col w-[110vmin]">
               <div className="who border-black h-[35vmin]">
                 <p className="font-bold text-[5vmin]">Who we are?</p>
                   <ul className="mt-2 mainText">
                    <li>We are a software development firm aimed to develop cost <br></br> effective solutions for our clients</li>
                    <li>Our team has a rich experience in the software development <br></br>industry to meet your needs.</li>
                    <li>We ham a motto Where Ideas Transform Into Innovation.</li>
                   </ul>
                 </div>
               <div className="vision  h-[32vmin]">
               <p className="font-bold text-[4.75vmin]">Our Vision and mission</p>
               
             
               <ul className="mt-2 mainText flex flex-col gap-y-2">
                    <li>Delivering top notch  solutions to our clients</li>
                    <li>Providing top quality services at the most affordable cost</li>
                    <li>Quality customer service is our motto which help us to make  <br></br> strong long term relationship with our clients </li>
                   </ul>
               </div>
               <div className="dataHolder h-[25vmin]">
                 <Datacomponent />
               </div>
              </div>
             </div>
           </div>
         </>
        )}

        {screen.width > 1900 && screen.width <= 2047 && (
           <>
           <div className="aboutHeader mt-[-1vmin]">
             <p className="font-extrabold text-[8vmin]">
               About-
               <span className="text-mainText">Us</span>
             </p>
           </div>
           <div className="contentHolder flex flex-wrap gap-x-9 mt-6  ml-[7vmin]">
             <div className="imageHolder w-[70vmin] h-[100vmin] mt-4">
               <img
                 src={require("../../assets/aboutus.jpg")}
                 className="max-w-full max-h-full object-contain"
               ></img>
             </div>
  
             <div className="textHolder w-[75vmin] text-[2.95vmin] ml-[2vmin] mt-4">
              <div className="mainTextHolder flex flex-col w-[110vmin]">
               <div className="who border-black h-[35vmin]">
                 <p className="font-bold text-[5vmin]">Who we are?</p>
                   <ul className="mt-2 mainText">
                    <li>We are a software development firm aimed to develop cost <br></br> effective solutions for our clients</li>
                    <li>Our team has a rich experience in the software development <br></br>industry to meet your needs.</li>
                    <li>We ham a motto Where Ideas Transform Into Innovation.</li>
                   </ul>
                 </div>
               <div className="vision  h-[32vmin]">
               <p className="font-bold text-[4.75vmin]">Our Vision and mission</p>
               
             
               <ul className="mt-2 mainText flex flex-col gap-y-2">
                    <li>Delivering top notch  solutions to our clients</li>
                    <li>Providing top quality services at the most affordable cost</li>
                    <li>Quality customer service is our motto which help us to make  <br></br> strong long term relationship with our clients </li>
                   </ul>
               </div>
               <div className="dataHolder h-[25vmin]">
                 <Datacomponent />
               </div>
              </div>
             </div>
           </div>
         </>
        )}
      </div>
    </>
  );
};
export default About;
