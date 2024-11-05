import React from 'react'

const SideBlogCard = (props) => {
  return (
    <div className="sideBlogCardContainer">
        <div className="sideBlogCard flex gap-x-3 w-[60vmin] 2xl:w-[62vmin] pt-2 pl-1">
            <div className="imgHolder">
                <div className="imageHolder w-[27vmin] h-[27vmin]">
                    <img src={props.data.image} className='max-w-full max-h-full object-contain'/>
                </div>
            </div>
            <div className="textHolder flex flex-col gap-y-2">
               
                <p className="date text-red text-[2.1vmin]">{props.data.date}</p>
                 <p className="title font-bold text-[2.1vmin]">{props.data.title}</p>
      
                <div className="readMore text-textGrey">
                    <a href={props.data.link}>Read More...</a></div>
            </div>
        </div>
    </div>
  )
}

export default SideBlogCard
