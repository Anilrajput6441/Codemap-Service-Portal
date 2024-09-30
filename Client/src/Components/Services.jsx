import Card from "./Card";
import { SERVICE_OBJ } from "../Utils/Mock_Data";

const Services = () => {
  return (
    <>
      <div className="mt-6 md:mt-21 pb-5 ml-2 md:ml-6">
        <p className="text-[9vmin] font-extrabold">
          <span className="text-mainText">Our</span> Services
        </p>
        <div className="mt-8 flex justify-center items-center">
          <Card />
        </div>
      </div>
    </>
  );
};
export default Services;
