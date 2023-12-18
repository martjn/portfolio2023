import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
library.add(faGithub);
library.add(faLink);

const Projects = () => {
  return (
    <>
      <div className="flex max-w-screen-2xl mx-auto">
        <span className="text-left text-gray-600 font-black text-2xl p-10">
          Portfolio
        </span>
      </div>
      <div className="flex flex-col items-center h-auto mx-auto max-w-screen-2xl gap-y-12">
        <div className="flex lg:gap-20 gap-5 shadow-[0_0px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl mx-12 p-6 bg-white w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 gap-5">
            <a
              className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] rounded-2xl order-1 lg:w-3/5 w-full object-cover h-auto hover:scale-110 transition-transform hover:cursor-pointer"
              target="_blank"
              href="https://postit-crud.vercel.app/"
              rel="noreferrer"
            >
              <img
                className="rounded-xl w-full h-full"
                src="postit.jpg"
                alt="postit"
              />
            </a>
            <div className="order-2 lg:w-2/5 w-full">
              <p className="lg:text-2xl text-lg font-black text-center">
                PostIt
              </p>
              <p className="lg:text-lg text-sm font-bold text-center">( November 2023 )</p>
              <br></br>
              <p className="lg:text-lg text-sm md:text-center text-justify">
                A dynamic and user-friendly application with robust authentication, which also places a strong emphasis on clean design. This platform enables users to seamlessy consume and contribute content or have discussions. It also provides personalized features.
              </p>
              <div className="flex flex-row gap-4 justify-center mt-2">
                <img
                  className="cursor-pointer transform hover:scale-110 transition-transform max-w-[200px] my-3"
                  src="https://skillicons.dev/icons?i=react,nodejs,js,tailwindcss,sequelize,mysql"
                  alt="react-nodejs-js-tailwindcss-sequelize-mysql-skill"
                />
              </div>
              <div className="flex flex-row gap-4 justify-center mt-2">
                <a
                  target="_blank"
                  href="https://postit-crud.vercel.app/"
                  rel="noreferrer"
                  className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg hover:scale-110 transition-transform font-bold"
                >
                  Demo&nbsp;&nbsp;
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={"link"}
                    aria-hidden="true"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/martjn/postit"
                  rel="noreferrer"
                  className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg hover:scale-110 transition-transform font-bold"
                >
                  Source code&nbsp;&nbsp;
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faGithub}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:gap-20 gap-5 shadow-[0_0px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl mx-12 p-6 bg-white w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 gap-5">
            <a
              className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] rounded-2xl lg:order-2 order-1 lg:w-3/5 w-full object-cover h-auto hover:scale-110 transition-transform hover:cursor-pointer"
              target="_blank"
              href="https://folklore.ee/eesti-utlused/"
              rel="noreferrer"
            >
              <img
                className="rounded-xl w-full h-full"
                src="est-proverbs.jpeg"
                alt="est-proverbs"
              />
            </a>
            <div className="lg:order-1 order-2 lg:w-2/5 w-full">
              <p className="lg:text-2xl text-lg font-black text-center">
                Estonian Proverbs Digital Archive
              </p>
              <p className="lg:text-lg text-sm font-bold text-center">( June 2023 )</p>
              <br></br>
              <p className="lg:text-lg text-sm md:text-center text-justify">
                Explore the rich tapestry of Estonian wisdom with a
                comprehensive digital archive dedicated to the nation's
                proverbs. This web application offers users the ability to delve
                into tens of thousands of records, seamlessly search, and
                immerse themselves in the cultural insights of Estonia.
              </p>
              <div className="flex flex-row gap-4 justify-center mt-2">
                <img
                  className="cursor-pointer transform hover:scale-110 transition-transform max-w-[200px] my-3"
                  src="https://skillicons.dev/icons?i=html,css,sass,js"
                  alt="html-css-sass-js-skill"
                />
              </div>
              <div className="flex flex-row gap-4 justify-center mt-2">
                <a
                  target="_blank"
                  href="https://folklore.ee/eesti-utlused/"
                  rel="noreferrer"
                  className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg hover:scale-110 transition-transform font-bold"
                >
                  Demo&nbsp;&nbsp;
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={"link"}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:gap-20 gap-5 shadow-[0_0px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl mx-12 p-6 bg-white  w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 gap-5">
            <a
              className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] rounded-2xl order-1 lg:w-3/5 w-full object-cover h-auto hover:scale-110 transition-transform hover:cursor-pointer"
              target="_blank"
              href="https://martjn.github.io/LogicTools/"
              rel="noreferrer"
            >
              <img
                className="rounded-xl w-full h-full"
                src="LogicTools.jpg"
                alt="LogicTools"
              />
            </a>
            <div className="order-2 lg:w-2/5 w-full">
              <p className="lg:text-2xl text-lg font-black text-center">LogicTools</p>
              <p className="lg:text-lg text-sm font-bold text-center">( December 2022 )</p>
              <br></br>
              <p className="lg:text-lg text-sm md:text-center text-justify">
                This multifaceted site offers a curated set of tools, allowing
                users to seamlessly delve into Morse code and Caesar cipher
                translations, manipulate their structures, and navigate the
                intriguing depths of irrational numbers.
              </p>
              <div className="flex flex-row gap-4 justify-center mt-2">
                <img
                  className="cursor-pointer transform hover:scale-110 transition-transform max-w-[200px] my-3"
                  src="https://skillicons.dev/icons?i=html,css,js"
                  alt="html-css-sass-js-skill"
                />
              </div>
              <div className="flex flex-row gap-4 justify-center mt-2">
                <a
                  target="_blank"
                  href="https://martjn.github.io/LogicTools/"
                  rel="noreferrer"
                  className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg hover:scale-110 transition-transform font-bold"
                >
                  Demo&nbsp;&nbsp;
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={"link"}
                    aria-hidden="true"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/martjn/LogicTools"
                  rel="noreferrer"
                  className="shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg hover:scale-110 transition-transform font-bold"
                >
                  Source code&nbsp;&nbsp;
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faGithub}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
