import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4 md:p-6 lg:p-11">
      <div className="flex flex-wrap items-center text-white max-w-screen-2xl mx-auto justify-between">
        <span className="font-thin text-sm md:text-base lg:text-lg mb-2 md:mb-0">
          Copyright 2023, All rights reserved
        </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/martjn/portfolio2023"
          className="font-thin text-xl lg:text-2xl hover:text-light-blue-500 hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
