import React from "react";
import Hero from "../assets/heroimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full px-4 md:flex-row  ">
        <div className="flex flex-col h-full justify-center">
          {/* Full Stack developer and description */}
          <h2 className="text-6xl font-bold capitalize  text-white">
            I'm frontend developer
          </h2>
          <p className="py-4  text-gray-300 max-w-lg">
            Passionate web developer, Currently I love to work on web
            development using React Native, Next, Tailwind CSS,Blockchain, Node
            JS and other exciting technologies
          </p>

          {/* Portfolio Button */}

          <div>
            <Link to="Portfolio" smooth duration={800}>
              <button className="group flex justify-around items-center bg-blue-600 p-1 pl-2 rounded-lg text-white hover:bg-blue-500 baseline">
                Portfolio
                <span>
                  <MdOutlineKeyboardArrowRight
                    className="group-hover:rotate-90 duration-300"
                    size={30}
                  />
                </span>
              </button>
            </Link>
          </div>

          {/* Hero Image */}
        </div>
        <div>
          <img
            src={Hero}
            alt="Hero"
            className="rounded-2xl  mx-auto w-2/3 max-w-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
