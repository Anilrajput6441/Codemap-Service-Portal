import Card from "./Card";

const Services = () => {
  const servicesObj = [
    {
      title: "Website Development",
      descr:
        "Top notch web development services give us a chance to make your business come online",
    },
    {
      title: "Android Development",
      descr:
        "Have an app idea then no wait give us a chance to make your app idea into reality with our services",
    },
    {
      title: "Custom  Development",
      descr:
        "Custom software development solutions from  Hostel Management systems to custom ERP solutions",
    },
  ];
  return (
    <>
      <div className="bg-backgroundMain mt-[4vmin]  pb-20 pt-12">
        <p className="text-[8vmin] font-extrabold text-center font-poppins">
          Our <span className="text-mainText"> Services</span>
        </p>
        <p className=" text-textGrey text-[3.5vmin] md:text-[2.45vmin] w-[100%] text-center p-3 mt-[-1vmin]">
          We have a mission to provide top quality and affordable services to
          our clients
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-8 md:gap-y-5 mt-10 pl-5 pr-5">
          {servicesObj.map((val, index) => (
            <Card data={servicesObj[index]} type="Service" />
          ))}
        </div>
      </div>
    </>
  );
};
export default Services;
