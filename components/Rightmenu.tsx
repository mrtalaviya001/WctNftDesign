import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

function Rightmenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickBalance = () => {
    setIsOpen(true);
  };
  return (
    <div>
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
          <div className="text-xl m-5 font-normal">Saved Searches</div>
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
          <div className="text-xl m-5 font-normal">Recent Activity</div>
          <div className=" flex  m-5 justify-between  text-sm  ">
            <div className="text-[#707070] ">Settings &gt; Account</div>
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
  );
}

export default Rightmenu;
