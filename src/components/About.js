import React from "react";

function About() {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-50"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full w-full">
        <div className="pb-8">
          <p className="border-b-4 inline border-gray-500 text-4xl font-bold">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Passionate Blockchain and Web Developer having knowledge about Web3
          development, MERN full stack web development and Automation using
          Python and UiPath. With a strong attention to detail and ability to
          function well in team setting. Looking for a blockchain or web
          developer job within forward-moving company.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;
