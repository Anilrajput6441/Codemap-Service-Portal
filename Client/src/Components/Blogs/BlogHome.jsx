import React from 'react'
import SideBlogCard from './SideBlogCard';

const BlogHome = () => {

  const apiResponse=[
    {
      image: require("../../../assets/clientrelations.jpeg"),
      title: 'How to manage stable and long term client relationship?',
      date: 'November 12, 2024',
      Link: '/mainBlogs',
    },
    {
      image: require("../../../assets/ecom.jpg"),
      title: 'Get a Modern ecommerce web app with Codemap',
      date: 'November 20, 2024',
      Link: '/mainBlogs',
    },
    {
      image: require("../../../assets/customer-service.jpg"),
      title: 'How and what is customer service in the agency business?',
      date: 'November 27, 2024',
      Link: '/mainBlogs',
    },
  ]
  return (
    <div className='w-[100vw]  flex flex-col pl-6 2xl:pl-8 pr-4 pt-8 pb-8'>
      <div className='headerArea'>
        <p className='text-center text-[8vmin] font-extrabold '>Our <span className='text-mainText font-extrabold'>Blogs</span></p>
        <p className='text-center pl-3 text-textGrey m text-[2.75vmin]'>Get the latest tech and business  blogs by Codemap’s team</p>
      </div>
      <div className='flex w-[100vw]   pl-4 pr-4 pt-8 pb-8 mt-6'>
       <div className="mainArea  w-[55vw]">
         <div className="mainBlogCardHolder flex flex-col justify-center items-center w-[55vw]  p-4 pb-7 2xl:gap-y-9">
          <div className="mainBlogCard flex flex-col justify-center">
          {screen.width<1700 &&
          <div className="imageArea  w-[55vw] h-[42vmin] 2xl:h-[57vmin] pl-4">
                <img src={require("../../../assets/PM5.webp")} className='max-w-full max-h-full object-contain' />
          </div>
          }
            {screen.width>1700 && screen.width<=1900 &&
          <div className="imageArea  w-[55vw] h-[42vmin] 2xl:h-[45vmin] pl-4">
                <img src={require("../../../assets/PM5.webp")} className='max-w-full max-h-full object-contain' />
          </div>
          }
          {screen.width>1900 &&
          <div className="imageArea  w-[55vw] h-[42vmin] 2xl:h-[52vmin] pl-4">
                <img src={require("../../../assets/PM5.webp")} className='max-w-full max-h-full object-contain' />
          </div>
          }
          <div className="dateArea"><p className='text-[#FF0000] text-[2.45vmin] pl-3 mt-3 p-2'>November 12,2024
          </p></div>
          <div className="blogTitleArea"><p className="font-bold text-[4.35vmin] pl-3 font-poppins">What is Project Management in our software industry ?</p></div>
          <div className="readMoreArea pl-3 text-textGrey mt-3 text-[2.15vmin]">Read more...</div>
         </div>
       </div>
       
       </div>
       
       <div className="sideArea flex gap-y-9 w-[40vw]  pl-3 ml-4 2xl:ml-3 2xl:pl-6">
         <ul>
          {apiResponse.map((val,index)=>(
                   <SideBlogCard data={val}/>
          ))
         
          }
         </ul>
       </div>
    </div>
    </div>
  )
}

export default BlogHome;
