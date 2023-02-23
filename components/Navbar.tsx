import Image from "next/image";
import React from "react";
import logo from "../assets/Logo/logo.png";
import bell from "../assets/Icon/bell.png";
import bag from "../assets/Icon/bag.png";
import user from "../assets/Icon/user.png";
import slash from "../assets/Icon/slash.png";
import { AiOutlineSearch, AiTwotoneBell } from "react-icons/ai";
import { BsSlashSquareFill } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <nav className="bg-[#fff]">
        <div className=" px-2 ">
          <div className="flex items-center h-16">
            <div className="flex-shrink-0">
              <Image className="w-[165.31px] h-[38px]" src={logo} alt="Logo" />
            </div>
            <div className="mx-4">
              <div className="flex items-baseline space-x-4">
                <a
                  href="#"
                  className="relative text-black   px-3 py-2 rounded-md text-lg font-bold"
                >
                  Dashboard
                  <span className="absolute bottom-[4px] left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1.5 w-1.5 bg-orange-500 rounded-full" />
                </a>
                <a
                  href="#"
                  className="relative text-gray-600 px-3 py-2 mx-0 text-lg font-normal"
                >
                  Create
                </a>
                <a
                  href="#"
                  className="relative text-gray-600 px-3 py-2 mx-0 text-lg font-normal"
                >
                  Marketplace
                  <span className="absolute bottom-[4px] font-medium  left-1/2 transform -translate-x-1/2 px-3 translate-y-1/2 w-full text-start text-xs text-red-500 nowrap">
                    Coming Soon
                  </span>
                </a>
                <a
                  href="#"
                  className="relative text-gray-600 px-3 py-2 mx-0 text-lg font-normal"
                >
                  Learn
                </a>
              </div>
            </div>
            <div className="w-[705px]">
              <div className="relative w-full border border-gray-300 rounded-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <AiOutlineSearch className="text-gray-500" />
                </div>
                <input
                  className="block w-full pl-9 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="text"
                  placeholder="Find Holders"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Image src={slash} alt={""} className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="ml-10 mr-10 ">
              <div className="">
                <span className="inline-flex items-center px-3 py-1.5 rounded-[4px] text-xs bg-[#3CAA2A33] text-[#3CAA2A] font-bold">
                  <span className="h-1.5 w-1.5 bg-[#3CAA2A] rounded-full flex-shrink-0" />
                  <span className="ml-1">STATUS</span>
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Image src={bell} alt={""} className="cursor-pointer" />
              <Image src={bag} alt={""} className="cursor-pointer" />
              <Image src={user} alt={""} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
