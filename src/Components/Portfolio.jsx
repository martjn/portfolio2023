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
      <section id="home" className="bg-gray-50 h-screen px-11 lg:px-0" >
        <Home/>
      </section>
      <section id="about" className="px-11 lg:px-0" >
        <About/>
      </section>
      <section id="projects" className="bg-gray-50 h-auto px-11 pb-10 lg:px-0">
        <Projects/>
      </section>
      <section id="contact" className="px-11 lg:px-0">
        <Contact/>
      </section>
      <Footer/>
    </>
  );
};

export default Portfolio;
