import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Homepage from "../assets/Logo/CD Home.png"

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-4">
        <Navbar />
      </div>
      <div >
        <Image src={Homepage} alt="Logo" className="w-full" />
      </div>
    </>
  );
};

export default Home;
