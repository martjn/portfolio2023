import React from "react";

const About = () => {
  return (
    <div className="h-1/2 w-full 2xl:w-3/4 mx-auto mt-48 mb-48">
      <div className="flex lg:flex-row flex-col w-full container mx-auto gap-8 lg:gap-24">
        <div className="flex container text-center justify-center mb-4 lg:mb-0 flex-shrink-0 lg:w-1/3">
          <div className="rounded-lg">
            <img
              className="rounded-3xl h-auto w-auto object-cover"
              src="tartu-view.jpg"
              alt="tartu-view"
            />
          </div>
        </div>
        <h1 className="container lg:w-2/3">
          <h1 className="text-center lg:text-left text-xl font-black text-gray-600">
            About Me
          </h1>
          <p className="text-center lg:text-left mt-2 text-left text-2xl font-black">
            A Junior Software Developer based in Tartu, Estonia
          </p>
          <p className="mt-2 text-justify text-gray-700">
            I possess a notable array of expertise in technologies such as HTML,
            CSS, Tailwind, JavaScript, React, and NodeJS.
          </p>
          <p className="mt-2 text-justify text-gray-700">
            I specialize in crafting responsive web apps that offer users a
            seamless experience, underpinned by efficient and scalable code.
          </p>
          <p className="mt-2 text-gray-700 text-justify">
            I'm driven by understanding the mechanics behind technology, and
            applying this knowledge to real-world challenges, both in
            cooperation with a team or solo.
          </p>
        </h1>
      </div>
    </div>
  );
};

export default About;
