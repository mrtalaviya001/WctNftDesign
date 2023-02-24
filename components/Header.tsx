import Image from "next/image";
import React from "react";
import NFT from "../assets/Header/NFT.png";
import Round from "../assets/Header/Round.png";
import Rectangle from "../assets/Header/Rectangle.png";
import Trade from "../assets/Header/Trade.png";
import Sales from "../assets/Header/Sales.png";

const Header = () => {
  return (
    <header className="mt-4">
      <div>
        <div className="grid grid-cols-5 pl-2  gap-4 ">
          <div className="bg-[#c0eec0] flex justify-center items-center h-[151px] rounded-md ">
            <Image src={NFT} alt={""} className="cursor-pointer" />
          </div>

          <div className="bg-[#fdf7d5] flex justify-center items-center h-[151px] rounded-md ">
            <Image src={Round} alt={""} className="cursor-pointer" />
          </div>
          <div className="bg-[#d6f3f8] flex justify-center items-center h-[151px] rounded-md ">
            <Image src={Rectangle} alt={""} className="cursor-pointer" />
          </div>
          <div className="bg-[#eddbf4] flex justify-center items-center h-[151px] rounded-md ">
            <Image src={Trade} alt={""} className="cursor-pointer" />
          </div>
          <div className="bg-[#fcdcef] flex justify-center items-center h-[151px] rounded-md ">
            <Image src={Sales} alt={""} className="cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-5 mt-1  gap-4 mb-6">
          <div className=" flex font-bold justify-center items-start  ">
            NFT Management
          </div>
          <div className=" flex font-bold justify-center items-start">
            Find Holders
          </div>
          <div className=" flex font-bold justify-center items-start">
            Airdrop
          </div>
          <div className=" flex font-bold justify-center items-start">
            Trade-in
          </div>
          <div className=" flex font-bold justify-center items-start">
            Sales
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
