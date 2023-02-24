import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Homepage from "../assets/Logo/CD Home.png";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="mx-4">
          <Navbar />
          <Header />
        </div>
        <div className="bg-[#F5F5F5]">
          <div className="mx-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <p className="HeadingTag">Events</p>
              </div>
              <div className="...">
                <p className="HeadingTag">Overview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image src={Homepage} alt="Logo" className="w-full" />
      </div>
    </>
  );
};

export default Home;
