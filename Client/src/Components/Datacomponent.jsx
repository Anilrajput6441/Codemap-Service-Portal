import { useEffect, useState } from "react";

const Datacomponent = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  const [members, setMembers] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (projects < 50) {
        setProjects(projects + 1);
      }
    }, 250);
    setTimeout(() => {
      if (clients < 25) {
        setClients(clients + 1);
      }
    }, 550);
    setTimeout(() => {
      if (members < 30) {
        setMembers(members + 1);
      }
    }, 450);
  }, [projects, clients, members]);
  return (
    <div>
      {screen.width < 760 && (
        <div className="boxHolder flex w-[87vw] h-[18vmin] mt-5 font-poppins pb-5 bg-deepViolet text-white">
          <div className="box1   w-[29vw] h-[20vmin]  pb-5 text-white">
            <div className="flex gap-x-1">
              <p className="font-medium text-[4.15vmin] p-1 ml-3 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-bold text-[4.1vmin] p-1 ml-7">50+</p>
          </div>
          <div className="vertcalLine h-12 w-1 mt-3 rounded-[4px] bg-white ml-[-2.45vmin]"></div>
          <div className="box2 w-[29vw]  h-[20vmin] pb-5 text-white">
            <div className="flex gap-x-1">
              <p className="font-medium text-[4.15vmin] p-1 ml-4  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-bold text-[4.1vmin] p-1 ml-8 ">40+</p>
          </div>
          <div className="vertcalLine h-12 w-1 mt-3 rounded-[4px] bg-white ml-[-2.45vmin]"></div>
          <div className="box3  h-[20vmin] pb-5 text-white">
            <div className="flex gap-x-1">
              <p className="font-medium text-[4.15vmin] p-1 ml-2 mt-1">
                Members:
              </p>
            </div>
            <p className="font-bold text-[4.1vmin] p-1 ml-2  ml-8 ">100+</p>
          </div>
        </div>
      )}

      {screen.width > 760 && screen.width < 1000 && (
        <div className="boxHolder flex w-[84vw] h-[16vmin] mt-5 font-poppins ml-8  bg-mainText text-white">
          <div className="textHolder flex justify-center items-center p-4 w-[33%]">
            <div className="box1 ml-8">
              <p className="text-[3.75vmin] font-bold ">Team</p>
              <p className="mt-1 ml-4 text-[3.45vmin]">50+</p>
            </div>
            <div className="vertcalLine h-20 w-[0.5px] rounded-[4px] bg-white ml-10"></div>
          </div>

          <div className="textHolder flex justify-center items-center p-2 w-[33%]">
            <div className="box1 ">
              <p className="text-[3.75vmin] font-bold  mr-4">Clients</p>
              <p className="mt-1 ml-8 text-[3.45vmin] ">40+</p>
            </div>
            <div className="vertcalLine h-20 w-[0.5px] rounded-[4px] bg-white ml-10"></div>
          </div>

          <div className="textHolder flex justify-center items-center  w-[33%]">
            <div className="box1 mr-12">
              <p className="text-[3.75vmin] font-bold ">Projects</p>
              <p className="mt-1 ml-6 text-[3.45vmin]">100+</p>
            </div>
          </div>
        </div>
      )}
      {screen.width >= 1000 && screen.width < 1280 && (
        <div className="boxHolder flex w-[84vmin] h-[18vmin] mt-5 font-poppins">
          <div className="box1 border-black border-[1px] w-[28vmin] h-[18vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/projects.png")}
                height={3}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[3.35vmin] p-1 ml-1 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-extrabold text-[4.25vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {projects}+
            </p>
          </div>
          <div className="box2 border-black border-[1px] h-[18vmin] w-[28vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/clients.png")}
                height={2}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[3.35vmin] p-1 ml-1  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-extrabold text-[4.25vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {clients}+
            </p>
          </div>
          <div className="box3 border-black border-[1px] h-[18vmin] w-[28vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/engineers.png")}
                height={5}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[3.35vmin] p-1 ml-1 mt-1">
                Members:
              </p>
            </div>
            <p className="font-extrabold text-[4.25vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {members}+
            </p>
          </div>
        </div>
      )}

      {screen.width >= 1280 && screen.width < 1500 && screen.height < 800 && (
        <div className="boxHolder flex w-[84vmin] h-[18vmin] mt-5 font-poppins">
          <div className="box1 border-black border-[0.5px] w-[28vmin] h-[18vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/projects.png")}
                height={3}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[3.35vmin] p-1 ml-1 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-extrabold text-[4.25vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {projects}+
            </p>
          </div>
          <div className="box2 border-black border-[0.5px] h-[18vmin] w-[28vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/clients.png")}
                height={2}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[3.35vmin] p-1 ml-1  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-extrabold text-[4.25vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {clients}+
            </p>
          </div>
          <div className="box3 border-black border-[0.5px] h-[18vmin] w-[28vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/engineers.png")}
                height={5}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[3.35vmin] p-1 ml-1 mt-1">
                Members:
              </p>
            </div>
            <p className="font-extrabold text-[4.25vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {members}+
            </p>
          </div>
        </div>
      )}

      {screen.width >= 1280 && screen.width < 1500 && screen.height >= 800 && (
        <div className="boxHolder flex w-[76vmin] h-[18vmin] mt-5 border-[1px] bg-[#6e41c6] text-white rounded-[1.5vmin] ml-4">
          <div className="textHolder flex justify-center items-center p-4 w-[33%]">
            <div className="box1 ml-4">
              <p className="text-[3.75vmin] font-bold ">Team</p>
              <p className="mt-1 ml-4 text-[3.45vmin]">50+</p>
            </div>
            <div className="vertcalLine h-20 w-1 rounded-[4px] bg-white ml-10"></div>
          </div>

          <div className="textHolder flex justify-center items-center p-2 w-[33%]">
            <div className="box1 ">
              <p className="text-[3.75vmin] font-bold  mr-3 ">Clients</p>
              <p className="mt-1 ml-6 text-[3.45vmin] ">40+</p>
            </div>
            <div className="vertcalLine h-20 w-1 rounded-[4px] bg-white ml-10"></div>
          </div>

          <div className="textHolder flex justify-center items-center  w-[33%]">
            <div className="box1 mr-10">
              <p className="text-[3.75vmin] font-bold ">Projects</p>
              <p className="mt-1 ml-4 text-[3.45vmin]">100+</p>
            </div>
          </div>
        </div>
      )}

      {screen.width >= 1500 && screen.width < 1919 && (
        <div className="boxHolder flex w-[80vmin] h-[18vmin] mt-5 border-[1px] bg-[#6e41c6] text-white rounded-[1.5vmin]">
          <div className="textHolder flex justify-center items-center p-4 w-[33%]">
            <div className="box1 ml-4">
              <p className="text-[3.75vmin] font-bold ">Team</p>
              <p className="mt-1 ml-4 text-[3.45vmin]">50+</p>
            </div>
            <div className="vertcalLine h-20 w-1 rounded-[4px] bg-white ml-10"></div>
          </div>

          <div className="textHolder flex justify-center items-center p-2 w-[33%]">
            <div className="box1 ">
              <p className="text-[3.75vmin] font-bold  mr-7 ">Clients</p>
              <p className="mt-1 mr-5 ml-6 text-[3.45vmin] ">40+</p>
            </div>
            <div className="vertcalLine h-20 w-1 rounded-[4px] bg-white ml-10"></div>
          </div>

          <div className="textHolder flex justify-center items-center  w-[33%]">
            <div className="box1 mr-10">
              <p className="text-[3.75vmin] font-bold ">Projects</p>
              <p className="mt-1 ml-5 text-[3.45vmin]">100+</p>
            </div>
          </div>
        </div>
      )}

      {screen.width >= 1919 && screen.width < 2047 && (
        <div className="boxHolder flex w-[80vmin] h-[18vmin] mt-5 border-[1px] bg-[#6e41c6] text-white rounded-[1.5vmin]">
          <div className="textHolder flex justify-center items-center p-4 w-[33%]">
            <div className="box1 ml-4">
              <p className="text-[3.75vmin] font-bold ml-5 ">Team</p>
              <p className="mt-1 ml-10 text-[3.45vmin]">50+</p>
            </div>
            <div className="vertcalLine h-28 w-2 rounded-[4px] bg-white ml-16"></div>
          </div>

          <div className="textHolder flex justify-center items-center p-2 w-[33%]">
            <div className="box1 ">
              <p className="text-[3.75vmin] font-bold  mr-9 ml-2  ">Clients</p>
              <p className="mt-1 mr-6 ml-8 text-[3.45vmin] ">40+</p>
            </div>
            <div className="vertcalLine h-28 w-2 rounded-[4px] bg-white ml-12 mr-4"></div>
          </div>

          <div className="textHolder flex justify-center items-center  w-[33%]">
            <div className="box1 mr-10">
              <p className="text-[3.75vmin] font-bold mr-6">Projects</p>
              <p className="mt-1 ml-5 text-[3.45vmin] mr-4">100+</p>
            </div>
          </div>
        </div>
      )}

      {screen.width >= 2047 && (
        <div className="boxHolder flex w-[80vmin] h-[18vmin] mt-5 border-[1px] bg-deepViolet text-white rounded-[1.5vmin]">
          <div className="textHolder flex justify-center items-center p-4 w-[33%]">
            <div className="box1 ml-4">
              <p className="text-[3.75vmin] font-bold ml-5 ">Team</p>
              <p className="mt-1 ml-10 text-[3.45vmin]">50+</p>
            </div>
            <div className="vertcalLine h-32 w-2 rounded-[4px] bg-white ml-16"></div>
          </div>

          <div className="textHolder flex justify-center items-center p-2 w-[33%]">
            <div className="box1 ">
              <p className="text-[3.75vmin] font-bold  mr-9 ml-2  ">Clients</p>
              <p className="mt-1 mr-6 ml-10 text-[3.45vmin] ">40+</p>
            </div>
            <div className="vertcalLine h-32 w-2 rounded-[4px] bg-white ml-12 mr-4"></div>
          </div>

          <div className="textHolder flex justify-center items-center  w-[33%]">
            <div className="box1 mr-10">
              <p className="text-[3.75vmin] font-bold mr-6">Projects</p>
              <p className="mt-1 ml-8 text-[3.45vmin] mr-4">100+</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Datacomponent;
