import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const links = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/shyamsunder-m/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/sam13007",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:shyam13007@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
  },
];
function SocialLinks() {
  return (
    // btn fixed layout
    <div className="flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {/* Btn structure */}

        {/* Link */}
        {links.map((link) => {
          return (
            <li
              className={
                "hidden lg:flex justify-between items-center h-14 px-4 w-40 bg-slate-600 text-gray-100 ml-[-100px] hover:ml-[0px] duration-300" +
                " " +
                link.style
              }
              key={link.id}
            >
              <a
                href={link.href}
                className="flex justify-between items-center w-full font-semibold"
                target="_blank"
                rel="noreferrer"
                download="true"
              >
                <>{link.child}</>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
