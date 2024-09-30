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
        <div className="boxHolder flex w-[87vw] h-[18vmin] mt-5 font-poppins">
          <div className="box1 border-black border-[0.5px] w-[29vw] h-[19vmin] pb-4">
            <div className="flex gap-x-1">
              <p className="font-medium text-[4vmin] p-1 ml-1 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-extrabold text-[5vmin] p-1 ml-2  ml-4 text-mainText">
              {projects}+
            </p>
          </div>
          <div className="box2 border-black border-[0.5px] h-[19vmin] w-[29vw] pb-6">
            <div className="flex gap-x-1">
              <p className="font-medium text-[4vmin] p-1 ml-1  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-extrabold text-[5vmin] p-1 ml-2 ml-4 text-mainText">
              {clients}+
            </p>
          </div>
          <div className="box3 border-black border-[0.5px] h-[19vmin] w-[29vw] pb-6">
            <div className="flex gap-x-1">
              <p className="font-medium text-[4vmin] p-1 ml-1 mt-1">Members:</p>
            </div>
            <p className="font-extrabold text-[5vmin] p-1 ml-2  ml-4 text-mainText">
              {members}+
            </p>
          </div>
        </div>
      )}

      {screen.width > 760 && screen.width < 1000 && (
        <div className="boxHolder flex w-[87vw] h-[16vmin] mt-5 font-poppins ml-4">
          <div className="box1 border-black border-[1px] w-[29vw] h-[16vmin] pb-4">
            <div className="flex gap-x-1">
              <p className="font-medium text-[3vmin] p-1 ml-1 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-extrabold text-[4.45vmin] p-1 ml-2 mt-1 ml-4 text-mainText">
              {projects}+
            </p>
          </div>
          <div className="box2 border-black border-[1px] h-[16vmin] w-[29vw] pb-6">
            <div className="flex gap-x-1">
              <p className="font-medium text-[3vmin] p-1 ml-1  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-extrabold text-[4.45vmin] p-1 ml-2 mt-1 ml-4 text-mainText">
              {clients}+
            </p>
          </div>
          <div className="box3 border-black border-[1px] h-[16vmin] w-[29vw] pb-6">
            <div className="flex gap-x-1">
              <p className="font-medium text-[3vmin] p-1 ml-1 mt-1">Members:</p>
            </div>
            <p className="font-extrabold text-[4.45vmin] p-1 ml-2 mt-1 ml-4 text-mainText">
              {members}+
            </p>
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
        <div className="boxHolder flex w-[72vmin] h-[18vmin] mt-5 font-poppins">
          <div className="box1 border-black border-[0.5px] w-[24vmin] h-[14vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/projects.png")}
                height={3}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-1 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {projects}+
            </p>
          </div>
          <div className="box2 border-black border-[0.5px] h-[14vmin] w-[24vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/clients.png")}
                height={2}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-1  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {clients}+
            </p>
          </div>
          <div className="box3 border-black border-[0.5px] h-[14vmin] w-[24vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/engineers.png")}
                height={5}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-1 mt-1">
                Members:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {members}+
            </p>
          </div>
        </div>
      )}

      {screen.width >= 1500 && screen.width < 2047 && (
        <div className="boxHolder flex w-[72vmin] h-[18vmin] mt-5 font-poppins">
          <div className="box1 border-black border-[0.5px] w-[24vmin] h-[14vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/projects.png")}
                height={3}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-1 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {projects}+
            </p>
          </div>
          <div className="box2 border-black border-[0.5px] h-[14vmin] w-[24vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/clients.png")}
                height={2}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-1  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {clients}+
            </p>
          </div>
          <div className="box3 border-black border-[0.5px] h-[14vmin] w-[24vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/engineers.png")}
                height={5}
                width={30}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-1 mt-1">
                Members:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {members}+
            </p>
          </div>
        </div>
      )}

      {screen.width >= 2047 && (
        <div className="boxHolder flex w-[72vmin] h-[18vmin] mt-5 font-poppins">
          <div className="box1 border-black border-[0.5px] w-[24vmin] h-[14vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/projects.png")}
                height={10}
                width={36}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-2 mt-1">
                Projects:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-3 ml-4 text-mainText">
              {projects}+
            </p>
          </div>
          <div className="box2 border-black border-[0.5px] h-[14vmin] w-[24vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/clients.png")}
                height={10}
                width={36}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-2  mt-1">
                Clients:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-3 ml-4 text-mainText">
              {clients}+
            </p>
          </div>
          <div className="box3 border-black border-[0.5px] h-[14vmin] w-[24vmin]">
            <div className="flex gap-x-1">
              <img
                src={require("../../assets/engineers.png")}
                height={20}
                width={36}
                className="mt-2 ml-2"
              />
              <p className="font-medium text-[2.45vmin] p-1 ml-2 mt-1">
                Members:
              </p>
            </div>
            <p className="font-extrabold text-[4vmin] p-1 ml-2 mt-2 ml-4 text-mainText">
              {members}+
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Datacomponent;
