const Contactus=()=>{

    return (
        <>

            {
                screen.width<700 &&
                <div className="w-[100vw] p-5 pb-10 pt-8 ">
                <p className="text-center text-[8vmin] font-extrabold">Contact <span className="text-mainText">Us</span></p>
            <div className="holder flex flex-wrap gap-y-6">
            <div className="imageHolderContainer w-[100vw] flex justify-center items-center">
                <div className="imageHolder w-[27vw] h-[30vmin] mt-4 flex  items-center">
                    <img src={require("../../assets/phone1.png")
                    } alt="" className="src" />
                </div>
            </div>

            <div className="contactFormHolder w-[95vw] md:w-[60vw] mt-1  ml-[-1vmin] ">
                <div className="contactForm  w-[94vw] md:w-[57vw]   border-headerUnderline border-2 rounded-md">
                    <form className="flex flex-col gap-y-5 p-5">
                        <p className="text-deepViolet mt-7 ml-3 text-[4.25vmin] font-poppins">Write to us...</p>
                            <input type="text" className="text bg-lightGrey p-3" placeholder="Enter your name..."/>
                            <input type="text" className="text bg-lightGrey p-3" placeholder="Enter your email..." />
                            <input type="text" className="text bg-lightGrey p-3" placeholder="Enter your phone..." />
                            <textarea rows="6" className="text bg-lightGrey p-3"  placeholder="Enter your message..."/>
                            <div className="btnHolder flex justify-center items-center mt-3">
                           <button type="submit" className="submit bg-deepViolet text-white p-2 w-24">submit</button>
                           </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            }

            {
                screen.width>=700 && screen.width<=1000 && 
            <div className="w-[100vw] p-5 pb-10 pt-8 ">
                <p className="text-center text-[8vmin] font-extrabold">Contact <span className="text-mainText">Us</span></p>
            <div className="holder flex flex-wrap gap-y-6">
            <div className="imageHolderContainer w-[100vw] flex justify-center items-center">
                <div className="imageHolder w-[20vw] h-[25vmin] mt-4 flex  items-center">
                    <img src={require("../../assets/phone1.png")
                    } alt="" className="src" />
                </div>
            </div>

            <div className="contactFormHolder w-[100vw] mt-1 ml-2 flex justify-center items-center">
                <div className="contactForm  w-[87vw] md:w-[77vw]   border-headerUnderline border-2 rounded-md">
                    <form className="flex flex-col gap-y-5 p-5">
                        <p className="text-deepViolet mt-7 ml-3 text-[4.25vmin] font-poppins">Write to us...</p>
                            <input type="text" className="text bg-lightGrey p-3" placeholder="Enter your name..."/>
                            <input type="text" className="text bg-lightGrey p-3" placeholder="Enter your email..." />
                            <input type="text" className="text bg-lightGrey p-3" placeholder="Enter your phone..." />
                            <textarea rows="6" className="text bg-lightGrey p-3"  placeholder="Enter your message..."/>
                            <div className="btnHolder flex justify-center items-center mt-3">
                           <button type="submit" className="submit bg-deepViolet text-white p-2 w-24">submit</button>
                           </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            }

                {screen.width>=1000 &&
        <div className="w-[100vw] p-5 pb-16">
            <p className="text-center text-[7.8vmin]  font-extrabold">Contact <span className="text-mainText">Us</span></p>
        <div className="holder flex flex-wrap gap-y-6">
        <div className="imageHolderContainer w-[40vw] flex justify-end items-center">
            <div className="imageHolder w-[25vw]  mr-[10vmin] mt-7">
                <img src={require("../../assets/phone.jpg")
                } alt="" className="src max-w-full max-h-full object-contain" />
            </div>
        </div>
        <div className="contactFormHolder w-[53vw] mt-10 flex justify-center items-center ">
            <div className="contactForm w-[45vw]  pb-4  border-headerUnderline border-2 rounded-md pl-3 pr-3">
                <form className="flex flex-col gap-y-7 p-5">
                    <p className="text-deepViolet mt-7 ml-3 text-[3.35vmin] font-poppins">Write to us...</p>
                        <input type="text" className="text bg-lightGrey p-3 2xl:text-[2.12vmin]" placeholder="Enter your name..."/>
                        <input type="text" className="text bg-lightGrey p-3 2xl:text-[2.12vmin]" placeholder="Enter your email..." />
                        <input type="text" className="text bg-lightGrey p-3 2xl:text-[2.12vmin]" placeholder="Enter your phone..." />
                        <textarea rows="6" className="text bg-lightGrey p-3 2xl:text-[2.12vmin]"  placeholder="Enter your message..."/>
                        <div className="btnHolder flex justify-center items-center mt-3">
                       <button type="submit" className="submit bg-deepViolet text-white p-2 w-24">submit</button>
                       </div>
                </form>
            </div>
        </div>
        </div>
        </div>}
        </>
    )
}

export default Contactus;