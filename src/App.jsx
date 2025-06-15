import React from "react";
import Navbar from "src/sections/navbar";
import Hero from "src/sections/Hero";
import About from "src/sections/About";
import Projects from "src/sections/Projects";
import Experiences from "src/sections/Experiences";
import Testimonial from "src/sections/Testimonial";
import Contact from "src/sections/Contact";
import Footer from 'src/sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
