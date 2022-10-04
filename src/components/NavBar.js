import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between  bg-black  text-white h-20 w-full px-4 items-center fixed">
      <div>
        <h1
          className="text-5xl ml-4 py-4
         font-signature"
        >
          Shyamsunder
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => {
          return (
            <li
              className="cursor-pointer px-4  font-medium text-gray-500 hover:scale-125 duration-200 capitalize"
              key={link.id}
            >
              <Link to={link.link} smooth duration={500}>
                {link.link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className="pr-4 text-gray-500 cursor-pointer z-10 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 md:hidden">
          {links.map((link) => {
            return (
              <li
                className="text-3xl capitalize text-gray-400 py-4 cursor-pointer hover:scale-105 duration-200"
                key={link.id}
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link.link}
                  smooth
                  duration={500}
                >
                  {link.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
