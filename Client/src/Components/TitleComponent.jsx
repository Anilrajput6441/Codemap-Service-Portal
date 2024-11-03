import React from 'react'

const TitleComponent = (props) => {

  const word1=props.title.split(" ")[0];
  const word2=props.title.split(" ")[1];
  const slogan=props.slogan;

  return (
    <>
    <div className="w-[100vw] h-[45vmin] flex flex-col gap-y-2 justify-center items-center bg-backgroundMain">
        <p className='font-extrabold text-[11vmin]  mt-[-3.75vmin] mt-[-1vmin]'>{word1}<span className='text-mainText'>&nbsp;{word2}</span></p>
        <p className='text-[3.45vmin] md:text-[2.65vmin] text-mainText lg:mt-2 text-center'>( {slogan} )</p>
    </div>

    </>
  )
}

export default TitleComponent
