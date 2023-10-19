import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="bg-gray-50 h-auto px-0 lg:px-4 w-full" >
        <Home/>
      </section>
      <section id="about" className="px-0 lg:px-0 h-auto" >
        <About/>
      </section>
      <section id="projects" className="bg-gray-50 h-auto lg:px-4 px-1 lg:pb-10 pb-5">
        <Projects/>
      </section>
      <section id="contact" className="px-3 lg:px-0 h-auto lg:py-10">
        <Contact/>
      </section>
      <Footer/>
    </>
  );
};

export default Portfolio;
