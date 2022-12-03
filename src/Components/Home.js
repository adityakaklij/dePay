import React from "react";
import moon from "../images/moon.svg";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <div className="bg-black overflow-x-clip p-10 w-full">
      <div className=" text-center pt-10 font-extrabold text-white ">
        <p className="p-5 text-[40px] ">
          <span className="text-[#00ADB5]">Decentralized</span> Payment Gateway
        </p>

        <div className="flex mt-10 gap-8">
          <div>
          <p className=" pr-[20px] border-b-4 pb-3 border-b-[#40f0f8] w-40 text-2xl font-bold ">
              About Us
            </p>
            <p className="font-semibold mt-5 max-w-[90%]" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. in culpa qui officia
              deserunt mollit anim id est laborum.Ut enim ad minim veniam Ut
              enim ad minim veniam, quis nostrud exercitation in culpa qui
              officia deserunt mollit anim id est laborum.Ut enim ad mini. ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. in culpa qui officia deserunt
              mollit anim id est laborum.Ut enim ad minim veniam ....
            </p>
          </div>
          <img
            src={moon}
            className="h-auto w-[400px]  m-auto pl-[-40%] rounded-xl flex items-center justify-center "
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
