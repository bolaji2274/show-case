import React, { Suspense } from "react";

import Spinner from "./components/Spinner"

import Navbar from "./sections/Navbar";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

// Use React.lazy for components you want to load asynchronously
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Experiences = React.lazy(() => import('./sections/Experiences'));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      {/* <Hero /> */}
      <Suspense fallback={<Spinner />}>
      <Hero />
    </Suspense>
      {/* <About /> */}
      <Suspense fallback={<Spinner />}>
      <About />
    </Suspense>
      {/* <Projects /> */}
      <Suspense fallback={<Spinner />}>
      <Projects />
    </Suspense>
      {/* <Experiences /> */}
      <Suspense fallback={<Spinner />}>
      <Experiences />
    </Suspense>

      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
