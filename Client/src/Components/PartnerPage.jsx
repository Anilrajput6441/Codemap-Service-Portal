import React from 'react'
import RevolvingHeader from './RevolvingHeader'
import Header from './Header'
import Footer from './Footer'
import TitleComponent from './TitleComponent'
const PartnerPage = () => {
  return (
    <>
      
    {
        screen.width>1000 && 
    
        <RevolvingHeader />
    }

      <Header />

      {screen.width>1000 &&

      <div className="mainBody w-[100vw] h-[100vh] bg-backgroundMain flex flex-wrap pb-10">
        <div className="left w-[50vw]  flex justify-center items-center">
              <div className="imageHolder w-[100vw] md:w-[40vw] md:h-[70vh] 2xl:w-[36vw] mt-[-2vmin]">
                  <img src={require('../../assets/company3.jpeg')} alt="partnerIcon" className='max-w-full max-h-full object-contain' />
              </div>
          </div>
          <div className="right w-[50vw] flex ">
          
          {screen.width < 1700 && (
          <div className="w-[50vw] flex flex-col  items-start gap-y-10  ml-[10vmin] mt-[5.15vmin] ">
                  <div className="formHolder w-[35vw] bg-white p-6 rounded-[1vmin]">
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
                        <option value="Talk to you later">Lead Generation</option>
                        <option value="To be honest">Technology Outsourcing</option>
                        <option value=" I don’t know">Digital Marketing</option>
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

<div className="w-[50vw] flex flex-col gap-y-10   ml-[3vmin] mt-[6vmin]">
<div className="formHolder w-[36vw] bg-white p-7">
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
      <div className="w-[50vw] flex flex-col gap-y-10   ml-[8vmin] mt-[8vmin]">
      <div className="formHolder w-[33vw] bg-white p-8">
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
        <div className="w-[50vw] flex flex-col gap-y-14   ml-[12vmin] mt-[13vmin]">
        <div className="formHolder w-[30vw] bg-white p-6">
          <p className="text-[4vmin] font-bold">Contact us</p>
          <p className="text-mainText mt-[0.75px]">
            {" "}
            ( Get Flat 20% discount on your first order )
          </p>
          <form className="flex flex-col gap-y-12 p-3 mt-5 text-[2.05vmin]">
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

          </div>
        
      </div>
    }
    {
      screen.width<=1000 &&

      <TitleComponent title="Partnership Page" slogan="Partner with one of the best software development agency in India" />
    }

      <Footer />
    </>
  )
}

export default PartnerPage
