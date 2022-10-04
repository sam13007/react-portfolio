import React from "react";
import hulu from "../assets/huluClone.png";
import vote from "../assets/voting.jpeg";
import nftMarket from "../assets/nftMarket.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      imageSrc: hulu,
      isDemo: true,
      demoLink: "https://hulucloneshyam.vercel.app/",
      codeLink: "https://github.com/sam13007/huluClone",
    },
    {
      id: 2,
      imageSrc: vote,
      isDemo: false,
      codeLink: "https://github.com/sam13007/true-vote",
    },
    {
      id: 3,
      imageSrc: nftMarket,
      isDemo: false,
      codeLink: "https://github.com/sam13007/NFT_marketplace",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="flex flex-col justify-center h-full  max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="pb-8">
          <p className=" text-4xl border-b-4 inline border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Portfolio grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-15 mx-10 sm:px-0">
          {/* portfolio mapping */}
          {portfolios.map((portfolio) => {
            return (
              <div
                key={portfolio.id}
                className="shadow-lg shadow-gray-600 rounded-lg"
              >
                <img
                  src={portfolio.imageSrc}
                  alt="Hulu project"
                  className="hover:scale-105 duration-300 rounded-md"
                />
                <div className="flex items-center justify-center ">
                  {portfolio.isDemo ? (
                    <button className="w-1/2 py-4 hover:scale-110 duration-200">
                      <a
                        href={portfolio.demoLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </button>
                  ) : null}
                  <button className="w-1/2 py-4 hover:scale-110 duration-200">
                    <a
                      href={portfolio.codeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
