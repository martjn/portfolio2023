import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blob from "./Blob";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Typography } from "@material-tailwind/react";
library.add(faGithub);
library.add(faLinkedin);

const Home = () => {
  return (
    <div className="flex flex-col px-8 justify-center items-center lg:h-screen h-auto mx-auto w-auto lg:max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col container md:gap-10 gap-4 mb-8 lg:mb-0 order-2 lg:order-1 mx-auto text-center lg:text-left">
          <h1 className="font-black text-3xl md:text-6xl">Full-stack Web Developer</h1>
          <span className="text-gray-800 md:text-2xl text-lg text-center lg:text-left">
            Hi, I am Martin Toming. An impassioned Web Developer situated
            in Tartu, Estonia.
          </span>
          <ul className="my-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:justify-start justify-center">
            <Typography as="li" color="blue-gray" className="p-1 font-black">
              <a
                rel="noreferrer"
                href="https://github.com/martjn"
                target="_blank"
                className="flex items-center hover:text-blue-500 transition-colors text-4xl "
              >
                <FontAwesomeIcon icon={["fab", "github"]} aria-hidden="true" />
              </a>
            </Typography>
            <Typography as="li" color="blue-gray" className="p-1 font-black">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/martin-toming-a39001273"
                target="_blank"
                className="flex items-center hover:text-blue-500 transition-colors text-4xl"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  aria-hidden="true"
                />
              </a>
            </Typography>
          </ul>
        </div>
        <div className="flex order-1 lg:order-2 mx-auto">
          <Blob />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center align-middle lg:items-start md:gap-8 gap-4 mb-10">
        <span className="font-bold px-3 text-xl self-center lg:self-center lg:border-r-2 lg:border-r-gray-500 lg:border-b-0 border-b-2 border-r-gray-500 mb-4 lg:mb-0">
          Ecosystem
        </span>

        <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-4 lg:mt-0">
          <img
            className="cursor-pointer transform hover:scale-110 transition-transform max-w-[100px]"
            src="https://skillicons.dev/icons?i=html,css"
            alt="html-css-skill"
          />
          <img
            className="cursor-pointer transform hover:scale-110 transition-transform max-w-[100px]"
            src="https://skillicons.dev/icons?i=sass,tailwind"
            alt="sass-tailwind-skill"
          />
          <img
            className="cursor-pointer transform hover:scale-110 transition-transform max-w-[100px]"
            src="https://skillicons.dev/icons?i=js,ts"
            alt="js-ts-skill"
          />
          <img
            className="cursor-pointer transform hover:scale-110 transition-transform max-w-[100px]"
            src="https://skillicons.dev/icons?i=react,nodejs"
            alt="react-node-skill"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
