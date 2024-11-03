import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TitleComponent from './TitleComponent'

const ApplyPortal = () => {
  return (
   <>
   <div className='pb-10'>
    <Header />
    <TitleComponent title="Apply Portal" slogan="Join our team by applying for your dream role below!!!" />
    <div className="formArea mt-10 flex justify-center items-center ">
        <div className="formArea w-[95vw] pb-5  md:w-[70vmin]  border-headerUnderline border-[1px]">
        <form className='flex flex-col justify-center items-center'>
           <div className="logoHolder flex gap-x-7 items-center mt-4">
            <div className="flex imageHolder h-[12vmin] w-[12vmin] max-w-full max-h-full object-contain">
                <img src={require("../../assets/codemapIcon.png")}/>
              
            </div>

            <p className='text-[6vmin] lg:text-[4.5vmin] text-mainText font-bold'>Apply Now</p>
           
           </div>

           <div className="HorizontalLine flex justify-center items-center mt-4 ">
            <div className="line w-[90vw] md:w-[60vmin] border-headerUnderline border-t-[1px]"></div>
            </div> 
            <div className='flex flex-col gap-y-7 mt-5'>
            <input type="text" name="name" id="name" placeholder="Enter your name" className='bg-lightGrey text-[2.45vmin] w-[55vmin] p-2' />
            <input type="email" name="email" id="email"  placeholder="Enter your email"  className='bg-lightGrey text-[2.45vmin] w-[55vmin] p-2' />
            <input type="phone" name="phone" id="phone" placeholder='Enter your phone'  className='bg-lightGrey text-[2.45vmin] w-[55vmin] p-2' />
         
            <select className="bg-lightGrey  p-2 text-[2vmin]">
                    <option value="None">Which Category are you applying for?</option>
                    <option value="Talk to you later">Technical</option>
                    <option value="To be honest">Non Technical</option>
                </select>
                <input type="text" name="role" id="role"  placeholder="Enter your role"  className='bg-lightGrey text-[2.45vmin] w-[55vmin] p-2' />
            <div className="resumeHolder flex justify-center items-center border-dashed border-[2px] h-[20vmin]">
       
            <input type="file" class="form-control" id="inputGroupFile"/>
                </div>
            </div>


            <div className="buttonHolder mt-5">
                <button className='bg-deepViolet text-white p-2 rounded-md'>Apply Now</button>
            </div>
        </form>
        </div>
    </div>

    </div>
    <Footer />
   </>
  )
}

export default ApplyPortal
