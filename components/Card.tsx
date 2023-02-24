import sucess from "../assets/drops/sucess.png";
import Image from "next/image";

import { AiFillClockCircle, AiTwotoneCalendar } from "react-icons/ai";

import char1 from "../assets/Character/character1.png";
import char2 from "../assets/Character/character2.png";

function Card() {
  return (
    <>
      <div className="flex justify-center mt-3">
        <div className="block w-full rounded-lg bg-char1 bg-cover bg-center  shadow-lg">
          <div
            className="py-6"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(24px)",
              borderRadius: "8px",
            }}
          >
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <div>
                  <div className="flex">
                    <Image src={sucess} alt={""} />
                    <span className="flex justify-center items-center ml-2 text-sm  gap-1.5 bg-[#E4E4E4] px-1.5 rounded-md font-normal ">
                      <span>
                        <AiTwotoneCalendar />
                      </span>
                      <span className="pt-0.5 font-medium">It's Raining</span>
                    </span>
                    <span className="flex justify-center items-center gap-2 ml-4">
                      <span className="flex justify-center items-center">
                        <AiFillClockCircle className="text-gray-700 " />
                      </span>
                      <span className="text-gray-700 text-sm font-bold flex justify-center items-center pt-0.5">
                        Started
                      </span>
                      <span className="text-gray-500 text-sm font-thin pt-0.5">
                        2022-09-13 08:57:15
                      </span>
                    </span>
                  </div>
                  <div className="px-4 mt-4">
                    <div>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</div>
                    <div className="mt-1.5">
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "30px",
                          lineHeight: "30px",
                        }}
                      >
                        Water
                      </span>
                      <span className="font-normal text-sm ml-2">x 100</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-normal text-sm ">
                        Wallet Transactions:
                      </span>
                      <span>
                        <b>100</b> <span>Success</span>
                      </span>
                      <span>
                        <b>0</b> <span>Processing</span>
                      </span>
                      <span>
                        <b>0</b> <span>Failed</span>
                      </span>
                    </div>
                    <div className="mt-2 pr-12">
                      <div className="w-full h-4 mb-4 main-progrss">
                        <div className="progressbar" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-2.5">
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inline-block rounded-md bg-primary px-6 pt-2.5 pb-2 text-sm font-medium bg-black text-white"
                      >
                        More Details
                      </button>

                      <button
                        type="button"
                        className="inline-block rounded-md text-sm border-2 border-neutral-800 px-4 pt-2 pb-2  font-medium  leading-normal text-neutral-800 transition duration-150 ease-in-out "
                        data-te-ripple-init=""
                      >
                        Cancle
                      </button>

                      <div className="flex justify-start items-center ml-2">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 rounded-sm"
                        />
                        <span className="text-sm font-medium ml-2">
                          Receive report on email
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image src={char1} alt={""} className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="block w-full rounded-lg bg-char2 bg-cover bg-center  shadow-lg">
          <div
            className="py-6"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(24px)",
              borderRadius: "8px",
            }}
          >
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <div>
                  <div className="flex">
                    <Image src={sucess} alt={""} />
                    <span className="flex justify-center items-center ml-2 text-sm  gap-1.5 bg-[#E4E4E4] px-1.5 rounded-md font-normal ">
                      <span>
                        <AiTwotoneCalendar />
                      </span>
                      <span className="pt-0.5 font-medium">Harvest</span>
                    </span>
                    <span className="flex justify-center items-center gap-2 ml-4">
                      <span className="flex justify-center items-center">
                        <AiFillClockCircle className="text-gray-700 " />
                      </span>
                      <span className="text-gray-700 text-sm font-bold flex justify-center items-center pt-0.5">
                        Started
                      </span>
                      <span className="text-gray-500 text-sm font-thin pt-0.5">
                        2022-09-13 08:57:15
                      </span>
                    </span>
                  </div>
                  <div className="px-4 mt-4">
                    <div>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</div>
                    <div className="mt-1.5">
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "30px",
                          lineHeight: "30px",
                        }}
                      >
                        Manure
                      </span>
                      <span className="font-normal text-sm ml-2">x 100</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-normal text-sm ">
                        Wallet Transactions:
                      </span>
                      <span>
                        <b>44</b> <span>Success</span>
                      </span>
                      <span>
                        <b>44</b> <span>Processing</span>
                      </span>
                      <span>
                        <b>44</b> <span>Failed</span>
                      </span>
                    </div>
                    <div className="mt-2 pr-12">
                      <div className="w-full h-4 mb-4 main-progrss">
                        <div className="progressbar" style={{ width: "45%" }} />
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-2.5">
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inline-block rounded-md bg-primary px-6 pt-2.5 pb-2 text-sm font-medium bg-black text-white"
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image src={char2} alt={""} className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
