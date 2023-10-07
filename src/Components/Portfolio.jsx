import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import Home from "./Home";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="bg-gray-50 h-screen px-11 lg:px-0" >
        <Home/>
      </section>
      <section id="about">
    
      </section>
    </>
  );
};

export default Portfolio;
