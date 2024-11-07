import React from 'react'



const BlogsCard = (props) => {
  return (
    <div className="blogsArea w-[80vw]  md:w-[44vmin] lg:w-[55vmin] l  md:ml-2 border-headerUnderline border-[1px] p-2">
        <div className="imageHolder w-[82vw] h-[48vmin] md:w-[44vmin] md:h-[27vmin]  lg:w-[55vmin] lg:h-[34vmin] ml-2 md:ml-1">
            <img src={props.data.image}
              className='max-w-full max-h-full object-contain'/>
        </div>

        <div className="TextHolder ml-2">
                <div className="date text-red mt-3 text-[2.45vmin]"><p>{props.data.date}</p></div>
                <div className="title mt-2 text-[3.4vmin]  md:text-[2.85vmin] font-extrabold font-poppins"><p>{props.data.title}</p></div>
        </div>

        <div className="readMore  h-[5vmin] flex justify-end text-textGrey text-[2.75vmin] md:text-[2.45vmin] mt-4">
            <a href={props.data.link}>read more...</a>
        </div>


    </div>
  )
}

export default BlogsCard
