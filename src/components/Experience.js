import React from "react";
import html from "../assets/html5.png";
import css from "../assets/CSS.png";
import javascript from "../assets/javascript.png";
import react from "../assets/React.png";
import tailwind from "../assets/tailwind.png";
import NodeJs from "../assets/nodejs.png";
import github from "../assets/github.png";
import solidity from "../assets/solidity.png";
import Python from "../assets/Python.png";

function Experience() {
  const technologies = [
    {
      id: 1,
      name: "HTML",
      imgSrc: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      name: "CSS",
      imgSrc: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      name: "JavaScript",
      imgSrc: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      name: "React",
      imgSrc: react,
      style: "shadow-[#00D7FE]",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      imgSrc: tailwind,
      style: "shadow-[#01B7D6]",
    },
    {
      id: 6,
      name: "Node JS",
      imgSrc: NodeJs,
      style: "shadow-[#80BD01]",
    },
    {
      id: 7,
      name: "Github",
      imgSrc: github,
      style: "shadow-gray-300",
    },
    {
      id: 8,
      name: "Python",
      imgSrc: Python,
      style: "shadow-[#FFD545]",
    },
    {
      id: 9,
      name: "Solidity",
      imgSrc: solidity,
      style: "shadow-[#8B93B3]",
    },
  ];
  return (
    <div className="h-screen w-full bg-gradient-to-b  from-gray-800 to-black text-white">
      <div className="flex flex-col justify-center max-w-screen-lg h-full  w-full mx-auto">
        {/* Title */}
        <div className="pb-10">
          <p className="border-b-4 inline border-gray-500 text-4xl font-bold">
            Experience
          </p>
          <p className="py-6"> These are the technologies I've worked with</p>
        </div>

        {/* grid technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full text-center py-8 px-12 sm:px-0">
          {technologies.map((tech) => {
            return (
              <div
                className={
                  "shadow-md rounded-lg hover:scale-105 duration-300" +
                  " " +
                  tech.style
                }
                key={tech.id}
              >
                <img src={tech.imgSrc} alt="html" className="mx-auto w-20" />
                <p className="mt-4">{tech.name} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
