import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import Rightmenu from "../components/Rightmenu";

const Home: NextPage = () => {
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
                <Rightmenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
