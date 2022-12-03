import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
// import "../App.css";
// import "../css/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [connectIs, setConnectIs] = useState("Connect");

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    //   Connect()
  });

  async function Connect() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const myAddress = await signer.getAddress();
    // setMainAddress(myAddress)
    setConnectIs("Connected");
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-gradient-to-bl from-white to-[#82c1c7] h-15 py-[10px] px-[23px]">
      <div className="flex justify-between items-center max-w-[97%] h-full px-2 2xl:px-16">
        <div className=" text-center font-extrabold text-white ">
          <p className="px-5 text-[40px] ">
            <span className="text-black">De</span>
            <span className="text-[#175f64df]">Pay</span>
          </p>
        </div>

        <ul className="hidden md:flex">
          <li className="ml-10 text-base pt-2 text-black uppercase  hover:text-[#00ADB5]">
            <a className="" aria-current="page" href="/">
              Home
            </a>
          </li>

          <li className="ml-10 text-base pt-2 uppercase hover:text-[#00ADB5]">
            <a className="nav-link" href="/Deploy">
              Deploy
            </a>
          </li>

          <li className="ml-10 text-base pt-2 uppercase hover:text-[#00ADB5]">
            <a className="nav-link" href="/Analytics">
              Analytics
            </a>
          </li>

          <li className="ml-10 shadow-gray-700 shadow-md text-sm font-semibold text-white uppercase bg-[#5627FF] p-2   rounded-full ">
            <a className="nav-link" href="/API">
              Address
            </a>
          </li>

          {/* <li className="nav-item">
                        <a className="nav-link" >View Tickets</a>
                    </li> */}
        </ul>
      </div>
    </div>
  );
}
