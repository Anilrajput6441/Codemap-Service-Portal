import Card from "./Card";

const Services = () => {
  const servicesObj = [
    {
      image: "../../assets/android.png",
      title: "Android Development",
      descr:
        "We provide top-notch android development services to our clients.",
    },
    {
      image: "../../assets/webd.png",
      title: "Website Development",
      descr:
        "We provide top-notch android development services to our clients.",
    },
    {},
  ];
  return (
    <>
      <div className="mt-3 pb-5 ml-2 md:ml-6">
        <p className="text-[8vmin] font-extrabold">
          <span className="text-mainText">Our</span> Services
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-20 gap-y-8 md:gap-y-6">
          {servicesObj.map((val, index) => (
            <Card data={servicesObj[index]} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Services;
