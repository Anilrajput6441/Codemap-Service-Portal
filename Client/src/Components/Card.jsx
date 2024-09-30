const Card = (props) => {
  return (
    <>
      <div className="card flex flex-col justify-center pl-3 md:pl-4 w-[90vw] h-[75vmin]  md:w-[45vmin] border-[#d0cfcf] border-[1px] md:h-[54vmin] gap-y-2  pr-1">
        <div className="imageHolder">
          <img
            src={require("../../assets/android.png")}
            height={110}
            width={110}
          />
        </div>
        <div className="titleHolder">
          <p className="font-bold text-[5vmin] text-mainText ">
            Android Development
          </p>
        </div>
        <div className="captionBody">
          <p className="mt-2">
            We provide one-stop android development services to our clients.
          </p>
        </div>
        <div className="buttonHolder">
          <button className="bg-mainText text-white p-2 rounded-md mt-2">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
