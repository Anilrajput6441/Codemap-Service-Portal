import React from "react";

const SideBlogCard = (props) => {
  return (
    <div className="sideBlogCardContainer mt-6">
      <div className="sideBlogCard flex gap-x-3 w-[93%] 2xl:w-[92%] pt-2 pl-1">
        <div className="imgHolder">
          <div className="imageHolder w-[29vmin] h-[29vmin]">
            <img
              src={props.data.image}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="textHolder flex flex-col gap-y-2">
          <p className="date text-red text-[2.1vmin]">{props.data.date}</p>
          <p className="title font-bold text-[2.45vmin]">{props.data.title}</p>

          <div className="readMore text-textGrey  text-[2.1vmin]">
            <a href={props.data.link}>Read More...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBlogCard;
