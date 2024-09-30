import Card from "./Card";
import { SERVICE_OBJ } from "../Utils/Mock_Data";

const Services = () => {
  return (
    <>
      <div className="mt-6 md:mt-24 pb-5 ml-6">
        <p className="text-[7vmin] font-extrabold">Our Services</p>
        <div className="mt-6">
          <Card service={SERVICE_OBJ} />
        </div>
      </div>
    </>
  );
};
export default Services;
