import React from "react";
import qr from "../images/qr.jpg";

function Analytics() {
  return (
    <div className="text-center h-screen pt-10 bg-black text-white font-semibold items-center justify-between ">
      <div className="">
        <h1 className="border-b-4 pb-3 justify-start items-start ml-[-10%] max-w-[35%] border-b-[#40f0f8] text-2xl ">
          Analytics
        </h1>

        <div className=" justify-center items-center text-black flex mt-10 mb-[40px] ">
          <div className="p-[40px] bg-[#ecf0f3] max-w-[800px] flex sm:w-full  sm:h-[378] md:grid grid-flow-col-dense shadow-lg  shadow-slate-500  rounded-3xl ">
            <div className=" max-w-[583.333px] max-h-[298px]">
              <div className=" w-full flex">
                <label className=" font-bold  " for="cars">
                  <p className=" rounded-lg font-inter font-bold border-x-2 border-y-2 cursor-pointer border-gray-600 text-black  p-2 px-[16px]">
                    Total Orders :
                  </p>
                </label>
              </div>

              {/* Select the token */}
              <div className=" w-full mt-5 ">
                <label className=" mx-3 font-bold  " for="cars">
                  <p className=" rounded-lg font-inter font-bold border-x-2 border-y-2 cursor-pointer border-gray-600 text-black  p-2 px-[16px]">
                    Total Turnover :
                  </p>
                </label>
                <div className="flex">
                  <p className="mr-5">USDT : {}</p>
                  <p className="mx-5">SHM : {}</p>
                  <p className="mx-5">TFIL : {}</p>
                </div>
              </div>

              {/* <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full"> */}
              <div className=" items-center w-full  ">
                <p className="text-base  text-gray-300 h-auto"></p>
              </div>
              <div className="flex pt-6 items-start justify-between text-start place-items-start w-full ">
                <div className="w-full h-full flex">
                <label className="mt-3 font-bold  " for="cars">
                  <p className=" rounded-lg font-inter font-bold border-x-2 border-y-2 cursor-pointer border-gray-600 text-black  p-2 px-[16px]">
                    Chain Transaction :
                  </p>
                </label>
                </div>
              </div>
            </div>
            <div className="ml-4 w-[150px] h-[150px]">
              <img src={qr} alt="/QR" className=" " />
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
}

export default Analytics;
