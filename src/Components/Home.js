import React from "react";
import moon from "../images/moon.svg";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <div className="bg-black h-full overflow-auto p-10 w-full">
      <div className=" text-center pt-10 font-extrabold text-white ">
        <p className="p-5 text-[40px] ">
          <span className="text-[#00ADB5]">Decentralized</span> Payment Gateway
        </p>

        {/* <div className="flex mt-10 gap-8"> */}
        <div className="flex mt-10">
          <div>
          <p className=" pr-[20px] border-b-4 pb-3 border-b-[#40f0f8] w-40 text-2xl font-bold ">
              About Us
            </p>
            <br />
              <h2>Decentralise Payment Gateway </h2>
            <p className="font-semibold mt-5 max-w-[90%]  text-78px" >
<br />


              dePay is a unified payment getaway that gives us a seamless, secure and decentralise gateway with end-to-end <br/>  <br />
       


                Easiest integration, One-click Smart Contract deployment on a plethora of blockchains.  <br/> <br />
              dePay system is designed to handle end-to-end crypto payments. <br/> <br />

              It has a powerful dashboard for business analytics, 100% reliable, secure and completely decentralise payment gateway power by blockchain technology. <br/> <br />
              
              Get payment notifications to individual businesses with PUSH protocol and telegram bots.
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
