import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faMapLocationDot);
library.add(faEnvelope);
library.add(faLinkedin);

const Contact = () => {
  return (
    <>
      <div className="flex max-w-screen-2xl mx-auto">
        <h1 className="text-left text-gray-600 font-black text-2xl p-3">
          Contact
        </h1>
      </div>
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-16 max-w-screen-2xl mx-auto mb-20 justify-center">
          <div className="flex flex-row items-center gap-12 lg:order-first order-last lg:pb-0 py-5">
            <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/NmWcEtLk14QyNgN59">
              <div className="flex gap-4 hover:text-light-blue-900 hover:scale-105 transition flex-col lg:flex-row justify-center items-center">
                <span className="text-3xl rounded-full p-3 shadow-lg">
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </span>
                <div className="flex flex-col">
                  <h3 className="text-xl font-black lg:text-left text-center">Location</h3>
                  <span className="text-xl lg:text-left text-center">Tartu, Estonia</span>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-row items-center max-w-screen-2xl gap-y-12 lg:pb-0 py-5">
            <a href="mailto:mingtoming77@gmail.com" rel="noreferrer">
              <div className="flex gap-4 hover:text-light-blue-900 hover:scale-105 transition flex-col lg:flex-row justify-center items-center">
                <span className="text-3xl rounded-full p-3 shadow-lg">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="flex flex-col">
                  <h3 className="text-xl font-black lg:text-left text-center">Email</h3>
                  <span className="text-xl lg:text-left text-center">mingtoming77@gmail.com</span>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-row items-center max-w-screen-2xl gap-y-12 lg:pb-0 py-5">
            <a target="_blank" href="https://linkedin.com/in/martin-toming-a39001273" rel="noreferrer">
              <div className="flex gap-4 hover:text-light-blue-900 hover:scale-105 transition flex-col lg:flex-row justify-center items-center">
                <span className="text-3xl rounded-full p-3 shadow-lg">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <div className="flex flex-col">
                  <h3 className="text-xl font-black lg:text-left text-center">LinkedIn</h3>
                  <span className="text-xl lg:text-left text-center">Page</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
