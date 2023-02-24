import type { NextPage } from "next";
import { useState } from "react";
import sucess from "../assets/drops/sucess.png";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Homepage from "../assets/Logo/CD Home.png";
import Header from "../components/Header";
import { AiFillClockCircle, AiTwotoneCalendar } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import char1 from "../assets/Character/character1.png";
import char2 from "../assets/Character/character2.png";
import Card from "../components/Card";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickBalance = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div>
        <div className="mx-4 ">
          <Navbar />
          <Header />
        </div>
        <div className="bg-[#F5F5F5]">
          <div className="mx-5">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3 mt-5">
                <p className="HeadingTag">Events</p>
                <Card />
              </div>
              <div className="mt-5">
                <p className="HeadingTag">Overview</p>
                <div className="grid grid-rows-1 mt-2 grid-flow-col ">
                  <div className="bg-white shadow-md border rounded-md">
                    <div className="flex  justify-between  text-sm">
                      <div className="text-[#707070] m-3 "> Wallet balance</div>
                      <div className="flex  justify-between items-center">
                        <div className="font-normal">0.489 ETH</div>
                        {!isOpen ? (
                          <button
                            className="transition duration-500"
                            onClick={handleClickBalance}
                          >
                            <div>
                              <BsChevronRight className=" mr-2 ml-2 text-[#707070]" />
                            </div>
                          </button>
                        ) : (
                          <button onClick={() => setIsOpen(!isOpen)}>
                            <div>
                              <BsChevronDown className=" mr-2 ml-2 text-[#707070]" />
                            </div>
                          </button>
                        )}
                      </div>
                    </div>

                    {isOpen ? (
                      <div>
                        <div className="flex  justify-between  text-sm">
                          <div className="text-[#707070] m-3 ">Item 1</div>
                        </div>
                        <div className="flex  justify-between  text-sm">
                          <div className="text-[#707070] m-3 ">Item 2</div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="grid grid-rows-1 mt-4 grid-flow-col ">
                  <div className="bg-white shadow-md border rounded-md">
                    <div className="text-xl m-5 font-semibold">NFTs</div>
                    <div className=" flex  m-5 justify-between  text-sm  ">
                      <div className="text-[#707070] "> NFT items</div>
                      <div className="flex  justify-between items-center">
                        <div className="font-normal">187</div>
                        <div className="">
                          <BsChevronRight className="  ml-2 text-[#707070]" />
                        </div>
                      </div>
                    </div>
                    <div className=" flex  m-5 justify-between  text-sm  ">
                      <div className="text-[#707070] ">Collections</div>
                      <div className="flex  justify-between  items-center">
                        <div className="font-normal">5</div>
                        <div className="">
                          <BsChevronRight className="  ml-2 text-[#707070]" />
                        </div>
                      </div>
                    </div>
                    <div className=" flex  m-5 justify-between  text-sm  ">
                      <div className="text-[#707070] ">Minted</div>
                      <div className="flex  justify-between items-center">
                        <div className="font-normal">39</div>
                        <div className="">
                          <BsChevronRight className="  ml-2 text-[#707070]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-1 mt-4 grid-flow-col ">
                  <div className="bg-white shadow-md border rounded-md">
                    <div className="text-xl m-5 font-normal">
                      Saved Searches
                    </div>
                    <div className=" flex  m-5 justify-between  text-sm  ">
                      <div className="text-[#707070] ">Green apple</div>
                      <div className="flex  justify-between items-center">
                        <div className="">
                          <BsChevronRight className="  ml-2 text-[#707070]" />
                        </div>
                      </div>
                    </div>
                    <div className=" flex  m-5 justify-between  text-sm  ">
                      <div className="text-[#707070] ">Christmas tree</div>
                      <div className="flex  justify-between  items-center">
                        <div className="">
                          <BsChevronRight className=" ml-2 text-[#707070]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-1 mt-4 grid-flow-col ">
                  <div className="bg-white shadow-md border rounded-md">
                    <div className="text-xl m-5 font-normal">
                      Recent Activity
                    </div>
                    <div className=" flex  m-5 justify-between  text-sm  ">
                      <div className="text-[#707070] ">
                        Settings &gt; Account
                      </div>
                      <div className="flex  justify-between items-center">
                        <div className="">
                          <BsChevronRight className=" ml-2 text-[#707070]" />
                        </div>
                      </div>
                    </div>
                    <div className=" flex  m-5 justify-between  text-sm  ">
                      <div className="text-[#707070] ">Sales reports</div>
                      <div className="flex  justify-between  items-center">
                        <div className="">
                          <BsChevronRight className=" ml-2 text-[#707070]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
